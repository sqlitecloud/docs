/**
 * Ingest this repository's documentation into the blog pipeline's knowledge base.
 *
 *   node .github/scripts/ingest-blog-kb.mjs
 *
 * Environment:
 *   BLOG_KB_CONNECTION_STRING   sqlitecloud://…/docs.sqlite?apikey=…
 *   VECTORS_SPACE_API_KEY       embedding provider key for sqlite-memory
 *
 * ─────────────────────────────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS ALONGSIDE search.yml AND aisearch.yaml
 *
 * Those two already ingest this repo on every push, and neither can be reused:
 *
 *   docsearch-action    →  documentation.sqlite      full-text search
 *   aisearch-action     →  documentation_ai.sqlite   sqlite-VECTOR: chunks/sentences + vector_init
 *   this               →  docs.sqlite               sqlite-MEMORY: memory_add_content/memory_search
 *
 * The blog pipeline reads through `memory_search` and `dbmem_content`, which only sqlite-memory provides.
 * Different extension, different schema.
 *
 * It also captures something the others do not: WHEN EACH DOCUMENT LAST CHANGED, taken from git. The
 * pipeline can write three kinds of article, and one of them — an announcement — is only honest if we know
 * a page genuinely changed. Inferring that from ingest timestamps does not work: a full re-ingest restamps
 * every page and the signal goes silent. So the date comes from `git log`, and lands in doc_meta.updated_at.
 *
 * Requires a full checkout (`fetch-depth: 0`); a shallow clone has no history to read dates from.
 * ─────────────────────────────────────────────────────────────────────────────────────────────────────
 */
import { Database } from "@sqlitecloud/drivers";
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

const CONN = process.env.BLOG_KB_CONNECTION_STRING;
const VKEY = process.env.VECTORS_SPACE_API_KEY;
if (!CONN || !VKEY) {
  console.error("Set BLOG_KB_CONNECTION_STRING and VECTORS_SPACE_API_KEY.");
  process.exit(1);
}

const ROOT = process.cwd();
const DOCS_BASE = process.env.DOCS_BASE_URL || "https://docs.sqlitecloud.io";
const CONTEXT = "sqlite-cloud-docs";

// ---------------------------------------------------------------------------------------------------
// Which files count as documentation
// ---------------------------------------------------------------------------------------------------

/** Directories that hold no published documentation. */
const SKIP_DIRS = new Set(["node_modules", ".git", ".github", "dist", "build", "public", "assets"]);

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || SKIP_DIRS.has(e.name)) continue;
    const full = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (/\.mdx?$/i.test(e.name)) out.push(full);
  }
  return out;
}

function frontmatterField(content, field) {
  const fm = content.match(/^﻿?---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return null;
  const m = fm[1].match(new RegExp(`^\\s*${field}:\\s*["']?([^"'\\r\\n]+?)["']?\\s*$`, "m"));
  return m ? m[1].trim() : null;
}

/**
 * Whether a file is published documentation.
 *
 * Drafts are excluded rather than ingested-and-hidden. A draft page is not on the site, so an article
 * citing it would link to a 404 — and an ANNOUNCEMENT about an unreleased feature is worse than a broken
 * link. Files beginning with `_` are partials and work-in-progress by this repo's convention.
 */
function isPublished(content, relPath) {
  if (relPath.split("/").some((seg) => seg.startsWith("_"))) return false;
  return frontmatterField(content, "status") !== "draft";
}

function docUrl(content, relPath) {
  const slug = frontmatterField(content, "slug");
  const id = slug || relPath.replace(/\.[^/.]+$/, "").toLowerCase();
  return `${DOCS_BASE}/docs/${id}`;
}

// ---------------------------------------------------------------------------------------------------
// When each document last changed
// ---------------------------------------------------------------------------------------------------

/**
 * path → unix seconds of the last commit that touched it.
 *
 * One `git log` pass over the whole history rather than a call per file: 251 files would otherwise be 251
 * process spawns, and this reads the same information once. `--name-only` prints a timestamp followed by
 * the files that commit touched, newest first, so the FIRST time a path appears is its latest change.
 *
 * Renames are not followed. A renamed page reads as changed on the rename, which is the honest answer for
 * this purpose — its URL changed, so as far as a reader is concerned it is new.
 */
function lastChangedByPath() {
  const out = execFileSync("git", ["log", "--pretty=format:@%ct", "--name-only", "--no-renames"], {
    cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024,
  });

  const dates = new Map();
  let ts = 0;
  for (const line of out.split("\n")) {
    if (line.startsWith("@")) { ts = Number(line.slice(1)) || 0; continue; }
    const path = line.trim();
    // First sighting wins: the log is newest-first, so anything later is an older commit.
    if (path && ts && !dates.has(path)) dates.set(path, ts);
  }
  return dates;
}

// ---------------------------------------------------------------------------------------------------
// The knowledge base
// ---------------------------------------------------------------------------------------------------

const DB_NAME = (CONN.match(/\/([^/?]+)\?/) || [])[1] || "docs.sqlite";

let db;
async function connect() {
  try { await db?.close(); } catch { /* replacing it anyway */ }
  db = new Database(CONN);
  // SET only writes a setting; USE is what loads the plugin for this connection.
  await db.sql(`SET DATABASE ${DB_NAME} KEY sqlite-memory TO true`);
  await db.sql(`USE DATABASE ${DB_NAME}`);
  await db.sql(`SELECT memory_set_apikey(?)`, VKEY);
  await db.sql(`SELECT memory_set_model('llama', 'embeddinggemma-300m')`);
  // Add fast, embed in batches. Inline embedding is very slow over 250 documents.
  await db.sql(`SELECT memory_set_option('defer_embeddings', 1)`);
}

async function exec(sql, ...params) {
  let lastErr;
  for (let i = 0; i < 4; i++) {
    try { return await db.sql(sql, ...params); }
    catch (e) { lastErr = e; await connect(); }
  }
  throw lastErr;
}

async function main() {
  const files = walk(ROOT)
    .map((abs) => ({ abs, path: relative(ROOT, abs), content: readFileSync(abs, "utf8") }))
    .filter((f) => isPublished(f.content, f.path));

  const total = walk(ROOT).length;
  console.log(`${files.length}/${total} published documents (drafts and partials excluded)`);

  const changed = lastChangedByPath();
  const dated = files.filter((f) => changed.has(f.path)).length;
  console.log(`${dated}/${files.length} have a commit date; the rest fall back to now`);

  await connect();

  // ---- content -----------------------------------------------------------------------------------
  // memory_add_content is content-hashed, so re-ingesting an unchanged page is a no-op. That is what
  // makes running this on every push cheap.
  let added = 0;
  const failed = [];
  for (const f of files) {
    try { await exec(`SELECT memory_add_content(?, ?, ?)`, f.path, f.content, CONTEXT); added++; }
    catch (e) { failed.push(f.path); console.error(`  ! ${f.path}: ${e.message}`); }
  }
  console.log(`added ${added}/${files.length}${failed.length ? ` (${failed.length} failed)` : ""}; embedding…`);

  let pending = Number((await exec(`SELECT memory_pending_count() AS n`))[0]?.n ?? 0);
  for (let i = 0; pending > 0 && i < 5000; i++) {
    await exec(`SELECT memory_embed_pending()`);
    pending = Number((await exec(`SELECT memory_pending_count() AS n`))[0]?.n ?? 0);
  }
  console.log(`embedded; ${pending} still pending`);

  // ---- metadata ----------------------------------------------------------------------------------
  // url      so an article's Sources list links somewhere real
  // updated_at  so `announcement` topics rest on a document actually changing, not on ingest jitter
  await exec(`CREATE TABLE IF NOT EXISTS doc_meta (
    path TEXT PRIMARY KEY, url TEXT, slug TEXT, updated_at INTEGER
  )`);
  // Older KBs predate the column; adding it is safe to attempt and safe to fail.
  try { await exec(`ALTER TABLE doc_meta ADD COLUMN updated_at INTEGER`); } catch { /* already there */ }

  const now = Math.floor(Date.now() / 1000);
  for (const f of files) {
    await exec(
      `INSERT INTO doc_meta(path, url, slug, updated_at) VALUES(?,?,?,?)
       ON CONFLICT(path) DO UPDATE SET url=excluded.url, slug=excluded.slug, updated_at=excluded.updated_at`,
      f.path, docUrl(f.content, f.path), frontmatterField(f.content, "slug"), changed.get(f.path) ?? now,
    );
  }
  console.log(`doc_meta: ${files.length} rows`);

  // A page removed from the repo should stop being cited. The content stays in sqlite-memory — removing it
  // is the extension's business — but dropping the metadata takes it out of every Sources list.
  const keep = files.map((f) => f.path);
  if (keep.length) {
    const holes = keep.map(() => "?").join(",");
    const gone = await exec(`SELECT COUNT(*) AS n FROM doc_meta WHERE path NOT IN (${holes})`, ...keep);
    const n = Number(gone[0]?.n ?? 0);
    if (n) {
      await exec(`DELETE FROM doc_meta WHERE path NOT IN (${holes})`, ...keep);
      console.log(`removed ${n} doc_meta row(s) for pages no longer in the repo`);
    }
  }

  const newest = await exec(`SELECT path, updated_at FROM doc_meta ORDER BY updated_at DESC LIMIT 3`);
  console.log("most recently changed:");
  for (const r of newest) console.log(`  ${new Date(Number(r.updated_at) * 1000).toISOString().slice(0, 10)}  ${r.path}`);

  await db.close();
  process.exit(failed.length ? 1 : 0);
}

main().catch(async (e) => {
  console.error("ingest failed:", e.message);
  try { await db?.close(); } catch { /* nothing left to do */ }
  process.exit(1);
});

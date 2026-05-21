---
title: "SQLite-Memory Examples"
description: "Examples for building AI agents with persistent memory and syncing memory across agents."
category: platform
status: publish
slug: sqlite-memory-examples
---

## Intelligent Sync

All `memory_add_*` functions use content-hash change detection to avoid redundant work:

- **`memory_add_text`**: Computes a hash of the content. If the same content was already indexed, it is skipped entirely. No duplicate embeddings are ever created.
- **`memory_add_file`**: Reads the file and hashes its content. If the file was previously indexed with different content, the old entry (chunks, embeddings, FTS) is atomically replaced. Unchanged files are skipped.
- **`memory_add_directory`**: Performs a full two-phase sync:
  1. **Cleanup**: Removes database entries for files that no longer exist on disk
  2. **Scan**: Recursively processes all matching files - adding new ones, replacing modified ones, and skipping unchanged ones

`memory_add_text()` and `memory_add_file()` each run inside a SQLite SAVEPOINT transaction. `memory_add_directory()` performs its cleanup pass transactionally and then processes each file in its own transaction. If one file fails, that file rolls back cleanly and previously-committed files remain valid; there are no partially-indexed rows or orphaned chunk/FTS entries for the failed file.

This makes all sync functions safe to call repeatedly - for example, on a cron schedule or at agent startup - with minimal overhead.

## Agent Memory Sync

Multiple agents can share and merge knowledge without any coordination. Each agent works independently with its own local SQLite database, syncing through a shared [SQLiteCloud](https://sqlitecloud.io/) managed database when connectivity is available.

Enable sync on a database connection before ingesting content:

```sql
-- Enable CRDT sync (optionally scoped to a specific context)
SELECT memory_enable_sync();               -- sync all memory
SELECT memory_enable_sync('project-x');   -- sync only the 'project-x' context

-- Connect to the shared cloud database
SELECT cloudsync_network_init('your-managed-database-id');
SELECT cloudsync_network_set_apikey('your-api-key');

-- Ingest content normally — CRDT tracks every write
SELECT memory_add_text('Agent A findings...', 'research');

-- Push local changes and pull remote ones (call twice for full bidirectional exchange)
SELECT cloudsync_network_sync(500, 3);
SELECT cloudsync_network_sync(500, 3);

-- Generate embeddings for any content received from other agents
SELECT memory_reindex();
```

Each piece of text added to the database is parsed into chunks and tracked by a [block-level LWW CRDT algorithm](https://github.com/sqliteai/sqlite-sync?tab=readme-ov-file#block-level-lww), which merges line-level changes from concurrent agents without conflicts. Only the `dbmem_content` table is synced — embeddings are always generated locally after receiving new content.

### Why This Matters for AI Systems

The combination of local-first memory and CRDT sync enables agent architectures that are not possible with centralized databases:

- **No single point of failure** — each agent has a complete, queryable copy of shared memory
- **Offline-capable** — agents ingest and search without network access; sync catches up when connectivity returns
- **Selective sharing** — `memory_enable_sync('context')` limits sync to a named context, so agents can keep private memory separate from shared memory
- **Scales to many agents** — agents running on different nodes accumulate knowledge in parallel and merge into a single consistent corpus without coordination

### Working Example

[`test/sync/`](https://github.com/sqliteai/sqlite-memory/tree/main/test/sync) contains a full integration test that walks through the entire flow:

- Agent A indexes knowledge about the James Webb Space Telescope
- Agent B indexes knowledge about the Great Barrier Reef
- After sync, **both agents can answer questions about both topics** — knowledge each agent never directly indexed

See [`test/sync/README.md`](https://github.com/sqliteai/sqlite-memory/tree/main/test/sync) for the complete integration test flow and SQLite Cloud account configuration.

## Use Cases

- **AI Assistants**: Maintain conversation history and user preferences
- **Documentation Search**: Semantic search over markdown documentation
- **Knowledge Bases**: Build searchable knowledge repositories
- **Note-Taking Apps**: Find notes by meaning, not just keywords
- **Code Understanding**: Index and search code documentation
- **Personal Memory**: Store and retrieve personal knowledge

## sqlmem Examples

Practical examples for common `sqlmem` workflows.

## Initialize A Project

Create `.sqlmem.json`, create the SQLite database, and configure the embedding model.

```sh
sqlmem init --model /models/nomic-embed-text-v1.5.Q8_0.gguf
```

Use a custom extension cache directory:

```sh
sqlmem init \
  --extensions-dir ~/.cache/sqlmem/extensions \
  --model /models/nomic-embed-text-v1.5.Q8_0.gguf
```

## Use Remote Embeddings

When an API key is present, `sqlmem` configures sqlite-memory for remote embeddings.

```sh
sqlmem init \
  --api-key "$sqlmem_API_KEY" \
  --model text-embedding-3-small
```

You can also set the API key through the environment:

```sh
export sqlmem_API_KEY="..."
sqlmem init --model text-embedding-3-small
```

Precedence is:

1. `--api-key`
2. `sqlmem_API_KEY`
3. `.sqlmem.json`

## Add Sources

Add a directory:

```sh
sqlmem add ./docs
```

Add one Markdown file:

```sh
sqlmem add ./README.md
```

Add multiple sources in one command:

```sh
sqlmem add ./docs ./notes/project.md
```

Use repeated `--source` flags:

```sh
sqlmem add -s ./docs -s ./notes/project.md
```

Attach a context label to added content:

```sh
sqlmem add ./docs --context product-docs
```

## Add PDFs

PDF indexing is disabled by default because it requires a separate conversion/OCR step. Enable it explicitly first:

```sh
sqlmem config set pdf.enabled true
```

PDF files are then converted to Markdown before indexing.

```sh
sqlmem add ./papers/sqlite-memory-overview.pdf
```

Use a custom PDF cache directory:

```sh
sqlmem --pdf-cache-dir ~/.cache/sqlmem/pdf add ./papers/report.pdf
```

Disable PDF support again:

```sh
sqlmem config set pdf.enabled false
```

## Search

Search with a positional query:

```sh
sqlmem search "hybrid search with sqlite"
```

Search with flags:

```sh
sqlmem search -q "embedding cache behavior" --limit 5
```

Return JSON for scripts:

```sh
sqlmem search -q "vector extension load order" --limit 10 --json
```

Pipe JSON to `jq`:

```sh
sqlmem search -q "pdf cache" --json | jq '.[].path'
```

## Watch Sources

Watch sources already stored in `.sqlmem.json`:

```sh
sqlmem watch
```

Watch explicit paths for the current session:

```sh
sqlmem watch ./docs ./notes/project.md
```

Use a shorter debounce window:

```sh
sqlmem watch --debounce 200ms
```

## Inspect Status

Show database path, source count, embedding selection, PDF cache, and indexed counts:

```sh
sqlmem status
```

Show the full configuration:

```sh
sqlmem config
```

## Edit Configuration

Set the default search limit:

```sh
sqlmem config set options.max_results 10
```

Lower the minimum score:

```sh
sqlmem config set options.min_score 0.65
```

Disable embedding cache:

```sh
sqlmem config set options.embedding_cache false
```

Set supported indexed file extensions:

```sh
sqlmem config set options.extensions "md,mdx,txt"
```

Opt into reStructuredText explicitly:

```sh
sqlmem config set options.extensions "md,mdx,txt,rst"
```

## MCP Server

Start the MCP server over stdio:

```sh
sqlmem mcp --transport stdio
```

Start the MCP server over HTTP:

```sh
sqlmem mcp --transport http --addr 127.0.0.1:8765
```

Available MCP tools:

```text
memory_search
memory_add_file
memory_add_directory
memory_add_text
memory_clear
memory_delete
memory_delete_context
memory_reindex
memory_status
```

## Remove Sources

Remove a configured source from `.sqlmem.json`:

```sh
sqlmem remove ./docs
```

## Reindex Or Clear

Reindex all stored memory:

```sh
sqlmem reindex
```

Clear all memory content:

```sh
sqlmem clear
```

Reset the project by deleting the configured database and `.sqlmem.json`:

```sh
sqlmem reset
```

## Interactive Mode

Run without a subcommand to open the interactive prompt:

```sh
sqlmem
```

Inside the prompt:

```text
sqlmem> status
sqlmem> search "release notes"
sqlmem> add ./notes
sqlmem> quit
```

Command history is available with the up and down arrow keys.

## Script Examples

Fail if no results are returned:

```sh
results="$(sqlmem search -q "database migration" --json)"
count="$(printf '%s' "$results" | jq 'length')"
test "$count" -gt 0
```

Index all Markdown files changed in the current Git branch:

```sh
git diff --name-only main...HEAD -- '*.md' '*.mdx' |
while IFS= read -r file; do
  [ -f "$file" ] && sqlmem add "$file"
done
```

Create a project-local database name:

```sh
sqlmem init --model /models/nomic-embed-text-v1.5.Q8_0.gguf
sqlmem config set database ".cache/project-memory.sqlite"
```

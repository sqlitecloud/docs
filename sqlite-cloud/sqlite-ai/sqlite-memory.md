---
title: "SQLite-Memory"
description: "Persistent, searchable memory for AI agents using SQLite, vector search, FTS5, and markdown-aware chunking."
category: platform
status: publish
slug: sqlite-memory
---

A SQLite extension that gives AI agents persistent, searchable memory, optimized for markdown content. Features hybrid semantic search (vector similarity + FTS5), markdown-aware chunking, and local embedding via llama.cpp.

Agent memory databases can be synchronized between agents using **offline-first technology** via [sqlite-sync](https://github.com/sqliteai/sqlite-sync). Each agent works independently and syncs when connected, making it ideal for distributed AI systems, edge deployments, and collaborative agent architectures.

<div class="not-prose my-6 flex flex-wrap items-center gap-2">
  <span class="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
    Installed by default in SQLite Cloud
  </span>
  <a class="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-900 hover:border-slate-300" href="https://github.com/sqliteai/sqlite-memory" target="_blank" rel="noopener noreferrer">
    GitHub: https://github.com/sqliteai/sqlite-memory
  </a>
</div>

## The Future of AI Agent Memory

Modern AI agents need persistent, searchable memory to maintain context across conversations and tasks. Inspired by [OpenClaw's memory architecture](https://docs.openclaw.ai/concepts/memory), sqlite-memory implements what we believe will become the de facto standard for AI agent memory systems: **markdown files as the source of truth**.

In this paradigm:
- **Markdown files** serve as human-readable, version-controllable knowledge bases
- **Embeddings** enable semantic understanding and retrieval
- **Hybrid search** combines the precision of full-text search with the intelligence of vector similarity

sqlite-memory bridges these concepts, allowing any SQLite-powered application to ingest, store, and semantically search over knowledge bases.

## Why sqlite-memory?

### For AI Agent Developers

- **Persistent Memory**: Give your agents long-term memory that survives restarts
- **Semantic Recall**: Retrieve relevant context based on meaning, not just keywords
- **Context Isolation**: Organize memories by context (projects, conversations, topics)
- **Local-First**: Run entirely on-device with local embedding models - no API costs, no latency, no data leaving your system

### For Application Developers

- **Zero Infrastructure**: No vector database servers to deploy - it's just SQLite
- **Single File**: Your entire knowledge base lives in one portable `.db` file
- **SQL Interface**: Query your semantic memory using familiar SQL
- **Embeddable**: Works anywhere SQLite works - mobile, desktop, edge, WASM

### Technical Advantages

- **Hybrid Search**: Combines vector similarity (cosine distance) with FTS5 full-text search for superior retrieval
- **Smart Chunking**: Markdown-aware parsing preserves semantic boundaries
- **Intelligent Sync**: Content-hash change detection skips unchanged files, atomically replaces modified ones, and cleans up deleted ones
- **Transactional Safety**: Text/file ingests run inside SAVEPOINT transactions, and directory sync uses transactional cleanup plus per-file transactional updates so failed files do not leave partial rows behind
- **Efficient Storage**: Binary embeddings with configurable dimensions
- **Embedding Cache**: Automatically caches computed embeddings, so re-indexing the same text skips redundant API calls and computation
- **Flexible Embedding**: Use local models (llama.cpp) or [vectors.space](https://vectors.space) remote API

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Your Application                        │
├─────────────────────────────────────────────────────────────┤
│                      sqlite-memory                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   Parser    │  │  Embedding  │  │   Hybrid Search     │  │
│  │  (md4c)     │  │ (llama.cpp) │  │ (vector + FTS5)     │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                   sqlite-vector                             │
├─────────────────────────────────────────────────────────────┤
│                      SQLite                                 │
└─────────────────────────────────────────────────────────────┘
```

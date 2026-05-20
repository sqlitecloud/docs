---
title: "Introduction to SQLite-Sync"
description: "Introduction to SQLite-Sync"
category: platform
status: publish
slug: sqlite-sync-introduction
---

[![sqlite-sync coverage](https://img.shields.io/badge/dynamic/regex?url=https%3A%2F%2Fsqliteai.github.io%2Fsqlite-sync%2F&search=Functions%3A%3C%5C%2Ftd%3E%5Cs*%3Ctd%20class%3D%22headerCovTableEntry(?:Hi|Med|Lo)%22%3E(%5B%5Cd.%5D%2B)%26nbsp%3B%25&replace=%241%25&label=coverage&labelColor=rgb(85%2C%2085%2C%2085)%3B&color=rgb(167%2C%20252%2C%20157)%3B&link=https%3A%2F%2Fsqliteai.github.io%2Fsqlite-sync%2F)](https://sqliteai.github.io/sqlite-sync/)

**SQLite Sync** is a multi-platform extension that turns any SQLite database into a **conflict-free, offline-first replica** that syncs automatically with **[SQLite Cloud](https://sqlitecloud.io/)** nodes, **PostgreSQL** servers, and **Supabase** instances. One function call is all it takes: no backend to build, no sync protocol to implement.

Built on **CRDT** (Conflict-free Replicated Data Types), it guarantees:

- **No data loss.** Devices update independently, even offline, and all changes merge automatically.
- **No conflicts.** Deterministic merge, no manual conflict resolution, ever.
- **No extra infrastructure.** A globally distributed network of **CloudSync microservices** handles routing, packaging, and delivery of changes between SQLite and other DBMS nodes.

## Why SQLite Sync?

**For offline-first apps** (mobile, desktop, IoT, edge): devices work with a local SQLite database and sync when connectivity is available. Changes queue locally and merge seamlessly on reconnect.

**For AI agents**: agents that maintain memory, notes, or shared state in SQLite can sync across instances without coordination. **[Block-Level LWW](#block-level-lww)** was specifically designed to keep **markdown files** in sync: multiple agents editing different sections of the same document preserve all changes after sync.

## What Can You Build with SQLite Sync?

### Offline-First Apps
- **Shared To-Do Lists**: users independently update tasks and sync effortlessly.
- **Note-Taking Apps**: real-time collaboration with offline editing.
- **Field Data Collection**: for remote inspections, agriculture, or surveys.
- **Point-of-Sale Systems**: offline-first retail solutions with synced inventory.

### AI Agent Sync
- **Agent Memory**: multiple agents share and update a common SQLite database, syncing state across instances without coordination.
- **Markdown Knowledge Bases**: agents independently edit different sections of shared markdown documents, with Block-Level LWW preserving all changes.
- **Distributed Pipelines**: agents running on different nodes accumulate results locally and merge them into a single consistent dataset.

### Enterprise and Multi-Tenant
- **CRM Systems**: sync leads and clients per user with row-level access control.
- **SaaS Platforms**: row-level access for each user or team using a single shared database.
- **Project Management Tools**: offline-friendly planning and task management.

### Personal Apps
- **Journaling and Diaries**: private entries that sync across devices.
- **Habit Trackers**: sync progress with data security and consistency.
- **Bookmarks and Reading Lists**: personal or collaborative content management.

## Key Features

| Feature | Description |
|---------|-------------|
| **CRDT-based sync** | Causal-Length Set, Delete-Wins, Add-Wins, and Grow-Only Set algorithms |
| **Block-Level LWW** | Line-level merge for text/markdown columns, concurrent edits to different lines are preserved |
| **Built-in networking** | Embedded network layer (libcurl or native), single function call to sync |
| **Row-Level Security** | Server-enforced RLS: each client syncs only the rows it is authorized to see |
| **Multi-platform** | Linux, macOS, Windows, iOS, Android, WASM |

---
title: "SQLite-Sync Getting Started"
description: "SQLite-Sync Getting Started"
category: platform
status: publish
slug: sqlite-sync-getting-started
---

## Quick Start

### 1. Install

Download a pre-built binary from the [Releases](https://github.com/sqliteai/sqlite-sync/releases) page, or install a platform package (see [full installation guide](/docs/sqlite-sync-installation) for platform-specific code examples):

| Platform | Install |
|----------|---------|
| **SQLite CLI / C** | `.load ./cloudsync` or `SELECT load_extension('./cloudsync');` |
| **Swift** | [Add this repo as a Swift Package dependency](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app), follow [steps 4 and 5](https://github.com/sqliteai/sqlite-extensions-guide/blob/main/platforms/ios.md#4-set-up-sqlite-with-extension-loading), and load extension with `CloudSync.path`  |
| **Android** | `implementation 'ai.sqlite:sync:1.0.0'` ([Maven Central](https://central.sonatype.com/artifact/ai.sqlite/sync)) |
| **Flutter** | `flutter pub add sqlite_sync` ([pub.dev](https://pub.dev/packages/sqlite_sync)) |
| **Expo** | `npm install @sqliteai/sqlite-sync-expo` |
| **React Native** | `npm install @sqliteai/sqlite-sync-react-native` |
| **WASM** | `npm install @sqliteai/sqlite-wasm` ([npm](https://www.npmjs.com/package/@sqliteai/sqlite-wasm)) |

### 2. Create a table and enable sync

```sql
.load ./cloudsync

CREATE TABLE tasks (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL DEFAULT '',
    done INTEGER NOT NULL DEFAULT 0
);

-- Enable CRDT sync on the table
SELECT cloudsync_init('tasks');
```

### 3. Use your database normally

```sql
INSERT INTO tasks (id, title) VALUES (cloudsync_uuid(), 'Buy groceries');
INSERT INTO tasks (id, title) VALUES (cloudsync_uuid(), 'Review PR #42');

UPDATE tasks SET done = 1 WHERE title = 'Buy groceries';

SELECT * FROM tasks;
```

### 4. Sync with the cloud

```sql
-- Connect to your SQLite Cloud managed database
-- (get the managed database ID from the OffSync page on the SQLite Cloud dashboard)
SELECT cloudsync_network_init('your-managed-database-id');
SELECT cloudsync_network_set_apikey('your-api-key');

-- Send local changes and receive remote changes
SELECT cloudsync_network_sync();
-- Returns JSON: {"send":{"status":"synced","localVersion":3,"serverVersion":3},"receive":{"rows":0,"tables":[]}}

-- Call periodically to stay in sync
SELECT cloudsync_network_sync();

-- Before closing the connection
SELECT cloudsync_terminate();
```

### 5. Sync from another device

On a second device (or a second database for testing), repeat the same setup:

```sql
-- Device B: load extension, create the same table, init sync
.load ./cloudsync

CREATE TABLE tasks (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL DEFAULT '',
    done INTEGER NOT NULL DEFAULT 0
);

SELECT cloudsync_init('tasks');

-- Connect to the same cloud database
SELECT cloudsync_network_init('your-managed-database-id');
SELECT cloudsync_network_set_apikey('your-api-key');

-- Pull changes from Device A
SELECT cloudsync_network_sync();
-- Call again: the first call triggers package preparation, the second downloads it
SELECT cloudsync_network_sync();

-- Device A's tasks are now here
SELECT * FROM tasks;

-- Add data from this device
INSERT INTO tasks (id, title) VALUES (cloudsync_uuid(), 'Call the dentist');

-- Send this device's changes to the cloud
SELECT cloudsync_network_sync();

-- Before closing the connection
SELECT cloudsync_terminate();
```

Back on Device A, calling `cloudsync_network_sync()` will pull Device B's changes. The CRDT engine ensures all devices converge to the same data, automatically, with no conflicts.

> **Note:** every device participating in the same sync must create **the same set of tables with the same structure** and initialize each one with `cloudsync_init()`. sqlite-sync derives a schema hash from the synced tables, and the server rejects payloads whose hash it does not recognize. For multi-tenant setups where each client should see only a subset of rows, use a shared schema with a tenant/scope column and enforce isolation with [Row-Level Security](/docs/sqlite-sync-row-level-security) — do not give each client a different table.

## SQLite Cloud Setup

1. Sign up at [SQLite Cloud](https://sqlitecloud.io/) and create a project.
2. Create a database and your tables in the [dashboard](https://dashboard.sqlitecloud.io/).
3. Enable synchronization: click **"OffSync"** for your database and select the tables to sync.
4. Copy the managed database ID and API key from the dashboard.
5. Use `cloudsync_network_init()` and `cloudsync_network_set_apikey()` locally, then call `cloudsync_network_sync()`.

For token-based authentication (required for RLS), use `cloudsync_network_set_token()` instead of `cloudsync_network_set_apikey()`.

## Versioning

This project follows [semver](https://semver.org/). The single source of truth is `CLOUDSYNC_VERSION` in `src/cloudsync.h`; all packaged artifacts (NPM, Maven, pub.dev, Swift, Docker, native tarballs) inherit this version. PATCH releases never alter the exposed API — they ship bug fixes, performance improvements, and internal changes only.

The PostgreSQL extension differs only in how it surfaces the version: its catalog version (`default_version` / `installed_version`) exposes `MAJOR.MINOR` only, so PATCH releases are transparent binary upgrades and only MINOR/MAJOR releases need `ALTER EXTENSION cloudsync UPDATE`. The `cloudsync_version()` SQL function always reports the full semver of the loaded `.so`. See the [PostgreSQL upgrade docs](https://github.com/sqliteai/sqlite-sync/blob/main/docs/postgresql/quickstarts/postgres.md#upgrading-a-later-release) for the user-facing procedure.

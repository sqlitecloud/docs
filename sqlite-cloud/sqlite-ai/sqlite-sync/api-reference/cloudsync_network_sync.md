---
title: SQLite-Sync API Reference - cloudsync_network_sync
description: SQLite Sync is a multi-platform extension that brings a true local-first experience to your applications with minimal effort.
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-network-sync
---

### `cloudsync_network_sync([wait_ms], [max_retries])`

**Description:** Performs a full synchronization cycle. This function has two overloads:

- `cloudsync_network_sync()`: Performs one send operation and one check operation.
- `cloudsync_network_sync(wait_ms, max_retries)`: Performs one send operation and then repeatedly tries to download remote changes until at least one change is downloaded or `max_retries` times has been reached, waiting `wait_ms` between retries.

**Parameters:**

- `wait_ms` (INTEGER, optional): The time to wait in milliseconds between retries. Defaults to 100.
- `max_retries` (INTEGER, optional): The maximum number of times to retry the synchronization. Defaults to 1.

**Returns:** The number of changes downloaded. Errors are reported via the SQLite return code.

**Example:**

```sql
-- Perform a single synchronization cycle
SELECT cloudsync_network_sync();

-- Perform a synchronization cycle with custom retry settings
SELECT cloudsync_network_sync(500, 3);
```

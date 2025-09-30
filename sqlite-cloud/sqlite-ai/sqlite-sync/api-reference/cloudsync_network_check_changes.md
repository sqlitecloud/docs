---
title: SQLite-Sync API Reference - cloudsync_network_check_changes
description: SQLite Sync is a multi-platform extension that brings a true local-first experience to your applications with minimal effort.
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-network-check-changes
---

### `cloudsync_network_check_changes()`

**Description:** Checks the remote server for new changes and applies them to the local database.

If a package of new changes is already available for the local site, the server returns it immediately, and the changes are applied. If no package is ready, the server returns an empty response and starts an asynchronous process to prepare a new package. This new package can be retrieved with a subsequent call to this function.

This function is designed to be called periodically to keep the local database in sync.
To force an update and wait for changes (with a timeout), use `cloudsync_network_sync(wait_ms, max_retries)`.

If the network is misconfigured or the remote server is unreachable, the function returns an error.
On success, it returns `SQLITE_OK`, and the return value indicates how many changes were downloaded and applied.

**Parameters:** None.

**Returns:** The number of changes downloaded. Errors are reported via the SQLite return code.

**Errors:** See [Network Errors](#network-errors) for common error conditions.

**Example:**

```sql
SELECT cloudsync_network_check_changes();
```

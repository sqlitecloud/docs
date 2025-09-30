---
title: SQLite-Sync API Reference - cloudsync_network_cleanup
description: SQLite Sync is a multi-platform extension that brings a true local-first experience to your applications with minimal effort.
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-network-cleanup
---

### `cloudsync_network_cleanup()`

**Description:** Cleans up the `sqlite-sync` network component, releasing all resources allocated by `cloudsync_network_init` (memory, cURL handles).

**Parameters:** None.

**Returns:** None.

**Example:**

```sql
SELECT cloudsync_network_cleanup();
```

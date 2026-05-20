---
title: "cloudsync_network_reset_sync_version()"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-network-reset-sync-version
---

## `cloudsync_network_reset_sync_version()`

**Description:** Resets local synchronization version numbers, forcing the next sync to fetch all changes from the server.

**Parameters:** None.

**Returns:** None.

**Example:**

```sql
SELECT cloudsync_network_reset_sync_version();
```

---

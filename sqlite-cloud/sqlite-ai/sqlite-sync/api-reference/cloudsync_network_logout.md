---
title: "cloudsync_network_logout()"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-network-logout
---

## `cloudsync_network_logout()`

**Description:** Logs out the current user and cleans up all local data from synchronized tables. This function deletes and then re-initializes synchronized tables, useful for switching users or resetting the local database. **Warning:** This function deletes all data from synchronized tables. Use with caution. Consider calling [`cloudsync_network_has_unsent_changes()`](#cloudsync_network_has_unsent_changes) before logout to check for unsent local changes and warn the user before data that has not been fully synchronized to the remote server is deleted.

**Parameters:** None.

**Returns:** None.

**Example:**

```sql
SELECT cloudsync_network_logout();
```

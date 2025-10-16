---
title: "cloudsync_network_logout()"
description: SQLite Sync is a multi-platform extension that brings a true local-first experience to your applications with minimal effort.
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-network-logout
---

**Description:** Logs out the current user and cleans up all local data from synchronized tables. This function deletes and then re-initializes synchronized tables, useful for switching users or resetting the local database. **Warning:** This function deletes all data from synchronized tables. Use with caution.

**Parameters:** None.

**Returns:** None.

**Example:**

```sql
SELECT cloudsync_network_logout();
```

---
title: SQLite-Sync API Reference - cloudsync_is_enabled
description: SQLite Sync is a multi-platform extension that brings a true local-first experience to your applications with minimal effort.
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-is-enabled
---

### `cloudsync_is_enabled(table_name)`

**Description:** Checks if synchronization is enabled for the specified table.

**Parameters:**

- `table_name` (TEXT): The name of the table to check.

**Returns:** 1 if enabled, 0 otherwise.

**Example:**

```sql
SELECT cloudsync_is_enabled('my_table');
```

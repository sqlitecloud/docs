---
title: SQLite-Sync API Reference - cloudsync_disable
description: SQLite Sync is a multi-platform extension that brings a true local-first experience to your applications with minimal effort.
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-disable
---

### `cloudsync_disable(table_name)`

**Description:** Disables synchronization for the specified table.

**Parameters:**

- `table_name` (TEXT): The name of the table to disable.

**Returns:** None.

**Example:**

```sql
SELECT cloudsync_disable('my_table');
```

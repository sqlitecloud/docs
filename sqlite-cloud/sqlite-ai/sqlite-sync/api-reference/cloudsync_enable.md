---
title: SQLite-Sync API Reference - cloudsync_enable
description: SQLite Sync is a multi-platform extension that brings a true local-first experience to your applications with minimal effort.
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-enable
---

### `cloudsync_enable(table_name)`

**Description:** Enables synchronization for the specified table.

**Parameters:**

- `table_name` (TEXT): The name of the table to enable.

**Returns:** None.

**Example:**

```sql
SELECT cloudsync_enable('my_table');
```

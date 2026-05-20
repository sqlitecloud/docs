---
title: "cloudsync_enable(table_name)"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-enable
---

## `cloudsync_enable(table_name)`

**Description:** Enables synchronization for the specified table.

**Parameters:**

- `table_name` (TEXT): The name of the table to enable.

**Returns:** None.

**Example:**

```sql
SELECT cloudsync_enable('my_table');
```

---

---
title: "cloudsync_is_enabled(table_name)"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-is-enabled
---

## `cloudsync_is_enabled(table_name)`

**Description:** Checks if synchronization is enabled for the specified table.

**Parameters:**

- `table_name` (TEXT): The name of the table to check.

**Returns:** 1 if enabled, 0 otherwise.

**Example:**

```sql
SELECT cloudsync_is_enabled('my_table');
```

---

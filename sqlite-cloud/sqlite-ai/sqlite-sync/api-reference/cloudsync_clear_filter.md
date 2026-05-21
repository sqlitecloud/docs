---
title: "cloudsync_clear_filter(table_name)"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-clear-filter
---

## `cloudsync_clear_filter(table_name)`

**Description:** Removes the row-level filter previously set with [`cloudsync_set_filter()`](#cloudsync_set_filtertable_name-filter_expr). After clearing, all row changes in the table are tracked and replicated regardless of column values.

This function updates the stored settings and immediately recreates the sync triggers without a filter condition.

**Parameters:**

- `table_name` (TEXT): The name of the synchronized table.

**Returns:** `1` on success.

**Example:**

```sql
SELECT cloudsync_clear_filter('tasks');
```

---

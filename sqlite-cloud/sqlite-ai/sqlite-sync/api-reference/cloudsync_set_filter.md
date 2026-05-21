---
title: "cloudsync_set_filter(table_name, filter_expr)"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-set-filter
---

## `cloudsync_set_filter(table_name, filter_expr)`

**Description:** Sets a row-level filter expression on a synchronized table. Only rows that match the filter are tracked by the sync triggers; changes to rows that do not satisfy the expression are ignored and never replicated.

The filter expression is a standard SQL boolean expression written using bare column names (without a table or alias prefix). The extension automatically rewrites it with `NEW.` for INSERT/UPDATE triggers and `OLD.` for DELETE triggers. The expression is evaluated inside the trigger `WHEN` clause.

This function stores the filter in the table's settings and immediately recreates the sync triggers to apply it. The filter persists across database reopens. Use [`cloudsync_clear_filter()`](#cloudsync_clear_filtertable_name) to remove it.

**Parameters:**

- `table_name` (TEXT): The name of the synchronized table.
- `filter_expr` (TEXT): A SQL boolean expression referencing column names of the table. Only rows for which this expression evaluates to true are tracked for sync.

**Returns:** `1` on success.

**Example:**

```sql
-- Only sync tasks that are not marked as drafts
SELECT cloudsync_set_filter('tasks', "is_draft = 0");

-- Only sync rows belonging to a specific tenant
SELECT cloudsync_set_filter('orders', "tenant_id = 'acme'");

-- Combine conditions
SELECT cloudsync_set_filter('messages', "deleted = 0 AND type != 'ephemeral'");
```

---

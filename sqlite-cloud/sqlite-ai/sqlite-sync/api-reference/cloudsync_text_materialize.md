---
title: "cloudsync_text_materialize(table_name, col_name, pk_values...)"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-text-materialize
---

## `cloudsync_text_materialize(table_name, col_name, pk_values...)`

**Description:** Reconstructs the full text of a block-level LWW column from its individual blocks and writes the result back to the base table column. This is useful after a merge operation to ensure the column contains the up-to-date materialized text.

After a sync/merge, the column is updated automatically. This function is primarily useful for manual materialization or debugging.

**Parameters:**

- `table_name` (TEXT): The name of the table.
- `col_name` (TEXT): The name of the block-level LWW column.
- `pk_values...` (variadic): The primary key values identifying the row. For composite primary keys, pass each key value as a separate argument in declaration order.

**Returns:** `1` on success.

**Example:**

```sql
-- Materialize the body column for a specific row
SELECT cloudsync_text_materialize('notes', 'body', 'note-001');

-- With a composite primary key (e.g., PRIMARY KEY (tenant_id, doc_id))
SELECT cloudsync_text_materialize('docs', 'body', 'tenant-1', 'doc-001');

-- Read the materialized text
SELECT body FROM notes WHERE id = 'note-001';
```

---

## Helper Functions

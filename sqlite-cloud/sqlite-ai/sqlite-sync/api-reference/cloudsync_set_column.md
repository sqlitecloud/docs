---
title: "cloudsync_set_column(table_name, col_name, key, value)"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-set-column
---

## `cloudsync_set_column(table_name, col_name, key, value)`

**Description:** Configures per-column settings for a synchronized table. This function is primarily used to enable **block-level LWW** on text columns, allowing fine-grained conflict resolution at the line (or paragraph) level instead of the entire cell.

When block-level LWW is enabled on a column, INSERT and UPDATE operations automatically split the text into blocks using a delimiter (default: newline `\n`) and track each block independently. During sync, changes are merged block-by-block, so concurrent edits to different parts of the same text are preserved.

**Parameters:**

- `table_name` (TEXT): The name of the synchronized table.
- `col_name` (TEXT): The name of the text column to configure.
- `key` (TEXT): The setting key. Supported keys:
  - `'algo'` — Set the column algorithm. Use value `'block'` to enable block-level LWW.
  - `'delimiter'` — Set the block delimiter string. Only applies to columns with block-level LWW enabled.
- `value` (TEXT): The setting value.

**Returns:** None.

**Example:**

```sql
-- Enable block-level LWW on a column (splits text by newline by default)
SELECT cloudsync_set_column('notes', 'body', 'algo', 'block');

-- Set a custom delimiter (e.g., double newline for paragraph-level tracking)
SELECT cloudsync_set_column('notes', 'body', 'delimiter', '

');
```

---

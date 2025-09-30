### `cloudsync_cleanup(table_name)`

**Description:** Removes the `sqlite-sync` synchronization mechanism from a specified table or all tables. This operation drops the associated `_cloudsync` metadata table and removes triggers from the target table(s). Use this function when synchronization is no longer desired for a table.

**Parameters:**

- `table_name` (TEXT): The name of the table to clean up.

**Returns:** None.

**Example:**

```sql
-- Clean up a single table
SELECT cloudsync_cleanup('my_table');

```
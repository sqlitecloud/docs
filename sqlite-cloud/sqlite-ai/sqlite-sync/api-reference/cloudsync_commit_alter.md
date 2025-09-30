### `cloudsync_commit_alter(table_name)`

**Description:** Finalizes schema changes for a synchronized table. This function must be called after altering the table's schema, completing the process initiated by `cloudsync_begin_alter` and ensuring CRDT data consistency.

**Parameters:**

- `table_name` (TEXT): The name of the table that was altered.

**Returns:** None.

**Example:**

```sql
SELECT cloudsync_init('my_table');
-- ... later
SELECT cloudsync_begin_alter('my_type');
ALTER TABLE my_table ADD COLUMN new_column TEXT;
SELECT cloudsync_commit_alter('my_table');
```

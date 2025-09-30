### `cloudsync_begin_alter(table_name)`

**Description:** Prepares a synchronized table for schema changes. This function must be called before altering the table. Failure to use `cloudsync_begin_alter` and `cloudsync_commit_alter` can lead to synchronization errors and data divergence.

**Parameters:**

- `table_name` (TEXT): The name of the table that will be altered.

**Returns:** None.

**Example:**

```sql
SELECT cloudsync_init('my_table');
-- ... later
SELECT cloudsync_begin_alter('my_table');
ALTER TABLE my_table ADD COLUMN new_column TEXT;
SELECT cloudsync_commit_alter('my_table');
```

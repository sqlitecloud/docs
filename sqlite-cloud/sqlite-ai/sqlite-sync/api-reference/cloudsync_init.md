### `cloudsync_init(table_name, [crdt_algo], [force])`

**Description:** Initializes a table for `sqlite-sync` synchronization. This function is idempotent and needs to be called only once per table on each site; configurations are stored in the database and automatically loaded with the extension.

Before initialization, `cloudsync_init` performs schema sanity checks to ensure compatibility with CRDT requirements and best practices. These checks include:

- Primary keys should not be auto-incrementing integers; GUIDs (UUIDs, ULIDs) are highly recommended to prevent multi-node collisions.
- All primary key columns must be `NOT NULL`.
- All non-primary key `NOT NULL` columns must have a `DEFAULT` value.

**Schema Design Considerations:**

When designing your database schema for SQLite Sync, follow these essential requirements:

- **Primary Keys**: Use TEXT primary keys with `cloudsync_uuid()` for globally unique identifiers. Avoid auto-incrementing integers.
- **Column Constraints**: All NOT NULL columns (except primary keys) must have DEFAULT values to prevent synchronization errors.
- **UNIQUE Constraints**: In multi-tenant scenarios, use composite UNIQUE constraints (e.g., `UNIQUE(tenant_id, email)`) instead of global uniqueness.
- **Foreign Key Compatibility**: Be aware of potential conflicts during CRDT merge operations and RLS policy interactions.
- **Trigger Compatibility**: Triggers may cause duplicate operations or be called multiple times due to column-by-column processing.

For comprehensive guidelines, see the [Database Schema Recommendations](https://github.com/sqliteai/sqlite-sync/blob/main/README.md#database-schema-recommendations) section.

The function supports three overloads:

- `cloudsync_init(table_name)`: Uses the default 'cls' CRDT algorithm.
- `cloudsync_init(table_name, crdt_algo)`: Specifies a CRDT algorithm ('cls', 'dws', 'aws', 'gos').
- `cloudsync_init(table_name, crdt_algo, force)`: Specifies an algorithm and, if `force` is `true` (or `1`), skips the integer primary key check (use with caution, GUIDs are strongly recommended).

**Parameters:**

- `table_name` (TEXT): The name of the table to initialize.
- `crdt_algo` (TEXT, optional): The CRDT algorithm to use. Can be "cls", "dws", "aws", "gos". Defaults to "cls".
- `force` (BOOLEAN, optional): If `true` (or `1`), it skips the check that prevents the use of a single-column INTEGER primary key. Defaults to `false`. It is strongly recommended to use globally unique primary keys instead of integers.

**Returns:** None.

**Example:**

```sql
-- Initialize a single table for synchronization with the Causal-Length Set (CLS) Algorithm (default)
SELECT cloudsync_init('my_table');

-- Initialize a single table for synchronization with a different algorithm Delete-Wins Set (DWS)
SELECT cloudsync_init('my_table', 'dws');

```

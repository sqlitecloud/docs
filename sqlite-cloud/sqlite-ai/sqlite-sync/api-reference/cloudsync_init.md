---
title: "cloudsync_init(table_name, [crdt_algo], [init_flags])"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-init
---

## `cloudsync_init(table_name, [crdt_algo], [init_flags])`

**Description:** Initializes a table for `sqlite-sync` synchronization. This function is idempotent and needs to be called only once per table on each site; configurations are stored in the database and automatically loaded with the extension.

Before initialization, `cloudsync_init` performs schema sanity checks to ensure compatibility with CRDT requirements and best practices. These checks include:
- Primary keys should not be auto-incrementing integers; GUIDs (UUIDs, ULIDs) are highly recommended to prevent multi-node collisions.
- All non-primary key `NOT NULL` columns must have a `DEFAULT` value.
- **Note:** Any write operation that includes a NULL value for a primary key column will be rejected with an error, even if SQLite would normally allow it due to a legacy behavior.

**Schema Design Considerations:**

When designing your database schema for SQLite Sync, follow these essential requirements:

- **Primary Keys**: Use TEXT primary keys with `cloudsync_uuid()` for globally unique identifiers. Avoid auto-incrementing integers.
- **Column Constraints**: All NOT NULL columns (except primary keys) must have DEFAULT values to prevent synchronization errors.
- **UNIQUE Constraints**: In multi-tenant scenarios, use composite UNIQUE constraints (e.g., `UNIQUE(tenant_id, email)`) instead of global uniqueness.
- **Foreign Key Compatibility**: Be aware of potential conflicts during CRDT merge operations and RLS policy interactions.
- **Trigger Compatibility**: Triggers may cause duplicate operations or be called multiple times due to column-by-column processing.

For comprehensive guidelines, see the [Database Schema Recommendations](/docs/sqlite-sync-best-practices).

The function supports three overloads:
- `cloudsync_init(table_name)`: Uses the default 'cls' CRDT algorithm.
- `cloudsync_init(table_name, crdt_algo)`: Specifies a CRDT algorithm ('cls', 'dws', 'aws', 'gos').
- `cloudsync_init(table_name, crdt_algo, init_flags)`: Specifies an algorithm and a bitmask of initialization flags to control which schema sanity checks are skipped.

**Parameters:**

- `table_name` (TEXT): The name of the table to initialize.
- `crdt_algo` (TEXT, optional): The CRDT algorithm to use. Can be `"cls"`, `"dws"`, `"aws"`, `"gos"`. Defaults to `"cls"`.
- `init_flags` (INTEGER, optional): A bitmask of flags that control initialization behavior. Defaults to `0` (no flags). Available flags:
  - `0` — No flags; all sanity checks are performed (default).
  - `1` (`CLOUDSYNC_INIT_FLAG_SKIP_INT_PK_CHECK`) — Skip the check that prevents the use of a single-column INTEGER primary key. Use with caution; globally unique primary keys (UUID/ULID) are strongly recommended.
  - `2` (`CLOUDSYNC_INIT_FLAG_SKIP_NOT_NULL_DEFAULT_CHECK`) — Skip the check that requires all NOT NULL non-PK columns to have a DEFAULT value.
  - `4` (`CLOUDSYNC_INIT_FLAG_SKIP_NOT_NULL_PRIKEYS_CHECK`) — Skip the check that rejects NULL primary key values.
  - Flags can be combined with bitwise OR (e.g., `3` skips both the integer PK check and the NOT NULL default check).

**Returns:** None.

**Example:**

```sql
-- Initialize a table with the default CLS algorithm
SELECT cloudsync_init('my_table');

-- Initialize a table with the Delete-Wins Set algorithm
SELECT cloudsync_init('my_table', 'dws');

-- Initialize a table with an integer primary key (skip the integer PK check)
SELECT cloudsync_init('my_table', 'cls', 1);
```

---

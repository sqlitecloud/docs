## Database Schema Recommendations

When designing your database schema for SQLite Sync, follow these best practices to ensure optimal CRDT performance and conflict resolution:

### Primary Key Requirements

- **Use globally unique identifiers**: Always use TEXT primary keys with UUIDs, ULIDs, or similar globally unique identifiers
- **Avoid auto-incrementing integers**: Integer primary keys can cause conflicts across multiple devices
- **Use `cloudsync_uuid()`**: The built-in function generates UUIDv7 identifiers optimized for distributed systems
- **All primary keys must be explicitly declared as `NOT NULL`**.

```sql
-- ✅ Recommended: Globally unique TEXT primary key
CREATE TABLE users (
    id TEXT PRIMARY KEY NOT NULL,          -- Use cloudsync_uuid()
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

-- ❌ Avoid: Auto-incrementing integer primary key
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  -- Causes conflicts
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);
```

### Column Constraint Guidelines

- **Provide DEFAULT values**: All `NOT NULL` columns (except primary keys) must have `DEFAULT` values
- **Consider nullable columns**: For optional data, use nullable columns instead of empty strings

```sql
-- ✅ Recommended: Proper constraints and defaults
CREATE TABLE tasks (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL DEFAULT '',
    status TEXT NOT NULL DEFAULT 'pending',
    priority INTEGER NOT NULL DEFAULT 1,
    created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
    assigned_to TEXT                       -- Nullable for optional assignment
);
```

### UNIQUE Constraint Considerations

When converting from single-tenant to multi-tenant database schemas with Row-Level Security, **UNIQUE constraints must be globally unique** across all tenants in the cloud database. For columns that should only be unique within a tenant, use composite UNIQUE constraints.

```sql
-- ❌ Single-tenant: Unique email per database
CREATE TABLE users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL  -- Problem: Not unique across tenants
);

-- ✅ Multi-tenant: Composite unique constraint
CREATE TABLE users (
    id TEXT PRIMARY KEY,
    tenant_id TEXT NOT NULL,
    email TEXT NOT NULL,
    UNIQUE(tenant_id, email)    -- Unique email per tenant
);
```

### Foreign Key Compatibility

When using foreign key constraints with SQLite Sync, be aware that interactions with the CRDT merge algorithm and Row-Level Security policies may cause constraint violations. 

#### Potential Conflicts

**CRDT Merge Algorithm and DEFAULT Values**

- CRDT changes are applied column-by-column during synchronization
- Columns may be temporarily assigned DEFAULT values during the merge process
- If a foreign key column has a DEFAULT value, that value must exist in the referenced table

**Row-Level Security and CASCADE Actions**
- RLS policies may block operations required for maintaining referential integrity
- CASCADE DELETE/UPDATE operations may fail if RLS prevents access to related rows

#### Recommendations

**Database Design Patterns**
- Prefer application-level cascade logic over database-level CASCADE actions
- Design RLS policies to accommodate referential integrity operations
- Use nullable foreign keys where appropriate to avoid DEFAULT value issues
- Alternatively, ensure DEFAULT values for foreign key columns exist in their referenced tables

**Testing and Validation**
- Test synchronization scenarios with foreign key constraints enabled
- Monitor for constraint violations during sync operations in development

### Trigger Compatibility

Be aware that certain types of triggers can cause errors during synchronization due to SQLite Sync's merge logic.

**Duplicate Operations**
- If a trigger modifies a table that is also synchronized with SQLite Sync, changes performed by the trigger may be applied twice during the merge operation
- This can lead to constraint violations or unexpected data states depending on the table's constraints

**Column-by-Column Processing**
- SQLite Sync applies changes column-by-column during synchronization
- UPDATE triggers may be called multiple times for a single row as each column is processed
- This can result in unexpected trigger behavior
### `cloudsync_uuid()`

**Description:** Generates a new universally unique identifier (UUIDv7). This is useful for creating globally unique primary keys for new records, which is a best practice for CRDTs.

**Parameters:** None.

**Returns:** A new UUID as a TEXT value.

**Example:**

```sql
INSERT INTO products (id, name) VALUES (cloudsync_uuid(), 'New Product');
```
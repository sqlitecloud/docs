---
title: "RLS Reference"
description: "Behavior, setup, and troubleshooting for using CloudSync with PostgreSQL Row Level Security."
category: platform
status: publish
slug: sqlite-sync-rls-reference
---

CloudSync is fully compatible with PostgreSQL Row Level Security. Standard RLS policies work out of the box.

## How It Works

### Column-batch merge

CloudSync resolves CRDT conflicts at the column level. Before writing to the target table, CloudSync buffers all winning column values for the same primary key and flushes them as a single SQL statement. This ensures the database sees a complete row with all columns present.

### UPDATE vs INSERT selection

When flushing a batch, CloudSync chooses the statement type based on whether the row already exists locally:

- **New row**: `INSERT ... ON CONFLICT DO UPDATE`
- **Existing row**: `UPDATE ... SET ... WHERE pk = ...`

### Per-PK savepoint isolation

Each primary key's flush is wrapped in its own savepoint. When RLS denies a write, CloudSync rolls back only that savepoint and continues with the next primary key. Allowed rows commit normally; denied rows are skipped.

## Quick Setup

Given a table with an ownership column:

```sql
CREATE TABLE documents (
    id      TEXT PRIMARY KEY,
    user_id UUID,
    title   TEXT,
    content TEXT
);

SELECT cloudsync_init('documents');
```

Enable RLS and create standard policies:

```sql
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_own" ON documents FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "insert_own" ON documents FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "update_own" ON documents FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "delete_own" ON documents FOR DELETE
    USING (auth.uid() = user_id);
```

When you authenticate PostgreSQL requests with JWTs, CloudSync also executes `SET LOCAL ROLE` using the JWT `role` claim. See the [JWT Claims Reference](/docs/sqlite-sync-jwt-claims).

## Supabase Notes

When using Supabase:

1. `auth.uid()` returns the authenticated user's UUID from the JWT claims.
2. Ensure the JWT token is set before sync operations.
3. The Supabase service role bypasses RLS entirely, so use the `authenticated` role when you want user-context enforcement.

## Troubleshooting

### "new row violates row-level security policy"

Insert operations fail when the ownership column value does not match the authenticated user.

Verify that:

- the JWT or session variable is set correctly before calling `cloudsync_payload_apply`
- the ownership column in the synced data matches the authenticated user
- your RLS policies reference the correct ownership column

### Apply reports a count, but rows are missing

If `cloudsync_payload_apply` returns a non-zero column-change count but rows do not land, the calling role is usually missing grants on one of CloudSync's internal objects.

Apply the grant set from the [JWT Claims Reference](/docs/sqlite-sync-jwt-claims) and inspect server logs for `permission denied` entries around `cloudsync_payload_apply` if you need the exact missing object.

### Debugging

```sql
SELECT auth.uid();
SELECT id, user_id FROM documents WHERE id = 'problematic-pk';
```

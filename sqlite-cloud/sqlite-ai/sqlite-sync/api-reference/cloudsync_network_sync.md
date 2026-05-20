---
title: "cloudsync_network_sync([wait_ms], [max_retries])"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-network-sync
---

## `cloudsync_network_sync([wait_ms], [max_retries])`

**Description:** Performs a full synchronization cycle. This function has two overloads:

- `cloudsync_network_sync()`: Performs one send operation and one check operation.
- `cloudsync_network_sync(wait_ms, max_retries)`: Performs one send operation and then repeatedly tries to download remote changes until at least one change is downloaded or `max_retries` times has been reached, waiting `wait_ms` between retries.

**Parameters:**

- `wait_ms` (INTEGER, optional): The time to wait in milliseconds between retries. Defaults to 100.
- `max_retries` (INTEGER, optional): The maximum number of times to retry the synchronization. Defaults to 1.

**Returns:** A JSON string with the full sync result, combining send and receive:

```json
{
  "send": {"status": "synced|syncing|out-of-sync|error", "localVersion": N, "serverVersion": N, "lastFailure": {...}},
  "receive": {"rows": N, "tables": ["table1", "table2"], "error": "...", "lastFailure": {...}}
}
```

- `send.status`: The current sync state — `"synced"`, `"syncing"`, `"out-of-sync"`, or `"error"`.
- `send.localVersion`: The latest local database version.
- `send.serverVersion`: The latest version confirmed by the server.
- `send.lastFailure` (optional): Same semantics as in [`cloudsync_network_send_changes()`](#cloudsync_network_send_changes) — forwarded verbatim from the server's `failures.apply` whenever a failed apply job is reported, regardless of `status`.
- `receive.rows`: The number of rows received and applied during the check phase. `0` when the receive phase failed.
- `receive.tables`: An array of table names that received changes. Empty (`[]`) if no changes were applied or the receive phase failed.
- `receive.error` (optional, string): Present when client-side `cloudsync_payload_apply` failed (for example `"Cannot apply the received payload because the schema hash is unknown 7218827471400075525."`). The send result is always preserved so the caller can tell that local changes reached the server even when applying incoming changes failed. The retry loop breaks immediately on apply errors, since failures like schema-hash mismatches do not heal across retries. Endpoint/network errors during the receive phase raise a SQL error instead.
- `receive.lastFailure` (optional, object): Same semantics as in [`cloudsync_network_check_changes()`](#cloudsync_network_check_changes) — forwarded verbatim from the server's `failures.check` whenever a failed check job is reported. Distinct from `receive.error`. `cloudsync_network_sync()` reports both `send.lastFailure` and `receive.lastFailure` when present.

**Example:**

```sql
-- Perform a single synchronization cycle
SELECT cloudsync_network_sync();
-- '{"send":{"status":"synced","localVersion":5,"serverVersion":5},"receive":{"rows":3,"tables":["tasks"]}}'

-- Perform a synchronization cycle with custom retry settings
SELECT cloudsync_network_sync(500, 3);

-- Receive phase failed but send phase completed — the error is surfaced in JSON, not as a SQL error:
-- '{"send":{"status":"synced","localVersion":5,"serverVersion":5},"receive":{"rows":0,"tables":[],"error":"Cannot apply the received payload because the schema hash is unknown 7218827471400075525."}}'
```

---

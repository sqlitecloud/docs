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
- `cloudsync_network_sync(wait_ms, max_retries)`: Performs one send operation and then downloads remote changes.

When the server delivers changes as a stream of chunks, this function drains the **whole stream in a single call**: as long as the next chunk is already available it is fetched back-to-back with no delay. `wait_ms` and `max_retries` are spent only while the server payload is **not yet ready** (the server is still preparing a package): in that case the function waits `wait_ms` and retries up to `max_retries` times. They are not consumed while paging through chunks that are already available.

**Parameters:**

- `wait_ms` (INTEGER, optional): The time to wait in milliseconds between retries while the server payload is not yet ready. Defaults to 100.
- `max_retries` (INTEGER, optional): The maximum number of poll attempts while the server payload is not yet ready. Defaults to 1.

**Returns:** A JSON string with the full sync result, combining send and receive:

```json
{
  "send": {"status": "synced|syncing|out-of-sync|error", "localVersion": N, "serverVersion": N, "chunks": C, "bytes": B, "lastFailure": {...}},
  "receive": {"rows": N, "tables": ["table1", "table2"], "chunks": C, "bytes": B, "complete": true, "error": "...", "lastFailure": {...}}
}
```

- `send.status`: The current sync state — `"synced"`, `"syncing"`, `"out-of-sync"`, or `"error"`.
- `send.localVersion`: The latest local database version.
- `send.serverVersion`: The latest version confirmed by the server.
- `send.chunks` / `send.bytes`: Number of payload chunks sent and total serialized payload bytes sent during the send phase. Same semantics as in [`cloudsync_network_send_changes()`](#cloudsync_network_send_changes).
- `send.lastFailure` (optional): Same semantics as in [`cloudsync_network_send_changes()`](#cloudsync_network_send_changes) — forwarded verbatim from the server's `failures.apply` whenever a failed apply job is reported, regardless of `status`.
- `receive.rows`: The **total** number of rows received and applied during the receive phase, summed across **all** chunks drained in this call. `0` when the receive phase failed.
- `receive.tables`: An array of table names that received changes (the union across all drained chunks). Empty (`[]`) if no changes were applied or the receive phase failed.
- `receive.chunks`: The number of payload chunks applied in this call. `0` when nothing was ready, `1` for a single monolithic/inline page, and `N` for a fully drained `N`-chunk stream. `cloudsync_network_sync()` always drains the whole stream (it does not cap chunks).
- `receive.bytes`: The total serialized payload bytes received this call (uncompressed cloudsync payload size, summed across chunks; not the compressed wire size). Same semantics as in [`cloudsync_network_receive_changes()`](#cloudsync_network_receive_changesmax_chunks).
- `receive.complete` (boolean): `true` when the server stream was fully drained, `false` when the download stopped before the final chunk (an error occurred, or an internal safety bound was reached). When `false`, call `cloudsync_network_sync()` again to resume; re-delivered rows are idempotent.
- `receive.error` (optional, string): Present when client-side `cloudsync_payload_apply` failed (for example `"Cannot apply the received payload because the schema hash is unknown 7218827471400075525."`). The send result is always preserved so the caller can tell that local changes reached the server even when applying incoming changes failed. The receive drain stops immediately on apply errors, since failures like schema-hash mismatches do not heal across retries. Endpoint/network errors during the receive phase raise a SQL error instead.
- `receive.lastFailure` (optional, object): Same semantics as in [`cloudsync_network_receive_changes()`](#cloudsync_network_receive_changesmax_chunks) — forwarded verbatim from the server's `failures.check` whenever a failed check job is reported. Distinct from `receive.error`. `cloudsync_network_sync()` reports both `send.lastFailure` and `receive.lastFailure` when present.

**Example:**

```sql
-- Perform a single synchronization cycle
SELECT cloudsync_network_sync();
-- '{"send":{"status":"synced","localVersion":5,"serverVersion":5,"chunks":1,"bytes":2048},"receive":{"rows":3,"tables":["tasks"],"chunks":1,"bytes":820,"complete":true}}'

-- Perform a synchronization cycle with custom retry settings
SELECT cloudsync_network_sync(500, 3);
-- A large download drained as a multi-chunk stream in a single call:
-- '{"send":{"status":"synced","localVersion":42,"serverVersion":42,"chunks":0,"bytes":0},"receive":{"rows":1200,"tables":["docs"],"chunks":7,"bytes":1835008,"complete":true}}'

-- Receive phase failed but send phase completed — the error is surfaced in JSON, not as a SQL error:
-- '{"send":{"status":"synced","localVersion":5,"serverVersion":5,"chunks":1,"bytes":512},"receive":{"rows":0,"tables":[],"chunks":0,"bytes":0,"complete":false,"error":"Cannot apply the received payload because the schema hash is unknown 7218827471400075525."}}'
```

---

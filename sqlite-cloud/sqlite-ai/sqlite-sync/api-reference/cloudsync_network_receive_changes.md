---
title: "cloudsync_network_receive_changes([max_chunks])"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-network-receive-changes
---

## `cloudsync_network_receive_changes([max_chunks])`

**Description:** Receives new changes from the remote server and applies them to the local database. (Formerly `cloudsync_network_check_changes()`, which remains available as a deprecated alias — see below.)

If changes are already prepared for the local site, they are downloaded and applied. If nothing is ready yet, the server starts preparing a package asynchronously and this call returns having applied nothing; a later call retrieves it. This function does **not** wait/poll for preparation to finish — it applies what is available now. To force an update and wait for not-yet-ready changes, use [`cloudsync_network_sync(wait_ms, max_retries)`](#cloudsync_network_syncwait_ms-max_retries).

By default this function **drains all currently-available chunks** in one call. Pass `max_chunks` to cap how many chunks are applied per call, for caller-driven progress or traffic control:

```sql
-- Drain at most 5 chunks, loop until the stream is complete
SELECT cloudsync_network_receive_changes(5) ->> '$.receive.complete';
```

The drain position (the per-stream page cursor) is held **in memory** on the network context, so a capped drain resumes where it left off on the next call — the caller does not manage any cursor; it just loops while `receive.complete` is `false`. If the connection is closed or the process restarts mid-drain, the cursor is lost and the next call safely restarts the drain from the beginning of the stream: already-applied chunks are re-downloaded and re-applied idempotently, so **no rows are skipped** — only redundant download is incurred. This is safe because the durable receive checkpoint (`check_dbversion`/`check_seq`) only advances after a stream has been **fully** applied, never in the middle of a source `db_version`.

If the network is misconfigured or the remote server is unreachable, the function raises a SQL error. If the received payload cannot be applied locally (for example because of an unknown schema hash), the error is returned as a `receive.error` field in the JSON response. If the server reports an unresolved failed check job (e.g. an `encode_changes` failure), that failure is forwarded as a `receive.lastFailure` object.

**Parameters:**

- `max_chunks` (INTEGER, optional): Maximum number of chunks to apply this call. Omit or pass `0` (or negative) to drain everything available. A positive value caps the drain; `receive.complete` will be `false` when the cap stops a drain that still has pending chunks.

**Returns:** A JSON string with the receive result:

```json
{"receive": {"rows": N, "tables": ["table1", "table2"], "chunks": C, "bytes": B, "complete": true, "error": "...", "lastFailure": {...}}}
```

- `receive.rows`: The total number of rows received and applied to the local database, summed across all chunks drained this call. `0` when the receive phase failed, when nothing was available, or when only intermediate fragments were staged without completing a value.
- `receive.tables`: An array of table names that received changes (the union across all drained chunks). Empty (`[]`) if no changes were applied or the receive phase failed.
- `receive.chunks`: The number of payload chunks applied by this call. `0` when nothing was ready, `1` for a single monolithic/inline page, and `N` for a drained `N`-chunk stream (bounded by `max_chunks` if given).
- `receive.bytes`: The total serialized payload bytes received this call (uncompressed cloudsync payload size, summed across chunks; transport-independent, not the compressed wire size). Useful for byte-budgeted draining together with `max_chunks`.
- `receive.complete` (boolean): `true` when the receive stream is fully drained (nothing pending), `false` when more chunks remain — because `max_chunks` capped the drain, or it stopped early. When `false`, call this function again to continue.
- `receive.error` (optional, string): Present when client-side `cloudsync_payload_apply` failed. Contains a human-readable error message describing why the received payload could not be applied.
- `receive.lastFailure` (optional, object): Present only when the server reports a failed check job. Forwarded verbatim from the server's `failures.check` and typically includes `jobId`, `dbVersion`, `seq`, `code`, `stage`, `message`, `retryable`, and `failedAt`. Distinct from `receive.error`: `receive.error` describes a client-side apply failure (string), while `receive.lastFailure` describes a server-side check-job failure (object). Both can coexist in the same response. This function is **check-scoped**: server-reported apply-job failures (`failures.apply`) are not surfaced here — see [`cloudsync_network_send_changes()`](#cloudsync_network_send_changes) and [`cloudsync_network_sync()`](#cloudsync_network_syncwait_ms-max_retries).

**Example:**

```sql
SELECT cloudsync_network_receive_changes();
-- '{"receive":{"rows":3,"tables":["tasks"],"chunks":1,"bytes":820,"complete":true}}'

-- Capped drain with more pending (call again to continue):
-- '{"receive":{"rows":40,"tables":["docs"],"chunks":5,"bytes":1310720,"complete":false}}'

-- With a client-side apply error:
-- '{"receive":{"rows":0,"tables":[],"chunks":0,"bytes":0,"complete":true,"error":"Cannot apply the received payload because the schema hash is unknown 7218827471400075525."}}'

-- With a server-reported check-job failure:
-- '{"receive":{"rows":0,"tables":[],"chunks":0,"bytes":0,"complete":true,"lastFailure":{"jobId":456,"dbVersion":15,"seq":1,"code":"tenant_unreachable","stage":"encode_changes","message":"tenant check failed","retryable":true,"failedAt":"2026-04-24T10:22:00Z"}}}'
```

---

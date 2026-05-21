---
title: "cloudsync_network_check_changes()"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-network-check-changes
---

## `cloudsync_network_check_changes()`

**Description:** Checks the remote server for new changes and applies them to the local database.

If a package of new changes is already available for the local site, the server returns it immediately, and the changes are applied. If no package is ready, the server returns an empty response and starts an asynchronous process to prepare a new package. This new package can be retrieved with a subsequent call to this function.

This function is designed to be called periodically to keep the local database in sync.
To force an update and wait for changes (with a timeout), use [`cloudsync_network_sync(wait_ms, max_retries)`].

If the network is misconfigured or the remote server is unreachable, the function raises a SQL error. If the received payload cannot be applied locally (for example because of an unknown schema hash), the error is returned as a `receive.error` field in the JSON response. If the server reports an unresolved failed check job (e.g. an `encode_changes` failure), that failure is forwarded as a `receive.lastFailure` object.

**Parameters:** None.

**Returns:** A JSON string with the receive result:

```json
{"receive": {"rows": N, "tables": ["table1", "table2"], "error": "...", "lastFailure": {...}}}
```

- `receive.rows`: The number of rows received and applied to the local database. `0` when the receive phase failed.
- `receive.tables`: An array of table names that received changes. Empty (`[]`) if no changes were applied or the receive phase failed.
- `receive.error` (optional, string): Present when client-side `cloudsync_payload_apply` failed. Contains a human-readable error message describing why the received payload could not be applied.
- `receive.lastFailure` (optional, object): Present only when the server reports a failed check job. Forwarded verbatim from the server's `failures.check` and typically includes `jobId`, `dbVersion`, `seq`, `code`, `stage`, `message`, `retryable`, and `failedAt`. Distinct from `receive.error`: `receive.error` describes a client-side apply failure (string), while `receive.lastFailure` describes a server-side check-job failure (object). Both can coexist in the same response. This function is **check-scoped**: server-reported apply-job failures (`failures.apply`) are not surfaced here — see [`cloudsync_network_send_changes()`](#cloudsync_network_send_changes) and [`cloudsync_network_sync()`](#cloudsync_network_sync).

**Example:**

```sql
SELECT cloudsync_network_check_changes();
-- '{"receive":{"rows":3,"tables":["tasks"]}}'

-- With a client-side apply error:
-- '{"receive":{"rows":0,"tables":[],"error":"Cannot apply the received payload because the schema hash is unknown 7218827471400075525."}}'

-- With a server-reported check-job failure:
-- '{"receive":{"rows":0,"tables":[],"lastFailure":{"jobId":456,"dbVersion":15,"seq":1,"code":"tenant_unreachable","stage":"encode_changes","message":"tenant check failed","retryable":true,"failedAt":"2026-04-24T10:22:00Z"}}}'
```

---

---
title: "cloudsync_network_send_changes()"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-network-send-changes
---

## `cloudsync_network_send_changes()`

**Description:** Sends all unsent local changes to the remote server.

**Parameters:** None.

**Returns:** A JSON string with the send result:

```json
{"send": {"status": "synced|syncing|out-of-sync|error", "localVersion": N, "serverVersion": N, "lastFailure": {...}}}
```

- `send.status`: The current sync state — `"synced"` (all changes confirmed), `"syncing"` (changes sent but not yet confirmed), `"out-of-sync"` (local changes pending or gaps detected), or `"error"`.
- `send.localVersion`: The latest local database version.
- `send.serverVersion`: The latest version confirmed by the server.
- `send.lastFailure` (optional): Present only when the server reports a failed apply job. Forwarded verbatim from the server's `failures.apply` and typically includes `jobId`, `code`, `stage`, `message`, `retryable`, and `failedAt`. It is emitted regardless of `status` so callers can detect server-side failures during `"syncing"` or even after the state has nominally recovered. This function is **send/apply-scoped**: server-reported check-job failures (`failures.check`) are not surfaced here — see [`cloudsync_network_check_changes()`](#cloudsync_network_check_changes) and [`cloudsync_network_sync()`](#cloudsync_network_sync).

**Example:**

```sql
SELECT cloudsync_network_send_changes();
-- '{"send":{"status":"synced","localVersion":5,"serverVersion":5}}'

-- With a server-reported failure (e.g. unknown schema hash on the server side):
-- '{"send":{"status":"out-of-sync","localVersion":1,"serverVersion":0,"lastFailure":{"jobId":44961,"code":"internal_error","stage":"apply_payload","message":"cloudsync operation failed: Cannot apply the received payload because the schema hash is unknown 4288148391734624266.","retryable":true,"failedAt":"2026-04-15T22:21:09.018606Z"}}}'
```

---

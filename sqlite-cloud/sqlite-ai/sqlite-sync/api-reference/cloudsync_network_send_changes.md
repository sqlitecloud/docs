---
title: "cloudsync_network_send_changes()"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-network-send-changes
---

## `cloudsync_network_send_changes()`

**Description:** Sends all unsent local changes to the remote server.

The send path streams payloads through `cloudsync_payload_chunks()`, so `payload_max_chunk_size` also limits the payloads generated for network transport. Each generated chunk is uploaded/applied independently; the local send checkpoint is advanced only after the chunk stream completes successfully.

Chunk transport is transparent to the CloudSync backend. Each chunk is sent as a normal `/apply` payload, either inline as a base64 `blob` or through the upload `url` path. There is no separate chunk flag: old payloads, monolithic payloads, and v3 fragment payloads are distinguished by the payload format itself.

**Parameters:** None.

**Returns:** A JSON string with the send result:

```json
{"send": {"status": "synced|syncing|out-of-sync|error", "localVersion": N, "serverVersion": N, "chunks": C, "bytes": B, "lastFailure": {...}}}
```

- `send.status`: The current sync state — `"synced"` (all changes confirmed), `"syncing"` (changes sent but not yet confirmed), `"out-of-sync"` (local changes pending or gaps detected), or `"error"`.
- `send.localVersion`: The latest local database version.
- `send.serverVersion`: The latest version confirmed by the server.
- `send.chunks`: The number of payload chunks sent this call (a large push is split into multiple transport chunks bounded by `payload_max_chunk_size`). `0` when there were no local changes to send.
- `send.bytes`: The total serialized payload bytes sent this call (uncompressed cloudsync payload size, summed across chunks; not the compressed wire size).
- `send.lastFailure` (optional): Present only when the server reports a failed apply job. Forwarded verbatim from the server's `failures.apply` and typically includes `jobId`, `code`, `stage`, `message`, `retryable`, and `failedAt`. It is emitted regardless of `status` so callers can detect server-side failures during `"syncing"` or even after the state has nominally recovered. This function is **send/apply-scoped**: server-reported check-job failures (`failures.check`) are not surfaced here — see [`cloudsync_network_receive_changes()`](#cloudsync_network_receive_changesmax_chunks) and [`cloudsync_network_sync()`](#cloudsync_network_syncwait_ms-max_retries).

**Example:**

```sql
SELECT cloudsync_network_send_changes();
-- '{"send":{"status":"synced","localVersion":5,"serverVersion":5,"chunks":1,"bytes":2048}}'

-- With a server-reported failure (e.g. unknown schema hash on the server side):
-- '{"send":{"status":"out-of-sync","localVersion":1,"serverVersion":0,"chunks":1,"bytes":512,"lastFailure":{"jobId":44961,"code":"internal_error","stage":"apply_payload","message":"cloudsync operation failed: Cannot apply the received payload because the schema hash is unknown 4288148391734624266.","retryable":true,"failedAt":"2026-04-15T22:21:09.018606Z"}}}'
```

---

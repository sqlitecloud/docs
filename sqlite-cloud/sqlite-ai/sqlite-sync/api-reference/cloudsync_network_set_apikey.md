---
title: "cloudsync_network_set_apikey(apikey)"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-network-set-apikey
---

## `cloudsync_network_set_apikey(apikey)`

**Description:** Sets the API key for network requests. This key is included in the `Authorization` header of all subsequent requests.

**Parameters:**

- `apikey` (TEXT): The API key.

**Returns:** None.

**Example:**

```sql
SELECT cloudsync_network_set_apikey('your_api_key');
```

---

### Error handling

The sync functions follow a consistent error-handling contract:

| Error type | Behavior |
|---|---|
| **Endpoint/network errors** (server unreachable, auth failure, bad URL) | SQL error — the function could not execute. |
| **Apply errors** (`cloudsync_payload_apply` failures — unknown schema hash, invalid checksum, decompression error) | Structured JSON — a `receive.error` string field is included in the response. |
| **Server-reported apply job failures** (the server processed the request but its own apply job failed) | Structured JSON — a `send.lastFailure` object is included in the response. |
| **Server-reported check job failures** (the server failed to encode a changeset for the client) | Structured JSON — a `receive.lastFailure` object is included in the response. |

This means: if you get JSON back, the server was reachable and the network protocol ran. If you get a SQL error, connectivity or configuration is broken.

---

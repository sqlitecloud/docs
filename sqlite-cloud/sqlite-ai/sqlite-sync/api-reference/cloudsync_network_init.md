---
title: SQLite-Sync API Reference - cloudsync_network_init
description: SQLite Sync is a multi-platform extension that brings a true local-first experience to your applications with minimal effort.
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-network-init
---

### `cloudsync_network_init(connection_string)`

**Description:** Initializes the `sqlite-sync` network component. This function parses the connection string to configure change checking and upload endpoints, and initializes the cURL library.

**Parameters:**

- `connection_string` (TEXT): The connection string for the remote synchronization server. The format is `sqlitecloud://<host>:<port>/<database>?<options>`.

**Returns:** None.

**Example:**

```sql
SELECT cloudsync_network_init('<projectid>.sqlite.cloud/<db>.sqlite');
```

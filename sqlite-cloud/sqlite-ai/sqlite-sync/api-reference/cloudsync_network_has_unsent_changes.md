---
title: "cloudsync_network_has_unsent_changes()"
description: SQLite Sync is a multi-platform extension that brings a true local-first experience to your applications with minimal effort.
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-network-has-unsent-changes
---

**Description:** Checks if there are any local changes that have not yet been sent to the remote server.

**Parameters:** None.

**Returns:** 1 if there are unsent changes, 0 otherwise.

**Example:**

```sql
SELECT cloudsync_network_has_unsent_changes();
```

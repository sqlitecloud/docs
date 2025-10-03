---
title: "cloudsync_terminate()"
description: SQLite Sync is a multi-platform extension that brings a true local-first experience to your applications with minimal effort.
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-terminate
---

**Description:** Releases all internal resources used by the `sqlite-sync` extension for the current database connection. This function should be called before closing the database connection to ensure that all prepared statements and allocated memory are freed. Failing to call this function can result in memory leaks or a failed `sqlite3_close` operation due to pending statements.

**Parameters:** None.

**Returns:** None.

**Example:**

```sql
-- Before closing the database connection
SELECT cloudsync_terminate();
```

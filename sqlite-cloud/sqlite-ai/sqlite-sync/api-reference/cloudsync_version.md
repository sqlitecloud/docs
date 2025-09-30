---
title: SQLite-Sync API Reference - cloudsync_version
description: SQLite Sync is a multi-platform extension that brings a true local-first experience to your applications with minimal effort.
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-version
---

### `cloudsync_version()`

**Description:** Returns the version of the `sqlite-sync` library.

**Parameters:** None.

**Returns:** The library version as a string.

**Example:**

```sql
SELECT cloudsync_version();
-- e.g., '1.0.0'
```

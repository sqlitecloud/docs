---
title: "cloudsync_network_init(managedDatabaseId)"
description: "SQLite-Sync SQL function reference."
category: platform
status: publish
slug: sqlite-sync-api-cloudsync-network-init
---

## `cloudsync_network_init(managedDatabaseId)`

**Description:** Initializes the `sqlite-sync` network component. This function configures the endpoints for the CloudSync service and initializes the cURL library.

**Parameters:**

- `managedDatabaseId` (TEXT): The managed database identifier returned by the CloudSync service when a new database is registered for sync. For SQLiteCloud projects, this value can be obtained from the project's CloudSync page on the dashboard.

**Returns:** None.

**Example:**

```sql
SELECT cloudsync_network_init('your-managed-database-id');
```

---

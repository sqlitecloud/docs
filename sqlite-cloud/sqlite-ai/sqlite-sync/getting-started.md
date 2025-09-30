# Getting Started

Here's a quick example to get started with SQLite Sync:

### Prerequisites

1. **SQLite Cloud Account**: Sign up at [SQLite Cloud](https://sqlitecloud.io/)
2. **SQLite Sync Extension**: Download from [Releases](https://github.com/sqliteai/sqlite-sync/releases)

### SQLite Cloud Setup

1. Create a new project and database in your [SQLite Cloud Dashboard](https://dashboard.sqlitecloud.io/)
2. Copy your connection string and API key from the dashboard
3. Create tables with identical schema in both local and cloud databases
4. [Enable synchronization](https://docs.sqlitecloud.io/docs/offsync#:~:text=in%20the%20cloud.-,Configuring%20OffSync,-You%20can%20enable): go to Databases > Offsync page and select each table you want to synchronize in your database

### Local Database Setup

```bash
# Start SQLite CLI
sqlite3 myapp.db
```

```sql
-- Load the extension
.load ./cloudsync

-- Create a table (primary key MUST be TEXT for global uniqueness)
CREATE TABLE IF NOT EXISTS my_data (
    id TEXT PRIMARY KEY NOT NULL,
    value TEXT NOT NULL DEFAULT '',
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Initialize table for synchronization
SELECT cloudsync_init('my_data');

-- Use your local database normally: read and write data using standard SQL queries
-- The CRDT system automatically tracks all changes for synchronization

-- Example: Insert data (always use cloudsync_uuid() for globally unique IDs)
INSERT INTO my_data (id, value) VALUES
    (cloudsync_uuid(), 'Hello from device A!'),
    (cloudsync_uuid(), 'Working offline is seamless!');

-- Example: Update and delete operations work normally
UPDATE my_data SET value = 'Updated: Hello from device A!' WHERE value LIKE 'Hello from device A!';

-- View your data
SELECT * FROM my_data ORDER BY created_at;

-- Configure network connection before using the network sync functions
SELECT cloudsync_network_init('sqlitecloud://your-project-id.sqlite.cloud/database.sqlite');
SELECT cloudsync_network_set_apikey('your-api-key-here');
-- Or use token authentication (required for Row-Level Security)
-- SELECT cloudsync_network_set_token('your_auth_token');

-- Sync with cloud: send local changes, then check the remote server for new changes
-- and, if a package with changes is ready to be downloaded, applies them to the local database
SELECT cloudsync_network_sync();
-- Keep calling periodically. The function returns > 0 if data was received
-- In production applications, you would typically call this periodically
-- rather than manually (e.g., every few seconds)
SELECT cloudsync_network_sync();

-- Before closing the database connection
SELECT cloudsync_terminate();
-- Close the database connection
.quit
```

```sql
-- On another device (or create another database for testing: sqlite3 myapp_2.db)
-- Follow the same setup steps: load extension, create table, init sync, configure network

-- Load extension and create identical table structure
.load ./cloudsync
CREATE TABLE IF NOT EXISTS my_data (
    id TEXT PRIMARY KEY NOT NULL,
    value TEXT NOT NULL DEFAULT '',
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
SELECT cloudsync_init('my_data');

-- Connect to the same cloud database
SELECT cloudsync_network_init('sqlitecloud://your-project-id.sqlite.cloud/database.sqlite');
SELECT cloudsync_network_set_apikey('your-api-key-here');

-- Sync to get data from the first device
SELECT cloudsync_network_sync();
-- repeat until data is received (returns > 0)
SELECT cloudsync_network_sync();

-- View synchronized data
SELECT * FROM my_data ORDER BY created_at;

-- Add data from this device to test bidirectional sync
INSERT INTO my_data (id, value) VALUES
    (cloudsync_uuid(), 'Hello from device B!');

-- Sync again to send this device's changes
SELECT cloudsync_network_sync();

-- The CRDT system ensures all devices eventually have the same data,
-- with automatic conflict resolution and no data loss

-- Before closing the database connection
SELECT cloudsync_terminate();
-- Close the database connection
.quit
```

### For a Complete Example

See the [examples](https://github.com/sqliteai/sqlite-sync/blob/main/examples/simple-todo-db/README.md) directory for a comprehensive walkthrough including:

- Multi-device collaboration
- Offline scenarios
- Row-level security setup
- Conflict resolution demonstrations

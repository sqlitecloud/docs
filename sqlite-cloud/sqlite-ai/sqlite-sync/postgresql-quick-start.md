---
title: "Self-Hosted PostgreSQL Quick Start"
description: "Enable CloudSync on your own PostgreSQL instance and connect SQLite Sync clients to it."
category: platform
status: publish
slug: sqlite-sync-postgresql-quick-start
---

This guide helps you enable CloudSync on a **self-hosted PostgreSQL database**. CloudSync adds offline-first synchronization capabilities to your PostgreSQL database.

## Step 1: Deploy PostgreSQL with CloudSync

You can enable CloudSync in one of two ways:

- Use the published Docker image if you run PostgreSQL in Docker
- Install the released extension files into an existing native PostgreSQL installation

### Option A: Docker

Use the published PostgreSQL image that already includes the CloudSync extension:

- `sqlitecloud/sqlite-sync-postgres:15`
- `sqlitecloud/sqlite-sync-postgres:17`

Example using Docker Compose:

```yaml
services:
  db:
    image: sqlitecloud/sqlite-sync-postgres:17
    container_name: cloudsync-postgres
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: your-secure-password
      POSTGRES_DB: postgres
    ports:
      - "5432:5432"
    volumes:
      - pg_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql:ro

volumes:
  pg_data:
```

Create `init.sql`:

```sql
CREATE EXTENSION IF NOT EXISTS cloudsync;
```

Run:

```bash
docker compose up -d
```

### Option B: Existing PostgreSQL Without Docker

If you already run PostgreSQL directly on a VM or bare metal, download the release tarball that matches your operating system, CPU architecture, and PostgreSQL major version.

Extract the archive, then copy the extension files into PostgreSQL's extension directories. The tarball ships `cloudsync.control`, a `cloudsync--<version>.sql` install script for the current release, and any `cloudsync--<from>--<to>.sql` upgrade scripts needed so existing installations can run `ALTER EXTENSION cloudsync UPDATE`.

```bash
cp cloudsync.so "$(pg_config --pkglibdir)/"
cp cloudsync.control cloudsync--*.sql "$(pg_config --sharedir)/extension/"
```

Then connect to PostgreSQL and enable the extension:

```sql
CREATE EXTENSION IF NOT EXISTS cloudsync;
```

## Step 2: Verify the Extension

If you are using Docker:

```bash
docker compose exec db psql -U postgres -d postgres -c "SELECT cloudsync_version();"
```

If you are using an existing PostgreSQL installation without Docker:

```bash
psql -U postgres -d postgres -c "SELECT cloudsync_version();"
```

If the extension is installed correctly, PostgreSQL returns the CloudSync version string.

### Upgrading a later release

CloudSync uses the first two components of its semver as the PostgreSQL extension version. How you upgrade depends on which component changed:

- **PATCH release**: pull the new Docker image or replace the extension files on disk and restart PostgreSQL. No SQL-level upgrade is needed. `SELECT cloudsync_version();` confirms the new semver.
- **MINOR or MAJOR release**: pull the new artifacts as above, then run once per database:

  ```sql
  ALTER EXTENSION cloudsync UPDATE;
  ```

You can check the current state at any time:

```sql
SELECT name, default_version, installed_version
FROM pg_available_extensions
WHERE name = 'cloudsync';
```

## Step 3: Register Your Database in the CloudSync Dashboard

In the [CloudSync dashboard](https://dashboard.sqlitecloud.io/), create a new workspace with the **PostgreSQL** provider, then add a project with your PostgreSQL connection string:

```text
postgresql://user:password@host:5432/database
```

## Step 4: Enable CloudSync on Tables

In the dashboard, go to the **Database Setup** tab, select the tables you want to sync, and click **Deploy Changes**.

## Step 5: Set Up Authentication

On the **Client Integration** tab you'll find your **Database ID** and authentication settings.

### Quick Test with API Key

The fastest way to test CloudSync without per-user access control.

With API key authentication, CloudSync uses the database role resolved from the API-key-authenticated connection when available; otherwise it falls back to the role from the connection string.

```sql
SELECT cloudsync_network_init('<database-id>');
SELECT cloudsync_network_set_apikey('<username>:<password>');
SELECT cloudsync_network_sync();
```

### Using JWT Tokens

1. Set **Row Level Security** to **Yes, enforce RLS**
2. Under **Authentication (JWT)**, click **Configure authentication** and choose:
   - **HMAC Secret (HS256):**
     - Enter your JWT secret (or generate one: `openssl rand -base64 32`)
     - Optionally add **Expected audiences**
   - **JWKS Issuer Validation:**
     - Enter the issuer base URL from your token's `iss` claim
     - By default, CloudSync uses OIDC discovery to resolve `jwks_uri`
     - Optionally set an **Explicit JWKS URI**
     - Optionally add **Expected audiences**
3. For claim details and RLS examples, see:
   - [JWT Claims Reference](/docs/sqlite-sync-jwt-claims)
   - [RLS Reference](/docs/sqlite-sync-rls-reference)
4. In your client code:

   ```sql
   SELECT cloudsync_network_init('<database-id>');
   SELECT cloudsync_network_set_token('<jwt-token>');
   SELECT cloudsync_network_sync();
   ```

## Example App

For a complete Expo walkthrough using a self-hosted PostgreSQL backend, see the [Todo App PostgreSQL example](https://github.com/sqliteai/sqlite-sync/blob/main/docs/postgresql/examples/todo-app-postgres.md).

---
title: "Self-Hosted Supabase Quick Start"
description: "Enable CloudSync on a self-hosted Supabase deployment and connect SQLite Sync clients to it."
category: platform
status: publish
slug: sqlite-sync-supabase-self-hosted-quick-start
---

This guide helps you enable CloudSync on a **fresh or existing** self-hosted Supabase instance. CloudSync adds offline-first synchronization capabilities to your PostgreSQL database.

## Step 1: Use the CloudSync Supabase Image

When deploying or updating your Supabase instance, use the published CloudSync Supabase image instead of the standard Supabase Postgres image.

### For New Deployments

Follow [Supabase's Installing Supabase](https://supabase.com/docs/guides/self-hosting/docker#installing-supabase) guide to set up the initial files and `.env` configuration. Then, before the first `docker compose up -d`, update your `docker-compose.yml` to use the CloudSync-enabled Postgres image:

```yaml
db:
  image: sqlitecloud/sqlite-sync-supabase:17
  # or sqlitecloud/sqlite-sync-supabase:15
```

Use the CloudSync image tag that matches your Supabase PostgreSQL major version.

### Add the CloudSync Init Script

Create the init SQL:

```bash
mkdir -p volumes/db
cat > volumes/db/cloudsync.sql << 'EOF'
CREATE EXTENSION IF NOT EXISTS cloudsync;
EOF
```

Add a volume mount to the `db` service in `docker-compose.yml`:

```yaml
services:
  db:
    volumes:
      - ./volumes/db/cloudsync.sql:/docker-entrypoint-initdb.d/init-scripts/100-cloudsync.sql:Z
```

Then start Supabase:

```bash
docker compose pull
docker compose up -d
```

### For Existing Deployments

Follow [Supabase's Updating](https://supabase.com/docs/guides/self-hosting/docker#updating) guide. When updating the Postgres image, replace the default image with the matching CloudSync image.

If Postgres has already been initialized and you are adding CloudSync afterward, the init script will not run automatically. Connect to the database and run:

```sql
CREATE EXTENSION IF NOT EXISTS cloudsync;
```

## Step 2: Verify the Extension

```bash
docker compose exec db psql -U supabase_admin -d postgres -c "SELECT cloudsync_version();"
```

If the extension is installed correctly, PostgreSQL returns the CloudSync version string.

### Upgrading a later release

CloudSync uses the first two components of its semver as the PostgreSQL extension version. For patch releases, pull the new image and restart the `db` service. For minor or major releases, restart and then run:

```sql
ALTER EXTENSION cloudsync UPDATE;
```

You can inspect the current extension state with:

```sql
SELECT name, default_version, installed_version
FROM pg_available_extensions
WHERE name = 'cloudsync';
```

## Step 3: Register Your Database in the CloudSync Dashboard

In the [CloudSync dashboard](https://dashboard.sqlitecloud.io/), create a new workspace with the **Supabase (Self-hosted)** provider, then add a project with your PostgreSQL connection string:

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
2. Under **Authentication (JWT)**, click **Configure authentication**
3. For claim details and RLS examples, see:
   - [JWT Claims Reference](/docs/sqlite-sync-jwt-claims)
   - [RLS Reference](/docs/sqlite-sync-rls-reference)
4. In your client code:

   ```sql
   SELECT cloudsync_network_init('<database-id>');
   SELECT cloudsync_network_set_token('<jwt-token>');
   SELECT cloudsync_network_sync();
   ```

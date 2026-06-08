---
title: "Management API"
description: "Register and manage SQLite Sync databases programmatically with a workspace-admin management API key."
category: platform
status: publish
slug: sqlite-sync-cloudsync-management-api
---

You can register and manage CloudSync databases programmatically without using the dashboard UI.

This page covers only the `/v1` management endpoints that are available when you authenticate with a workspace-scoped management API key that has the `workspace-admin` role. It intentionally excludes workspace management, org-wide key management, and `/v1/admin` platform-admin endpoints.

## Authentication

```http
Authorization: Bearer <APIKEY>
```

- Base URL: `https://cloudsync.sqlite.ai`
- Use a management API key with the `workspace-admin` role.
- The workspace is derived from the key itself.
- When a workspace-scoped key creates a managed database, you must omit `workspaceId`.
- You cannot override the workspace with headers, query parameters, or path segments.

Use this API from backend services, CI, or trusted automation. Client apps should use the runtime sync APIs instead.

## Request and Response Conventions

- Send `Content-Type: application/json` for all `POST`, `PUT`, and `PATCH` bodies.
- Successful responses use the envelope `{"data": ...}`.
- List responses may also include a `meta` object.
- Error responses use a top-level `errors` array.

Example error response:

```json
{
  "errors": [
    {
      "status": "404",
      "code": "not_found",
      "title": "Not Found",
      "detail": "managed database not found"
    }
  ]
}
```

## Quickstart

Start with a workspace-level management API key from the dashboard:

```bash
export BASE_URL="https://cloudsync.sqlite.ai"
export APIKEY="<workspace-admin-management-api-key>"
export PROJECT_ID="project-a"
export DATABASE="appdb"
```

### 1. Register a Database

This creates the managed database entry in CloudSync and returns the CloudSync Database ID as `managedDatabaseId`.

```bash
curl --request POST "$BASE_URL/v1/databases" \
  --header "Authorization: Bearer $APIKEY" \
  --header "Content-Type: application/json" \
  --data '{
    "label": "Primary DB",
    "connectionString": "sqlitecloud://project.sqlite.cloud:8860?apikey=xxxx",
    "provider": "sqlitecloud",
    "flavor": "sqlitecloud",
    "projectId": "project-a",
    "databaseName": "appdb"
  }'
```

Response:

```json
{
  "data": {
    "managedDatabaseId": "db_xxxxxxxxxxxxxxxxxxxxxxxx"
  }
}
```

Use that value as `MGMT_DB_ID` in the next calls.

```bash
export MGMT_DB_ID="db_xxxxxxxxxxxxxxxxxxxxxxxx"
```

### 2. List Registered Databases

Useful when you want to recover the managed database ID later.

```bash
curl --request GET "$BASE_URL/v1/databases?projectId=$PROJECT_ID&database=$DATABASE" \
  --header "Authorization: Bearer $APIKEY"
```

### 3. Check Available CloudSync Tables

```bash
curl --request GET "$BASE_URL/v1/databases/$MGMT_DB_ID/cloudsync/tables" \
  --header "Authorization: Bearer $APIKEY"
```

### 4. Enable CloudSync for Tables

```bash
curl --request POST "$BASE_URL/v1/databases/$MGMT_DB_ID/cloudsync/enable" \
  --header "Authorization: Bearer $APIKEY" \
  --header "Content-Type: application/json" \
  --data '{
    "tables": ["users", "orders"]
  }'
```

## What a `workspace-admin` Key Can Manage

With a workspace-scoped management key, you can:

- inspect the authenticated organization with `GET /v1/orgs`
- register, list, read, update, delete, and verify managed databases in the key's workspace
- list, enable, and disable CloudSync tables for those databases
- manage Expo notification credentials and inspect notification status
- list and remove registered devices

It cannot:

- list or mutate workspaces
- create, list, or revoke management API keys
- use `/v1/admin/*` endpoints

## Endpoint Summary

| Area | Endpoints |
| --- | --- |
| Organization | `GET /v1/orgs` |
| Databases | `POST /v1/databases`, `GET /v1/databases`, `GET /v1/databases/:databaseID`, `PATCH /v1/databases/:databaseID`, `DELETE /v1/databases/:databaseID`, `GET /v1/databases/:databaseID/connection` |
| CloudSync tables | `GET /v1/databases/:databaseID/cloudsync/tables`, `POST /v1/databases/:databaseID/cloudsync/enable`, `POST /v1/databases/:databaseID/cloudsync/disable` |
| Notifications | `PUT /v1/databases/:databaseID/notifications/expo-access-token`, `GET /v1/databases/:databaseID/notifications/expo-access-token`, `DELETE /v1/databases/:databaseID/notifications/expo-access-token`, `GET /v1/databases/:databaseID/notifications/status` |
| Devices | `GET /v1/databases/:databaseID/devices`, `DELETE /v1/databases/:databaseID/devices/:siteId` |

## Organization

### `GET /v1/orgs`

Returns the organization associated with the API key.

```bash
curl "$BASE_URL/v1/orgs" \
  --header "Authorization: Bearer $APIKEY"
```

```json
{
  "data": {
    "organizationId": "org_xxxxxxxxxxxxxxxxxxxxxxxx",
    "slug": "acme",
    "name": "Acme Corp",
    "status": "active"
  }
}
```

## Databases

### `POST /v1/databases`

Registers a new managed database.

Required fields:

- `label`
- `connectionString`
- `provider` — `postgres` or `sqlitecloud`
- `flavor` — for example `vanilla`, `supabase`, or `sqlitecloud`
- `projectId`
- `databaseName`

Optional fields:

- `schemaName` — Postgres only
- `jwtAllowedIssuers`
- `jwtExpectedAudiences`
- `jwksUri`
- `jwtSecret`

Important behavior for workspace-scoped keys:

- omit `workspaceId`
- the created database is automatically attached to the workspace derived from the key

CloudSync verifies the tenant database connection before registration is persisted. If verification fails, the database is not registered.

Common database failure codes include `database_paused`, `database_auth_failed`, `database_unreachable`, `database_permission_denied`, `database_cloudsync_not_ready`, and `database_error`.

### `GET /v1/databases`

Lists managed databases visible to the key.

Supported query parameters:

- `projectId`
- `database` — requires `projectId`

Example:

```bash
curl "$BASE_URL/v1/databases?projectId=$PROJECT_ID&database=$DATABASE" \
  --header "Authorization: Bearer $APIKEY"
```

### `GET /v1/databases/:databaseID`

Fetches a single managed database in the workspace.

```bash
curl "$BASE_URL/v1/databases/$MGMT_DB_ID" \
  --header "Authorization: Bearer $APIKEY"
```

### `PATCH /v1/databases/:databaseID`

Updates metadata, auth settings, and connection details. Only the fields you send are modified.

Supported fields:

- `label`
- `connectionString`
- `jwtAllowedIssuers`
- `jwtExpectedAudiences`
- `jwksUri`
- `jwtSecret`

Notes:

- `projectId` cannot be changed
- when `connectionString` is provided, CloudSync verifies the new connection before storing it
- omitting `jwtSecret` leaves the current secret unchanged
- sending `"jwtSecret": ""` clears the current secret
- `jwtSecret` is write-only and is never returned by read endpoints

Example:

```bash
curl --request PATCH "$BASE_URL/v1/databases/$MGMT_DB_ID" \
  --header "Authorization: Bearer $APIKEY" \
  --header "Content-Type: application/json" \
  --data '{
    "label": "Primary DB (updated)",
    "jwtAllowedIssuers": ["https://project.supabase.co/auth/v1"],
    "jwtExpectedAudiences": ["authenticated"],
    "jwksUri": "https://project.supabase.co/auth/v1/.well-known/jwks.json",
    "jwtSecret": ""
  }'
```

### `DELETE /v1/databases/:databaseID`

Deletes a managed database record.

Before removal, CloudSync attempts to:

1. list CloudSync-managed tenant tables
2. disable enabled tables
3. delete pending jobs for the managed database

Cleanup is best effort. The database record is still deleted even if one of those cleanup steps reports warnings.

```bash
curl --request DELETE "$BASE_URL/v1/databases/$MGMT_DB_ID" \
  --header "Authorization: Bearer $APIKEY"
```

### `GET /v1/databases/:databaseID/connection`

Runs a live connectivity check against the managed database's stored connection details.

```bash
curl "$BASE_URL/v1/databases/$MGMT_DB_ID/connection" \
  --header "Authorization: Bearer $APIKEY"
```

Success response:

```json
{
  "data": {
    "ok": true,
    "checkedAt": "2025-01-01T00:00:00Z"
  }
}
```

Failure response:

```json
{
  "data": {
    "ok": false,
    "checkedAt": "2025-01-01T00:00:00Z",
    "failure": {
      "code": "database_unreachable",
      "message": "tenant database is unreachable",
      "retryable": true
    }
  }
}
```

## CloudSync Tables

### `GET /v1/databases/:databaseID/cloudsync/tables`

Lists tables and whether CloudSync is enabled for each one.

```bash
curl "$BASE_URL/v1/databases/$MGMT_DB_ID/cloudsync/tables" \
  --header "Authorization: Bearer $APIKEY"
```

```json
{
  "data": [
    { "name": "users", "enabled": true },
    { "name": "orders", "enabled": false }
  ]
}
```

### `POST /v1/databases/:databaseID/cloudsync/enable`

Enables CloudSync for a non-empty list of tables.

```bash
curl --request POST "$BASE_URL/v1/databases/$MGMT_DB_ID/cloudsync/enable" \
  --header "Authorization: Bearer $APIKEY" \
  --header "Content-Type: application/json" \
  --data '{"tables": ["users", "orders"]}'
```

### `POST /v1/databases/:databaseID/cloudsync/disable`

Disables CloudSync for a non-empty list of tables.

```bash
curl --request POST "$BASE_URL/v1/databases/$MGMT_DB_ID/cloudsync/disable" \
  --header "Authorization: Bearer $APIKEY" \
  --header "Content-Type: application/json" \
  --data '{"tables": ["orders"]}'
```

## Notifications

### `PUT /v1/databases/:databaseID/notifications/expo-access-token`

Sets or rotates the Expo access token used to send push notifications.

```bash
curl --request PUT "$BASE_URL/v1/databases/$MGMT_DB_ID/notifications/expo-access-token" \
  --header "Authorization: Bearer $APIKEY" \
  --header "Content-Type: application/json" \
  --data '{"expoAccessToken": "expo-access-token-value"}'
```

### `GET /v1/databases/:databaseID/notifications/expo-access-token`

Returns metadata about the Expo access token, not the token value itself.

```bash
curl "$BASE_URL/v1/databases/$MGMT_DB_ID/notifications/expo-access-token" \
  --header "Authorization: Bearer $APIKEY"
```

### `DELETE /v1/databases/:databaseID/notifications/expo-access-token`

Removes the Expo access token from the database.

```bash
curl --request DELETE "$BASE_URL/v1/databases/$MGMT_DB_ID/notifications/expo-access-token" \
  --header "Authorization: Bearer $APIKEY"
```

### `GET /v1/databases/:databaseID/notifications/status`

Returns the current push notification status for a managed database.

`status` can be `enabled`, `disabled`, or `paused`. When `status` is `paused`, `reason` explains why. Currently supported pause reasons include `expo_unauthorized`.

```bash
curl "$BASE_URL/v1/databases/$MGMT_DB_ID/notifications/status" \
  --header "Authorization: Bearer $APIKEY"
```

## Devices

### `GET /v1/databases/:databaseID/devices`

Lists registered devices for a managed database.

Query parameters:

- `page` — default `1`
- `page_size` — default `50`, max `500`

```bash
curl "$BASE_URL/v1/databases/$MGMT_DB_ID/devices?page=1&page_size=50" \
  --header "Authorization: Bearer $APIKEY"
```

### `DELETE /v1/databases/:databaseID/devices/:siteId`

Removes a registered device by `siteId`. Associated push tokens are removed as well.

```bash
curl --request DELETE "$BASE_URL/v1/databases/$MGMT_DB_ID/devices/site_123" \
  --header "Authorization: Bearer $APIKEY"
```

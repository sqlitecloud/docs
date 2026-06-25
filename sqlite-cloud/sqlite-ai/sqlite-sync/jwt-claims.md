---
title: "JWT Claims Reference"
description: "JWT claim requirements and role/grant expectations for PostgreSQL and Supabase CloudSync backends."
category: platform
status: publish
slug: sqlite-sync-jwt-claims
---

# JWT Claims Reference

## HS256 Claims

Use this mode when CloudSync validates JWTs with `jwtSecret`.

| Claim | Required? | Notes |
| --- | --- | --- |
| `sub` | Depends | Commonly used by application-specific RLS policies |
| `email` | No | Optional app-specific claim |
| `role` | Yes | Required for PostgreSQL JWT-authenticated requests because CloudSync uses it for `SET LOCAL ROLE` |
| `iss` | No | Optional in HS256 mode |
| `aud` | Depends | Required only when `jwtExpectedAudiences` is configured |
| `iat` | No | Optional issued-at timestamp |
| `exp` | Yes | Required and validated by CloudSync |

## JWKS Claims

Use this mode when CloudSync validates JWTs with `jwtAllowedIssuers` and optional `jwksUri`.

| Claim | Required? | Notes |
| --- | --- | --- |
| `sub` | Depends | Commonly used by application-specific RLS policies |
| `email` | No | Optional app-specific claim |
| `role` | Yes | Required for PostgreSQL JWT-authenticated requests because CloudSync uses it for `SET LOCAL ROLE` |
| `iss` | Yes | Required for JWKS or issuer-based validation |
| `aud` | Depends | Required only when `jwtExpectedAudiences` is configured |
| `iat` | No | Optional issued-at timestamp |
| `exp` | Yes | Required and validated by CloudSync |
| Header `kid` | Yes | Required in the JWT header so CloudSync can select the verification key from the JWKS |

## PostgreSQL Role Requirement

For PostgreSQL JWT authentication, the `role` claim must name a real database role that CloudSync can switch into with `SET LOCAL ROLE`.

That role should:

- already exist in PostgreSQL
- have the schema, table, and sequence privileges your sync operations need
- be grantable by the connection-string user

If the JWT contains a `role` that does not exist, or the connection user cannot switch into it, PostgreSQL sync operations will fail even if the JWT itself is otherwise valid.

### Creating the Role

```sql
CREATE ROLE rls_role NOLOGIN;
GRANT rls_role TO postgres;
```

### Required Grants

`cloudsync_payload_apply` running as a non-superuser touches several internal CloudSync objects during apply — not just your user table. If any grant is missing on an internal object, the per-PK savepoint silently rolls back the write and the caller sees a non-zero column-change count with no rows landing.

Recommended setup:

```sql
GRANT USAGE ON SCHEMA public TO rls_role;
GRANT USAGE ON SCHEMA auth   TO rls_role;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER
    ON TABLES TO rls_role;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT USAGE, SELECT, UPDATE ON SEQUENCES TO rls_role;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT EXECUTE ON FUNCTIONS TO rls_role;
```

If the extension is already installed, backfill existing objects with one-time grants and keep the default-privileges block for future objects.

## How CloudSync Passes JWT Claims to PostgreSQL

CloudSync validates the JWT and passes all claims to PostgreSQL via `request.jwt.claims`. It also executes `SET LOCAL ROLE` from the JWT `role` claim.

That means RLS policies can read claims with expressions such as:

```sql
current_setting('request.jwt.claims')::jsonb->>'sub'
current_setting('request.jwt.claims')::jsonb->>'role'
```

## Optional Helper Functions

If you want shorter policy expressions, create convenience wrappers:

```sql
CREATE SCHEMA IF NOT EXISTS auth;

CREATE OR REPLACE FUNCTION auth.session()
RETURNS jsonb AS $$
  SELECT current_setting('request.jwt.claims', true)::jsonb;
$$ LANGUAGE SQL STABLE;

CREATE OR REPLACE FUNCTION auth.user_id()
RETURNS text AS $$
  SELECT auth.session()->>'sub';
$$ LANGUAGE SQL STABLE;

CREATE OR REPLACE FUNCTION auth.role()
RETURNS text AS $$
  SELECT auth.session()->>'role';
$$ LANGUAGE SQL STABLE;
```

For RLS behavior and troubleshooting, see the [RLS reference](/docs/sqlite-sync-rls-reference).

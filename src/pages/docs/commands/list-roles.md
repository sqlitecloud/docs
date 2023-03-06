---
title: LIST ROLES
description: The LIST ROLES command returns a rowset containing all the ROLES (built-in and user-defined) configured into SQLite Cloud
---

## Syntax

LIST ROLES

## Privileges

```
USERADMIN
```

## Description

The LIST ROLES command returns a rowset containing all the ROLES (built-in and user-defined) configured into SQLite Cloud. A ROLE can be associated with a specific database or table or globally defined (in that case, the databasename and/or tablename columns are set to `*`).

## Return

A [Rowset](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) with the following columns:
* **rolename**: the name of the role
* **builtin**: 1 if it is a built-in role, 0 otherwise
* **privileges**: a comma separated list of privileges associated to the role
* **databasename**: an optional database name to further restrict the role
* **tablename**: an optional table name to further restrict the role

## Example

```bash
> LIST ROLES
-----------------------|---------|-----------------------------|--------------|-----------|
 rolename              | builtin | privileges                  | databasename | tablename |
-----------------------|---------|-----------------------------|--------------|-----------|
 ADMIN                 | 1       | READ,INSERT,UPDATE,...      | NULL         | NULL      |
 READ                  | 1       | READ                        | NULL         | NULL      |
 READANYDATABASE       | 1       | READ                        | *            | *         |
 READWRITE             | 1       | READ,INSERT,UPDATE,...      | NULL         | NULL      |
 READWRITEANYDATABASE  | 1       | READ,INSERT,UPDATE,...      | *            | *         |
 DBADMIN               | 1       | READ,INSERT,UPDATE,...      | NULL         | NULL      |
 DBADMINANYDATABASE    | 1       | READ,INSERT,UPDATE,...      | *            | *         |
 USERADMIN             | 1       | USERADMIN                   | NULL         | NULL      |
 CLUSTERADMIN          | 1       | CLUSTERADMIN                | NULL         | NULL      |
 CLUSTERMONITOR        | 1       | CLUSTERMONITOR              | NULL         | NULL      |
 HOSTADMIN             | 1       | BACKUP,RESTORE,...          | NULL         | NULL      |
 SUB                   | 1       | SUB                         | NULL         | NULL      |
 SUBANYCHANNEL         | 1       | SUB                         | *            | *         |
 PUB                   | 1       | PUB                         | NULL         | NULL      |
 PUBANYCHANNEL         | 1       | PUB                         | *            | *         |
 PUBSUB                | 1       | SUB,PUB,PUBSUB              | NULL         | NULL      |
 PUBSUBANYCHANNEL      | 1       | SUB,PUB,PUBSUB              | *            | *         |
 PUBSUBADMIN           | 1       | SUB,PUB,PUBSUB,PUBSUBCREATE | NULL         | NULL      |
 PUBSUBADMINANYCHANNEL | 1       | SUB,PUB,PUBSUB,PUBSUBCREATE | *            | *         |
-----------------------|---------|-----------------------------|--------------|-----------|
```

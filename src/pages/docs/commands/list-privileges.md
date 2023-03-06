---
title: LIST PRIVILEGES
description: The LIST PRIVILEGES command returns a rowset that contains a list of all the privileges built into SQLite Cloud
---

## Syntax

LIST PRIVILEGES

## Privileges

```
USERADMIN
```

## Description

The LIST PRIVILEGES command returns a rowset that contains a list of all the privileges built into SQLite Cloud.

## Return

A [Rowset](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) with one privilege **name** column.

## Example

```bash
> LIST PRIVILEGES
-----------------|
 name            |
-----------------|
 NONE            |
 READ            |
 INSERT          |
 UPDATE          |
 DELETE          |
 READWRITE       |
 PRAGMA          |
 CREATE_TABLE    |
 CREATE_INDEX    |
 CREATE_VIEW     |
 CREATE_TRIGGER  |
 DROP_TABLE      |
 DROP_INDEX      |
 DROP_VIEW       |
 DROP_TRIGGER    |
 ALTER_TABLE     |
 ANALYZE         |
 ATTACH          |
 DETACH          |
 DBADMIN         |
 SUB             |
 PUB             |
 PUBSUB          |
 BACKUP          |
 RESTORE         |
 DOWNLOAD        |
 PLUGIN          |
 SETTINGS        |
 USERADMIN       |
 CLUSTERADMIN    |
 CLUSTERMONITOR  |
 CREATE_DATABASE |
 DROP_DATABASE   |
 HOSTADMIN       |
 ADMIN           |
 PUBSUBCREATE    |
-----------------|
```

---
title: USE DATABASE
description: The USE DATABASE statement tells SQLite Cloud to use the named database as the default (current) database for subsequent SQL statements
---

## Syntax

USE DATABASE **database_name**

## Privileges

```
DBADMIN, PUBSUB
```

## Description

The USE DATABASE statement tells SQLite Cloud to use the named database as the default (current) database for subsequent SQL statements.

## Return

OK string or error value (see [SCSP](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) protocol).

## Example

```bash
> USE DATABASE test.sqlite
OK
```

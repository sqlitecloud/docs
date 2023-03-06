---
title: ENABLE DATABASE
description: Use this command to ENABLE a previously disabled database
---

## Syntax

ENABLE DATABASE **database_name**

## Privileges

```
DBADMIN
```

## Description

Use this command to ENABLE a previously disabled database. Once re-enabled, the database will be available again for use with the USE DATABASE command.

## Return

OK string or error value (see [SCSP](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) protocol).

## Example

```bash
> ENABLE DATABASE test.sqlite
OK
```

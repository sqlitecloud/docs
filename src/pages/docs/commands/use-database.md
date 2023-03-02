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

OK

## Example

```bash
> USE DATABASE test.sqlite
OK
```

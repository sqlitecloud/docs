---
title: ANALYZER RESET
description: The ANALYZER RESET command is used to reset statistics about a specific query, a specific database or about all the query analyzer engine (if no options are used).
---

## Syntax

ANALYZER RESET [ID **query_id**] [GROUPID **query_id**] [DATABASE **database_name**] [ALL] [NODE **nodeid**]

## Privileges

```
DBADMIN
```

## Description

The ANALYZER RESET command is used to reset statistics about a specific query, a specific database or about all the query analyzer engine (if no options are used).

## Return

OK

## Example

```bash
> ANALYZER RESET
OK
```

---
title: REMOVE DATABASE
description: Use this command to permanently remove <keyname> from the list of settings for the database <database_name>.
---

## Syntax

REMOVE DATABASE **database_name** KEY **keyname**

## Privileges

```
READWRITE, DBADMIN
```

## Description

Use this command to permanently remove <keyname> from the list of settings for the database <database_name>.

## Return

OK

## Example

```bash
> REMOVE DATABASE mediastore.sqlite KEY key1
OK
```

---
title: REVOKE ROLE
description: Use this command to revoke a role from the USER username
---

## Syntax

REVOKE ROLE **role_name** USER **username** [DATABASE **database_name**] [TABLE **table_name**]

## Privileges

```
USERADMIN
```

## Description

Use this command to revoke a role from the USER **username**. You can further restrict this command by specifying a database and/or a table name.

## Return

OK

## Example

```bash
> REVOKE ROLE role1 USER user1
OK
```

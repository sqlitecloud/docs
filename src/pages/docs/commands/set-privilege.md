---
title: SET PRIVILEGE
description: The SET PRIVILEGE command grants only specified privileges to a role
---

## Syntax

SET PRIVILEGE **privilege_name** ROLE **role_name** [DATABASE **database_name**] [TABLE **table_name**]

## Privileges

```
USERADMIN
```

## Description

The SET PRIVILEGE command grants only specified privileges to a role. Previously granted privileges are revoked. The **privilege_name** parameter can be a list of comma-separated privileges.

## Return

OK

## Example

```bash
> SET PRIVILEGE readwrite ROLE role1
OK
```

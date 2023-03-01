---
title: SET PRIVILEGE
description: The SET PRIVILEGE command is used to grant only specified privileges to a role, previously granted privileges are revoked. The <privilege_name> parameter can be a list of comma separated privileges.
---

## SET PRIVILEGE

### Syntax

SET PRIVILEGE **privilege_name** ROLE **role_name** [DATABASE **database_name**] [TABLE **table_name**]

### Privileges

```
USERADMIN
```

### Description

The SET PRIVILEGE command is used to grant only specified privileges to a role, previously granted privileges are revoked. The <privilege_name> parameter can be a list of comma separated privileges.

### Return

OK

### Example

```bash
> SET PRIVILEGE readwrite ROLE role1
OK
```

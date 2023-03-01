---
title: CREATE ROLE
description: Roles grant users access to SQLite Cloud resources (a database, a table or global). SQLite Cloud provides a number of built-in roles that administrators can use to control access to a SQLite Cloud system. However, if these roles cannot describe the desired set of privileges, you can create new roles in a particular database/table.
The optional PRIVILEGE parameter can be use to specify which privileges (in comma separated format) must be associated to the ROLE. A privilege can be later be associated to a ROLE by using the GRANT PRIVILEGE command.
The DATABASE and TABLE optional arguments can be used to restrict the particular ROLE to a specific resource (otherwise the ROLE is considered to be global).
---

## CREATE ROLE

### Syntax

CREATE ROLE **role_name** [PRIVILEGE **privilege_name**] [DATABASE **database_name**] [TABLE **table_name**]

### Privileges

```
USERADMIN
```

### Description

Roles grant users access to SQLite Cloud resources (a database, a table or global). SQLite Cloud provides a number of built-in roles that administrators can use to control access to a SQLite Cloud system. However, if these roles cannot describe the desired set of privileges, you can create new roles in a particular database/table.
The optional PRIVILEGE parameter can be use to specify which privileges (in comma separated format) must be associated to the ROLE. A privilege can be later be associated to a ROLE by using the GRANT PRIVILEGE command.
The DATABASE and TABLE optional arguments can be used to restrict the particular ROLE to a specific resource (otherwise the ROLE is considered to be global).

### Return

OK

### Example

```bash
> CREATE ROLE sample_role PRIVILEGE CLUSTERADMIN,CLUSTERMONITOR,READWRITE
OK
```

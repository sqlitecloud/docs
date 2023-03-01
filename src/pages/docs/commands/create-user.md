---
title: CREATE USER
description: The CREATE USER command adds a new user username with a specified password to the server. During user creation you can also pass a comma separated list of roles to apply to that user. The DATABASE and/or TABLE arguments can further restrict the which resources the user can access.
---

## Syntax

CREATE USER **username** PASSWORD **password** [ROLE **role_name**] [DATABASE **database_name**] [TABLE **table_name**]

## Privileges

```
USERADMIN
```

## Description

The CREATE USER command adds a new user **username** with a specified **password** to the server. During user creation you can also pass a comma separated list of roles to apply to that user. The DATABASE and/or TABLE arguments can further restrict the which resources the user can access.

## Return

OK

## Example

```bash
> CREATE USER user1 PASSWORD gdfhjs76fdgshj
OK
```

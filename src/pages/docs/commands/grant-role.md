---
title: GRANT ROLE
description: Use this command to add a new role_name to an existing username. You can further restrict this operation by specifying a database_name and/or a table_name.
---

## Syntax

GRANT ROLE **role_name** USER **username** [DATABASE **database_name**] [TABLE **table_name**]

## Privileges

```
USERADMIN
```

## Description

Use this command to add a new **role_name** to an existing username. You can further restrict this operation by specifying a **database_name** and/or a **table_name**.

## Return

OK

## Example

```bash
> GRANT ROLE role1 USER user1
OK
```

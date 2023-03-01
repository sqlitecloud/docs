---
title: LIST USERS
description: The LIST USERS command is used to retrieve a list of all users created in the server. The WITH ROLES argument adds also a column with a list of roles associated to each username. To restrict the list to all the users that get access to a specific database and/or table you can use the DATABASE and/or TABLE arguments.
---

## LIST USERS

### Syntax

LIST USERS [WITH ROLES] [DATABASE **database_name**] [TABLE **table_name**]

### Privileges

```
USERADMIN
```

### Description

The LIST USERS command is used to retrieve a list of all users created in the server. The WITH ROLES argument adds also a column with a list of roles associated to each username. To restrict the list to all the users that get access to a specific database and/or table you can use the DATABASE and/or TABLE arguments.

### Return

A rowset with the following columns:  `username`, `enabled, `roles, `databasename`, and `tablename`.

### Example

```bash
> LIST USERS
----------|---------|
 username | enabled |
----------|---------|
 admin    | 1       |
----------|---------|

> LIST USERS WITH ROLES
----------|---------|-------|--------------|-----------|
 username | enabled | roles | databasename | tablename |
----------|---------|-------|--------------|-----------|
 admin    | 1       | ADMIN | *            | *         |
----------|---------|-------|--------------|-----------|
```

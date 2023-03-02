---
title: LIST USERS
description: The LIST USERS command retrieves a list of all users created on the server
---

## Syntax

LIST USERS [WITH ROLES] [DATABASE **database_name**] [TABLE **table_name**]

## Privileges

```
USERADMIN
```

## Description

The LIST USERS command retrieves a list of all users created on the server. The WITH ROLES argument also adds a column with a list of roles associated with each username. To restrict the list to all the users that get access to a specific database and/or table you can use the DATABASE and/or TABLE arguments.

## Return

A rowset with the following columns:  `username`, `enabled, `roles, `databasename`, and `tablename`.

## Example

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

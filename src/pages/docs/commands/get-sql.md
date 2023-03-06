---
title: GET SQL
description: The GET SQL command retrieves the SQL statement used to generate the table_name
---

## Syntax

GET SQL **table_name**

## Privileges

```
READWRITE
```

## Description

The GET SQL command retrieves the SQL statement used to generate the **table_name**.

## Return

A [String](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) set to the CREATE TABLE sql statement.

## Example

```bash
> GET SQL table1
CREATE TABLE table1 (id INTEGER PRIMARY KEY, name TEXT, surname TEXT, age INTEGER);
```

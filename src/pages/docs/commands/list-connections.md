---
title: LIST CONNECTIONS
description: The LIST CONNECTIONS command returns information about the client connections server, The NODE parameter is used to specify in which node to execute that command.
---

## Syntax

LIST CONNECTIONS [NODE **nodeid**]

## Privileges

```
USERADMIN, HOSTADMIN
```

## Description

The LIST CONNECTIONS command returns information about the client connections server,
The NODE parameter is used to specify in which node to execute that command.

## Return

A rowset with the following columns: `id`, `address`, `username`, `database`,  `connection_dat` and `last_activity`.

## Example

```bash
> LIST CONNECTIONS
----|-----------|----------|----------|---------------------|---------------------|
 id | address   | username | database | connection_date     | last_activity       |
----|-----------|----------|----------|---------------------|---------------------|
 1  | 127.0.0.1 | admin    | NULL     | 2023-02-08 15:28:32 | 2023-02-08 15:34:51 |
----|-----------|----------|----------|---------------------|---------------------|

```

---
title: LIST CONNECTIONS
description: The LIST CONNECTIONS command returns information about the client connections server
---

## Syntax

LIST CONNECTIONS [NODE **nodeid**]

## Privileges

```
USERADMIN, HOSTADMIN
```

## Description

The LIST CONNECTIONS command returns information about the client connections server. The NODE argument forces the execution of the command to a specific node of the cluster.

## Return

A [Rowset](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) with the following columns:
* **id**: unique connection (client) ID
* **address**: source connection IP address
* **username**: username used to authenticate the connection
* **connection_date**: original connection date and time
* **last_activity**: last activity date and time
* **address**: source connection IP address

## Example

```bash
> LIST CONNECTIONS
----|-----------|----------|----------|---------------------|---------------------|
 id | address   | username | database | connection_date     | last_activity       |
----|-----------|----------|----------|---------------------|---------------------|
 1  | 127.0.0.1 | admin    | NULL     | 2023-02-08 15:28:32 | 2023-02-08 15:34:51 |
----|-----------|----------|----------|---------------------|---------------------|

```

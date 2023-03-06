---
title: LIST ANALYZER
description: The LIST ANALYZER command returns a rowset with the slowest queries performed on the connected server
---

## Syntax

LIST ANALYZER [GROUPID **group_id**] [DATABASE **database_name**] [GROUPED] [NODE **nodeid**]

## Privileges

```
DBADMIN
```

## Description

The LIST ANALYZER command returns a rowset with the slowest queries performed on the connected server.
The result of the LIST ANALYZER command can be further filtered using the GROUPID, DATABASE, and GROUPED options.
This command is usually performed with the GROUPED flag to group the slowest queries and reduce the output. The NODE argument forces the execution of the command to a specific node of the cluster.

## Return

A [Rowset](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) with columns that depend on the command flags.

## Example

```bash
> LIST ANALYZER GROUPED
----------|--------------------------------------|--------------------|-------------------|-----------------|-------------------|
 group_id | sql                                  | database           | AVG(query_time)   | MAX(query_time) | COUNT(query_time) |
----------|--------------------------------------|--------------------|-------------------|-----------------|-------------------|
 57       | SELECT*FROM customers;               | chinook-enc.sqlite | 2.02896333333333  | 2.462731        | 3                 |
 54       | SELECT*FROM customers;               | chinook.sqlite     | 1.907214          | 1.907214        | 1                 |
 62       | SELECT*FROM t1 WHERE _rowid_=?;      | db1.sqlite         | 1.238739          | 1.238739        | 1                 |
 82       | SELECT*FROM albums;                  | chinook.sqlite     | 0.924273967741935 | 2.081847        | 31                |
 52       | SELECT*FROM artists;                 | chinook.sqlite     | 0.820239          | 0.944221        | 2                 |
 77       | SELECT*FROM t1;                      | db1.sqlite         | 0.6965005         | 0.706278        | 2                 |
 34       | SELECT*FROM artists WHERE _rowid_=?; | chinook.sqlite     | 0.659359          | 0.659359        | 1                 |
 66       | SELECT*FROM playlists;               | chinook.sqlite     | 0.634047666666667 | 0.720039        | 3                 |
----------|--------------------------------------|--------------------|-------------------|-----------------|-------------------|

> LIST ANALYZER GROUPID 57
----|------------------------|--------------------|------------|---------------------|
 id | sql                    | database           | query_time | datetime            |
----|------------------------|--------------------|------------|---------------------|
 57 | SELECT*FROM customers; | chinook-enc.sqlite | 1.633654   | 2022-12-27 20:42:04 |
 56 | SELECT*FROM customers; | chinook-enc.sqlite | 1.990505   | 2022-12-27 20:42:03 |
 55 | SELECT*FROM customers; | chinook-enc.sqlite | 2.462731   | 2022-12-27 20:41:43 |
----|------------------------|--------------------|------------|---------------------|
 
```

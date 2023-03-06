---
title: ANALYZER PLAN ID
description: The ANALYZER PLAN ID command is used to gather information about the indexes used in the query plan of a query execution
---

## Syntax

ANALYZER PLAN ID **query_id** [NODE **nodeid**]

## Privileges

```
DBADMIN
```

## Description

The ANALYZER PLAN ID command is used to gather information about the indexes used in the query plan of a query execution. Usually a SCAN tablename entry in the detail column, indicates that no indexes are found and a full table scan must be performed. The NODE argument forces the execution of the command to a specific node of the cluster.

## Return

A [Rowset](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) with an analysis about the query id.

## Example

```bash
> ANALYZER PLAN ID 57
----|--------|---------|----------------|
 id | parent | notused | detail         |
----|--------|---------|----------------|
 2  | 0      | 0       | SCAN customers |
----|--------|---------|----------------|
```

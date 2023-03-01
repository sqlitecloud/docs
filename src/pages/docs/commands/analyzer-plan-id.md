---
title: ANALYZER PLAN ID
description: The ANALYZER PLAN ID command is used to gather information about the indexes used in the query plan of a query execution. Usually a SCAN tablename entry indicates that no indexes are found and a full table scan must be performed.
---

## Syntax

ANALYZER PLAN ID **query_id** [NODE **nodeid**]

## Privileges

```
DBADMIN
```

## Description

The ANALYZER PLAN ID command is used to gather information about the indexes used (or not used) in the query plan of a query execution.
Usually a SCAN tablename entry indicates that no indexes are found and a full table scan must be performed.

## Return

A rowset with an analysis about the query id.

## Example

```bash
> ANALYZER PLAN ID 57
----|--------|---------|----------------|
 id | parent | notused | detail         |
----|--------|---------|----------------|
 2  | 0      | 0       | SCAN customers |
----|--------|---------|----------------|
```

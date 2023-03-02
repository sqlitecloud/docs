---
title: LIST NODES
description: The LIST NODES command returns a rowset with information about all the nodes that compose the cluster environment
---

## Syntax

LIST NODES

## Privileges

```
CLUSTERADMIN, CLUSTERMONITOR
```

## Description

The LIST NODES command returns a rowset with information about all the nodes that compose the cluster environment. In addition to static information, this command also reports up-to-date information about the Raft status of each node.

## Return

A rowset with the following columns: `id`, `node`, `cluster`, `status`, `progress`, `match`, `last_activity`

## Example

```bash
> LIST NODES
----|--------------------------|---------------------------|----------|-----------|-------|---------------------|
 id | node                     | cluster                   | status   | progress  | match | last_activity       |
----|--------------------------|---------------------------|----------|-----------|-------|---------------------|
 1  | dev1.sqlitecloud.io:9960 | dev1.sqlitecloud.io:10960 | Follower | Replicate | 13463 | 2023-02-08 08:17:08 |
 2  | dev2.sqlitecloud.io:9960 | dev2.sqlitecloud.io:10960 | Leader   | Replicate | 13463 | 2023-02-08 08:17:08 |
 3  | dev3.sqlitecloud.io:9960 | dev3.sqlitecloud.io:10960 | Follower | Replicate | 13463 | 2023-02-08 08:17:08 |
----|--------------------------|---------------------------|----------|-----------|-------|---------------------|

```

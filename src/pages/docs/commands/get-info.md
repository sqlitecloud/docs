---
title: GET INFO
description: The GET INFO command retrieves a single specific information about a key
---

## Syntax

GET INFO **key** [NODE **nodeid**]

## Privileges

```
CLUSTERADMIN, CLUSTERMONITOR
```

## Description

The GET INFO command retrieves a single specific information about a **key**. The NODE argument forces the execution of the command to a specific node of the cluster.

## Return

A single value (usually a [String](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md)) that depends on the input **key**.

## Example

```bash
> GET INFO sqlitecloud_version
0.9.8
```

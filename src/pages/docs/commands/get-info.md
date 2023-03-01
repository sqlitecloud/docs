---
title: GET INFO
description: The GET INFO command is used to retrieve a single specific information about a <key>.
This command can be executed on a specific nodeid by using the NODE argument.
---

## Syntax

GET INFO **key** [NODE **nodeid**]

## Privileges

```
CLUSTERADMIN, CLUSTERMONITOR
```

## Description

The GET INFO command is used to retrieve a single specific information about a <key>.
This command can be executed on a specific nodeid by using the NODE argument.

## Return

A single value (usually a string) that depends on the input <key>.

## Example

```bash
> GET INFO sqlitecloud_version
0.9.8
```

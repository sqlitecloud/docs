---
title: PING
description: The PING command is provided to test whether a connection is still alive
---

## Syntax

PING

## Privileges

```
NONE
```

## Description

The PING command is provided to test whether a connection is still alive.

This command is also useful for:
1. Verifying the server's ability to serve data - an error is returned when this isn't the case.
2. Measuring latency.

## Return

It returns the "PONG" [String](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md). 

## Example

```bash
> PING
PONG
```

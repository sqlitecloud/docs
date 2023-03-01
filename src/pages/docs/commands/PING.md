---
title: PING
description: The PING command is provided to testing whether a connection is still alive.
This command is also useful for:

1. Verifying the server's ability to serve data - an error is returned when this isn't the case.
2. Measuring latency.
---

## PING

### Syntax

PING

### Privileges

```
NONE
```

### Description

The PING command is provided to testing whether a connection is still alive.
This command is also useful for:

1. Verifying the server's ability to serve data - an error is returned when this isn't the case.
2. Measuring latency.

### Return

It returns the "PONG" string. 

### Example

```bash
> PING
PONG
```

---
title: SLEEP
description: The SLEEP command forces the current connection to sleep on the server-side for a specified amount of milliseconds
---

## Syntax

SLEEP **ms**

## Privileges

```
NONE
```

## Description

The SLEEP command forces the current connection to sleep on the server-side for a specified amount of milliseconds.

## Return

OK string or error value (see [SCSP](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) protocol).

## Example

```bash
> SLEEP 100
OK (after 100ms)
```

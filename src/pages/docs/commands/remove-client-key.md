---
title: REMOVE CLIENT KEY
description: The REMOVE CLIENT KEY command is used to reset to a default value a keyname
---

## Syntax

REMOVE CLIENT KEY **keyname**

## Privileges

```
NONE
```

## Description

The REMOVE CLIENT KEY command is used to reset to a default value a **keyname**

## Return

OK string or error value (see [SCSP](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) protocol).

## Example

```bash
> REMOVE CLIENT KEY COMPRESSION
OK
```

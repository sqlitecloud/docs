---
title: SET MY PASSWORD
description: The SET MY PASSWORD command changes the password for the currently connected user
---

## Syntax

SET MY PASSWORD **password**

## Privileges

```
NONE
```

## Description

The SET MY PASSWORD command changes the password for the currently connected user.

## Return

OK string or error value (see [SCSP](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) protocol).

## Example

```bash
> SET MY PASSWORD foo
OK
```

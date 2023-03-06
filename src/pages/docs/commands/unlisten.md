---
title: UNLISTEN
description: The UNLISTEN command is used to stop receiving notifications about a particular channel/table
---

## Syntax

UNLISTEN [TABLE] **channel_name**

## Privileges

```
NONE
```

## Description

The UNLISTEN command is used to stop receiving notifications about a particular channel/table.
In the case of TABLE, the channel_name can be *, meaning you'll stop receiving notifications from all the tables inside the current database.

## Return

OK string or error value (see [SCSP](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) protocol).

## Example

```bash
> UNLISTEN channel1
OK
```

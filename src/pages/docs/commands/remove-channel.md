---
title: REMOVE CHANNEL
description: The REMOVE CHANNEL command completely deletes a previously created channel
---

## Syntax

REMOVE CHANNEL **channel_name**

## Privileges

```
PUBSUBCREATE
```

## Description

The REMOVE CHANNEL command completely deletes a previously created channel.

## Return

OK string or error value (see [SCSP](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) protocol).

## Example

```bash
> REMOVE CHANNEL channel1
OK
```

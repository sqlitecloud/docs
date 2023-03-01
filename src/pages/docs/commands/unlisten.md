---
title: UNLISTEN
description: The UNLISTEN command is used to stop receiving notification about a particular channel/table.
In case of TABLE the channel_name can be *, that means that you'll stop receiving notification from all the tables inside the current database.
---

## Syntax

UNLISTEN [TABLE] **channel_name**

## Privileges

```
NONE
```

## Description

The UNLISTEN command is used to stop receiving notification about a particular channel/table.
In case of TABLE the channel_name can be *, that means that you'll stop receiving notification from all the tables inside the current database.

## Return

OK

## Example

```bash
> UNLISTEN channel1
OK
```

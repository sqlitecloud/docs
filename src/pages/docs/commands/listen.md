---
title: LISTEN
description: The LISTEN command is used to start receiving notification for a given channel/table.
If the current connection is already registered as a listener for this notification channel, nothing is done.
The optional TABLE flag is used to specify that you want to receive notification for a given table inside the current database.
LISTENING a table means that you'll receive notification about all the write operations that occurs in that table.
In case of TABLE the channel_name can be *, that means that you'll start receiving notification from all the tables inside the current database.

---

## Syntax

LISTEN [TABLE] **channel_name**

## Privileges

```
SUB
```

## Description

The LISTEN command is used to start receiving notification for a given channel/table.
If the current connection is already registered as a listener for this notification channel, nothing is done.
The optional TABLE flag is used to specify that you want to receive notification for a given table inside the current database.
LISTENING a table means that you'll receive notification about all the write operations that occurs in that table.
In case of TABLE the channel_name can be *, that means that you'll start receiving notification from all the tables inside the current database.


## Return

OK

## Example

```bash
> LISTEN channel1
OK
```

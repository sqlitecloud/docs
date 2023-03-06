---
title: REMOVE ALLOWED IP
description: The REMOVE ALLOWED IP command permanently removes the ip_address from the list of allowed IPs
---

## Syntax

REMOVE ALLOWED IP **ip_address** [ROLE **role_name**] [USER **username**]

## Privileges

```
USERADMIN
```

## Description

The REMOVE ALLOWED IP command permanently removes the **ip_address** from the list of allowed IPs. You can specify a ROLE and/or a USER to restrict the filter further.

## Return

OK string or error value (see [SCSP](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) protocol).

## Example

```bash
> REMOVE ALLOWED IP 192.168.1.1
OK
```

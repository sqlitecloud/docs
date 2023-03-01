---
title: REMOVE ALLOWED IP
description: The REMOVE ALLOWED IP command permanently remove the <ip_address> from the list of allowed IP. You can specify a ROLE and/or a USER to further restrict the filter.
---

## Syntax

REMOVE ALLOWED IP **ip_address** [ROLE **role_name**] [USER **username**]

## Privileges

```
USERADMIN
```

## Description

The REMOVE ALLOWED IP command permanently remove the <ip_address> from the list of allowed IP. You can specify a ROLE and/or a USER to further restrict the filter.

## Return

OK

## Example

```bash
> REMOVE ALLOWED IP 192.168.1.1
OK
```

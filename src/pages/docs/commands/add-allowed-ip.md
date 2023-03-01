---
title: ADD ALLOWED IP
description: The ADD ALLOWED IP command restricts access for the role or user by allowing only some IP addresses. Ranges are in CIDR notation like 10.10.10.0/24 can be used. IPv4 and IPv6 addresses are supported.
---

## Syntax

ADD ALLOWED IP **ip_address** [ROLE **role_name**] [USER **username**]

## Privileges

```
USERADMIN
```

## Description

The ADD ALLOWED IP command restricts access for the role or user by allowing only some IP addresses. Ranges are in CIDR notation like 10.10.10.0/24 can be used. IPv4 and IPv6 addresses are supported.

## Return

OK

## Example

```bash
> ADD ALLOWED IP 10.10.10.0/24 USER user1
OK
```

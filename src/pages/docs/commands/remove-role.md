---
title: REMOVE ROLE
description: The REMOVE ROLE command permanently deletes the role_name from the server
---

## Syntax

REMOVE ROLE **role_name**

## Privileges

```
SETTINGS
```

## Description

The REMOVE ROLE command permanently deletes the **role_name** from the server. The role is also removed from users, privileges, and IP restrictions tables as a side effect.

## Return

OK

## Example

```bash
> REMOVE ROLE role1
OK
```

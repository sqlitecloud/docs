---
title: REMOVE ROLE
description: The REMOVE ROLE command permanently delete the role_name from the server. As a side-effect the role is removed also from users, privileges and IP restrictions tables.
---

## Syntax

REMOVE ROLE **role_name**

## Privileges

```
SETTINGS
```

## Description

The REMOVE ROLE command permanently delete the **role_name** from the server. As a side-effect the role is removed also from users, privileges and IP restrictions tables.

## Return

OK

## Example

```bash
> REMOVE ROLE role1
OK
```

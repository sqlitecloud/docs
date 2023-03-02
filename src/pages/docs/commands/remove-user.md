---
title: REMOVE USER
description: The REMOVE USER command removes the user specified in the username parameter from the system
---

## Syntax

REMOVE USER **username**

## Privileges

```
USERADMIN
```

## Description

The REMOVE USER command removes the user specified in the **username** parameter from the system. After command execution, the **username** cannot log in to the server. Admin users cannot be removed from the system.

## Return

OK

## Example

```bash
> REMOVE USER user1
OK
```

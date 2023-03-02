---
title: DISABLE USER
description: The DISABLE USER command disables a specified username from the system (it does not remove it)
---

## Syntax

DISABLE USER **username**

## Privileges

```
USERADMIN
```

## Description

The DISABLE USER command disables a specified username from the system (it does not remove it).
After command execution, the user specified in the **username** argument can no longer log into the system.

## Return

OK

## Example

```bash
> DISABLE USER user1
OK
```

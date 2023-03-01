---
title: DISABLE USER
description: The DISABLE USER command is used to disable (and not remove) a specified username from the system.
After command execution the user specified in the <username> argument will be no longer able to log-into the system.
---

## DISABLE USER

### Syntax

DISABLE USER **username**

### Privileges

```
USERADMIN
```

### Description

The DISABLE USER command is used to disable (and not remove) a specified username from the system.
After command execution the user specified in the <username> argument will be no longer able to log-into the system.

### Return

OK

### Example

```bash
> DISABLE USER user1
OK
```

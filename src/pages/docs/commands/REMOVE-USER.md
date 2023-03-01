---
title: REMOVE USER
description: The REMOVE USER command remove the user specified in the <username> parameter from the system. After command execution the <username> will not be able to login to the server. Admin user cannot be removed from the system.
---

## REMOVE USER

### Syntax

REMOVE USER **username**

### Privileges

```
USERADMIN
```

### Description

The REMOVE USER command remove the user specified in the <username> parameter from the system. After command execution the <username> will not be able to login to the server. Admin user cannot be removed from the system.

### Return

OK

### Example

```bash
> REMOVE USER user1
OK
```

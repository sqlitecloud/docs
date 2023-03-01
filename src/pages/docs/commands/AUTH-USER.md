---
title: AUTH USER
description: The AUTH command authenticates the current connection, without authentication the connection cannot send any command to the server.
---

## AUTH USER

### Syntax

AUTH USER **username** PASSWORD **password**

### Privileges

```
NONE
```

### Description

The AUTH command authenticates the current connection, without authentication the connection cannot send any command to the server.

### Return

OK

### Example

```bash
> AUTH USER admin PASSWORD test
OK
```

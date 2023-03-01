---
title: UNUSE DATABASE
description: The UNUSE DATABASE statement tells SQLite Cloud to close connection with the currently used database (previously set by a USE DATABASE statement). In no database is currently set then no error is returned.
---

## UNUSE DATABASE

### Syntax

UNUSE DATABASE

### Privileges

```
READWRITE
```

### Description

The UNUSE DATABASE statement tells SQLite Cloud to close connection with the currently used database (previously set by a USE DATABASE statement). In no database is currently set then no error is returned.

### Return

OK

### Example

```bash
> USE DATABASE test.sqlite
OK

> UNUSE DATABASE
OK
```

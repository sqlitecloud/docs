---
title: DISABLE DATABASE
description: Use this command to disable a database. Established connections will continue to have that database in use. The disabled database affects only new connection.
---

## DISABLE DATABASE

### Syntax

DISABLE DATABASE **database_name**

### Privileges

```
DBADMIN
```

### Description

Use this command to disable a database. Established connections will continue to have that database in use. The disabled database affects only new connection.

### Return

OK

### Example

```bash
> DISABLE DATABASE test.sqlite
OK
```

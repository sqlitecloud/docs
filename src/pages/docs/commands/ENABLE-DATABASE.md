---
title: ENABLE DATABASE
description: Use this command to ENABLE a previously disabled database. Once re-enabled that database will be available again to be used with the USE DATABASE command.
---

## ENABLE DATABASE

### Syntax

ENABLE DATABASE **database_name**

### Privileges

```
DBADMIN
```

### Description

Use this command to ENABLE a previously disabled database. Once re-enabled that database will be available again to be used with the USE DATABASE command.

### Return

OK

### Example

```bash
> ENABLE DATABASE test.sqlite
OK
```

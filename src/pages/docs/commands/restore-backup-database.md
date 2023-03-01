---
title: RESTORE BACKUP DATABASE
description: Starting from information returned by the `LIST BACKUP DATABASE` command you can restore a database with the RESTORE BACKUP DATABASE command. During a RESTORE the database <database_name> will not be available. The TIMESTAMP option is usually used to restore a specific database back in time but the GENERATION and INDEX option can also be used.
---

## Syntax

RESTORE BACKUP DATABASE **database_name** [GENERATION **generation**] [INDEX **index**] [TIMESTAMP **timestamp**]

## Privileges

```
RESTORE
```

## Description

Starting from information returned by the `LIST BACKUP DATABASE` command you can restore a database with the RESTORE BACKUP DATABASE command. During a RESTORE the database <database_name> will not be available. The TIMESTAMP option is usually used to restore a specific database back in time but the GENERATION and INDEX option can also be used.

## Return

OK

## Example

```bash
> RESTORE BACKUP DATABASE db1.sqlite TIMESTAMP 2023-02-06T15:53:30Z
```

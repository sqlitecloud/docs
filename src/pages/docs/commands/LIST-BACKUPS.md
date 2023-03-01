---
title: LIST BACKUPS
description: The LIST BACKUPS command return a rowset that contains information about which databases have a backup enabled.
---

## LIST BACKUPS

### Syntax

LIST BACKUPS

### Privileges

```
BACKUP
```

### Description

The LIST BACKUPS command return a rowset that contains information about which databases have a backup enabled.

### Return

A rowset with a single `name` column.

### Example

```bash
> LIST BACKUPS
--------------------|
 name               |
--------------------|
 chinook-enc.sqlite |
 chinook.sqlite     |
 db1.sqlite         |
 dbempty.sqlite     |
 encdb.sqlite       |
 encdb2.sqlite      |
--------------------|
```

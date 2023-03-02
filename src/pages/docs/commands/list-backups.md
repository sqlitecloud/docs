---
title: LIST BACKUPS
description: The LIST BACKUPS command returns a rowset containing information about which databases have enabled backup
---

## Syntax

LIST BACKUPS

## Privileges

```
BACKUP
```

## Description

The LIST BACKUPS command returns a rowset containing information about which databases have enabled backup.

## Return

A rowset with a single `name` column.

## Example

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

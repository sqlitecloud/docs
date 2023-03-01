---
title: LIST PLUGINS
description: The LIST PLUGINS command returns a rowset that provides information about the installed native/SQLite extensions.
---

## LIST PLUGINS

### Syntax

LIST PLUGINS

### Privileges

```
PLUGIN
```

### Description

The LIST PLUGINS command returns a rowset that provides information about the installed native/SQLite extensions.

### Return

A rowset with the following columns: `name`, `type`, `enabled`, `version`, `copyright`, `description`.
The `version`, `copyright` and `description` columns are not null only in case of native SQLite Cloud extensions developed with the official plugins SDK.

### Example

```bash
> LIST PLUGINS
---------|--------|---------|---------|-----------|-------------|
 name    | type   | enabled | version | copyright | description |
---------|--------|---------|---------|-----------|-------------|
 crypto  | SQLite | 1       | NULL    | NULL      | NULL        |
 fileio  | SQLite | 1       | NULL    | NULL      | NULL        |
 fuzzy   | SQLite | 1       | NULL    | NULL      | NULL        |
 ipaddr  | SQLite | 1       | NULL    | NULL      | NULL        |
 math    | SQLite | 1       | NULL    | NULL      | NULL        |
 stats   | SQLite | 1       | NULL    | NULL      | NULL        |
 text    | SQLite | 1       | NULL    | NULL      | NULL        |
 unicode | SQLite | 1       | NULL    | NULL      | NULL        |
 uuid    | SQLite | 1       | NULL    | NULL      | NULL        |
 vsv     | SQLite | 1       | NULL    | NULL      | NULL        |
 re      | SQLite | 0       | NULL    | NULL      | NULL        |
---------|--------|---------|---------|-----------|-------------|

```

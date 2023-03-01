---
title: LIST DATABASE
description: The LIST DATABASE KEYS command returns a list of settings for the <database_name> database.
---

## Syntax

LIST DATABASE **database_name** KEYS

## Privileges

```
NONE
```

## Description

The LIST DATABASE KEYS command returns a list of settings for the <database_name> database.

## Return

A rowset with `key` and `value` columns.

## Example

```bash
> LIST DATABASE mediastore.sqlite KEYS
-----|-------|
 key | value |
-----|-------|
 k1  | v1    |
-----|-------|

```

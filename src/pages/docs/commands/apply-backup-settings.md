---
title: APPLY BACKUP SETTINGS
description: Several backup related settings can be applied using the SET DATABASE KEY command  backup, , backup_retention and backup_snapshot_interval. All these settings are not immediately applied up-until an APPLY BACKUP SETTINGS command is executed.
---

## Syntax

APPLY BACKUP SETTINGS

## Privileges

```
BACKUP
```

## Description

Several backup related settings can be applied using the SET DATABASE KEY command: `backup`, `, `backup_retention` and `backup_snapshot_interval`.
All these settings are not immediately applied up-until an APPLY BACKUP SETTINGS command is executed.

## Return

OK

## Example

```bash
> APPLY BACKUP SETTINGS
OK
```

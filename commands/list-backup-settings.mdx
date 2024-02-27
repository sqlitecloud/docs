---
title: LIST BACKUP SETTINGS
description: The LIST BACKUP SETTINGS command retrieves detailed information about the settings applied to each database previously enabled for a backup
---

## Syntax

LIST BACKUP SETTINGS

## Privileges

```
BACKUP
```

## Description

The LIST BACKUP SETTINGS command retrieves detailed information about the settings applied to each database previously enabled for a backup.
The `backup_retention` setting affects the disk space needed to store backup information about a specific database. You can specify a `backup_retention` settings using values like 24h, 2.5h, or 2h45m.
The `backup_snapshot_interval` specifies how often new snapshots will be created. This setting reduces the time to restore since newer snapshots will have fewer WAL frames to apply. Retention still applies to these snapshots. If you do not set a snapshot interval, a new snapshot will be created whenever retention is performed. Retention occurs every 24 hours by default.

## Return

A [Rowset](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) with the following columns:
* **name**: database name
* **enabled**: 1 enabled, 0 disabled
* **backup_retention**: retention period
* **backup_snapshot_interval**: snapshot interval value

## Example

```bash
> LIST BACKUP SETTINGS
------------------------|---------|------------------|--------------------------|
 name                   | enabled | backup_retention | backup_snapshot_interval |
------------------------|---------|------------------|--------------------------|
 chinook-enc.sqlite     | 1       | 24h              | NULL                     |
 chinook.sqlite         | 1       | 168h             | NULL                     |
 db space.sqlite        | 0       | NULL             | NULL                     |
 db1.sqlite             | 1       | 168h             | NULL                     |
 dbempty.sqlite         | 1       | 24h              | NULL                     |
 encdb.sqlite           | 1       | 168h             | NULL                     |
 encdb2.sqlite          | 1       | 24h              | NULL                     |
 test-blob-10x10.sqlite | 0       | NULL             | NULL                     |
 wrongdb5.sqlite        | 0       | 24h              | NULL                     |
 wrongdb9.sqlite        | 0       | NULL             | NULL                     |
------------------------|---------|------------------|--------------------------|
```

---
title: LIST KEYS
description: The LIST KEYS command is used to retrieve the server settings.
Some of the returned settings are readonly and cannot be set. To retrieve more information about the settings use the DETAILED flag.
All the KEYS in the settings database are automatically distributed all over the cluster.
To retrieve a single specific information use the GET KEY <key> command.
---

## Syntax

LIST KEYS [DETAILED] [NOREADONLY]

## Privileges

```
SETTINGS
```

## Description

The LIST KEYS command is used to retrieve the server settings.
Some of the returned settings are readonly and cannot be set. To retrieve more information about the settings use the DETAILED flag.
All the KEYS in the settings database are automatically distributed all over the cluster.
To retrieve a single specific information use the GET KEY <key> command.

## Return

A rowset with `key`, `value` or three additional `default_value`, `readonly` and `description` if the DETAILED flag is used.

## Example

```bash
> LIST KEYS
---------------------------------|-------------------------------|
 key                             | value                         |
---------------------------------|-------------------------------|
 autocheckpoint                  | 1000                          |
 autocheckpoint_full             | 0                             |
 backlog                         | 512                           |
 backup_node_id                  | 0                             |
 base_path                       | /Users/marco/SQLiteCloud/data |
 client_compression              | 1                             |
 client_timeout                  | 0                             |
 cluster_address                 | NULL                          |
---------------------------------|-------------------------------|

> LIST KEYS DETAILED
---------------------------------|-------------------------------|---------------|----------|--------------------------------------------------------------------------|
 key                             | value                         | default_value | readonly | description                                                              |
---------------------------------|-------------------------------|---------------|----------|--------------------------------------------------------------------------|
 autocheckpoint                  | 1000                          | 1000          | 0        | Number of frames in the WAL file above which a checkpoint is run.        |
 autocheckpoint_full             | 0                             | 0             | 0        | Number of frames in the WAL file above which a full checkpoint is run.   |
 backlog                         | 512                           | 512           | 0        | Size of the backlog queue for the socket listening function.             |
 base_path                       | /Users/marco/SQLiteCloud/data | NULL          | 1        | Full path to the main data directory.                                    |
 client_compression              | 1                             | 0             | 0        | Custom key set by the user.                                              |
 client_timeout                  | 0                             | 0             | 0        | Maximum time (in seconds) to allow a connected client to stay connected. |
 --------------------------------|-------------------------------|---------------|----------|--------------------------------------------------------------------------|
 
```

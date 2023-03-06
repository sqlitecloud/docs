---
title: LIST COMMANDS
description: The LIST COMMANDS command returns a list of all supported built-in commands
---

## Syntax

LIST COMMANDS [DETAILED]

## Privileges

```
NONE
```

## Description

The LIST COMMANDS command returns a list of all supported built-in commands. It also returns information about how often each command was executed on the average execution time. The DETAILS flag adds a privileges column to the result.

## Return

A [Rowset](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) with the following columns:
* **command**: command syntax
* **count**: how many times the command was executed
* **avgtime**: average command execution time

## Example

```bash
> LIST COMMANDS
----------------------------------------------------------------------|-------|---------|
 command                                                              | count | avgtime |
----------------------------------------------------------------------|-------|---------|
 DECRYPT DATABASE <database_name>                                     | 0     | 0.0     |
 DISABLE DATABASE <database_name>                                     | 0     | 0.0     |
 DISABLE PLUGIN <plugin_name>                                         | 0     | 0.0     |
 DISABLE USER <username>                                              | 0     | 0.0     |
 DROP APIKEY <key>                                                    | 0     | 0.0     |
 DROP CHANNEL <channel_name>                                          | 0     | 0.0     |
 DROP CLIENT KEY <keyname>                                            | 0     | 0.0     |
 DROP DATABASE <database_name> KEY <keyname>                          | 0     | 0.0     |
 DROP DATABASE <database_name> [IF EXISTS]                            | 0     | 0.0     |
 DROP KEY <keyname>                                                   | 0     | 0.0     |
 DROP ROLE <role_name>                                                | 0     | 0.0     |
 DROP USER <username>                                                 | 0     | 0.0     |
 ENABLE DATABASE <database_name>                                      | 0     | 0.0     |
 ENABLE PLUGIN <plugin_name>                                          | 0     | 0.0     |
 ENABLE USER <username>                                               | 0     | 0.0     |
 ENCRYPT DATABASE <database_name> WITH KEY <encryption_key>           | 0     | 0.0     |
 GET CLIENT KEY <keyname>                                             | 0     | 0.0     |
 GET DATABASE <database_name> KEY <keyname>                           | 0     | 0.0     |
 GET DATABASE [<value>]                                               | 0     | 0.0     |
 GET INFO <key> [NODE <nodeid>]                                       | 0     | 0.0     |
 GET KEY <keyname>                                                    | 0     | 0.0     |
 GET LEADER [ID]                                                      | 0     | 0.0     |
 GET RUNTIME KEY <keyname>                                            | 0     | 0.0     |
 GET SQL <table_name>                                                 | 0     | 0.0     |
 GET USER                                                             | 0     | 0.0     |
 ---------------------------------------------------------------------|-------|---------|
```

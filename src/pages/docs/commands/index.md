---
title: SQLite Cloud commands
description: SQLite Cloud commands
---


In addition to the standard SQL statements supported by the SQLite engine, SQLite Cloud also understands a number of server-specific commands (92 in the current version).

In general, commands that begin with LIST are intended to query the server for information and SQLite Cloud returns the information in the form of Rowset (see [SCSP protocol](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) for more details). The GET verb is used to read a single value (or an array of values in some cases) and the SET verb is used to update an existing setting. Commands that do not begin with LIST and GET are intended to make a change on the server. 

Most commands require special privileges to execute. If you are logged into a server with an account that has insufficient privileges to execute a particular command, then SQLite Cloud will return an error.

In the Syntax field of each command, the keywords that make up the command are shown in uppercase and the values passed as parameters are surrounded by the angle brackets. The square brackets delimit the optional parts of a command (if any).

To get a list of all available commands, you can send a **LIST COMMANDS** statement:

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

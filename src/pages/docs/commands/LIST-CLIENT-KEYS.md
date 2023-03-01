## LIST CLIENT KEYS

### Syntax

LIST CLIENT KEYS

### Privileges

```
NONE
```

### Description

The LIST CLIENT KEYS command is used to retrieve information and settings that are specific to the current connection. To retrieve a single specific information use the GET CLIENT KEY <key> command.

### Return

A rowset with `key` and `value` columns.

### Example

```bash
> LIST CLIENT KEYS
-----------------|--------------------------------------|
 key             | value                                |
-----------------|--------------------------------------|
 COMPRESSION     | 1                                    |
 ID              | 1                                    |
 IP              | 127.0.0.1                            |
 MAXDATA         | 0                                    |
 MAXROWS         | 0                                    |
 MAXROWSET       | 0                                    |
 NOBLOB          | 0                                    |
 NONLINEARIZABLE | 0                                    |
 SQLITE          | 0                                    |
 UUID            | 374c7c93-c8bb-4ba8-ac19-26edb78fc1cc |
 ZEROTEXT        | 0                                    |
-----------------|--------------------------------------|
```

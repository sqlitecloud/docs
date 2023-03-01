## DECRYPT DATABASE

### Syntax

DECRYPT DATABASE **database_name**

### Privileges

```
CREATE_DATABASE
```

### Description

The DECRYPT DATABASE command remove encryption from a previously AES-256 encrypted database.

### Return

OK

### Example

```bash
> DECRYPT DATABASE test.sqlite
OK
```

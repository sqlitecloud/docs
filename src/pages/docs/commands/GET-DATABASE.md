## GET DATABASE

### Syntax

GET DATABASE **database_name** KEY **keyname**

### Privileges

```
READWRITE, DBADMIN
```

### Description

Use this command to retrieve a single value associated to <database_name> and <keyname>.

### Return

A string with the requested value.

### Example

```bash
> GET DATABASE mediastore.sqlite KEY key1
value1
```

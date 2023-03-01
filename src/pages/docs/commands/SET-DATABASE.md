---
title: SET DATABASE
description: Use this command to set a specific key/value setting to <database_name>.

You can use any key/value but some keys are reserved for special purpose:
* use_concurrent_transactions: set to 1 or 0 to enable/disable CONCURRENT transaction for the database
* DATABASE_KEY: set to the encryption key used to decrypt the database file. Note that this is not equivalent to encrypt a database, this value must be use to set an encryption key for an already encrypted database.
---

## SET DATABASE

### Syntax

SET DATABASE **database_name** KEY **keyname** TO **keyvalue**

### Privileges

```
READWRITE, DBADMIN
```

### Description

Use this command to set a specific key/value setting to <database_name>.

You can use any key/value but some keys are reserved for special purpose:
* use_concurrent_transactions: set to 1 or 0 to enable/disable CONCURRENT transaction for the database
* DATABASE_KEY: set to the encryption key used to decrypt the database file. Note that this is not equivalent to encrypt a database, this value must be use to set an encryption key for an already encrypted database.

### Return

OK

### Example

```bash
> SET DATABASE mediastore.sqlite KEY key1 VALUE value1
OK
```

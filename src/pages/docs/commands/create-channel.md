---
title: CREATE CHANNEL
description: To use a channel in a Pub/Sub environment it must be first created with a CREATE CHANNEL command.
It is usually an error to attempt to create a new channel if another one exists with the same name. However, if the "IF NOT EXISTS" clause is specified as part of the CREATE CHANNEL statement and a channel of the same name already exists, the CREATE CHANNEL command simply has no effect (and no error message is returned). An error is still returned if the channel cannot be created because for any other reason, even if the "IF NOT EXISTS" clause is specified.
---

## CREATE CHANNEL

### Syntax

CREATE CHANNEL **channel_name** [IF NOT EXISTS]

### Privileges

```
PUBSUBCREATE
```

### Description

To use a channel in a Pub/Sub environment it must be first created with a CREATE CHANNEL command.
It is usually an error to attempt to create a new channel if another one exists with the same name. However, if the "IF NOT EXISTS" clause is specified as part of the CREATE CHANNEL statement and a channel of the same name already exists, the CREATE CHANNEL command simply has no effect (and no error message is returned). An error is still returned if the channel cannot be created because for any other reason, even if the "IF NOT EXISTS" clause is specified.

### Return

OK

### Example

```bash
> CREATE CHANNEL channel1 IF NOT EXISTS
OK
```

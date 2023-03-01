---
title: SET APIKEY
description: The SET APIKEY command is used to update information about an existing APIKEY.
Using this command you can update the APIKEY name, restriction and expiration date.
There is no way to update the value of the APIKEY.
---

## SET APIKEY

### Syntax

SET APIKEY **key** [NAME **key_name**] [RESTRICTION **restriction_type**] [EXPIRATION **expiration_date**]

### Privileges

```
USERADMIN
```

### Description

The SET APIKEY command is used to update information about an existing APIKEY.
Using this command you can update the APIKEY name, restriction and expiration date.
There is no way to update the value of the APIKEY.

### Return

OK

### Example

```bash
> SET APIKEY roEylpydmHsKJSZKDc5acYTzu9vBwSQ9OeKTog02aow NAME test2
OK
```

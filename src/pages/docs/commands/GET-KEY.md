---
title: GET KEY
description: The GET KEY command is used to retrieve a single specific setting about a <keyname>.
---

## GET KEY

### Syntax

GET KEY **keyname**

### Privileges

```
SETTINGS
```

### Description

The GET KEY command is used to retrieve a single specific setting about a <keyname>.

### Return

A single value (usually a string) that depends on the input <keyname>.

### Example

```bash
> GET KEY max_chunk_size
307200

> GET KEY non_existing_key
NULL
```

---
title: SET KEY
description: The SET KEY command is used to set/update a keyname to a specific keyvalue. Once set the updated value is immediately used by the server (and automatically distributed on the cluster).
---

## Syntax

SET KEY **keyname** TO **keyvalue**

## Privileges

```
SETTINGS
```

## Description

The SET KEY command is used to set/update a **keyname** to a specific **keyvalue**.
Once set the updated value is immediately used by the server (and automatically distributed on the cluster).

## Return

OK

## Example

```bash
> SET KEY max_chunk_size TO 524288
OK
```

---
title: SET KEY
description: The SET KEY command sets or updates a keyname to a specific keyvalue
---

## Syntax

SET KEY **keyname** TO **keyvalue**

## Privileges

```
SETTINGS
```

## Description

The SET KEY command sets or updates a **keyname** to a specific **keyvalue**. Once set, the server immediately uses the updated value (and automatically distributes it on the cluster).

## Return

OK

## Example

```bash
> SET KEY max_chunk_size TO 524288
OK
```

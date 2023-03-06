---
title: GET KEY
description: The GET KEY command retrieves a single specific setting about a keyname
---

## Syntax

GET KEY **keyname**

## Privileges

```
SETTINGS
```

## Description

The GET KEY command retrieves a single specific setting about a **keyname**.

## Return

A single value (usually a [String](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md)) that depends on the input **keyname**.

## Example

```bash
> GET KEY max_chunk_size
307200

> GET KEY non_existing_key
NULL
```

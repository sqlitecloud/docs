---
title: REMOVE KEY
description: The REMOVE KEY command permanently deletes a <keyname> from the settings database file (the change is automatically distributed on the cluster)..
Removing a previously set <keyname> value usually means to restore its default value.
---

## Syntax

REMOVE KEY **keyname**

## Privileges

```
SETTINGS
```

## Description

The REMOVE KEY command permanently deletes a <keyname> from the settings database file (the change is automatically distributed on the cluster)..
Removing a previously set <keyname> value usually means to restore its default value.

## Return

OK

## Example

```bash
> REMOVE KEY max_chunk_size
OK
```

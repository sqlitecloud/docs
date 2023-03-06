---
title: CREATE APIKEY USER
description: The CREATE APIKEY USER command creates a new APIKEY associated to a specific username and with a mnemonic name
---

## Syntax

CREATE APIKEY USER **username** NAME **key_name** [RESTRICTION **restriction_type**] [EXPIRATION **expiration_date**]

## Privileges

```
USERADMIN
```

## Description

The CREATE APIKEY USER command creates a new APIKEY associated to a specific username and with a mnemonic name. The RESTRICTION option is currently unused and an expiration date can be set using the EXPIRATION parameter.

## Return

A [String](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) with the new APIKEY.

## Example

```bash
> CREATE APIKEY USER admin NAME test
roEylpydmHsKJSZKDc5acYTzu9vBwSQ9OeKTog02aow
```

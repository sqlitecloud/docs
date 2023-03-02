---
title: ENCRYPT DATABASE
description: The ENCRYPT DATABASE command adds an AES-256 encryption to an existing database
---

## Syntax

ENCRYPT DATABASE **database_name** KEY **encryption_key**

## Privileges

```
CREATE_DATABASE
```

## Description

The ENCRYPT DATABASE command adds an AES-256 encryption to an existing database. If the database was previously encrypted with another key, it is re-encrypted with the new key. Rekeying requires that every database file page be read, decrypted, re-encrypted with the new key, then written out again. Consequently, rekeying can take a long time on a larger database.

## Return

OK

## Example

```bash
> ENCRYPT DATABASE test.sqlite WITH KEY adkkhadsj-uidsaoiudsa-hdsadsakj
OK
```

---
title: LIST MY APIKEYS
description: The LIST MY APIKEYS command returns a list of all the APIKEYs associated with the username used in the current connection
---

## Syntax

LIST MY APIKEYS

## Privileges

```
NONE
```

## Description

The LIST MY APIKEYS command returns a list of all the APIKEYs associated with the username used in the current connection.

## Return

A [Rowset](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) with the following columns:
* **username**: user name
* **key**: API KEY
* **name**: mnemonic name
* **creation_date**: API KEY creation date and time
* **expiration_date**: API KEY expiration date and time (if any)
* **restriction**: always 0 in this version

## Example

```bash
> LIST MY APIKEYS
---------------------------------------------|--------------|---------------------|---------------------|-------------|
 key                                         | name         | creation_date       | expiration_date     | restriction |
---------------------------------------------|--------------|---------------------|---------------------|-------------|
 4AsBcAEWda7eSbEJL7aSXECB8spDJDfFOkpvtufPX2Y | WebService 1 | 2022-08-25 11:16:24 | NULL                | 0           |
 8QguErOFPuYvAtTR1QVobc6aytIfaal7ujeLFEVmutE | WebService 3 | 2022-08-25 11:17:04 | 2022-09-25 11:17:05 | 0           |
 aJcdAL6P1JwJHquTP5iK1ahk7b3tAicBBufPSmnkIb4 | Bind Test    | 2022-09-01 18:27:29 | 2022-09-21 18:27:29 | 1           |
 Hyl0E8y2Md49r5se7YEAzpE4npW8J5BJl1whyvQr4TU | test1        | 2022-09-01 18:31:23 | NULL                | 0           |
 bxnIddbMRyNlcZTZQApkdonUvrB2gwgQ2wndzrSMiDI | test1        | 2022-09-01 18:33:07 | NULL                | 0           |
 94tJ9EUJJiiBZ8nAxuzLjqBFPw0IAvUGtlSU61lZ6W0 | key2         | 2022-09-02 05:09:45 | NULL                | 0           |
---------------------------------------------|--------------|---------------------|---------------------|-------------|
```

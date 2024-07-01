---
title: SQLiteCloudConfig
description: SQLite Cloud Javascript SDK
customClass: sdk-doc js-doc 
---

Configuration for SQLite cloud connection

## Table of contents

### Properties

- [clientId](sqlitecloudconfig#clientid)
- [compression](sqlitecloudconfig#compression)
- [connectionString](sqlitecloudconfig#connectionstring)
- [createDatabase](sqlitecloudconfig#createdatabase)
- [database](sqlitecloudconfig#database)
- [dbMemory](sqlitecloudconfig#dbmemory)
- [gatewayUrl](sqlitecloudconfig#gatewayurl)
- [host](sqlitecloudconfig#host)
- [insecure](sqlitecloudconfig#insecure)
- [maxData](sqlitecloudconfig#maxdata)
- [maxRows](sqlitecloudconfig#maxrows)
- [maxRowset](sqlitecloudconfig#maxrowset)
- [noBlob](sqlitecloudconfig#noblob)
- [nonlinearizable](sqlitecloudconfig#nonlinearizable)
- [password](sqlitecloudconfig#password)
- [passwordHashed](sqlitecloudconfig#passwordhashed)
- [port](sqlitecloudconfig#port)
- [timeout](sqlitecloudconfig#timeout)
- [tlsOptions](sqlitecloudconfig#tlsoptions)
- [useWebsocket](sqlitecloudconfig#usewebsocket)
- [username](sqlitecloudconfig#username)
- [verbose](sqlitecloudconfig#verbose)

## Properties

### clientId

• `Optional` **clientId**: `string`

Optional identifier used for verbose logging

#### Defined in

[src/drivers/types.ts:62](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L62)

___

### compression

• `Optional` **compression**: `boolean`

#### Defined in

[src/drivers/types.ts:41](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L41)

___

### connectionString

• `Optional` **connectionString**: `string`

Connection string in the form of sqlitecloud://user:password@host:port/database?options

#### Defined in

[src/drivers/types.ts:15](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L15)

___

### createDatabase

• `Optional` **createDatabase**: `boolean`

Create the database if it doesn't exist?

#### Defined in

[src/drivers/types.ts:37](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L37)

___

### database

• `Optional` **database**: `string`

Name of database to open

#### Defined in

[src/drivers/types.ts:34](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L34)

___

### dbMemory

• `Optional` **dbMemory**: `boolean`

Database will be created in memory

#### Defined in

[src/drivers/types.ts:39](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L39)

___

### gatewayUrl

• `Optional` **gatewayUrl**: `string`

Url where we can connect to a SQLite Cloud Gateway that has a socket.io deamon waiting to connect, eg. wss://host:4000

#### Defined in

[src/drivers/types.ts:59](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L59)

___

### host

• `Optional` **host**: `string`

Host name is required unless connectionString is provided, eg: xxx.sqlitecloud.io

#### Defined in

[src/drivers/types.ts:25](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L25)

___

### insecure

• `Optional` **insecure**: `boolean`

Connect using plain TCP port, without TLS encryption, NOT RECOMMENDED, TEST ONLY

#### Defined in

[src/drivers/types.ts:29](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L29)

___

### maxData

• `Optional` **maxData**: `number`

Do not send columns with more than max_data bytes

#### Defined in

[src/drivers/types.ts:47](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L47)

___

### maxRows

• `Optional` **maxRows**: `number`

Server should chunk responses with more than maxRows

#### Defined in

[src/drivers/types.ts:49](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L49)

___

### maxRowset

• `Optional` **maxRowset**: `number`

Server should limit total number of rows in a set to maxRowset

#### Defined in

[src/drivers/types.ts:51](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L51)

___

### noBlob

• `Optional` **noBlob**: `boolean`

Server should send BLOB columns

#### Defined in

[src/drivers/types.ts:45](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L45)

___

### nonlinearizable

• `Optional` **nonlinearizable**: `boolean`

Request for immediate responses from the server node without waiting for linerizability guarantees

#### Defined in

[src/drivers/types.ts:43](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L43)

___

### password

• `Optional` **password**: `string`

Password is required unless connection string is provided

#### Defined in

[src/drivers/types.ts:20](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L20)

___

### passwordHashed

• `Optional` **passwordHashed**: `boolean`

True if password is hashed, default is false

#### Defined in

[src/drivers/types.ts:22](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L22)

___

### port

• `Optional` **port**: `number`

Port number for tls socket

#### Defined in

[src/drivers/types.ts:27](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L27)

___

### timeout

• `Optional` **timeout**: `number`

Optional query timeout passed directly to TLS socket

#### Defined in

[src/drivers/types.ts:32](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L32)

___

### tlsOptions

• `Optional` **tlsOptions**: `ConnectionOptions`

Custom options and configurations for tls socket, eg: additional certificates

#### Defined in

[src/drivers/types.ts:54](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L54)

___

### useWebsocket

• `Optional` **useWebsocket**: `boolean`

True if we should force use of SQLite Cloud Gateway and websocket connections, default: true in browsers, false in node.js

#### Defined in

[src/drivers/types.ts:57](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L57)

___

### username

• `Optional` **username**: `string`

User name is required unless connectionString is provided

#### Defined in

[src/drivers/types.ts:18](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L18)

___

### verbose

• `Optional` **verbose**: `boolean`

True if connection should enable debug logs

#### Defined in

[src/drivers/types.ts:64](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L64)

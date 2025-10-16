---
title: SQLiteCloudConfig
description: SQLite Cloud Javascript SDK
customClass: sdk-doc js-doc
category: sdks
status: publish
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

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L62" target="_blank">src/drivers/types.ts:62</a>

___

### compression

• `Optional` **compression**: `boolean`

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L41" target="_blank">src/drivers/types.ts:41</a>

___

### connectionString

• `Optional` **connectionString**: `string`

Connection string in the form of sqlitecloud://user:password@host:port/database?options

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L15" target="_blank">src/drivers/types.ts:15</a>

___

### createDatabase

• `Optional` **createDatabase**: `boolean`

Create the database if it doesn't exist?

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L37" target="_blank">src/drivers/types.ts:37</a>

___

### database

• `Optional` **database**: `string`

Name of database to open

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L34" target="_blank">src/drivers/types.ts:34</a>

___

### dbMemory

• `Optional` **dbMemory**: `boolean`

Database will be created in memory

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L39" target="_blank">src/drivers/types.ts:39</a>

___

### gatewayUrl

• `Optional` **gatewayUrl**: `string`

Url where we can connect to a SQLite Cloud Gateway that has a socket.io deamon waiting to connect, eg. wss://host:4000

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L59" target="_blank">src/drivers/types.ts:59</a>

___

### host

• `Optional` **host**: `string`

Host name is required unless connectionString is provided, eg: xxx.sqlitecloud.io

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L25" target="_blank">src/drivers/types.ts:25</a>

___

### insecure

• `Optional` **insecure**: `boolean`

Connect using plain TCP port, without TLS encryption, NOT RECOMMENDED, TEST ONLY

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L29" target="_blank">src/drivers/types.ts:29</a>

___

### maxData

• `Optional` **maxData**: `number`

Do not send columns with more than max_data bytes

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L47" target="_blank">src/drivers/types.ts:47</a>

___

### maxRows

• `Optional` **maxRows**: `number`

Server should chunk responses with more than maxRows

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L49" target="_blank">src/drivers/types.ts:49</a>

___

### maxRowset

• `Optional` **maxRowset**: `number`

Server should limit total number of rows in a set to maxRowset

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L51" target="_blank">src/drivers/types.ts:51</a>

___

### noBlob

• `Optional` **noBlob**: `boolean`

Server should send BLOB columns

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L45" target="_blank">src/drivers/types.ts:45</a>

___

### nonlinearizable

• `Optional` **nonlinearizable**: `boolean`

Request for immediate responses from the server node without waiting for linerizability guarantees

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L43" target="_blank">src/drivers/types.ts:43</a>

___

### password

• `Optional` **password**: `string`

Password is required unless connection string is provided

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L20" target="_blank">src/drivers/types.ts:20</a>

___

### passwordHashed

• `Optional` **passwordHashed**: `boolean`

True if password is hashed, default is false

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L22" target="_blank">src/drivers/types.ts:22</a>

___

### port

• `Optional` **port**: `number`

Port number for tls socket

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L27" target="_blank">src/drivers/types.ts:27</a>

___

### timeout

• `Optional` **timeout**: `number`

Optional query timeout passed directly to TLS socket

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L32" target="_blank">src/drivers/types.ts:32</a>

___

### tlsOptions

• `Optional` **tlsOptions**: `ConnectionOptions`

Custom options and configurations for tls socket, eg: additional certificates

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L54" target="_blank">src/drivers/types.ts:54</a>

___

### useWebsocket

• `Optional` **useWebsocket**: `boolean`

True if we should force use of SQLite Cloud Gateway and websocket connections, default: true in browsers, false in node.js

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L57" target="_blank">src/drivers/types.ts:57</a>

___

### username

• `Optional` **username**: `string`

User name is required unless connectionString is provided

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L18" target="_blank">src/drivers/types.ts:18</a>

___

### verbose

• `Optional` **verbose**: `boolean`

True if connection should enable debug logs

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L64" target="_blank">src/drivers/types.ts:64</a>

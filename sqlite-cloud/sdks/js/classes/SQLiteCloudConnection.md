---
title: SQLiteCloudConnection
description: SQLite Cloud Javascript SDK
customClass: sdk-doc badge-doc js-doc
category: sdks
---

Base class for SQLiteCloudConnection handles basics and defines methods.
Actual connection management and communication with the server in concrete classes.

## Table of contents

### Constructors

- [constructor](sqlitecloudconnection#constructor)

### Properties

- [config](sqlitecloudconnection#config)
- [operations](sqlitecloudconnection#operations)

### Accessors

- [connected](sqlitecloudconnection#connected)

### Methods

- [close](sqlitecloudconnection#close)
- [connect](sqlitecloudconnection#connect)
- [connectTransport](sqlitecloudconnection#connecttransport)
- [log](sqlitecloudconnection#log)
- [sendCommands](sqlitecloudconnection#sendcommands)
- [transportCommands](sqlitecloudconnection#transportcommands)
- [verbose](sqlitecloudconnection#verbose)

## Constructors

### constructor

• **new SQLiteCloudConnection**(`config`, `callback?`): [`SQLiteCloudConnection`](sqlitecloudconnection)

Parse and validate provided connectionString or configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `string` \| [`SQLiteCloudConfig`](../interfaces/sqlitecloudconfig) |
| `callback?` | [`ErrorCallback`](../modules#errorcallback) |

#### Returns

[`SQLiteCloudConnection`](sqlitecloudconnection)

#### Defined in

[src/drivers/connection.ts:16](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L16)

## Properties

### config

• `Protected` **config**: [`SQLiteCloudConfig`](../interfaces/sqlitecloudconfig)

Configuration passed by client or extracted from connection string

#### Defined in

[src/drivers/connection.ts:28](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L28)

___

### operations

• `Protected` **operations**: `OperationsQueue`

Operations are serialized by waiting an any pending promises

#### Defined in

[src/drivers/connection.ts:31](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L31)

## Accessors

### connected

• `get` **connected**(): `boolean`

Returns true if connection is open

#### Returns

`boolean`

#### Defined in

[src/drivers/connection.ts:74](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L74)

## Methods

### close

▸ **close**(): [`SQLiteCloudConnection`](sqlitecloudconnection)

Disconnect from server, release transport.

#### Returns

[`SQLiteCloudConnection`](sqlitecloudconnection)

#### Defined in

[src/drivers/connection.ts:100](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L100)

___

### connect

▸ **connect**(`callback?`): [`SQLiteCloudConnection`](sqlitecloudconnection)

Connect will establish a tls or websocket transport to the server based on configuration and environment

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | [`ErrorCallback`](../modules#errorcallback) |

#### Returns

[`SQLiteCloudConnection`](sqlitecloudconnection)

#### Defined in

[src/drivers/connection.ts:38](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L38)

___

### connectTransport

▸ **connectTransport**(`config`, `callback?`): [`SQLiteCloudConnection`](sqlitecloudconnection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`SQLiteCloudConfig`](../interfaces/sqlitecloudconfig) |
| `callback?` | [`ErrorCallback`](../modules#errorcallback) |

#### Returns

[`SQLiteCloudConnection`](sqlitecloudconnection)

#### Defined in

[src/drivers/connection.ts:56](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L56)

___

### log

▸ **log**(`message`, `...optionalParams`): `void`

Will log to console if verbose mode is enabled

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

[src/drivers/connection.ts:62](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L62)

___

### sendCommands

▸ **sendCommands**(`commands`, `callback?`): [`SQLiteCloudConnection`](sqlitecloudconnection)

Will enquee a command to be executed and callback with the resulting rowset/result/error

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | `string` |
| `callback?` | `ResultsCallback`\<`any`\> |

#### Returns

[`SQLiteCloudConnection`](sqlitecloudconnection)

#### Defined in

[src/drivers/connection.ts:82](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L82)

___

### transportCommands

▸ **transportCommands**(`commands`, `callback?`): [`SQLiteCloudConnection`](sqlitecloudconnection)

Send a command, return the rowset/result or throw an error

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | `string` |
| `callback?` | `ResultsCallback`\<`any`\> |

#### Returns

[`SQLiteCloudConnection`](sqlitecloudconnection)

#### Defined in

[src/drivers/connection.ts:59](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L59)

___

### verbose

▸ **verbose**(): `void`

Enable verbose logging for debug purposes

#### Returns

`void`

#### Defined in

[src/drivers/connection.ts:77](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L77)

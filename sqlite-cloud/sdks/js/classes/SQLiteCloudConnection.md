---
title: SQLiteCloudConnection
description: SQLite Cloud Javascript SDK
customClass: sdk-doc js-doc
category: sdks
status: publish
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

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L16" target="_blank">src/drivers/connection.ts:16</a>

## Properties

### config

• `Protected` **config**: [`SQLiteCloudConfig`](../interfaces/sqlitecloudconfig)

Configuration passed by client or extracted from connection string

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L28" target="_blank">src/drivers/connection.ts:28</a>

___

### operations

• `Protected` **operations**: `OperationsQueue`

Operations are serialized by waiting an any pending promises

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L31" target="_blank">src/drivers/connection.ts:31</a>

## Accessors

### connected

• `get` **connected**(): `boolean`

Returns true if connection is open

#### Returns

`boolean`

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L74" target="_blank">src/drivers/connection.ts:74</a>

## Methods

### close

▸ **close**(): [`SQLiteCloudConnection`](sqlitecloudconnection)

Disconnect from server, release transport.

#### Returns

[`SQLiteCloudConnection`](sqlitecloudconnection)

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L100" target="_blank">src/drivers/connection.ts:100</a>

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

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L38" target="_blank">src/drivers/connection.ts:38</a>

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

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L56" target="_blank">src/drivers/connection.ts:56</a>

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

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L62" target="_blank">src/drivers/connection.ts:62</a>

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

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L82" target="_blank">src/drivers/connection.ts:82</a>

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

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L59" target="_blank">src/drivers/connection.ts:59</a>

___

### verbose

▸ **verbose**(): `void`

Enable verbose logging for debug purposes

#### Returns

`void`

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/connection.ts#L77" target="_blank">src/drivers/connection.ts:77</a>

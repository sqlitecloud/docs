---
title: Modules
description: SQLite Cloud Javascript SDK
customClass: sdk-doc js-doc 
category: sdks
status: publish
slug: sdk-js-modules
---

## Table of contents

### Classes

- [Database](sqlite-cloud/sdks/js/classes/database)
- [SQLiteCloudConnection](sqlite-cloud/sdks/js/classes/sqlitecloudconnection)
- [SQLiteCloudError](sqlite-cloud/sdks/js/classes/sqliteclouderror)
- [SQLiteCloudRow](sqlite-cloud/sdks/js/classes/sqlitecloudrow)
- [SQLiteCloudRowset](sqlite-cloud/sdks/js/classes/sqlitecloudrowset)
- [Statement](sqlite-cloud/sdks/js/classes/statement)

### Interfaces

- [SQLCloudRowsetMetadata](sqlite-cloud/sdks/js/interfaces/sqlcloudrowsetmetadata)
- [SQLiteCloudConfig](sqlite-cloud/sdks/js/interfaces/sqlitecloudconfig)

### Type Aliases

- [ErrorCallback](modules#errorcallback)

### Functions

- [escapeSqlParameter](modules#escapesqlparameter)
- [parseConnectionString](modules#parseconnectionstring)
- [prepareSql](modules#preparesql)
- [validateConfiguration](modules#validateconfiguration)

## Type Aliases

### ErrorCallback

Ƭ **ErrorCallback**: (`error`: `Error` \| ``null``) => `void`

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` \| ``null`` |

##### Returns

`void`

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L120" target="_blank">src/drivers/types.ts:120</a>

## Functions

### escapeSqlParameter

▸ **escapeSqlParameter**(`param`): `string`

Takes a generic value and escapes it so it can replace ? as a binding in a prepared SQL statement

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `SQLiteCloudDataTypes` |

#### Returns

`string`

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/utilities.ts#L70" target="_blank">src/drivers/utilities.ts:70</a>

___

### parseConnectionString

▸ **parseConnectionString**(`connectionString`): [`SQLiteCloudConfig`](interfaces/sqlitecloudconfig)

Parse connectionString like sqlitecloud://username:password@host:port/database?option1=xxx&option2=xxx into its components

#### Parameters

| Name | Type |
| :------ | :------ |
| `connectionString` | `string` |

#### Returns

[`SQLiteCloudConfig`](interfaces/sqlitecloudconfig)

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/utilities.ts#L210" target="_blank">src/drivers/utilities.ts:210</a>

___

### prepareSql

▸ **prepareSql**(`sql`, `...params`): `string`

Take a sql statement and replaces ? or $named parameters that are properly serialized and escaped.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |
| `...params` | (`SQLiteCloudDataTypes` \| `SQLiteCloudDataTypes`[])[] |

#### Returns

`string`

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/utilities.ts#L105" target="_blank">src/drivers/utilities.ts:105</a>

___

### validateConfiguration

▸ **validateConfiguration**(`config`): [`SQLiteCloudConfig`](interfaces/sqlitecloudconfig)

Validate configuration, apply defaults, throw if something is missing or misconfigured

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`SQLiteCloudConfig`](interfaces/sqlitecloudconfig) |

#### Returns

[`SQLiteCloudConfig`](interfaces/sqlitecloudconfig)

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/utilities.ts#L173" target="_blank">src/drivers/utilities.ts:173</a>

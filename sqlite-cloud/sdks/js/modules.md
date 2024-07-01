---
title: Modules
description: SQLite Cloud Javascript SDK
customClass: sdk-doc js-doc 
---

## Table of contents

### Classes

- [Database](classes/database)
- [SQLiteCloudConnection](classes/sqlitecloudconnection)
- [SQLiteCloudError](classes/sqliteclouderror)
- [SQLiteCloudRow](classes/sqlitecloudrow)
- [SQLiteCloudRowset](classes/sqlitecloudrowset)
- [Statement](classes/statement)

### Interfaces

- [SQLCloudRowsetMetadata](interfaces/sqlcloudrowsetmetadata)
- [SQLiteCloudConfig](interfaces/sqlitecloudconfig)

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

[src/drivers/types.ts:120](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L120)

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

[src/drivers/utilities.ts:70](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/utilities.ts#L70)

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

[src/drivers/utilities.ts:210](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/utilities.ts#L210)

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

[src/drivers/utilities.ts:105](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/utilities.ts#L105)

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

[src/drivers/utilities.ts:173](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/utilities.ts#L173)

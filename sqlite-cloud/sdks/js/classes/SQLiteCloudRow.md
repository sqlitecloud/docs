---
title: SQLiteCloudRow
description: SQLite Cloud Javascript SDK
customClass: sdk-doc badge-doc js-doc
category: sdks
---

A single row in a dataset with values accessible by column name

## Indexable

▪ [columnName: `string`]: `SQLiteCloudDataTypes`

Column values are accessed by column name

## Table of contents

### Constructors

- [constructor](sqlitecloudrow#constructor)

### Properties

- [#data](sqlitecloudrow##data)
- [#rowset](sqlitecloudrow##rowset)

### Methods

- [getData](sqlitecloudrow#getdata)
- [getRowset](sqlitecloudrow#getrowset)

## Constructors

### constructor

• **new SQLiteCloudRow**(`rowset`, `columnsNames`, `data`): [`SQLiteCloudRow`](sqlitecloudrow)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowset` | [`SQLiteCloudRowset`](sqlitecloudrowset) |
| `columnsNames` | `string`[] |
| `data` | `SQLiteCloudDataTypes`[] |

#### Returns

[`SQLiteCloudRow`](sqlitecloudrow)

#### Defined in

[src/drivers/rowset.ts:9](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L9)

## Properties

### #data

• `Private` **#data**: `SQLiteCloudDataTypes`[]

#### Defined in

[src/drivers/rowset.ts:21](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L21)

___

### #rowset

• `Private` **#rowset**: [`SQLiteCloudRowset`](sqlitecloudrowset)

#### Defined in

[src/drivers/rowset.ts:18](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L18)

## Methods

### getData

▸ **getData**(): `SQLiteCloudDataTypes`[]

Returns rowset data as a plain array of values

#### Returns

`SQLiteCloudDataTypes`[]

#### Defined in

[src/drivers/rowset.ts:31](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L31)

___

### getRowset

▸ **getRowset**(): [`SQLiteCloudRowset`](sqlitecloudrowset)

Returns the rowset that this row belongs to

#### Returns

[`SQLiteCloudRowset`](sqlitecloudrowset)

#### Defined in

[src/drivers/rowset.ts:25](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L25)

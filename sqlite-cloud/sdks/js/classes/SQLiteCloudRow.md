---
title: SQLiteCloudRow
description: SQLite Cloud Javascript SDK
customClass: sdk-doc js-doc
category: sdks
status: publish
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

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L9" target="_blank">src/drivers/rowset.ts:9</a>

## Properties

### #data

• `Private` **#data**: `SQLiteCloudDataTypes`[]

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L21" target="_blank">src/drivers/rowset.ts:21</a>

___

### #rowset

• `Private` **#rowset**: [`SQLiteCloudRowset`](sqlitecloudrowset)

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L18" target="_blank">src/drivers/rowset.ts:18</a>

## Methods

### getData

▸ **getData**(): `SQLiteCloudDataTypes`[]

Returns rowset data as a plain array of values

#### Returns

`SQLiteCloudDataTypes`[]

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L31" target="_blank">src/drivers/rowset.ts:31</a>

___

### getRowset

▸ **getRowset**(): [`SQLiteCloudRowset`](sqlitecloudrowset)

Returns the rowset that this row belongs to

#### Returns

[`SQLiteCloudRowset`](sqlitecloudrowset)

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L25" target="_blank">src/drivers/rowset.ts:25</a>

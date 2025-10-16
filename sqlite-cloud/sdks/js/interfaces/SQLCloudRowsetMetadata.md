---
title: SQLCloudRowsetMetadata
description: SQLite Cloud Javascript SDK
customClass: sdk-doc js-doc
category: sdks
status: publish
---

Metadata information for a set of rows resulting from a query

## Table of contents

### Properties

- [columns](sqlcloudrowsetmetadata#columns)
- [numberOfColumns](sqlcloudrowsetmetadata#numberofcolumns)
- [numberOfRows](sqlcloudrowsetmetadata#numberofrows)
- [version](sqlcloudrowsetmetadata#version)

## Properties

### columns

• **columns**: \{ `autoIncrement?`: `number` ; `column?`: `string` ; `database?`: `string` ; `name`: `string` ; `notNull?`: `number` ; `primaryKey?`: `number` ; `table?`: `string` ; `type?`: `string`  }[]

Columns' metadata

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L77" target="_blank">src/drivers/types.ts:77</a>

___

### numberOfColumns

• **numberOfColumns**: `number`

Number of columns

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L74" target="_blank">src/drivers/types.ts:74</a>

___

### numberOfRows

• **numberOfRows**: `number`

Number of rows

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L72" target="_blank">src/drivers/types.ts:72</a>

___

### version

• **version**: `number`

Rowset version 1 has column's name, version 2 has extended metadata

#### Defined in

<a href="https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L70" target="_blank">src/drivers/types.ts:70</a>

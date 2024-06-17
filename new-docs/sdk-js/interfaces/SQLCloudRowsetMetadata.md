---
title: SQLCloudRowsetMetadata
description: SQLite Cloud Javascript SDK
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

[src/drivers/types.ts:77](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L77)

___

### numberOfColumns

• **numberOfColumns**: `number`

Number of columns

#### Defined in

[src/drivers/types.ts:74](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L74)

___

### numberOfRows

• **numberOfRows**: `number`

Number of rows

#### Defined in

[src/drivers/types.ts:72](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L72)

___

### version

• **version**: `number`

Rowset version 1 has column's name, version 2 has extended metadata

#### Defined in

[src/drivers/types.ts:70](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L70)

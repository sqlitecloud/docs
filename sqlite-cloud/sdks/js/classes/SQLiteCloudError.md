---
title: SQLiteCloudError
description: SQLite Cloud Javascript SDK
customClass: sdk-doc js-doc 
---

Custom error reported by SQLiteCloud drivers

## Hierarchy

- `Error`

  ↳ **`SQLiteCloudError`**

## Table of contents

### Constructors

- [constructor](sqliteclouderror#constructor)

### Properties

- [cause](sqliteclouderror#cause)
- [errorCode](sqliteclouderror#errorcode)
- [externalErrorCode](sqliteclouderror#externalerrorcode)
- [message](sqliteclouderror#message)
- [name](sqliteclouderror#name)
- [offsetCode](sqliteclouderror#offsetcode)
- [stack](sqliteclouderror#stack)
- [prepareStackTrace](sqliteclouderror#preparestacktrace)
- [stackTraceLimit](sqliteclouderror#stacktracelimit)

### Methods

- [captureStackTrace](sqliteclouderror#capturestacktrace)

## Constructors

### constructor

• **new SQLiteCloudError**(`message`, `args?`): [`SQLiteCloudError`](sqliteclouderror)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `args?` | `Partial`\<[`SQLiteCloudError`](sqliteclouderror)\> |

#### Returns

[`SQLiteCloudError`](sqliteclouderror)

#### Overrides

Error.constructor

#### Defined in

[src/drivers/types.ts:102](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L102)

## Properties

### cause

• `Optional` **cause**: `string` \| `Error`

Upstream error that cause this error

#### Overrides

Error.cause

#### Defined in

[src/drivers/types.ts:111](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L111)

___

### errorCode

• `Optional` **errorCode**: `string`

Error code returned by drivers or server

#### Defined in

[src/drivers/types.ts:113](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L113)

___

### externalErrorCode

• `Optional` **externalErrorCode**: `string`

Additional error code

#### Defined in

[src/drivers/types.ts:115](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L115)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### offsetCode

• `Optional` **offsetCode**: `number`

Additional offset code in commands

#### Defined in

[src/drivers/types.ts:117](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/types.ts#L117)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

node_modules/@types/node/globals.d.ts:127

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:140

node_modules/bun-types/globals.d.ts:1532

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:142

node_modules/bun-types/globals.d.ts:1534

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `Object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:133

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/bun-types/globals.d.ts:1525

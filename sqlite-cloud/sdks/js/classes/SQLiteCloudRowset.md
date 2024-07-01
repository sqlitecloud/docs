---
title: SQLiteCloudRowset
description: SQLite Cloud Javascript SDK
customClass: sdk-doc js-doc 
---

## Hierarchy

- `Array`\<[`SQLiteCloudRow`](sqlitecloudrow)\>

  ↳ **`SQLiteCloudRowset`**

## Table of contents

### Constructors

- [constructor](sqlitecloudrowset#constructor)

### Properties

- [#data](sqlitecloudrowset##data)
- [#metadata](sqlitecloudrowset##metadata)
- [length](sqlitecloudrowset#length)
- [[species]](sqlitecloudrowset#[species])

### Accessors

- [columnsNames](sqlitecloudrowset#columnsnames)
- [metadata](sqlitecloudrowset#metadata)
- [numberOfColumns](sqlitecloudrowset#numberofcolumns)
- [numberOfRows](sqlitecloudrowset#numberofrows)
- [version](sqlitecloudrowset#version)

### Methods

- [[iterator]](sqlitecloudrowset#[iterator])
- [[unscopables]](sqlitecloudrowset#[unscopables])
- [at](sqlitecloudrowset#at)
- [concat](sqlitecloudrowset#concat)
- [copyWithin](sqlitecloudrowset#copywithin)
- [entries](sqlitecloudrowset#entries)
- [every](sqlitecloudrowset#every)
- [fill](sqlitecloudrowset#fill)
- [filter](sqlitecloudrowset#filter)
- [find](sqlitecloudrowset#find)
- [findIndex](sqlitecloudrowset#findindex)
- [flat](sqlitecloudrowset#flat)
- [flatMap](sqlitecloudrowset#flatmap)
- [forEach](sqlitecloudrowset#foreach)
- [getItem](sqlitecloudrowset#getitem)
- [includes](sqlitecloudrowset#includes)
- [indexOf](sqlitecloudrowset#indexof)
- [join](sqlitecloudrowset#join)
- [keys](sqlitecloudrowset#keys)
- [lastIndexOf](sqlitecloudrowset#lastindexof)
- [map](sqlitecloudrowset#map)
- [pop](sqlitecloudrowset#pop)
- [push](sqlitecloudrowset#push)
- [reduce](sqlitecloudrowset#reduce)
- [reduceRight](sqlitecloudrowset#reduceright)
- [reverse](sqlitecloudrowset#reverse)
- [shift](sqlitecloudrowset#shift)
- [slice](sqlitecloudrowset#slice)
- [some](sqlitecloudrowset#some)
- [sort](sqlitecloudrowset#sort)
- [splice](sqlitecloudrowset#splice)
- [toLocaleString](sqlitecloudrowset#tolocalestring)
- [toString](sqlitecloudrowset#tostring)
- [unshift](sqlitecloudrowset#unshift)
- [values](sqlitecloudrowset#values)
- [from](sqlitecloudrowset#from)
- [fromAsync](sqlitecloudrowset#fromasync)
- [isArray](sqlitecloudrowset#isarray)
- [of](sqlitecloudrowset#of)

## Constructors

### constructor

• **new SQLiteCloudRowset**(`metadata`, `data`): [`SQLiteCloudRowset`](sqlitecloudrowset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | [`SQLCloudRowsetMetadata`](../interfaces/sqlcloudrowsetmetadata) |
| `data` | `any`[] |

#### Returns

[`SQLiteCloudRowset`](sqlitecloudrowset)

#### Overrides

Array\&lt;SQLiteCloudRow\&gt;.constructor

#### Defined in

[src/drivers/rowset.ts:41](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L41)

## Properties

### #data

• `Private` **#data**: `SQLiteCloudDataTypes`[]

Actual data organized in rows

#### Defined in

[src/drivers/rowset.ts:72](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L72)

___

### #metadata

• `Private` **#metadata**: [`SQLCloudRowsetMetadata`](../interfaces/sqlcloudrowsetmetadata)

Metadata contains number of rows and columns, column names, types, etc.

#### Defined in

[src/drivers/rowset.ts:69](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L69)

___

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1304

___

### [species]

▪ `Static` `Readonly` **[species]**: `ArrayConstructor`

#### Inherited from

Array.[species]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:314

## Accessors

### columnsNames

• `get` **columnsNames**(): `string`[]

Array of columns names

#### Returns

`string`[]

#### Defined in

[src/drivers/rowset.ts:93](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L93)

___

### metadata

• `get` **metadata**(): [`SQLCloudRowsetMetadata`](../interfaces/sqlcloudrowsetmetadata)

Get rowset metadata

#### Returns

[`SQLCloudRowsetMetadata`](../interfaces/sqlcloudrowsetmetadata)

#### Defined in

[src/drivers/rowset.ts:98](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L98)

___

### numberOfColumns

• `get` **numberOfColumns**(): `number`

Number of columns in row set

#### Returns

`number`

#### Defined in

[src/drivers/rowset.ts:88](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L88)

___

### numberOfRows

• `get` **numberOfRows**(): `number`

Number of rows in row set

#### Returns

`number`

#### Defined in

[src/drivers/rowset.ts:83](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L83)

___

### version

• `get` **version**(): `number`

Rowset version is 1 for a rowset with simple column names, 2 for extended metadata

#### Returns

`number`

**`See`**

https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md

#### Defined in

[src/drivers/rowset.ts:78](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L78)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<[`SQLiteCloudRow`](sqlitecloudrow)\>

Iterator

#### Returns

`IterableIterator`\<[`SQLiteCloudRow`](sqlitecloudrow)\>

#### Inherited from

Array.[iterator]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

___

### [unscopables]

▸ **[unscopables]**(): `Object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `copyWithin` | `boolean` |
| `entries` | `boolean` |
| `fill` | `boolean` |
| `find` | `boolean` |
| `findIndex` | `boolean` |
| `keys` | `boolean` |
| `values` | `boolean` |

#### Inherited from

Array.[unscopables]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:99

___

### at

▸ **at**(`index`): `undefined` \| [`SQLiteCloudRow`](sqlitecloudrow)

Returns the item located at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired code unit. A negative index will count back from the last item. |

#### Returns

`undefined` \| [`SQLiteCloudRow`](sqlitecloudrow)

#### Inherited from

Array.at

#### Defined in

node_modules/typescript/lib/lib.es2022.array.d.ts:26

___

### concat

▸ **concat**(`...items`): [`SQLiteCloudRow`](sqlitecloudrow)[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`\<[`SQLiteCloudRow`](sqlitecloudrow)\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

[`SQLiteCloudRow`](sqlitecloudrow)[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1328

▸ **concat**(`...items`): [`SQLiteCloudRow`](sqlitecloudrow)[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | ([`SQLiteCloudRow`](sqlitecloudrow) \| `ConcatArray`\<[`SQLiteCloudRow`](sqlitecloudrow)\>)[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

[`SQLiteCloudRow`](sqlitecloudrow)[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1334

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`SQLiteCloudRowset`](sqlitecloudrowset)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`SQLiteCloudRowset`](sqlitecloudrowset)

#### Inherited from

Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:64

___

### entries

▸ **entries**(): `IterableIterator`\<[`number`, [`SQLiteCloudRow`](sqlitecloudrow)]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`\<[`number`, [`SQLiteCloudRow`](sqlitecloudrow)]\>

#### Inherited from

Array.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

___

### every

▸ **every**\<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`SQLiteCloudRow`](sqlitecloudrow)\<`S`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`SQLiteCloudRow`](sqlitecloudrow), `index`: `number`, `array`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1411

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`SQLiteCloudRow`](sqlitecloudrow), `index`: `number`, `array`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1420

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`SQLiteCloudRowset`](sqlitecloudrowset)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`SQLiteCloudRow`](sqlitecloudrow) | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`SQLiteCloudRowset`](sqlitecloudrowset)

#### Inherited from

Array.fill

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:53

___

### filter

▸ **filter**(`fn`): [`SQLiteCloudRow`](sqlitecloudrow)[]

Returns an instance of SQLiteCloudRowset where rows have been filtered via given callback

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`row`: [`SQLiteCloudRow`](sqlitecloudrow), `index`: `number`, `rowset`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => `boolean` |

#### Returns

[`SQLiteCloudRow`](sqlitecloudrow)[]

#### Overrides

Array.filter

#### Defined in

[src/drivers/rowset.ts:141](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L141)

___

### find

▸ **find**\<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`SQLiteCloudRow`](sqlitecloudrow)\<`S`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`this`: `void`, `value`: [`SQLiteCloudRow`](sqlitecloudrow), `index`: `number`, `obj`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:31

▸ **find**(`predicate`, `thisArg?`): `undefined` \| [`SQLiteCloudRow`](sqlitecloudrow)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: [`SQLiteCloudRow`](sqlitecloudrow), `index`: `number`, `obj`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| [`SQLiteCloudRow`](sqlitecloudrow)

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:32

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`SQLiteCloudRow`](sqlitecloudrow), `index`: `number`, `obj`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:43

___

### flat

▸ **flat**\<`A`, `D`\>(`this`, `depth?`): `FlatArray`\<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | extends `number` = ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `A` | - |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

`FlatArray`\<`A`, `D`\>[]

#### Inherited from

Array.flat

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:81

___

### flatMap

▸ **flatMap**\<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`this`: `This`, `value`: [`SQLiteCloudRow`](sqlitecloudrow), `index`: `number`, `array`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.flatMap

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:70

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`SQLiteCloudRow`](sqlitecloudrow), `index`: `number`, `array`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1435

___

### getItem

▸ **getItem**(`row`, `column`): `any`

Return value of item at given row and column

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `column` | `number` |

#### Returns

`any`

#### Defined in

[src/drivers/rowset.ts:103](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L103)

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`SQLiteCloudRow`](sqlitecloudrow) | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

Array.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`SQLiteCloudRow`](sqlitecloudrow) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Array.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1396

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1339

___

### keys

▸ **keys**(): `IterableIterator`\<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`\<`number`\>

#### Inherited from

Array.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`SQLiteCloudRow`](sqlitecloudrow) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1402

___

### map

▸ **map**(`fn`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`row`: [`SQLiteCloudRow`](sqlitecloudrow), `index`: `number`, `rowset`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => `any` |

#### Returns

`any`[]

#### Overrides

Array.map

#### Defined in

[src/drivers/rowset.ts:131](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L131)

___

### pop

▸ **pop**(): `undefined` \| [`SQLiteCloudRow`](sqlitecloudrow)

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| [`SQLiteCloudRow`](sqlitecloudrow)

#### Inherited from

Array.pop

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1317

___

### push

▸ **push**(`...items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`SQLiteCloudRow`](sqlitecloudrow)[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

Array.push

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1322

___

### reduce

▸ **reduce**(`callbackfn`): [`SQLiteCloudRow`](sqlitecloudrow)

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`SQLiteCloudRow`](sqlitecloudrow), `currentValue`: [`SQLiteCloudRow`](sqlitecloudrow), `currentIndex`: `number`, `array`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => [`SQLiteCloudRow`](sqlitecloudrow) | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

[`SQLiteCloudRow`](sqlitecloudrow)

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1459

▸ **reduce**(`callbackfn`, `initialValue`): [`SQLiteCloudRow`](sqlitecloudrow)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`SQLiteCloudRow`](sqlitecloudrow), `currentValue`: [`SQLiteCloudRow`](sqlitecloudrow), `currentIndex`: `number`, `array`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => [`SQLiteCloudRow`](sqlitecloudrow) |
| `initialValue` | [`SQLiteCloudRow`](sqlitecloudrow) |

#### Returns

[`SQLiteCloudRow`](sqlitecloudrow)

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1460

▸ **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`SQLiteCloudRow`](sqlitecloudrow), `currentIndex`: `number`, `array`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1466

___

### reduceRight

▸ **reduceRight**(`callbackfn`): [`SQLiteCloudRow`](sqlitecloudrow)

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`SQLiteCloudRow`](sqlitecloudrow), `currentValue`: [`SQLiteCloudRow`](sqlitecloudrow), `currentIndex`: `number`, `array`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => [`SQLiteCloudRow`](sqlitecloudrow) | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

[`SQLiteCloudRow`](sqlitecloudrow)

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1472

▸ **reduceRight**(`callbackfn`, `initialValue`): [`SQLiteCloudRow`](sqlitecloudrow)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`SQLiteCloudRow`](sqlitecloudrow), `currentValue`: [`SQLiteCloudRow`](sqlitecloudrow), `currentIndex`: `number`, `array`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => [`SQLiteCloudRow`](sqlitecloudrow) |
| `initialValue` | [`SQLiteCloudRow`](sqlitecloudrow) |

#### Returns

[`SQLiteCloudRow`](sqlitecloudrow)

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1473

▸ **reduceRight**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`SQLiteCloudRow`](sqlitecloudrow), `currentIndex`: `number`, `array`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1479

___

### reverse

▸ **reverse**(): [`SQLiteCloudRow`](sqlitecloudrow)[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

[`SQLiteCloudRow`](sqlitecloudrow)[]

#### Inherited from

Array.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1344

___

### shift

▸ **shift**(): `undefined` \| [`SQLiteCloudRow`](sqlitecloudrow)

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| [`SQLiteCloudRow`](sqlitecloudrow)

#### Inherited from

Array.shift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1349

___

### slice

▸ **slice**(`start?`, `end?`): [`SQLiteCloudRow`](sqlitecloudrow)[]

Returns a subset of rows from this rowset

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |

#### Returns

[`SQLiteCloudRow`](sqlitecloudrow)[]

#### Overrides

Array.slice

#### Defined in

[src/drivers/rowset.ts:113](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/rowset.ts#L113)

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`SQLiteCloudRow`](sqlitecloudrow), `index`: `number`, `array`: [`SQLiteCloudRow`](sqlitecloudrow)[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1429

___

### sort

▸ **sort**(`compareFn?`): [`SQLiteCloudRowset`](sqlitecloudrowset)

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: [`SQLiteCloudRow`](sqlitecloudrow), `b`: [`SQLiteCloudRow`](sqlitecloudrow)) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`SQLiteCloudRowset`](sqlitecloudrowset)

#### Inherited from

Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1370

___

### splice

▸ **splice**(`start`, `deleteCount?`): [`SQLiteCloudRow`](sqlitecloudrow)[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

[`SQLiteCloudRow`](sqlitecloudrow)[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1377

▸ **splice**(`start`, `deleteCount`, `...items`): [`SQLiteCloudRow`](sqlitecloudrow)[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | [`SQLiteCloudRow`](sqlitecloudrow)[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

[`SQLiteCloudRow`](sqlitecloudrow)[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1385

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

Array.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1312

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Array.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1308

___

### unshift

▸ **unshift**(`...items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`SQLiteCloudRow`](sqlitecloudrow)[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1390

___

### values

▸ **values**(): `IterableIterator`\<[`SQLiteCloudRow`](sqlitecloudrow)\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`\<[`SQLiteCloudRow`](sqlitecloudrow)\>

#### Inherited from

Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:75

___

### from

▸ **from**\<`T`\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`\<`T`\> | An array-like object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:72

▸ **from**\<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`\<`T`\> | An array-like object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:80

▸ **from**\<`T`\>(`iterable`): `T`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`\<`T`\> \| `ArrayLike`\<`T`\> | An iterable object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:83

▸ **from**\<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`\<`T`\> \| `ArrayLike`\<`T`\> | An iterable object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:91

___

### fromAsync

▸ **fromAsync**\<`T`\>(`arrayLike`): `Promise`\<`Awaited`\<`T`\>[]\>

Create an array from an iterable or async iterable object.
Values from the iterable are awaited.

```ts
await Array.fromAsync([1]); // [1]
await Array.fromAsync([Promise.resolve(1)]); // [1]
await Array.fromAsync((async function*() { yield 1 })()); // [1]
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `AsyncIterable`\<`T`\> \| `Iterable`\<`T`\> \| `ArrayLike`\<`T`\> | The iterable or async iterable to convert to an array. |

#### Returns

`Promise`\<`Awaited`\<`T`\>[]\>

A Promise whose fulfillment is a new Array instance containing the values from the iterator.

#### Inherited from

Array.fromAsync

#### Defined in

node_modules/bun-types/globals.d.ts:1579

▸ **fromAsync**\<`T`, `U`\>(`arrayLike`, `mapFn?`, `thisArg?`): `Promise`\<`Awaited`\<`U`\>[]\>

Create an array from an iterable or async iterable object.
Values from the iterable are awaited. Results of the map function are also awaited.

```ts
await Array.fromAsync([1]); // [1]
await Array.fromAsync([Promise.resolve(1)]); // [1]
await Array.fromAsync((async function*() { yield 1 })()); // [1]
await Array.fromAsync([1], (n) => n + 1); // [2]
await Array.fromAsync([1], (n) => Promise.resolve(n + 1)); // [2]
```

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `AsyncIterable`\<`T`\> \| `Iterable`\<`T`\> \| `ArrayLike`\<`T`\> | The iterable or async iterable to convert to an array. |
| `mapFn?` | (`value`: `T`, `index`: `number`) => `U` | A mapper function that transforms each element of `arrayLike` after awaiting them. |
| `thisArg?` | `any` | The `this` to which `mapFn` is bound. |

#### Returns

`Promise`\<`Awaited`\<`U`\>[]\>

A Promise whose fulfillment is a new Array instance containing the values from the iterator.

#### Inherited from

Array.fromAsync

#### Defined in

node_modules/bun-types/globals.d.ts:1598

___

### isArray

▸ **isArray**(`arg`): arg is any[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

arg is any[]

#### Inherited from

Array.isArray

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1491

___

### of

▸ **of**\<`T`\>(`...items`): `T`[]

Returns a new array from a set of elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | A set of elements to include in the new array object. |

#### Returns

`T`[]

#### Inherited from

Array.of

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:86

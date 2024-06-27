---
title: Database
description: SQLite Cloud Javascript SDK
---

Creating a Database object automatically opens a connection to the SQLite database.
When the connection is established the Database object emits an open event and calls
the optional provided callback. If the connection cannot be established an error event
will be emitted and the optional callback is called with the error information.

## Hierarchy

- `EventEmitter`

  ↳ **`Database`**

## Table of contents

### Constructors

- [constructor](database#constructor)

### Properties

- [config](database#config)
- [connections](database#connections)
- [prefixed](database#prefixed)

### Methods

- [addListener](database#addlistener)
- [all](database#all)
- [close](database#close)
- [configure](database#configure)
- [each](database#each)
- [emit](database#emit)
- [emitEvent](database#emitevent)
- [eventNames](database#eventnames)
- [exec](database#exec)
- [get](database#get)
- [getConfiguration](database#getconfiguration)
- [getConnection](database#getconnection)
- [handleError](database#handleerror)
- [interrupt](database#interrupt)
- [listenerCount](database#listenercount)
- [listeners](database#listeners)
- [loadExtension](database#loadextension)
- [off](database#off)
- [on](database#on)
- [once](database#once)
- [prepare](database#prepare)
- [processContext](database#processcontext)
- [removeAllListeners](database#removealllisteners)
- [removeListener](database#removelistener)
- [run](database#run)
- [sql](database#sql)
- [verbose](database#verbose)

## Constructors

### constructor

• **new Database**(`config`, `callback?`): [`Database`](database)

Create and initialize a database from a full configuration object, or connection string

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `string` \| [`SQLiteCloudConfig`](../interfaces/sqlitecloudconfig) |
| `callback?` | [`ErrorCallback`](../modules#errorcallback) |

#### Returns

[`Database`](database)

#### Overrides

EventEmitter.constructor

#### Defined in

[src/drivers/database.ts:33](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L33)

• **new Database**(`config`, `mode?`, `callback?`): [`Database`](database)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `string` \| [`SQLiteCloudConfig`](../interfaces/sqlitecloudconfig) |
| `mode?` | `number` |
| `callback?` | [`ErrorCallback`](../modules#errorcallback) |

#### Returns

[`Database`](database)

#### Overrides

EventEmitter.constructor

#### Defined in

[src/drivers/database.ts:34](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L34)

## Properties

### config

• `Private` **config**: [`SQLiteCloudConfig`](../interfaces/sqlitecloudconfig)

Configuration used to open database connections

#### Defined in

[src/drivers/database.ts:57](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L57)

___

### connections

• `Private` **connections**: [`SQLiteCloudConnection`](sqlitecloudconnection)[] = `[]`

Database connections

#### Defined in

[src/drivers/database.ts:60](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L60)

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

EventEmitter.prefixed

#### Defined in

node_modules/eventemitter3/index.d.ts:9

## Methods

### addListener

▸ **addListener**\<`T`\>(`event`, `fn`, `context?`): [`Database`](database)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: `any`[]) => `void` |
| `context?` | `any` |

#### Returns

[`Database`](database)

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/eventemitter3/index.d.ts:45

___

### all

▸ **all**\<`T`\>(`sql`, `callback?`): [`Database`](database)

Runs the SQL query with the specified parameters and calls the callback
with all result rows afterwards. The function returns the Database object to
allow for function chaining. The parameters are the same as the Database#run
function, with the following differences: The signature of the callback is
function(err, rows) {}. rows is an array. If the result set is empty, it will
be an empty array, otherwise it will have an object for each result row which
in turn contains the values of that row, like the Database#get function.
Note that it first retrieves all result rows and stores them in memory.
For queries that have potentially large result sets, use the Database#each
function to retrieve all rows or Database#prepare followed by multiple Statement#get
calls to retrieve a previously unknown amount of rows.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |
| `callback?` | `RowsCallback`\<`T`\> |

#### Returns

[`Database`](database)

#### Defined in

[src/drivers/database.ts:273](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L273)

▸ **all**\<`T`\>(`sql`, `params`, `callback?`): [`Database`](database)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |
| `params` | `any` |
| `callback?` | `RowsCallback`\<`T`\> |

#### Returns

[`Database`](database)

#### Defined in

[src/drivers/database.ts:274](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L274)

___

### close

▸ **close**(`callback?`): `void`

If the optional callback is provided, this function will be called when the
database was closed successfully or when an error occurred. The first argument
is an error object. When it is null, closing succeeded. If no callback is provided
and an error occurred, an error event with the error object as the only parameter
will be emitted on the database object. If closing succeeded, a close event with no
parameters is emitted, regardless of whether a callback was provided or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | [`ErrorCallback`](../modules#errorcallback) |

#### Returns

`void`

#### Defined in

[src/drivers/database.ts:394](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L394)

___

### configure

▸ **configure**(`_option`, `_value`): [`Database`](database)

Set a configuration option for the database

#### Parameters

| Name | Type |
| :------ | :------ |
| `_option` | `string` |
| `_value` | `any` |

#### Returns

[`Database`](database)

#### Defined in

[src/drivers/database.ts:190](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L190)

___

### each

▸ **each**\<`T`\>(`sql`, `callback?`, `complete?`): [`Database`](database)

Runs the SQL query with the specified parameters and calls the callback once for each result row.
The function returns the Database object to allow for function chaining. The parameters are the
same as the Database#run function, with the following differences: The signature of the callback
is function(err, row) {}. If the result set succeeds but is empty, the callback is never called.
In all other cases, the callback is called once for every retrieved row. The order of calls correspond
exactly to the order of rows in the result set. After all row callbacks were called, the completion
callback will be called if present. The first argument is an error object, and the second argument
is the number of retrieved rows. If you specify only one function, it will be treated as row callback,
if you specify two, the first (== second to last) function will be the row callback, the last function
will be the completion callback. If you know that a query only returns a very limited number of rows,
it might be more convenient to use Database#all to retrieve all rows at once. There is currently no
way to abort execution.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |
| `callback?` | `RowCallback`\<`T`\> |
| `complete?` | `RowCountCallback` |

#### Returns

[`Database`](database)

#### Defined in

[src/drivers/database.ts:312](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L312)

▸ **each**\<`T`\>(`sql`, `params`, `callback?`, `complete?`): [`Database`](database)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |
| `params` | `any` |
| `callback?` | `RowCallback`\<`T`\> |
| `complete?` | `RowCountCallback` |

#### Returns

[`Database`](database)

#### Defined in

[src/drivers/database.ts:313](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L313)

___

### emit

▸ **emit**\<`T`\>(`event`, `...args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

EventEmitter.emit

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### emitEvent

▸ **emitEvent**(`event`, `...args`): `void`

Emits given event with optional arguments on the next tick so callbacks can complete first

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/drivers/database.ts:160](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L160)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/eventemitter3/index.d.ts:15

___

### exec

▸ **exec**(`sql`, `callback?`): [`Database`](database)

Runs all SQL queries in the supplied string. No result rows are retrieved.
The function returns the Database object to allow for function chaining.
If a query fails, no subsequent statements will be executed (wrap it in a
transaction if you want all or none to be executed). When all statements
have been executed successfully, or when an error occurs, the callback
function is called, with the first parameter being either null or an error
object. When no callback is provided and an error occurs, an error event
will be emitted on the database object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |
| `callback?` | [`ErrorCallback`](../modules#errorcallback) |

#### Returns

[`Database`](database)

#### Defined in

[src/drivers/database.ts:368](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L368)

___

### get

▸ **get**\<`T`\>(`sql`, `callback?`): [`Database`](database)

Runs the SQL query with the specified parameters and calls the callback with
a subsequent result row. The function returns the Database object to allow for
function chaining. The parameters are the same as the Database#run function,
with the following differences: The signature of the callback is `function(err, row) {}`.
If the result set is empty, the second parameter is undefined, otherwise it is an
object containing the values for the first row. The property names correspond to
the column names of the result set. It is impossible to access them by column index;
the only supported way is by column name.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |
| `callback?` | `RowCallback`\<`T`\> |

#### Returns

[`Database`](database)

#### Defined in

[src/drivers/database.ts:235](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L235)

▸ **get**\<`T`\>(`sql`, `params`, `callback?`): [`Database`](database)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |
| `params` | `any` |
| `callback?` | `RowCallback`\<`T`\> |

#### Returns

[`Database`](database)

#### Defined in

[src/drivers/database.ts:236](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L236)

___

### getConfiguration

▸ **getConfiguration**(): [`SQLiteCloudConfig`](../interfaces/sqlitecloudconfig)

Returns the configuration with which this database was opened.
The configuration is readonly and cannot be changed as there may
be multiple connections using the same configuration.

#### Returns

[`SQLiteCloudConfig`](../interfaces/sqlitecloudconfig)

A configuration object

#### Defined in

[src/drivers/database.ts:176](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L176)

___

### getConnection

▸ **getConnection**(`callback`): `void`

Returns first available connection from connection pool

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `ResultsCallback`\<[`SQLiteCloudConnection`](sqlitecloudconnection)\> |

#### Returns

`void`

#### Defined in

[src/drivers/database.ts:67](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L67)

___

### handleError

▸ **handleError**(`connection`, `error`, `callback?`): `void`

Handles an error by closing the connection, calling the callback and/or emitting an error event

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | ``null`` \| [`SQLiteCloudConnection`](sqlitecloudconnection) |
| `error` | `Error` |
| `callback?` | [`ErrorCallback`](../modules#errorcallback) |

#### Returns

`void`

#### Defined in

[src/drivers/database.ts:117](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L117)

___

### interrupt

▸ **interrupt**(): `void`

Allows the user to interrupt long-running queries. Wrapper around
sqlite3_interrupt and causes other data-fetching functions to be
passed an err with code = sqlite3.INTERRUPT. The database must be
open to use this function.

#### Returns

`void`

#### Defined in

[src/drivers/database.ts:429](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L429)

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/eventemitter3/index.d.ts:27

___

### listeners

▸ **listeners**\<`T`\>(`event`): (...`args`: `any`[]) => `void`[]

Return the listeners registered for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

#### Returns

(...`args`: `any`[]) => `void`[]

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/eventemitter3/index.d.ts:20

___

### loadExtension

▸ **loadExtension**(`_path`, `callback?`): [`Database`](database)

Loads a compiled SQLite extension into the database connection object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_path` | `string` | - |
| `callback?` | [`ErrorCallback`](../modules#errorcallback) | If provided, this function will be called when the extension was loaded successfully or when an error occurred. The first argument is an error object. When it is null, loading succeeded. If no callback is provided and an error occurred, an error event with the error object as the only parameter will be emitted on the database object. |

#### Returns

[`Database`](database)

#### Defined in

[src/drivers/database.ts:413](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L413)

___

### off

▸ **off**\<`T`\>(`event`, `fn?`, `context?`, `once?`): [`Database`](database)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | (...`args`: `any`[]) => `void` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Database`](database)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/eventemitter3/index.d.ts:69

___

### on

▸ **on**\<`T`\>(`event`, `fn`, `context?`): [`Database`](database)

Add a listener for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: `any`[]) => `void` |
| `context?` | `any` |

#### Returns

[`Database`](database)

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/eventemitter3/index.d.ts:40

___

### once

▸ **once**\<`T`\>(`event`, `fn`, `context?`): [`Database`](database)

Add a one-time listener for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: `any`[]) => `void` |
| `context?` | `any` |

#### Returns

[`Database`](database)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/eventemitter3/index.d.ts:54

___

### prepare

▸ **prepare**\<`T`\>(`sql`, `...params`): [`Statement`](statement)\<`T`\>

Prepares the SQL statement and optionally binds the specified parameters and
calls the callback when done. The function returns a Statement object.
When preparing was successful, the first and only argument to the callback
is null, otherwise it is the error object. When bind parameters are supplied,
they are bound to the prepared statement before calling the callback.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |
| `...params` | `any`[] |

#### Returns

[`Statement`](statement)\<`T`\>

#### Defined in

[src/drivers/database.ts:353](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L353)

___

### processContext

▸ **processContext**(`results?`): `undefined` \| `Record`\<`string`, `any`\>

Some queries like inserts or updates processed via run or exec may generate
an empty result (eg. no data was selected), but still have some metadata.
For example the server may pass the id of the last row that was modified.
In this case the callback results should be empty but the context may contain
additional information like lastID, etc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `results?` | `any` | Results received from the server |

#### Returns

`undefined` \| `Record`\<`string`, `any`\>

A context object if one makes sense, otherwise undefined

**`See`**

https://github.com/TryGhost/node-sqlite3/wiki/API#runsql--param---callback

#### Defined in

[src/drivers/database.ts:141](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L141)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Database`](database)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Database`](database)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/eventemitter3/index.d.ts:79

___

### removeListener

▸ **removeListener**\<`T`\>(`event`, `fn?`, `context?`, `once?`): [`Database`](database)

Remove the listeners of a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | (...`args`: `any`[]) => `void` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Database`](database)

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/eventemitter3/index.d.ts:63

___

### run

▸ **run**\<`T`\>(`sql`, `callback?`): [`Database`](database)

Runs the SQL query with the specified parameters and calls the callback afterwards.
The callback will contain the results passed back from the server, for example in the
case of an update or insert, these would contain the number of rows modified, etc.
It does not retrieve any result data. The function returns the Database object for
which it was called to allow for function chaining.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |
| `callback?` | `ResultsCallback`\<`T`\> |

#### Returns

[`Database`](database)

#### Defined in

[src/drivers/database.ts:202](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L202)

▸ **run**\<`T`\>(`sql`, `params`, `callback?`): [`Database`](database)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |
| `params` | `any` |
| `callback?` | `ResultsCallback`\<`T`\> |

#### Returns

[`Database`](database)

#### Defined in

[src/drivers/database.ts:203](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L203)

___

### sql

▸ **sql**(`sql`, `...values`): `Promise`\<`any`\>

Sql is a promise based API for executing SQL statements. You can
pass a simple string with a SQL statement or a template string
using backticks and parameters in ${parameter} format. These parameters
will be properly escaped and quoted like when using a prepared statement.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sql` | `string` \| `TemplateStringsArray` | A sql string or a template string in `backticks` format |
| `...values` | `any`[] | - |

#### Returns

`Promise`\<`any`\>

An array of rows in case of selections or an object with
metadata in case of insert, update, delete.

#### Defined in

[src/drivers/database.ts:447](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L447)

___

### verbose

▸ **verbose**(): [`Database`](database)

Enable verbose mode

#### Returns

[`Database`](database)

#### Defined in

[src/drivers/database.ts:181](https://github.com/sqlitecloud/sqlitecloud-js/blob/f7cd658/src/drivers/database.ts#L181)

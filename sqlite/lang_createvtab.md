---
title: CREATE VIRTUAL TABLE
description: CREATE VIRTUAL TABLE
statement: CREATE VIRTUAL TABLE MyNames USING fts5(content);
---

<!-- do-not-touch-svg-import: 'createvtab.svg' -->

A <a href="https://www.sqlite.org/vtab.html" target="_blank">virtual
table</a> is an interface to an external storage or computation engine
that appears to be a table but does not actually store information in
the database file.

In general, you can do anything with a
<a href="https://www.sqlite.org/vtab.html" target="_blank">virtual
table</a> that can be done with an ordinary table, except that you
cannot create indices or triggers on a virtual table. Some virtual table
implementations might impose additional restrictions. For example, many
virtual tables are read-only.

The <span class="yyterm">module-name</span> is the name of an object
that implements the virtual table. The
<span class="yyterm">module-name</span> must be registered with the
SQLite database connection using
<a href="https://www.sqlite.org/c3ref/create_module.html"
target="_blank">sqlite3_create_module()</a> or
<a href="https://www.sqlite.org/c3ref/create_module.html"
target="_blank">sqlite3_create_module_v2()</a> prior to issuing the
CREATE VIRTUAL TABLE statement. The module takes zero or more
comma-separated arguments. The arguments can be just about any text as
long as it has balanced parentheses. The argument syntax is sufficiently
general that the arguments can be made to appear as [column
definitions](lang_createtable#tablecoldef) in a traditional [CREATE
TABLE](lang_createtable) statement. SQLite passes the module arguments
directly to the <a href="https://www.sqlite.org/vtab.html#xcreate"
target="_blank">xCreate</a> and
<a href="https://www.sqlite.org/vtab.html#xconnect"
target="_blank">xConnect</a> methods of the module implementation
without any interpretation. It is the responsibility of the module
implementation to parse and interpret its own arguments.

A virtual table is destroyed using the ordinary [DROP
TABLE](lang_droptable) statement. There is no DROP VIRTUAL TABLE
statement.

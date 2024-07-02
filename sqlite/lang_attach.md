---
title: ATTACH DATABASE
description: The ATTACH DATABASE statement adds another database file to the current database connection.
statement: ATTACH DATABASE 'database_name' AS alias;
customClass: sqlite-doc
category: reference
status: publish
---

## 1. Overview

<!-- do-not-touch-svg-import: 'attach.svg' -->

The ATTACH DATABASE statement adds another database file to the current
<a href="https://www.sqlite.org/c3ref/sqlite3.html"
target="_blank">database connection</a>. Database files that were
previously attached can be removed using the [DETACH
DATABASE](lang_detach) command.

## 2. Details

The filename for the database to be attached is the value of the
expression that occurs before the AS keyword. The filename of the
database follows the same semantics as the filename argument to
<a href="https://www.sqlite.org/c3ref/open.html"
target="_blank">sqlite3_open()</a> and
<a href="https://www.sqlite.org/c3ref/open.html"
target="_blank">sqlite3_open_v2()</a>; the special name
"<a href="https://www.sqlite.org/inmemorydb.html"
target="_blank">:memory:</a>" results in an
<a href="https://www.sqlite.org/inmemorydb.html"
target="_blank">in-memory database</a> and an empty string results in a
new temporary database. The filename argument can be a
<a href="https://www.sqlite.org/uri.html" target="_blank">URI
filename</a> if URI filename processing is enabled on the database
connection. The default behavior is for URI filenames to be disabled,
however that might change in a future release of SQLite, so application
developers are advised to plan accordingly.

The name that occurs after the AS keyword is the name of the database
used internally by SQLite. The schema-names 'main' and 'temp' refer to
the main database and the database used for temporary tables. The main
and temp databases cannot be attached or detached.

Tables in an attached database can be referred to using the syntax
*schema-name.table-name*. If the name of the table is unique across all
attached databases and the main and temp databases, then the
*schema-name* prefix is not required. If two or more tables in different
databases have the same name and the *schema-name* prefix is not used on
a table reference, then the table chosen is the one in the database that
was least recently attached.

Transactions involving multiple attached databases are atomic, assuming
that the main database is not
"<a href="https://www.sqlite.org/inmemorydb.html"
target="_blank">:memory:</a>" and the
<a href="https://www.sqlite.org/pragma.html#pragma_journal_mode"
target="_blank">journal_mode</a> is not
<a href="https://www.sqlite.org/wal.html" target="_blank">WAL</a>. If
the main database is ":memory:" or if the journal_mode is WAL, then
transactions continue to be atomic within each individual database file.
But if the host computer crashes in the middle of a
[COMMIT](lang_transaction) where two or more database files are updated,
some of those files might get the changes where others might not.

There is a limit, set using
<a href="https://www.sqlite.org/c3ref/limit.html"
target="_blank">sqlite3_limit()</a> and <a
href="https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimitattached"
target="_blank">SQLITE_LIMIT_ATTACHED</a>, to the number of databases
that can be simultaneously attached to a single database connection.

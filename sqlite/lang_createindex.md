---
title: CREATE INDEX
description: The CREATE INDEX command consists of the keywords "CREATE INDEX" followed by the name of the new index.
statement: CREATE INDEX IF NOT EXISTS ArtistNameIdx ON Artist(Name);
customClass: sqlite-doc
---

## 1. Syntax

<!-- do-not-touch-svg-import: 'createindex.svg' -->

The CREATE INDEX command consists of the keywords "CREATE INDEX"
followed by the name of the new index, the keyword "ON", the name of a
previously created table that is to be indexed, and a parenthesized list
of table column names and/or expressions that are used for the index
key. If the optional WHERE clause is included, then the index is a
"<a href="https://www.sqlite.org/partialindex.html"
target="_blank">partial index</a>".

If the optional IF NOT EXISTS clause is present and another index with
the same name already exists, then this command becomes a no-op.

There are no arbitrary limits on the number of indices that can be
attached to a single table. The number of columns in an index is limited
to the value set by <a href="https://www.sqlite.org/c3ref/limit.html"
target="_blank">sqlite3_limit</a>(<a
href="https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimitcolumn"
target="_blank">SQLITE_LIMIT_COLUMN</a>,...).

Indexes are removed with the [DROP INDEX](lang_dropindex) command.

<span id="uniqueidx"></span>

## 1.1. Unique Indexes

If the UNIQUE keyword appears between CREATE and INDEX then duplicate
index entries are not allowed. Any attempt to insert a duplicate entry
will result in an error.

For the purposes of unique indices, all NULL values are considered
different from all other NULL values and are thus unique. This is one of
the two possible interpretations of the SQL-92 standard (the language in
the standard is ambiguous). The interpretation used by SQLite is the
same and is the interpretation followed by PostgreSQL, MySQL, Firebird,
and Oracle. Informix and Microsoft SQL Server follow the other
interpretation of the standard, which is that all NULL values are equal
to one another.

<span id="indexexpr"></span>

## 1.2. Indexes on Expressions

Expressions in an index may not reference other tables and may not use
subqueries nor functions whose result might change (ex:
[random()](lang_corefunc#random) or
[sqlite_version()](lang_corefunc#sqlite_version)). Expressions in an
index may only refer to columns in the table that is being indexed.
Indexes on expression will not work with versions of SQLite prior to
<a href="https://www.sqlite.org/releaselog/3_9_0.html"
target="_blank">version 3.9.0</a> (2015-10-14). See the
<a href="https://www.sqlite.org/expridx.html" target="_blank">Indexes On
Expressions</a> document for additional information about using general
expressions in CREATE INDEX statements. <span id="descidx"></span>

## 1.3. Descending Indexes

Each column name or expression can be followed by one of the "ASC" or
"DESC" keywords to indicate sort order. The sort order may or may not be
ignored depending on the database file format, and in particular the
<a href="https://www.sqlite.org/fileformat2.html#schemaformat"
target="_blank">schema format number</a>. The "legacy" schema format (1)
ignores index sort order. The descending index schema format (4) takes
index sort order into account. Only versions of SQLite 3.3.0
(2006-01-11) and later are able to understand the descending index
format. For compatibility, version of SQLite between 3.3.0 and 3.7.9 use
the legacy schema format by default. The newer schema format is used by
default in version 3.7.10 (2012-01-16) and later. The
<a href="https://www.sqlite.org/pragma.html#pragma_legacy_file_format"
target="_blank">legacy_file_format pragma</a> can be used to change set
the specific behavior for any version of SQLite.

## 1.4. NULLS FIRST and NULLS LAST

The NULLS FIRST and NULLS LAST predicates are not supported for indexes.
For <a href="https://www.sqlite.org/datatype3.html#sortorder"
target="_blank">sorting purposes</a>, SQLite considers NULL values to be
smaller than all other values. Hence NULL values always appear at the
beginning of an ASC index and at the end of a DESC index.

<span id="collidx"></span>

## 1.5. Collations

The COLLATE clause optionally following each column name or expression
defines a collating sequence used for text entries in that column. The
default collating sequence is the collating sequence defined for that
column in the [CREATE TABLE](lang_createtable) statement. Or if no
collating sequence is otherwise defined, the built-in BINARY collating
sequence is used.

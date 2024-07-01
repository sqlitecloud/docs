---
customClass: sqlite-doc
title: CREATE VIEW
description: The CREATE VIEW command assigns a name to a pre-packaged SELECT statement.
statement: CREATE VIEW view_names AS SELECT name FROM Artist;
---

## 1. Syntax

<!-- do-not-touch-svg-import: 'createview.svg' -->

## 2. Description

The CREATE VIEW command assigns a name to a pre-packaged
[SELECT](lang_select) statement. Once the view is created, it can be
used in the FROM clause of another [SELECT](lang_select) in place of a
table name.

If the "TEMP" or "TEMPORARY" keyword occurs in between "CREATE" and
"VIEW" then the view that is created is only visible to the
<a href="https://www.sqlite.org/c3ref/sqlite3.html"
target="_blank">database connection</a> that created it and is
automatically deleted when the database connection is closed.

If a <span class="yyterm">schema-name</span> is specified, then the view
is created in the specified database. It is an error to specify both a
<span class="yyterm">schema-name</span> and the TEMP keyword on a VIEW,
unless the <span class="yyterm">schema-name</span> is "temp". If no
schema name is specified, and the TEMP keyword is not present, the VIEW
is created in the main database.

You cannot [DELETE](lang_delete), [INSERT](lang_insert), or
[UPDATE](lang_update) a view. Views are read-only in SQLite. However, in
many cases you can use an [INSTEAD OF
trigger](lang_createtrigger#instead_of_trigger) on the view to
accomplish the same thing. Views are removed with the [DROP
VIEW](lang_dropview) command.

If a <span class="yyterm">column-name</span> list follows the
<span class="yyterm">view-name</span>, then that list determines the
names of the columns for the view. If the
<span class="yyterm">column-name</span> list is omitted, then the names
of the columns in the view are derived from the names of the result-set
columns in the <a href="https://www.sqlite.org/syntax/select-stmt.html"
target="_blank">select-stmt</a>. The use of
<span class="yyterm">column-name</span> list is recommended. Or, if
<span class="yyterm">column-name</span> list is omitted, then the result
columns in the [SELECT](lang_select) statement that defines the view
should have well-defined names using the
"<a href="https://www.sqlite.org/syntax/result-column.html"
target="_blank">AS column-alias</a>" syntax. SQLite allows you to create
views that depend on automatically generated column names, but you
should avoid using them since the rules used to generate column names
are not a defined part of the interface and might change in future
releases of SQLite.

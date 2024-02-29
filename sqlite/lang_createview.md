---
title: CREATE VIEW
description: CREATE VIEW
statement: CREATE VIEW view_names AS SELECT name FROM Artist;
---
!['script.js'](/public/docs/sqlite/script.js)





<h2 id="syntax"><span>1. </span>Syntax</h2>

!['createview.svg'](/public/docs/sqlite/_svg/createview.svg)


<h2 id="description"><span>2. </span>Description</h2>

<p>The CREATE VIEW command assigns a name to a pre-packaged 
<a href="lang_select">SELECT</a> statement. 
Once the view is created, it can be used in the FROM clause
of another <a href="lang_select">SELECT</a> in place of a table name.
</p>

<p>If the "TEMP" or "TEMPORARY" keyword occurs in between "CREATE"
and "VIEW" then the view that is created is only visible to the
<a href="https://www.sqlite.org/c3ref/sqlite3.html" target="_blank">database connection</a> that created it and is automatically deleted when
the database connection is closed.</p>

<p> If a <span class='yyterm'>schema-name</span> is specified, then the view 
is created in the specified database.
It is an error to specify both a <span class='yyterm'>schema-name</span>
and the TEMP keyword on a VIEW, unless the <span class='yyterm'>schema-name</span> 
is "temp".
If no schema name is specified, and the TEMP keyword is not present,
the VIEW is created in the main database.</p>

<p>You cannot <a href="lang_delete">DELETE</a>, <a href="lang_insert">INSERT</a>, or <a href="lang_update">UPDATE</a> a view. Views are read-only 
in SQLite. However, in many cases you can use an
<a href="lang_createtrigger#instead_of_trigger">INSTEAD OF trigger</a> on the view to accomplish 
the same thing. Views are removed 
with the <a href="lang_dropview">DROP VIEW</a> command.</p>

<p>If a <span class='yyterm'>column-name</span> list follows 
the <span class='yyterm'>view-name</span>, then that list determines
the names of the columns for the view. If the <span class='yyterm'>column-name</span>
list is omitted, then the names of the columns in the view are derived
from the names of the result-set columns in the <a href="https://www.sqlite.org/syntax/select-stmt.html" target="_blank">select-stmt</a>.
The use of <span class='yyterm'>column-name</span> list is recommended. Or, if
<span class='yyterm'>column-name</span> list is omitted, then the result
columns in the <a href="lang_select">SELECT</a> statement that defines the view should have
well-defined names using the 
"<a href="https://www.sqlite.org/syntax/result-column.html" target="_blank">AS column-alias</a>" syntax.
SQLite allows you to create views that depend on automatically 
generated column names, but you should avoid using them since the 
rules used to generate column names are not a defined part of the
interface and might change in future releases of SQLite.

</p>


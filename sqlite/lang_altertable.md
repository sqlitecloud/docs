---
title: ALTER TABLE
description: ALTER TABLE
statement: ALTER TABLE Album ADD COLUMN year INTEGER;
---

!['script.js'](/public/docs/sqlite/script.js)

<h2 id="overview"><span>1. </span>Overview</h2>

!['altertable.svg'](/public/docs/sqlite/_svg/altertable.svg)

<p>SQLite supports a limited subset of ALTER TABLE.
The ALTER TABLE command in SQLite allows these alterations of an existing table:
<ul>
<li>a table can be renamed</li>
<li>a column can be renamed</li>
<li>a column can be added to it</li>
<li>a column can be dropped from it</li>
</ul>

<a name="altertabrename"></a>

</p><h2 id="alter_table_rename"><span>2. </span>ALTER TABLE RENAME</h2>

<p> The RENAME TO syntax changes the name of <span class='yyterm'>table-name</span>
to <span class='yyterm'>new-table-name</span>.
This command 
cannot be used to move a table between attached databases, only to rename 
a table within the same database.
If the table being renamed has triggers or indices, then these remain
attached to the table after it has been renamed.

<a name="altertabmvcol"></a>

<h2 id="alter_table_rename_column"><span>3. </span>ALTER TABLE RENAME COLUMN</h2>

<p> The RENAME COLUMN TO syntax changes the
<span class='yyterm'>column-name</span> of table <span class='yyterm'>table-name</span>
into <span class='yyterm'>new-column-name</span>. The column name is changed both
within the table definition itself and also within all indexes, triggers,
and views that reference the column. If the column name change would
result in a semantic ambiguity in a trigger or view, then the RENAME
COLUMN fails with an error and no changes are applied.

<a name="altertabaddcol"></a>

</p><h2 id="alter_table_add_column"><span>4. </span>ALTER TABLE ADD COLUMN</h2>

<p> The ADD COLUMN syntax
is used to add a new column to an existing table.
The new column is always appended to the end of the list of existing columns.
The <a href="https://www.sqlite.org/syntax/column-def.html" target="_blank">column-def</a> rule defines the characteristics of the new column.
The new column may take any of the forms permissible in a <a href="lang_createtable">CREATE TABLE</a>
statement, with the following restrictions:
</p><ul>
<li>The column may not have a PRIMARY KEY or UNIQUE constraint.</li>
<li>The column may not have a default value of CURRENT_TIME, CURRENT_DATE, 
    CURRENT_TIMESTAMP, or an expression in parentheses.</li>
<li>If a NOT NULL constraint is specified, then the column must have a
    default value other than NULL.
</li><li>If <a href="https://www.sqlite.org/foreignkeys.html" target="_blank">foreign key constraints</a> are <a href="https://www.sqlite.org/pragma.html#pragma_foreign_keys" target="_blank">enabled</a> and
    a column with a <a href="https://www.sqlite.org/syntax/foreign-key-clause.html" target="_blank">REFERENCES clause</a>
    is added, the column must have a default value of NULL.
</li><li>The column may not be <a href="https://www.sqlite.org/gencol.html" target="_blank">GENERATED ALWAYS ... STORED</a>,
though VIRTUAL columns are allowed.
</li></ul>

<p>When adding a column with a <a href="lang_createtable#ckconst">CHECK constraint</a>, or a NOT NULL constraint
on a <a href="https://www.sqlite.org/gencol.html" target="_blank">generated column</a>, the added constraints are tested against all 
preexisting rows in the table and the ADD COLUMN fails
if any constraint fails.</p>

<p>The ALTER TABLE command works by modifying the SQL text of the schema
stored in the <a href="https://www.sqlite.org/schematab.html" target="_blank">sqlite_schema table</a>.
No changes are made to table content for renames or column addition without
constraints.
Because of this,
the execution time of such ALTER TABLE commands is independent of
the amount of data in the table and such commands will 
run as quickly on a table with 10 million rows as on a table with 1 row.
When adding new columns that have CHECK constraints, or adding generated
columns with NOT NULL constraints, or when deleting columns, then all
existing data in the table must be either read (to test new constraints
against existing rows) or written (to remove deleted columns). In those
cases, the ALTER TABLE command takes time that is proportional to the
amount of content in the table being altered.
</p>

<a name="altertabdropcol"></a>

<h2 id="alter_table_drop_column"><span>5. </span>ALTER TABLE DROP COLUMN</h2>

<p> The DROP COLUMN syntax
is used to remove an existing column from a table.
The DROP COLUMN command removes the named column from the table,
and rewrites its content to purge the data associated
with that column.
The DROP COLUMN command only works if the column is not referenced
by any other parts of the schema and is not a PRIMARY KEY and
does not have a UNIQUE constraint.
Possible reasons why the DROP COLUMN command can fail include:
</p><ul>
<li>The column is a PRIMARY KEY or part of one.
</li><li>The column has a UNIQUE constraint.
</li><li>The column is indexed.
</li><li>The column is named in the WHERE clause of a <a href="https://www.sqlite.org/partialindex.html" target="_blank">partial index</a>.
</li><li>The column is named in a table or column <a href="lang_createtable#ckconst">CHECK constraint</a>
not associated with the column being dropped.
</li><li>The column is used in a <a href="https://www.sqlite.org/foreignkeys.html" target="_blank">foreign key constraint</a>.
</li><li>The column is used in the expression of a <a href="https://www.sqlite.org/gencol.html" target="_blank">generated column</a>.
</li><li>The column appears in a trigger or view.
</li></ul>

<h2 id="how_it_works"><span>5.1. </span>How It Works</h2>

<p>SQLite stores the schema as plain text in the <a href="https://www.sqlite.org/schematab.html" target="_blank">sqlite_schema table</a>.
The DROP COLUMN command (and all of the other variations of ALTER TABLE
as well) modify that text and then attempt to reparse the entire schema.
The command is only successful if the schema is still valid after the
text has been modified. In the case of the DROP COLUMN command, the
only text modified is that the column definition is removed from the
CREATE TABLE statement. The DROP COLUMN command will fail if there
are any traces of the column in other parts of the schema that will
prevent the schema from parsing after the CREATE TABLE statement has
been modified.

</p><h2 id="disable_error_checking_using_pragma_writable_schema_on"><span>6. </span>Disable Error Checking Using PRAGMA writable_schema=ON</h2>

<p>ALTER TABLE will normally fail and make no changes if it encounters
any entries in the <a href="https://www.sqlite.org/schematab.html" target="_blank">sqlite_schema table</a> that do not parse. For
example, if there is a malformed VIEW or TRIGGER associated with
table named "tbl1", then an attempt to rename "tbl1" to "tbl1neo" will
fail because the associated views and triggers could not be parsed.

</p><p>This error checking
can be disabled by setting "<a href="https://www.sqlite.org/pragma.html#pragma_writable_schema" target="_blank">PRAGMA writable_schema=ON;</a>". When
the schema is writable, ALTER TABLE silently ignores any rows of the
sqlite_schema table that do not parse.

<a name="otheralter"></a>

</p><h2 id="making_other_kinds_of_table_schema_changes"><span>7. </span>Making Other Kinds Of Table Schema Changes</h2>

<p> The only schema altering commands directly supported by SQLite are the
"<a href="lang_altertable#altertabrename">rename table</a>", "<a href="lang_altertable#altertabmvcol">rename column</a>", "<a href="lang_altertable#altertabaddcol">add column</a>", "<a href="lang_altertable#altertabdropcol">drop column</a>"
commands shown above. However, applications
can make other arbitrary changes to the format of a table using a simple
sequence of operations.
The steps to make arbitrary changes to the schema design of some table X
are as follows:

</p><ol>
<li><p>
If foreign key constraints are enabled, disable them using <a href="https://www.sqlite.org/pragma.html#pragma_foreign_keys" target="_blank">PRAGMA foreign_keys=OFF</a>.

</p></li><li><p>
Start a transaction.

</p></li><li><p>
Remember the format of all indexes, triggers, and views associated with table X.
This information will be needed in step 8 below. One way to do this is
to run a query like the following:
SELECT type, sql FROM sqlite_schema WHERE tbl_name='X'.

</p></li><li><p>
Use <a href="lang_createtable">CREATE TABLE</a> to construct a new table "new_X" that is in the desired
revised format of table X. Make sure that the name "new_X" does not collide
with any existing table name, of course.

</p></li><li><p>
Transfer content from X into new_X using a statement
like: INSERT INTO new_X SELECT ... FROM X.

</p></li><li><p>
Drop the old table X:<a href="lang_droptable">DROP TABLE X</a>.

</p></li><li><p>
Change the name of new_X to X using: ALTER TABLE new_X RENAME TO X.

</p></li><li><p>
Use <a href="lang_createindex">CREATE INDEX</a>, <a href="lang_createtrigger">CREATE TRIGGER</a>, and <a href="lang_createview">CREATE VIEW</a>
to reconstruct indexes, triggers, and views
associated with table X. Perhaps use the old format of the triggers,
indexes, and views saved from step 3 above as a guide, making changes
as appropriate for the alteration.

</p></li><li><p>If any views refer to table X in a way that is affected by the
schema change, then drop those views using <a href="lang_dropview">DROP VIEW</a> and recreate them
with whatever changes are necessary to accommodate the schema change
using <a href="lang_createview">CREATE VIEW</a>.

</p></li><li><p>
If foreign key constraints were originally enabled
then run <a href="https://www.sqlite.org/pragma.html#pragma_foreign_key_check" target="_blank">PRAGMA foreign_key_check</a> to verify that the schema
change did not break any foreign key constraints.


</p></li><li><p>
Commit the transaction started in step 2.

</p></li><li><p>
If foreign keys constraints were originally enabled, reenable them now.
</p></li></ol>

<a name="caution"></a>

<p>
<b>Caution:</b>
Take care to follow the procedure above precisely. The boxes below
summarize two procedures for modifying a table definition. At first
glance, they both appear to accomplish the same thing. However, the
procedure on the right does not always work. In the procedure on the right, the initial rename of the
table to a temporary name might corrupt references to that table in
triggers, views, and foreign key constraints. The safe procedure on
the left constructs the revised table definition using a new temporary
name, then renames the table into its final name, which does not break
links.

</p><center>
<table border="1" cellpadding="10" cellspacing="0">
<tr>
<td valign="top">
<ol>
<li>Create new table
</li><li>Copy data
</li><li>Drop old table
</li><li>Rename new into old
</li></ol>
</td><td valign="top">
<ol>
<li>Rename old table
</li><li>Create new table
</li><li>Copy data
</li><li>Drop old table
</li></ol>
</td></tr><tr>
<th>&uarr;<br>Correct
</th><th>&uarr;<br>Incorrect
</th></tr></table>
</center>

<p>The 12-step <a href="lang_altertable#otheralter">generalized ALTER TABLE procedure</a>
above will work even if the
schema change causes the information stored in the table to change.
So the full 12-step procedure above is appropriate for dropping a column,
changing the order of columns, adding or removing a UNIQUE constraint
or PRIMARY KEY, adding CHECK or FOREIGN KEY or NOT NULL constraints,
or changing the datatype for a column, for example. However, a simpler
and faster procedure can optionally be used for
some changes that do no affect the on-disk content in any way.
The following simpler procedure is appropriate for removing
CHECK or FOREIGN KEY or NOT NULL constraints,
or adding, removing, or changing default values on
a column.

</p><ol>
<li><p> Start a transaction.

</p></li><li><p> Run <a href="https://www.sqlite.org/pragma.html#pragma_schema_version" target="_blank">PRAGMA schema_version</a> to determine the current schema
version number. This number will be needed for step 6 below.

</p></li><li><p> Activate schema editing using 
<a href="https://www.sqlite.org/pragma.html#pragma_writable_schema" target="_blank">PRAGMA writable_schema=ON</a>.

</p></li><li><p> Run an <a href="lang_update">UPDATE</a> statement to change the definition of table X
in the <a href="https://www.sqlite.org/schematab.html" target="_blank">sqlite_schema table</a>: 
UPDATE sqlite_schema SET sql=... WHERE type='table' AND name='X';
</p><p><em>Caution:</em>Making a change to the sqlite_schema table like this will
render the database corrupt and unreadable if the change contains
a syntax error. It is suggested that careful testing of the UPDATE
statement be done on a separate blank database prior to using it on
a database containing important data.

</p></li><li><p> If the change to table X also affects other tables or indexes or
triggers are views within schema, then run <a href="lang_update">UPDATE</a> statements to modify
those other tables indexes and views too. For example, if the name of
a column changes, all FOREIGN KEY constraints, triggers, indexes, and
views that refer to that column must be modified.
</p><p><em>Caution:</em>Once again, making changes to the sqlite_schema 
table like this will render the database corrupt and unreadable if the 
change contains an error. Carefully test this entire procedure
on a separate test database prior to using it on
a database containing important data and/or make backup copies of
important databases prior to running this procedure.

</p></li><li><p> Increment the schema version number using
<a href="https://www.sqlite.org/pragma.html#pragma_schema_version" target="_blank">PRAGMA schema_version=X</a> where X is one
more than the old schema version number found in step 2 above.

</p></li><li><p> Disable schema editing using 
<a href="https://www.sqlite.org/pragma.html#pragma_writable_schema" target="_blank">PRAGMA writable_schema=OFF</a>.

</p></li><li><p> (Optional) Run <a href="https://www.sqlite.org/pragma.html#pragma_integrity_check" target="_blank">PRAGMA integrity_check</a> to verify that the
schema changes did not damage the database.

</p></li><li><p> Commit the transaction started on step 1 above.
</p></li></ol>

<p>If some future version of SQLite adds new ALTER TABLE capabilities, 
those capabilities will very likely use one of the two procedures
outlined above.

<a name="altertableishard"></a>

</p><h2 id="why_alter_table_is_such_a_problem_for_sqlite"><span>8. </span>Why ALTER TABLE is such a problem for SQLite</h2>

<p>Most SQL database engines store the schema already parsed into
various system tables. On those database engines, ALTER TABLE merely 
has to make modifications to the corresponding system tables.

</p><p>SQLite is different in that it stores the schema
in the <a href="https://www.sqlite.org/schematab.html" target="_blank">sqlite_schema</a> table as the original text of the CREATE
statements that define the schema. Hence ALTER TABLE needs
to revise the text of the CREATE statement. Doing
so can be tricky for certain "creative" schema designs.

</p><p>The SQLite approach of storing the schema as text has advantages
for an embedded relational database. For one, it means that the
schema takes up less space in the database file. This is important
since a common SQLite usage pattern is to have many small,
separate database files instead of putting everything in one
big global database file, which is the usual approach for client/server
database engines.
Since the schema is duplicated in each separate database file, it is
important to keep the schema representation compact.

</p><p>Storing the schema as text rather than as parsed tables also
give flexibility to the implementation. Since the internal parse
of the schema is regenerated each time the database is opened, the
internal representation of the schema can change from one release
to the next. This is important, as sometimes new features require
enhancements to the internal schema representation. Changing the
internal schema representation would be much more difficult if the
schema representation was exposed in the database file. So, in other
words, storing the schema as text helps maintain backwards 
compatibility, and helps ensure that older database files can be
read and written by newer versions of SQLite.

</p><p>Storing the schema as text also makes the 
<a href="https://www.sqlite.org/fileformat2.html" target="_blank">SQLite database file format</a> easier to define, document, and 
understand. This helps make SQLite database files a
<a href="https://www.sqlite.org/locrsf.html" target="_blank">recommended storage format</a> for long-term archiving of data.

</p><p>The downside of storing schema a text is that it can make
the schema tricky to modify. And for that reason, the ALTER TABLE
support in SQLite has traditionally lagged behind other SQL
database engines that store their schemas as parsed system tables
that are easier to modify.




</p>


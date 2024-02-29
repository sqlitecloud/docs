---
title: INSERT
description: INSERT
statement: INSERT INTO Artist (name) VALUES ('Rod Stewart');
---
!['script.js'](/public/docs/sqlite/script.js)





<h2 id="overview"><span>1. </span>Overview</h2>

!['insert.svg'](/public/docs/sqlite/_svg/insert.svg)

<p>The INSERT statement comes in three basic forms. 
</p><ol>
<li><p><b>INSERT INTO </b><i>table</i><b> VALUES(...);</b>
</p><p>The first form (with the "VALUES" keyword) creates one or more
new rows in
an existing table. If the <span class='yyterm'>column-name</span> list after
<span class='yyterm'>table-name</span> is omitted then the number
of values inserted into each row
must be the same as the number of columns in the table. In this case
the result of evaluating the left-most expression from each term of
the VALUES list is inserted into the left-most column of each new row,
and so forth for each subsequent expression. If a <span class='yyterm'>column-name</span>
list is specified, then the number of values in each term of the
VALUE list must match the number of
specified columns. Each of the named columns of the new row is populated
with the results of evaluating the corresponding VALUES expression. Table
columns that do not appear in the column list are populated with the 
<a href="lang_createtable#dfltval">default column value</a> (specified as part of the <a href="lang_createtable">CREATE TABLE</a> statement), or
with NULL if no <a href="lang_createtable#dfltval">default value</a> is specified.

</p></li><li><p><b>INSERT INTO </b><i>table</i><b> SELECT ...;</b>
</p><p>The second form of the INSERT statement contains a <a href="lang_select">SELECT</a> statement
instead of a VALUES clause. A new entry is inserted into the table for each
row of data returned by executing the SELECT statement. If a column-list is
specified, the number of columns in the result of the SELECT must be the same
as the number of items in the column-list. Otherwise, if no column-list is
specified, the number of columns in the result of the SELECT must be the same
as the number of columns in the table. Any SELECT statement, including
<a href="lang_select#compound">compound SELECTs</a> and SELECT statements with <a href="lang_select#orderby">ORDER BY</a> and/or <a href="lang_select#limitoffset">LIMIT</a> clauses, 
may be used in an INSERT statement of this form.

</p><p>To avoid a parsing ambiguity, the SELECT statement should always
contain a WHERE clause, even if that clause is simply "WHERE true",
if the <a href="https://www.sqlite.org/syntax/upsert-clause.html" target="_blank">upsert-clause</a> is present. Without the WHERE clause, the
parser does not know if the token "ON" is part of a join constraint
on the SELECT, or the beginning of the <a href="https://www.sqlite.org/syntax/upsert-clause.html" target="_blank">upsert-clause</a>.

</p></li><li><p><b>INSERT INTO </b><i>table</i><b> DEFAULT VALUES;</b>
</p><p>The third form of an INSERT statement is with DEFAULT VALUES.
The INSERT ... DEFAULT VALUES statement inserts a single new row into the
named table. Each column of the new row is populated with its 
<a href="lang_createtable#dfltval">default value</a>, or with a NULL if no default value is specified 
as part of the column definition in the <a href="lang_createtable">CREATE TABLE</a> statement.
The <a href="https://www.sqlite.org/syntax/upsert-clause.html" target="_blank">upsert-clause</a> is not supported after DEFAULT VALUES.

</p></li></ol>

<p>
The initial "INSERT" keyword can be replaced by
"REPLACE" or "INSERT OR <i>action</i>" to specify an alternative
constraint <a href="lang_conflict">conflict resolution algorithm</a> to use during 
that one INSERT command.
For compatibility with MySQL, the parser allows the use of the
single keyword <a href="lang_replace">REPLACE</a> as an 
alias for "INSERT OR REPLACE".

</p><p>The optional "<i>schema-name</i><b>.</b>" prefix on the 
<span class='yyterm'>table-name</span>
is supported for top-level INSERT statements only. The table name must be
unqualified for INSERT statements that occur within <a href="lang_createtrigger">CREATE TRIGGER</a> statements.
Similarly, the "DEFAULT VALUES" form of the INSERT statement is supported for
top-level INSERT statements only and not for INSERT statements within
triggers.
</p><p>

</p><p>The optional "AS <span class='yyterm'>alias</span>" phrase provides an alternative
name for the table into which content is being inserted. The alias name
can be used within WHERE and SET clauses of the <a href="lang_upsert">UPSERT</a>. If there is no
<a href="https://www.sqlite.org/syntax/upsert-clause.html" target="_blank">upsert-clause</a>, then the <span class='yyterm'>alias</span> is pointless, but also
harmless.

</p><p>See the separate <a href="lang_upsert">UPSERT</a> documentation for the additional trailing
syntax that can cause an INSERT to behave as an UPDATE if the INSERT would
otherwise violate a uniqueness constraint. The <a href="lang_upsert">upsert clause</a> is not
allowed on an "INSERT ... DEFAULT VALUES".
</p>


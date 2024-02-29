---
title: DELETE
description: DELETE
statement: DELETE FROM Artist WHERE name LIKE 'Z%';
---
!['script.js'](/public/docs/sqlite/script.js)





<h2 id="overview"><span>1. </span>Overview</h2>

!['delete.svg'](/public/docs/sqlite/_svg/delete.svg)


<p>The DELETE command removes records from the table identified by the
 <a href="https://www.sqlite.org/syntax/qualified-table-name.html" target="_blank">qualified-table-name</a>.

</p><p>If the WHERE clause is not present, all records in the table are deleted.
 If a WHERE clause is supplied, then only those rows for which the
 WHERE clause <a href="lang_expr#booleanexpr">boolean expression</a> is true are deleted.
 Rows for which the expression is false or NULL are retained.

</p><p>

</p><h2 id="restrictions_on_delete_statements_within_create_trigger"><span>2. </span>Restrictions on DELETE Statements Within CREATE TRIGGER</h2>

<p>The following restrictions apply to DELETE statements that occur within the
 body of a <a href="lang_createtrigger">CREATE TRIGGER</a> statement:

</p><ul>
  <li><p>The <span class='yyterm'>table-name</span> specified as part of a 
DELETE statement within
a trigger body must be unqualified. In other words, the
<i>schema-name</i><b>.</b> prefix on the table name is not allowed 
within triggers. If the table to which the trigger is attached is
not in the temp database, then DELETE statements within the trigger
body must operate on tables within the same database as it. If the table
to which the trigger is attached is in the TEMP database, then the
unqualified name of the table being deleted is resolved in the same way as
it is for a top-level statement (by searching first the TEMP database, then
the main database, then any other databases in the order they were
attached).

</p></li><li><p>The INDEXED BY and NOT INDEXED clauses are not allowed on DELETE
statements within triggers.</p>

  </li><li><p>The LIMIT and ORDER BY clauses (described below) are unsupported for
DELETE statements within triggers.</p>

  </li><li><p>The RETURNING clause is not supported for triggers.
</p></li></ul>

<h2 id="optional_limit_and_order_by_clauses"><span>3. </span>Optional LIMIT and ORDER BY clauses</h2>

<p>If SQLite is compiled with the <a href="https://www.sqlite.org/compile.html#enable_update_delete_limit" target="_blank">SQLITE_ENABLE_UPDATE_DELETE_LIMIT</a>
compile-time option, then the syntax of the DELETE statement is
extended by the addition of optional ORDER BY and LIMIT clauses:</p>

!['delete2.svg'](/public/docs/sqlite/_svg/delete2.svg)


<p>If a DELETE statement has a LIMIT clause, the maximum number of rows that
will be deleted is found by evaluating the accompanying expression and casting
it to an integer value. If the result of the evaluating the LIMIT clause
cannot be losslessly converted to an integer value, it is an error. A 
negative LIMIT value is interpreted as "no limit". If the DELETE statement 
also has an OFFSET clause, then it is similarly evaluated and cast to an
integer value. Again, it is an error if the value cannot be losslessly
converted to an integer. If there is no OFFSET clause, or the calculated
integer value is negative, the effective OFFSET value is zero.

</p><p>If the DELETE statement has an ORDER BY clause, then all rows that would 
be deleted in the absence of the LIMIT clause are sorted according to the 
ORDER BY. The first <i>M</i> rows, where <i>M</i> is the value found by
evaluating the OFFSET clause expression, are skipped, and the following 
<i>N</i>, where <i>N</i> is the value of the LIMIT expression, are deleted.
If there are less than <i>N</i> rows remaining after taking the OFFSET clause
into account, or if the LIMIT clause evaluated to a negative value, then all
remaining rows are deleted.

</p><p>If the DELETE statement has no ORDER BY clause, then all rows that
would be deleted in the absence of the LIMIT clause are assembled in an
arbitrary order before applying the LIMIT and OFFSET clauses to determine 
the subset that are actually deleted.

</p><p>The ORDER BY clause on a DELETE statement is used only to determine which
rows fall within the LIMIT. The order in which rows are deleted is arbitrary
and is not influenced by the ORDER BY clause.
This means that if there is a <a href="lang_returning">RETURNING clause</a>, the rows returned by
the statement probably will not be in the order specified by the
ORDER BY clause.

<a name="truncateopt"></a>

</p><h2 id="the_truncate_optimization"><span>4. </span>The Truncate Optimization</h2>

<p>When the WHERE clause and RETURNING clause are bothomitted
from a DELETE statement and the table being deleted has no triggers,
SQLite uses an optimization to erase the entire table content
without having to visit each row of the table individually.
This "truncate" optimization makes the delete run much faster.
Prior to SQLite <a href="https://www.sqlite.org/releaselog/3_6_5.html" target="_blank">version 3.6.5</a> (2008-11-12), the truncate optimization
also meant that the <a href="https://www.sqlite.org/c3ref/changes.html" target="_blank">sqlite3_changes()</a> and
<a href="https://www.sqlite.org/c3ref/total_changes.html" target="_blank">sqlite3_total_changes()</a> interfaces
and the <a href="https://www.sqlite.org/pragma.html#pragma_count_changes" target="_blank">count_changes pragma</a>
will not actually return the number of deleted rows. 
That problem has been fixed as of <a href="https://www.sqlite.org/releaselog/3_6_5.html" target="_blank">version 3.6.5</a> (2008-11-12).

</p><p>The truncate optimization can be permanently disabled for all queries
by recompiling
SQLite with the <a href="https://www.sqlite.org/compile.html#omit_truncate_optimization" target="_blank">SQLITE_OMIT_TRUNCATE_OPTIMIZATION</a> compile-time switch.</p>

<p>The truncate optimization can also be disabled at runtime using
the <a href="https://www.sqlite.org/c3ref/set_authorizer.html" target="_blank">sqlite3_set_authorizer()</a> interface. If an authorizer callback
returns <a href="https://www.sqlite.org/c3ref/c_deny.html" target="_blank">SQLITE_IGNORE</a> for an <a href="https://www.sqlite.org/c3ref/c_alter_table.html" target="_blank">SQLITE_DELETE</a> action code, then
the DELETE operation will proceed but the truncate optimization will
be bypassed and rows will be deleted one by one.</p>



---
title: RETURNING
description: RETURNING
statement: INSERT INTO Artist (name) VALUES ('Lady Gaga') RETURNING Name, ArtistId;
---
!['script.js'](/public/docs/sqlite/script.js)





<h2 id="overview"><span>1. </span>Overview</h2>

!['returning.svg'](/public/docs/sqlite/_svg/returning.svg)

<p>
The RETURNING clause is not a statement itself, but a clause that can
optionally appear near the end of top-level
<a href="lang_delete">DELETE</a>, <a href="lang_insert">INSERT</a>, and <a href="lang_update">UPDATE</a> statements.
The effect of the RETURNING clause is to cause the statement to return
one result row for each database row that is deleted, inserted, or updated.
 RETURNING is not standard SQL. It is an extension.
SQLite's syntax for RETURNING is modelled after 
<a href="https://www.postgresql.org" target="_blank">PostgreSQL</a>.

</p>

<h2 id="typical_use"><span>1.1. </span>Typical Use</h2>

<p>
The RETURNING clause is designed to provide the application with the
values of columns that are filled in automatically by SQLite. For
example:

</p><div class="codeblock"><pre>CREATE TABLE t0(
  a INTEGER PRIMARY KEY,
  b DATE DEFAULT CURRENT_TIMESTAMP,
  c INTEGER
);
INSERT INTO t0(c) VALUES(random()) RETURNING *;
</pre></div>

<p>
In the INSERT statement above, SQLite computes the values for all
three columns. The RETURNING clause causes SQLite to report the chosen
values back to the application. This saves the application from having
to issue a separate query to figure out exactly what values were inserted.

</p><h2 id="details"><span>2. </span>Details</h2>

<p>
The RETURNING clause is followed by a comma-separated list of
expressions. These expressions are similar to the expressions following
the SELECT keyword in a <a href="lang_select">SELECT statement</a> in that they
define the values of the columns in the result set. Each expression
defines the value for a single column. Each expression may be
optionally followed by an AS clause that determines the name of
the result column. The special "*" expression expands into a list
of all <a href="https://www.sqlite.org/vtab.html#hiddencol" target="_blank">non-hidden</a> columns of the table being deleted,
inserted, or updated.

</p><p>
For INSERT and UPDATE statements, references to columns in the table
being modified refer to the value of that column <i>after</i> the change
has been applied. For DELETE statements, references to columns mean
the value <i>before</i> the delete occurs.

</p><p>
The RETURNING clause only returns rows that are directly modified
by the DELETE, INSERT, or UPDATE statement. The RETURNING clause
does not report any additional database changes
caused by <a href="https://www.sqlite.org/foreignkeys.html" target="_blank">foreign key constraints</a> or <a href="lang_createtrigger">triggers</a>.

</p><p>
A RETURNING clause for an <a href="lang_upsert">UPSERT</a> reports both inserted and
updated rows.

</p><h2 id="processing_order"><span>2.1. </span>Processing Order</h2>

<p>
When a DELETE, INSERT, or UPDATE statement with a RETURNING clause
is run, all of the database changes occur during the first invocation
of <a href="https://www.sqlite.org/c3ref/step.html" target="_blank">sqlite3_step()</a>. The RETURNING clause output is accumulated in
memory. The first sqlite3_step() call returns one row of RETURNING
output and subsequent rows of RETURNING output are returned by subsequent
calls to sqlite3_step().
To put this another way, all RETURNING clause output is embargoed
until after all database modification actions are completed.

</p><p>
This means that if a statement has a RETURNING clause that generates
a large amount of output, either many rows or large
string or BLOB values, then the statement might use a lot of 
temporary memory to hold those values while it is running.

</p><p>
The first prototype of the RETURNING clause returned
values as they were generated. That approach used less memory, but
it had other problems:

</p><ol>
<li><p>
If the calls sqlite3_step() for two or more DML statements
where interleaved and if one of the
statements hit a constraint failure and aborted, reverting its
changes, then that could disrupt the operation of the other
DML statement. This could not corrupt the database file, but
it could yield surprising and difficult-to-explain results in
the database.

</p></li><li><p>
If an application failed to call sqlite3_step() repeatedly until
it received SQLITE_DONE, then some of the database changes might
never occur.

</p></li><li><p>
The order of operations was different from client/server database
engines like PostgreSQL, which might cause portability issues
for some applications.
</p></li></ol>

<p>
For these reasons, the current implementation was modified so that
all database changes happen before any RETURNING output is emitted.

</p><p>
While SQLite does guarantee that all database changes will occur
before any RETURNING output is emitted, it does <i>not</i> guarantee
that the order of individual RETURNING rows will match the order in
which those rows were changed in the database. The output order
for the RETURNING rows is arbitrary and is not necessarily related
to the order in which the rows were processed internally.

</p><h2 id="acid_changes"><span>2.2. </span>ACID Changes</h2>

<p>
When the previous "<i>Processing Order</i>" section says that
"database changes occur during the first invocation of sqlite3_step()",
that means that the changes are stored in the private page cache of
the database connection that is running the statement. It does
<i>not</i> mean that the changes are actually committed. The commit
does not occur until the statement finishes, and maybe not even then
if the statement is part of a larger transaction. Changes to the
database are still atomic, consistent, isolated, and durable (ACID).
When the previous section says "changes occur",
this means that internal data structure are adjusted pending a transaction
commit. Some of those changes may or may not spill into the
<a href="https://www.sqlite.org/wal.html" target="_blank">write-ahead log</a>, depending on how much pressure there is on the
page cache. If the page cache is not under memory pressure, then
probably nothing will be written to disk until after the transaction
completes, which is after sqlite3_step() returns SQLITE_DONE.

</p><p>
In other words, when the previous section says "database changes
occur", that means that the changes occur in the memory of the
specific database connection that is running the statement, <i>not</i> that
the changes are written to disk.

</p><h2 id="limitations_and_caveats"><span>3. </span>Limitations And Caveats</h2>

<ol>
<li><p>
The RETURNING clause is not available on DELETE and UPDATE statements
against <a href="https://www.sqlite.org/vtab.html" target="_blank">virtual tables</a>.
This limitation might be removed in future versions of SQLite.

</p></li><li><p>
The RETURNING clause is only available in top-level DELETE, INSERT,
and UPDATE statements. The RETURNING clause cannot be used by
statements within triggers.

</p></li><li><p>
Even though a DML statement with a RETURNING clause returns table content,
it cannot be used as a subquery. The RETURNING clause can only return
data to the application. It is not currently possible to divert the
RETURNING output into another table or query. PostgreSQL has the ability
to use a DML statement with a RETURNING clause like a view in a 
<a href="lang_with">common table expressions</a>. SQLite does not currently have that
ability, though that is something that might be added in a future release.

</p></li><li><p>
The rows emitted by the RETURNING clause appear in an arbitrary order.
That order might change depending on the database schema, upon the specific
release of SQLite used, or even from one execution of the same statement
to the next.
There is no way to cause the output rows to appear in a particular order.
Even if SQLite is compiled with the <a href="https://www.sqlite.org/compile.html#enable_update_delete_limit" target="_blank">SQLITE_ENABLE_UPDATE_DELETE_LIMIT</a>
option such that ORDER BY clauses are allowed on DELETE and UPDATE
statements, those ORDER BY clauses do not constrain the output order
of RETURNING.

</p></li><li><p>
The values emitted by the RETURNING clause are the values as seen
by the top-level DELETE, INSERT, or UPDATE statement
and do not reflect any subsequent value changes made by <a href="lang_createtrigger">triggers</a>.
Thus, if the database includes AFTER triggers that modifies some
of the values of each row inserted or updated, the RETURNING clause
emits the original values that are computed before those triggers run.

</p></li><li><p>
The RETURNING clause may not contain top-level <a href="lang_aggfunc">aggregate functions</a> or
<a href="https://www.sqlite.org/windowfunctions.html" target="_blank">window functions</a>. If there are subqueries in the RETURNING clause,
those subqueries may contain aggregates and window functions, but
aggregates cannot occur at the top level.

</p></li><li><p>
The RETURNING clause may only reference the table being modified.
In an <a href="lang_update#upfrom">UPDATE FROM</a> statement, the auxiliary tables named in the FROM
clause may not participate in the RETURNING clause.

</p></li></ol>



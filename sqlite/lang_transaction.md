---
title: Transaction
description: Transaction
statement: BEGIN TRANSACTION;
---






<h2 id="transaction_control_syntax"><span>1. </span>Transaction Control Syntax</h2>

<!-- do-not-touch-svg-import: 'transaction.svg' -->


<h2 id="transactions"><span>2. </span>Transactions</h2>

<p>
No reads or writes occur except within a transaction.
Any command that accesses the database (basically, any SQL command,
except a few <a href="https://www.sqlite.org/pragma.html#syntax" target="_blank">PRAGMA</a> statements)
will automatically start a transaction if
one is not already in effect. Automatically started transactions
are committed when the last SQL statement finishes.
</p>

<p>
Transactions can be started manually using the BEGIN
command. Such transactions usually persist until the next
COMMIT or ROLLBACK command. But a transaction will also
ROLLBACK if the database is closed or if an error occurs
and the ROLLBACK conflict resolution algorithm is specified.
See the documentation on the <a href="lang_conflict">ON CONFLICT</a>
clause for additional information about the ROLLBACK
conflict resolution algorithm.
</p>

<p>
END TRANSACTION is an alias for COMMIT.
</p>

<p> Transactions created using BEGIN...COMMIT do not nest.
For nested transactions, use the <a href="lang_savepoint">SAVEPOINT</a> and <a href="lang_savepoint">RELEASE</a> commands.
The "TO SAVEPOINT <span class='yyterm'>name</span>" clause of the ROLLBACK command shown
in the syntax diagram above is only applicable to <a href="lang_savepoint">SAVEPOINT</a>
transactions. An attempt to invoke the BEGIN command within
a transaction will fail with an error, regardless of whether
the transaction was started by <a href="lang_savepoint">SAVEPOINT</a> or a prior BEGIN.
The COMMIT command and the ROLLBACK command without the TO clause
work the same on <a href="lang_savepoint">SAVEPOINT</a> transactions as they do with transactions
started by BEGIN.</p>

<h2 id="read_transactions_versus_write_transactions"><span>2.1. </span>Read transactions versus write transactions</h2>

<p>SQLite supports multiple simultaneous read transactions
coming from separate database connections, possibly in separate
threads or processes, but only one simultaneous write transaction.
</p><p>

</p><p>A read transaction is used for reading only. A write transaction
allows both reading and writing. A read transaction is started
by a SELECT statement, and a write transaction is started by
statements like CREATE, DELETE, DROP, INSERT, or UPDATE (collectively
"write statements"). If a write statement occurs while
a read transaction is active, then the read transaction is upgraded
to a write transaction if possible. If some other database connection
has already modified the database or is already in the process of
modifying the database, then upgrading to a write transaction is
not possible and the write statement will fail with <a href="https://www.sqlite.org/rescode.html#busy" target="_blank">SQLITE_BUSY</a>.
</p>

<p>
While a read transaction is active, any changes to the database that
are implemented by separate database connections will not be seen
by the database connection that started the read transaction. If database
connection X is holding a read transaction, it is possible that some
other database connection Y might change the content of the database
while X's transaction is still open, however X will not be able to see
those changes until after the transaction ends. While its read
transaction is active, X will continue to see an historic snapshot of
the database prior to the changes implemented by Y.
</p>


<a name="immediate"></a>

<h2 id="deferred_immediate_and_exclusive_transactions"><span>2.2. </span>DEFERRED, IMMEDIATE, and EXCLUSIVE transactions</h2>

<p>
Transactions can be DEFERRED, IMMEDIATE, or EXCLUSIVE.
The default transaction behavior is DEFERRED.
</p>

<p>
DEFERRED means that the transaction does not actually
start until the database is first accessed. Internally,
the BEGIN DEFERRED statement merely sets a flag on the database
connection that turns off the automatic commit that would normally
occur when the last statement finishes. This causes the transaction
that is automatically started to persist until an explicit
COMMIT or ROLLBACK or until a rollback is provoked by an error
or an ON CONFLICT ROLLBACK clause. If the first statement after
BEGIN DEFERRED is a SELECT, then a read transaction is started.
Subsequent write statements will upgrade the transaction to a
write transaction if possible, or return SQLITE_BUSY. If the
first statement after BEGIN DEFERRED is a write statement, then
a write transaction is started.
</p>

<p>
IMMEDIATE causes the database connection to start a new write
immediately, without waiting for a write statement. The
BEGIN IMMEDIATE might fail with <a href="https://www.sqlite.org/rescode.html#busy" target="_blank">SQLITE_BUSY</a> if another write
transaction is already active on another database connection.
</p>

<p>
EXCLUSIVE is similar to IMMEDIATE in that a write transaction
is started immediately. EXCLUSIVE and IMMEDIATE are the same
in <a href="https://www.sqlite.org/wal.html" target="_blank">WAL mode</a>, but in other journaling modes, EXCLUSIVE prevents
other database connections from reading the database while the
transaction is underway.
</p>

<h2 id="implicit_versus_explicit_transactions"><span>2.3. </span>Implicit versus explicit transactions</h2>

<p>
An implicit transaction (a transaction that is started automatically,
not a transaction started by BEGIN) is committed automatically when
the last active statement finishes. A statement finishes when its
last cursor closes, which is guaranteed to happen when the
prepared statement is <a href="https://www.sqlite.org/c3ref/reset.html" target="_blank">reset</a> or
<a href="https://www.sqlite.org/c3ref/finalize.html" target="_blank">finalized</a>. Some statements might "finish"
for the purpose of transaction control prior to being reset or finalized,
but there is no guarantee of this. The only way to ensure that a
statement has "finished" is to invoke <a href="https://www.sqlite.org/c3ref/reset.html" target="_blank">sqlite3_reset()</a> or
<a href="https://www.sqlite.org/c3ref/finalize.html" target="_blank">sqlite3_finalize()</a> on that statement. An open <a href="https://www.sqlite.org/c3ref/blob.html" target="_blank">sqlite3_blob</a> used for
incremental BLOB I/O also counts as an unfinished statement.
The <a href="https://www.sqlite.org/c3ref/blob.html" target="_blank">sqlite3_blob</a> finishes when it is <a href="https://www.sqlite.org/c3ref/blob_close.html" target="_blank">closed</a>.
</p>

<p>
The explicit COMMIT command runs immediately, even if there are
pending <a href="lang_select">SELECT</a> statements. However, if there are pending
write operations, the COMMIT command
will fail with an error code <a href="https://www.sqlite.org/rescode.html#busy" target="_blank">SQLITE_BUSY</a>.
</p>

<p>
An attempt to execute COMMIT might also result in an <a href="https://www.sqlite.org/rescode.html#busy" target="_blank">SQLITE_BUSY</a> return code
if an another thread or process has an open read connection.
When COMMIT fails in this
way, the transaction remains active and the COMMIT can be retried later
after the reader has had a chance to clear.
</p>

<p>
In very old versions of SQLite (before version 3.7.11 - 2012-03-20)
the ROLLBACK will fail with an error code
<a href="https://www.sqlite.org/rescode.html#busy" target="_blank">SQLITE_BUSY</a> if there are any pending queries. In more recent
versions of SQLite, the ROLLBACK will proceed and pending statements
will often be aborted, causing them to return an <a href="https://www.sqlite.org/rescode.html#abort" target="_blank">SQLITE_ABORT</a> or
<a href="https://www.sqlite.org/rescode.html#abort_rollback" target="_blank">SQLITE_ABORT_ROLLBACK</a> error.
In SQLite version 3.8.8 (2015-01-16) and later,
a pending read will continue functioning
after the ROLLBACK as long as the ROLLBACK does not modify the database
schema.
</p>

<p>
If <a href="https://www.sqlite.org/pragma.html#pragma_journal_mode" target="_blank">PRAGMA journal_mode</a> is set to OFF (thus disabling the rollback journal
file) then the behavior of the ROLLBACK command is undefined.
</p>

<h2 id="response_to_errors_within_a_transaction"><span>3. </span>Response To Errors Within A Transaction</h2>

<p> If certain kinds of errors occur within a transaction, the
transaction may or may not be rolled back automatically. The
errors that can cause an automatic rollback include:</p>

<ul>
<li> <a href="https://www.sqlite.org/rescode.html#full" target="_blank">SQLITE_FULL</a>: database or disk full
</li><li> <a href="https://www.sqlite.org/rescode.html#ioerr" target="_blank">SQLITE_IOERR</a>: disk I/O error
</li><li> <a href="https://www.sqlite.org/rescode.html#busy" target="_blank">SQLITE_BUSY</a>: database in use by another process
</li><li> <a href="https://www.sqlite.org/rescode.html#nomem" target="_blank">SQLITE_NOMEM</a>: out of memory
</li></ul>

<p>
For all of these errors, SQLite attempts to undo just the one statement
it was working on and leave changes from prior statements within the
same transaction intact and continue with the transaction. However,
depending on the statement being evaluated and the point at which the
error occurs, it might be necessary for SQLite to rollback and
cancel the entire transaction. An application can tell which
course of action SQLite took by using the
<a href="https://www.sqlite.org/c3ref/get_autocommit.html" target="_blank">sqlite3_get_autocommit()</a> C-language interface.</p>

<p>It is recommended that applications respond to the errors
listed above by explicitly issuing a ROLLBACK command. If the
transaction has already been rolled back automatically
by the error response, then the ROLLBACK command will fail with an
error, but no harm is caused by this.</p>

<p>Future versions of SQLite may extend the list of errors which
might cause automatic transaction rollback. Future versions of
SQLite might change the error response. In particular, we may
choose to simplify the interface in future versions of SQLite by
causing the errors above to force an unconditional rollback.</p>

<h2>BEGIN CONCURRENT</h2>

<p>Usually, SQLite allows at most one writer to proceed concurrently. The
BEGIN CONCURRENT enhancement allows multiple writers to process write
transactions simultanously if the database is in "wal" or "wal2" mode,
although the system still serializes COMMIT commands.</p>

<p>When a write-transaction is opened with "BEGIN CONCURRENT", actually 
locking the database is deferred until a COMMIT is executed. This means
that any number of transactions started with BEGIN CONCURRENT may proceed
concurrently. The system uses optimistic page-level-locking to prevent
conflicting concurrent transactions from being committed.</p>

<p>When a BEGIN CONCURRENT transaction is committed, the system checks whether 
or not any of the database pages that the transaction has read have been
modified since the BEGIN CONCURRENT was opened. In other words - it asks 
if the transaction being committed operates on a different set of data than
all other concurrently executing transactions. If the answer is "yes, this
transaction did not read or modify any data modified by any concurrent
transaction", then the transaction is committed as normal. Otherwise, if the
transaction does conflict, it cannot be committed and an SQLITE&#95;BUSY&#95;SNAPSHOT
error is returned. At this point, all the client can do is ROLLBACK the
transaction.</p>

<p>If SQLITE&#95;BUSY&#95;SNAPSHOT is returned, messages are output via the sqlite3&#95;log
mechanism indicating the page and table or index on which the conflict
occurred. This can be useful when optimizing concurrency.</p>

<h2>Application Programming Notes</h2>
<p>In order to serialize COMMIT processing, SQLite takes a lock on the database
as part of each COMMIT command and releases it before returning. At most one
writer may hold this lock at any one time. If a writer cannot obtain the lock,
it uses SQLite's busy-handler to pause and retry for a while:</p>

<p>  <a href=https://www.sqlite.org/c3ref/busy_handler.html>
      https://www.sqlite.org/c3ref/busy_handler.html
  </a></p>

<p>If there is significant contention for the writer lock, this mechanism can be
inefficient. In this case it is better for the application to use a mutex or
some other mechanism that supports blocking to ensure that at most one writer
is attempting to COMMIT a BEGIN CONCURRENT transaction at a time. This is
usually easier if all writers are part of the same operating system process.</p>

<p>If all database clients (readers and writers) are located in the same OS
process, and if that OS is a Unix variant, then it can be more efficient to
the built-in VFS "unix-excl" instead of the default "unix". This is because it
uses more efficient locking primitives.</p>

<p>The key to maximizing concurrency using BEGIN CONCURRENT is to ensure that
there are a large number of non-conflicting transactions. In SQLite, each
table and each index is stored as a separate b-tree, each of which is
distributed over a discrete set of database pages. This means that:</p>

<ul>
<li><p>Two transactions that write to different sets of tables never 
conflict, and that</p></li>
<li><p>Two transactions that write to the same tables or indexes only 
conflict if the values of the keys (either primary keys or indexed 
rows) are fairly close together. For example, given a large 
table with the schema:</p>

<p>  <pre>     CREATE TABLE t1(a INTEGER PRIMARY KEY, b BLOB);</pre></p>

<p>writing two rows with adjacent values for "a" probably will cause a
conflict (as the two keys are stored on the same page), but writing two
rows with vastly different values for "a" will not (as the keys will likly
be stored on different pages).</p></li>
</ul>

<p>Note that, in SQLite, if values are not explicitly supplied for an INTEGER
PRIMARY KEY, as for example in:</p>

<blockquote>
<pre><code> INSERT INTO t1(b) VALUES(&lt;blob-value&gt;);
</code></pre>
</blockquote>

<p>then monotonically increasing values are assigned automatically. This is
terrible for concurrency, as it all but ensures that all new rows are 
added to the same database page. In such situations, it is better to
explicitly assign random values to INTEGER PRIMARY KEY fields.</p>

<p>This problem also comes up for non-WITHOUT ROWID tables that do not have an
explicit INTEGER PRIMARY KEY column. In these cases each table has an implicit
INTEGER PRIMARY KEY column that is assigned increasing values, leading to the
same problem as omitting to assign a value to an explicit INTEGER PRIMARY KEY
column.</p>

<p>For both explicit and implicit INTEGER PRIMARY KEYs, it is possible to have
SQLite assign values at random (instead of the monotonically increasing
values) by writing a row with a rowid equal to the largest possible signed
64-bit integer to the table. For example:</p>

<pre><code> INSERT INTO t1(a) VALUES(9223372036854775807);
</code></pre>

<p>Applications should take care not to malfunction due to the presence of such
rows.</p>

<p>The nature of some types of indexes, for example indexes on timestamp fields,
can also cause problems (as concurrent transactions may assign similar
timestamps that will be stored on the same db page to new records). In these
cases the database schema may need to be rethought to increase the concurrency
provided by page-level-locking.</p>
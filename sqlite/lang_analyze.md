---
title: ANALYZE
description: The ANALYZE command gathers statistics about tables and indices and stores the collected information in internal tables.
statement: ANALYZE;
customClass: sqlite-doc
category: reference
---

## 1. Overview

<!-- do-not-touch-svg-import: 'analyze.svg' -->

The ANALYZE command gathers statistics about tables and indices and
stores the collected information in
<a href="https://www.sqlite.org/fileformat2.html#intschema"
target="_blank">internal tables</a> of the database where the query
optimizer can access the information and use it to help make better
query planning choices. If no arguments are given, all attached
databases are analyzed. If a schema name is given as the argument, then
all tables and indices in that one database are analyzed. If the
argument is a table name, then only that table and the indices
associated with that table are analyzed. If the argument is an index
name, then only that one index is analyzed.

<span id="req"></span>

## 1.1. Recommended usage pattern

Applications with long-lived databases that use complex queries should
consider running the following commands just prior to closing each
database connection:

<div class="codeblock">

    PRAGMA analysis_limit=400;
    PRAGMA optimize;

</div>

The <a href="https://www.sqlite.org/pragma.html#pragma_optimize"
target="_blank">optimize pragma</a> is usually a no-op but it will
occasionally run ANALYZE if it seems like doing so will be useful to the
query planner. The
<a href="https://www.sqlite.org/pragma.html#pragma_analysis_limit"
target="_blank">analysis_limit pragma</a> limits the scope of any
ANALYZE command that the
<a href="https://www.sqlite.org/pragma.html#pragma_optimize"
target="_blank">optimize pragma</a> runs so that it does not consume too
many CPU cycles. The constant "400" can be adjusted as needed. Values
between 100 and 1000 work well for most applications.

## 2. Details

The default implementation stores all statistics in a single table named
"<a href="https://www.sqlite.org/fileformat2.html#stat1tab"
target="_blank">sqlite_stat1</a>". If SQLite is compiled with the
<a href="https://www.sqlite.org/compile.html#enable_stat4"
target="_blank">SQLITE_ENABLE_STAT4</a> option, then additional
histogram data is collected and stored in
<a href="https://www.sqlite.org/fileformat2.html#stat4tab"
target="_blank">sqlite_stat4</a>. Older versions of SQLite would make
use of the <a href="https://www.sqlite.org/fileformat2.html#stat2tab"
target="_blank">sqlite_stat2</a> table or
<a href="https://www.sqlite.org/fileformat2.html#stat3tab"
target="_blank">sqlite_stat3</a> table when compiled with
<a href="https://www.sqlite.org/compile.html#enable_stat2"
target="_blank">SQLITE_ENABLE_STAT2</a> or
<a href="https://www.sqlite.org/compile.html#enable_stat3"
target="_blank">SQLITE_ENABLE_STAT3</a>, but all recent versions of
SQLite ignore the sqlite_stat2 and sqlite_stat3 tables. Future
enhancements may create additional
<a href="https://www.sqlite.org/fileformat2.html#intschema"
target="_blank">internal tables</a> with the same name pattern except
with final digit larger than "4". All of these tables are collectively
referred to as "statistics tables".

The content of the statistics tables can be queried using
[SELECT](lang_select) and can be changed using the
[DELETE](lang_delete), [INSERT](lang_insert), and [UPDATE](lang_update)
commands. The [DROP TABLE](lang_droptable) command works on statistics
tables as of SQLite version 3.7.9. (2011-11-01) The [ALTER
TABLE](lang_altertable) command does not work on statistics tables.
Appropriate care should be used when changing the content of the
statistics tables as invalid content can cause SQLite to select
inefficient query plans. Generally speaking, one should not modify the
content of the statistics tables by any mechanism other than invoking
the ANALYZE command. See
"<a href="https://www.sqlite.org/optoverview.html#manctrl"
target="_blank">Manual Control Of Query Plans Using SQLITE_STAT
Tables</a>" for further information.

Statistics gathered by ANALYZE are not automatically updated as the
content of the database changes. If the content of the database changes
significantly, or if the database schema changes, then one should
consider rerunning the ANALYZE command in order to update the
statistics.

The query planner loads the content of the statistics tables into memory
when the schema is read. Hence, when an application changes the
statistics tables directly, SQLite will not immediately notice the
changes. An application can force the query planner to reread the
statistics tables by running **ANALYZE sqlite_schema**.

<span id="autoanalyze"></span>

## 3. Automatically Running ANALYZE

The <a href="https://www.sqlite.org/pragma.html#pragma_optimize"
target="_blank">PRAGMA optimize</a> command will automatically run
ANALYZE on individual tables on an as-needed basis. The recommended
practice is for applications to invoke the
<a href="https://www.sqlite.org/pragma.html#pragma_optimize"
target="_blank">PRAGMA optimize</a> statement just before closing each
database connection.

Each SQLite <a href="https://www.sqlite.org/c3ref/sqlite3.html"
target="_blank">database connection</a> records cases when the query
planner would benefit from having accurate results of ANALYZE at hand.
These records are held in memory and accumulate over the life of a
database connection. The
<a href="https://www.sqlite.org/pragma.html#pragma_optimize"
target="_blank">PRAGMA optimize</a> command looks at those records and
runs ANALYZE on only those tables for which new or updated ANALYZE data
seems likely to be useful. In most cases
<a href="https://www.sqlite.org/pragma.html#pragma_optimize"
target="_blank">PRAGMA optimize</a> will not run ANALYZE, but it will
occasionally do so either for tables that have never before been
analyzed, or for tables that have grown significantly since they were
last analyzed.

Since the actions of
<a href="https://www.sqlite.org/pragma.html#pragma_optimize"
target="_blank">PRAGMA optimize</a> are determined to some extent by
prior queries that have been evaluated on the same database connection,
it is recommended that
<a href="https://www.sqlite.org/pragma.html#pragma_optimize"
target="_blank">PRAGMA optimize</a> be deferred until the database
connection is closing and has thus had an opportunity to accumulate as
much usage information as possible. It is also reasonable to set a timer
to run <a href="https://www.sqlite.org/pragma.html#pragma_optimize"
target="_blank">PRAGMA optimize</a> every few hours, or every few days,
for database connections that stay open for a long time.

Applications that desire more control can run
<a href="https://www.sqlite.org/pragma.html#pragma_optimize"
target="_blank">PRAGMA optimize(0x03)</a> to obtain a list of ANALYZE
commands that SQLite thinks are appropriate to run, but without actually
running those commands. If the returned set is non-empty, the
application can then make a decision about whether or not to run the
suggested ANALYZE commands, perhaps after prompting the user for
guidance.

The <a href="https://www.sqlite.org/pragma.html#pragma_optimize"
target="_blank">PRAGMA optimize</a> command was first introduced with
SQLite 3.18.0 (2017-03-28) and is a no-op for all prior releases of
SQLite.

<span id="approx"></span>

## 4. Approximate ANALYZE For Large Databases

By default, ANALYZE does a full scan of every index. This can be slow
for large databases. So beginning with SQLite version 3.32.0
(2020-05-22), the
<a href="https://www.sqlite.org/pragma.html#pragma_analysis_limit"
target="_blank">PRAGMA analysis_limit</a> command can be used to limit
the amount of scanning performed by ANALYZE, and thus help ANALYZE to
run faster, even on very large database files. We call this running an
"approximate ANALYZE".

The recommended usage pattern for the
<a href="https://www.sqlite.org/pragma.html#pragma_analysis_limit"
target="_blank">analysis_limit</a> pragma is like this:

<div class="codeblock">

    PRAGMA analysis_limit=1000;

</div>

This pragma tells the ANALYZE command to start a full scan of the index
as it normally would. But when the number of rows visited reaches 1000
(or whatever other limit is specified by the pragma), the ANALYZE
command will begin taking actions to stop the scan. If the left-most
column of the index has changed at least once during the previous 1000
steps, then the analysis stops immediately. But if the left-most column
has always been the same, then ANALYZE skips ahead to the first entry
with a different left-most column and reads an additional 1000 rows
before terminating.

The details of the effects of the analysis limit described in the
previous paragraph are subject to change in future versions of SQLite.
But the core idea will remain the same. An analysis limit of N will
strive to limit the number of rows visited in each index to
approximately N.

Values of N between 100 and 1000 are recommended. Or, to disable the
analysis limit, causing ANALYZE to do a complete scan of each index, set
the analysis limit to 0. The default value for the analysis limit is 0
for backwards compatibility.

The values placed in the sqlite_stat1 table by an approximate ANALYZE
are not exactly the same as what would be computed by an unrestricted
analysis. But they are usually close enough. The index statistics in the
sqlite_stat1 table are approximations in any case, so the fact that the
results of an approximate ANALYZE are slightly different from a
traditional full scan ANALYZE has little practical impact. It is
possible to construct a pathological case where an approximate ANALYZE
is noticeably inferior to a full-scan ANALYZE, but such cases are rare
in real-world problems.

A good rule of thumb seems to be to always set "PRAGMA analysis_limit=N"
for N between 100 and 1000 prior to running either "ANALYZE" or
"<a href="https://www.sqlite.org/pragma.html#pragma_optimize"
target="_blank">PRAGMA optimize</a>". The results are not quite as
precise, but they are precise enough, and the fact that the results are
computed so much faster means that developers are more likely to compute
them. An approximate ANALYZE is better than not running ANALYZE at all.

## 4.1. Limitations of approximate ANALYZE

The content in the sqlite_stat4 table cannot be computed with anything
less than a full scan. Hence, if a non-zero analysis limit is specified,
the sqlite_stat4 table is not computed.

---
title: The ON CONFLICT Clause
description: The ON CONFLICT Clause
---

<!-- do-not-touch-svg-import: 'conflict.svg' -->

The ON CONFLICT clause is a non-standard extension specific to SQLite
that can appear in many other SQL commands. It is given its own section
in this document because it is not part of standard SQL and therefore
might not be familiar.

The ON CONFLICT clause described here has been a part of SQLite since
before version 3.0.0 (2004-06-18). The phrase "ON CONFLICT" is also part
of [UPSERT](lang_upsert), which is an extension to [INSERT](lang_insert)
added in version 3.24.0 (2018-06-04). Do not confuse these two separate
uses of the "ON CONFLICT" phrase.

The syntax for the ON CONFLICT clause is as shown above for the CREATE
TABLE command. For the INSERT and UPDATE commands, the keywords "ON
CONFLICT" are replaced by "OR" so that the syntax reads more naturally.
For example, instead of "INSERT ON CONFLICT IGNORE" we have "INSERT OR
IGNORE". The keywords change but the meaning of the clause is the same
either way.

The ON CONFLICT clause applies to
[UNIQUE](lang_createtable#uniqueconst), [NOT
NULL](lang_createtable#notnullconst), [CHECK](lang_createtable#ckconst),
and [PRIMARY KEY](lang_createtable#primkeyconst) constraints. The ON
CONFLICT algorithm does not apply to
<a href="https://www.sqlite.org/foreignkeys.html"
target="_blank">FOREIGN KEY constraints</a>. There are five conflict
resolution algorithm choices: ROLLBACK, ABORT, FAIL, IGNORE, and
REPLACE. The default conflict resolution algorithm is ABORT. This is
what they mean:

<div class="no-bullets-list">

**ROLLBACK**  
- When an applicable constraint violation occurs, the ROLLBACK resolution
algorithm aborts the current SQL statement with an SQLITE_CONSTRAINT
error and rolls back the current transaction. If no transaction is
active (other than the implied transaction that is created on every
command) then the ROLLBACK resolution algorithm works the same as the
ABORT algorithm.

**ABORT**  
- When an applicable constraint violation occurs, the ABORT resolution
algorithm aborts the current SQL statement with an SQLITE_CONSTRAINT
error and backs out any changes made by the current SQL statement; but
changes caused by prior SQL statements within the same transaction are
preserved and the transaction remains active. This is the default
behavior and the behavior specified by the SQL standard.

**FAIL**  
- When an applicable constraint violation occurs, the FAIL resolution
algorithm aborts the current SQL statement with an SQLITE_CONSTRAINT
error. But the FAIL resolution does not back out prior changes of the
SQL statement that failed nor does it end the transaction. For example,
if an UPDATE statement encountered a constraint violation on the 100th
row that it attempts to update, then the first 99 row changes are
preserved but changes to rows 100 and beyond never occur.

- The FAIL behavior only works for uniqueness, NOT NULL, and CHECK
constraints. A <a href="https://www.sqlite.org/foreignkeys.html"
target="_blank">foreign key constraint</a> violation causes an ABORT.

**IGNORE**  
- When an applicable constraint violation occurs, the IGNORE resolution
algorithm skips the one row that contains the constraint violation and
continues processing subsequent rows of the SQL statement as if nothing
went wrong. Other rows before and after the row that contained the
constraint violation are inserted or updated normally. No error is
returned for uniqueness, NOT NULL, and UNIQUE constraint errors when the
IGNORE conflict resolution algorithm is used. However, the IGNORE
conflict resolution algorithm works like ABORT for
<a href="https://www.sqlite.org/foreignkeys.html"
target="_blank">foreign key constraint</a> errors.

**REPLACE**  
- When a [UNIQUE](lang_createtable#uniqueconst) or [PRIMARY
KEY](lang_createtable#primkeyconst) constraint violation occurs, the
REPLACE algorithm deletes pre-existing rows that are causing the
constraint violation prior to inserting or updating the current row and
the command continues executing normally. If a [NOT
NULL](lang_createtable#notnullconst) constraint violation occurs, the
REPLACE conflict resolution replaces the NULL value with the default
value for that column, or if the column has no default value, then the
ABORT algorithm is used. If a [CHECK
constraint](lang_createtable#ckconst) or
<a href="https://www.sqlite.org/foreignkeys.html"
target="_blank">foreign key constraint</a> violation occurs, the REPLACE
conflict resolution algorithm works like ABORT.

- When the REPLACE conflict resolution strategy deletes rows in order to
satisfy a constraint, [delete triggers](lang_createtrigger) fire if and
only if
<a href="https://www.sqlite.org/pragma.html#pragma_recursive_triggers"
target="_blank">recursive triggers</a> are enabled.

- The <a href="https://www.sqlite.org/c3ref/update_hook.html"
target="_blank">update hook</a> is not invoked for rows that are deleted
by the REPLACE conflict resolution strategy. Nor does REPLACE increment
the <a href="https://www.sqlite.org/c3ref/changes.html"
target="_blank">change counter</a>. The exceptional behaviors defined in
this paragraph might change in a future release.

The algorithm specified in the OR clause of an INSERT or UPDATE
overrides any algorithm specified in a CREATE TABLE. If no algorithm is
specified anywhere, the ABORT algorithm is used.

</div>
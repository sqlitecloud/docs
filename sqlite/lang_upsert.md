---
title: UPSERT
description: UPSERT is a clause added to INSERT that causes the INSERT to behave as an UPDATE or a no-op if the INSERT would violate a uniqueness constraint.
statement: INSERT INTO Artist (name) VALUES ('Lady Gaga') ON CONFLICT (ArtistId) DO UPDATE SET name = 'New Lady Gaga';
customClass: sqlite-doc
---

## 1. Syntax

<!-- do-not-touch-svg-import: 'upsert.svg' -->

## 2. Description

UPSERT is a clause added to [INSERT](lang_insert) that causes the INSERT
to behave as an [UPDATE](lang_update) or a no-op if the INSERT would
violate a uniqueness constraint. UPSERT is not standard SQL. UPSERT in
SQLite follows the syntax established by PostgreSQL, with
generalizations.

An UPSERT is an ordinary [INSERT](lang_insert) statement that is
followed by one or more ON CONFLICT clauses, as shown in the syntax
diagram above.

The syntax in between the "ON CONFLICT" and "DO" keywords is called the
"conflict target". The conflict target specifies a uniqueness constraint
that will trigger the upsert. The conflict target may be omitted on the
last ON CONFLICT clause in the INSERT statement, but is required for all
other ON CONFLICT clauses.

If the insert operation would cause the conflict target uniqueness
constraint to fail, then the insert is omitted and the corresponding DO
NOTHING or DO UPDATE operation is performed instead. The ON CONFLICT
clauses are checked in the order specified. If the last ON CONFLICT
clause omits the conflict target, then it will fire if any uniqueness
constraint fails which is not captured by prior ON CONFLICT clauses.

Only a single ON CONFLICT clause, specifically the first ON CONFLICT
clause with a matching conflict target, may run for each row of the
INSERT. When an ON CONFLICT clause fires, all subsequent ON CONFLICT
clauses are bypassed for that one row.

In the case of a multi-row insert, the upsert decision is made
separately for each row of the insert.

The UPSERT processing happens only for uniqueness constraints. A
"uniqueness constraint" is an explicit UNIQUE or PRIMARY KEY constraint
within the CREATE TABLE statement, or a [unique
index](lang_createindex#uniqueidx). UPSERT does not intervene for failed
NOT NULL, CHECK, or foreign key constraints or for constraints that are
implemented using triggers.

Column names in the expressions of a DO UPDATE refer to the original
unchanged value of the column, before the attempted INSERT. To use the
value that would have been inserted had the constraint not failed, add
the special "excluded." table qualifier to the column name.

## 2.1. Examples

Some examples will help illustrate how UPSERT works:

>     CREATE TABLE vocabulary(word TEXT PRIMARY KEY, count INT DEFAULT 1);
>     INSERT INTO vocabulary(word) VALUES('jovial')
>       ON CONFLICT(word) DO UPDATE SET count=count+1;

The upsert above inserts the new vocabulary word "jovial" if that word
is not already in the dictionary, or if it is already in the dictionary,
it increments the counter. The "count+1" expression could also be
written as "vocabulary.count". PostgreSQL requires the second form, but
SQLite accepts either.

>     CREATE TABLE phonebook(name TEXT PRIMARY KEY, phonenumber TEXT);
>     INSERT INTO phonebook(name,phonenumber) VALUES('Alice','704-555-1212')
>       ON CONFLICT(name) DO UPDATE SET phonenumber=excluded.phonenumber;

In the second example, the expression in the DO UPDATE clause is of the
form "excluded.phonenumber". The "excluded." prefix causes the
"phonenumber" to refer to the value for phonenumber that would have been
inserted had there been no conflict. Hence, the effect of the upsert is
to insert a phonenumber of Alice if none exists, or to overwrite any
prior phonenumber for Alice with the new one.

Note that the DO UPDATE clause acts only on the single row that
experienced the constraint error during INSERT. It is not necessary to
include a WHERE clause that restricts the action to that one row. The
only use for the WHERE clause at the end of the DO UPDATE is to
optionally change the DO UPDATE into a no-op depending on the original
and/or new values. For example:

>     CREATE TABLE phonebook2(
>       name TEXT PRIMARY KEY,
>       phonenumber TEXT,
>       validDate DATE
>     );
>     INSERT INTO phonebook2(name,phonenumber,validDate)
>       VALUES('Alice','704-555-1212','2018-05-08')
>       ON CONFLICT(name) DO UPDATE SET
>         phonenumber=excluded.phonenumber,
>         validDate=excluded.validDate
>       WHERE excluded.validDate>phonebook2.validDate;

In this last example, the phonebook2 entry is only updated if the
validDate for the newly inserted value is newer than the entry already
in the table. If the table already contains an entry with the same name
and a current validDate, then the WHERE clause causes the DO UPDATE to
become a no-op. <span id="parseambig"></span>

## 2.2. Parsing Ambiguity

When the [INSERT](lang_insert) statement to which the UPSERT is attached
takes its values from a [SELECT](lang_select) statement, there is a
potential parsing ambiguity. The parser might not be able to tell if the
"ON" keyword is introducing the UPSERT or if it is the ON clause of a
join. To work around this, the SELECT statement should always include a
WHERE clause, even if that WHERE clause is just "WHERE true".

Ambiguous use of ON:

>     INSERT INTO t1 SELECT * FROM t2
>     ON CONFLICT(x) DO UPDATE SET y=excluded.y;

Ambiguity resolved using a WHERE clause:

>     INSERT INTO t1 SELECT * FROM t2 WHERE true
>     ON CONFLICT(x) DO UPDATE SET y=excluded.y;

## 3. Limitations

UPSERT does not currently work for
<a href="https://www.sqlite.org/vtab.html" target="_blank">virtual
tables</a>.

The [conflict resolution algorithm](lang_conflict) for the update
operation of the DO UPDATE clause is always ABORT. In other words, the
behavior is as if the DO UPDATE clause were actually written as "DO
UPDATE OR ABORT". If the DO UPDATE clause encounters any constraint
violation, the entire INSERT statement rolls back and halts. This is
true even if the DO UPDATE clause is contained within an INSERT
statement or a trigger that specifies some other conflict resolution
algorithm.

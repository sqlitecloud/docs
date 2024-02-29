---
title: UPSERT
description: UPSERT
statement: INSERT INTO Artist (name) VALUES ('Lady Gaga') ON CONFLICT (ArtistId) DO UPDATE SET name = 'New Lady Gaga';
---
!['script.js'](/public/docs/sqlite/script.js)





<h2 id="syntax"><span>1. </span>Syntax</h2>

!['upsert.svg'](/public/docs/sqlite/_svg/upsert.svg)


<h2 id="description"><span>2. </span>Description</h2>

<p>UPSERT is a clause added to <a href="lang_insert">INSERT</a> that causes the
INSERT to behave as an <a href="lang_update">UPDATE</a> or a no-op if the INSERT would violate
a uniqueness constraint.
UPSERT is not standard SQL. UPSERT in SQLite follows the
syntax established by PostgreSQL, with generalizations.

</p><p>An UPSERT is an ordinary <a href="lang_insert">INSERT</a> statement that is followed by
one or more ON CONFLICT clauses, as shown in the syntax diagram above.

</p><p>The syntax in between the "ON CONFLICT" and "DO" keywords
is called the "conflict target". The conflict target specifies a
uniqueness constraint that will trigger the upsert. The conflict target
may be omitted on the last ON CONFLICT clause in the INSERT statement, but
is required for all other ON CONFLICT clauses.

</p><p>If the insert operation would cause the conflict target uniqueness
constraint to fail, then the insert is omitted and
the corresponding DO NOTHING or DO UPDATE operation is performed instead.
The ON CONFLICT clauses are checked in the order specified. If the last
ON CONFLICT clause omits the conflict target, then it will fire if any
uniqueness constraint fails which is not captured by prior ON CONFLICT clauses.

</p><p>Only a single ON CONFLICT clause, specifically the first ON CONFLICT
clause with a matching conflict target, may run for each row of the INSERT.
When an ON CONFLICT clause fires, all subsequent ON CONFLICT clauses are
bypassed for that one row.

</p><p>
In the case of a multi-row insert, the upsert decision is made separately
for each row of the insert.

</p><p>The UPSERT processing happens only for uniqueness constraints.
A "uniqueness constraint"
is an explicit UNIQUE or PRIMARY KEY constraint within
the CREATE TABLE statement, or a <a href="lang_createindex#uniqueidx">unique index</a>.
UPSERT does not intervene for failed NOT NULL, CHECK,
or foreign key constraints
or for constraints that are implemented using triggers.

</p><p>Column names in the expressions of a DO UPDATE refer to the original
unchanged value of the column, before the attempted INSERT. To use the
value that would have been inserted had the constraint not failed,
add the special "excluded." table qualifier to the column name.

</p><h2 id="examples"><span>2.1. </span>Examples</h2>

<p>Some examples will help illustrate how UPSERT works:

</p><blockquote><pre>
CREATE TABLE vocabulary(word TEXT PRIMARY KEY, count INT DEFAULT 1);
INSERT INTO vocabulary(word) VALUES('jovial')
  ON CONFLICT(word) DO UPDATE SET count=count+1;
</pre></blockquote>

<p>The upsert above inserts the new vocabulary word "jovial" if that
word is not already in the dictionary, or if it is already in the
dictionary, it increments the counter. The "count+1" expression
could also be written as "vocabulary.count". PostgreSQL requires the
second form, but SQLite accepts either.

</p><blockquote><pre>
CREATE TABLE phonebook(name TEXT PRIMARY KEY, phonenumber TEXT);
INSERT INTO phonebook(name,phonenumber) VALUES('Alice','704-555-1212')
  ON CONFLICT(name) DO UPDATE SET phonenumber=excluded.phonenumber;
</pre></blockquote>

<p>In the second example, the expression in the DO UPDATE clause is
of the form "excluded.phonenumber". The "excluded." prefix causes the
"phonenumber" to refer to the value for phonenumber that would have been
inserted had there been no conflict. Hence, the effect of the upsert
is to insert a phonenumber of Alice if none exists, or to overwrite
any prior phonenumber for Alice with the new one.

</p><p>Note that the DO UPDATE clause acts only on the single row
that experienced the constraint error during INSERT. It is not
necessary to include a WHERE clause that restricts the action
to that one row. The only use for the WHERE clause at
the end of the DO UPDATE is to optionally change the DO UPDATE
into a no-op depending on the original and/or new values.
For example:

</p><blockquote><pre>
CREATE TABLE phonebook2(
  name TEXT PRIMARY KEY,
  phonenumber TEXT,
  validDate DATE
);
INSERT INTO phonebook2(name,phonenumber,validDate)
  VALUES('Alice','704-555-1212','2018-05-08')
  ON CONFLICT(name) DO UPDATE SET
    phonenumber=excluded.phonenumber,
    validDate=excluded.validDate
  WHERE excluded.validDate>phonebook2.validDate;
</pre></blockquote>

<p>In this last example, the phonebook2 entry is only
updated if the validDate for the newly inserted value is
newer than the entry already in the table. If the table already
contains an entry with the same name and a current validDate,
then the WHERE clause causes the DO UPDATE to become a no-op.

<a name="parseambig"></a>


</p><h2 id="parsing_ambiguity"><span>2.2. </span>Parsing Ambiguity</h2>

<p>When the <a href="lang_insert">INSERT</a> statement to which the UPSERT is attached
takes its values from a <a href="lang_select">SELECT</a> statement, there is a potential
parsing ambiguity. The parser might not be able to tell if the
"ON" keyword is introducing the UPSERT or if it is the ON clause
of a join. To work around this, the SELECT statement should always
include a WHERE clause, even if that WHERE clause is just
"WHERE true".

</p><p>Ambiguous use of ON:

</p><blockquote><pre>
INSERT INTO t1 SELECT * FROM t2
ON CONFLICT(x) DO UPDATE SET y=excluded.y;
</pre></blockquote>

<p>Ambiguity resolved using a WHERE clause:

</p><blockquote><pre>
INSERT INTO t1 SELECT * FROM t2 <font color="blue">WHERE true</font>
ON CONFLICT(x) DO UPDATE SET y=excluded.y;
</pre></blockquote>

<h2 id="limitations"><span>3. </span>Limitations</h2>

<p>UPSERT does not currently work for <a href="https://www.sqlite.org/vtab.html" target="_blank">virtual tables</a>.

</p><p>The <a href="lang_conflict">conflict resolution algorithm</a> for the update operation
of the DO UPDATE clause is always ABORT. In other words, the behavior
is as if the DO UPDATE clause were actually written as
"DO UPDATE OR ABORT". If the DO UPDATE clause encounters any
constraint violation, the entire INSERT statement rolls back and
halts. This is true even if the DO UPDATE clause is
contained within an INSERT statement or a trigger that specifies some
other conflict resolution algorithm.

</p>


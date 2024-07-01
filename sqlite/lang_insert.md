---
title: INSERT
description: The INSERT statement comes in three basic forms. INSERT INTO table VALUES(...); INSERT INTO table SELECT ...; INSERT INTO table DEFAULT VALUES;
statement: INSERT INTO Artist (name) VALUES ('Rod Stewart');
customClass: sqlite-doc
---

## 1. Overview

<!-- do-not-touch-svg-import: 'insert.svg' -->

The INSERT statement comes in three basic forms.

1.  **INSERT INTO** *table* **VALUES(...);**

    The first form (with the "VALUES" keyword) creates one or more new
    rows in an existing table. If the
    <span class="yyterm">column-name</span> list after
    <span class="yyterm">table-name</span> is omitted then the number of
    values inserted into each row must be the same as the number of
    columns in the table. In this case the result of evaluating the
    left-most expression from each term of the VALUES list is inserted
    into the left-most column of each new row, and so forth for each
    subsequent expression. If a <span class="yyterm">column-name</span>
    list is specified, then the number of values in each term of the
    VALUE list must match the number of specified columns. Each of the
    named columns of the new row is populated with the results of
    evaluating the corresponding VALUES expression. Table columns that
    do not appear in the column list are populated with the [default
    column value](lang_createtable#dfltval) (specified as part of the
    [CREATE TABLE](lang_createtable) statement), or with NULL if no
    [default value](lang_createtable#dfltval) is specified.

2.  **INSERT INTO** *table* **SELECT ...;**

    The second form of the INSERT statement contains a
    [SELECT](lang_select) statement instead of a VALUES clause. A new
    entry is inserted into the table for each row of data returned by
    executing the SELECT statement. If a column-list is specified, the
    number of columns in the result of the SELECT must be the same as
    the number of items in the column-list. Otherwise, if no column-list
    is specified, the number of columns in the result of the SELECT must
    be the same as the number of columns in the table. Any SELECT
    statement, including [compound SELECTs](lang_select#compound) and
    SELECT statements with [ORDER BY](lang_select#orderby) and/or
    [LIMIT](lang_select#limitoffset) clauses, may be used in an INSERT
    statement of this form.

    To avoid a parsing ambiguity, the SELECT statement should always
    contain a WHERE clause, even if that clause is simply "WHERE true",
    if the <a href="https://www.sqlite.org/syntax/upsert-clause.html"
    target="_blank">upsert-clause</a> is present. Without the WHERE
    clause, the parser does not know if the token "ON" is part of a join
    constraint on the SELECT, or the beginning of the
    <a href="https://www.sqlite.org/syntax/upsert-clause.html"
    target="_blank">upsert-clause</a>.

3.  **INSERT INTO** *table* **DEFAULT VALUES;**

    The third form of an INSERT statement is with DEFAULT VALUES. The
    INSERT ... DEFAULT VALUES statement inserts a single new row into
    the named table. Each column of the new row is populated with its
    [default value](lang_createtable#dfltval), or with a NULL if no
    default value is specified as part of the column definition in the
    [CREATE TABLE](lang_createtable) statement. The
    <a href="https://www.sqlite.org/syntax/upsert-clause.html"
    target="_blank">upsert-clause</a> is not supported after DEFAULT
    VALUES.

The initial "INSERT" keyword can be replaced by "REPLACE" or "INSERT OR
*action*" to specify an alternative constraint [conflict resolution
algorithm](lang_conflict) to use during that one INSERT command. For
compatibility with MySQL, the parser allows the use of the single
keyword [REPLACE](lang_replace) as an alias for "INSERT OR REPLACE".

The optional "_schema-name_**.**" prefix on the
<span class="yyterm">table-name</span> is supported for top-level INSERT
statements only. The table name must be unqualified for INSERT
statements that occur within [CREATE TRIGGER](lang_createtrigger)
statements. Similarly, the "DEFAULT VALUES" form of the INSERT statement
is supported for top-level INSERT statements only and not for INSERT
statements within triggers.

The optional "AS <span class="yyterm">alias</span>" phrase provides an
alternative name for the table into which content is being inserted. The
alias name can be used within WHERE and SET clauses of the
[UPSERT](lang_upsert). If there is no
<a href="https://www.sqlite.org/syntax/upsert-clause.html"
target="_blank">upsert-clause</a>, then the
<span class="yyterm">alias</span> is pointless, but also harmless.

See the separate [UPSERT](lang_upsert) documentation for the additional
trailing syntax that can cause an INSERT to behave as an UPDATE if the
INSERT would otherwise violate a uniqueness constraint. The [upsert
clause](lang_upsert) is not allowed on an "INSERT ... DEFAULT VALUES".

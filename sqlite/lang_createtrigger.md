---
title: CREATE TRIGGER
description: CREATE TRIGGER
statement: CREATE TRIGGER IF NOT EXISTS validate_artist_name BEFORE INSERT ON Artist BEGIN SELECT CASE WHEN NEW.name LIKE 'Z%' THEN RAISE (ABORT,'Invalid artist name!') END; END;
---
!['script.js'](/public/docs/sqlite/script.js)





<h2 id="syntax"><span>1. </span>Syntax</h2>

!['createtrigger.svg'](/public/docs/sqlite/_svg/createtrigger.svg)



<h2 id="description"><span>2. </span>Description</h2>
<p>The CREATE TRIGGER statement is used to add triggers to the 
database schema. Triggers are database operations 
that are automatically performed when a specified database event
occurs. </p>

<p>Each trigger must specify that it will fire for one of
the following operations: <a href="lang_delete">DELETE</a>, <a href="lang_insert">INSERT</a>, <a href="lang_update">UPDATE</a>.
The trigger fires once for each row that is deleted, inserted,
or updated. If the "UPDATE OF <span class='yyterm'>column-name</span>"
syntax is used, then the trigger will only fire if
<span class='yyterm'>column-name</span> appears on the left-hand side of
one of the terms in the SET clause of the <a href="lang_update">UPDATE</a> statement.</p>

<p>Due to an historical oversight, columns named in the "UPDATE OF"
clause do not actually have to exist in the table being updated.
Unrecognized column names are silently ignored.
It would be more helpful if SQLite would fail the CREATE TRIGGER
statement if any of the names in the "UPDATE OF" clause are not
columns in the table. However, as this problem was discovered
many years after SQLite was widely deployed, we have resisted
fixing the problem for fear of breaking legacy applications.</p>

<p>At this time SQLite supports only FOR EACH ROW triggers, not FOR EACH
STATEMENT triggers. Hence explicitly specifying FOR EACH ROW is optional.
FOR EACH ROW implies that the SQL statements specified in the trigger
may be executed (depending on the WHEN clause) for each database row being
inserted, updated or deleted by the statement causing the trigger to fire.</p>

<p>Both the WHEN clause and the trigger actions may access elements of 
the row being inserted, deleted or updated using references of the form 
"NEW.<i>column-name</i>" and "OLD.<i>column-name</i>", where
<i>column-name</i> is the name of a column from the table that the trigger
is associated with. OLD and NEW references may only be used in triggers on
events for which they are relevant, as follows:</p>

<table border="0" cellpadding="10">
<tr>
<td valign="top" align="right" width="120"><i>INSERT</i></td>
<td valign="top">NEW references are valid</td>
</tr>
<tr>
<td valign="top" align="right" width="120"><i>UPDATE</i></td>
<td valign="top">NEW and OLD references are valid</td>
</tr>
<tr>
<td valign="top" align="right" width="120"><i>DELETE</i></td>
<td valign="top">OLD references are valid</td>
</tr>
</table>


<p>If a WHEN clause is supplied, the SQL statements specified
are only executed if the WHEN clause is true.
If no WHEN clause is supplied, the SQL statements
are executed every time the trigger fires.</p>

<p>The BEFORE or AFTER keyword determines when the trigger actions
will be executed relative to the insertion, modification or removal of the
associated row. BEFORE is the default when neither keyword is present.</p>

<p>An <a href="lang_conflict">ON CONFLICT</a> clause may be specified as part of an <a href="lang_update">UPDATE</a> or <a href="lang_insert">INSERT</a>
action within the body of the trigger.
However if an <a href="lang_conflict">ON CONFLICT</a> clause is specified as part of 
the statement causing the trigger to fire, then conflict handling
policy of the outer statement is used instead.</p>

<p>Triggers are automatically <a href="lang_droptrigger">dropped</a>
when the table that they are 
associated with (the <i>table-name</i> table) is 
<a href="lang_droptable">dropped</a>. However if the trigger actions reference
other tables, the trigger is not dropped or modified if those other
tables are <a href="lang_droptable">dropped</a> or <a href="lang_altertable">modified</a>.</p>

<p>Triggers are removed using the <a href="lang_droptrigger">DROP TRIGGER</a> statement.</p>

<h2 id="syntax_restrictions_on_update_delete_and_insert_statements_within_triggers"><span>2.1. </span>Syntax Restrictions On UPDATE, DELETE, and INSERT Statements Within
    Triggers</h2>

<p>The <a href="lang_update">UPDATE</a>, <a href="lang_delete">DELETE</a>, and <a href="lang_insert">INSERT</a>
statements within triggers do not support
the full syntax for <a href="lang_update">UPDATE</a>, <a href="lang_delete">DELETE</a>, and <a href="lang_insert">INSERT</a> statements. The following
restrictions apply:</p>

<ul>
<li><p>
The name of the table to be modified in an <a href="lang_update">UPDATE</a>, <a href="lang_delete">DELETE</a>, or <a href="lang_insert">INSERT</a>
statement must be an unqualified table name. In other words, one must
use just "<i>tablename</i>" not "<i>database</i><b>.</b><i>tablename</i>"
when specifying the table. </p></li>

<li><p>
 For non-TEMP triggers,
the table to be modified or queried must exist in the
same database as the table or view to which the trigger is attached.
TEMP triggers are not subject to the same-database rule. A TEMP
trigger is allowed to query or modify any table in any <a href="lang_attach">ATTACH</a>-ed database.
</p></li>

<li><p>
The "INSERT INTO <i>table</i> DEFAULT VALUES" form of the <a href="lang_insert">INSERT</a> statement
is not supported.
</p></li>

<li><p>
The INDEXED BY and NOT INDEXED clauses are not supported for <a href="lang_update">UPDATE</a> and
<a href="lang_delete">DELETE</a> statements.
</p></li>

<li><p>
The ORDER BY and LIMIT clauses on <a href="lang_update">UPDATE</a> and <a href="lang_delete">DELETE</a> statements are not
supported. ORDER BY and LIMIT are not normally supported for <a href="lang_update">UPDATE</a> or
<a href="lang_delete">DELETE</a> in any context but can be enabled for top-level statements
using the <a href="https://www.sqlite.org/compile.html#enable_update_delete_limit" target="_blank">SQLITE_ENABLE_UPDATE_DELETE_LIMIT</a> compile-time option. However,
that compile-time option only applies to top-level <a href="lang_update">UPDATE</a> and <a href="lang_delete">DELETE</a>
statements, not <a href="lang_update">UPDATE</a> and <a href="lang_delete">DELETE</a> statements within triggers.
</p></li>

<li><p>
<a href="https://www.sqlite.org/syntax/common-table-expression.html" target="_blank">Common table expression</a> are not supported for
statements inside of triggers.
</p></li>
</ul>

<a name="instead_of_trigger"></a>

<h2 id="instead_of_triggers"><span>3. </span>INSTEAD OF triggers</h2>

<p>BEFORE and AFTER triggers work only on ordinary tables.
INSTEAD OF triggers work only on views.

</p><p>If an INSTEAD OF INSERT trigger exists on a view, then it is
possible to execute an INSERT statement against that view. No actual
insert occurs. Instead, the statements contained within the trigger
are run. INSTEAD OF DELETE and
INSTEAD OF UPDATE triggers work the same way for DELETE and UPDATE statements
against views.</p>

<p>Note that the <a href="https://www.sqlite.org/c3ref/changes.html" target="_blank">sqlite3_changes()</a> and <a href="https://www.sqlite.org/c3ref/total_changes.html" target="_blank">sqlite3_total_changes()</a> interfaces
do not count INSTEAD OF trigger firings, but the
<a href="https://www.sqlite.org/pragma.html#pragma_count_changes" target="_blank">count_changes pragma</a> does count INSTEAD OF trigger firing.</p>

<h2 id="some_example_triggers"><span>4. </span>Some Example Triggers</h2>

<p>Assuming that customer records are stored in the "customers" table, and
that order records are stored in the "orders" table, the following
UPDATE trigger
ensures that all associated orders are redirected when a customer changes
his or her address:</p>

<blockquote><pre>
CREATE TRIGGER update_customer_address UPDATE OF address ON customers 
  BEGIN
    UPDATE orders SET address = new.address WHERE customer_name = old.name;
  END;
</pre></blockquote>

<p>With this trigger installed, executing the statement:</p>

<blockquote><pre>
UPDATE customers SET address = '1 Main St.' WHERE name = 'Jack Jones';
</pre></blockquote>

<p>causes the following to be automatically executed:</p>

<blockquote><pre>
UPDATE orders SET address = '1 Main St.' WHERE customer_name = 'Jack Jones';
</pre></blockquote>

<p>For an example of an INSTEAD OF trigger, consider the following schema:

<blockquote><pre>
CREATE TABLE customer(
cust_id INTEGER PRIMARY KEY,
cust_name TEXT,
cust_addr TEXT
);
CREATE VIEW customer_address AS
 SELECT cust_id, cust_addr FROM customer;
CREATE TRIGGER cust_addr_chng
INSTEAD OF UPDATE OF cust_addr ON customer_address
BEGIN
UPDATE customer SET cust_addr=NEW.cust_addr
 WHERE cust_id=NEW.cust_id;
END;
</pre></blockquote>

</p><p>With the schema above, a statement of the form:</p>

<blockquote><pre>
UPDATE customer_address SET cust_addr=$new_address WHERE cust_id=$cust_id;
</pre></blockquote>

<p>Causes the customer.cust_addr field to be updated for a specific
customer entry that has customer.cust_id equal to the $cust_id parameter.
Note how the values assigned to the view are made available as field
in the special "NEW" table within the trigger body.</p>

<a name="undef_before"></a>

<h2 id="cautions_on_the_use_of_before_triggers"><span>5. </span>Cautions On The Use Of BEFORE triggers</h2>

<p>If a BEFORE UPDATE or BEFORE DELETE trigger modifies or deletes a row
that was to have been updated or deleted, then the result of the subsequent
update or delete operation is undefined. Furthermore, if a BEFORE trigger
modifies or deletes a row, then it is undefined whether or not AFTER triggers
that would have otherwise run on those rows will in fact run.
</p>

<p>The value of NEW.rowid is undefined in a BEFORE INSERT trigger in which
the rowid is not explicitly set to an integer.</p>

<p>Because of the behaviors described above, programmers are encouraged to
prefer AFTER triggers over BEFORE triggers.</p>

<a name="raise"></a>

<h2 id="the_raise_function"><span>6. </span>The RAISE() function</h2>

<p>A special SQL function RAISE() may be used within a trigger-program,
with the following syntax</p> 

!['createtrigger2.svg'](/public/docs/sqlite/_svg/createtrigger2.svg)


<p>When one of RAISE(ROLLBACK,...), RAISE(ABORT,...) or RAISE(FAIL,...)
is called during trigger-program
execution, the specified <a href="lang_conflict">ON CONFLICT</a> processing is performed and
the current query terminates.
An error code of <a href="https://www.sqlite.org/rescode.html#constraint" target="_blank">SQLITE_CONSTRAINT</a> is returned to the application,
along with the specified error message.</p>

<p>When RAISE(IGNORE) is called, the remainder of the current trigger program,
the statement that caused the trigger program to execute and any subsequent
trigger programs that would have been executed are abandoned. No database
changes are rolled back. If the statement that caused the trigger program
to execute is itself part of a trigger program, then that trigger program
resumes execution at the beginning of the next step.
</p>

<a name="temptrig"></a>

<h2 id="temp_triggers_on_non_temp_tables"><span>7. </span>TEMP Triggers on Non-TEMP Tables</h2>

<p>A trigger normally exists in the same database as the table named
after the "ON" keyword in the CREATE TRIGGER statement. Except, it is
possible to create a TEMP TRIGGER on a table in another database. 
Such a trigger will only fire when changes
are made to the target table by the application that defined the trigger.
Other applications that modify the database will not be able to see the
TEMP trigger and hence cannot run the trigger.</p>

<p>When defining a TEMP trigger on a non-TEMP table, it is important to
specify the database holding the non-TEMP table. For example,
in the following statement, it is important to say "main.tab1" instead
of just "tab1":</p>

<blockquote><pre>
CREATE TEMP TRIGGER ex1 AFTER INSERT ON <b>main.</b>tab1 BEGIN ...
</pre></blockquote>

<p>Failure to specify the schema name on the target table could result
in the TEMP trigger being reattached to a table with the same name in
another database whenever any schema change occurs.</p>



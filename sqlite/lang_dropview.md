---
title: DROP VIEW
description: DROP VIEW
statement: DROP VIEW IF EXISTS view_names;
---
!['script.js'](/public/docs/sqlite/script.js)





!['dropview.svg'](/public/docs/sqlite/_svg/dropview.svg)

<p>The DROP VIEW statement removes a view created by the <a href="lang_createview">CREATE VIEW</a> 
statement. The view definition is removed from the database schema, but 
no actual data in the underlying base tables is modified.

</p><p>The view to drop is identified by the view-name and optional 
schema-name specified as part of the DROP VIEW statement. This 
reference is resolved using the standard procedure for <a href="lang_naming">object resolution</a>.

</p><p>
If the specified view cannot be found and the IF EXISTS clause is not 
present, it is an error. If the specified view cannot be found and an IF
EXISTS clause is present in the DROP VIEW statement, then the statement
is a no-op.


</p>


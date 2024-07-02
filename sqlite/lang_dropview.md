---
title: DROP VIEW
description: The DROP VIEW statement removes a view created by the CREATE VIEW statement.
statement: DROP VIEW IF EXISTS view_names;
customClass: sqlite-doc
category: reference
---

<!-- do-not-touch-svg-import: 'dropview.svg' -->

The DROP VIEW statement removes a view created by the [CREATE
VIEW](lang_createview) statement. The view definition is removed from
the database schema, but no actual data in the underlying base tables is
modified.

The view to drop is identified by the view-name and optional schema-name
specified as part of the DROP VIEW statement. This reference is resolved
using the standard procedure for [object resolution](lang_naming).

If the specified view cannot be found and the IF EXISTS clause is not
present, it is an error. If the specified view cannot be found and an IF
EXISTS clause is present in the DROP VIEW statement, then the statement
is a no-op.

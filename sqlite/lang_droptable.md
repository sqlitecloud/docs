---
title: DROP TABLE
description: The DROP TABLE statement removes a table added with the CREATE TABLE statement.
statement: DROP TABLE IF EXISTS Genre;
customClass: sqlite-doc
category: reference
status: publish
---

<!-- do-not-touch-svg-import: 'droptable.svg' -->

The DROP TABLE statement removes a table added with the [CREATE
TABLE](lang_createtable) statement. The name specified is the table
name. The dropped table is completely removed from the database schema
and the disk file. The table can not be recovered. All indices and
triggers associated with the table are also deleted.

The optional IF EXISTS clause suppresses the error that would normally
result if the table does not exist.

If <a href="https://www.sqlite.org/foreignkeys.html"
target="_blank">foreign key constraints</a> are enabled, a DROP TABLE
command performs an implicit [DELETE FROM](lang_delete) command before
removing the table from the database schema. Any triggers attached to
the table are dropped from the database schema before the implicit
DELETE FROM is executed, so this cannot cause any triggers to fire. By
contrast, an implicit DELETE FROM does cause any configured
<a href="https://www.sqlite.org/foreignkeys.html#fk_actions"
target="_blank">foreign key actions</a> to take place. If the implicit
DELETE FROM executed as part of a DROP TABLE command violates any
immediate foreign key constraints, an error is returned and the table is
not dropped. If the implicit DELETE FROM causes any deferred foreign key
constraints to be violated, and the violations still exist when the
transaction is committed, an error is returned at the time of commit.

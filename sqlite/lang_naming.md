---
title: Database Object Name Resolution
description: In SQLite, a database object (a table, index, trigger or view) is identified by the name of the object and the name of the database that it resides in.
statement: SELECT column AS alias FROM table;
customClass: sqlite-doc
category: reference
status: publish
---

In SQLite, a database object (a table, index, trigger or view) is
identified by the name of the object and the name of the database that
it resides in. Database objects may reside in the main database, the
temp database, or in an [attached database](lang_attach).

The syntax of the [DROP TABLE](lang_droptable), [DROP
INDEX](lang_dropindex), [DROP VIEW](lang_dropview), [DROP
TRIGGER](lang_droptrigger), [REINDEX](lang_reindex), [ALTER
TABLE](lang_altertable) and many other commands all permit the user to
specify a database object either by its name alone, or by a combination
of its name and the name of its database. If no database is specified as
part of the object reference, then SQLite searches the main, temp and
all attached databases for an object with a matching name. The temp
database is searched first, followed by the main database, followed all
attached databases in the order that they were attached. The reference
resolves to the first match found. For example:

          /* Add a table named 't1' to the temp, main and an attached database */
          ATTACH 'file.db' AS aux;
          CREATE TABLE t1(x, y);
          CREATE TEMP TABLE t1(x, y);
          CREATE TABLE aux.t1(x, y);

          DROP TABLE t1;         /* Drop table in temp database */
          DROP TABLE t1;         /* Drop table in main database */
          DROP TABLE t1;         /* Drop table in aux database */

If a schema name is specified as part of an object reference, it must be
either "main", or "temp" or the schema-name of an attached database.
Like other SQL identifiers, schema names are case-insensitive. If a
schema name is specified, then only that one schema is searched for the
named object.

Most object references may only resolve to a specific type of object
(for example a reference that is part of a DROP TABLE statement may only
resolve to a table object, not an index, trigger or view). However in
some contexts (e.g. [REINDEX](lang_reindex)) an object reference may be
resolve to more than one type of object. When searching database schemas
for a named object, objects of types that cannot be used in the context
of the reference are always ignored.

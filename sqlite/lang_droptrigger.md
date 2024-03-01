---
title: DROP TRIGGER
description: DROP TRIGGER
statement: DROP TRIGGER IF EXISTS validate_artist_name;
---

<!-- do-not-touch-svg-import: 'droptrigger.svg' -->

The DROP TRIGGER statement removes a trigger created by the [CREATE
TRIGGER](lang_createtrigger) statement. Once removed, the trigger
definition is no longer present in the
<a href="https://www.sqlite.org/schematab.html"
target="_blank">sqlite_schema</a> (or sqlite_temp_schema) table and is
not fired by any subsequent INSERT, UPDATE or DELETE statements.

Note that triggers are automatically dropped when the associated table
is dropped.

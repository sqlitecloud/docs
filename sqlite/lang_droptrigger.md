---
title: DROP TRIGGER
description: DROP TRIGGER
statement: DROP TRIGGER IF EXISTS validate_artist_name;
---
!['script.js'](/public/docs/sqlite/script.js)



!['droptrigger.svg'](/public/docs/sqlite/_svg/droptrigger.svg)

<p>The DROP TRIGGER statement removes a trigger created by the 
<a href="lang_createtrigger">CREATE TRIGGER</a> statement. Once removed, the trigger definition is no
longer present in the <a href="https://www.sqlite.org/schematab.html" target="_blank">sqlite_schema</a> (or sqlite_temp_schema) table and is
not fired by any subsequent INSERT, UPDATE or DELETE statements.

<p>Note that triggers are automatically dropped when the associated table is
dropped.



---
title: DROP INDEX
description: The DROP INDEX statement removes an index added with the CREATE INDEX statement.
statement: DROP INDEX IF EXISTS ArtistNameIdx;
customClass: sqlite-doc
---

<!-- do-not-touch-svg-import: 'dropindex.svg' -->

The DROP INDEX statement removes an index added with the [CREATE
INDEX](lang_createindex) statement. The index is completely removed from
the disk. The only way to recover the index is to reenter the
appropriate [CREATE INDEX](lang_createindex) command.

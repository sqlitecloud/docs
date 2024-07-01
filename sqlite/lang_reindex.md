---
title: REINDEX
description: The REINDEX command is used to delete and recreate indices from scratch.
statement: REINDEX;
customClass: sqlite-doc
---

<!-- do-not-touch-svg-import: 'reindex.svg' -->

The REINDEX command is used to delete and recreate indices from scratch.
This is useful when the definition of a collation sequence has changed,
or when there are
<a href="https://www.sqlite.org/expridx.html" target="_blank">indexes on
expressions</a> involving a function whose definition has changed.

If the REINDEX keyword is not followed by a collation-sequence or
database object identifier, then all indices in all attached databases
are rebuilt.

If the REINDEX keyword is followed by a collation-sequence name, then
all indices in all attached databases that use the named collation
sequences are recreated.

Or, if the argument attached to the REINDEX identifies a specific
database table, then all indices attached to the database table are
rebuilt. If it identifies a specific database index, then just that
index is recreated.

For a command of the form "REINDEX *name*", a match against
<span class="yyterm">collation-name</span> takes precedence over a match
against <span class="yyterm">index-name</span> or
<span class="yyterm">table-name</span>. This ambiguity in the syntax may
be avoided by always specifying a
<span class="yyterm">schema-name</span> when reindexing a specific table
or index.

---
title: SQL Comment Syntax
description: SQL Comment Syntax
statement: /* This is a comment */
---
!['script.js'](/public/docs/sqlite/script.js)






!['comment.svg'](/public/docs/sqlite/_svg/comment.svg)


<p>Comments are not SQL commands, but can occur within the text of
SQL queries passed to <a href="https://www.sqlite.org/c3ref/prepare.html" target="_blank">sqlite3_prepare_v2()</a> and related interfaces.
Comments are treated as whitespace by the parser.
Comments can begin anywhere whitespace 
can be found, including inside expressions that span multiple lines.
</p>

<p>SQL comments begin with two consecutive "-" characters (ASCII 0x2d)
and extend up to and including the next newline character (ASCII 0x0a)
or until the end of input, whichever comes first.</p>

<p>C-style comments begin
with "/*" and extend up to and including the next "*/" character pair
or until the end of input, whichever comes first. C-style comments
can span multiple lines. </p>

<p>Comments can appear anywhere whitespace can occur,
including inside expressions and in the middle of other SQL statements.
Comments do not nest.
</p>



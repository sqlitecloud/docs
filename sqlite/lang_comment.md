---
title: SQL Comment Syntax
description: Comments are not SQL commands, but can occur within the text of SQL queries passed to sqlite3_prepare_v2() and related interfaces.
statement: /* This is a comment */
--- 

<!-- do-not-touch-svg-import: 'comment.svg' -->

Comments are not SQL commands, but can occur within the text of SQL
queries passed to <a href="https://www.sqlite.org/c3ref/prepare.html"
target="_blank">sqlite3_prepare_v2()</a> and related interfaces.
Comments are treated as whitespace by the parser. Comments can begin
anywhere whitespace can be found, including inside expressions that span
multiple lines.

SQL comments begin with two consecutive "-" characters (ASCII 0x2d) and
extend up to and including the next newline character (ASCII 0x0a) or
until the end of input, whichever comes first.

C-style comments begin with "/\*" and extend up to and including the
next "\*/" character pair or until the end of input, whichever comes
first. C-style comments can span multiple lines.

Comments can appear anywhere whitespace can occur, including inside
expressions and in the middle of other SQL statements. Comments do not
nest.

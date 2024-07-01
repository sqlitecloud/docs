---
customClass: sqlite-doc
title: EXPLAIN
description: An SQL statement can be preceded by the keyword "EXPLAIN" or by the phrase "EXPLAIN QUERY PLAN".
statement: EXPLAIN SELECT * FROM Artist;
---

## 1. Syntax

<!-- do-not-touch-svg-import: 'explain.svg' -->

## 2. Description

An SQL statement can be preceded by the keyword "EXPLAIN" or by the
phrase "EXPLAIN QUERY PLAN". Either modification causes the SQL
statement to behave as a query and to return information about how the
SQL statement would have operated if the EXPLAIN keyword or phrase had
been omitted.

The output from EXPLAIN and EXPLAIN QUERY PLAN is intended for
interactive analysis and troubleshooting only. The details of the output
format are subject to change from one release of SQLite to the next.
Applications should not use EXPLAIN or EXPLAIN QUERY PLAN since their
exact behavior is variable and only partially documented.

When the EXPLAIN keyword appears by itself it causes the statement to
behave as a query that returns the sequence of
<a href="https://www.sqlite.org/opcode.html" target="_blank">virtual
machine instructions</a> it would have used to execute the command had
the EXPLAIN keyword not been present. When the EXPLAIN QUERY PLAN phrase
appears, the statement returns high-level information regarding the
query plan that would have been used.

The EXPLAIN QUERY PLAN command is described in
<a href="https://www.sqlite.org/eqp.html" target="_blank">more detail
here</a>.

## 2.1. EXPLAIN operates at run-time, not at prepare-time

The EXPLAIN and EXPLAIN QUERY PLAN prefixes affect the behavior of
running a <a href="https://www.sqlite.org/c3ref/stmt.html"
target="_blank">prepared statement</a> using
<a href="https://www.sqlite.org/c3ref/step.html"
target="_blank">sqlite3_step()</a>. The process of generating a new
prepared statement using
<a href="https://www.sqlite.org/c3ref/prepare.html"
target="_blank">sqlite3_prepare()</a> or similar is (mostly) unaffected
by EXPLAIN. (The exception to the previous sentence is that some special
opcodes used by EXPLAIN QUERY PLAN are omitted when building an EXPLAIN
QUERY PLAN prepared statement, as a performance optimization.)

This means that actions that occur during sqlite3_prepare() are
unaffected by EXPLAIN.

- Some <a href="https://www.sqlite.org/pragma.html#syntax"
  target="_blank">PRAGMA</a> statements do their work during
  sqlite3_prepare() rather than during sqlite3_step(). Those PRAGMA
  statements are unaffected by EXPLAIN. They operate the same with or
  without the EXPLAIN prefix. The set of PRAGMA statements that are
  unaffected by EXPLAIN can vary from one release to the next. Some
  PRAGMA statements operate during sqlite3_prepare() depending on their
  arguments. For consistent results, avoid using EXPLAIN on PRAGMA
  statements.

- The <a href="https://www.sqlite.org/c3ref/set_authorizer.html"
  target="_blank">authorizer callback</a> is invoked regardless of the
  presence of EXPLAIN or EXPLAIN QUERY PLAN.

---
title: LIST KEYWORDS
description: The LIST KEYWORDS command returns a rowset that contains a list of SQLite reserved keywords
---

## Syntax

LIST KEYWORDS

## Privileges

```
READWRITE, DBADMIN
```

## Description

The LIST KEYWORDS command returns a rowset that contains a list of SQLite reserved keywords.

## Return

A [Rowset](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) with one **key** column that returns all the reserved SQLite keywords.

## Example

```bash
> LIST KEYWORDS
-------------------|
 key               |
-------------------|
 REINDEX           |
 INDEXED           |
 INDEX             |
 DESC              |
 ESCAPE            |
 EACH              |
 CHECK             |
 KEY               |
 BEFORE            |
 FOREIGN           |
 FOR               |
 IGNORE            |
 REGEXP            |
 EXPLAIN           |
 INSTEAD           |
 ADD               |
 DATABASE          |
 AS                |
 SELECT            |
 TABLE             |
 LEFT              |
 THEN              |
 END               |
 DEFERRABLE        |
 ELSE              |
 EXCLUDE           |
 DELETE            |
 TEMPORARY         |
 TEMP              |
 OR                |
 ISNULL            |
 NULLS             |
 SAVEPOINT         |
 INTERSECT         |
 TIES              |
 NOTNULL           |
 NOT               |
 NO                |
 NULL              |
 LIKE              |
 EXCEPT            |
 TRANSACTION       |
 ACTION            |
 ON                |
 NATURAL           |
 ALTER             |
 RAISE             |
 EXCLUSIVE         |
 EXISTS            |
 CONSTRAINT        |
 INTO              |
 OFFSET            |
 OF                |
 SET               |
 TRIGGER           |
 RANGE             |
 GENERATED         |
 DETACH            |
 HAVING            |
 GLOB              |
 BEGIN             |
 INNER             |
 REFERENCES        |
 UNIQUE            |
 QUERY             |
 WITHOUT           |
 WITH              |
 OUTER             |
 RELEASE           |
 ATTACH            |
 BETWEEN           |
 NOTHING           |
 GROUPS            |
 GROUP             |
 CASCADE           |
 ASC               |
 DEFAULT           |
 CASE              |
 COLLATE           |
 CREATE            |
 CURRENT_DATE      |
 IMMEDIATE         |
 JOIN              |
 INSERT            |
 MATCH             |
 PLAN              |
 ANALYZE           |
 PRAGMA            |
 MATERIALIZED      |
 DEFERRED          |
 DISTINCT          |
 IS                |
 UPDATE            |
 VALUES            |
 VIRTUAL           |
 ALWAYS            |
 WHEN              |
 WHERE             |
 RECURSIVE         |
 ABORT             |
 AFTER             |
 RENAME            |
 AND               |
 DROP              |
 PARTITION         |
 AUTOINCREMENT     |
 TO                |
 IN                |
 CAST              |
 COLUMN            |
 COMMIT            |
 CONFLICT          |
 CROSS             |
 CURRENT_TIMESTAMP |
 CURRENT_TIME      |
 CURRENT           |
 PRECEDING         |
 FAIL              |
 LAST              |
 FILTER            |
 REPLACE           |
 FIRST             |
 FOLLOWING         |
 FROM              |
 FULL              |
 LIMIT             |
 IF                |
 ORDER             |
 RESTRICT          |
 OTHERS            |
 OVER              |
 RETURNING         |
 RIGHT             |
 ROLLBACK          |
 ROWS              |
 ROW               |
 UNBOUNDED         |
 UNION             |
 USING             |
 VACUUM            |
 VIEW              |
 WINDOW            |
 DO                |
 BY                |
 INITIALLY         |
 ALL               |
 PRIMARY           |
-------------------|
```

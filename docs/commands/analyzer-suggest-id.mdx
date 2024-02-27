---
title: ANALYZER SUGGEST ID
description: The ANALYZER SUGGEST ID command analyzes a query_id and returns a suggestion about the optimal index to use to speed up that query
---

## Syntax

ANALYZER SUGGEST ID **query_id** [PERCENTAGE **percentage**] [APPLY] [NODE **nodeid**]

## Privileges

```
DBADMIN
```

## Description

The ANALYZER SUGGEST ID command analyzes a query_id and returns a suggestion about the optimal index to use to speed up that query.
The PERCENTAGE argument reduces the number of rows to analyze.
The APPLY argument writes the suggested index into the database automatically.
The NODE argument forces the execution of the command to a specific node of the cluster.

## Return

A [Rowset](https://github.com/sqlitecloud/sdk/blob/master/PROTOCOL.md) with the following columns:
* **statement**: reference to original statement (when multiple suggestions are returned)
* **type**: 1 means SQL, 2 means INDEX, 3 means PLAN and 4 means CANDIDATE
* **report**: sql or suggestion computed by the SQLite engine

## Example

```bash
> ANALYZER SUGGEST ID 57
----------|-------|----------------------------------------------------------------------------------------------------------------------------------------------|
statement | type  | report                                                                                                                                       |
----------|-------|----------------------------------------------------------------------------------------------------------------------------------------------|
0         |  1    | SELECT C.CUSTOMERID, SUM(I.TOTAL) FROM customers C JOIN invoices I ON C.CUSTOMERID = I.CUSTOMERID GROUP BY 1 ORDER BY 2 DESC;                |
0         |  2    | CREATE INDEX customers_idx_4f4310b6 ON customers(CustomerId DESC);                                                                           |
0         |  3    | SCAN C USING COVERING INDEX customers_idx_4f4310b6 SEARCH I USING INDEX IFK_InvoiceCustomerId (CustomerId=?) USE TEMP B-TREE FOR ORDER BY    |
0         |  4    | CREATE INDEX customers_idx_4f4310b6 ON customers(CustomerId DESC); -- stat1: 59 1                                                            |
----------|-------|----------------------------------------------------------------------------------------------------------------------------------------------|
```

## ANALYZER SUGGEST ID

### Syntax

ANALYZER SUGGEST ID **query_id** [PERCENTAGE **percentage**] [APPLY] [NODE **nodeid**]

### Privileges

```
DBADMIN
```

### Description

The ANALYZER SUGGEST ID command is used to analyze a query_id and return a suggestion about the optimal index to use to speed-up that query.
To reduce the rows to analyze, the PERCENTAGE argument can be used.
If the APPLY argument is used then the suggested index is automatically written into the database.
The NODE argument can be used to force the execution of this command to a specific node of the cluster.

### Return

A rowset with the following columns: `statement`, `type`, `report`.

### Example

```bash
statement | type  | report
----------|-------|----------------------------------------------------------------------------------------------------------------------------------------------|
0         |  1    | SELECT C.CUSTOMERID, SUM(I.TOTAL) FROM customers C JOIN invoices I ON C.CUSTOMERID = I.CUSTOMERID GROUP BY 1 ORDER BY 2 DESC;                |
0         |  2    | CREATE INDEX customers_idx_4f4310b6 ON customers(CustomerId DESC);                                                                           |
0         |  3    | SCAN C USING COVERING INDEX customers_idx_4f4310b6 SEARCH I USING INDEX IFK_InvoiceCustomerId (CustomerId=?) USE TEMP B-TREE FOR ORDER BY    |
0         |  4    | CREATE INDEX customers_idx_4f4310b6 ON customers(CustomerId DESC); -- stat1: 59 1                                                            |
----------|-------|----------------------------------------------------------------------------------------------------------------------------------------------|
```

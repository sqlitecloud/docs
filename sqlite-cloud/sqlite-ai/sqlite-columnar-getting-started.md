---
title: "SQLite-Columnar Getting Started"
description: "Query SQLite-Columnar virtual tables for embedded analytics."
category: platform
status: publish
slug: sqlite-columnar-getting-started
---

## Getting Started

```sql
CREATE VIRTUAL TABLE sales USING columnar(
  id INTEGER,
  region TEXT,
  amount REAL
);

INSERT INTO sales VALUES
  (1, 'north', 10.0),
  (2, 'north', 20.0),
  (3, 'south', 5.0);

SELECT columnar_analyze('sales');
SELECT columnar_sum('sales', 'amount');

SELECT k, "sum", "avg", "count"
  FROM columnar_group_sum_avg_count('sales', 'region', 'amount')
 ORDER BY k;
```

See [API.md](/docs/sqlite-columnar-api-reference) for the complete SQL API reference with examples for every
function and table-valued helper.


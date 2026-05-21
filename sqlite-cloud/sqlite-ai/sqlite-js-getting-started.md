---
title: "SQLite-JS Getting Started"
description: "Create custom SQLite functions with JavaScript from SQL."
category: platform
status: publish
slug: sqlite-js-getting-started
---

## Getting Started

SQLite-JS lets you define scalar, aggregate, window, and collation functions directly from SQL.

### Scalar Function

```sql
SELECT js_create_scalar('get_domain', '(function(args) {
  const email = args[0];
  return email.split("@")[1] || null;
})');

SELECT email, get_domain(email) AS domain
FROM users;
```

### Aggregate Function

```sql
SELECT js_create_aggregate('stddev',
  'sum = 0; sumSq = 0; count = 0;',
  '(function(args) {
    const val = args[0];
    sum += val;
    sumSq += val * val;
    count++;
  })',
  '(function() {
    if (count < 2) return null;
    const variance = (sumSq - (sum * sum) / count) / (count - 1);
    return Math.sqrt(variance);
  })'
);

SELECT department, stddev(salary)
FROM employees
GROUP BY department;
```

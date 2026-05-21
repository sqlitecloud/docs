---
title: "SQLite-JS Examples"
description: "SQLite-JS examples for custom SQL logic written in JavaScript."
category: platform
status: publish
slug: sqlite-js-examples
---

## Examples

### Example 1: String Manipulation

```sql
-- Create a function to extract domain from email
SELECT js_create_scalar('get_domain', '(function(args) {
  const email = args[0];
  return email.split("@")[1] || null;
})');

-- Use it in a query
SELECT email, get_domain(email) AS domain FROM users;
```

### Example 2: Statistical Aggregation

```sql
-- Create a function to calculate standard deviation
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

-- Use it in a query
SELECT department, stddev(salary) FROM employees GROUP BY department;
```

### Example 3: Custom Window Function

```sql
-- Create a window function to calculate percentile within a window
SELECT js_create_window('percentile_rank',
  'values = [];',
  
  '(function(args) {
    values.push(args[0]);
  })',
  
  '(function() {
    values.sort((a, b) => a - b);
  })',
  
  '(function() {
    const current = values[values.length - 1];
    const rank = values.indexOf(current);
    return (rank / (values.length - 1)) * 100;
  })',
  
  '(function(args) {
    const index = values.indexOf(args[0]);
    if (index !== -1) {
      values.splice(index, 1);
    }
  })'
);

-- Use it in a query
SELECT name, score, 
       percentile_rank(score) OVER (ORDER BY score) 
FROM exam_results;
```

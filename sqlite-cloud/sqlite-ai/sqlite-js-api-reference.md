---
title: "SQLite-JS API Reference"
description: "Reference for SQLite-JS scalar, aggregate, window, collation, eval, utility, and update functions."
category: platform
status: publish
slug: sqlite-js-api-reference
---

## Functions Overview

SQLite-JS provides several ways to extend SQLite functionality with JavaScript:

| Function Type | Description |
|---------------|-------------|
| Scalar Functions | Process individual rows and return a single value |
| Aggregate Functions | Process multiple rows and return a single aggregated result |
| Window Functions | Similar to aggregates but can access the full dataset |
| Collation Sequences | Define custom sort orders for text values |
| JavaScript Evaluation | Directly evaluate JavaScript code within SQLite |

## Scalar Functions

Scalar functions process one row at a time and return a single value. They are useful for data transformation, calculations, text manipulation, etc.

### Usage

```sql
SELECT js_create_scalar('function_name', 'function_code');
```

### Parameters

- **function_name**: The name of your custom function (see [Function Naming Rules](#function-naming-rules))
- **function_code**: JavaScript code that defines your function. Must be in the form `function(args) { /* your code here */ }`

### Example

```sql
-- Create a custom function to calculate age from birth date
SELECT js_create_scalar('age', '(function(args) {
  const birthDate = new Date(args[0]);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
})');

-- Use the function
SELECT name, age(birth_date) FROM people;
```

## Aggregate Functions

Aggregate functions process multiple rows and compute a single result. Examples include SUM, AVG, and COUNT in standard SQL.

### Usage

```sql
SELECT js_create_aggregate('function_name', 'init_code', 'step_code', 'final_code');
```

### Parameters

- **function_name**: The name of your custom aggregate function (see [Function Naming Rules](#function-naming-rules))
- **init_code**: JavaScript code that initializes variables for the aggregation
- **step_code**: JavaScript code that processes each row. Must be in the form `function(args) { /* your code here */ }`
- **final_code**: JavaScript code that computes the final result. Must be in the form `function() { /* your code here */ }`

### Example

```sql
-- Create a median function
SELECT js_create_aggregate('median', 
  -- Init code: initialize an array to store values
  'values = [];',
  
  -- Step code: collect values from each row
  '(function(args) {
    values.push(args[0]);
  })',
  
  -- Final code: calculate the median
  '(function() {
    values.sort((a, b) => a - b);
    const mid = Math.floor(values.length / 2);
    if (values.length % 2 === 0) {
      return (values[mid-1] + values[mid]) / 2;
    } else {
      return values[mid];
    }
  })'
);

-- Use the function
SELECT median(salary) FROM employees;
```

## Window Functions

Window functions, like aggregate functions, operate on a set of rows. However, they can access all rows in the current window without collapsing them into a single output row.

### Usage

```sql
SELECT js_create_window('function_name', 'init_code', 'step_code', 'final_code', 'value_code', 'inverse_code');
```

### Parameters

- **function_name**: The name of your custom window function (see [Function Naming Rules](#function-naming-rules))
- **init_code**: JavaScript code that initializes variables
- **step_code**: JavaScript code that processes each row. Must be in the form `function(args) { /* your code here */ }`
- **final_code**: JavaScript code that computes the final result. Must be in the form `function() { /* your code here */ }`
- **value_code**: JavaScript code that returns the current value. Must be in the form `function() { /* your code here */ }`
- **inverse_code**: JavaScript code that removes a row from the current window. Must be in the form `function(args) { /* your code here */ }`

### Example

```sql
-- Create a moving average window function
SELECT js_create_window('moving_avg',
  -- Init code
  'sum = 0; count = 0;',
  
  -- Step code: process each row
  '(function(args) {
    sum += args[0];
    count++;
  })',
  
  -- Final code: not needed for this example
  '(function() { })',
  
  -- Value code: return current average
  '(function() {
    return count > 0 ? sum / count : null;
  })',
  
  -- Inverse code: remove a value from the window
  '(function(args) {
    sum -= args[0];
    count--;
  })'
);

-- Use the function
SELECT id, value, moving_avg(value) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) 
FROM measurements;
```

## Collation Sequences

Collation sequences determine how text values are compared and sorted in SQLite. Custom collations enable advanced sorting capabilities like natural sorting, locale-specific sorting, etc.

### Usage

```sql
SELECT js_create_collation('collation_name', 'collation_function');
```

### Parameters

- **collation_name**: The name of your custom collation (see [Function Naming Rules](#function-naming-rules))
- **collation_function**: JavaScript code that compares two strings. Must return a negative number if the first string is less than the second, zero if they are equal, or a positive number if the first string is greater than the second.

### Example

```sql
-- Create a case-insensitive natural sort collation
SELECT js_create_collation('natural_nocase', '(function(a, b) {
  // Extract numbers for natural comparison
  const splitA = a.toLowerCase().split(/(\d+)/);
  const splitB = b.toLowerCase().split(/(\d+)/);
  
  for (let i = 0; i < Math.min(splitA.length, splitB.length); i++) {
    if (splitA[i] !== splitB[i]) {
      if (!isNaN(splitA[i]) && !isNaN(splitB[i])) {
        return parseInt(splitA[i]) - parseInt(splitB[i]);
      }
      return splitA[i].localeCompare(splitB[i]);
    }
  }
  return splitA.length - splitB.length;
})');

-- Use the collation
SELECT * FROM files ORDER BY name COLLATE natural_nocase;
```

## Syncing Across Devices

When used with [sqlite-sync](https://github.com/sqliteai/sqlite-sync/), user-defined functions created via sqlite-js are automatically replicated across the SQLite Cloud cluster, ensuring that all connected peers share the same logic and behavior — even offline. To enable automatic persistence and sync the special `js_init_table` function must be executed.

### Usage
```sql
SELECT js_init_table();         -- Create table if needed (no loading)
SELECT js_init_table(1);        -- Create table and load all stored functions
```

## JavaScript Evaluation

The extension also provides a way to directly evaluate JavaScript code within SQLite queries.

### Usage

```sql
SELECT js_eval('javascript_code');
```

### Parameters

- **javascript_code**: Any valid JavaScript code to evaluate

### Example

```sql
-- Perform a calculation
SELECT js_eval('Math.PI * Math.pow(5, 2)');

-- Format a date
SELECT js_eval('new Date(1629381600000).toLocaleDateString()');
```

## Utility Functions

### js_version

Returns the extension version string, or the internal QuickJS engine version when called with an argument.

```sql
SELECT js_version();      -- Returns the SQLite-JS version (e.g. '1.3.0')
SELECT js_version(1);     -- Returns the QuickJS engine version
```

### js_load_text / js_load_blob

Load file contents into SQLite — as text or as a blob.

```sql
SELECT js_load_text('/path/to/file.txt');   -- Returns file contents as text
SELECT js_load_blob('/path/to/file.bin');   -- Returns file contents as a blob
```

### js_set_max_stack_size

Configures the maximum stack size (in bytes) for the JavaScript engine.

```sql
SELECT js_set_max_stack_size(1048576);  -- Set max stack size to 1 MB
```

## Update Functions

Due to a constraint in [SQLite](https://www3.sqlite.org/src/info/cabab62bc10568d4), it is not possible to update or redefine a user-defined function using the same database connection that was used to initially register it. To modify an existing JavaScript function, the update must be performed through a separate database connection.

## Function Naming Rules

Function names must comply with SQLite identifier rules and must be unique within the database and its schema.

### Unquoted Identifiers
These must follow typical SQL naming conventions:
- Must begin with a letter (A-Z or a-z) or an underscore `_`
- May contain letters, digits (0-9), and underscores `_`
- Are case-insensitive
- Cannot match a reserved keyword unless quoted

**Examples:**
- Valid: `identifier1`, `_temp`, `user_name`
- Invalid: `123abc`, `select`, `identifier-name`

### Quoted Identifiers
SQLite supports delimited identifiers, which allow almost any character, as long as the identifier is properly quoted.

You can use:
- Double quotes: `"identifier name"`
- Square brackets (Microsoft-style): `[identifier name]`
- Backticks (MySQL-style): `` `identifier name` ``

These quoting styles are interchangeable in SQLite. Inside a quoted identifier, you can include:
- Spaces: `"my column"`
- Special characters: `"name@domain"`, `"price€"`, `"weird!name"`
- Reserved SQL keywords: `"select"`, `"group"`

Quoted identifiers are case-sensitive.

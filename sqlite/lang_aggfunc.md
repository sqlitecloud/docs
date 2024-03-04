---
title: Built-in Aggregate Functions
description: Built-in Aggregate Functions
statement: SELECT COUNT(*) FROM Artist;
---

## 1. Syntax

<!-- do-not-touch-svg-import: 'aggfunc.svg' -->

The aggregate functions shown below are available by default. There are
two more aggregates grouped with the
<a href="https://www.sqlite.org/json1.html" target="_blank">JSON SQL
functions</a>. Applications can define custom aggregate functions using
the <a href="https://www.sqlite.org/c3ref/create_function.html"
target="_blank">sqlite3_create_function()</a> interface. API.

In any aggregate function that takes a single argument, that argument
can be preceded by the keyword DISTINCT. In such cases, duplicate
elements are filtered before being passed into the aggregate function.
For example, the function "count(distinct X)" will return the number of
distinct values of column X instead of the total number of non-null
values in column X.

<span id="aggfilter"></span>

If a FILTER clause is provided, then only rows for which the *expr* is
true are included in the aggregate.

<span id="aggorderby"></span>

If an ORDER BY clause is provided, that clause determines the order in
which the inputs to the aggregate are processed. For aggregate functions
like max() and count(), the input order does not matter. But for things
like [string_agg()](lang_aggfunc#group_concat) and
<a href="https://www.sqlite.org/json1.html#jgroupobject"
target="_blank">json_group_object()</a>, the ORDER BY clause will make a
difference in the result. If no ORDER BY clause is specified, the inputs
to the aggregate occur in an arbitrary order that might change from one
invocation to the next.

See also: [scalar functions](lang_corefunc) and
<a href="https://www.sqlite.org/windowfunctions.html"
target="_blank">window functions</a>. <span id="aggfunclist"></span>

## 2. List of built-in aggregate functions

<div class="columns">

- [avg(X)](lang_aggfunc.html#avg)
- [count(\*)](lang_aggfunc.html#count)
- [count(X)](lang_aggfunc.html#count)
- [group_concat(X)](lang_aggfunc.html#group_concat)
- [group_concat(X,Y)](lang_aggfunc.html#group_concat)
- [max(X)](lang_aggfunc.html#max_agg)
- [min(X)](lang_aggfunc.html#min_agg)
- [string_agg(X,Y)](lang_aggfunc.html#group_concat)
- [sum(X)](lang_aggfunc.html#sumunc)
- [total(X)](lang_aggfunc.html#sumunc)

</div>

## 3. Descriptions of built-in aggregate functions

<span id="avg"></span>

**avg(*X*)**

The avg() function returns the average value of all non-NULL *X* within
a group. String and BLOB values that do not look like numbers are
interpreted as 0. The result of avg() is always a floating point value
whenever there is at least one non-NULL input even if all inputs are
integers. The result of avg() is NULL if there are no non-NULL inputs.
The result of avg() is computed as
[total()](lang_aggfunc#sumunc)/[count()](lang_aggfunc#count) so all of
the constraints that apply to [total()](lang_aggfunc#sumunc) also apply
to avg().

<span id="count"></span>

**count(*X*)  
count(\*)**

The count(X) function returns a count of the number of times that *X* is
not NULL in a group. The count(\*) function (with no arguments) returns
the total number of rows in the group.

<span id="group_concat"></span>

**group_concat(*X*)  
group_concat(*X*,*Y*)  
string_agg(*X*,*Y*)**

The group_concat() function returns a string which is the concatenation
of all non-NULL values of *X*. If parameter *Y* is present then it is
used as the separator between instances of *X*.A comma (",") is used as
the separator if *Y* is omitted.

The string_agg(X,Y) function is an alias for group_concat(X,Y).
String_agg() is compatible with PostgreSQL and SQL-Server and
group_concat() is compatible with MySQL.

The order of the concatenated elements is arbitrary unless an ORDER BY
argument is included immediately after the last parameter.

<span id="max_agg"></span>

**max(*X*)**

The max() aggregate function returns the maximum value of all values in
the group. The maximum value is the value that would be returned last in
an ORDER BY on the same column. Aggregate max() returns NULL if and only
if there are no non-NULL values in the group.

<span id="min_agg"></span>

**min(*X*)**

The min() aggregate function returns the minimum non-NULL value of all
values in the group. The minimum value is the first non-NULL value that
would appear in an ORDER BY of the column. Aggregate min() returns NULL
if and only if there are no non-NULL values in the group.

<span id="sumunc"></span>

**sum(*X*)  
total(*X*)**

The sum() and total() aggregate functions return the sum of all non-NULL
values in the group. If there are no non-NULL input rows then sum()
returns NULL but total() returns 0.0. NULL is not normally a helpful
result for the sum of no rows but the SQL standard requires it and most
other SQL database engines implement sum() that way so SQLite does it in
the same way in order to be compatible.The non-standard total() function
is provided as a convenient way to work around this design problem in
the SQL language.

The result of total() is always a floating point value. The result of
sum() is an integer value if all non-NULL inputs are integers. If any
input to sum() is neither an integer nor a NULL, then sum() returns a
floating point value which is an approximation of the mathematical sum.

Sum() will throw an "integer overflow" exception if all inputs are
integers or NULL and an integer overflow occurs at any point during the
computation. No overflow error is ever raised if any prior input was a
floating point value. Total() never throws an integer overflow.

When summing floating-point values, if the magnitudes of the values
differ wildly then the resulting sum might be imprecise due to the fact
that <a href="https://www.sqlite.org/floatingpoint.html#fpapprox"
target="_blank">IEEE 754 floating point values are approximations</a>.
Use the decimal_sum(X) aggregate in the
<a href="https://www.sqlite.org/floatingpoint.html#decext"
target="_blank">decimal extension</a> to obtain an exact summation of
floating point numbers. Consider this test case:

>     CREATE TABLE t1(x REAL);
>     INSERT INTO t1 VALUES(1.55e+308),(1.23),(3.2e-16),(-1.23),(-1.55e308);
>     SELECT sum(x), decimal_sum(x) FROM t1;

The large values ±1.55e+308 cancel each other out, but the cancellation
does not occur until the end of the sum and in the meantime the large
+1.55e+308 swamps the tiny 3.2e-16 value. The end result is an imprecise
result for the sum(). The decimal_sum() aggregate generates an exact
answer, at the cost of additional CPU and memory usage. Note also that
decimal_sum() is not built into the SQLite core; it is a
<a href="https://www.sqlite.org/loadext.html" target="_blank">loadable
extension</a>.

If sum of inputs is too large to represent as a IEEE 754 floating point
value, then a +Infinity or -Infinity result may be returned. If very
large values with differing signs are used such that the SUM() or
TOTAL() function is unable to determine if the correct result is
+Infinity or -Infinity or some other value in between, then the result
is NULL. Hence, for example, the following query returns NULL:

>     WITH t1(x) AS (VALUES(1.0),(-9e+999),(2.0),(+9e+999),(3.0))
>      SELECT sum(x) FROM t1;

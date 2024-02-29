---
title: Built-in Aggregate Functions
description: Built-in Aggregate Functions
statement: SELECT COUNT(*) FROM Artist;
---







<h2 id="syntax"><span>1. </span>Syntax</h2>

<!-- do-not-touch-svg-import: 'aggfunc.svg' -->


<p>
The aggregate functions shown below are available by default. 
There are two more aggregates grouped with the <a href="https://www.sqlite.org/json1.html" target="_blank">JSON SQL functions</a>.
Applications can define custom aggregate functions using the
<a href="https://www.sqlite.org/c3ref/create_function.html" target="_blank">sqlite3_create_function()</a> interface.
API.</p>

<p>
In any aggregate function that takes a single argument, that argument
can be preceded by the keyword DISTINCT. In such cases, duplicate
elements are filtered before being passed into the aggregate function.
For example, the function "count(distinct X)" will return the number
of distinct values of column X instead of the total number of non-null
values in column X.
</p>

<a name="aggfilter"></a>

<p>
If a FILTER clause is provided, then only rows for which the <i>expr</i> is
true are included in the aggregate.
</p>

<a name="aggorderby"></a>

<p>
If an ORDER BY clause is provided, that clause determines the order in which
the inputs to the aggregate are processed. For aggregate functions like max()
and count(), the input order does not matter. But for things like
<a href="lang_aggfunc#group_concat">string_agg()</a> and <a href="https://www.sqlite.org/json1.html#jgroupobject" target="_blank">json_group_object()</a>, the ORDER BY clause will make a
difference in the result. If no ORDER BY clause is specified, the inputs to the
aggregate occur in an arbitrary order that might change from one invocation
to the next.
</p>

<p>
See also: <a href="lang_corefunc">scalar functions</a> and <a href="https://www.sqlite.org/windowfunctions.html" target="_blank">window functions</a>.

<a name="aggfunclist"></a>

</p><h2 id="list_of_built_in_aggregate_functions"><span>2. </span>List of built-in aggregate functions</h2>

<div class='columns' >
<ul style='padding-top:0;'>
<li><a href='lang_aggfunc.html#avg'>avg(X)</a></li>
<li><a href='lang_aggfunc.html#count'>count(*)</a></li>
<li><a href='lang_aggfunc.html#count'>count(X)</a></li>
<li><a href='lang_aggfunc.html#group_concat'>group_concat(X)</a></li>
<li><a href='lang_aggfunc.html#group_concat'>group_concat(X,Y)</a></li>
<li><a href='lang_aggfunc.html#max_agg'>max(X)</a></li>
<li><a href='lang_aggfunc.html#min_agg'>min(X)</a></li>
<li><a href='lang_aggfunc.html#group_concat'>string_agg(X,Y)</a></li>
<li><a href='lang_aggfunc.html#sumunc'>sum(X)</a></li>
<li><a href='lang_aggfunc.html#sumunc'>total(X)</a></li>
</ul>
</div>


<h2 id="descriptions_of_built_in_aggregate_functions"><span>3. </span>Descriptions of built-in aggregate functions</h2>
<dl>

<a name="avg"></a>
<dt><p><b>avg(<i>X</i>)</b></dt><dd><p>
The avg() function
returns the average value of all non-NULL <i>X</i> within a
group. String and BLOB values that do not look like numbers are
interpreted as 0.
The result of avg() is always a floating point value whenever
there is at least one non-NULL input even if all
inputs are integers. The result of avg() is NULL if
there are no non-NULL inputs. The result of avg() is computed
as <a href="lang_aggfunc#sumunc">total()</a>/<a href="lang_aggfunc#count">count()</a> so all of the constraints that apply to
<a href="lang_aggfunc#sumunc">total()</a> also apply to avg().
</dd>
<a name="count"></a>
<dt><p><b>count(<i>X</i>)<br />count(*)</b></dt><dd><p>
The count(X) function returns
a count of the number of times
that <i>X</i> is not NULL in a group. The count(*) function
(with no arguments) returns the total number of rows in the group.
</dd>
<a name="group_concat"></a>
<dt><p><b>group_concat(<i>X</i>)<br />group_concat(<i>X</i>,<i>Y</i>)<br />string_agg(<i>X</i>,<i>Y</i>)</b></dt><dd><p>
The group_concat() function returns
a string which is the concatenation of
all non-NULL values of <i>X</i>. If parameter <i>Y</i> is present then
it is used as the separator
between instances of <i>X</i>.A comma (",") is used as the separator
if <i>Y</i> is omitted.
<p>
The string_agg(X,Y) function is an alias
for group_concat(X,Y). String_agg() is compatible with PostgreSQL
and SQL-Server and group_concat() is compatible with MySQL.
<p>
The order of the concatenated elements is arbitrary unless an
ORDER BY argument is included immediately after the last parameter.
</dd>
<a name="max_agg"></a>
<dt><p><b>max(<i>X</i>)</b></dt><dd><p>
The max() aggregate function
returns the maximum value of all values in the group.
The maximum value is the value that would be returned last in an
ORDER BY on the same column. Aggregate max() returns NULL 
if and only if there are no non-NULL values in the group.
</dd>
<a name="min_agg"></a>
<dt><p><b>min(<i>X</i>)</b></dt><dd><p>
The min() aggregate function
returns the minimum non-NULL value of all values in the group.
The minimum value is the first non-NULL value that would appear
in an ORDER BY of the column.
Aggregate min() returns NULL if and only if there are no non-NULL
values in the group.
</dd>
<a name="sumunc"></a>
<dt><p><b>sum(<i>X</i>)<br />total(<i>X</i>)</b></dt><dd><p>
The sum() and total() aggregate functions
return the sum of all non-NULL values in the group.
If there are no non-NULL input rows then sum() returns
NULL but total() returns 0.0.
NULL is not normally a helpful result for the sum of no rows
but the SQL standard requires it and most other
SQL database engines implement sum() that way so SQLite does it in the
same way in order to be compatible.The non-standard total() function
is provided as a convenient way to work around this design problem
in the SQL language.</p>

<p>The result of total() is always a floating point value.
The result of sum() is an integer value if all non-NULL inputs are integers.
If any input to sum() is neither an integer nor a NULL,
then sum() returns a floating point value
which is an approximation of the mathematical sum.</p>

<p>Sum() will throw an "integer overflow" exception if all inputs
are integers or NULL
and an integer overflow occurs at any point during the computation.
No overflow error is ever raised if any prior input was a floating point
value.
Total() never throws an integer overflow.

<p>When summing floating-point values, if the magnitudes of the values
differ wildly then the resulting sum might be imprecise due to the fact that
<a href="https://www.sqlite.org/floatingpoint.html#fpapprox" target="_blank">IEEE 754 floating point values are approximations</a>.
Use the decimal_sum(X) aggregate in the <a href="https://www.sqlite.org/floatingpoint.html#decext" target="_blank">decimal extension</a> to obtain
an exact summation of floating point numbers. Consider this test case:

<p><blockquote><pre>
CREATE TABLE t1(x REAL);
INSERT INTO t1 VALUES(1.55e+308),(1.23),(3.2e-16),(-1.23),(-1.55e308);
SELECT sum(x), decimal_sum(x) FROM t1;
</pre></blockquote></p>

<p>The large values &plusmn;1.55e+308 cancel each other out, but the
cancellation does not occur until the end of the sum and in the meantime
the large +1.55e+308 swamps the tiny 3.2e-16 value. The end result is
an imprecise result for the sum(). The decimal_sum() aggregate
generates an exact answer, at the cost of additional CPU and memory usage.
Note also that decimal_sum() is not built into the SQLite core; it is a
<a href="https://www.sqlite.org/loadext.html" target="_blank">loadable extension</a>.

<p>If sum of inputs is too large to represent as a IEEE 754 floating
point value, then a +Infinity or -Infinity result may be returned.
If very large values with differing signs are used
such that the SUM() or TOTAL() function is
unable to determine if the correct result is +Infinity or -Infinity
or some other value in between, then the result is NULL. Hence, for
example, the following query returns NULL:

<p><blockquote><pre>
WITH t1(x) AS (VALUES(1.0),(-9e+999),(2.0),(+9e+999),(3.0))
 SELECT sum(x) FROM t1;
</pre></blockquote></p>
</dd>

</dl>



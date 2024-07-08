---
title: SQL Language Expressions
description: SQLite understands various operators, listed in this page of the SQLite Cloud Docs.
statement: SELECT (10 * (5 + 2) / 15) AS result;
customClass: sqlite-doc
category: reference
status: publish
---

## 1. Syntax

<!-- do-not-touch-svg-import: 'expr.svg' -->

## 2. Operators, and Parse-Affecting Attributes

SQLite understands these operators, listed in precedence<sup>1</sup>
order  
(top to bottom / highest to lowest):

<div class="small-table">

| Operators<sup>2</sup> |
| --- |
| ~ [expr]    + [expr]    - [expr] |
| [expr] COLLATE (collation-name) 3 |
| ||   ->   ->> |
| *   /   % |
| +   - |
| &  |   <<  >> |
| [expr] ESCAPE [escape-character-expr] 4 |
| <  >  <=  >= |
| =  ==  <>  !=  IS   IS NOT IS DISTINCT FROM   IS NOT DISTINCT FROM [expr] BETWEEN5 [expr] AND [expr]  IN5  MATCH5  LIKE5  REGEXP5  GLOB5 [expr] ISNULL  [expr] NOTNULL   [expr] NOT NULL  |
| NOT [expr] |
| AND |
| OR |

</div>

1.  Operators shown within the same table cell share precedence.  
2.  "<span class="small">\[expr\]</span>" denotes operand locations for
    non-binary operators.  
      Operators with no "\[expr\]" adjunct are binary and
    left-associative.  
3.  The COLLATE clause (with its collation-name) acts as a single
    postfix operator.  
4.  The ESCAPE clause (with its escape character) acts as a single
    postfix operator.  
      It can only bind to a preceding \[expr\] LIKE \[expr\]
    expression.  
5.  Each keyword in (BETWEEN IN GLOB LIKE MATCH REGEXP) may be
    prefixed  
      by NOT, retaining the bare operator's precedence and
    associativity.

<span id="collateop"></span>

The COLLATE operator is a unary postfix operator that assigns a
<a href="https://www.sqlite.org/datatype3.html#collation"
target="_blank">collating sequence</a> to an expression. The collating
sequence set by the COLLATE operator overrides the collating sequence
determined by the COLLATE clause in a table [column
definition](lang_createtable#tablecoldef). See the
<a href="https://www.sqlite.org/datatype3.html#collation"
target="_blank">detailed discussion on collating sequences</a> in the
<a href="https://www.sqlite.org/datatype3.html" target="_blank">Datatype
In SQLite3</a> document for additional information.

The unary operator + is a no-op. It can be applied to strings, numbers,
blobs or NULL and it always returns a result with the same value as the
operand.

Note that there are two variations of the equals and not equals
operators. Equals can be either = or ==. The not-equal operator can be
either != or \<\>. The \|\| operator is "concatenate" - it joins
together the two strings of its operands. The -\> and -\>\> operators
are "extract"; they extract the RHS component from the LHS. For an
example, see
<a href="https://www.sqlite.org/json1.html#jptr" target="_blank">JSON
subcomponent extraction</a>.

The % operator [casts](lang_expr#castexpr) both of its operands to type
INTEGER and then computes the remainder after dividing the left integer
by the right integer. The other arithmetic operators perform integer
arithmetic if both operands are integers and no overflow would result,
or floating point arithmetic, per IEEE Standard 754, if either operand
is a real value or integer arithmetic would produce an overflow. Integer
divide yields an integer result, truncated toward zero.

The result of any binary operator is either a numeric value or NULL,
except for the \|\| concatenation operator, and the -\> and -\>\>
extract operators which evaluate to either NULL or a text value.

All operators generally evaluate to NULL when any operand is NULL, with
specific exceptions as stated below. This is in accordance with the
SQL92 standard.

When paired with NULL:  
  AND evaluates to 0 (false) when the other operand is false; and  
  OR evaluates to 1 (true) when the other operand is true.

<span id="isisnot"></span>

The IS and IS NOT operators work like = and != except when one or both
of the operands are NULL. In this case, if both operands are NULL, then
the IS operator evaluates to 1 (true) and the IS NOT operator evaluates
to 0 (false). If one operand is NULL and the other is not, then the IS
operator evaluates to 0 (false) and the IS NOT operator is 1 (true). It
is not possible for an IS or IS NOT expression to evaluate to NULL.
<span id="isdf"></span>

The IS NOT DISTINCT FROM operator is an alternative spelling for the IS
operator. Likewise, the IS DISTINCT FROM operator means the same thing
as IS NOT. Standard SQL does not support the compact IS and IS NOT
notation. Those compact forms are an SQLite extension. You have to use
the prolix and much less readable IS NOT DISTINCT FROM and IS DISTINCT
FROM operators on other SQL database engines.
<span id="litvalue"></span>

## 3. Literal Values (Constants)

A literal value represents a constant. Literal values may be integers,
floating point numbers, strings, BLOBs, or NULLs.

The syntax for integer and floating point literals (collectively
"numeric literals") is shown by the following diagram:

<!-- do-not-touch-svg-import: 'expr2.svg' -->

If a numeric literal has a decimal point or an exponentiation clause or
if it is less than -9223372036854775808 or greater than
9223372036854775807, then it is a floating point literal. Otherwise is
it is aninteger literal. The "E" character that begins the
exponentiation clause of a floating point literal can be either upper or
lower case. The "." character is always used as the decimal point even
if the locale setting specifies "," for this role - the use of "," for
the decimal point would result in syntactic ambiguity.
<span id="hexint"></span>

Hexadecimal integer literals follow the C-language notation of "0x" or
"0X" followed by hexadecimal digits. For example, 0x1234 means the same
as 4660 and 0x8000000000000000 means the same as -9223372036854775808.
Hexadecimal integer literals are interpreted as 64-bit two's-complement
integers and are thus limited to sixteen significant digits of
precision. Support for hexadecimal integers was added to SQLite version
3.8.6 (2014-08-15). For backwards compatibility, the "0x" hexadecimal
integer notation is only understood by the SQL language parser, not by
the type conversions routines. String variables that contain text
formatted like hexadecimal integers are not interpreted as hexadecimal
integers when coercing the string value into an integer due to a [CAST
expression](lang_expr#castexpr) or for a
<a href="https://www.sqlite.org/datatype3.html#affinity"
target="_blank">column affinity</a> transformation or prior to
performing a numeric operation or for any other run-time conversions.
When coercing a string value in the format of a hexadecimal integer into
an integer value, the conversion process stops when the 'x' character is
seen so the resulting integer value is always zero. SQLite only
understands the hexadecimal integer notation when it appears in the SQL statement 
text, not when it appears as part of the content of the database.

A string constant is formed by enclosing the string in single quotes
('). A single quote within the string can be encoded by putting two
single quotes in a row - as in Pascal. C-style escapes using the
backslash character are not supported because they are not standard SQL.

BLOB literals are string literals containing hexadecimal data and
preceded by a single "x" or "X" character. Example: X'53514C697465'

A literal value can also be the token "NULL".

<span id="varparam"></span>

## 4. Parameters

A "variable" or "parameter" token specifies a placeholder in the
expression for a value that is filled in at runtime using the
<a href="https://www.sqlite.org/c3ref/bind_blob.html"
target="_blank">sqlite3_bind()</a> family of C/C++ interfaces.
Parameters can take several forms:

> |                 |     |
> |-----------------|-----|
> |<div style="width:45px"></div>   **?**_NNN_ | A question mark followed by a number *NNN* holds a spot for the NNN-th parameter. NNN must be between 1 and <a href="https://www.sqlite.org/limits.html#max_variable_number" target="_blank">SQLITE_MAX_VARIABLE_NUMBER</a>.                   |
> |   **?** | A question mark that is not followed by a number creates a parameter with a number one greater than the largest parameter number already assigned. If this means the parameter number is greater than <a href="https://www.sqlite.org/limits.html#max_variable_number" target="_blank">SQLITE_MAX_VARIABLE_NUMBER</a>, it is an error. This parameter format is provided for compatibility with other database engines. But because it is easy to miscount the question marks, the use of this parameter format is discouraged. Programmers are encouraged to use one of the symbolic formats below or the ?NNN format above instead.              |
> |  **:**_AAAA_ | A colon followed by an identifier name holds a spot for a <a href="https://www.sqlite.org/c3ref/bind_parameter_name.html" target="_blank">named parameter</a> with the name :AAAA. Named parameters are also numbered. The number assigned is one greater than the largest parameter number already assigned. If this means the parameter would be assigned a number greater than <a href="https://www.sqlite.org/limits.html#max_variable_number" target="_blank">SQLITE_MAX_VARIABLE_NUMBER</a>, it is an error. To avoid confusion, it is best to avoid mixing named and numbered parameters.  |
> |**@**_AAAA_ | An "at" sign works exactly like a colon, except that the name of the parameter created is @AAAA. |
> |**\$**_AAAA_ | A dollar-sign followed by an identifier name also holds a spot for a named parameter with the name \$AAAA. The identifier name in this case can include one or more occurrences of "::" and a suffix enclosed in "(...)" containing any text at all. This syntax is the form of a variable name in the <a href="http://www.tcl-lang.org/" target="_blank">Tcl programming language</a>. The presence of this syntax results from the fact that SQLite is really a <a href="https://www.sqlite.org/tclsqlite.html" target="_blank">Tcl extension</a> that has escaped into the wild.   |

Parameters that are not assigned values using
<a href="https://www.sqlite.org/c3ref/bind_blob.html"
target="_blank">sqlite3_bind()</a> are treated as NULL. The
<a href="https://www.sqlite.org/c3ref/bind_parameter_index.html"
target="_blank">sqlite3_bind_parameter_index()</a> interface can be used
to translate a symbolic parameter name into its equivalent numeric
index.

The maximum parameter number is set at compile-time by the
<a href="https://www.sqlite.org/limits.html#max_variable_number"
target="_blank">SQLITE_MAX_VARIABLE_NUMBER</a> macro. An individual
<a href="https://www.sqlite.org/c3ref/sqlite3.html"
target="_blank">database connection</a> D can reduce its maximum
parameter number below the compile-time maximum using the
<a href="https://www.sqlite.org/c3ref/limit.html"
target="_blank">sqlite3_limit</a>(D, <a
href="https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimitvariablenumber"
target="_blank">SQLITE_LIMIT_VARIABLE_NUMBER</a>,...) interface.

<span id="like"></span>

## 5. The LIKE, GLOB, REGEXP, MATCH, and extract operators

The LIKE operator does a pattern matching comparison. The operand to the
right of the LIKE operator contains the pattern and the left hand
operand contains the string to match against the pattern. A percent
symbol ("%") in the LIKE pattern matches any sequence of zero or more
characters in the string. An underscore ("\_") in the LIKE pattern
matches any single character in the string. Any other character matches
itself or its lower/upper case equivalent (i.e. case-insensitive
matching). <u>Important Note:</u> SQLite only understands upper/lower
case for ASCII characters by default. The LIKE operator is case
sensitive by default for unicode characters that are beyond the ASCII
range. For example, the expression **'a' LIKE 'A'** is TRUE but
**'æ' LIKE 'Æ'** is FALSE. The ICU extension to SQLite includes an
enhanced version of the LIKE operator that does case folding across all
unicode characters.

If the optional ESCAPE clause is present, then the expression following
the ESCAPE keyword must evaluate to a string consisting of a single
character. This character may be used in the LIKE pattern to include
literal percent or underscore characters. The escape character followed
by a percent symbol (%), underscore (\_), or a second instance of the
escape character itself matches a literal percent symbol, underscore, or
a single escape character, respectively.

The infix LIKE operator is implemented by calling the
application-defined SQL functions [like(*Y*,*X*)](lang_corefunc#like) or
[like(*Y*,*X*,*Z*)](lang_corefunc#like).

The LIKE operator can be made case sensitive using the
<a href="https://www.sqlite.org/pragma.html#pragma_case_sensitive_like"
target="_blank">case_sensitive_like pragma</a>.

<span id="glob"></span>

The GLOB operator is similar to LIKE but uses the Unix file globbing
syntax for its wildcards. Also, GLOB is case sensitive, unlike LIKE.
Both GLOB and LIKE may be preceded by the NOT keyword to invert the
sense of the test. The infix GLOB operator is implemented by calling the
function [glob(*Y*,*X*)](lang_corefunc#glob) and can be modified by
overriding that function.

<span id="regexp"></span>

The REGEXP operator is a special syntax for the regexp() user function.
No regexp() user function is defined by default and so use of the REGEXP
operator will normally result in an error message. If an
<a href="https://www.sqlite.org/appfunc.html"
target="_blank">application-defined SQL function</a> named "regexp" is
added at run-time, then the "*X* REGEXP *Y*" operator will be
implemented as a call to "regexp(*Y*,*X*)".

<span id="match"></span>

The MATCH operator is a special syntax for the match()
application-defined function. The default match() function
implementation raises an exception and is not really useful for
anything. But extensions can override the match() function with more
helpful logic.

<span id="extract"></span>

The extract operators act as a special syntax for functions "-\>"() and
"-\>\>"(). Default implementations for these functions perform
<a href="https://www.sqlite.org/json1.html#jptr" target="_blank">JSON
subcomponent extraction</a>, but extensions can override them for other
purposes.

<span id="between"></span>

## 6. The BETWEEN operator

The BETWEEN operator is logically equivalent to a pair of comparisons.
"*x* **BETWEEN** *y* **AND** *z*" is equivalent to "_x_**\>=**_y_
**AND** _x_**\<=**_z_" except that with BETWEEN, the *x* expression is
only evaluated once. <span id="case"></span>

## 7. The CASE expression

A CASE expression serves a role similar to IF-THEN-ELSE in other
programming languages.

The optional expression that occurs in between the CASE keyword and the
first WHEN keyword is called the "base" expression. There are two
fundamental forms of the CASE expression: those with a base expression
and those without.

In a CASE without a base expression, each WHEN expression is evaluated
and the result treated as a boolean, starting with the leftmost and
continuing to the right. The result of the CASE expression is the
evaluation of the THEN expression that corresponds to the first WHEN
expression that evaluates to true. Or, if none of the WHEN expressions
evaluate to true, the result of evaluating the ELSE expression, if any.
If there is no ELSE expression and none of the WHEN expressions are
true, then the overall result is NULL.

A NULL result is considered untrue when evaluating WHEN terms.

In a CASE with a base expression, the base expression is evaluated just
once and the result is compared against the evaluation of each WHEN
expression from left to right. The result of the CASE expression is the
evaluation of the THEN expression that corresponds to the first WHEN
expression for which the comparison is true. Or, if none of the WHEN
expressions evaluate to a value equal to the base expression, the result
of evaluating the ELSE expression, if any. If there is no ELSE
expression and none of the WHEN expressions produce a result equal to
the base expression, the overall result is NULL.

When comparing a base expression against a WHEN expression, the same
collating sequence, affinity, and NULL-handling rules apply as if the
base expression and WHEN expression are respectively the left- and
right-hand operands of an **=** operator.

If the base expression is NULL then the result of the CASE is always the
result of evaluating the ELSE expression if it exists, or NULL if it
does not.

Both forms of the CASE expression use lazy, or short-circuit,
evaluation.

The only difference between the following two CASE expressions is that
the *x* expression is evaluated exactly once in the first example but
might be evaluated multiple times in the second:

- CASE x WHEN w1 THEN r1 WHEN w2 THEN r2 ELSE r3 END
- CASE WHEN x=w1 THEN r1 WHEN x=w2 THEN r2 ELSE r3 END

The built-in [iif(x,y,z) SQL function](lang_corefunc#iif) is logically
equivalent to "CASE WHEN x THEN y ELSE z END". The iif() function is
found in SQL Server and is included in SQLite for compatibility. Some
developers prefer the iif() function because it is more concise.
<span id="in_op"></span>

## 8. The IN and NOT IN operators

The IN and NOT IN operators take an expression on the left and a list of
values or a subquery on the right. When the right operand of an IN or
NOT IN operator is a subquery, the subquery must have the same number of
columns as there are columns in the
<a href="https://www.sqlite.org/rowvalue.html" target="_blank">row
value</a> of the left operand. The subquery on the right of an IN or NOT
IN operator must be a scalar subquery if the left expression is not a
<a href="https://www.sqlite.org/rowvalue.html" target="_blank">row
value</a> expression. If the right operand of an IN or NOT IN operator
is a list of values, each of those values must be scalars and the left
expression must also be a scalar. The right-hand side of an IN or NOT IN
operator can be a table *name* or
<a href="https://www.sqlite.org/vtab.html#tabfunc2"
target="_blank">table-valued function</a> *name* in which case the
right-hand side is understood to be subquery of the form "(SELECT \*
FROM *name*)". When the right operand is an empty set, the result of IN
is false and the result of NOT IN is true, regardless of the left
operand and even if the left operand is NULL.

The result of an IN or NOT IN operator is determined by the following
matrix:

> <table style="width:100%;" data-border="1">
> <colgroup>
> <col style="width: 16%" />
> <col style="width: 16%" />
> <col style="width: 16%" />
> <col style="width: 16%" />
> <col style="width: 16%" />
> <col style="width: 16%" />
> </colgroup>
> <thead>
> <tr class="header">
> <th style="text-align: center;">Left operand<br />
> is NULL</th>
> <th style="text-align: center;">Right operand<br />
> contains NULL</th>
> <th style="text-align: center;">Right operand<br />
> is an empty set</th>
> <th style="text-align: center;">Left operand found<br />
> within right operand</th>
> <th style="text-align: center;">Result of<br />
> IN operator</th>
> <th style="text-align: center;">Result of<br />
> NOT IN operator</th>
> </tr>
> </thead>
> <tbody>
> <tr class="odd">
> <td style="text-align: center;">no</td>
> <td style="text-align: center;">no</td>
> <td style="text-align: center;">no</td>
> <td style="text-align: center;">no</td>
> <td style="text-align: center;">false</td>
> <td style="text-align: center;">true</td>
> </tr>
> <tr class="even">
> <td style="text-align: center;">does not matter</td>
> <td style="text-align: center;">no</td>
> <td style="text-align: center;">yes</td>
> <td style="text-align: center;">no</td>
> <td style="text-align: center;">false</td>
> <td style="text-align: center;">true</td>
> </tr>
> <tr class="odd">
> <td style="text-align: center;">no</td>
> <td style="text-align: center;">does not matter</td>
> <td style="text-align: center;">no</td>
> <td style="text-align: center;">yes</td>
> <td style="text-align: center;">true</td>
> <td style="text-align: center;">false</td>
> </tr>
> <tr class="even">
> <td style="text-align: center;">no</td>
> <td style="text-align: center;">yes</td>
> <td style="text-align: center;">no</td>
> <td style="text-align: center;">no</td>
> <td style="text-align: center;">NULL</td>
> <td style="text-align: center;">NULL</td>
> </tr>
> <tr class="odd">
> <td style="text-align: center;">yes</td>
> <td style="text-align: center;">does not matter</td>
> <td style="text-align: center;">no</td>
> <td style="text-align: center;">does not matter</td>
> <td style="text-align: center;">NULL</td>
> <td style="text-align: center;">NULL</td>
> </tr>
> </tbody>
> </table>

Note that SQLite allows the parenthesized list of scalar values on the
right-hand side of an IN or NOT IN operator to be an empty list but most
other SQL database engines and the SQL92 standard require the list to
contain at least one element.

## 9. Table Column Names

A column name can be any of the names defined in the [CREATE
TABLE](lang_createtable) statement or one of the following special
identifiers: "**ROWID**", "**OID**", or "**\_ROWID\_**". The three
special identifiers describe the unique integer key (the
[rowid](lang_createtable#rowid)) associated with every row of every
table and so are not available on
<a href="https://www.sqlite.org/withoutrowid.html"
target="_blank">WITHOUT ROWID</a> tables. The special identifiers only
refer to the row key if the [CREATE TABLE](lang_createtable) statement
does not define a real column with the same name. The rowid can be used
anywhere a regular column can be used.

<span id="exists_op"></span>

## 10. The EXISTS operator

The EXISTS operator always evaluates to one of the integer values 0
and 1. If executing the SELECT statement specified as the right-hand
operand of the EXISTS operator would return one or more rows, then the
EXISTS operator evaluates to 1. If executing the SELECT would return no
rows at all, then the EXISTS operator evaluates to 0.

The number of columns in each row returned by the SELECT statement (if
any) and the specific values returned have no effect on the results of
the EXISTS operator. In particular, rows containing NULL values are not
handled any differently from rows without NULL values.
<span id="subq"></span>

## 11. Subquery Expressions

A [SELECT](lang_select) statement enclosed in parentheses is a subquery.
All types of SELECT statement, including aggregate and compound SELECT
queries (queries with keywords like UNION or EXCEPT) are allowed as
scalar subqueries. The value of a subquery expression is the first row
of the result from the enclosed [SELECT](lang_select) statement. The
value of a subquery expression is NULL if the enclosed
[SELECT](lang_select) statement returns no rows.

A subquery that returns a single column is a scalar subquery and can be
used most anywhere. A subquery that returns two or more columns is a
<a href="https://www.sqlite.org/rowvalue.html" target="_blank">row
value</a> subquery and can only be used as an operand of a comparison
operator or as the value in an UPDATE SET clause whose column name list
has the same size. <span id="cosub"></span>

## 12. Correlated Subqueries

A [SELECT](lang_select) statement used as either a scalar subquery or as
the right-hand operand of an IN, NOT IN or EXISTS expression may contain
references to columns in the outer query. Such a subquery is known as a
correlated subquery. A correlated subquery is reevaluated each time its
result is required. An uncorrelated subquery is evaluated only once and
the result reused as necessary. <span id="castexpr"></span>

## 13. CAST expressions

A CAST expression of the form "CAST(*expr* AS *type-name*)" is used to
convert the value of *expr* to a different
<a href="https://www.sqlite.org/datatype3.html#storageclasses"
target="_blank">storage class</a> specified by
<span class="yyterm">type-name</span>. A CAST conversion is similar to
the conversion that takes place when a
<a href="https://www.sqlite.org/datatype3.html#affinity"
target="_blank">column affinity</a> is applied to a value except that
with the CAST operator the conversion always takes place even if the
conversion lossy and irreversible, whereas column affinity only changes
the data type of a value if the change is lossless and reversible.

If the value of *expr* is NULL, then the result of the CAST expression
is also NULL. Otherwise, the storage class of the result is determined
by applying the <a href="https://www.sqlite.org/datatype3.html#affname"
target="_blank">rules for determining column affinity</a> to the
<span class="yyterm">type-name</span>.


| <div style="width:100px">Affinity of <span class="yyterm">type-name</span></div> | Conversion Processing |
| --- | --- |
| NONE | Casting a value to a <span class="yyterm">type-name</span> with no affinity causes the value to be converted into a BLOB. Casting to a BLOB consists of first casting the value to TEXT in the <a href="https://www.sqlite.org/pragma.html#pragma_encoding" target="_blank">encoding</a> of the database connection, then interpreting the resulting byte sequence as a BLOB instead of as TEXT. |
| TEXT | To cast a BLOB value to TEXT, the sequence of bytes that make up the BLOB is interpreted as text encoded using the database encoding. <br><br> Casting an INTEGER or REAL value into TEXT renders the value as if via <a href="https://www.sqlite.org/c3ref/mprintf.html" target="_blank">sqlite3_snprintf()</a> except that the resulting TEXT uses the <a href="https://www.sqlite.org/pragma.html#pragma_encoding" target="_blank">encoding</a> of the database connection. |
| REAL | When casting a BLOB value to a REAL, the value is first converted to TEXT.<br><br> When casting a TEXT value to REAL, the longest possible prefix of the value that can be interpreted as a real number is extracted from the TEXT value and the remainder ignored. Any leading spaces in the TEXT value are ignored when converging from TEXT to REAL. If there is no prefix that can be interpreted as a real number, the result of the conversion is 0.0. |
| INTEGER | When casting a BLOB value to INTEGER, the value is first converted to TEXT.<br><br> When casting a TEXT value to INTEGER, the longest possible prefix of the value that can be interpreted as an integer number is extracted from the TEXT value and the remainder ignored. Any leading spaces in the TEXT value when converting from TEXT to INTEGER are ignored. If there is no prefix that can be interpreted as an integer number, the result of the conversion is 0. If the prefix integer is greater than +9223372036854775807 then the result of the cast is exactly +9223372036854775807. Similarly, if the prefix integer is less than -9223372036854775808 then the result of the cast is exactly -9223372036854775808.<br><br> When casting to INTEGER, if the text looks like a floating point value with an exponent, the exponent will be ignored because it is no part of the integer prefix. For example, "CAST('123e+5' AS INTEGER)" results in 123, not in 12300000.<br><br> The CAST operator understands decimal integers only — conversion of <a href="lang_expr#hexint">hexadecimal integers</a> stops at the "x" in the "0x" prefix of the hexadecimal integer string and thus result of the CAST is always zero.<br><br> A cast of a REAL value into an INTEGER results in the integer between the REAL value and zero that is closest to the REAL value. If a REAL is greater than the greatest possible signed integer (+9223372036854775807) then the result is the greatest possible signed integer and if the REAL is less than the least possible signed integer (-9223372036854775808) then the result is the least possible signed integer.<br><br> Prior to SQLite version 3.8.2 (2013-12-06), casting a REAL value greater than +9223372036854775807.0 into an integer resulted in the most negative integer, -9223372036854775808. This behavior was meant to emulate the behavior of x86/x64 hardware when doing the equivalent cast. |
| NUMERIC | Casting a TEXT or BLOB value into NUMERIC yields either an INTEGER or a REAL result. If the input text looks like an integer (there is no decimal point nor exponent) and the value is small enough to fit in a 64-bit signed integer, then the result will be INTEGER. Input text that looks like floating point (there is a decimal point and/or an exponent) and the text describes a value that can be losslessly converted back and forth between IEEE 754 64-bit float and a 51-bit signed integer, then the result is INTEGER. (In the previous sentence, a 51-bit integer is specified since that is one bit less than the length of the mantissa of an IEEE 754 64-bit float and thus provides a 1-bit of margin for the text-to-float conversion operation.) Any text input that describes a value outside the range of a 64-bit signed integer yields a REAL result.<br><br> Casting a REAL or INTEGER value to NUMERIC is a no-op, even if a real value could be losslessly converted to an integer. |


Note that the result from casting any non-BLOB value into a BLOB and the
result from casting any BLOB value into a non-BLOB value may be
different depending on whether the database
<a href="https://www.sqlite.org/pragma.html#pragma_encoding"
target="_blank">encoding</a> is UTF-8, UTF-16be, or UTF-16le.
<span id="booleanexpr"></span>

## 14. Boolean Expressions

The SQL language features several contexts where an expression is
evaluated and the result converted to a boolean (true or false) value.
These contexts are:

- the WHERE clause of a SELECT, UPDATE or DELETE statement,
- the ON or USING clause of a join in a SELECT statement,
- the HAVING clause of a SELECT statement,
- the WHEN clause of an SQL trigger, and
- the WHEN clause or clauses of some CASE expressions.

To convert the results of an SQL expression to a boolean value, SQLite
first casts the result to a NUMERIC value in the same way as a [CAST
expression](lang_expr#castexpr). A numeric zero value (integer value 0
or real value 0.0) is considered to be false. A NULL value is still
NULL. All other values are considered true.

For example, the values NULL, 0.0, 0, 'english' and '0' are all
considered to be false. Values 1, 1.0, 0.1, -0.1 and '1english' are
considered to be true.

Beginning with SQLite 3.23.0 (2018-04-02), SQLite recognizes the
identifiers "TRUE" and "FALSE" as boolean literals, if and only if those
identifiers are not already used for some other meaning. If there
already exists columns or tables or other objects named TRUE or FALSE,
then for the sake of backwards compatibility, the TRUE and FALSE
identifiers refer to those other objects, not to the boolean values.

The boolean identifiers TRUE and FALSE are usually just aliases for the
integer values 1 and 0, respectively. However, if TRUE or FALSE occur on
the right-hand side of an IS operator, then the IS operator evaluates
the left-hand operand as a boolean value and returns an appropriate
answer. <span id="*funcinexpr"></span>

## 15. Functions

SQLite supports many [simple](lang_corefunc), [aggregate](lang_aggfunc),
and <a href="https://www.sqlite.org/windowfunctions.html"
target="_blank">window</a> SQL functions. For presentation purposes,
simple functions are further subdivided into [core
functions](lang_corefunc), [date-time functions](lang_datefunc), [math
functions](lang_mathfunc), and
<a href="https://www.sqlite.org/json1.html" target="_blank">JSON
functions</a>. Applications can add new functions, written in C/C++,
using the <a href="https://www.sqlite.org/c3ref/create_function.html" target="_blank">sqlite3_create_function()</a> interface.

The main expression bubble diagram above shows a single syntax for all
function invocations. But this is merely to simplify the expression
bubble diagram. In reality, each type of function has a slightly
different syntax, shown below. The function invocation syntax shown in
the main expression bubble diagram is the union of the three syntaxes
shown here: 

<!-- do-not-touch-svg-import: 'expr3.svg' -->

The OVER clause is required for
<a href="https://www.sqlite.org/windowfunctions.html"
target="_blank">window functions</a> and is prohibited otherwise. The
DISTINCT keyword and the ORDER BY clause is only allowed in [aggregate
functions](lang_aggfunc). The FILTER clause may not appear on a [simple
function](lang_corefunc).

It is possible to have an aggregate function with the same name as a
simple function, as long as the number of arguments for the two forms of
the function are different. For example, the
[max()](lang_aggfunc#max_agg) function with a single argument is an
aggregate and the [max()](lang_corefunc#max_scalar) function with two or
more arguments is a simple function. Aggregate functions can usually
also be used as window functions.

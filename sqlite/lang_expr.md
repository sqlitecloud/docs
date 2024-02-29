---
title: SQL Language Expressions
description: SQL Language Expressions
statement: SELECT (10 * (5 + 2) / 15) AS result;
---
!['script.js'](/public/docs/sqlite/script.js)





<h2 id="syntax"><span>1. </span>Syntax</h2>

!['expr.svg'](/public/docs/sqlite/_svg/expr.svg)

<a name="binaryops"></a>

<h2 id="operators_and_parse_affecting_attributes"><span>2. </span>Operators, and Parse-Affecting Attributes</h2>
<p>SQLite understands these operators, listed in precedence<sup>1</sup> order<br>
(top to bottom / highest to lowest):
</p><p></p>

  <style>
   td.optab { color: #2c2cf0; border: 2px solid black; padding: 4px; }
   th.optab { text-align: center; border: 2px solid black; padding: 4px; }
   table.optab { border-collapse: collapse; margin-left: 50px }
   small.optab { color: #101010;  }
  </style>


<table class="optab" width="50%" border="1" border-collapse="collapse" line-height="1.2">
  <tr align="center">
    <th class="optab" text-align="center"><b>Operators&nbsp;<sup>2</sup></b></th>
  </tr>
  <tr align="center">
    <td class="optab">~&nbsp;<small class="optab">&lsqb;expr&rsqb;</small>&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;<small class="optab">&lsqb;expr&rsqb;</small>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;<small class="optab">&lsqb;expr&rsqb;</small></td>
  </tr>
  <tr align="center">
    <td class="optab"><small class="optab">&lsqb;expr&rsqb;</small>&nbsp;COLLATE&nbsp;&lpar;collation-name&rpar;&nbsp;<sup>3</sup></td>
  </tr>
  <tr align="center">
    <td class="optab">||&nbsp;&nbsp;&nbsp;-&gt;&nbsp;&nbsp;&nbsp;-&gt;&gt;</td>
  </tr>
  <tr align="center">
    <td class="optab">*&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;%</td>
  </tr>
  <tr align="center">
    <td class="optab">+&nbsp;&nbsp;&nbsp;-</td>
  </tr>
  <tr align="center">
    <td class="optab">&amp;&ensp;&nbsp;|&nbsp;&nbsp;&nbsp;&lt;&lt;&ensp;&nbsp;&gt;&gt;</td>
  </tr>
  <tr align="center">
    <td class="optab"><small class="optab">&lsqb;expr&rsqb;</small>&nbsp;ESCAPE&nbsp;&lsqb;escape-character-expr&rsqb;&nbsp;<sup>4</sup></td>
  </tr>
  <tr align="center">
    <td class="optab">&lt;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&lt;=&nbsp;&nbsp;&gt;=</td>
  </tr>
  <tr align="center">
    <td class="optab">=&nbsp;&nbsp;==&nbsp;&nbsp;&lt;&gt;&nbsp;&nbsp;!=&nbsp;&nbsp;IS&nbsp;&nbsp;&nbsp;IS&nbsp;NOT<br>
      IS&nbsp;DISTINCT&nbsp;FROM&nbsp;&nbsp;&nbsp;IS&nbsp;NOT&nbsp;DISTINCT&nbsp;FROM<br>
      <small class="optab">&lsqb;expr&rsqb;</small>&nbsp;BETWEEN<sup>5</sup>&nbsp;<small class="optab">&lsqb;expr&rsqb;</small>&nbsp;AND&nbsp;<small class="optab">&lsqb;expr&rsqb;</small><sup>&ensp;</sup><br>
      IN<sup>5</sup>&nbsp;&nbsp;MATCH<sup>5</sup>&nbsp;&nbsp;LIKE<sup>5</sup>&nbsp;&nbsp;REGEXP<sup>5</sup>&nbsp;&nbsp;GLOB<sup>5</sup><br>
      <small class="optab">&lsqb;expr&rsqb;</small>&nbsp;ISNULL&nbsp;&nbsp;<small class="optab">&lsqb;expr&rsqb;</small>&nbsp;NOTNULL&nbsp;&nbsp;&nbsp;<small class="optab">&lsqb;expr&rsqb;</small>&nbsp;NOT&nbsp;NULL
    </td>
  </tr>
  <tr align="center">
    <td class="optab">NOT&nbsp;<small class="optab">&lsqb;expr&rsqb;</small></td>
  </tr>
  <tr align="center">
    <td class="optab">AND</td>
  </tr>
  <tr align="center">
    <td class="optab">OR</td>
  </tr>
</table>
<p>
</p><ol>
<li> Operators shown within the same table cell share precedence.<br>
</li><li> "<small>&lsqb;expr&rsqb;</small>" denotes operand locations for non-binary operators.<br>
 &nbsp;&nbsp;Operators with no "&lsqb;expr&rsqb;" adjunct are binary and left-associative. <br>
</li><li> The COLLATE clause (with its collation-name) acts as a single postfix operator.<br>
</li><li> The ESCAPE clause (with its escape character) acts as a single postfix operator.<br>
 &nbsp;&nbsp;It can only bind to a preceding &lsqb;expr&rsqb; LIKE &lsqb;expr&rsqb; expression.<br>
</li><li> Each keyword in (BETWEEN IN GLOB LIKE MATCH REGEXP) may be prefixed<br>
 &nbsp;&nbsp;by NOT, retaining the bare operator's precedence and associativity.
</li></ol>


<a name="collateop"></a>

<p>The COLLATE operator is a unary postfix
operator that assigns a <a href="https://www.sqlite.org/datatype3.html#collation" target="_blank">collating sequence</a> to an expression.
The collating sequence set by the COLLATE operator overrides the
collating sequence determined by the COLLATE clause in a table
<a href="lang_createtable#tablecoldef">column definition</a>.
See the <a href="https://www.sqlite.org/datatype3.html#collation" target="_blank">detailed discussion on collating sequences</a>
in the <a href="https://www.sqlite.org/datatype3.html" target="_blank">Datatype In SQLite3</a> document for additional information.
</p>



<p>The unary operator <font color="#2c2cf0"><big>+</big></font> is a no-op. It can be applied
to strings, numbers, blobs or NULL and it always returns a result
with the same value as the operand.</p>

<p>Note that there are two variations of the equals and not equals
operators. Equals can be either

<font color="#2c2cf0"><big>=</big></font> or <font color="#2c2cf0"><big>==</big></font>.
The not-equal operator can be either
<font color="#2c2cf0"><big>!=</big></font> or <font color="#2c2cf0"><big>&lt;&gt;</big></font>.
The <font color="#2c2cf0"><big>||</big></font> operator is "concatenate" - it joins together
the two strings of its operands.
The <font color="#2c2cf0"><big>-&gt;</big></font> and <font color="#2c2cf0"><big>-&gt;&gt;</big></font> operators are "extract";
they extract the RHS component from the LHS.
For an example, see
<a href="https://www.sqlite.org/json1.html#jptr" target="_blank">JSON subcomponent extraction</a>.</p>

<p>

The <font color="#2c2cf0"><big>%</big></font> operator <a href="lang_expr#castexpr">casts</a> both of its operands to type
INTEGER and then computes the remainder after dividing the left integer
by the right integer. The other arithmetic operators perform integer
arithmetic if both operands are integers and no overflow would result,
or floating point arithmetic, per IEEE Standard 754, if either operand
is a real value or integer arithmetic would produce an overflow.
Integer divide yields an integer result, truncated toward zero.
</p>

<p>The result of any binary operator is either a numeric value or
NULL, except for the <font color="#2c2cf0"><big>||</big></font> concatenation operator,
and the <font color="#2c2cf0"><big>-&gt;</big></font> and <font color="#2c2cf0"><big>-&gt;&gt;</big></font> extract operators
which evaluate to either NULL or a text value.</p>

<p>All operators generally evaluate to NULL when any operand is NULL,
with specific exceptions as stated below. This is in accordance with
the SQL92 standard.</p>

<p> When paired with NULL:<br>
&nbsp;&nbsp;<font color="#2c2cf0"><big>AND</big></font> evaluates to 0 (false) when
the other operand is false; and<br>
&nbsp;&nbsp;<font color="#2c2cf0"><big>OR</big></font> evaluates to 1 (true)
when the other operand is true.
</p>


<a name="isisnot"></a>


<p>The <font color="#2c2cf0"><big>IS</big></font> and <font color="#2c2cf0"><big>IS NOT</big></font> operators work
like <font color="#2c2cf0"><big>=</big></font> and <font color="#2c2cf0"><big>!=</big></font> except when one or both of the
operands are NULL. In this case, if both operands are NULL, then the
IS operator evaluates to 1 (true) and the IS NOT operator evaluates
to 0 (false). If one operand is NULL and the other is not, then the
IS operator evaluates to 0 (false) and the IS NOT operator is 1 (true).
It is not possible for an IS or IS NOT expression to evaluate to NULL.

<a name="isdf"></a>


<p>
The <font color="#2c2cf0"><big>IS NOT DISTINCT FROM</big></font> operator is an alternative spelling
for the <font color="#2c2cf0"><big>IS</big></font> operator.
Likewise, the <font color="#2c2cf0"><big>IS DISTINCT FROM</big></font> operator means the same thing
as <font color="#2c2cf0"><big>IS NOT</big></font>. Standard SQL does not support the compact IS and IS NOT
notation. Those compact forms are an SQLite extension. You have to use
the prolix and much less readable IS NOT DISTINCT FROM and
IS DISTINCT FROM operators on other SQL database engines.

<a name="litvalue"></a>

</p><h2 id="literal_values_constants_"><span>3. </span>Literal Values (Constants)</h2>
<p>
A literal value represents a constant.
Literal values may be integers, floating point numbers, strings,
BLOBs, or NULLs.
</p><p>
The syntax for integer and floating point literals (collectively
"numeric literals") is shown by the following diagram:</p>

!['expr2.svg'](/public/docs/sqlite/_svg/expr2.svg)

<p>
If a numeric literal has a decimal point or an exponentiation
clause or if it is less than -9223372036854775808 or
greater than 9223372036854775807, then it is a floating point literal.
Otherwise is it is aninteger literal.
The "E" character that begins the exponentiation
clause of a floating point literal can be either upper or lower case.
The "." character is always used
as the decimal point even if the locale setting specifies "," for
this role - the use of "," for the decimal point would result in
syntactic ambiguity.

<a name="hexint"></a>

</p><p>Hexadecimal integer literals follow the C-language notation of
"0x" or "0X" followed by hexadecimal digits.
For example, 0x1234 means the same as 4660
and 0x8000000000000000 means the same as -9223372036854775808.
 Hexadecimal integer literals are interpreted as 64-bit
two's-complement integers and are thus limited
to sixteen significant digits of precision.
Support for hexadecimal integers was added to SQLite
version 3.8.6 (2014-08-15).
For backwards compatibility, the "0x" hexadecimal integer
notation is only understood by the SQL language parser, not by the
type conversions routines.
String variables that
contain text formatted like hexadecimal integers are not
interpreted as hexadecimal integers when coercing the string value
into an integer due to a <a href="lang_expr#castexpr">CAST expression</a> or for a <a href="https://www.sqlite.org/datatype3.html#affinity" target="_blank">column affinity</a>
transformation or prior to performing a numeric operation or for
any other run-time conversions. When coercing a
string value in the format of a hexadecimal integer into an integer
value, the conversion process stops when the 'x' character is seen
so the resulting integer value is always zero.
SQLite only understands the hexadecimal integer notation when it
appears in the SQL statement text, not when it appears as
part of the content of the database.

</p><p> A string constant is formed by enclosing the
string in single quotes ('). A single quote within the string can
be encoded by putting two single quotes in a row - as in Pascal.
C-style escapes using the backslash character are not supported because
they are not standard SQL.

</p><p> BLOB literals are string literals containing hexadecimal data and
preceded by a single "x" or "X" character. Example: X'53514C697465'

</p><p>
A literal value can also be the token "NULL".
</p>

<a name="varparam"></a>

<h2 id="parameters"><span>4. </span>Parameters</h2>
<p>
A "variable" or "parameter" token
specifies a placeholder in the expression for a
value that is filled in at runtime using the
<a href="https://www.sqlite.org/c3ref/bind_blob.html" target="_blank">sqlite3_bind()</a> family of C/C++ interfaces.
Parameters can take several forms:
</p>

<blockquote>
<table>
<tr>
<td align="right" valign="top"><b>?</b><i>NNN</i></td><td width="20"></td>
<td>A question mark followed by a number <i>NNN</i> holds a spot for the
NNN-th parameter.  NNN must be between 1 and <a href="https://www.sqlite.org/limits.html#max_variable_number" target="_blank">SQLITE_MAX_VARIABLE_NUMBER</a>.
</td>
</tr>
<tr>
<td align="right" valign="top"><b>?</b></td><td width="20"></td>
<td>A question mark that is not followed by a number creates a parameter
with a number one greater than the largest parameter number already assigned.
If this means the parameter number is greater than
<a href="https://www.sqlite.org/limits.html#max_variable_number" target="_blank">SQLITE_MAX_VARIABLE_NUMBER</a>, it is an error.
This parameter format is provided for compatibility with other database
engines.  But because it is easy to miscount the question marks, the
use of this parameter format is discouraged.  Programmers are encouraged
to use one of the symbolic formats below or the ?NNN format above instead.
</td>
</tr>
<tr>
<td align="right" valign="top"><b>:</b><i>AAAA</i></td><td width="20"></td>
<td>A colon followed by an identifier name holds a spot for a
<a href="https://www.sqlite.org/c3ref/bind_parameter_name.html" target="_blank">named parameter</a> with the name :AAAA.
Named parameters are also numbered. The number assigned is one greater than
the largest parameter number already assigned. If this means the parameter
would be assigned a number greater than <a href="https://www.sqlite.org/limits.html#max_variable_number" target="_blank">SQLITE_MAX_VARIABLE_NUMBER</a>, it is
an error. To avoid confusion, it is best to avoid mixing named and numbered
parameters.</td>
</tr>
<tr>
<td align="right" valign="top"><b>@</b><i>AAAA</i></td><td width="20"></td>
<td>An "at" sign works exactly like a colon, except that the name of
the parameter created is @AAAA.</td>
</tr>
<tr>
<td align="right" valign="top"><b>$</b><i>AAAA</i></td><td width="20"></td>
<td>A dollar-sign followed by an identifier name also holds a spot for a named
parameter with the name $AAAA.  The identifier name in this case can include
one or more occurrences of "::" and a suffix enclosed in "(...)" containing
any text at all.  This syntax is the form of a variable name in the
<a href="http://www.tcl-lang.org/" target="_blank">Tcl programming language</a>.  The presence
of this syntax results from the fact that SQLite is really a
<a href="https://www.sqlite.org/tclsqlite.html" target="_blank">Tcl extension</a> that has escaped into the wild.</td>
</tr>
</table>
</blockquote>

<p>Parameters that are not assigned values using
<a href="https://www.sqlite.org/c3ref/bind_blob.html" target="_blank">sqlite3_bind()</a> are treated
as NULL. The <a href="https://www.sqlite.org/c3ref/bind_parameter_index.html" target="_blank">sqlite3_bind_parameter_index()</a> interface can be used
to translate a symbolic parameter name into its equivalent numeric index.</p>

<p>The maximum parameter number is set at compile-time by
the <a href="https://www.sqlite.org/limits.html#max_variable_number" target="_blank">SQLITE_MAX_VARIABLE_NUMBER</a> macro. An individual <a href="https://www.sqlite.org/c3ref/sqlite3.html" target="_blank">database connection</a>
D can reduce its maximum parameter number below the compile-time maximum
using the <a href="https://www.sqlite.org/c3ref/limit.html" target="_blank">sqlite3_limit</a>(D, <a href="https://www.sqlite.org/c3ref/c_limit_attached.html#sqlitelimitvariablenumber" target="_blank">SQLITE_LIMIT_VARIABLE_NUMBER</a>,...) interface.
</p>

<a name="like"></a>

<h2 id="the_like_glob_regexp_match_and_extract_operators"><span>5. </span>The LIKE, GLOB, REGEXP, MATCH, and extract operators</h2>
<p>The LIKE operator does a pattern matching comparison. The operand
to the right of the LIKE operator contains the pattern and the left hand
operand contains the string to match against the pattern.

A percent symbol ("%") in the LIKE pattern matches any
sequence of zero or more characters in the string. An underscore
("_") in the LIKE pattern matches any single character in the
string. Any other character matches itself or its lower/upper case
equivalent (i.e. case-insensitive matching).

<u>Important Note:</u> SQLite only
understands upper/lower case for ASCII characters by default. The
LIKE operator is case sensitive by default for unicode characters that are
beyond the ASCII range. For example,
the expression <b>'a'&nbsp;LIKE&nbsp;'A'</b>
is TRUE but <b>'&aelig;'&nbsp;LIKE&nbsp;'&AElig;'</b> is FALSE.
The ICU extension to SQLite includes an enhanced version of the
LIKE operator that does case folding across all unicode characters.</p>

<p>If the optional ESCAPE clause is present, then the expression
following the ESCAPE keyword must evaluate to a string consisting of
a single character. This character may be used in the LIKE pattern
to include literal percent or underscore characters. The escape
character followed by a percent symbol (%), underscore (_), or a second
instance of the escape character itself matches a
literal percent symbol, underscore, or a single escape character,
respectively.

</p><p>The infix LIKE operator is implemented by calling the
application-defined SQL functions <a href="lang_corefunc#like">like(<i>Y</i>,<i>X</i>)</a> or
<a href="lang_corefunc#like">like(<i>Y</i>,<i>X</i>,<i>Z</i>)</a>.</p>

<p>The LIKE operator can be made case sensitive using the
<a href="https://www.sqlite.org/pragma.html#pragma_case_sensitive_like" target="_blank">case_sensitive_like pragma</a>.</p>

<a name="glob"></a>

<p>The GLOB operator is similar to LIKE but uses the Unix
file globbing syntax for its wildcards. Also, GLOB is case
sensitive, unlike LIKE. Both GLOB and LIKE may be preceded by
the NOT keyword to invert the sense of the test. The infix GLOB
operator is implemented by calling the function
<a href="lang_corefunc#glob">glob(<i>Y</i>,<i>X</i>)</a> and can be modified by overriding
that function.</p>

<a name="regexp"></a>

<p>The REGEXP operator is a special syntax for the regexp()
user function. No regexp() user function is defined by default
and so use of the REGEXP operator will normally result in an
error message. If an <a href="https://www.sqlite.org/appfunc.html" target="_blank">application-defined SQL function</a> named "regexp"
is added at run-time, then the "<i>X</i> REGEXP <i>Y</i>" operator will
be implemented as a call to "regexp(<i>Y</i>,<i>X</i>)".</p>

<a name="match"></a>

<p>The MATCH operator is a special syntax for the match()
application-defined function. The default match() function implementation
raises an exception and is not really useful for anything.
But extensions can override the match() function with more
helpful logic.</p>

<a name="extract"></a>

<p>The extract operators act as a special syntax for functions
"-&gt;"() and "-&gt;&gt;"(). Default implementations for these functions
perform <a href="https://www.sqlite.org/json1.html#jptr" target="_blank">JSON subcomponent extraction</a>,
but extensions can override them for other purposes.</p>

<a name="between"></a>

<h2 id="the_between_operator"><span>6. </span>The BETWEEN operator</h2>
<p>The BETWEEN operator is logically equivalent to a pair of comparisons.
"<i>x</i> <b>BETWEEN</b> <i>y</i> <b>AND</b> <i>z</i>" is
equivalent to
"<i>x</i><b>&gt;=</b><i>y</i> <b>AND</b> <i>x</i><b>&lt;=</b><i>z</i>" except
that with BETWEEN, the <i>x</i> expression is only evaluated once.

<a name="case"></a>

</p><h2 id="the_case_expression"><span>7. </span>The CASE expression</h2>
<p>A CASE expression serves a role similar to IF-THEN-ELSE in other
programming languages.

</p><p>The optional expression that occurs in between the CASE keyword and the
first WHEN keyword is called the "base" expression. There are two
fundamental forms
of the CASE expression: those with a base expression and those without.

</p><p>In a CASE without a base expression, each WHEN expression is evaluated
and the result treated as a boolean, starting with the leftmost and continuing
to the right. The result of the CASE expression is the evaluation of the THEN
expression that corresponds to the first WHEN expression that evaluates to
true. Or, if none of the WHEN expressions evaluate to true, the result of
evaluating the ELSE expression, if any. If there is no ELSE expression and
none of the WHEN expressions are true, then the overall result is NULL.

</p><p>A NULL result is considered untrue when evaluating WHEN terms.

</p><p>In a CASE with a base expression, the base expression is evaluated just
once and the result is compared against the evaluation of each WHEN
expression from left to right. The result of the CASE expression is the
evaluation of the THEN expression that corresponds to the first WHEN
expression for which the comparison is true. Or, if none of the WHEN
expressions evaluate to a value equal to the base expression, the result
of evaluating the ELSE expression, if any. If there is no ELSE expression and
none of the WHEN expressions produce a result equal to the base expression,
the overall result is NULL.

</p><p>When comparing a base expression against a WHEN expression, the same
collating sequence, affinity, and NULL-handling rules apply as if the
base expression and WHEN expression are respectively the left- and
right-hand operands of an <big><b>=</b></big> operator.</p>

<p>If the base
expression is NULL then the result of the CASE is always the result
of evaluating the ELSE expression if it exists, or NULL if it does not.

</p><p>Both forms of the CASE expression use lazy, or short-circuit,
evaluation.

</p><p>The only difference between the following two CASE expressions is that
the <i>x</i> expression is evaluated exactly once in the first example but
might be evaluated multiple times in the second:

</p><ul>
<li>CASE x WHEN w1 THEN r1 WHEN w2 THEN r2 ELSE r3 END
</li><li>CASE WHEN x=w1 THEN r1 WHEN x=w2 THEN r2 ELSE r3 END
</li></ul>

<p>The built-in <a href="lang_corefunc#iif">iif(x,y,z) SQL function</a> is logically
equivalent to "CASE WHEN x THEN y ELSE z END". The iif() function
is found in SQL Server and is included in SQLite for compatibility.
Some developers prefer the iif() function because it is more
concise.


<a name="in_op"></a>

</p><h2 id="the_in_and_not_in_operators"><span>8. </span>The IN and NOT IN operators</h2>
<p>The IN and NOT IN operators take an expression on the
left and a list of values or a subquery on the right.
When the right operand of an IN or NOT IN operator is a subquery, the
subquery must have the same number of columns as there are columns in
the <a href="https://www.sqlite.org/rowvalue.html" target="_blank">row value</a> of the left operand. The subquery on the
right of an IN or NOT IN operator must be a scalar subquery if the left
expression is not a <a href="https://www.sqlite.org/rowvalue.html" target="_blank">row value</a> expression.
If the right operand of an IN or NOT IN operator is a list of values,
each of those values must be scalars and the left expression must also
be a scalar.
The right-hand side of an IN or NOT IN operator can be a
table <i>name</i> or <a href="https://www.sqlite.org/vtab.html#tabfunc2" target="_blank">table-valued function</a> <i>name</i> in which
case the right-hand side is understood to be subquery of
the form "(SELECT * FROM <i>name</i>)".
When the right operand is an empty set, the result of IN is false and the
result of NOT IN is true, regardless of the left operand and even if the
left operand is NULL.
</p><p>The result of an IN or NOT IN operator is determined by the following
matrix:

</p><blockquote>
<table border="1">
<tr>
<th>Left operand <br>is NULL
</th><th>Right operand <br>contains NULL
</th><th>Right operand <br>is an empty set
</th><th>Left operand found <br>within right operand
</th><th>Result of <br>IN operator
</th><th>Result of <br>NOT IN operator
</th></tr><tr>
<td align="center">no
</td><td align="center">no
</td><td align="center">no
</td><td align="center">no
</td><td align="center">false
</td><td align="center">true
</td></tr><tr>
<td align="center">does not matter
</td><td align="center">no
</td><td align="center">yes
</td><td align="center">no
</td><td align="center">false
</td><td align="center">true
</td></tr><tr>
<td align="center">no
</td><td align="center">does not matter
</td><td align="center">no
</td><td align="center">yes
</td><td align="center">true
</td><td align="center">false
</td></tr><tr>
<td align="center">no
</td><td align="center">yes
</td><td align="center">no
</td><td align="center">no
</td><td align="center">NULL
</td><td align="center">NULL
</td></tr><tr>
<td align="center">yes
</td><td align="center">does not matter
</td><td align="center">no
</td><td align="center">does not matter
</td><td align="center">NULL
</td><td align="center">NULL
</td></tr></table>
</blockquote>

<p>Note that SQLite allows the parenthesized list of scalar values on
the right-hand side of an IN or NOT IN operator to be an empty list but
most other SQL database engines and the SQL92 standard require
the list to contain at least one element.</p>

<h2 id="table_column_names"><span>9. </span>Table Column Names</h2>

<p>A column name can be any of the names defined in the <a href="lang_createtable">CREATE TABLE</a>
statement or one of the following special identifiers: "<b>ROWID</b>",
"<b>OID</b>", or "<b>_ROWID_</b>".
The three special identifiers describe the
unique integer key (the <a href="lang_createtable#rowid">rowid</a>) associated with every
row of every table and so are not available on <a href="https://www.sqlite.org/withoutrowid.html" target="_blank">WITHOUT ROWID</a> tables.
The special identifiers only refer to the row key if the <a href="lang_createtable">CREATE TABLE</a>
statement does not define a real column with the same name.
The rowid can be used anywhere a regular
column can be used.</p>

<a name="exists_op"></a>

<h2 id="the_exists_operator"><span>10. </span>The EXISTS operator</h2>

<p>The EXISTS operator always evaluates to one of the integer values 0
and 1. If executing the SELECT statement specified as the right-hand
operand of the EXISTS operator would return one or more rows, then the
EXISTS operator evaluates to 1. If executing the SELECT would return
no rows at all, then the EXISTS operator evaluates to 0.

</p><p>The number of columns in each row returned by the SELECT statement
(if any) and the specific values returned have no effect on the results
of the EXISTS operator. In particular, rows containing NULL values are
not handled any differently from rows without NULL values.

<a name="subq"></a>

</p><h2 id="subquery_expressions"><span>11. </span>Subquery Expressions</h2>

<p>A <a href="lang_select">SELECT</a> statement enclosed in parentheses is a subquery.
All types of SELECT statement, including
aggregate and compound SELECT queries (queries with keywords like
UNION or EXCEPT) are allowed as scalar subqueries.
The value of a subquery expression is the first row of the result
from the enclosed <a href="lang_select">SELECT</a> statement.
The value of a subquery expression is NULL if the enclosed
<a href="lang_select">SELECT</a> statement returns no rows.

</p><p>A subquery that returns a single column is a scalar subquery and can
be used most anywhere.
A subquery that returns two or more columns is a <a href="https://www.sqlite.org/rowvalue.html" target="_blank">row value</a>
subquery and can only be used as an operand of a comparison operator or as
the value in an UPDATE SET clause whose column name list has the same size.

<a name="cosub"></a>

</p><h2 id="correlated_subqueries"><span>12. </span>Correlated Subqueries</h2>

<p>A <a href="lang_select">SELECT</a> statement used as either a scalar subquery or as the
right-hand operand of an IN, NOT IN or EXISTS expression may contain
references to columns in the outer query. Such a subquery is known as
a correlated subquery. A correlated subquery is reevaluated each time
its result is required. An uncorrelated subquery is evaluated only once
and the result reused as necessary.

<a name="castexpr"></a>

</p><h2 id="cast_expressions"><span>13. </span>CAST expressions</h2>

<p>A CAST expression of the form "CAST(<i>expr</i> AS <i>type-name</i>)"
is used to convert the value of <i>expr</i> to
a different <a href="https://www.sqlite.org/datatype3.html#storageclasses" target="_blank">storage class</a> specified by <span class='yyterm'>type-name</span>.
A CAST conversion is similar to the conversion that takes
place when a <a href="https://www.sqlite.org/datatype3.html#affinity" target="_blank">column affinity</a> is applied to a value except that with
the CAST operator the conversion always takes place even if the conversion
lossy and irreversible, whereas column affinity only changes the data type
of a value if the change is lossless and reversible.

</p><p>If the value of <i>expr</i> is NULL, then the result of the CAST
expression is also NULL. Otherwise, the storage class of the result
is determined by applying the <a href="https://www.sqlite.org/datatype3.html#affname" target="_blank">rules for determining column affinity</a> to
the <span class='yyterm'>type-name</span>.

</p><blockquote>
<table border="1">
<tr>
  <th> Affinity of <span class='yyterm'><nobr>type-name</nobr></span>
  </th><th> Conversion Processing
</th></tr><tr>
  <td> NONE
  </td><td> Casting a value to a <span class='yyterm'>type-name</span> with no affinity
  causes the value to
  be converted into a BLOB.  Casting to a BLOB consists of first casting
  the value to TEXT in the <a href="https://www.sqlite.org/pragma.html#pragma_encoding" target="_blank">encoding</a> of the database connection, then
  interpreting the resulting byte sequence as a BLOB instead of as TEXT.

</td></tr><tr>
  <td> TEXT
  </td><td> To cast a BLOB value to TEXT, the sequence of bytes that make up the
  BLOB is interpreted as text encoded using the database encoding.
<p>
 Casting an INTEGER or REAL value into TEXT renders the value as if via
<a href="https://www.sqlite.org/c3ref/mprintf.html" target="_blank">sqlite3_snprintf()</a> except that the resulting TEXT uses the <a href="https://www.sqlite.org/pragma.html#pragma_encoding" target="_blank">encoding</a> of
the database connection.

</p></td></tr><tr>
  <td> REAL
  </td><td> When casting a BLOB value to a REAL, the value is first converted to
        TEXT.
<p>When casting a TEXT value to REAL, the longest possible prefix of
the value that can be interpreted as a real number is extracted from
the TEXT value and the remainder ignored. Any leading spaces in the
TEXT value are ignored when converging from TEXT to REAL. If there is
no prefix that can be interpreted as a real number, the result of the
conversion is 0.0.

</p></td></tr><tr>
  <td> INTEGER
  </td><td> When casting a BLOB value to INTEGER, the value is first converted to
        TEXT.
<p>When casting a TEXT value to INTEGER, the longest possible prefix of
the value that can be interpreted as an integer number is extracted from
the TEXT value and the remainder ignored. Any leading spaces in the
TEXT value when converting from TEXT to INTEGER are ignored. If there
is no prefix that can be interpreted as an integer number, the result
of the conversion is 0. If the prefix integer is greater than
+9223372036854775807 then the result of the cast is exactly
+9223372036854775807. Similarly, if the prefix integer is
less than -9223372036854775808 then the result of the cast is
exactly -9223372036854775808.

</p><p>When casting to INTEGER, if the text looks like a floating point
value with an exponent, the exponent will be ignored because it is
no part of the integer prefix. For example,
"CAST('123e+5' AS INTEGER)" results in 123, not in 12300000.

</p><p> The CAST operator understands decimal
integers only &mdash; conversion of <a href="lang_expr#hexint">hexadecimal integers</a> stops
at the "x" in the "0x" prefix of the hexadecimal integer string
and thus result of the CAST is always zero.

</p><p>A cast of a REAL value into an INTEGER results in the integer
between the REAL value and zero that is closest to the REAL value.
If a REAL is greater than the greatest possible signed
integer (+9223372036854775807) then the result is the greatest possible
signed integer and if the REAL is less than the least possible signed
integer (-9223372036854775808) then the result is the least possible
signed integer.

</p><p>Prior to SQLite version 3.8.2 (2013-12-06),
casting a REAL value greater than
+9223372036854775807.0 into an integer resulted in the most negative
integer, -9223372036854775808. This behavior was meant to emulate the
behavior of x86/x64 hardware when doing the equivalent cast.

</p></td></tr><tr>
  <td> NUMERIC
  </td><td> Casting a TEXT or BLOB value into NUMERIC yields either an INTEGER or
   a REAL result.
   If the input text looks like an integer (there is no decimal point nor
   exponent) and the value is small enough to fit in a 64-bit signed integer,
   then the result will be INTEGER.
   Input text that looks like floating point (there is a decimal point and/or
   an exponent) and the text describes a value that
   can be losslessly converted back and forth between IEEE 754 64-bit float and a
   51-bit signed integer, then the result is INTEGER.
   (In the previous sentence, a 51-bit integer is specified since that is one
   bit less than the length of the mantissa of an IEEE 754 64-bit float and
   thus provides a 1-bit of margin for the text-to-float conversion operation.)
   Any text input that describes a value outside the range of a 64-bit
   signed integer yields a REAL result.
<p> Casting a REAL or INTEGER value to NUMERIC is a no-op, even if a real
 value could be losslessly converted to an integer.
</p></td></tr>
</table>
</blockquote>

<p>Note that the result from casting any non-BLOB value into a
BLOB and the result from casting any BLOB value into a non-BLOB value
may be different depending on whether the database <a href="https://www.sqlite.org/pragma.html#pragma_encoding" target="_blank">encoding</a> is UTF-8,
UTF-16be, or UTF-16le.


<a name="booleanexpr"></a>

</p><h2 id="boolean_expressions"><span>14. </span>Boolean Expressions</h2>

<p>The SQL language features several contexts where an expression is
evaluated and the result converted to a boolean (true or false) value. These
contexts are:

</p><ul>
    <li> the WHERE clause of a SELECT, UPDATE or DELETE statement,
    </li><li> the ON or USING clause of a join in a SELECT statement,
    </li><li> the HAVING clause of a SELECT statement,
    </li><li> the WHEN clause of an SQL trigger, and
    </li><li> the WHEN clause or clauses of some CASE expressions.
  </li></ul>

<p>To convert the results of an SQL expression to a boolean value, SQLite
first casts the result to a NUMERIC value in the same way as a
<a href="lang_expr#castexpr">CAST expression</a>. A numeric zero value (integer value 0 or real
value 0.0) is considered to be false. A NULL value is still NULL.
All other values are considered true.

</p><p>For example, the values NULL, 0.0, 0, 'english' and '0' are all considered
to be false. Values 1, 1.0, 0.1, -0.1 and '1english' are considered to
be true.

</p><p>Beginning with SQLite 3.23.0 (2018-04-02), SQLite recognizes the
identifiers "TRUE" and "FALSE" as boolean literals, if and only if those
identifiers are not already used for some other meaning. If there already
exists columns or tables or other objects named TRUE or FALSE, then for
the sake of backwards compatibility, the TRUE and FALSE identifiers refer
to those other objects, not to the boolean values.

</p><p>The boolean identifiers TRUE and FALSE are usually just aliases for
the integer values 1 and 0, respectively. However, if TRUE or FALSE
occur on the right-hand side of an IS operator, then the IS operator
evaluates the left-hand operand as a boolean value and returns an appropriate
answer.

<a name="*funcinexpr"></a>

</p><h2 id="functions"><span>15. </span>Functions</h2>
<p>SQLite supports many <a href="lang_corefunc">simple</a>, <a href="lang_aggfunc">aggregate</a>,
and <a href="https://www.sqlite.org/windowfunctions.html" target="_blank">window</a>
SQL functions. For presentation purposes, simple functions are further
subdivided into <a href="lang_corefunc">core functions</a>, <a href="lang_datefunc">date-time functions</a>,
<a href="lang_mathfunc">math functions</a>, and <a href="https://www.sqlite.org/json1.html" target="_blank">JSON functions</a>.
Applications can add new functions, written in C/C++, using the
<a href="https://www.sqlite.org/c3ref/create_function.html" target="_blank">sqlite3_create_function()</a> interface.
</p>

<p>
The main expression bubble diagram above shows a single syntax for
all function invocations. But this is merely to simplify the expression
bubble diagram. In reality, each type of function has a slightly different
syntax, shown below. The function invocation syntax shown in the main
expression bubble diagram is the union of the three syntaxes shown here:

!['expr3.svg'](/public/docs/sqlite/_svg/expr3.svg)

</p><p>
The OVER clause is required for <a href="https://www.sqlite.org/windowfunctions.html" target="_blank">window functions</a> and is prohibited
otherwise. The DISTINCT keyword and the ORDER BY clause is only allowed
in <a href="lang_aggfunc">aggregate functions</a>.
The FILTER clause may not appear on a <a href="lang_corefunc">simple function</a>.

</p><p>It is possible to have an aggregate function with the same name as a
simple function, as long as the number of arguments for the two forms of the
function are different. For example, the <a href="lang_aggfunc#max_agg">max()</a> function with a
single argument is an aggregate and the <a href="lang_corefunc#max_scalar">max()</a> function with two or more
arguments is a simple function. Aggregate functions can usually also
be used as window functions.
</p>


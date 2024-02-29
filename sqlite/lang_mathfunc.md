---
title: Built-In Mathematical SQL Functions
description: Built-In Mathematical SQL Functions
statement: SELECT log(3.1415);
---
!['script.js'](/public/docs/sqlite/script.js)






<h2 id="overview"><span>1. </span>Overview</h2>

<p>The math functions shown below are a subgroup of
<a href="lang_corefunc">scalar functions</a> that are built into the
<a href="https://www.sqlite.org/amalgamation.html" target="_blank">SQLite amalgamation source file</a> but are only active
if the amalgamation is compiled using the
<a href="https://www.sqlite.org/compile.html#enable_math_functions" target="_blank">-DSQLITE_ENABLE_MATH_FUNCTIONS</a> compile-time option.

</p><p>The arguments to math functions can be integers, floating-point numbers,
or strings or blobs that look like integers or real numbers. If any argument
is NULL or is a string or blob that is not readily converted into a number,
then the function will return NULL.
These functions also return NULL for domain errors, such as trying to
take the square root of a negative number, or compute the arccosine of a
value greater than 1.0 or less than -1.0.

</p><p class="break-all">The values returned by these functions are often approximations.
For example, the <a href="lang_mathfunc#pi">pi()</a> function returns 
3.141592653589793115997963468544185161590576171875 which 
is about 1.22465e-16 too small, but it is the closest approximation available
for IEEE754 doubles.

<p>
<div class='columns' >
<ul style='padding-top:0;'>
<li><a href='lang_mathfunc.html#acos'>acos(X)</a></li>
<li><a href='lang_mathfunc.html#acosh'>acosh(X)</a></li>
<li><a href='lang_mathfunc.html#asin'>asin(X)</a></li>
<li><a href='lang_mathfunc.html#asinh'>asinh(X)</a></li>
<li><a href='lang_mathfunc.html#atan'>atan(X)</a></li>
<li><a href='lang_mathfunc.html#atan2'>atan2(Y,X)</a></li>
<li><a href='lang_mathfunc.html#atanh'>atanh(X)</a></li>
<li><a href='lang_mathfunc.html#ceil'>ceil(X)</a></li>
<li><a href='lang_mathfunc.html#ceil'>ceiling(X)</a></li>
<li><a href='lang_mathfunc.html#cos'>cos(X)</a></li>
<li><a href='lang_mathfunc.html#cosh'>cosh(X)</a></li>
<li><a href='lang_mathfunc.html#degrees'>degrees(X)</a></li>
<li><a href='lang_mathfunc.html#exp'>exp(X)</a></li>
<li><a href='lang_mathfunc.html#floor'>floor(X)</a></li>
<li><a href='lang_mathfunc.html#ln'>ln(X)</a></li>
<li><a href='lang_mathfunc.html#log'>log(B,X)</a></li>
<li><a href='lang_mathfunc.html#log'>log(X)</a></li>
<li><a href='lang_mathfunc.html#log'>log10(X)</a></li>
<li><a href='lang_mathfunc.html#log2'>log2(X)</a></li>
<li><a href='lang_mathfunc.html#mod'>mod(X,Y)</a></li>
<li><a href='lang_mathfunc.html#pi'>pi()</a></li>
<li><a href='lang_mathfunc.html#pow'>pow(X,Y)</a></li>
<li><a href='lang_mathfunc.html#pow'>power(X,Y)</a></li>
<li><a href='lang_mathfunc.html#radians'>radians(X)</a></li>
<li><a href='lang_mathfunc.html#sin'>sin(X)</a></li>
<li><a href='lang_mathfunc.html#sinh'>sinh(X)</a></li>
<li><a href='lang_mathfunc.html#sqrt'>sqrt(X)</a></li>
<li><a href='lang_mathfunc.html#tan'>tan(X)</a></li>
<li><a href='lang_mathfunc.html#tanh'>tanh(X)</a></li>
<li><a href='lang_mathfunc.html#trunc'>trunc(X)</a></li>
</ul>
</div>


</p><h2 id="descriptions_of_built_in_scalar_sql_math_functions"><span>2. </span>Descriptions of built-in scalar SQL math functions</h2>
<dl>

<a name="acos"></a>
<dt><p><b>acos(<i>X</i>)</b></dt><dd><p>
  Return the arccosine of X.  The result is in radians.
</dd>
<a name="acosh"></a>
<dt><p><b>acosh(<i>X</i>)</b></dt><dd><p>
  Return the hyperbolic arccosine of X.
</dd>
<a name="asin"></a>
<dt><p><b>asin(<i>X</i>)</b></dt><dd><p>
  Return the arcsine of X.  The result is in radians.
</dd>
<a name="asinh"></a>
<dt><p><b>asinh(<i>X</i>)</b></dt><dd><p>
  Return the hyperbolic arcsine of X.
</dd>
<a name="atan"></a>
<dt><p><b>atan(<i>X</i>)</b></dt><dd><p>
  Return the arctangent of X.  The result is in radians.
</dd>
<a name="atan2"></a>
<dt><p><b>atan2(<i>Y</i>,<i>X</i>)</b></dt><dd><p>
  Return the arctangent of Y/X.  The result is in radians.  The
  result is placed into correct quadrant depending on the signs
  of X and Y.
</dd>
<a name="atanh"></a>
<dt><p><b>atanh(<i>X</i>)</b></dt><dd><p>
  Return the hyperbolic arctangent of X.
</dd>
<a name="ceil"></a>
<dt><p><b>ceil(<i>X</i>)<br />ceiling(<i>X</i>)</b></dt><dd><p>
  Return the first representable integer value greater than or equal to X.
  For positive values of X, this routine rounds away from zero.
  For negative values of X, this routine rounds toward zero.
</dd>
<a name="cos"></a>
<dt><p><b>cos(<i>X</i>)</b></dt><dd><p>
  Return the cosine of X.  X is in radians.
</dd>
<a name="cosh"></a>
<dt><p><b>cosh(<i>X</i>)</b></dt><dd><p>
  Return the hyperbolic cosine of X.
</dd>
<a name="degrees"></a>
<dt><p><b>degrees(<i>X</i>)</b></dt><dd><p>
  Convert value X from radians into degrees.
</dd>
<a name="exp"></a>
<dt><p><b>exp(<i>X</i>)</b></dt><dd><p>
  Compute <i>e</i> (Euler's number, approximately 2.71828182845905) raised
  to the power X.
</dd>
<a name="floor"></a>
<dt><p><b>floor(<i>X</i>)</b></dt><dd><p>
  Return the first representable integer value less than or equal to X.
  For positive numbers, this function rounds toward zero.
  For negative numbers, this function rounds away from zero.
</dd>
<a name="ln"></a>
<dt><p><b>ln(<i>X</i>)</b></dt><dd><p>
  Return the natural logarithm of X.
</dd>
<a name="log"></a>
<dt><p><b>log(<i>X</i>)<br />log10(<i>X</i>)<br />log(<i>B</i>,<i>X</i>)</b></dt><dd><p>
  Return the base-10 logarithm for X.  Or, for the two-argument version,
  return the base-B logarithm of X.
<p>
  Compatibility note:  SQLite works like PostgreSQL in that the log() function
  computes a base-10 logarithm.  Most other SQL database engines compute a
  natural logarithm for log().  In the two-argument version of log(B,X), the
  first argument is the base and the second argument is the operand.  This is
  the same as in PostgreSQL and MySQL, but is reversed from SQL Server which
  uses the second argument as the base and the first argument as the operand.
</dd>
<a name="log2"></a>
<dt><p><b>log2(<i>X</i>)</b></dt><dd><p>
  Return the logarithm base-2 for the number X.
</dd>
<a name="mod"></a>
<dt><p><b>mod(<i>X</i>,<i>Y</i>)</b></dt><dd><p>
  Return the remainder after dividing X by Y.  This is similar to the '%'
  operator, except that it works for non-integer arguments.
</dd>
<a name="pi"></a>
<dt><p><b>pi()</b></dt><dd><p>
  Return an approximation for &pi;.
</dd>
<a name="pow"></a>
<dt><p><b>pow(<i>X</i>,<i>Y</i>)<br />power(<i>X</i>,<i>Y</i>)</b></dt><dd><p>
  Compute X raised to the power Y.
</dd>
<a name="radians"></a>
<dt><p><b>radians(<i>X</i>)</b></dt><dd><p>
  Convert X from degrees into radians.
</dd>
<a name="sin"></a>
<dt><p><b>sin(<i>X</i>)</b></dt><dd><p>
  Return the sine of X.  X is in radians.
</dd>
<a name="sinh"></a>
<dt><p><b>sinh(<i>X</i>)</b></dt><dd><p>
  Return the hyperbolic sine of X.
</dd>
<a name="sqrt"></a>
<dt><p><b>sqrt(<i>X</i>)</b></dt><dd><p>
  Return the square root of X.  NULL is returned if X is negative.
</dd>
<a name="tan"></a>
<dt><p><b>tan(<i>X</i>)</b></dt><dd><p>
  Return the tangent of X.  X is in radians.
</dd>
<a name="tanh"></a>
<dt><p><b>tanh(<i>X</i>)</b></dt><dd><p>
  Return the hyperbolic tangent of X.
</dd>
<a name="trunc"></a>
<dt><p><b>trunc(<i>X</i>)</b></dt><dd><p>
  Return the representable integer in between X and 0 (inclusive)
  that is furthest away from zero.  Or, in other words, return the
  integer part of X, rounding toward zero.
  The trunc() function is similar to <a href="lang_mathfunc#ceil">ceiling(X)</a> and <a href="lang_mathfunc#floor">floor(X)</a> except
  that it always rounds toward zero whereas ceiling(X) and floor(X) round
  up and down, respectively.
</dd>

</dl>



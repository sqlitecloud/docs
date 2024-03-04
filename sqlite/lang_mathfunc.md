---
title: Built-In Mathematical SQL Functions
description: Built-In Mathematical SQL Functions
statement: SELECT log(3.1415);
---

## 1. Overview

The math functions shown below are a subgroup of [scalar
functions](lang_corefunc) that are built into the
<a href="https://www.sqlite.org/amalgamation.html"
target="_blank">SQLite amalgamation source file</a> but are only active
if the amalgamation is compiled using the
<a href="https://www.sqlite.org/compile.html#enable_math_functions"
target="_blank">-DSQLITE_ENABLE_MATH_FUNCTIONS</a> compile-time option.

The arguments to math functions can be integers, floating-point numbers,
or strings or blobs that look like integers or real numbers. If any
argument is NULL or is a string or blob that is not readily converted
into a number, then the function will return NULL. These functions also
return NULL for domain errors, such as trying to take the square root of
a negative number, or compute the arccosine of a value greater than 1.0
or less than -1.0.

The values returned by these functions are often approximations. For
example, the [pi()](lang_mathfunc#pi) function returns
3.141592653589793115997963468544185161590576171875 which is about
1.22465e-16 too small, but it is the closest approximation available for
IEEE754 doubles.

<div class="columns">

- [acos(X)](lang_mathfunc#acos)
- [acosh(X)](lang_mathfunc#acosh)
- [asin(X)](lang_mathfunc#asin)
- [asinh(X)](lang_mathfunc#asinh)
- [atan(X)](lang_mathfunc#atan)
- [atan2(Y,X)](lang_mathfunc#atan2)
- [atanh(X)](lang_mathfunc#atanh)
- [ceil(X)](lang_mathfunc#ceil)
- [ceiling(X)](lang_mathfunc#ceil)
- [cos(X)](lang_mathfunc#cos)
- [cosh(X)](lang_mathfunc#cosh)
- [degrees(X)](lang_mathfunc#degrees)
- [exp(X)](lang_mathfunc#exp)
- [floor(X)](lang_mathfunc#floor)
- [ln(X)](lang_mathfunc#ln)
- [log(B,X)](lang_mathfunc#log)
- [log(X)](lang_mathfunc#log)
- [log10(X)](lang_mathfunc#log)
- [log2(X)](lang_mathfunc#log2)
- [mod(X,Y)](lang_mathfunc#mod)
- [pi()](lang_mathfunc#pi)
- [pow(X,Y)](lang_mathfunc#pow)
- [power(X,Y)](lang_mathfunc#pow)
- [radians(X)](lang_mathfunc#radians)
- [sin(X)](lang_mathfunc#sin)
- [sinh(X)](lang_mathfunc#sinh)
- [sqrt(X)](lang_mathfunc#sqrt)
- [tan(X)](lang_mathfunc#tan)
- [tanh(X)](lang_mathfunc#tanh)
- [trunc(X)](lang_mathfunc#trunc)

</div>

## 2. Descriptions of built-in scalar SQL math functions

<span id="acos"></span>

**acos(*X*)**

Return the arccosine of X. The result is in radians.

<span id="acosh"></span>

**acosh(*X*)**

Return the hyperbolic arccosine of X.

<span id="asin"></span>

**asin(*X*)**

Return the arcsine of X. The result is in radians.

<span id="asinh"></span>

**asinh(*X*)**

Return the hyperbolic arcsine of X.

<span id="atan"></span>

**atan(*X*)**

Return the arctangent of X. The result is in radians.

<span id="atan2"></span>

**atan2(*Y*,*X*)**

Return the arctangent of Y/X. The result is in radians. The result is
placed into correct quadrant depending on the signs of X and Y.

<span id="atanh"></span>

**atanh(*X*)**

Return the hyperbolic arctangent of X.

<span id="ceil"></span>

**ceil(*X*)  
ceiling(*X*)**

Return the first representable integer value greater than or equal to X.
For positive values of X, this routine rounds away from zero. For
negative values of X, this routine rounds toward zero.

<span id="cos"></span>

**cos(*X*)**

Return the cosine of X. X is in radians.

<span id="cosh"></span>

**cosh(*X*)**

Return the hyperbolic cosine of X.

<span id="degrees"></span>

**degrees(*X*)**

Convert value X from radians into degrees.

<span id="exp"></span>

**exp(*X*)**

Compute *e* (Euler's number, approximately 2.71828182845905) raised to
the power X.

<span id="floor"></span>

**floor(*X*)**

Return the first representable integer value less than or equal to X.
For positive numbers, this function rounds toward zero. For negative
numbers, this function rounds away from zero.

<span id="ln"></span>

**ln(*X*)**

Return the natural logarithm of X.

<span id="log"></span>

**log(*X*)  
log10(*X*)  
log(*B*,*X*)**

Return the base-10 logarithm for X. Or, for the two-argument version,
return the base-B logarithm of X.

Compatibility note: SQLite works like PostgreSQL in that the log()
function computes a base-10 logarithm. Most other SQL database engines
compute a natural logarithm for log(). In the two-argument version of
log(B,X), the first argument is the base and the second argument is the
operand. This is the same as in PostgreSQL and MySQL, but is reversed
from SQL Server which uses the second argument as the base and the first
argument as the operand.

<span id="log2"></span>

**log2(*X*)**

Return the logarithm base-2 for the number X.

<span id="mod"></span>

**mod(*X*,*Y*)**

Return the remainder after dividing X by Y. This is similar to the '%'
operator, except that it works for non-integer arguments.

<span id="pi"></span>

**pi()**

Return an approximation for π.

<span id="pow"></span>

**pow(*X*,*Y*)  
power(*X*,*Y*)**

Compute X raised to the power Y.

<span id="radians"></span>

**radians(*X*)**

Convert X from degrees into radians.

<span id="sin"></span>

**sin(*X*)**

Return the sine of X. X is in radians.

<span id="sinh"></span>

**sinh(*X*)**

Return the hyperbolic sine of X.

<span id="sqrt"></span>

**sqrt(*X*)**

Return the square root of X. NULL is returned if X is negative.

<span id="tan"></span>

**tan(*X*)**

Return the tangent of X. X is in radians.

<span id="tanh"></span>

**tanh(*X*)**

Return the hyperbolic tangent of X.

<span id="trunc"></span>

**trunc(*X*)**

Return the representable integer in between X and 0 (inclusive) that is
furthest away from zero. Or, in other words, return the integer part of
X, rounding toward zero. The trunc() function is similar to
[ceiling(X)](lang_mathfunc#ceil) and [floor(X)](lang_mathfunc#floor)
except that it always rounds toward zero whereas ceiling(X) and floor(X)
round up and down, respectively.

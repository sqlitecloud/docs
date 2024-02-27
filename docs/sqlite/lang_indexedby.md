---
title: The INDEXED BY Clause
description: The INDEXED BY Clause
statement: SELECT * FROM Artist INDEXED BY ArtistNameIdx;
---
<script>
function toggle_div(nm) {
var w = document.getElementById(nm);
if( w.style.display=="block" ){
w.style.display = "none";
}else{
w.style.display = "block";
}
}
function toggle_search() {
var w = document.getElementById("searchmenu");
if( w.style.display=="block" ){
w.style.display = "none";
} else {
w.style.display = "block";
setTimeout(function(){
document.getElementById("searchbox").focus()
}, 30);
}
}
function div_off(nm){document.getElementById(nm).style.display="none";}
window.onbeforeunload = function(e){div_off("submenu");}
/* Disable the Search feature if we are not operating from CGI, since */
/* Search is accomplished using CGI and will not work without it. */
if( !location.origin || !location.origin.match || !location.origin.match(/http/) ){
document.getElementById("search_menubutton").style.display = "none";
}
/* Used by the Hide/Show button beside syntax diagrams, to toggle the */
function hideorshow(btn,obj){
var x = document.getElementById(obj);
var b = document.getElementById(btn);
if( x.style.display!='none' ){
x.style.display = 'none';
b.innerHTML='show';
}else{
x.style.display = '';
b.innerHTML='hide';
}
return false;
}
var antiRobot = 0;
function antiRobotGo(){
if( antiRobot!=3 ) return;
antiRobot = 7;
var j = document.getElementById("mtimelink");
if(j && j.hasAttribute("data-href")) j.href=j.getAttribute("data-href");
}
function antiRobotDefense(){
document.body.onmousedown=function(){
antiRobot |= 2;
antiRobotGo();
document.body.onmousedown=null;
}
document.body.onmousemove=function(){
antiRobot |= 2;
antiRobotGo();
document.body.onmousemove=null;
}
setTimeout(function(){
antiRobot |= 1;
antiRobotGo();
}, 100)
antiRobotGo();
}
antiRobotDefense();
</script>





<h2 id="how_indexed_by_works"><span>1. </span>How INDEXED BY Works</h2>

<p>The INDEXED BY phrase forces the <a href="https://www.sqlite.org/optoverview.html" target="_blank">SQLite query planner</a> to use a
particular named index on a <a href="lang_delete">DELETE</a>, <a href="lang_select">SELECT</a>, or <a href="lang_update">UPDATE</a> statement.
The INDEXED BY phrase is an SQLite extension and
is not portable to other SQL database engines.</p>

<p><b><a href="https://www.sqlite.org/syntax/qualified-table-name.html" target="_blank">qualified-table-name:</a></b>
<button id='x5aa9a11d' onclick='hideorshow("x5aa9a11d","x7055a075")'>hide</button></p>
 <div id='x7055a075' class='imgcontainer'>
 <div style="max-width:599px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 599.746 182.736">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,17 33,21 33,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L39,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M60,32L156,32A15 15 0 0 0 171 17A15 15 0 0 0 156 2L60,2A15 15 0 0 0 45 17A15 15 0 0 0 60 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="108" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">schema-name</text>
<polygon points="195,17 183,21 183,12" style="fill:rgb(0,0,0)"/>
<path d="M171,17L189,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M210,32A15 15 0 0 0 225 17A15 15 0 0 0 210 2A15 15 0 0 0 195 17A15 15 0 0 0 210 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="210" y="17" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">.</text>
<polygon points="261,17 249,21 249,12" style="fill:rgb(0,0,0)"/>
<path d="M225,17L255,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M276,32L351,32A15 15 0 0 0 366 17A15 15 0 0 0 351 2L276,2A15 15 0 0 0 261 17A15 15 0 0 0 276 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="313" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table-name</text>
<polygon points="408,44 396,48 396,40" style="fill:rgb(0,0,0)"/>
<path d="M366,17 L 374,17 Q 381,17 381,30 Q 381,44 392,44 L 402,44"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M423,59L427,59A15 15 0 0 0 442 44L442,44A15 15 0 0 0 427 29L423,29A15 15 0 0 0 408 44L408,44A15 15 0 0 0 423 59Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="425" y="44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">AS</text>
<polygon points="465,44 453,48 453,40" style="fill:rgb(0,0,0)"/>
<path d="M442,44L459,44"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M480,59L501,59A15 15 0 0 0 516 44L516,44A15 15 0 0 0 501 29L480,29A15 15 0 0 0 465 44L465,44A15 15 0 0 0 480 59Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="490" y="44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">alias</text>
<polygon points="539,44 527,48 527,40" style="fill:rgb(0,0,0)"/>
<path d="M516,44L533,44"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M539,44 L 546,44 Q 554,44 554,51 L 554,59"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="453,17 442,21 442,12" style="fill:rgb(0,0,0)"/>
<path d="M366,17L448,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="108,44 97,48 97,40" style="fill:rgb(0,0,0)"/>
<path d="M9,17 L 16,17 Q 24,17 24,30 Q 24,44 39,44 L 87,44 L 102,44"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M108,44 L 225,44 Q 240,44 240,30 Q 240,17 247,17 L 255,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M236,142L301,142A15 15 0 0 0 316 127A15 15 0 0 0 301 112L236,112A15 15 0 0 0 221 127A15 15 0 0 0 236 142Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="268" y="127" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">INDEXED</text>
<polygon points="339,127 327,131 327,123" style="fill:rgb(0,0,0)"/>
<path d="M316,127L333,127"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M354,142L358,142A15 15 0 0 0 373 127A15 15 0 0 0 358 112L354,112A15 15 0 0 0 339 127A15 15 0 0 0 354 142Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="356" y="127" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">BY</text>
<polygon points="396,127 385,131 385,123" style="fill:rgb(0,0,0)"/>
<path d="M373,127L390,127"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M411,142L490,142A15 15 0 0 0 505 127A15 15 0 0 0 490 112L411,112A15 15 0 0 0 396 127A15 15 0 0 0 411 142Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="451" y="127" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">index-name</text>
<path d="M236,180L256,180A15 15 0 0 0 271 165A15 15 0 0 0 256 150L236,150A15 15 0 0 0 221 165A15 15 0 0 0 236 180Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="246" y="165" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NOT</text>
<polygon points="294,165 283,169 283,161" style="fill:rgb(0,0,0)"/>
<path d="M271,165L289,165"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M310,180L374,180A15 15 0 0 0 389 165A15 15 0 0 0 374 150L310,150A15 15 0 0 0 294 165A15 15 0 0 0 310 180Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="342" y="165" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">INDEXED</text>
<polygon points="554,74 550,62 558,62" style="fill:rgb(0,0,0)"/>
<path d="M453,17 L 539,17 Q 554,17 554,32 L 554,53 L 554,68"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="313,89 325,85 325,94" style="fill:rgb(0,0,0)"/>
<path d="M554,74 L 554,82 Q 554,89 539,89 L 334,89 L 319,89"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="221,127 210,131 210,123" style="fill:rgb(0,0,0)"/>
<path d="M313,89 L 210,89 Q 195,89 195,104 L 195,112 Q 195,127 205,127 L 215,127"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="221,165 210,169 210,161" style="fill:rgb(0,0,0)"/>
<path d="M195,112 L 195,150 Q 195,165 205,165 L 215,165"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="554,114 550,102 558,102" style="fill:rgb(0,0,0)"/>
<path d="M554,74L554,108"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="590,165 578,169 578,161" style="fill:rgb(0,0,0)"/>
<path d="M554,114 L 554,150 Q 554,165 569,165 L 569,165 L 584,165"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="593" cy="165" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="539,127 527,131 527,123" style="fill:rgb(0,0,0)"/>
<path d="M505,127L533,127"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M539,127 L 546,127 Q 554,127 554,135 L 554,142"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M389,165L578,165"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>


<p>The "INDEXED BY <span class='yyterm'>index-name</span>" phrase specifies 
that the named index
must be used in order to look up values on the preceding table.
If <span class='yyterm'>index-name</span> does not exist or cannot be used 
for the query, then the preparation of the SQL statement fails.
The "NOT INDEXED" clause specifies that no index shall be used when
accessing the preceding table, including implied indices create by
UNIQUE and PRIMARY KEY constraints. However, the <a href="lang_createtable#rowid">rowid</a>
can still be used to look up entries even when "NOT INDEXED" is specified.</p>

<p>Some SQL database engines provide non-standard "hint" mechanisms which
can be used to give the query optimizer clues about what indices it should
use for a particular statement. The INDEXED BY clause of SQLite is 
<em>not</em> a hinting mechanism and it should not be used as such.
The INDEXED BY clause does not give the optimizer hints about which index
to use; it gives the optimizer a requirement of which index to use.
If the query optimizer is unable to use the index specified by the
INDEXED BY clause, then the query will fail with an error.</p>

<p>The INDEXED BY clause is <em>not</em> intended for use in tuning
the performance of a query. The intent of the INDEXED BY clause is
to raise a run-time error if a schema change, such as dropping or
creating an index, causes the query plan for a time-sensitive query
to change. The INDEXED BY clause is designed to help detect
undesirable query plan changes during regression testing.
Application 
developers are admonished to omit all use of INDEXED BY during
application design, implementation, testing, and tuning. If
INDEXED BY is to be used at all, it should be inserted at the very
end of the development process when "locking down" a design.</p>

<h2 id="see_also"><span>2. </span>See Also</h2>

<ol>
<li><p>The <a href="https://www.sqlite.org/queryplanner-ng.html#howtofix" target="_blank">query planner checklist</a> describes steps that application
developers should following to help resolve query planner problems.
Notice the that the use of INDEXED BY is a last resort, to be used only
when all other measures fail.</p>

</li><li><p><a href="https://www.sqlite.org/optoverview.html#uplus" target="_blank">The unary "+" operator</a>
can be used to disqualify terms in the WHERE clause from use by indices.
Careful use of unary + can sometimes help prevent the query planner from
choosing a poor index without restricting it to using one specific index.
Careful placement of unary + operators is a better method for controlling 
which indices are used by a query.</p>

</li><li><p>The <a href="https://www.sqlite.org/c3ref/stmt_status.html" target="_blank">sqlite3_stmt_status()</a> C/C++ interface together with the
<a href="https://www.sqlite.org/c3ref/c_stmtstatus_counter.html#sqlitestmtstatusfullscanstep" target="_blank">SQLITE_STMTSTATUS_FULLSCAN_STEP</a> and <a href="https://www.sqlite.org/c3ref/c_stmtstatus_counter.html#sqlitestmtstatussort" target="_blank">SQLITE_STMTSTATUS_SORT</a> verbs
can be used to detect at run-time when an SQL statement is not
making effective use of indices. Many applications may prefer to
use the <a href="https://www.sqlite.org/c3ref/stmt_status.html" target="_blank">sqlite3_stmt_status()</a> interface to detect index misuse
rather than the INDEXED BY phrase described here.</p>
</li></ol>



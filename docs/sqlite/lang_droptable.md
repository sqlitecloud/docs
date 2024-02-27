---
title: DROP TABLE
description: DROP TABLE
statement: DROP TABLE IF EXISTS Genre;
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





<p><b><a href="https://www.sqlite.org/syntax/drop-table-stmt.html" target="_blank">drop-table-stmt:</a></b>
<button id='xa474c09d' onclick='hideorshow("xa474c09d","xbbb7e16d")'>hide</button></p>
 <div id='xbbb7e16d' class='imgcontainer'>
 <div style="max-width:758px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 758.16 54">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="32,17 20,21 20,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L26,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M47,32L78,32A15 15 0 0 0 93 17A15 15 0 0 0 78 2L47,2A15 15 0 0 0 32 17A15 15 0 0 0 47 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="63" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DROP</text>
<polygon points="116,17 105,21 105,12" style="fill:rgb(0,0,0)"/>
<path d="M93,17L110,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M131,32L171,32A15 15 0 0 0 186 17A15 15 0 0 0 171 2L131,2A15 15 0 0 0 116 17A15 15 0 0 0 131 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="151" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">TABLE</text>
<polygon points="222,17 210,21 210,12" style="fill:rgb(0,0,0)"/>
<path d="M186,17L216,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M237,32A15 15 0 0 0 252 17A15 15 0 0 0 237 2A15 15 0 0 0 222 17A15 15 0 0 0 237 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="237" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">IF</text>
<polygon points="275,17 264,21 264,12" style="fill:rgb(0,0,0)"/>
<path d="M252,17L269,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M290,32L335,32A15 15 0 0 0 350 17A15 15 0 0 0 335 2L290,2A15 15 0 0 0 275 17A15 15 0 0 0 290 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="313" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">EXISTS</text>
<polygon points="404,17 392,21 392,12" style="fill:rgb(0,0,0)"/>
<path d="M350,17L398,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M419,32L515,32A15 15 0 0 0 531 17A15 15 0 0 0 515 2L419,2A15 15 0 0 0 404 17A15 15 0 0 0 419 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="467" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">schema-name</text>
<polygon points="554,17 542,21 542,12" style="fill:rgb(0,0,0)"/>
<path d="M531,17L548,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M569,32A15 15 0 0 0 584 17A15 15 0 0 0 569 2A15 15 0 0 0 554 17A15 15 0 0 0 569 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="569" y="17" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">.</text>
<polygon points="620,17 608,21 608,12" style="fill:rgb(0,0,0)"/>
<path d="M584,17L614,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M635,32L710,32A15 15 0 0 0 725 17A15 15 0 0 0 710 2L635,2A15 15 0 0 0 620 17A15 15 0 0 0 635 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="673" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table-name</text>
<polygon points="748,17 737,21 737,12" style="fill:rgb(0,0,0)"/>
<path d="M725,17L743,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="752" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="275,47 264,51 264,43" style="fill:rgb(0,0,0)"/>
<path d="M186,17 L 193,17 Q 201,17 201,32 L 201,32 Q 201,47 216,47 L 254,47 L 269,47"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M275,47 L 350,47 Q 365,47 365,32 L 365,32 Q 365,17 372,17 L 380,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="467,47 456,51 456,43" style="fill:rgb(0,0,0)"/>
<path d="M372,17 L 379,17 Q 387,17 387,32 L 387,32 Q 387,47 402,47 L 447,47 L 462,47"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M467,47 L 584,47 Q 599,47 599,32 L 599,32 Q 599,17 606,17 L 614,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>


<p>The DROP TABLE statement removes a table added with the
<a href="lang_createtable">CREATE TABLE</a> statement. The name specified is the
table name. The dropped table is completely removed from the database 
schema and the disk file. The table can not be recovered. 
All indices and triggers
associated with the table are also deleted.</p>

<p>The optional IF EXISTS clause suppresses the error that would normally
result if the table does not exist.</p>

<p>If <a href="https://www.sqlite.org/foreignkeys.html" target="_blank">foreign key constraints</a> are enabled, a DROP TABLE command performs an
implicit <a href="lang_delete">DELETE FROM</a> command before removing the
table from the database schema. Any triggers attached to the table are
dropped from the database schema before the implicit DELETE FROM
is executed, so this cannot cause any triggers to fire. By contrast, an
implicit DELETE FROM does cause any configured
<a href="https://www.sqlite.org/foreignkeys.html#fk_actions" target="_blank">foreign key actions</a> to take place. 
If the implicit DELETE FROM executed
as part of a DROP TABLE command violates any immediate foreign key constraints,
an error is returned and the table is not dropped. If 
the implicit DELETE FROM causes any 
deferred foreign key constraints to be violated, and the violations still
exist when the transaction is committed, an error is returned at the time
of commit.
</p>


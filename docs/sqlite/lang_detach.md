---
title: DETACH
description: DETACH
statement: DETACH DATABASE database_name;
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





<p><b><a href="https://www.sqlite.org/syntax/detach-stmt.html" target="_blank">detach-stmt:</a></b><button id='x814076d2' onclick='hideorshow("x814076d2","xd4692196")'>hide</button></p>
 <div id='xd4692196' class='imgcontainer'>
 <div style="max-width:456px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 456.595 47.952">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="32,17 20,21 20,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L26,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M47,32L104,32A15 15 0 0 0 119 17A15 15 0 0 0 104 2L47,2A15 15 0 0 0 32 17A15 15 0 0 0 47 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="75" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DETACH</text>
<polygon points="155,17 143,21 143,12" style="fill:rgb(0,0,0)"/>
<path d="M119,17L149,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M170,32L246,32A15 15 0 0 0 261 17A15 15 0 0 0 246 2L170,2A15 15 0 0 0 155 17A15 15 0 0 0 170 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="208" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DATABASE</text>
<polygon points="297,17 286,21 286,12" style="fill:rgb(0,0,0)"/>
<path d="M261,17L291,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M312,32L409,32A15 15 0 0 0 424 17A15 15 0 0 0 409 2L312,2A15 15 0 0 0 297 17A15 15 0 0 0 312 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="360" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">schema-name</text>
<polygon points="447,17 435,21 435,12" style="fill:rgb(0,0,0)"/>
<path d="M424,17L441,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="450" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="208,41 196,45 196,37" style="fill:rgb(0,0,0)"/>
<path d="M119,17 L 126,17 Q 134,17 134,29 Q 134,41 149,41 L 187,41 L 202,41"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M208,41 L 255,41 Q 270,41 270,29 Q 270,17 278,17 L 285,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>


<p>This statement detaches an additional database connection previously attached using the <a href="lang_attach">ATTACH</a> statement. When not in <a href="https://www.sqlite.org/sharedcache.html" target="_blank">shared cache mode</a>, it is possible to have the same database file attached multiple times using different names, and detaching one connection to a file will leave the others intact.</p>

<p>In <a href="https://www.sqlite.org/sharedcache.html" target="_blank">shared cache mode</a>, attempting to attach the same database file morethan once results in an error.</p>


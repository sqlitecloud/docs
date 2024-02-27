---
title: Database Object Name Resolution
description: Database Object Name Resolution
statement: SELECT column AS alias FROM table;
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



<p>
  In SQLite, a database object (a table, index, trigger or view) is identified
  by the name of the object and the name of the database that it resides in. 
  Database objects may reside in the main database, the temp database, or in
  an <a href="lang_attach">attached database</a>.

<p>
  The syntax of the <a href="lang_droptable">DROP TABLE</a>, <a href="lang_dropindex">DROP INDEX</a>, <a href="lang_dropview">DROP VIEW</a>, <a href="lang_droptrigger">DROP TRIGGER</a>,
  <a href="lang_reindex">REINDEX</a>, <a href="lang_altertable">ALTER TABLE</a> and many other commands all permit the user to
  specify a database object either by its name alone, or by a combination of
  its name and the name of its database. If no database is specified as part
  of the object reference, then SQLite searches the main, temp and all attached
  databases for an object with a matching name. The temp database is searched
  first, followed by the main database, followed all attached databases in the
  order that they were attached. The reference resolves to the first match
  found. For example:

<pre>
      /* Add a table named 't1' to the temp, main and an attached database */
      ATTACH 'file.db' AS aux;
      CREATE TABLE t1(x, y);
      CREATE TEMP TABLE t1(x, y);
      CREATE TABLE aux.t1(x, y);

      DROP TABLE t1;         /* Drop table in temp database */
      DROP TABLE t1;         /* Drop table in main database */
      DROP TABLE t1;         /* Drop table in aux database */
</pre>

<p>
  If a schema name is specified as part of an object reference, it must be
  either "main", or "temp" or the schema-name of an attached database.
  Like other SQL identifiers, schema names are case-insensitive.
  If a schema name is specified, then only that one schema is searched for
  the named object.

<p>
  Most object references may only resolve to a specific type of object (for
  example a reference that is part of a DROP TABLE statement may only resolve
  to a table object, not an index, trigger or view). However in some contexts 
  (e.g. <a href="lang_reindex">REINDEX</a>) an object reference may be resolve to more than one type
  of object. When searching database schemas for a named object, objects of
  types that cannot be used in the context of the reference are always 
  ignored.



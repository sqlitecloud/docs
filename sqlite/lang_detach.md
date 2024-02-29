---
title: DETACH
description: DETACH
statement: DETACH DATABASE database_name;
---






<!-- do-not-touch-svg-import: 'detach.svg' -->


<p>This statement detaches an additional database connection previously 
attached using the <a href="lang_attach">ATTACH</a> statement. 
When not in <a href="https://www.sqlite.org/sharedcache.html" target="_blank">shared cache mode</a>, 
it is possible to have the same database file attached multiple times using 
different names, and detaching one connection to a file will leave the 
others intact.</p>

<p>
In <a href="https://www.sqlite.org/sharedcache.html" target="_blank">shared cache mode</a>, attempting to attach the same database file more
than once results in an error.
</p>


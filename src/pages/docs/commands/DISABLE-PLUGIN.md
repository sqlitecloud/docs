## DISABLE PLUGIN

### Syntax

DISABLE PLUGIN **plugin_name**

### Privileges

```
PLUGIN
```

### Description

Use this command to disable a plugin. Established connections will continue to have that plugin loaded. The disabled setting affects only new connection.

### Return

OK

### Example

```bash
> DISABLE PLUGIN sample.plugin
OK
```

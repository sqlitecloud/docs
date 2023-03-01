---
title: LOAD PLUGIN
description: In a running server the LOAD PLUGIN command forces plugin_name to be loaded in the core services. A loaded plugin is also enabled by default and it will be registered in newly established connections.
---

## Syntax

LOAD PLUGIN **plugin_name**

## Privileges

```
PLUGIN
```

## Description

In a running server the LOAD PLUGIN command forces plugin_name to be loaded in the core services. A loaded plugin is also enabled by default and it will be registered in newly established connections.

## Return

OK

## Example

```bash
> LOAD PLUGIN sample.plugin
OK
```

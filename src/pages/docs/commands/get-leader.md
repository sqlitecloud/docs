---
title: GET LEADER
description: In a cluster the GET LEADER command returns the IP address and port of the Raft leader node.
If the ID parameter is specified then the nodeID of the leader node is returned.
---

## GET LEADER

### Syntax

GET LEADER [ID]

### Privileges

```
CLUSTERADMIN, CLUSTERMONITOR
```

### Description

In a cluster the GET LEADER command returns the IP address and port of the Raft leader node.
If the ID parameter is specified then the nodeID of the leader node is returned.

### Return

A string containing the IP address and port of the leader.
If the ID parameter is specified then the integer nodeID of the leader node is returned.

### Example

```bash
> GET LEADER
192.168.1.1:8860

> GET LEADER ID
3
```

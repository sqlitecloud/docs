---
title: TRANSFER LEADERSHIP TO NODE
description: The TRANSFER LEADERSHIP TO NODE command is rarely used (mostly for debugging purpose) but it can be used to force Raft to change its leader node to a specific nodeid. The leader node is the one that is used for write operations so it is wise to force the most powerful node to be the leader of a Raft cluster.
---

## TRANSFER LEADERSHIP TO NODE

### Syntax

TRANSFER LEADERSHIP TO NODE **nodeid**

### Privileges

```
CLUSTERADMIN
```

### Description

The TRANSFER LEADERSHIP TO NODE command is rarely used (mostly for debugging purpose) but it can be used to force Raft to change its leader node to a specific nodeid. The leader node is the one that is used for write operations so it is wise to force the most powerful node to be the leader of a Raft cluster.

### Return

OK

### Example

```bash
> GET LEADER ID
1

> TRANSFER LEADERSHIP TO NODE 3
OK

> GET LEADER ID
3
```

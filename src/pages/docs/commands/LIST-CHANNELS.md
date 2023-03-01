## LIST CHANNELS

### Syntax

LIST CHANNELS

### Privileges

```
PUBSUB
```

### Description

The LIST CHANNELS command return a list of previously created channels that can be used to exchange messages. This command returns only channels created with the CREATE CHANNEL command. To get a list of tables you can subscribe to you can use the LIST TABLES PUBSUB command. The PUBSUB argument forces the LIST TABLES to return a rowset compatible with the rowset returned by the LIST CHANNELS command.

### Return

A rowset with a single `chname` column.

### Example

```bash
> LIST CHANNELS
----------|
 chname   |
----------|
 channel1 |
 channel2 |
 channel3 |
 channel4 |
 channel5 |
 channel6 |
----------|
```

## NOTIFY

### Syntax

NOTIFY **channel_name** [**payload_value**]

### Privileges

```
PUB
```

### Description

The NOTIFY command is used to send an optional payload (usually a string) to a specified channel_name.
If no payload is specified then an empty notification is sent.

### Return

OK

### Example

```bash
> NOTIFY channel1 "Hello World"
OK
```

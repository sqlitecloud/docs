## LIST ALLOWED IP

### Syntax

LIST ALLOWED IP [ROLE **role_name**] [USER **username**]

### Privileges

```
USERADMIN
```

### Description

The LIST ALLOWED IP returns a rowset that contains all the IP restrictions associated to a given ROLE and/or USER. If no ROLE/USER is specified then all the IP restrictions table is returned.

### Return

A rowset with the `address`, `name` and `type` columns.

### Example

```bash
> LIST ALLOWED IP
------------|-------|------|
 address    | name  | type |
------------|-------|------|
192.168.1.1 | user1 | user |
------------|-------|------|

```

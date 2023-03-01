## GET SQL

### Syntax

GET SQL **table_name**

### Privileges

```
READWRITE
```

### Description

The GET SQL command is used to retrieve the SQL statement used to generated the <table_name>.

### Return

A strings set to the CREATE TABLE sql statement.

### Example

```bash
> GET SQL table1
CREATE TABLE table1 (id INTEGER PRIMARY KEY, name TEXT, surname TEXT, age INTEGER);
```

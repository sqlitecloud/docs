---
title: LIST TABLES
description: The LIST TABLES command is used to retrive the information about the tables available inside current database. Note that the output of this command can change depending on the privileges associated to the currently connected username. If the PUBSUB parameter is used then the output will contains the column chname only (to have the same format as the rowset returned by the LIST CHANNELS command).
---

## LIST TABLES

### Syntax

LIST TABLES [PUBSUB]

### Privileges

```
READWRITE
```

### Description

The LIST TABLES command is used to retrive the information about the tables available inside current database. Note that the output of this command can change depending on the privileges associated to the currently connected username. If the PUBSUB parameter is used then the output will contains the column chname only (to have the same format as the rowset returned by the LIST CHANNELS command).

### Return

A rowset with the following columns: `schema`, `name`, `type`, `ncol`, `wr, `strict`.

### Example

```bash
> LIST TABLES
--------|---------------|-------|------|----|--------|
 schema | name          | type  | ncol | wr | strict |
--------|---------------|-------|------|----|--------|
 main   | Track         | table | 9    | 0  | 0      |
 main   | PlaylistTrack | table | 2    | 0  | 0      |
 main   | Playlist      | table | 2    | 0  | 0      |
 main   | Artist        | table | 2    | 0  | 0      |
 main   | Customer      | table | 13   | 0  | 0      |
 main   | Employee      | table | 15   | 0  | 0      |
 main   | Genre         | table | 2    | 0  | 0      |
 main   | Invoice       | table | 9    | 0  | 0      |
 main   | Album         | table | 3    | 0  | 0      |
 main   | InvoiceLine   | table | 5    | 0  | 0      |
 main   | MediaType     | table | 2    | 0  | 0      |
--------|---------------|-------|------|----|--------|
```

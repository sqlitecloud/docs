---
title: LIST DATABASES
description: The LIST DATABASES command return information and statistics about the databases currently available on the server.
---

## Syntax

LIST DATABASES [DETAILED]

## Privileges

```
NONE
```

## Description

The LIST DATABASES command return information and statistics about the databases currently available on the server.

## Return

A rowset that contains the column `name` if the DETAILED flag is omitted, otherwise several other columns like: `size`, `connections`, `encryption`, `backup`, `nread`, `nwrite`, `inbytes`, `outbytes`,  `fragmentation, `pagesize`, `encoding` and `status`

## Example

```bash
> LIST DATABASES DETAILED
--------------------------|-----------|-------------|------------|--------|-------|--------|---------|----------|---------------|----------|----------|--------|
 name                     | size      | connections | encryption | backup | nread | nwrite | inbytes | outbytes | fragmentation | pagesize | encoding | status |
--------------------------|-----------|-------------|------------|--------|-------|--------|---------|----------|---------------|----------|----------|--------|
 555.sqlite               | 104992768 | 0           | NULL       | 0      | 0     | 0      | 0       | 0        | 0.00          | 4096     | UTF-8    | 1      |
 cli-test-1.sqlite        | 12288     | 0           | NULL       | 0      | 0     | 0      | 0       | 0        | 0.33          | 4096     | UTF-8    | 1      |
 cli-test-2.sqlite        | 12288     | 0           | NULL       | 0      | 0     | 0      | 0       | 0        | 0.33          | 4096     | UTF-8    | 1      |
 images.sqlite            | 11409408  | 0           | NULL       | 0      | 0     | 0      | 0       | 0        | 0.00          | 1024     | UTF-8    | 1      |
 mediastore.sqlite        | 921600    | 0           | NULL       | 0      | 0     | 0      | 0       | 0        | 0.00          | 4096     | UTF-8    | 1      |
 multiple-commands.sqlite | 12288     | 0           | NULL       | 0      | 0     | 0      | 0       | 0        | 0.33          | 4096     | UTF-8    | 1      |
 numbers.sqlite           | 12288     | 0           | NULL       | 0      | 0     | 0      | 0       | 0        | 0.00          | 4096     | UTF-8    | 1      |
 pluto.sqlite             | 4246528   | 0           | NULL       | 0      | 0     | 0      | 0       | 0        | 0.00          | 1024     | UTF-8    | 1      |
 test.sqlite              | 32768     | 0           | NULL       | 0      | 0     | 0      | 0       | 0        | 0.12          | 4096     | UTF-8    | 1      |
--------------------------|-----------|-------------|------------|--------|-------|--------|---------|----------|---------------|----------|----------|--------|

```

---
title: "SQLite-Columnar"
description: "Column-oriented analytics inside SQLite for fast local scans, aggregations, and grouped summaries."
category: platform
status: publish
slug: sqlite-columnar
---

`sqlite-columnar` brings column-oriented analytics to SQLite as a self-contained
extension. It lets applications keep the operational simplicity of
SQLite while adding a storage and execution path built for analytical scans,
aggregations, and grouped summaries over wide datasets.

It does not patch SQLite's pager, btree, parser, VDBE, or shell. Use it to
create columnar virtual tables for the parts of your application that behave
more like analytics than OLTP.

> **GitHub repository:** [sqliteai/sqlite-columnar](https://github.com/sqliteai/sqlite-columnar)

## Why Columnar SQLite?

Traditional SQLite tables are row-oriented, which is excellent for point
lookups, small updates, and transactional application state. Analytical
workloads are different: they often read a few columns across many rows, compute
aggregates, group by dimensions, and filter by ranges. In those cases, reading
entire rows means paying I/O and CPU cost for data the query never uses.

`sqlite-columnar` stores each column separately, tracks chunk-level metadata,
and provides specialized aggregate helpers that avoid generic row
materialization for common analytical queries.

## Performance Highlights

On the included 10 million row variance benchmark, `sqlite-columnar` shows
large median speedups over standard row-oriented SQLite for operations that
benefit from columnar layout and precomputed metadata:

- `sum(v1)` with `columnar_sum`: **130,583x faster**
- `avg(v3)` with `columnar_avg`: **129,317x faster**
- `count(v1)` with `columnar_count`: **125,194x faster**
- grouped `sum` by dimension: **6.04x faster**
- grouped `count` by dimension: **14.13x faster**
- grouped `sum/avg/count` by dimension: **6.42x faster**
- clustered range filter on `ts`: **248.89x faster**
- clustered range filter plus grouped `sum/avg/count`: **273.20x faster**

These numbers are workload-specific. They are strongest when queries scan a
small subset of columns, use aggregate metadata, group over low-cardinality
dimensions, or filter on clustered/range-friendly columns. See
[BENCHMARK.md](/docs/sqlite-columnar-benchmarks) for the full dataset, commands, timings, and
interpretation.

## Common Use Cases

`sqlite-columnar` is useful when an embedded application needs analytical
queries without moving data into a separate database server.

Good fits include:

- embedded dashboards over local event, telemetry, or product analytics data
- time-series rollups where queries filter by timestamp ranges
- IoT and edge analytics over wide sensor records
- desktop or mobile apps with local reporting and summary views
- feature stores or ML preprocessing jobs that scan a few feature columns at a
  time
- audit logs and observability data where users aggregate by service, region,
  status, or time bucket
- SaaS tenant-local analytics where a single-file SQLite database is still the
  preferred deployment model
- ETL validation workloads that repeatedly compute counts, sums, min/max, and
  grouped quality checks

Row-oriented SQLite remains the better default for highly transactional
workloads, point lookups, and frequent single-row updates. `sqlite-columnar` is
intended for the analytical tables in the same application.

## How It Works

Each columnar virtual table owns shadow tables for rowids, column values,
global stats, chunk zone maps, dirty chunks, and table-level metadata.

`columnar_analyze()` builds the metadata used by specialized analytical
functions. After the initial bootstrap, analyze is incremental: inserts,
updates, and deletes mark touched chunks dirty, and later analyze calls rebuild
only those chunks. If metadata says stats are valid and there are no dirty
chunks, analyze returns immediately.

Range-filtered helpers use chunk min/max summaries to skip rowid ranges that
cannot match a filter. Grouped helpers perform hash aggregation in C over only
the required column shadow tables.

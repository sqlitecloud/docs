---
title: "SQLite-Columnar Getting Started"
description: "Build, load, and query SQLite-Columnar virtual tables for embedded analytics."
category: platform
status: publish
slug: sqlite-columnar-getting-started
---

## Build

From this directory:

```sh
make
```

By default the build uses the bundled `sqlite/` directory for `sqlite3ext.h`.
To build against a different SQLite checkout or amalgamation directory, pass
`SQLITE_SRC`:

```sh
make SQLITE_SRC=/path/to/sqlite
```

This produces `columnar.dylib` on macOS or `columnar.so` on Linux.

## Prebuilt Binaries

Tagged releases build loadable extension binaries for Linux, Linux musl,
macOS, Windows, Android, iOS, and iOS Simulator. macOS release assets are
Developer ID signed and notarized ZIP archives. Other platforms are published
as release archives. Each asset contains the platform binary plus `README.md`,
`API.md`, `BENCHMARK.md`, and `GIT_COMMIT`. Release assets also include
`SHA256SUMS` for archive verification.

## Quick Start

```sql
.load ./columnar

CREATE VIRTUAL TABLE sales USING columnar(
  id INTEGER,
  region TEXT,
  amount REAL
);

INSERT INTO sales VALUES
  (1, 'north', 10.0),
  (2, 'north', 20.0),
  (3, 'south', 5.0);

SELECT columnar_analyze('sales');
SELECT columnar_sum('sales', 'amount');

SELECT k, "sum", "avg", "count"
  FROM columnar_group_sum_avg_count('sales', 'region', 'amount')
 ORDER BY k;
```

See [API.md](/docs/sqlite-columnar-api-reference) for the complete SQL API reference with examples for every
function and table-valued helper.

## Test

```sh
make test SQLITE3=/path/to/sqlite3
```

The test target runs the SQL smoke suite plus a native robustness suite. The
robustness suite checks rollback and savepoint behavior, simulated process
death during an uncommitted transaction, unusual table/column names and mixed
SQLite storage classes, and automatic result equivalence between each
specialized columnar query helper and the matching ordinary SQLite query.

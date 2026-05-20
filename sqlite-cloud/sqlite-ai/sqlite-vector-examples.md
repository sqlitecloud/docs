---
title: "SQLite-Vector Examples"
description: "SQLite-Vector examples for inserting, quantizing, preloading, and searching vectors."
category: platform
status: publish
slug: sqlite-vector-examples
---

## Example Usage

```sql
-- Create a regular SQLite table
CREATE TABLE images (
  id INTEGER PRIMARY KEY,
  embedding BLOB, -- store Float32/UInt8/etc.
  label TEXT
);

-- Insert a BLOB vector (Float32, 384 dimensions) using bindings
INSERT INTO images (embedding, label) VALUES (?, 'cat');

-- Insert a JSON vector (Float32, 384 dimensions)
INSERT INTO images (embedding, label) VALUES (vector_as_f32('[0.3, 1.0, 0.9, 3.2, 1.4,...]'), 'dog');

-- Initialize the vector. By default, the distance function is L2.
-- To use a different metric, specify one of the following options:
-- distance=L1, distance=COSINE, distance=DOT, distance=SQUARED_L2, or distance=HAMMING.
SELECT vector_init('images', 'embedding', 'type=FLOAT32,dimension=384');

-- Quantize vector
SELECT vector_quantize('images', 'embedding');

-- Optional preload quantized version in memory (for a 4x/5x speedup) 
SELECT vector_quantize_preload('images', 'embedding');

-- Run a nearest neighbor query on the quantized version (returns top 20 closest vectors)
SELECT e.id, v.distance FROM images AS e
   JOIN vector_quantize_scan('images', 'embedding', ?, 20) AS v
   ON e.id = v.rowid;

-- Streaming mode: omit k to get rows progressively, use SQL to filter and limit
SELECT e.id, v.distance FROM images AS e
   JOIN vector_quantize_scan('images', 'embedding', ?) AS v
   ON e.id = v.rowid
   WHERE e.label = 'cat'
   LIMIT 10;
```

### Swift Package

You can [add this repository as a package dependency to your Swift project](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app#Add-a-package-dependency). After adding the package, you'll need to set up SQLite with extension loading by following steps 4 and 5 of [this guide](https://github.com/sqliteai/sqlite-extensions-guide/blob/main/platforms/ios.md#4-set-up-sqlite-with-extension-loading).

Here's an example of how to use the package:
```swift
import vector

...

var db: OpaquePointer?
sqlite3_open(":memory:", &db)
sqlite3_enable_load_extension(db, 1)
var errMsg: UnsafeMutablePointer<Int8>? = nil
sqlite3_load_extension(db, vector.path, nil, &errMsg)
var stmt: OpaquePointer?
sqlite3_prepare_v2(db, "SELECT vector_version()", -1, &stmt, nil)
defer { sqlite3_finalize(stmt) }
sqlite3_step(stmt)
log("vector_version(): \(String(cString: sqlite3_column_text(stmt, 0)))")
sqlite3_close(db)
```

### Android Package

Add the [following](https://central.sonatype.com/artifact/ai.sqlite/vector) to your Gradle dependencies:

```gradle
implementation 'ai.sqlite:vector:0.9.80'
```

Here's an example of how to use the package:
```java
SQLiteCustomExtension vectorExtension = new SQLiteCustomExtension(getApplicationInfo().nativeLibraryDir + "/vector", null);
SQLiteDatabaseConfiguration config = new SQLiteDatabaseConfiguration(
    getCacheDir().getPath() + "/vector_test.db",
    SQLiteDatabase.CREATE_IF_NECESSARY | SQLiteDatabase.OPEN_READWRITE,
    Collections.emptyList(),
    Collections.emptyList(),
    Collections.singletonList(vectorExtension)
);
SQLiteDatabase db = SQLiteDatabase.openDatabase(config, null, null);
```

**Note:** Additional settings and configuration are required for a complete setup. For full implementation details, see the [complete Android example](https://github.com/sqliteai/sqlite-extensions-guide/blob/main/examples/android/README.md).

### Python Package

Python developers can quickly get started using the ready-to-use `sqlite-vector` package available on PyPI:

```bash
pip install sqliteai-vector
```

For usage details and examples, see the [Python package documentation](https://github.com/sqliteai/sqlite-vector/tree/main/packages/python).

### Flutter Package

Add the [sqlite_vector](https://pub.dev/packages/sqlite_vector) package to your project:

```bash
flutter pub add sqlite_vector  # Flutter projects
dart pub add sqlite_vector     # Dart projects
```

Usage with `sqlite3` package:
```dart
import 'package:sqlite3/sqlite3.dart';
import 'package:sqlite_vector/sqlite_vector.dart';

sqlite3.loadSqliteVectorExtension();
final db = sqlite3.openInMemory();
print(db.select('SELECT vector_version()'));
```

For a complete example, see the [Flutter example](https://github.com/sqliteai/sqlite-extensions-guide/blob/main/examples/flutter/README.md).

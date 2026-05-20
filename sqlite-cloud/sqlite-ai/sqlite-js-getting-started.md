---
title: "SQLite-JS Getting Started"
description: "Install SQLite-JS and load it in SQLite, Swift, Android, Node.js, or Flutter applications."
category: platform
status: publish
slug: sqlite-js-getting-started
---

## Installation

### Pre-built Binaries

Download the appropriate pre-built binary for your platform from the official [Releases](https://github.com/sqliteai/sqlite-js/releases) page:

- Linux: x86 and ARM
- macOS: x86 and ARM
- Windows: x86
- Android
- iOS

### Loading the Extension

```sql
-- In SQLite CLI
.load ./js

-- In SQL
SELECT load_extension('./js');
```

### Swift Package

You can [add this repository as a package dependency to your Swift project](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app#Add-a-package-dependency). After adding the package, you'll need to set up SQLite with extension loading by following steps 4 and 5 of [this guide](https://github.com/sqliteai/sqlite-extensions-guide/blob/main/platforms/ios.md#4-set-up-sqlite-with-extension-loading).

Here's an example of how to use the package:
```swift
import js

...

var db: OpaquePointer?
sqlite3_open(":memory:", &db)
sqlite3_enable_load_extension(db, 1)
var errMsg: UnsafeMutablePointer<Int8>? = nil
sqlite3_load_extension(db, js.path, nil, &errMsg)
var stmt: OpaquePointer?
sqlite3_prepare_v2(db, "SELECT js_version()", -1, &stmt, nil)
defer { sqlite3_finalize(stmt) }
sqlite3_step(stmt)
log("js_version(): \(String(cString: sqlite3_column_text(stmt, 0)))")
sqlite3_close(db)
```

### Android Package

Add the [following](https://central.sonatype.com/artifact/ai.sqlite/js) to your Gradle dependencies:

```gradle
implementation 'ai.sqlite:js:1.3.0'
```

Here's an example of how to use the package:
```java
SQLiteCustomExtension jsExtension = new SQLiteCustomExtension(getApplicationInfo().nativeLibraryDir + "/js", null);
SQLiteDatabaseConfiguration config = new SQLiteDatabaseConfiguration(
    getCacheDir().getPath() + "/js_test.db",
    SQLiteDatabase.CREATE_IF_NECESSARY | SQLiteDatabase.OPEN_READWRITE,
    Collections.emptyList(),
    Collections.emptyList(),
    Collections.singletonList(jsExtension)
);
SQLiteDatabase db = SQLiteDatabase.openDatabase(config, null, null);
```

**Note:** Additional settings and configuration are required for a complete setup. For full implementation details, see the [complete Android example](https://github.com/sqliteai/sqlite-extensions-guide/blob/main/examples/android/README.md).

### Node.js Package

Install the [@sqliteai/sqlite-js](https://www.npmjs.com/package/@sqliteai/sqlite-js) package:

```bash
npm install @sqliteai/sqlite-js
```

Usage with `better-sqlite3`:
```typescript
import { getExtensionPath } from '@sqliteai/sqlite-js';
import Database from 'better-sqlite3';

const db = new Database(':memory:');
db.loadExtension(getExtensionPath());
console.log(db.prepare('SELECT js_version()').pluck().get());
```

### Flutter Package

Add the [sqlite_js](https://pub.dev/packages/sqlite_js) package to your project:

```bash
flutter pub add sqlite_js  # Flutter projects
dart pub add sqlite_js     # Dart projects
```

Usage with `sqlite3` package:
```dart
import 'package:sqlite3/sqlite3.dart';
import 'package:sqlite_js/sqlite_js.dart';

sqlite3.loadSqliteJsExtension();
final db = sqlite3.openInMemory();
print(db.select('SELECT js_version()'));
```

For a complete example, see the [Flutter example](https://github.com/sqliteai/sqlite-extensions-guide/blob/main/examples/flutter/README.md).

## Building from Source

See the included Makefile for building instructions:

```bash
## Build for your current platform
make

## Build for a specific platform
make PLATFORM=macos
make PLATFORM=linux
make PLATFORM=windows

## Install
make install
```

---

---
title: "MacOS Quick Start Guide"
description: SQLite Sync is a multi-platform extension that brings a true local-first experience to your applications with minimal effort.
category: platform
status: publish
slug: sqlite-sync-quick-start-macos
---

This guide explains how to install SQLite on macOS with support for loading extensions.

## macOS and xcframework

On recent versions of macOS, the recommended way to load a SQLite extension is through the <a href="https://github.com/sqliteai/sqlite-extensions-guide/blob/main/platforms/ios.md" target="_blank">.xcframework</a> approach, the same method used on iOS.

## macOS and dylib

On macOS, dynamic libraries (`.dylib`) can be loaded at runtime using SQLite’s `sqlite3_load_extension` API.

### Step 1: Add Bridging Header (if using Swift only)

Create a `bridging-header.h` file:

```c
#include <sqlite3.h>
```

Set it in your Xcode project under **Build Settings → Objective-C Bridging Header**.

### Step 2: Swift Code to Load Extension

```swift
import Foundation
import SQLite3

let dbPath = ":memory:" // or a real file path
var db: OpaquePointer?

if sqlite3_open(dbPath, &db) != SQLITE_OK {
    fatalError("Failed to open database")
}

// Enable loading extensions
if sqlite3_enable_load_extension(db, 1) != SQLITE_OK {
    let err = String(cString: sqlite3_errmsg(db))
    fatalError("Enable extension loading failed: \(err)")
}

// Load the extension
let extensionPath = Bundle.main.path(forResource: "my_extension", ofType: "dylib")!
if sqlite3_load_extension(db, extensionPath, nil, nil) != SQLITE_OK {
    let err = String(cString: sqlite3_errmsg(db))
    fatalError("Extension loading failed: \(err)")
}

print("Extension loaded successfully.")
```

> ⚠️ Gatekeeper may block unsigned `.dylib` files. You might need to codesign or use `spctl --add`.

## Python on macOS

The default Python on macOS doesn't support loading SQLite extensions.
Install Python from the <a href="https://www.python.org/downloads/macos/" target="_blank">official package</a> or use Homebrew Python instead:

```bash
brew install python
```

Verify that you are using the Homebrew-installed `python3` by running:

```bash
which python3

# /opt/homebrew/bin/python3
```

After installing Python with Homebrew, the `python` command now uses the Homebrew version.  
You can now load SQLite extensions in Python as shown here.

```python
import sqlite3
import os

# Path to your compiled extension (.dylib for macOS/iOS)
EXTENSION_PATH = os.path.abspath("cloudsync")

# Connect to SQLite and enable extension loading
conn = sqlite3.connect(":memory:")
conn.enable_load_extension(True)

# Load the extension
try:
    conn.load_extension(EXTENSION_PATH)
    print("Extension loaded successfully.")
except sqlite3.OperationalError as e:
    print(f"Failed to load extension: {e}")

conn.enable_load_extension(False)

# Optionally test it (e.g., call a custom SQL function)
cursor = conn.execute("SELECT cloudsync_version();")
print(cursor.fetchone())
```

## Usage Example

Check out the <a href="https://github.com/sqliteai/sqlite-sync/tree/main/examples/swift-multiplatform-app" target="_blank">Swift Multiplatform app</a> for a complete implementation of using the SQLite CloudSync extension to sync data across devices.

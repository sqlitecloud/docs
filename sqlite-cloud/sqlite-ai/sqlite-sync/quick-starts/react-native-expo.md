# React Native - Expo Quick Start Guide

This guide shows how to integrate CloudSync extensions in Expo and React Native applications using OP-SQLite.

## Getting Started

Before setting up SQLite extensions, you'll need to create and initialize your project:

### Create a New Expo Project

```bash
# Create a new project
npx create-expo-app MyApp

# Or use our pre-configured template with SQLite extensions
npx create-expo-app MyApp --template @sqliteai/todoapp
```

### Initialize for Native Code

Since SQLite extensions require native code, you must initialize your project:

```bash
cd MyApp
npx expo prebuild
```

> **Important**: This setup requires native code generation. Run `npx expo prebuild` after any changes to native dependencies or extension files.

## Android Setup

### Step 1: Download Android Extension

1. Go to [sqlite-sync releases](https://github.com/sqliteai/sqlite-sync/releases)
2. Download your preferred .zip architecture releases:
   - arm64-v8a - Modern 64-bit ARM devices (recommended for most users)
   - x86_64 - 64-bit x86 emulators and Intel-based devices

### Step 2: Place Extension Files

Extract the `.so` files in the following directory structure:

```
/android
  /app
    /src
      /main
        /jniLibs
          /arm64-v8a
            cloudsync.so
          /x86_64
            cloudsync.so
```

> **Note:** Create the `jniLibs` directory structure if it doesn't exist.

## iOS Setup

### Step 1: Download iOS Extension

1. Go to [sqlite-sync releases](https://github.com/sqliteai/sqlite-sync/releases)
2. Download the `cloudsync-apple-xcframework-*.zip`
3. Extract `CloudSync.xcframework`

### Step 2: Add Framework to Project

1. Place the framework in your project:

   ```
   /ios
     /[app-name]
       /Frameworks
         /CloudSync.xcframework
   ```

2. **Open Xcode:**

   - Open Existing Project → Select your Expo app's `ios` folder
   - Click on your app name (top left, with Xcode logo)

3. **Configure Target:**

   - Go to **Targets** → **[app-name]** → **General** tab
   - Scroll down to **"Frameworks, Libraries, and Embedded Content"**
   - Click **"+"** → **"Add Other…"** → **"Add Files…"**
   - Select `/ios/[app-name]/Frameworks/CloudSync.xcframework`

4. **Set Embed Options:**

   - Ensure the **"Embed"** column shows either:
     - **"Embed & Sign"** (recommended)
     - **"Embed Without Signing"**

5. **Verify Build Phases:**

   - Go to **"Build Phases"** tab
   - Check that **"Embed Frameworks"** section contains **CloudSync**

6. Close Xcode

## Install OP-SQLite

### For React Native:

```bash
npm install @op-engineering/op-sqlite
npx pod-install
```

### For Expo:

```bash
npx expo install @op-engineering/op-sqlite
npx expo prebuild
```

## Implementation

### Basic Setup

```javascript
import { getDylibPath, open } from "@op-engineering/op-sqlite";
import { Platform } from "react-native";

// Open database connection
const db = open({ name: "to-do-app" });
```

### Load Extension

```javascript
const loadCloudSyncExtension = async () => {
  let extensionPath;

  console.log("Loading CloudSync extension...");

  try {
    if (Platform.OS === "ios") {
      extensionPath = getDylibPath("ai.sqlite.cloudsync", "CloudSync");
    } else {
      extensionPath = "cloudsync";
    }

    // Load the extension
    db.loadExtension(extensionPath);

    // Verify extension loaded successfully
    const version = await db.execute("SELECT cloudsync_version();");
    console.log(
      `CloudSync extension loaded successfully, version: ${version.rows[0]["cloudsync_version()"]}`
    );

    return true;
  } catch (error) {
    console.error("Error loading CloudSync extension:", error);
    return false;
  }
};
```

## Usage Example

Check out the [Expo to-do-app](https://github.com/sqliteai/sqlite-sync/tree/main/examples/to-do-app) for comprehensive usage examples and best practices.

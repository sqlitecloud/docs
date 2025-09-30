---
title: SQLite-Sync WASM Quick Start
description: SQLite Sync is a multi-platform extension that brings a true local-first experience to your applications with minimal effort.
category: platform
status: publish
slug: sqlite-sync-quick-start-windows
---

## Windows Quick Start

This guide explains how to install SQLite on Windows with support for loading extensions.

## Using SQLite with Python

1. **Download Python**  
   Get the latest Python for Windows from [python.org](https://www.python.org/downloads/windows/).

2. **Install Python**

   - Run the installer.
   - Make sure to check **"Add Python to PATH"**.
   - SQLite comes bundled with Python, no extra steps needed.

3. **Check your installation**  
   Open Command Prompt and run:

   ```bash
   python --version
   python -c "import sqlite3; print('SQLite version:', sqlite3.sqlite_version)"
   ```

4. **Download the Extension**
   Go to [sqlite-sync releases](https://github.com/sqliteai/sqlite-sync/releases) and download the extension.

5. **Load Extension**

   ```
   import sqlite3
   import os

   # Path to your compiled extension (.dll for Windows)
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

## Using SQLite with C#

This guide shows how to load a native SQLite extension (e.g., **`cloudsync.dll`**) from a C# app on **Windows** using **`Microsoft.Data.Sqlite`**.

### Prerequisites

- Windows x64
- .NET 6+ SDK
- [NuGet package manager](https://learn.microsoft.com/en-us/nuget/install-nuget-client-tools?tabs=windows)
- The native extension file: `cloudsync.dll` (x64 build) - download from [sqlite-sync releases](https://github.com/sqliteai/sqlite-sync/releases)

> **Important:** Your app, `e_sqlite3.dll` (bundled by `Microsoft.Data.Sqlite`), and `cloudsync.dll` must all be the **same architecture** (typically x64).

---

### 1. Install the SQLite package

Install the [`Microsoft.Data.Sqlite`](https://www.nuget.org/packages/Microsoft.Data.Sqlite) NuGet package:

```bash
dotnet add package Microsoft.Data.Sqlite
```

### 2. Set up your project structure

Place `cloudsync.dll` in your project and configure it to copy to the output folder.

Example directory structure:

```
MyApp/
  Program.cs
  Native/
    cloudsync.dll
  MyApp.csproj
```

Configure your `MyApp.csproj` file:

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net8.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.Data.Sqlite" Version="8.*" />
  </ItemGroup>

  <!-- Copy native extension to build output -->
  <ItemGroup>
    <None Include="Native\cloudsync.dll">
      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
    </None>
  </ItemGroup>
</Project>
```

### 3. Load the extension in your code

Create your `Program.cs` file to initialize SQLite and load the extension:

```csharp
using System;
using Microsoft.Data.Sqlite;

class Program
{
    static void Main()
    {
        // Configure the database connection
        var cs = new SqliteConnectionStringBuilder
        {
            DataSource = "example.db",
            Mode = SqliteOpenMode.ReadWriteCreate
        }.ToString();

        using var conn = new SqliteConnection(cs);
        conn.Open();

        // Enable extension loading
        conn.EnableExtensions();

        // Load the native extension (DLL must be next to the EXE or on PATH)
        // You can pass an absolute path if you prefer
        conn.LoadExtension("cloudsync");

        // Verify SQLite is working
        using var cmd = conn.CreateCommand();
        cmd.CommandText = "SELECT sqlite_version();";
        Console.WriteLine("SQLite version: " + cmd.ExecuteScalar());

        // Verify the extension is loaded
        cmd.CommandText = "SELECT cloudsync_version();";
        Console.WriteLine("cloudsync_version(): " + cmd.ExecuteScalar());
    }
}
```

### 4. Run your application

Build and run your application:

```bash
dotnet build
dotnet run
```

You should see output similar to:

```
SQLite version: 3.45.0
cloudsync_version(): 1.0.0
```

#### Extension search locations

SQLite searches for extensions in this order:

1. Process working directory
2. Application base directory (where your .exe lives)
3. PATH environment variable directories
4. Full path provided to `LoadExtension(...)`

> **Tip:** For most apps, simply copying the DLL to the output folder (next to your .exe) is sufficient.

---

### Common issues and solutions

**SqliteException: not authorized**

- **Cause:** Extension loading not enabled
- **Fix:** Call `conn.EnableExtensions()` before loading

**SqliteException: The specified module could not be found**

- **Cause:** DLL not in search path or missing dependencies
- **Fix:** Place DLL next to .exe, use absolute path, or ensure dependencies are available

**BadImageFormatException**

- **Cause:** Architecture mismatch (e.g., mixing x86 and x64)
- **Fix:** Ensure app, `e_sqlite3.dll`, and `cloudsync.dll` are all the same architecture

**EntryPointNotFoundException**

- **Cause:** DLL is not a valid SQLite extension
- **Fix:** Verify the extension exports `sqlite3_extension_init`

**Windows "blocked" DLL**

- **Cause:** Downloaded DLL is blocked by Windows
- **Fix:** Right-click → Properties → Check "Unblock" → OK

---

### Deployment

When publishing your app, ensure the extension is included:

```bash
dotnet publish -c Release -r win-x64 --self-contained false
```

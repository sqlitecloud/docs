---
title: Linux Quick Start
description: SQLite Sync is a multi-platform extension that brings a true local-first experience to your applications with minimal effort.
category: platform
status: publish
slug: sqlite-sync-quick-start-linux
---

SQLite on Linux supports dynamic extension loading via `.so` shared libraries.

This guide walks through how to load an extension named `cloudsync.so` on common Linux distributions via SQLite3 Command Line.

---

## 1. Install SQLite (Per Distribution)

### Ubuntu / Debian

```bash
sudo apt install sqlite3
```

### Fedora

```bash
sudo dnf install sqlite
```

### Arch Linux

```bash
pacman -Sy sqlite3
```

### Alpine Linux

```bash
apk add sqlite
```

## 2. Download the Extension

Go to [sqlite-sync releases](https://github.com/sqliteai/sqlite-sync/releases) and download the extension.

> For Alpine Linux: ensure to download the extension specifically for `musl-x86_64` or `musl-arm64` targets.

## 3. Load Extension from CLI

```bash
sqlite3
```

```sql
.load ./cloudsync.so
SELECT cloudsync_version();
```

---

## Troubleshooting

| Problem                                      | Solution                                                          |
| -------------------------------------------- | ----------------------------------------------------------------- |
| `no such file or directory`                  | Ensure path to `.so` is correct and matches your platform.        |
| `incompatible architecture`                  | Download extension for your Linux system (e.g., x86_64 vs arm64). |
| `Failed to load extension: symbol not found` | Download the extension for `musl-x86_64` or `musl-arm64` targets  |

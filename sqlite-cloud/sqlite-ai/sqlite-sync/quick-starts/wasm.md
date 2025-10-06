---
title: "WASM Quick Start Guide"
description: SQLite Sync is a multi-platform extension that brings a true local-first experience to your applications with minimal effort.
category: platform
status: publish
slug: sqlite-sync-quick-start-wasm
---

1. Install the WebAssembly (WASM) version of SQLite with the SQLite Sync extension enabled from npm:

    ```bash
    npm install @sqliteai/sqlite-wasm
    ```

2. Create an HTML file that imports the SQLite WASM module using an import map and references the JavaScript loader:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SQLite WASM Extension Example</title>
    </head>
    <body>
        <h1>SQLite WASM with SQLite Sync Example</h1>
        <p>Open the directory in the terminal and type: <code>npx serve .</code></p>
        <p>Check the browser console for output.</p>
        
        <script type="importmap">
        {
            "imports": {
            "@sqliteai/sqlite-wasm": "./node_modules/@sqliteai/sqlite-wasm/index.mjs"
            }
        }
        </script>
        <script type="module" src="load_extension.js"></script>
    </body>
    </html>
    ```

3. Create the JavaScript file (load_extension.js) that initializes the SQLite WASM worker and verifies the extension is loaded:

    ```javascript
    /**
    * This example uses the package `@sqliteai/sqlite-wasm`.
    * This version of SQLite WASM is bundled with SQLite Sync and SQLite Vector extensions.
    * Extensions cannot be loaded at runtime in the browser environment.
    * 
    * Run: `npx serve .`
    */

    import { sqlite3Worker1Promiser } from '@sqliteai/sqlite-wasm';

    const log = console.log;
    const error = console.error;

    const initializeSQLite = async () => {
    try {
        log('Loading and initializing SQLite3 module with sqlite-sync extension...');

        const promiser = await new Promise((resolve) => {
        const _promiser = sqlite3Worker1Promiser({
            onready: () => resolve(_promiser),
        });
        });

        const configResponse = await promiser('config-get', {});
        log('Running SQLite3 version', configResponse.result.version.libVersion);

        const openResponse = await promiser('open', {
        filename: 'file:mydb.sqlite3',
        });
        const { dbId } = openResponse;
        
        await promiser('exec', { 
            dbId, 
            sql: 'SELECT cloudsync_version();', // or vector_version()
            callback: (result) => {
                if (!result.row) {
                    return;
                }
                log('Include SQLite Sync version: ', result.row[0]);
            }
        });

    } catch (err) {
        if (!(err instanceof Error)) {
        err = new Error(err.result.message);
        }
        error(err.name, err.message);
    }
    };

    initializeSQLite();
    ```

## Usage Example

Check out the [React/Vite app](https://github.com/sqliteai/sqlite-sync/tree/main/examples/sport-tracker-app) for a complete implementation of using the SQLite CloudSync extension to sync data across devices.

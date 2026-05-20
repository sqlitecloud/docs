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


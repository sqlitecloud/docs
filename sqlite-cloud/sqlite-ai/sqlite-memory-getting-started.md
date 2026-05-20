---
title: "SQLite-Memory Getting Started"
description: "Configure sqlite-memory, load embeddings, ingest content, and run semantic memory search."
category: platform
status: publish
slug: sqlite-memory-getting-started
---

## Getting Started

> [!IMPORTANT]
> Databases created with sqlite-memory versions earlier than `1.0.0` must be rebuilt before use with `1.0.0+`, because the internal schema changed.

### Quick Start

```sql
-- Configure embedding model (choose one):

-- Option 1: Local embedding with llama.cpp (no internet required)
SELECT memory_set_model('local', '/path/to/nomic-embed-text-v1.5.Q8_0.gguf');

-- Option 2: Remote embedding via vectors.space (requires free API key from https://vectors.space)
-- The provider name 'openai' selects the vectors.space OpenAI-compatible endpoint.
-- SELECT memory_set_apikey('your-vectorspace-api-key');
-- SELECT memory_set_model('openai', 'text-embedding-3-small');

-- Add some knowledge
SELECT memory_add_text('SQLite is a C-language library that implements a small, fast,
self-contained, high-reliability, full-featured, SQL database engine. SQLite is the
most used database engine in the world.', 'sqlite-docs');

SELECT memory_add_text('Vector databases store data as high-dimensional vectors,
enabling similarity search. They are essential for semantic search, recommendation
systems, and AI applications.', 'concepts');

-- Add an entire documentation directory
SELECT memory_add_directory('/path/to/docs', 'project-docs');

-- Search your memory semantically
SELECT path, snippet, ranking
FROM memory_search
WHERE query = 'how do databases store information efficiently';

-- Results ranked by semantic similarity + keyword matching
-- ┌──────────────┬─────────────────────────────────────┬─────────┐
-- │     path     │               snippet               │ ranking │
-- ├──────────────┼─────────────────────────────────────┼─────────┤
-- │ (uuid)       │ SQLite is a C-language library...   │ 0.89    │
-- │ (uuid)       │ Vector databases store data as...   │ 0.82    │
-- └──────────────┴─────────────────────────────────────┴─────────┘
```

### Example: Building an AI Agent with Memory

```python
import sqlite3

## Connect to your memory database
conn = sqlite3.connect('agent_memory.db')

## One-time setup
conn.execute("SELECT memory_set_model('local', './models/nomic-embed-text-v1.5.Q8_0.gguf')")

## Store conversation context
def remember(content, context="conversation"):
    conn.execute("SELECT memory_add_text(?, ?)", (content, context))
    conn.commit()

## Retrieve relevant memories
def recall(query, min_score=0.7):
    cursor = conn.execute("""
        SELECT snippet, ranking FROM memory_search
        WHERE query = ? AND ranking > ?
        ORDER BY ranking DESC
    """, (query, min_score))
    return cursor.fetchall()

## Use in your agent
remember("User prefers concise responses and uses Python primarily.")
remember("Project deadline is March 15th, focusing on API integration.")

## Later, when the user asks about the project...
memories = recall("what's the project timeline")
## Returns relevant context about March 15th deadline
```

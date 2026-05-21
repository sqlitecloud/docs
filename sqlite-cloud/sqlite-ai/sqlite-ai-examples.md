---
title: "SQLite-AI Examples"
description: "SQLite-AI SQL examples for text generation, embeddings, chat, audio, and vision workflows."
category: platform
status: publish
slug: sqlite-ai-examples
---

## Getting Started

```bash
## Start SQLite CLI
sqlite3 myapp.db
```


### Text Generation

```sql
-- Load a text generation model
SELECT llm_model_load('./models/Qwen2.5-3B-Q4_K_M.gguf', 'gpu_layers=99');
SELECT llm_context_create_textgen();

-- Generate text
SELECT llm_text_generate('What is the most beautiful city in Italy?');
```

### Embedding Generation

```sql
-- Load an embedding model
SELECT llm_model_load('./models/nomic-embed-text-v1.5-Q8_0.gguf', 'gpu_layers=99');
SELECT llm_context_create_embedding('embedding_type=FLOAT32');

-- Generate an embedding vector
SELECT llm_embed_generate('Hello world');

-- Generate an embedding as JSON
SELECT llm_embed_generate('Hello world', 'json_output=1');
```

### Chat

```sql
-- Load a chat model
SELECT llm_model_load('./models/Llama-3.2-3B-Instruct-Q4_K_M.gguf', 'gpu_layers=99');
SELECT llm_context_create_chat();

-- Send a message and get a complete response
SELECT llm_chat_respond('Tell me a joke.');

-- Or stream the reply token by token
SELECT reply FROM llm_chat('Tell me another joke.');
```

### Audio Transcription

```sql
-- Load a Whisper model
SELECT audio_model_load('./models/ggml-tiny.bin');

-- Transcribe from a file path
SELECT audio_model_transcribe('./audio/speech.wav');

-- Transcribe with options
SELECT audio_model_transcribe('./audio/speech.mp3', 'language=it,translate=1');

-- Transcribe from a BLOB column
SELECT audio_model_transcribe(audio_data) FROM recordings WHERE id = 1;
```

### Vision / Multimodal

```sql
-- Load a multimodal model and its vision projector
SELECT llm_model_load('./models/Gemma-3-4B-IT-Q4_K_M.gguf', 'gpu_layers=99');
SELECT llm_context_create_textgen();
SELECT llm_vision_load('./models/mmproj-Gemma-3-4B-IT-f16.gguf');

-- Describe an image
SELECT llm_text_generate('Describe this image', './photos/cat.jpg');

-- Use vision in a chat conversation
SELECT llm_context_create_chat();
SELECT llm_chat_respond('What do you see in this photo?', './photos/landscape.jpg');

-- Analyze multiple images
SELECT llm_text_generate('Compare these two images', './img1.jpg', './img2.jpg');
```

## Tier 4: Context Engineering & RAG

The discipline of getting the right information into the model. Probably the most immediately applicable tier for application work.

- **Context windows** — effective vs. advertised context, "lost in the middle," needle-in-a-haystack evals, long-context degradation.
- **Prompt engineering as a systematic practice** — system prompts, few-shot examples, chain-of-thought, XML/structured prompting, prompt versioning and testing.
- **Embedding models & semantic search** — dense retrieval, cosine similarity, embedding dimensions, domain-specific embeddings.
- **Vector databases** — pgvector, Pinecone, Qdrant, Weaviate, Chroma; HNSW and ANN indexing concepts.
- **RAG architecture** — chunking strategies, hybrid search (BM25 + dense), reranking (cross-encoders), query rewriting, when RAG beats long context and vice versa.
- **Fine-tuning vs. RAG vs. prompting** — the decision framework: when each is the right tool. A very common architectural decision you'll face.
- **Memory systems** — conversation summarization, episodic memory patterns, context compaction in agents.

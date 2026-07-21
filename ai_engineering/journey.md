# AI Engineering Study Catalog

A prioritized map of concepts, tools, and connections for an engineer moving from foundational ML/DL knowledge toward practical implementation strength with modern AI systems. Organized in rough dependency order — earlier tiers unlock later ones.

---

## Tier 1: Transformer Internals (the non-negotiable core)

Everything downstream assumes you understand this layer. Aim to be able to sketch a transformer block from memory and explain what each part does.

- **Tokenization** — BPE (byte-pair encoding), SentencePiece, tiktoken. Why tokenizers matter for cost, context limits, and weird model behaviors (e.g., why models struggle with character counting).
- **Embeddings** — token embeddings vs. contextual embeddings vs. sentence embeddings. These are three different things people conflate constantly.
- **Attention mechanism** — scaled dot-product attention, the Q/K/V decomposition, multi-head attention. This is *the* concept; spend real time here.
- **Attention variants** — multi-query attention (MQA), grouped-query attention (GQA), sliding-window attention, flash attention. These explain most of the efficiency differences between models.
- **Positional encoding** — sinusoidal (original), learned, RoPE (rotary), ALiBi. RoPE is what nearly every modern model uses and it's why context extension tricks work.
- **The transformer block** — residual connections, layer norm (pre-norm vs. post-norm), the MLP/FFN layer, how blocks stack.
- **Decoder-only vs. encoder-decoder vs. encoder-only** — why GPT-style decoder-only won for generation, where BERT-style encoders still matter (embeddings, classification).
- **Autoregressive generation** — next-token prediction, why generation is sequential and what that costs.
- **Sampling strategies** — temperature, top-p (nucleus), top-k, min-p, greedy decoding. Directly relevant to API parameters you already use.
- **Mixture of Experts (MoE)** — sparse activation, routing, why "total params" and "active params" diverge. Most frontier models now use this.

**Recommended anchors:** "Attention Is All You Need" (2017 paper), Karpathy's "Let's build GPT" video and nanoGPT repo, Jay Alammar's "The Illustrated Transformer," 3Blue1Brown's neural network/transformer series.

---

## Tier 2: Training Lifecycle

How a model goes from random weights to something like Claude. Understanding this explains model behavior, capabilities, and failure modes.

- **Pretraining** — next-token prediction on web-scale corpora, data curation/filtering, scaling laws (Chinchilla), compute-optimal training.
- **Loss functions & optimization** — cross-entropy loss, AdamW, learning rate schedules (warmup, cosine decay), gradient clipping.
- **Post-training / alignment** —
  - Supervised fine-tuning (SFT) / instruction tuning
  - RLHF (reward models, PPO)
  - DPO and its variants (simpler alternatives to RLHF)
  - Constitutional AI / RLAIF
- **Parameter-efficient fine-tuning (PEFT)** — LoRA, QLoRA, adapters. This is what you'd actually use to fine-tune a model yourself; full fine-tuning is rarely practical.
- **Quantization** — FP16/BF16, INT8, INT4, GPTQ, AWQ, GGUF formats. Precision vs. quality tradeoffs; why a 70B model can run on a laptop.
- **Distillation** — training small models on large-model outputs; how "mini" model families are made.
- **Distributed training basics** — data parallelism, tensor parallelism, pipeline parallelism, FSDP/ZeRO. You don't need to implement these, but knowing the vocabulary helps you read papers and engineering blogs.
- **Emergent capabilities & scaling** — what changes with scale, in-context learning as a phenomenon.

**Recommended anchors:** Chinchilla paper (scaling laws), InstructGPT paper (the RLHF blueprint), LoRA paper, Karpathy's "Deep Dive into LLMs like ChatGPT."

---

## Tier 3: Inference & Serving

This is where architecture knowledge becomes operational knowledge — latency, throughput, and cost all live here. High leverage for a working engineer.

- **KV cache** — why it exists, why it dominates memory at long context, prompt caching (which Anthropic exposes as an API feature — direct cost implications for you).
- **Prefill vs. decode** — the two phases of inference, why time-to-first-token and tokens-per-second are separate metrics.
- **Batching strategies** — continuous batching, paged attention (the vLLM innovation).
- **Speculative decoding** — draft models, why it speeds up generation without changing outputs.
- **Serving frameworks** — vLLM, TGI (Text Generation Inference), llama.cpp, Ollama, SGLang. Running a local model with Ollama is a cheap, concrete way to internalize a lot of this.
- **Structured output** — constrained decoding, grammars, JSON mode; how "guaranteed valid JSON" actually works at the logit level.
- **Streaming** — SSE, how token streaming works from API to client.
- **Cost mechanics** — input vs. output token pricing, why long contexts are expensive, caching economics.

---

## Tier 4: Context Engineering & RAG

The discipline of getting the right information into the model. Probably the most immediately applicable tier for application work.

- **Context windows** — effective vs. advertised context, "lost in the middle," needle-in-a-haystack evals, long-context degradation.
- **Prompt engineering as a systematic practice** — system prompts, few-shot examples, chain-of-thought, XML/structured prompting, prompt versioning and testing.
- **Embedding models & semantic search** — dense retrieval, cosine similarity, embedding dimensions, domain-specific embeddings.
- **Vector databases** — pgvector, Pinecone, Qdrant, Weaviate, Chroma; HNSW and ANN indexing concepts.
- **RAG architecture** — chunking strategies, hybrid search (BM25 + dense), reranking (cross-encoders), query rewriting, when RAG beats long context and vice versa.
- **Fine-tuning vs. RAG vs. prompting** — the decision framework: when each is the right tool. A very common architectural decision you'll face.
- **Memory systems** — conversation summarization, episodic memory patterns, context compaction in agents.

---

## Tier 5: Agents & Tool Use

Given your Claude Code usage, this tier connects directly to tools you already touch daily — you'll recognize the patterns from the inside.

- **Function/tool calling** — how tool schemas work, how models decide to call tools, parallel tool calls, tool results as conversation turns.
- **The agent loop** — ReAct pattern (reason → act → observe), planning, task decomposition, termination conditions.
- **MCP (Model Context Protocol)** — the open standard for connecting models to tools/data; servers, clients, resources vs. tools. Directly relevant since Claude Code is an MCP client and you can write your own servers.
- **Agentic coding architecture** — how Claude Code–style agents work: file system access, shell execution, edit strategies, permission models, context management over long sessions.
- **Multi-agent patterns** — orchestrator/worker, subagents, handoffs; when multi-agent helps vs. adds failure modes.
- **Agent reliability** — error recovery, guardrails, human-in-the-loop checkpoints, sandboxing.
- **Computer use / browser agents** — screenshot-based control, accessibility trees, the current frontier and its limits.
- **Reasoning/extended thinking models** — test-time compute, chain-of-thought as an explicit training target, when thinking modes help.

**Recommended anchors:** ReAct paper, Anthropic's "Building Effective Agents" essay, MCP documentation (modelcontextprotocol.io), Claude Code's own docs on subagents and hooks.

---

## Tier 6: Evaluation & Observability

The most underrated tier. Teams that ship reliable AI features are distinguished mostly by their evals.

- **Benchmark literacy** — MMLU, GPQA, SWE-bench, HumanEval, and their limits; contamination, benchmark saturation, why leaderboards mislead.
- **Building your own evals** — golden datasets, LLM-as-judge (and its biases), pairwise comparison, rubric grading.
- **Non-determinism** — why identical prompts vary, temperature-zero myths, implications for testing.
- **Observability** — tracing LLM calls, tools like LangSmith/Langfuse/Braintrust, logging prompts and completions.
- **Failure modes** — hallucination taxonomy, sycophancy, prompt sensitivity, jailbreaks/prompt injection (critical for agents that process untrusted content — a real security surface in tools like Claude Code).

---

## Tier 7: The Broader Map (survey-level awareness)

Worth knowing what exists; go deep only if a project demands it.

- **Multimodal architectures** — vision encoders (ViT, CLIP), how images enter transformer context, audio models (Whisper), image generation (diffusion models — a genuinely different architecture worth one afternoon of study).
- **State-space models** — Mamba and hybrids; the main architectural challenger to transformers.
- **Small language models & edge inference** — the sub-10B model ecosystem, on-device inference.
- **Open-weight ecosystem** — Llama, Mistral, Qwen, DeepSeek families; Hugging Face Hub as infrastructure.
- **Safety & interpretability** — mechanistic interpretability (features, circuits, sparse autoencoders), alignment research landscape. Anthropic's interpretability publications are the best entry point.
- **AI systems design** — model routing (cheap model → expensive model escalation), fallbacks, semantic caching, rate limit architecture.

---

## Tooling Checklist

Concrete tools to have hands-on familiarity with, roughly ordered by priority:

1. **PyTorch** — enough to read model code; you don't need to be a researcher.
2. **Hugging Face** — `transformers`, `datasets`, the Hub; loading and running a model locally.
3. **Ollama or llama.cpp** — run a local model; the fastest way to demystify inference.
4. **Anthropic/OpenAI SDKs** — raw API usage: streaming, tool use, prompt caching, structured output. Prefer raw SDKs over frameworks while learning.
5. **An embedding + vector DB stack** — e.g., pgvector with any embedding model; build one toy RAG pipeline end-to-end.
6. **MCP SDK** — write one small MCP server and use it from Claude Code.
7. **An eval/observability tool** — Langfuse or Braintrust on a real project.
8. **nanoGPT** — train a tiny model from scratch once; nothing teaches Tier 1–2 material faster.

---

## Suggested Sequencing

- **Weeks 1–3:** Tier 1 deeply. Build/train nanoGPT. This is the foundation everything else references.
- **Weeks 4–5:** Tier 2 at medium depth (read the key papers, skip implementation of distributed training). Fine-tune a small model with LoRA once.
- **Week 6:** Tier 3. Run models locally with Ollama; measure prefill vs. decode yourself.
- **Weeks 7–8:** Tier 4. Build a small RAG app end-to-end.
- **Weeks 9–10:** Tier 5. Write an MCP server; build a minimal agent loop with raw API calls (no frameworks).
- **Ongoing:** Tier 6 habits on every project; Tier 7 as curiosity or need dictates.

---

## Key Connections to Internalize

These cross-cutting links are where understanding compounds:

- **KV cache ↔ prompt caching ↔ API cost** — one mechanism explains all three.
- **Tokenization ↔ context limits ↔ pricing ↔ model quirks** — tokens are the unit of everything.
- **Attention ↔ context degradation ↔ RAG design** — why retrieval quality matters more than context size.
- **RLHF ↔ sycophancy ↔ eval design** — training incentives explain behavioral failure modes.
- **Sampling parameters ↔ non-determinism ↔ testing strategy** — why AI features need statistical, not exact, tests.
- **Tool schemas ↔ prompt injection ↔ agent security** — capability and attack surface grow together.

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

# Mission: Transformer Internals

## Why
I build on top of LLM APIs and want to stop treating the model as a black box —
so I can debug weird behavior, choose models, and reason about cost/context/latency
from first principles. And I want the genuine article: to understand a transformer
end-to-end and be able to sketch a block from memory.

## Success looks like
- I can sketch a decoder-only transformer block from memory and say what each part does.
- I can explain scaled dot-product attention and Q/K/V without notes.
- I can predict *why* a model does something weird (miscounts characters, chokes on
  long context, ignores the middle of a prompt) from how tokenization/attention work.
- I can reason about an API call — temperature, top-p, context window, model choice —
  in terms of what's happening inside.

## Constraints
- **Prior knowledge:** solid on neural-net fundamentals (net input, activation, loss,
  feedforward + backprop). New to the sequence-modeling world: tokens, embeddings, attention.
- **Style:** intuition-first with light math; equations only where they earn their place.
  Occasional runnable code (nanoGPT-flavored) welcome, not required.
- **Format:** short lessons, one tangible win each, reviewable later.

## Out of scope (for now)
- Training infrastructure, distributed training, GPU kernels.
- Fine-tuning / RLHF / post-training — this tier is the forward-pass architecture only.
- The broader AI-engineering stack (RAG, agents, evals) — later tiers.

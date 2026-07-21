## Tier 1: Transformer Internals (the non-negotiable core)

Everything downstream assumes you understand this layer. Aim to be able to sketch a transformer block from memory an
d explain what each part does.

- **Tokenization** — BPE (byte-pair encoding), SentencePiece, tiktoken. Why tokenizers matter for cost, context limi
ts, and weird model behaviors (e.g., why models struggle with character counting).
- **Embeddings** — token embeddings vs. contextual embeddings vs. sentence embeddings. These are three different thi
ngs people conflate constantly.
- **Attention mechanism** — scaled dot-product attention, the Q/K/V decomposition, multi-head attention. This is *th
e* concept; spend real time here.
- **Attention variants** — multi-query attention (MQA), grouped-query attention (GQA), sliding-window attention, fla
sh attention. These explain most of the efficiency differences between models.
- **Positional encoding** — sinusoidal (original), learned, RoPE (rotary), ALiBi. RoPE is what nearly every modern m
odel uses and it's why context extension tricks work.
- **The transformer block** — residual connections, layer norm (pre-norm vs. post-norm), the MLP/FFN layer, how bloc
ks stack.
- **Decoder-only vs. encoder-decoder vs. encoder-only** — why GPT-style decoder-only won for generation, where BERT-
style encoders still matter (embeddings, classification).
- **Autoregressive generation** — next-token prediction, why generation is sequential and what that costs.
- **Sampling strategies** — temperature, top-p (nucleus), top-k, min-p, greedy decoding. Directly relevant to API pa
rameters you already use.
- **Mixture of Experts (MoE)** — sparse activation, routing, why "total params" and "active params" diverge. Most fr
ontier models now use this.

**Recommended anchors:** "Attention Is All You Need" (2017 paper), Karpathy's "Let's build GPT" video and nanoGPT re
po, Jay Alammar's "The Illustrated Transformer," 3Blue1Brown's neural network/transformer series.

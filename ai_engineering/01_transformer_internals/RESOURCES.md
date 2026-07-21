# Transformer Internals Resources

All URLs verified 2026-07-20.

## Knowledge

- [Blog: "The Illustrated Transformer" — Jay Alammar](https://jalammar.github.io/illustrated-transformer/)
  Diagram-driven walk through encoders/decoders, self-attention, and multi-head attention.
  Use for: the gentlest first on-ramp to attention — read before the paper.

- [Video series: 3Blue1Brown — Deep Learning, ch. 5–7](https://www.youtube.com/watch?v=yMQPQuz5WpA)
  Geometry-first visual intuition. Ch.5 GPT overview, [ch.6 Attention](https://www.youtube.com/watch?v=eMlx5fFNoYc), [ch.7 MLPs / how facts are stored](https://www.youtube.com/watch?v=9-Jl0dxWQs8).
  Use for: *seeing* what embeddings and attention are doing.

- [Video: "Let's build the GPT Tokenizer" — Andrej Karpathy](https://www.youtube.com/watch?v=zduSFxRajkE) · [repo: minbpe](https://github.com/karpathy/minbpe)
  Builds BPE from scratch; explains why LLMs struggle with spelling/arithmetic.
  Use for: the tokenization lesson (Lesson 1).

- [Interactive: Tiktokenizer](https://tiktokenizer.vercel.app/) · [library: tiktoken](https://github.com/openai/tiktoken)
  Color-codes how text splits into tokens for GPT-4o and others, live in-browser.
  Use for: hands-on tokenization demos and coding exercises.

- [Video: "Let's build GPT: from scratch, in code" — Andrej Karpathy](https://www.youtube.com/watch?v=kCc8FmEb1nY) · [repo: nanoGPT](https://github.com/karpathy/nanoGPT)
  Builds and trains a full Transformer in code.
  Use for: going hands-on once concepts land — the code companion to the whole course.

- [Paper: "Attention Is All You Need" — Vaswani et al. (2017)](https://arxiv.org/abs/1706.03762)
  The origin paper for the Transformer.
  Use for: the canonical source, best read *after* the illustrated/video explainers.

- [Blog: "Rotary Embeddings: A Relative Revolution" — EleutherAI](https://blog.eleuther.ai/rotary-embeddings/) · [paper: RoFormer](https://arxiv.org/abs/2104.09864)
  Intuition + derivation of RoPE, the positional scheme in most modern LLMs.
  Use for: the positional-encoding lesson.

- [Paper: MQA — Shazeer (2019)](https://arxiv.org/abs/1911.02150) · [Paper: GQA — Ainslie et al. (2023)](https://arxiv.org/abs/2305.13245)
  Sharing key/value heads to speed inference; GQA is the Llama-2/3-class middle ground.
  Use for: the attention-efficiency lesson, after standard multi-head attention.

## Wisdom (Communities)

- [Hugging Face Forums](https://discuss.huggingface.co/)
  Discourse forum with a dedicated "Beginners" category; welcoming to newcomers.
  Use for: the default place to ask beginner-to-intermediate questions.

- [EleutherAI Discord](https://www.eleuther.ai/community)
  High-signal open-science research collective (~38k members). *Not* a beginner help desk —
  they ask newcomers to lurk rather than post basics.
  Use for: deeper, research-adjacent questions later on — not first-week ones.

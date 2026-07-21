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

## Tier 6: Evaluation & Observability

The most underrated tier. Teams that ship reliable AI features are distinguished mostly by their evals.

- **Benchmark literacy** — MMLU, GPQA, SWE-bench, HumanEval, and their limits; contamination, benchmark saturation, why leaderboards mislead.
- **Building your own evals** — golden datasets, LLM-as-judge (and its biases), pairwise comparison, rubric grading.
- **Non-determinism** — why identical prompts vary, temperature-zero myths, implications for testing.
- **Observability** — tracing LLM calls, tools like LangSmith/Langfuse/Braintrust, logging prompts and completions.
- **Failure modes** — hallucination taxonomy, sycophancy, prompt sensitivity, jailbreaks/prompt injection (critical for agents that process untrusted content — a real security surface in tools like Claude Code).

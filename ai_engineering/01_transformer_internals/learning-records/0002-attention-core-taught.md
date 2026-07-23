# Attention core taught: Q/K/V + scaled dot-product (single-head)

Lessons 1–3 are built. Lesson 3 delivered the heart of the course: **self-attention as a
soft dictionary lookup**, the Q/K/V decomposition (three learned linear projections), and the
`softmax(QKᵀ/√dₖ)·V` equation as four plain-English steps (score → scale → softmax → blend).
Grounded on the "bank / river bank" example carried forward from Lesson 2's contextual-embedding
promise, so the two lessons interlock.

Practical payoffs landed (per the dual mission): the `O(n²)` every-token-attends-to-every-token
cost — why long context is expensive/slow and why context limits exist — plus an intuition for
"lost in the middle" (softmax is a fixed budget of weight; the middle gets starved).

Deliberately **deferred** to keep within working memory:
- Multi-head attention (next lesson, L4) — this lesson taught a single head only.
- Causal masking (decoder-only, autoregressive story) — flagged as an "ask me" hook.
- Attention variants (MQA/GQA/sliding-window/flash) — later syllabus item.
- Positional encoding — attention as taught here is order-agnostic; that gap is a future lesson.

ZPD for next session: **multi-head attention** (L4) is the natural continuation and reuses the
same Q/K/V machinery ("run h of these in parallel on slices of d_model, concat, project"). Causal
masking could slot in either just before or just after, whenever the decoder-only / autoregressive
thread starts. The learner has NOT yet done any hands-on QKᵀ-with-numbers; a code or worked-number
exercise is available if they want more skill-durability before moving on.

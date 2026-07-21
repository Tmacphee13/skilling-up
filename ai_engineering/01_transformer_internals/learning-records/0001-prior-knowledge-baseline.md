# Prior knowledge: strong on NN fundamentals, new to sequence modeling

The learner is comfortable with neural-network fundamentals — net input, activation
functions, loss, feedforward and backpropagation — from classic MLP-style networks.
This is a firm floor: lessons can assume "a linear layer + nonlinearity, trained by
gradient descent" without re-teaching it, and can *anchor* new ideas to it (e.g. an
embedding is a learned lookup table trained by backprop; the FFN in a block is just
an MLP they already know).

The gap is everything sequence-specific: **tokenization and embeddings** (explicitly
"very little understanding"), and by extension attention and positional encoding.
The zone of proximal development starts at tokens → embeddings → attention, not at
"what is a neural network."

Implication: begin the journey at tokenization (item 1 of the syllabus), move fast
through anything that reduces to "it's an MLP / it's backprop," and spend the real
time budget on attention.

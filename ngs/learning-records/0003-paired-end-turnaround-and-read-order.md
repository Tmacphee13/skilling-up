# Understood: the functional read sequence + paired-end turnaround

After Lesson 2, Tanner pushed past the static molecule into the *functional* workflow, asking:
what are "separate index cycles," how are cycles differentiated for i5 vs i7, is it two runs,
and how is Read 2 possible if linearization leaves strands pointing one way. These are precisely
the questions the turnaround answers.

Corrected/added understanding (Lesson 2 was patched to cover it): reads are sequential on one
cluster (R1 → I1 → I2 → turnaround → R2); each read is launched by **annealing a different
primer**, not by aiming anything; the **paired-end turnaround** rebuilds the complementary strand
mid-run and removes the original, which is how R2 happens and is the mechanistic root of the i5
reverse-complement flip.

**Implication:** He reasons at strand + step granularity and connects mechanism to
job-relevant artifacts (i5 flip) unprompted. He is ready for demux mechanics (L3) — index
hopping, UDI/CDI, and the i5 flip now have a full mechanistic basis he can build on. Continue
teaching at this mechanistic depth; it's clearly his ZPD. Builds on [[0002-ds-vs-ss-is-a-stage-not-a-segment]].

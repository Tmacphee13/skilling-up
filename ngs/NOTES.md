# Teaching Notes — NGS Foundations

## Learner profile
- Bioinformatics engineer at a service/core lab. Production-fluent downstream.
- Runs demux (BCL Convert/bcl2fastq), QC, trimming for a wetlab team.
- Gap is *upstream*: the physical wetlab reality + how projects get designed.

## Teaching approach that fits this learner
- **Anchor every new concept to his existing demux/FASTQ mental model.** He learns the
  wetlab by seeing how it explains artifacts he already handles.
- Illumina-only for now. Short-read SBS.
- He works across all assays, so teach the generalizable core first, then branch.

## High-value "aha" hooks specific to his job (weave these in)
- i5 reverse-complement gotcha (MiSeq/HiSeq vs NovaSeq/NextSeq/iSeq) — a classic
  sample-sheet demux bug. Great payoff for a demux person.
- Index hopping on patterned flow cells → why unique dual indexes (UDI) exist.
- Adapter read-through → why we trim adapters (short inserts).
- Low base-diversity / index-balancing → why demux/QC sometimes goes sideways.

## Learner-requested backlog (stated 2026-07-18)
Topics Tanner explicitly wants to dive into — pull the next lessons from here:
1. Sample prep + library prep (the actual wetlab bench workflow).
2. Physical hardware — flow cells, lanes, the instrument as a machine.
3. What are "cycles"? → Lesson 2 (SBS, cycle-by-cycle).
4. What is an instrument's "chemistry"? → Lesson 2, expand in a chemistry-comparison lesson.
5. What defines a "sample" in single-cell vs bulk? (barcode/UMI structure, pooling).
6. How does DNA-seq differ from RNA-seq and other sequencing types? (library-prep divergence).

Sequencing plan (each grounded in his demux work):
- L1 ✅ Anatomy of the library molecule.
- L2 ✅ How the molecule gets read — flow cell, clusters, cycles, SBS chemistry, four-reads + turnaround.
- L3 ✅ Demux mechanics — index hopping, UDI/CDI, i5 flip, Undetermined, demux bench.
- L4 ✅ From sample to library — prep workflows, DNA vs RNA vs cDNA divergence. [covers backlog 1,6]
- L5 ✅ What is a "sample"? bulk vs single-cell (cell barcode + UMI; demux-within-demux). [covers backlog 5]
- L6 (next): Project design — coverage, depth, read length, run config.

All 6 backlog topics now covered except deeper project-design math (→ L6).
Assessment note: L2's turnaround section was added in response to his questions; he engages at
strand/step depth. No formal retention check yet on L3–L5 — probe before assuming mastery.

## Preferences
- (none stated yet)

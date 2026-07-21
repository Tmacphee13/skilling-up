# Mission: NGS Foundations for a Service-Lab Bioinformatician

## Why
Tanner runs demultiplexing and preprocessing for a wetlab team but is shaky on the
foundations *underneath* the commands he runs. He wants to understand what physically
produces the reads he processes, and how a sequencing project gets designed up front —
so he can collaborate with the wetlab team as a peer, troubleshoot intelligently, and
stop treating the pipeline as a black box.

## Success looks like
- Can draw an Illumina library molecule from memory and map every segment to the FASTQ
  files and demux artifacts it produces (R1/R2/I1/I2, Undetermined).
- Can explain *why* a run was configured a certain way — read length, coverage/depth,
  index strategy, multiplexing level — for the assay in question.
- Can diagnose common demux/prep failures (index hopping, i5 reverse-complement mismatch,
  adapter read-through, low diversity) by reasoning from the underlying chemistry.
- Can sit in a project-planning conversation with the wetlab team and contribute to
  decisions about platform, kit, read config, and sample pooling.

## Constraints
- Already fluent downstream: runs BCL Convert/bcl2fastq, QC, trimming in production.
- Platform focus: **Illumina** (short-read, SBS).
- Assay breadth is wide: WGS/WES, RNA-seq, single-cell/spatial, amplicon/16S. Teach
  foundations that generalize, then specialize per assay.
- Learning style: build from the known (his demux work) toward the unknown (wetlab + design).

## Out of scope (for now)
- Long-read platforms (ONT, PacBio) — different demux/basecalling model.
- Downstream analysis (variant calling, DE, cell clustering) — he already owns this.
- Deep molecular-biology theory beyond what explains the sequencing workflow.

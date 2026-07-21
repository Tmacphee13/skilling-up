# Baseline: production-fluent downstream, shaky on wetlab + design

Established at kickoff (2026-07-18). Tanner is a service/core-lab bioinformatics engineer
who runs **demux (BCL Convert/bcl2fastq), QC, and trimming** in production for a wetlab team.
He is fluent with the *outputs* of sequencing (FASTQ, sample sheets, indexes, Undetermined)
but wants the *upstream* foundations: the physical library/wetlab reality and how sequencing
projects get designed.

**Platform:** Illumina only (short-read SBS). **Assays:** broad — WGS/WES, RNA-seq,
single-cell/spatial, amplicon/16S. **Self-identified gaps:** the wetlab side (prep, adapters,
indexes, chemistry) and project design (coverage, read length, multiplexing, run config).

**Implication for teaching:** anchor every new upstream concept to an artifact he already
handles downstream. Do NOT re-teach demux mechanics, QC, or trimming as if new — use them as
the *known* to bridge from. High-value hooks tied to his job: i5 reverse-complement, index
hopping/UDI, adapter read-through, low base diversity. See [[MISSION.md]].

Lesson 1 (anatomy of the library molecule) delivered but not yet assessed — no evidence of
retention recorded yet.

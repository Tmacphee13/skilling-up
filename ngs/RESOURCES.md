# NGS Foundations Resources

## Knowledge

- [Illumina Library Structure (one-page reference PDF) — UMass Medical School](https://www.umassmed.edu/contentassets/5ea3699998c442bb8c9b1a3cf95dbb24/illumina-library-structure.pdf)
  The single clearest diagram of a dual-index Illumina library molecule with real
  adapter sequences. Use for: the anatomy of the molecule, P5/P7/i5/i7/SP1/SP2 layout.

- [Illumina adapter and primer sequences — CVR Bioinformatics](https://bioinformatics.cvr.ac.uk/illumina-adapter-and-primer-sequences/)
  Actual sequences of P5, P7, index primers, and read primers. Use for: looking up the
  real bases, understanding adapter read-through and trimming.

- [Illumina — Sequencing Coverage](https://www.illumina.com/science/technology/next-generation-sequencing/plan-experiments/coverage.html)
  Vendor's own definitions and worked examples of coverage/depth. Use for: project
  design, coverage math (Lander-Waterman), per-application targets.

- [Illumina — Sequencing Read Length](https://emea.illumina.com/science/technology/next-generation-sequencing/plan-experiments/read-length.html)
  How to choose read length by application. Use for: 1x vs 2x, why 2x150 is a default.

- [Considerations for RNA-Seq read length and coverage — Illumina Knowledge](https://knowledge.illumina.com/library-preparation/rna-library-prep/library-preparation-rna-library-prep-reference_material-list/000001243)
  Read-count targets per RNA-seq goal (gene expression vs assembly). Use for: RNA-seq
  project design.

- [BCL Convert / bcl2fastq behavior — 10x Genomics demux guide](https://www.10xgenomics.com/support/software/cell-ranger/7.2/analysis/inputs/cr-direct-demultiplexing)
  Clear practical walkthrough of how demux reads indexes and assigns samples, incl.
  dual-index matching and index hopping. Use for: connecting the molecule to demux.

- [bcl2fastq2 Software Guide (official Illumina PDF)](https://support.illumina.com/content/dam/illumina-support/documents/documentation/software_documentation/bcl2fastq/bcl2fastq2-v2-17-software-guide-15051736-g.pdf)
  Authoritative source on sample sheets, index handling, Undetermined output. Use for:
  demux mechanics, sample-sheet fields, index mismatch settings.

- [Illumina — Sequencing Technology (SBS overview)](https://emea.illumina.com/science/technology/next-generation-sequencing/sequencing-technology.html)
  Vendor's canonical explainer of cluster generation + SBS. Use for: the read-out
  workflow, cycle mechanics.

- [Illumina — 2-Channel SBS Technology](https://www.illumina.com/science/technology/next-generation-sequencing/sequencing-technology/2-channel-sbs.html)
  Explains the 2-channel (red/green) encoding and why G = "dark." Use for: what an
  instrument's *chemistry* means, and the 2-channel dark-G QC gotcha.

- [Illumina — Patterned Flow Cell Technology](https://www.illumina.com/science/technology/next-generation-sequencing/sequencing-technology/patterned-flow-cells.html)
  Nanowells, ExAmp, excluded-volume monoclonality. Use for: flow-cell hardware and why
  patterned cells hop indexes.

- [Illumina — Indexed Sequencing Overview Guide (PDF, doc #15057455)](https://support.illumina.com/content/dam/illumina-support/documents/documentation/system_documentation/miseq/indexed-sequencing-overview-guide-15057455-08.pdf)
  THE definitive source for the four-reads sequence (Read 1 → Index 1 → Index 2 → turnaround →
  Read 2), the paired-end turnaround/resynthesis, and the forward-strand vs reverse-complement
  i5 workflows. Use for: how sequencing functionally proceeds, and the i5 flip mechanism.

- [IDT — NGS Library Preparation overview](https://www.idtdna.com/pages/technology/next-generation-sequencing/library-preparation)
  Clear walkthrough of ligation vs tagmentation prep steps. Use for: Lesson 4 wetlab workflow.

- [PolyA selection vs rRNA depletion — Sci Reports peer-reviewed comparison](https://www.nature.com/articles/s41598-018-23226-4)
  Evidence-based trade-offs of the two RNA enrichment strategies. Use for: RNA-seq prep design.

- [10x Chromium 3′ v3 library structure — scg_lib_structs](https://scg-lib-structs.readthedocs.io/en/latest/ge/10xChromium3v3.html)
  Exact base layout of R1 (cell barcode + UMI), R2 (cDNA), and I1 (sample index). Use for:
  single-cell read structure and the three levels of identity.

## Wisdom (Communities)

- [SEQanswers forum](https://www.seqanswers.com/)
  Long-running, high-signal NGS community; wetlab + bioinformatics mixed. Use for:
  prep/chemistry troubleshooting, real-world design critique.
- [r/bioinformatics](https://reddit.com/r/bioinformatics) and [Biostars](https://www.biostars.org/)
  Use for: demux/preprocessing questions, sample-sheet and index gotchas.

## Gaps
- Need a high-trust primary reference on **library prep chemistry per kit** (TruSeq vs
  Nextera/tagmentation vs 10x) — find before the library-prep lesson.
- Need an authoritative single-cell barcode/UMI structure reference (10x) for the
  single-cell demux lesson.

# Scriptify AI — Generative Handwriting Studio

Transform digital documents, lecture slides, research notes, and raw text into indistinguishable, authentic human-written notebook pages with realistic ink physics, baseline drift, and hand-drawn vector diagrams.

## User Review & Critical Decisions

> [!IMPORTANT]
> Based on your preferences from Phase 1, we have aligned the architectural blueprint to deliver a high-velocity Studio Converter with authentic handwriting vector physics, interactive sheet customization, and seamless PDF/PNG export.

- **Core Workflow & Studio Layout**: Full interactive Studio Converter matching the reference design with dual-pane layout (inspector sidebar + tactile parchment canvas), live sheet navigation, mode switching (Authentic Handwritten vs Clean Computerized), and quick access to Deep Research and QR sync pipelines.
- **Handwriting Generation Engine**: Organic SVG path generation with simulated human imperfections (micro-jitter, baseline drift angle, dynamic character spacing, pressure variance, and ink bleed modeling) alongside vector hand-drawn diagram synthesis and mathematical formulas.
- **Stationery & Export Packaging**: College Ruled, Cornell Grid, Dot Matrix, and Kraft Vintage parchment textures paired with multi-pigment ink nibs (Oxford Blue, Velvet Black, Pilot Blue, Grading Crimson, Emerald Green) and export packaging for multi-page print-ready PDF and 300 DPI archival PNG sheets.

---

## 1. Overview & Core Concept

- **What It Does**: Scriptify AI ingests digital files (PDF assignments, lecture slides, markdown, raw text) and renders them as tactile, handwritten parchment pages. Users can customize handwriting personas (Aarav Patel, Elena Vance, Marcus Chen, Devi Nair, or custom cloned profiles), tune realistic human flaw sliders, switch stationery formats, view split typed vs handwritten comparisons, and download formatted multi-page assignments.
- **Target Audience / Persona**: Students submitting handwritten homework, researchers preparing archival study guides, educators generating illustrative worksheets, and professionals seeking organic tactile notes.
- **Key Value**: Eliminates tedious manual transcription while preserving authentic handwriting idiosyncrasies (slight angle slants, uneven word gaps, pressure dynamics, margin notes, and sketched diagrams).

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. *Source Ingestion*: Switch between PDF Document, Local Upload, Raw Text/Markdown, and Whiteboard/Camera feeds; rename assignment title with live editable header tags.
  2. *Persona & Physics Customization*: Select between 5 distinct handwriting engines (e.g. Cursive Engineering Slant, Academic Print, Architectural Caps, Fountain Script) and tune organic imperfection sliders (Micro-Jitter, Baseline Drift, Spacing Cadence, Pressure Variance).
  3. *Stationery & Pigment Selection*: Choose between College Ruled (with red vertical margin), Cornell Grid, Dot Matrix, or Kraft parchment; select fountain ink pigment (Oxford Blue, Velvet Black, Pilot Blue, Crimson, Emerald).
  4. *Tactile Parchment Canvas*: Zoom (50% to 200%), switch page sheets (Pages 1 to 4+ with thumbnail strip), toggle split-screen comparison (Typed Markdown vs Handwritten Canvas), and preview hand-drawn vector graphs and marginal notes.
  5. *Export & Print*: Download all pages as a bundled print-ready PDF or high-resolution PNG sheets, or trigger local print styling.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: **Tactile Technical Minimalist** — crisp linear structural chrome paired with warm archival vellum surfaces (`#FCF9F2`), tactile ruled parchment (`#FCF9EE`), and authentic ink tones (`#1D4ED8`, `#0F172A`).
  - *Color Palette*:
    - Background desk canvas: `#FCF9F2`
    - Tactile parchment sheet: `#FCF9EE` with subtle double-layered ink shadow
    - Primary structural ink: `#0F172A`
    - Electric indigo compute accent: `#4338CA`
    - Verdigris accent: `#0D9488`
    - Ruled line guidelines: `#93C5FD` at 40% opacity with `#F87171` red margin
  - *Typography*: Plus Jakarta Sans for interface typography, JetBrains Mono for telemetry/roll numbers/equations, and responsive calligraphic SVG stroke styling for realistic handwriting.
  - *Component Styling*: Glassmorphic floating canvas toolbar with backdrop blur, rounded-xl inspector cards, tactile paper thumbnail bar, and responsive desktop/tablet/mobile layouts.

- **Interactive Feedback & Motion**:
  - Real-time parameter updates: Adjusting jitter or slant instantly transforms the SVG curves and text rotations.
  - Smooth page transitions and thumbnail selection.
  - Interactive split typed/handwritten mode with slider divider.
  - Toast notifications and progress feedback on synthesis and export generation.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Vector SVG Rendering vs Static Canvas Bitmap**
  - *Chosen Approach*: Hybrid SVG text and vector path engine with CSS transform jitter matrices.
  - *Why*: SVG ensures crisp, lossless rendering at any zoom level (100%, 200%), enables crisp vector printing/PDF generation, and allows individual word/diagram stroke manipulation.
  - *Alternatives Considered*: Pure HTML5 Canvas bitmap (blurry on zoom, hard to edit) or plain Google Fonts handwriting font (lacks natural baseline drift, connected strokes, and micro-imperfections).

- **Decision 2: Client-Side PDF Generation & Archival Printing**
  - *Chosen Approach*: Native print styling with CSS `@media print` rules plus client-side HTML-to-Canvas / PDF bundling for instant download without server roundtrips.
  - *Why*: Instantaneous 0.18s latency without external backend failures; 100% private and offline-capable.

- **Decision 3: Multi-View Suite Architecture**
  - *Chosen Approach*: Studio Converter as the core interactive screen, with interactive modal and panel flows for AI Deep Research, Device QR Sync, and Admin Command pass inspection.
  - *Why*: Fully satisfies the reference layout while keeping navigation fluid and responsive.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Scriptify AI Top Header                         │
│  [Logo / Brand]  [Studio Converter | AI Deep Research | Device QR]     │
├───────────────────────────────────┬────────────────────────────────────┤
│ Left Inspector (~380px)           │ Central Tactile Canvas & Preview   │
│ ┌───────────────────────────────┐ │ ┌────────────────────────────────┐ │
│ │ Step 1: Source & Content Feed │ │ │ Floating Glass Toolbar         │ │
│ │ • PDF / Markdown / Raw Text   │ │ │ Zoom, Page Step, Split-View    │ │
│ ├───────────────────────────────┤ │ ├────────────────────────────────┤ │
│ │ Step 2: Handwriting Persona   │ │ │ Parchment Sheet (A4 Ratio)     │ │
│ │ • Aarav / Elena / Marcus / etc│ │ │ • SVG Ruled / Grid Pattern     │ │
│ │ • Jitter, Slant, Bleed Sliders│ │ │ • Margin Date & Roll Number    │ │
│ ├───────────────────────────────┤ │ │ • Handwritten Title & Notes    │ │
│ │ Step 3: Stationery & Ink      │ │ │ • Mathematical Equations       │ │
│ │ • Paper Texture & Ink Pigment │ │ │ • Hand-Drawn Vector Graph      │ │
│ ├───────────────────────────────┤ │ │ • Marginal Annotations         │ │
│ │ Step 4: Export Packaging      │ │ └────────────────────────────────┘ │
│ │ • PDF / PNG / Batch Export    │ │ ┌────────────────────────────────┐ │
│ └───────────────────────────────┘ │ │ Thumbnail Strip & Page Add/Nav │ │
│                                   │ └────────────────────────────────┘ │
├───────────────────────────────────┴────────────────────────────────────┤
│ Quick Pipelines & Shortcuts Footer Bar                                 │
└────────────────────────────────────────────────────────────────────────┘
```

### Data Model & State
- `DocumentState`: Title, size, page count, current active page, source text/markdown.
- `HandwritingConfig`: Persona ID, jitter percentage (0–100), slant angle (-10° to +10°), word spacing cadence, pressure variance, ink pigment (`#1D4ED8`, `#0F172A`, `#2563EB`, `#DC2626`, `#059669`).
- `StationeryConfig`: Paper type (`college-ruled`, `cornell-grid`, `dot-matrix`, `kraft`), showMarginHeader, showPageStamp, simulateSmudge, watermarkText.
- `PageData[]`: Multi-page assignment data including headings, handwritten equations, bullet items, hand-drawn vector charts, and teacher marginal notes.
- `ViewMode`: `'handwritten' | 'computerized' | 'split'`.

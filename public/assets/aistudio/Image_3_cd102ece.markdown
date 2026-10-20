---
name: Scriptify AI
colors:
  surface: '#fcf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fcf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ec'
  surface-container: '#f0eee7'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e5e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#45464d'
  inverse-surface: '#31312c'
  inverse-on-surface: '#f3f0e9'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#4e45d5'
  on-secondary: '#ffffff'
  secondary-container: '#6860ef'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00201d'
  on-tertiary-container: '#0c9488'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#e3dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#100069'
  on-secondary-fixed-variant: '#372abf'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#fcf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e5e2db'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4rem
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: 1.625rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.0625rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 0.875rem
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style
This design system pairs the razor-sharp precision of high-velocity creative engineering suites (Linear, Figma) with the tactile, organic warmth of bespoke archival stationery. Built for researchers, engineers, writers, and students transforming synthetic digital intelligence into living analog artifact, the visual language balances high-density utility with the contemplative atmosphere of a studio desk.

The aesthetic philosophy is **Tactile Technical Minimalist**. Clean utilitarian structure and ultra-crisp interface controls frame warm, parchment-tinted surfaces. Precise hairline geometry sits alongside fluid, humanized handwritten dynamics. Floating translucent glass controls hover effortlessly above textured canvases, establishing a clear separation between the computational instrument and the tactile output.

## Colors
The palette balances deep pigment inks against warm fibrous surfaces, energized by high-chroma cognitive accents.

- **Primary (`#0F172A` - Midnight Slate / Iron Gall):** The dominant ink tone for primary actions, critical typography, high-contrast states, and dense structural chrome.
- **Secondary (`#4338CA` - Royal Electric Indigo):** The dynamic compute accent, applied to AI processing state indicators, active vector anchors, conversion pipelines, and focused interface states.
- **Tertiary (`#0D9488` - Verdigris Ink):** An organic editorial accent for synthesized citations, verified handwritten exports, and successful validation marks.
- **Neutral (`#F8F5EE` - Archival Vellum):** The primary ambient workspace floor. Yields softly to inner parchment canvases (`#FDFBF7`) without producing eye fatigue during protracted analytical sessions.

### Functional Ink Roles
- **Ballpoint Carbon:** `#1E293B`
- **Classic Fountain Blue:** `#1D4ED8`
- **Editorial Crimson Annotation:** `#DC2626`
- **Ruled Ledger Guideline:** `rgba(67, 56, 202, 0.08)`
- **Architectural Grid Stroke:** `rgba(15, 23, 42, 0.05)`

## Typography
The system employs **Plus Jakarta Sans** for clear ergonomic readability and geometric cohesion across analytical UI surfaces. Structural precision is augmented by **JetBrains Mono** for layout dimensions, stroke density telemetry, parameter values, and generation logs. 

For real-time generative handwritten canvases, synthetic output models inherit dynamic calligraphic type scales linked directly to SVG stroke geometry, while surrounding analytical chrome remains crisply anchored to the screen pixel grid.

## Layout & Spacing
A 12-column dynamic fluid layout governs screen architecture, pivoting into a dedicated split-pane operational workbench at desktop resolutions:

- **Desktop (≥ 1280px):** Symmetrical or 45/55 split-screen canvas workspace. Left pane dedicates to structural document composition, structured data extraction, and AI synthesis; right pane hosts the tactile parchment engine with interactive SVG point rendering.
- **Tablet (768px - 1279px):** Stacked dual-tier viewport with docked sliding utility tray and sheet overlays for real-time paper customization.
- **Mobile (< 768px):** Singular active view switchable via floating segmented selector (Source Document vs. Handwritten Sheet), with persistent quick-action status chips pinned bottom-center.

Layout relies on strict 4px/8px modular rhythm tokens. Canvas boundaries utilize physical aspect ratio constraints (A4, US Letter, Field Notes) centered within the fluid viewport container.

## Elevation & Depth
Depth separates computational toolsets from the analog document plane through refined ambient diffusion and frosted glass surfaces:

- **Ground Level (Workspace Desk):** `#F8F5EE` flat matte base canvas.
- **Document Plane (Tactile Parchment):** `#FDFBF7` elevated with a double-layered ink shadow: `0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 24px -4px rgba(15, 23, 42, 0.06)`, producing the physical illusion of weighted cotton rag paper laid flat upon wood or slate.
- **Floating Tooling & Overlays:** Translucent acrylic (`rgba(253, 251, 247, 0.82)`) with a `16px` backdrop filter blur and an ultra-fine border ring (`rgba(15, 23, 42, 0.08)`). Shadow: `0 8px 32px -4px rgba(15, 23, 42, 0.10)`.
- **Modals & Popovers:** `0 20px 48px -12px rgba(15, 23, 42, 0.16)` with a crisp inner highlight border `inset 0 1px 0 rgba(255, 255, 255, 0.8)`.

## Shapes
Elements follow calibrated medium geometry (`roundedness: 2`). Standard controls, floating tool shelves, and dialog surfaces hold an `8px` (`0.5rem`) radius.

Sheet canvases, preview tiles, and inner conversion cards adopt `16px` (`1rem`) corner profiles to reinforce clean fabrication. Small components such as ink swatch selectors, state badges, and tool buttons utilize a full-pill `9999px` profile to contrast against document margins.

## Components

### Buttons
- **Primary Action (Synthesize/Export):** Background `#0F172A`, foreground `#F8F5EE`, text weight `600`. Transition `150ms ease`. Hover: `#1E293B`, subtle translateY(-0.5px). Active: `#020617`.
- **Secondary Action (Pen/Style Modifiers):** Surface transparent, border `1px solid rgba(15, 23, 42, 0.12)`, foreground `#0F172A`. Hover: background `rgba(15, 23, 42, 0.04)`.
- **Ghost/Icon Button:** Floating canvas tools with `32x32px` or `40x40px` dimensions. Hover: background `rgba(15, 23, 42, 0.06)`, active scale `0.97`.

### Ink Palette Chips
Pill-shaped selectors (`h-8`, padding `4px 12px`) displaying a central circular ink dot (`8px` diameter) filled with the representative pigment (Midnight Slate, Fountain Blue, Carbon, Red Marking). Active state introduces a high-contrast ring outline with `2px` offset.

### Input Fields & Monospace Editors
Inputs feature an inset warm foundation (`rgba(15, 23, 42, 0.02)`), bounded by `1px solid rgba(15, 23, 42, 0.12)`. When focused: border transition to `#4338CA`, accompanied by a `3px` diffusion glow of `rgba(67, 56, 202, 0.12)`. Typeface for data inputs defaults to `Plus Jakarta Sans`, switching to `JetBrains Mono` for OCR parameter inputs and synthesis prompts.

### Checkboxes & Toggle Switches
- **Checkboxes:** Custom rounded squares (`4px` radius) with `1.5px` border. Checked state transitions from transparent to `#0F172A` with an SVG pen-stroke checkmark drawn sequentially.
- **Switches:** Track width `36px`, height `20px`. Inactive track `#E2DDD3`, active track `#4338CA`. Thumb transitions horizontally with spring tension.

### Cards & Workbenches
Cards use `#FFFFFF` or `#FDFBF7` with hairline border `rgba(15, 23, 42, 0.06)`. Dual-pane panels present synchronized scroll bars, status breadcrumbs indicating dynamic pen speed, jitter parameters, and pressure variations.

### Specialized Workspace Components
- **Floating Glass Toolbar:** Centered horizontally at the top or bottom of the parchment viewport, housing undo/redo history, zoom scale, grid toggles (blank, lined, dotted, graph), and synthetic jitter sliders.
- **Handwriting Synthesis Inspector:** Compact side dock containing fine controls for slant variance, baseline drift, stroke pressure, and ink bleed modeling.
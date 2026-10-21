import React, { useRef } from 'react';
import {
  HandwritingPersona,
  ImperfectionSettings,
  InkColor,
  PaperTexture,
  HeaderStampSettings,
  ExportFormat
} from '../types';
import { PERSONAS, INK_COLORS } from '../data/mockPages';

interface StudioInspectorProps {
  selectedPersona: HandwritingPersona;
  onSelectPersona: (persona: HandwritingPersona) => void;
  imperfections: ImperfectionSettings;
  onChangeImperfections: (settings: ImperfectionSettings) => void;
  paperTexture: PaperTexture;
  onChangePaperTexture: (texture: PaperTexture) => void;
  inkColor: InkColor;
  onChangeInkColor: (color: InkColor) => void;
  headerStamp: HeaderStampSettings;
  onChangeHeaderStamp: (stamp: HeaderStampSettings) => void;
  exportFormat: ExportFormat;
  onChangeExportFormat: (format: ExportFormat) => void;
  onOpenPasteModal: () => void;
  onFileUpload: (fileName: string) => void;
  onOpenCloneModal: () => void;
}

export const StudioInspector: React.FC<StudioInspectorProps> = ({
  selectedPersona,
  onSelectPersona,
  imperfections,
  onChangeImperfections,
  paperTexture,
  onChangePaperTexture,
  inkColor,
  onChangeInkColor,
  headerStamp,
  onChangeHeaderStamp,
  exportFormat,
  onChangeExportFormat,
  onOpenPasteModal,
  onFileUpload,
  onOpenCloneModal
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileUpload(e.target.files[0].name);
    }
  };

  return (
    <aside className="w-full xl:w-[380px] xl:shrink-0 bg-[#f6f3ec] p-5 flex flex-col gap-6 overflow-y-auto max-h-none xl:max-h-[calc(100vh-8.5rem)] border-r border-[#c6c6cd]/30 no-scrollbar">
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.docx,.txt,.md,.png,.jpg"
        className="hidden"
      />

      {/* Section A: Source Upload & Ingestion */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4e45d5]"></span>
            <span className="font-semibold text-sm text-[#1c1c18]">Source & Content Feed</span>
          </div>
          <span className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-[#e5e2db] text-[#45464d]">
            Step 1
          </span>
        </div>

        {/* Ingestion Status Card */}
        <div className="p-3.5 rounded-xl bg-white shadow-xs border border-[#c6c6cd]/20 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4e45d5] text-[20px]">mark_chat_unread</span>
              <span className="font-semibold text-xs text-[#1c1c18]">WhatsApp Device Sync</span>
            </div>
            <span className="font-mono-code text-[11px] text-[#0c9488] font-semibold">Active</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-1 rounded bg-[#ebe8e1] font-mono-code text-[11px] text-[#1c1c18] flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">image</span> Ch4_lec_slides.pdf
            </span>
            <span className="px-2 py-1 rounded bg-[#ebe8e1] font-mono-code text-[11px] text-[#1c1c18] flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">photo_camera</span> whiteboard_snap.jpg
            </span>
          </div>

          <div className="flex items-center justify-between pt-1 font-mono-code text-[11px] text-[#45464d]">
            <span>1,420 words extracted</span>
            <span>3 diagrams converted</span>
          </div>
        </div>

        {/* Ingest Methods */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-2.5 rounded-lg bg-white hover:bg-[#ebe8e1] text-left flex flex-col gap-1 shadow-xs border border-[#c6c6cd]/20 transition-all group cursor-pointer"
          >
            <span className="material-symbols-outlined text-[#1c1c18] group-hover:text-[#4e45d5] text-[18px]">
              add_photo_alternate
            </span>
            <span className="font-semibold text-xs text-[#1c1c18]">Upload Local</span>
            <span className="text-[11px] text-[#45464d]">Drop PDF, DOCX, IMG</span>
          </button>

          <button
            onClick={onOpenPasteModal}
            className="p-2.5 rounded-lg bg-white hover:bg-[#ebe8e1] text-left flex flex-col gap-1 shadow-xs border border-[#c6c6cd]/20 transition-all group cursor-pointer"
          >
            <span className="material-symbols-outlined text-[#1c1c18] group-hover:text-[#4e45d5] text-[18px]">
              edit_note
            </span>
            <span className="font-semibold text-xs text-[#1c1c18]">Paste Raw Text</span>
            <span className="text-[11px] text-[#45464d]">Markdown / LaTeX</span>
          </button>
        </div>
      </div>

      {/* Section B: Handwriting Persona & Engine */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4e45d5]"></span>
            <span className="font-semibold text-sm text-[#1c1c18]">Handwriting Persona</span>
          </div>
          <span className="font-mono-code text-xs text-[#4e45d5] font-semibold">5 Engine Presets</span>
        </div>

        {/* Persona Selection List */}
        <div className="grid grid-cols-1 gap-2">
          {PERSONAS.map((persona) => {
            const isSelected = selectedPersona.id === persona.id;
            const isClone = persona.id === 'custom';

            if (isClone) {
              return (
                <div
                  key={persona.id}
                  onClick={onOpenCloneModal}
                  className="p-3 rounded-xl bg-[#e5e2db] hover:bg-[#ebe8e1] shadow-xs border border-[#c6c6cd]/30 flex items-center justify-between cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#4e45d5] shadow-xs">
                      <span className="material-symbols-outlined text-[20px]">fingerprint</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-xs text-[#1c1c18] group-hover:text-[#4e45d5] transition-colors">
                        + Clone Your Own Hand
                      </span>
                      <span className="text-[11px] text-[#45464d]">Upload 1 page sample · Free AI model</span>
                    </div>
                  </div>
                  <span className="font-mono-code text-[10px] bg-[#e3dfff] text-[#100069] px-1.5 py-0.5 rounded font-semibold">
                    NEW
                  </span>
                </div>
              );
            }

            return (
              <div
                key={persona.id}
                onClick={() => onSelectPersona(persona)}
                className={`p-3 rounded-xl bg-white shadow-xs border transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'border-[#000000] ring-2 ring-[#000000]'
                    : 'border-[#c6c6cd]/20 hover:bg-[#ebe8e1]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#ebe8e1] flex items-center justify-center text-[18px] text-[#1c1c18] italic font-serif">
                    {persona.initials}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-xs text-[#1c1c18]">{persona.name}</span>
                      {persona.badge && (
                        <span className="font-mono-code text-[9px] px-1.5 py-0.2 rounded bg-[#4e45d5] text-white font-semibold">
                          {persona.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#45464d]">{persona.description}</span>
                  </div>
                </div>
                {isSelected ? (
                  <span className="material-symbols-outlined text-[#000000] text-[20px]">check_circle</span>
                ) : (
                  persona.clarity && (
                    <span className="font-mono-code text-[11px] text-[#45464d]">{persona.clarity}</span>
                  )
                )}
              </div>
            );
          })}
        </div>

        {/* Realistic Human Imperfection Sliders */}
        <div className="p-4 rounded-xl bg-white shadow-xs border border-[#c6c6cd]/20 flex flex-col gap-4 mt-1">
          <div className="flex items-center justify-between pb-1 border-b border-slate-100">
            <span className="font-semibold text-xs text-[#1c1c18]">Organic Imperfection Engine</span>
            <span className="font-mono-code text-[10px] text-[#4e45d5] font-semibold">Tuned for Prof. Inspection</span>
          </div>

          {/* Slider 1: Micro-Jitter */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between font-mono-code text-xs">
              <span className="text-[#45464d]">Human Flaw & Micro-Jitter</span>
              <span className="text-[#1c1c18] font-semibold">{imperfections.jitter}% (Natural)</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={imperfections.jitter}
              onChange={(e) =>
                onChangeImperfections({
                  ...imperfections,
                  jitter: Number(e.target.value)
                })
              }
              className="w-full accent-[#000000] h-1.5 bg-[#ebe8e1] rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider 2: Baseline Drift */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between font-mono-code text-xs">
              <span className="text-[#45464d]">Line Baseline Drift</span>
              <span className="text-[#1c1c18] font-semibold">
                {imperfections.baselineDrift > 0 ? `+${imperfections.baselineDrift}` : imperfections.baselineDrift}° (Tilt)
              </span>
            </div>
            <input
              type="range"
              min="-10"
              max="10"
              value={imperfections.baselineDrift}
              onChange={(e) =>
                onChangeImperfections({
                  ...imperfections,
                  baselineDrift: Number(e.target.value)
                })
              }
              className="w-full accent-[#000000] h-1.5 bg-[#ebe8e1] rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider 3: Word Spacing */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between font-mono-code text-xs">
              <span className="text-[#45464d]">Word Spacing Cadence</span>
              <span className="text-[#1c1c18] font-semibold">Dynamic Uneven</span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              value={imperfections.wordSpacing}
              onChange={(e) =>
                onChangeImperfections({
                  ...imperfections,
                  wordSpacing: Number(e.target.value)
                })
              }
              className="w-full accent-[#000000] h-1.5 bg-[#ebe8e1] rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider 4: Pressure & Bleed */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between font-mono-code text-xs">
              <span className="text-[#45464d]">Pressure Variance & Bleed</span>
              <span className="text-[#1c1c18] font-semibold">Medium Ink Bleed</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={imperfections.pressureVariance}
              onChange={(e) =>
                onChangeImperfections({
                  ...imperfections,
                  pressureVariance: Number(e.target.value)
                })
              }
              className="w-full accent-[#000000] h-1.5 bg-[#ebe8e1] rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Section C: Stationery & Ink Setup */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4e45d5]"></span>
            <span className="font-semibold text-sm text-[#1c1c18]">Stationery & Ink Pigment</span>
          </div>
          <span className="font-mono-code text-xs px-2 py-0.5 rounded bg-[#e5e2db] text-[#45464d]">
            Paper #24
          </span>
        </div>

        {/* Paper Texture Picker */}
        <div className="p-3.5 rounded-xl bg-white shadow-xs border border-[#c6c6cd]/20 flex flex-col gap-2.5">
          <label className="font-mono-code text-xs text-[#45464d]">Paper Sheet Texture</label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'college-ruled', label: 'College Ruled' },
              { id: 'cornell-grid', label: 'Cornell Note Grid' },
              { id: 'dot-matrix', label: 'Dot Matrix 5mm' },
              { id: 'kraft', label: 'Kraft Vintage' }
            ].map((tex) => {
              const isSelected = paperTexture === tex.id;
              return (
                <button
                  key={tex.id}
                  onClick={() => onChangePaperTexture(tex.id as PaperTexture)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold text-left flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#ebe8e1] text-[#1c1c18] ring-1 ring-[#000000]'
                      : 'bg-white hover:bg-[#ebe8e1] text-[#45464d]'
                  }`}
                >
                  <span>{tex.label}</span>
                  {isSelected && (
                    <span className="material-symbols-outlined text-[16px] text-[#1c1c18]">check</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Ink Color Palette */}
        <div className="p-3.5 rounded-xl bg-white shadow-xs border border-[#c6c6cd]/20 flex flex-col gap-2.5">
          <label className="font-mono-code text-xs text-[#45464d]">Ink Pigment & Flow</label>
          <div className="flex items-center justify-between gap-2">
            {INK_COLORS.map((ink) => {
              const isSelected = inkColor.id === ink.id;
              return (
                <button
                  key={ink.id}
                  onClick={() => onChangeInkColor(ink)}
                  className={`w-10 h-10 rounded-full bg-[#ebe8e1] flex items-center justify-center transition-all cursor-pointer ${
                    isSelected
                      ? 'ring-2 ring-[#000000] ring-offset-2'
                      : 'hover:ring-2 hover:ring-[#c6c6cd]'
                  }`}
                  title={ink.name}
                >
                  <span className={`w-5 h-5 rounded-full ${ink.bgTailwind} shadow-inner`}></span>
                </button>
              );
            })}
          </div>
          <div className="flex items-center justify-between text-[#45464d] font-mono-code text-[11px] pt-1">
            <span>Selected: {inkColor.name}</span>
            <span className="text-[#4e45d5] font-semibold">{inkColor.nib}</span>
          </div>
        </div>

        {/* Header & Stamp Controls */}
        <div className="p-3.5 rounded-xl bg-white shadow-xs border border-[#c6c6cd]/20 flex flex-col gap-2">
          <label className="flex items-center justify-between text-xs text-[#1c1c18] cursor-pointer">
            <span>Handwritten Margin Date & Roll No.</span>
            <input
              type="checkbox"
              checked={headerStamp.showMarginHeader}
              onChange={(e) =>
                onChangeHeaderStamp({
                  ...headerStamp,
                  showMarginHeader: e.target.checked
                })
              }
              className="w-4 h-4 accent-[#000000] rounded cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between text-xs text-[#1c1c18] cursor-pointer">
            <span>Page Numbering Stamp (Top Right)</span>
            <input
              type="checkbox"
              checked={headerStamp.showPageStamp}
              onChange={(e) =>
                onChangeHeaderStamp({
                  ...headerStamp,
                  showPageStamp: e.target.checked
                })
              }
              className="w-4 h-4 accent-[#000000] rounded cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between text-xs text-[#1c1c18] cursor-pointer">
            <span>Simulate Pen Smudge & Coffee Ring</span>
            <input
              type="checkbox"
              checked={headerStamp.simulateSmudge}
              onChange={(e) =>
                onChangeHeaderStamp({
                  ...headerStamp,
                  simulateSmudge: e.target.checked
                })
              }
              className="w-4 h-4 accent-[#000000] rounded cursor-pointer"
            />
          </label>
        </div>
      </div>

      {/* Section D: Target Export Packaging */}
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4e45d5]"></span>
            <span className="font-semibold text-sm text-[#1c1c18]">Target Export Packaging</span>
          </div>
          <span className="font-mono-code text-xs text-[#0c9488] font-semibold">Print Ready</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white shadow-xs border border-[#c6c6cd]/20 flex flex-col gap-2.5">
          {[
            {
              id: 'pdf',
              label: 'PDF with Searchable OCR Layer',
              icon: 'picture_as_pdf'
            },
            {
              id: 'pptx',
              label: 'PPTX Presentation Note Slides',
              icon: 'slideshow'
            },
            {
              id: 'png',
              label: '300 DPI Archival PNG (Per Page)',
              icon: 'photo'
            }
          ].map((item) => {
            const isSelected = exportFormat === item.id;
            return (
              <label
                key={item.id}
                onClick={() => onChangeExportFormat(item.id as ExportFormat)}
                className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                  isSelected ? 'bg-[#ebe8e1]' : 'bg-[#f6f3ec] hover:bg-[#ebe8e1]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#1c1c18]">{item.icon}</span>
                  <span className="font-semibold text-xs text-[#1c1c18]">{item.label}</span>
                </div>
                <input
                  type="radio"
                  name="export-format"
                  checked={isSelected}
                  onChange={() => onChangeExportFormat(item.id as ExportFormat)}
                  className="accent-[#000000] cursor-pointer"
                />
              </label>
            );
          })}
        </div>

        {/* Custom Watermark Shield Box */}
        <div className="p-3.5 rounded-xl bg-[#e5e2db] shadow-xs border border-[#c6c6cd]/30 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-xs text-[#1c1c18]">Admin Watermark Shield</span>
            <span className="font-mono-code text-[10px] bg-[#4e45d5] text-white px-1.5 py-0.5 rounded font-medium">
              ₹5/wk
            </span>
          </div>
          <p className="text-[11px] text-[#45464d] leading-snug">
            Custom security signature embedded diagonally in sub-ink frequency for assignment validation.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <input
              type="text"
              value={headerStamp.watermarkText}
              onChange={(e) =>
                onChangeHeaderStamp({
                  ...headerStamp,
                  watermarkText: e.target.value
                })
              }
              className="w-full bg-white px-2.5 py-1.5 rounded font-mono-code text-xs text-[#1c1c18] outline-none border border-[#c6c6cd]/40 focus:ring-1 focus:ring-[#4e45d5]"
              placeholder="e.g. © 2025 Scriptify AI - Roll #ENG-4029"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

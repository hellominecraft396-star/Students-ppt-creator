import React, { useState } from 'react';
import { SourceMode, ViewMode } from '../types';

interface StudioActionBarProps {
  documentTitle: string;
  onRenameTitle: (newTitle: string) => void;
  pageCount: number;
  viewMode: ViewMode;
  onChangeViewMode: (mode: ViewMode) => void;
  sourceMode: SourceMode;
  onChangeSourceMode: (mode: SourceMode) => void;
  onRerunSynthesis: () => void;
  onBatchProcess: () => void;
  onDownloadAll: () => void;
  personaName: string;
}

export const StudioActionBar: React.FC<StudioActionBarProps> = ({
  documentTitle,
  onRenameTitle,
  pageCount,
  viewMode,
  onChangeViewMode,
  sourceMode,
  onChangeSourceMode,
  onRerunSynthesis,
  onBatchProcess,
  onDownloadAll,
  personaName
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [tempTitle, setTempTitle] = useState(documentTitle);

  const handleTitleSubmit = () => {
    if (tempTitle.trim()) {
      onRenameTitle(tempTitle.trim());
    }
    setIsEditingTitle(false);
  };

  const sourceChips: { id: SourceMode; label: string; icon: string }[] = [
    { id: 'chat', label: 'Chat & Message', icon: 'chat' },
    { id: 'scans', label: 'Photos & Scans', icon: 'document_scanner' },
    { id: 'pdf', label: 'PDF Document', icon: 'description' },
    { id: 'ppt', label: 'PPT / Slides', icon: 'slideshow' },
    { id: 'research', label: 'Research Notes', icon: 'neurology' }
  ];

  return (
    <div className="sticky top-16 z-30 w-full bg-[#ffffff]/90 backdrop-blur-md px-6 py-3 shadow-xs border-b border-[#c6c6cd]/30 flex flex-col gap-3">
      {/* Top Row: Title, Mode Switcher, Primary Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* File Metadata & Editable Tag */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-[#ebe8e1] flex items-center justify-center shrink-0 text-[#1c1c18]">
            <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              {isEditingTitle ? (
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={tempTitle}
                    onChange={(e) => setTempTitle(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleTitleSubmit()}
                    onBlur={handleTitleSubmit}
                    autoFocus
                    className="font-semibold text-sm text-[#1c1c18] bg-white border border-[#4e45d5] rounded px-2 py-0.5 outline-none"
                  />
                  <button onClick={handleTitleSubmit} className="text-xs bg-[#4e45d5] text-white px-2 py-0.5 rounded">
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 min-w-0">
                  <span
                    onClick={() => setIsEditingTitle(true)}
                    className="font-semibold text-sm sm:text-base text-[#1c1c18] truncate cursor-text hover:underline decoration-dotted underline-offset-4"
                    title="Click to rename"
                  >
                    {documentTitle}
                  </span>
                  <button
                    onClick={() => setIsEditingTitle(true)}
                    className="text-[#45464d] hover:text-[#1c1c18] transition-colors"
                    title="Edit title"
                  >
                    <span className="material-symbols-outlined text-[16px]">edit</span>
                  </button>
                </div>
              )}

              <span className="px-2 py-0.5 rounded-full font-mono-code text-[11px] bg-[#ebe8e1] text-[#0c9488] flex items-center gap-1.5 shrink-0 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488] animate-pulse"></span>
                Converted · {pageCount} Pages Ready
              </span>
            </div>

            <span className="font-mono-code text-xs text-[#45464d] flex items-center gap-2">
              <span>Size: 2.8 MB</span>
              <span>•</span>
              <span>Synthesized with {personaName} Engine</span>
              <span>•</span>
              <span className="text-[#4e45d5] font-semibold">Lossless Vector Curve</span>
            </span>
          </div>
        </div>

        {/* Quick Mode Switcher */}
        <div className="flex items-center bg-[#f6f3ec] p-1 rounded-xl shrink-0 border border-[#c6c6cd]/30">
          <button
            onClick={() => onChangeViewMode('handwritten')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'handwritten'
                ? 'bg-[#000000] text-white shadow-xs'
                : 'text-[#45464d] hover:text-[#1c1c18]'
            }`}
          >
            <span className="material-symbols-outlined text-[17px]">draw</span>
            <span>Authentic Handwritten Notes</span>
          </button>
          <button
            onClick={() => onChangeViewMode('computerized')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'computerized'
                ? 'bg-[#000000] text-white shadow-xs'
                : 'text-[#45464d] hover:text-[#1c1c18]'
            }`}
          >
            <span className="material-symbols-outlined text-[17px]">keyboard</span>
            <span>Clean Computerized Notes</span>
          </button>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onRerunSynthesis}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#ebe8e1] hover:bg-[#e5e2db] text-[#1c1c18] text-xs font-semibold transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">auto_fix_high</span>
            <span className="hidden sm:inline">Re-run AI Synthesis</span>
          </button>

          <button
            onClick={onBatchProcess}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#ebe8e1] hover:bg-[#e5e2db] text-[#1c1c18] text-xs font-semibold transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">layers</span>
            <span className="hidden md:inline">Batch Process</span>
          </button>

          <button
            onClick={onDownloadAll}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#000000] hover:bg-[#31312c] text-white text-xs font-semibold shadow-md transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
            <span>Download All</span>
            <span className="font-mono-code text-[11px] opacity-80">(ZIP/PDF/PPTX)</span>
          </button>
        </div>
      </div>

      {/* Bottom Row: Source Mode Chips & Physics Telemetry */}
      <div className="flex items-center justify-between border-t border-[#c6c6cd]/20 pt-2">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          <span className="font-mono-code text-[11px] text-[#45464d] uppercase tracking-wider mr-2 shrink-0 font-semibold">
            Source Mode:
          </span>
          {sourceChips.map((chip) => {
            const isActive = sourceMode === chip.id;
            return (
              <button
                key={chip.id}
                onClick={() => onChangeSourceMode(chip.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs shrink-0 transition-colors ${
                  isActive
                    ? 'bg-[#131b2e] text-white font-semibold shadow-xs'
                    : 'text-[#45464d] hover:bg-[#ebe8e1] hover:text-[#1c1c18]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">{chip.icon}</span>
                <span>{chip.label}</span>
              </button>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4 text-[#45464d] font-mono-code text-xs">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px] text-[#4e45d5]">verified_user</span>
            <span>100% Client-Side Physics Simulation</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px] text-[#0c9488]">speed</span>
            <span>0.18s Latency</span>
          </span>
        </div>
      </div>
    </div>
  );
};

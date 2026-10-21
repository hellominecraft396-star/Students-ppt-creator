import React from 'react';

interface StudioFooterProps {
  onOpenQrSync: () => void;
  onDispatchWhatsApp: () => void;
  onExportPptx: () => void;
  onRunFactCheck: () => void;
}

export const StudioFooter: React.FC<StudioFooterProps> = ({
  onOpenQrSync,
  onDispatchWhatsApp,
  onExportPptx,
  onRunFactCheck
}) => {
  return (
    <footer className="w-full bg-[#f6f3ec] px-6 py-3 border-t border-[#c6c6cd]/30 flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono-code text-xs text-[#45464d] mr-1 font-semibold">
          Quick Pipelines:
        </span>

        <button
          onClick={onOpenQrSync}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-[#ebe8e1] text-[#1c1c18] font-mono-code text-xs shadow-xs border border-[#c6c6cd]/20 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[15px] text-[#4e45d5]">qr_code_2</span>
          <span>Sync phone camera via QR</span>
        </button>

        <button
          onClick={onDispatchWhatsApp}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-[#ebe8e1] text-[#1c1c18] font-mono-code text-xs shadow-xs border border-[#c6c6cd]/20 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[15px] text-[#0c9488]">send</span>
          <span>Dispatch directly to WhatsApp</span>
        </button>

        <button
          onClick={onExportPptx}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-[#ebe8e1] text-[#1c1c18] font-mono-code text-xs shadow-xs border border-[#c6c6cd]/20 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[15px] text-[#1c1c18]">co_present</span>
          <span>Generate PowerPoint deck</span>
        </button>

        <button
          onClick={onRunFactCheck}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-[#ebe8e1] text-[#1c1c18] font-mono-code text-xs shadow-xs border border-[#c6c6cd]/20 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[15px] text-[#4e45d5]">fact_check</span>
          <span>Run Deep Web Fact-Check</span>
        </button>
      </div>

      <div className="flex items-center gap-3 text-[#45464d] font-mono-code text-[11px]">
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px] text-[#0c9488]">lock</span>
          <span>Scriptify AI Engine v2.4 · 100% Client-Side Encryption Enabled</span>
        </span>
        <span>•</span>
        <span className="text-[#4e45d5] font-semibold">Admin Pass Active</span>
      </div>
    </footer>
  );
};

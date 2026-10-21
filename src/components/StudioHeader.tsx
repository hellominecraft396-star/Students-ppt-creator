import React, { useState } from 'react';

interface StudioHeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenQrSync: () => void;
  onOpenAdminModal: () => void;
  onOpenDeepResearch: () => void;
  onExport: (format: 'pdf' | 'png' | 'pptx' | 'print') => void;
  adminPassDaysLeft: number;
}

export const StudioHeader: React.FC<StudioHeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenQrSync,
  onOpenAdminModal,
  onOpenDeepResearch,
  onExport,
  adminPassDaysLeft
}) => {
  const [exportDropdownOpen, setExportDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-[#fcf9f2]/90 backdrop-blur-xl border-b border-[#c6c6cd]/30">
      <div className="w-full h-full px-4 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand & Breadcrumbs */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            alt="Scriptify AI Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1VtviwbGesCDCjXoPx-KLRUqLmdfS7Y3sAshQfr-5F9KCCuZTHDioT1GkrmiufqJ2VWfJMKTuFosGqoFH7jADAr9LOP4x_PT0wyUukZqNe8WCHNOFxWELGyWJAECwCgZayqtl47Cb7nTbSj5gdXUFkrEsEjwGSxr5GiEAZqmJhhMoE0uXiqNdydUYVVrGTbb3WeAuboYh32_b4TkjyO86Jm7x1Jpy35jwL0BTrI6cNHt0A6yOQcbpw5MdDQ"
          />
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg text-[#1c1c18] tracking-tight">Scriptify AI</span>
            <span className="font-mono-code text-[11px] px-1.5 py-0.5 rounded bg-[#ebe8e1] text-[#45464d] font-medium">
              v2.4 Pro Studio
            </span>
          </div>

          <div className="h-4 w-px bg-[#c6c6cd]/40 mx-2 hidden lg:block"></div>

          <div className="hidden xl:flex items-center gap-1.5 text-[#45464d] text-xs">
            <span className="hover:text-[#1c1c18] transition-colors cursor-pointer">Workbench</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#1c1c18] font-semibold">Studio Canvas</span>
          </div>
        </div>

        {/* Central Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => onSelectTab('studio-converter')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              currentTab === 'studio-converter'
                ? 'bg-[#131b2e] text-white shadow-sm'
                : 'text-[#45464d] hover:bg-[#ebe8e1] hover:text-[#1c1c18]'
            }`}
          >
            Studio Converter
          </button>

          <button
            onClick={onOpenDeepResearch}
            className={`px-3 py-1.5 text-xs transition-colors rounded-lg ${
              currentTab === 'ai-deep-research'
                ? 'bg-[#131b2e] text-white font-semibold'
                : 'text-[#45464d] hover:bg-[#ebe8e1] hover:text-[#1c1c18]'
            }`}
          >
            AI Deep Research
          </button>

          <div className="relative flex items-center">
            <button
              onClick={onOpenQrSync}
              className="px-3 py-1.5 text-xs text-[#45464d] hover:bg-[#ebe8e1] hover:text-[#1c1c18] transition-colors rounded-lg flex items-center gap-1"
            >
              Device QR Sync
            </button>
            <span className="absolute -top-1.5 right-0 flex items-center gap-1 bg-[#e5e2db] px-1.5 py-0.5 rounded-full font-mono-code text-[9px] text-[#1c1c18] border border-[#c6c6cd]/40 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488] animate-pulse"></span>
              WA/Gmail
            </span>
          </div>

          <div className="relative flex items-center">
            <button
              onClick={onOpenAdminModal}
              className="px-3 py-1.5 text-xs text-[#45464d] hover:bg-[#ebe8e1] hover:text-[#1c1c18] transition-colors rounded-lg flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[15px]">lock</span>
              Admin Command
            </button>
            <span className="ml-1 font-mono-code text-[10px] bg-[#4e45d5] text-white px-1.5 py-0.5 rounded font-medium">
              ₹5/wk
            </span>
          </div>
        </nav>

        {/* Right Actions & Profile */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Active Pass Badge */}
          <div
            onClick={onOpenAdminModal}
            className="hidden 2xl:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#f6f3ec] border border-[#c6c6cd]/30 text-[#1c1c18] cursor-pointer hover:bg-[#ebe8e1] transition-colors"
            title="Manage Studio Pass"
          >
            <span className="material-symbols-outlined text-[16px] text-[#4e45d5]">verified</span>
            <span className="font-mono-code text-xs font-semibold">₹5/Week Pass Active</span>
            <span className="font-mono-code text-xs text-[#45464d]">({adminPassDaysLeft} Days Left)</span>
          </div>

          {/* Export As Dropdown */}
          <div className="relative">
            <button
              onClick={() => setExportDropdownOpen(!exportDropdownOpen)}
              className="h-8 px-3 rounded-lg bg-[#ebe8e1] hover:bg-[#e5e2db] transition-colors flex items-center gap-1 text-xs font-medium text-[#1c1c18] shadow-xs"
            >
              <span className="material-symbols-outlined text-[16px]">file_download</span>
              <span>Export As</span>
              <span className="material-symbols-outlined text-[14px]">arrow_drop_down</span>
            </button>

            {exportDropdownOpen && (
              <div
                className="absolute right-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-[#c6c6cd]/40 py-1.5 z-50 text-xs flex flex-col"
                onClick={() => setExportDropdownOpen(false)}
              >
                <div className="px-3 py-1 text-[10px] uppercase font-mono-code tracking-wider text-slate-400 font-semibold">
                  Print-Ready Formats
                </div>
                <button
                  onClick={() => onExport('pdf')}
                  className="px-3 py-2 text-left hover:bg-slate-50 flex items-center justify-between text-slate-800"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-red-600">picture_as_pdf</span>
                    <span>Download Multi-Page PDF</span>
                  </span>
                  <span className="font-mono-code text-[10px] text-slate-400">HQ</span>
                </button>
                <button
                  onClick={() => onExport('png')}
                  className="px-3 py-2 text-left hover:bg-slate-50 flex items-center justify-between text-slate-800"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-blue-600">photo_library</span>
                    <span>300 DPI Archival PNGs</span>
                  </span>
                  <span className="font-mono-code text-[10px] text-slate-400">ZIP</span>
                </button>
                <button
                  onClick={() => onExport('pptx')}
                  className="px-3 py-2 text-left hover:bg-slate-50 flex items-center justify-between text-slate-800"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-amber-600">slideshow</span>
                    <span>PPTX Slides Note Deck</span>
                  </span>
                  <span className="font-mono-code text-[10px] text-slate-400">Slides</span>
                </button>
                <div className="h-px bg-slate-100 my-1"></div>
                <button
                  onClick={() => onExport('print')}
                  className="px-3 py-2 text-left hover:bg-slate-50 flex items-center gap-2 text-slate-800"
                >
                  <span className="material-symbols-outlined text-[16px]">print</span>
                  <span>Print Current Sheet</span>
                </button>
              </div>
            )}
          </div>

          {/* Admin Key Button */}
          <button
            onClick={onOpenAdminModal}
            className="h-8 px-2.5 rounded-lg bg-[#f0eee7] border border-[#c6c6cd]/40 hover:bg-[#ebe8e1] transition-colors flex items-center gap-1 font-mono-code text-xs text-[#45464d]"
            title="Admin Command Key"
          >
            <span className="material-symbols-outlined text-[16px] text-[#4e45d5]">key</span>
            <span className="hidden lg:inline">Admin Key</span>
          </button>

          {/* User Profile Avatar */}
          <div className="w-8 h-8 rounded-full bg-[#131b2e] text-white flex items-center justify-center shrink-0 cursor-pointer shadow-sm">
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
};

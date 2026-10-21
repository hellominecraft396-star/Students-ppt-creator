import React from 'react';

interface StudioSidebarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenDeepResearch: () => void;
  onOpenQrSync: () => void;
  onOpenAdminModal: () => void;
  onOpenArchives: (archiveName: string) => void;
  adminPassDaysLeft: number;
}

export const StudioSidebar: React.FC<StudioSidebarProps> = ({
  currentTab,
  onSelectTab,
  onOpenDeepResearch,
  onOpenQrSync,
  onOpenAdminModal,
  onOpenArchives,
  adminPassDaysLeft
}) => {
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-[#f6f3ec] border-r border-[#c6c6cd]/30 z-40 flex flex-col justify-between py-4 hidden md:flex">
      <div className="flex flex-col gap-4 px-2">
        <div className="px-3">
          <span className="font-mono-code text-[11px] text-[#45464d] uppercase tracking-wider font-semibold">
            Synthesis Pipeline
          </span>
        </div>

        <nav className="flex flex-col gap-1">
          <button
            onClick={() => onSelectTab('studio-converter')}
            className={`flex items-center gap-3 px-3 py-2 transition-colors rounded-lg text-left text-sm ${
              currentTab === 'studio-converter'
                ? 'bg-[#131b2e] text-white font-semibold shadow-xs'
                : 'text-[#45464d] hover:bg-[#ebe8e1] hover:text-[#1c1c18]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">edit_note</span>
            <span>Studio Converter</span>
          </button>

          <button
            onClick={onOpenDeepResearch}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#45464d] hover:bg-[#ebe8e1] hover:text-[#1c1c18] transition-colors text-sm text-left"
          >
            <span className="material-symbols-outlined text-[20px]">psychology</span>
            <span>AI Deep Research</span>
          </button>

          <button
            onClick={onOpenQrSync}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-[#45464d] hover:bg-[#ebe8e1] hover:text-[#1c1c18] transition-colors text-sm text-left"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
              <span>Device QR Sync</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-[#0c9488] animate-pulse"></span>
          </button>

          <button
            onClick={onOpenAdminModal}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-[#45464d] hover:bg-[#ebe8e1] hover:text-[#1c1c18] transition-colors text-sm text-left"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
              <span>Admin Command</span>
            </div>
            <span className="font-mono-code text-[10px] bg-[#4e45d5] text-white px-1.5 py-0.5 rounded font-medium">
              Pass
            </span>
          </button>
        </nav>

        <div className="h-px bg-[#c6c6cd]/30 mx-2 my-1"></div>

        <div className="px-3">
          <span className="font-mono-code text-[11px] text-[#45464d] uppercase tracking-wider font-semibold">
            Archives & Tools
          </span>
        </div>

        <nav className="flex flex-col gap-1">
          <button
            onClick={() => onOpenArchives('Handwriting Sheets Archive')}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#45464d] hover:bg-[#ebe8e1] hover:text-[#1c1c18] transition-colors text-sm text-left"
          >
            <span className="material-symbols-outlined text-[20px]">history_edu</span>
            <span>Handwriting Sheets</span>
          </button>

          <button
            onClick={() => onOpenArchives('Ink & Jitter Engine Profiler')}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#45464d] hover:bg-[#ebe8e1] hover:text-[#1c1c18] transition-colors text-sm text-left"
          >
            <span className="material-symbols-outlined text-[20px]">tune</span>
            <span>Ink & Jitter Engine</span>
          </button>

          <button
            onClick={() => onOpenArchives('Cloud Dispatches & Webhook Logs')}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#45464d] hover:bg-[#ebe8e1] hover:text-[#1c1c18] transition-colors text-sm text-left"
          >
            <span className="material-symbols-outlined text-[20px]">cloud_sync</span>
            <span>Cloud Dispatches</span>
          </button>
        </nav>
      </div>

      {/* Bottom Pass Card & Status */}
      <div className="px-2 flex flex-col gap-2">
        <div className="p-3 rounded-xl bg-[#e5e2db] flex flex-col gap-1 border border-[#c6c6cd]/30 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="font-mono-code text-xs text-[#1c1c18] font-bold">Studio Cloud Tier</span>
            <span className="font-mono-code text-xs text-[#4e45d5] font-semibold">Active</span>
          </div>
          <p className="text-[11px] text-[#45464d] leading-snug">
            Pass renews in {adminPassDaysLeft} days. High-density SVG handwriting synthesis unlocked.
          </p>
        </div>

        <div className="flex items-center justify-between px-2 pt-1 font-mono-code text-[11px] text-[#45464d]">
          <span>v2.4.1 Studio Pro</span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488]"></span>
            Online
          </span>
        </div>
      </div>
    </aside>
  );
};

import React from 'react';
import { DocumentPage } from '../types';

interface CanvasControlsProps {
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  currentPageIndex: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onSelectPage: (index: number) => void;
  isSplitView: boolean;
  onToggleSplitView: () => void;
  onToggleFullscreen: () => void;
  pages: DocumentPage[];
  onAddNewPage: () => void;
  onPrint: () => void;
}

export const CanvasControls: React.FC<CanvasControlsProps> = ({
  zoomLevel,
  onZoomIn,
  onZoomOut,
  currentPageIndex,
  totalPages,
  onNextPage,
  onPrevPage,
  onSelectPage,
  isSplitView,
  onToggleSplitView,
  onToggleFullscreen,
  pages,
  onAddNewPage,
  onPrint
}) => {
  return (
    <>
      {/* Floating Canvas Glass Controls Toolbar */}
      <div className="canvas-toolbar w-full flex items-center justify-between gap-3 mb-6 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xs border border-[#c6c6cd]/30 z-20">
        {/* Zoom Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onZoomOut}
            disabled={zoomLevel <= 60}
            className="w-8 h-8 rounded-lg bg-[#ebe8e1] hover:bg-[#e5e2db] flex items-center justify-center text-[#1c1c18] transition-colors disabled:opacity-40 cursor-pointer"
            title="Zoom Out"
          >
            <span className="material-symbols-outlined text-[18px]">remove</span>
          </button>
          <span className="font-mono-code text-xs text-[#1c1c18] px-1 font-semibold w-10 text-center">
            {zoomLevel}%
          </span>
          <button
            onClick={onZoomIn}
            disabled={zoomLevel >= 150}
            className="w-8 h-8 rounded-lg bg-[#ebe8e1] hover:bg-[#e5e2db] flex items-center justify-center text-[#1c1c18] transition-colors disabled:opacity-40 cursor-pointer"
            title="Zoom In"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
          </button>

          <div className="h-4 w-px bg-[#c6c6cd]/40 mx-1"></div>

          <button
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#f0eee7] hover:bg-[#ebe8e1] text-xs text-[#1c1c18] transition-colors cursor-pointer"
            title="Paper Proportion"
          >
            <span className="material-symbols-outlined text-[16px]">aspect_ratio</span>
            <span>A4 Portrait</span>
          </button>
        </div>

        {/* Page Indicator & Stepper */}
        <div className="flex items-center gap-2">
          <button
            onClick={onPrevPage}
            disabled={currentPageIndex === 0}
            className="w-8 h-8 rounded-lg bg-[#ebe8e1] hover:bg-[#e5e2db] flex items-center justify-center text-[#45464d] hover:text-[#1c1c18] transition-colors disabled:opacity-40 cursor-pointer"
            title="Previous Page"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <span className="font-mono-code text-xs text-[#1c1c18] font-semibold px-2">
            Page {currentPageIndex + 1} of {totalPages}
          </span>
          <button
            onClick={onNextPage}
            disabled={currentPageIndex === totalPages - 1}
            className="w-8 h-8 rounded-lg bg-[#ebe8e1] hover:bg-[#e5e2db] flex items-center justify-center text-[#1c1c18] transition-colors disabled:opacity-40 cursor-pointer"
            title="Next Page"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>

        {/* Canvas Modes (Split vs Fullscreen) */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSplitView}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
              isSplitView
                ? 'bg-[#131b2e] text-white font-semibold'
                : 'bg-[#ebe8e1] hover:bg-[#e5e2db] text-[#1c1c18]'
            }`}
            title="Toggle Split-Screen Comparison"
          >
            <span className="material-symbols-outlined text-[16px]">compare_arrows</span>
            <span className="hidden md:inline">
              {isSplitView ? 'Exit Split Mode' : 'Split Typed vs Handwritten'}
            </span>
          </button>

          <button
            onClick={onToggleFullscreen}
            className="w-8 h-8 rounded-lg bg-[#ebe8e1] hover:bg-[#e5e2db] flex items-center justify-center text-[#1c1c18] transition-colors cursor-pointer"
            title="Toggle Canvas Focus"
          >
            <span className="material-symbols-outlined text-[18px]">fullscreen</span>
          </button>
        </div>
      </div>

      {/* Multi-Page Thumbnail Strip at Canvas Bottom */}
      <div className="thumbnail-strip w-full flex items-center justify-between gap-4 mt-6 pt-3 border-t border-[#c6c6cd]/30">
        <div className="flex items-center gap-3 overflow-x-auto py-1 no-scrollbar">
          <span className="font-mono-code text-xs text-[#45464d] uppercase tracking-wider shrink-0 font-semibold">
            Assignment Sheets:
          </span>

          {pages.map((p, idx) => {
            const isActive = idx === currentPageIndex;
            return (
              <div
                key={p.id}
                onClick={() => onSelectPage(idx)}
                className="flex flex-col items-center gap-1 cursor-pointer group shrink-0"
              >
                <div
                  className={`w-16 h-20 rounded bg-[#fcf9ee] p-1 shadow-xs flex flex-col justify-between transition-all ${
                    isActive
                      ? 'ring-2 ring-[#000000] scale-105'
                      : 'border border-[#c6c6cd]/40 hover:ring-2 hover:ring-[#c6c6cd]'
                  }`}
                >
                  <div className="w-full h-1 bg-red-400/60 rounded"></div>
                  <div className="space-y-1">
                    <div className="w-3/4 h-1 bg-blue-900/30 rounded"></div>
                    <div className="w-full h-1 bg-blue-900/20 rounded"></div>
                    <div className="w-2/3 h-1 bg-blue-900/20 rounded"></div>
                  </div>
                  <span className="font-mono-code text-[9px] text-blue-900 self-end font-bold">
                    p.{idx + 1}
                  </span>
                </div>
                <span
                  className={`font-mono-code text-[11px] ${
                    isActive ? 'text-[#1c1c18] font-bold' : 'text-[#45464d]'
                  }`}
                >
                  Page {idx + 1} {isActive && '(Active)'}
                </span>
              </div>
            );
          })}

          {/* Add New Page Blank */}
          <button
            onClick={onAddNewPage}
            className="w-16 h-20 rounded-lg bg-[#ebe8e1] hover:bg-[#e5e2db] flex flex-col items-center justify-center gap-1 text-[#45464d] hover:text-[#1c1c18] transition-colors shrink-0 cursor-pointer border border-dashed border-[#c6c6cd]"
            title="Create next handwritten sheet"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span className="font-mono-code text-[10px]">Add Page</span>
          </button>
        </div>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ebe8e1] hover:bg-[#e5e2db] text-xs text-[#1c1c18] font-semibold transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">print</span>
            <span>Send to Local Printer</span>
          </button>
        </div>
      </div>
    </>
  );
};

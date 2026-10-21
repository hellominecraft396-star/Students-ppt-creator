import React from 'react';
import { DocumentPage, HandwritingPersona, ImperfectionSettings, InkColor, PaperTexture, HeaderStampSettings, ViewMode } from '../types';
import { HandDrawnDiagram } from './HandDrawnDiagram';

interface TactileParchmentSheetProps {
  page: DocumentPage;
  persona: HandwritingPersona;
  imperfections: ImperfectionSettings;
  paperTexture: PaperTexture;
  inkColor: InkColor;
  headerStamp: HeaderStampSettings;
  viewMode: ViewMode;
  splitRatio?: number; // 0 to 100 for split screen
}

export const TactileParchmentSheet: React.FC<TactileParchmentSheetProps> = ({
  page,
  persona,
  imperfections,
  paperTexture,
  inkColor,
  headerStamp,
  viewMode,
  splitRatio = 50
}) => {
  // Compute dynamic transform offsets
  const driftAngle = imperfections.baselineDrift;
  const jitterFactor = imperfections.jitter / 100;
  const wordSpacingPx = `${Math.round((imperfections.wordSpacing - 50) / 10)}px`;

  // Determine paper background styles
  const getPaperBg = () => {
    switch (paperTexture) {
      case 'kraft':
        return 'bg-[#efe5ce] text-[#292524]';
      case 'cornell-grid':
      case 'dot-matrix':
      case 'college-ruled':
      default:
        return 'bg-[#fcf9ee] text-slate-900';
    }
  };

  const isComputerized = viewMode === 'computerized';

  return (
    <div
      className={`relative w-full max-w-[780px] ${getPaperBg()} rounded-lg shadow-2xl p-8 sm:p-12 transition-all duration-300 transform print-sheet`}
      style={{
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 24px 48px -12px rgba(15, 23, 42, 0.12)',
        minHeight: '1020px'
      }}
    >
      {/* Background Ruled / Grid Layers */}
      {!isComputerized && (
        <div className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden select-none">
          {/* College Ruled with Red Left Vertical Margin Line */}
          {paperTexture === 'college-ruled' && (
            <>
              <div className="absolute top-0 bottom-0 left-16 sm:left-24 w-0.5 bg-red-400 opacity-70"></div>
              <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="college-ruled-pattern" width="100%" height="28" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="27" x2="100%" y2="27" stroke="#93c5fd" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#college-ruled-pattern)" />
              </svg>
            </>
          )}

          {/* Cornell Note Grid */}
          {paperTexture === 'cornell-grid' && (
            <>
              {/* Cue Column divider */}
              <div className="absolute top-0 bottom-28 left-[28%] w-0.5 bg-indigo-300 opacity-60"></div>
              {/* Summary line */}
              <div className="absolute bottom-28 left-0 right-0 h-0.5 bg-indigo-300 opacity-60"></div>
              <svg className="w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cornell-grid-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#6366f1" strokeWidth="0.75" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cornell-grid-pattern)" />
              </svg>
            </>
          )}

          {/* Dot Matrix 5mm */}
          {paperTexture === 'dot-matrix' && (
            <svg className="w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dot-matrix-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#64748b" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dot-matrix-pattern)" />
            </svg>
          )}

          {/* Kraft Vintage Fibers */}
          {paperTexture === 'kraft' && (
            <div className="absolute inset-0 bg-gradient-to-br from-amber-700/5 via-transparent to-amber-900/10 pointer-events-none">
              <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="kraft-lines" width="100%" height="30" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="29" x2="100%" y2="29" stroke="#b45309" strokeWidth="0.8" strokeDasharray="6,4" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#kraft-lines)" />
              </svg>
            </div>
          )}

          {/* Optional Pen Smudge & Coffee Ring Simulation */}
          {headerStamp.simulateSmudge && (
            <>
              {/* Coffee Ring Stain */}
              <svg className="absolute -top-4 -right-4 w-40 h-40 opacity-20 pointer-events-none" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" fill="none" stroke="#78350f" strokeWidth="5" strokeDasharray="30, 8, 20, 12" />
                <circle cx="50" cy="50" r="36" fill="none" stroke="#92400e" strokeWidth="1.5" opacity="0.6" />
                <path d="M 40 15 Q 55 12 70 20" stroke="#78350f" strokeWidth="3" fill="none" opacity="0.4" />
              </svg>

              {/* Ink Thumb Smudge */}
              <div
                className="absolute top-[48%] right-12 w-16 h-8 rounded-full opacity-15 pointer-events-none blur-[1px]"
                style={{ backgroundColor: inkColor.hex, transform: 'rotate(-20deg)' }}
              />
            </>
          )}
        </div>
      )}

      {/* Sheet Content Layer */}
      <div
        className={`relative z-10 flex flex-col select-none ${
          isComputerized ? 'font-sans-ui text-slate-800' : `${persona.fontClass} transition-colors duration-200`
        }`}
        style={{
          color: isComputerized ? '#1e293b' : inkColor.hex,
          wordSpacing: isComputerized ? 'normal' : wordSpacingPx
        }}
      >
        {/* Margin Header Info (Roll #, Course, Date, Sheet) */}
        {headerStamp.showMarginHeader && (
          <div className="flex items-center justify-between pb-6 font-mono-code text-[11px] sm:text-[13px] opacity-85 tracking-wide border-b border-transparent">
            <div className="flex items-center gap-3">
              <span className={isComputerized ? 'font-semibold text-slate-900' : 'font-semibold underline decoration-wavy'} style={{ textDecorationColor: inkColor.hex }}>
                {page.rollNumber}
              </span>
              <span>• {page.course}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Date: {page.date}</span>
              {headerStamp.showPageStamp && (
                <span className="px-2 py-0.5 rounded bg-blue-100/70 font-bold text-blue-900">
                  {page.sheetLabel}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Page Title & Subtitle */}
        <div
          className={`pl-12 sm:pl-20 pt-2 pb-5 transition-transform duration-200 ${
            isComputerized ? 'transform-none' : ''
          }`}
          style={{
            transform: isComputerized ? 'none' : `rotate(${driftAngle * 0.4}deg)`
          }}
        >
          <h1
            className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isComputerized
                ? 'text-slate-900 border-b-2 border-indigo-600 pb-2'
                : 'underline decoration-2 underline-offset-8'
            }`}
            style={{ textDecorationColor: `${inkColor.hex}99` }}
          >
            {page.chapterTitle}
          </h1>
          <p
            className={`mt-2 font-normal ${
              isComputerized ? 'text-slate-600 font-mono-code text-xs' : 'font-mono-code text-[12px] opacity-75 italic'
            }`}
          >
            {page.chapterSubtitle}
          </p>
        </div>

        {/* Body Paragraph */}
        <div className="pl-12 sm:pl-20 text-[14px] sm:text-[16px] leading-[28px] font-medium space-y-4">
          <p
            className="transition-transform duration-200"
            style={{
              transform: isComputerized ? 'none' : `rotate(${driftAngle * 0.15 - jitterFactor * 0.2}deg)`
            }}
          >
            {page.introText}
          </p>

          {/* Mathematical Formula Box */}
          <div
            className={`my-3 p-3 rounded-lg border transition-transform duration-200 ${
              isComputerized
                ? 'bg-slate-100 border-slate-300 text-slate-900 shadow-sm'
                : 'bg-blue-50/40 border-dashed border-blue-200'
            }`}
            style={{
              transform: isComputerized ? 'none' : `rotate(${driftAngle * -0.2 + 0.4}deg)`
            }}
          >
            <div className="flex items-center justify-center font-mono-code text-base sm:text-lg font-bold gap-2 py-1">
              <span>{page.formula.math}</span>
            </div>
            <div className="text-right text-[11px] font-mono-code opacity-75">
              {page.formula.caption}
            </div>
          </div>

          {/* Bullet Points */}
          <ul className="space-y-2 list-none pl-1">
            {page.bulletPoints.map((item, idx) => {
              const itemTilt = (item.tilt || 0) + (driftAngle * 0.1);
              return (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 transition-transform duration-200"
                  style={{
                    transform: isComputerized ? 'none' : `rotate(${itemTilt}deg)`
                  }}
                >
                  <span className="font-bold select-none text-lg leading-none" style={{ color: inkColor.hex }}>•</span>
                  <span>
                    <strong className="font-semibold">{item.title} </strong>
                    <span className="opacity-95">{item.description}</span>
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Hand-Drawn or Computerized Diagram */}
          <div
            className={`my-4 p-4 rounded-xl flex flex-col items-center transition-transform duration-200 ${
              isComputerized
                ? 'bg-white border border-slate-200 shadow-sm'
                : 'bg-amber-50/30'
            }`}
            style={{
              transform: isComputerized ? 'none' : `rotate(${driftAngle * 0.1}deg)`
            }}
          >
            <span className="font-mono-code text-[11px] uppercase tracking-widest mb-1 opacity-80 font-semibold">
              {page.diagram.title}
            </span>

            <HandDrawnDiagram
              type={page.diagram.type}
              inkHex={isComputerized ? '#1e293b' : inkColor.hex}
              jitter={isComputerized ? 0 : imperfections.jitter}
            />

            <div className="w-full flex justify-between text-[11px] font-mono-code opacity-60 mt-2 px-2">
              <span>Simulated pressure: {page.diagram.simulatedPressure}</span>
              <span>Vector Nodes: {page.diagram.svgNodes} pts</span>
            </div>
          </div>

          {/* Marginal Note Callout */}
          <div
            className={`relative mt-2 p-2.5 rounded text-[13px] flex items-start gap-2 transition-transform duration-200 ${
              isComputerized
                ? 'bg-amber-50 border border-amber-200 text-amber-900'
                : 'bg-blue-100/40 text-blue-950'
            }`}
            style={{
              transform: isComputerized ? 'none' : `rotate(${driftAngle * 0.3 - 0.6}deg)`
            }}
          >
            <span className="material-symbols-outlined text-[16px] text-red-600 shrink-0">edit_attributes</span>
            <span>
              <em>{page.instructorNote}</em>
            </span>
          </div>
        </div>

        {/* Bottom Margin Stamp & Watermark */}
        <div className="mt-12 pt-4 flex items-center justify-between font-mono-code text-[10px] opacity-60 select-none border-t border-slate-200/40">
          <span>Scriptify AI · Synthesized Output v2.4</span>
          <span className="tracking-widest uppercase font-semibold">
            {headerStamp.watermarkText || 'Watermark ID: #SCR-8921-X9'}
          </span>
          <span>{isComputerized ? 'Clean Render Mode' : '100% Authentic Human Jitter'}</span>
        </div>
      </div>
    </div>
  );
};

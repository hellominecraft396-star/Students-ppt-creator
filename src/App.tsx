import React, { useState } from 'react';
import {
  DocumentPage,
  ExportFormat,
  HandwritingPersona,
  HeaderStampSettings,
  ImperfectionSettings,
  InkColor,
  PaperTexture,
  SourceMode,
  ViewMode
} from './types';
import { INITIAL_PAGES, PERSONAS, INK_COLORS } from './data/mockPages';
import { StudioHeader } from './components/StudioHeader';
import { StudioSidebar } from './components/StudioSidebar';
import { StudioActionBar } from './components/StudioActionBar';
import { StudioInspector } from './components/StudioInspector';
import { TactileParchmentSheet } from './components/TactileParchmentSheet';
import { CanvasControls } from './components/CanvasControls';
import { StudioFooter } from './components/StudioFooter';
import { PasteRawTextModal } from './components/modals/PasteRawTextModal';
import { DeviceQrSyncModal } from './components/modals/DeviceQrSyncModal';
import { AdminCommandModal } from './components/modals/AdminCommandModal';
import { AiSynthesisModal } from './components/modals/AiSynthesisModal';
import { CloneHandModal } from './components/modals/CloneHandModal';
import { DeepResearchModal } from './components/modals/DeepResearchModal';
import { BatchProcessModal } from './components/modals/BatchProcessModal';
import { ArchivesModal } from './components/modals/ArchivesModal';

export default function App() {
  // Document State
  const [pages, setPages] = useState<DocumentPage[]>(INITIAL_PAGES);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [documentTitle, setDocumentTitle] = useState('Machine_Learning_Assignment_Ch4.pdf');

  // Mode and View State
  const [viewMode, setViewMode] = useState<ViewMode>('handwritten');
  const [sourceMode, setSourceMode] = useState<SourceMode>('pdf');
  const [isSplitView, setIsSplitView] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [currentTab, setCurrentTab] = useState('studio-converter');
  const [adminPassDaysLeft, setAdminPassDaysLeft] = useState(5);

  // Handwriting & Physical Engine State
  const [selectedPersona, setSelectedPersona] = useState<HandwritingPersona>(PERSONAS[0]);
  const [imperfections, setImperfections] = useState<ImperfectionSettings>({
    jitter: 42,
    baselineDrift: -2,
    wordSpacing: 65,
    pressureVariance: 55
  });

  // Stationery & Ink State
  const [paperTexture, setPaperTexture] = useState<PaperTexture>('college-ruled');
  const [inkColor, setInkColor] = useState<InkColor>(INK_COLORS[0]);
  const [headerStamp, setHeaderStamp] = useState<HeaderStampSettings>({
    showMarginHeader: true,
    showPageStamp: true,
    simulateSmudge: false,
    watermarkText: '© 2025 Scriptify AI - Roll #ENG-4029'
  });
  const [exportFormat, setExportFormat] = useState<ExportFormat>('pdf');

  // Modals Visibility
  const [isPasteModalOpen, setIsPasteModalOpen] = useState(false);
  const [isQrSyncModalOpen, setIsQrSyncModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isSynthesisModalOpen, setIsSynthesisModalOpen] = useState(false);
  const [isCloneModalOpen, setIsCloneModalOpen] = useState(false);
  const [isDeepResearchModalOpen, setIsDeepResearchModalOpen] = useState(false);
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false);
  const [archiveModalInfo, setArchiveModalInfo] = useState<{ open: boolean; title: string }>({
    open: false,
    title: ''
  });

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const currentPage = pages[currentPageIndex] || pages[0];

  // Actions
  const handleNextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleAddNewPage = () => {
    const nextId = pages.length + 1;
    const newPage: DocumentPage = {
      id: nextId,
      rollNumber: currentPage.rollNumber,
      course: currentPage.course,
      date: 'Oct 26, 2025',
      sheetLabel: `Sheet 0${nextId}`,
      chapterTitle: `Chapter 4.${nextId}: Empirical Risk Minimization & Bounds`,
      chapterSubtitle: 'Generalization gap and uniform convergence in statistical learning theory.',
      introText: 'Given Rademacher complexity Rₙ(F) of hypothesis class F, the generalization discrepancy is bounded with high probability (1-δ) over independent sample drawings:',
      formula: {
        math: 'E[L(h)] ≤ 1/n ∑ L(h(x_i), y_i) + 2 R_n(F) + 3 √(log(2/δ) / 2n)',
        caption: `Eq 4.${nextId} · Uniform Generalization Bound`
      },
      bulletPoints: [
        {
          title: 'Vapnik-Chervonenkis Dimension:',
          description: 'Measures shattering capacity for binary threshold decision boundaries in Euclidean space.',
          tilt: -0.2
        },
        {
          title: 'Covering Numbers:',
          description: 'Finite metric ball approximations bound metric entropy on compact hypothesis sets.',
          tilt: 0.3
        }
      ],
      diagram: {
        title: `Figure 4.${nextId}: Rademacher Sample Discrepancy Vector`,
        type: 'regularization-contour',
        simulatedPressure: '0.64 bar',
        svgNodes: 290
      },
      instructorNote: `Self-Check: Verify page ${nextId} against the assignment specification sheet before submission.`
    };

    setPages([...pages, newPage]);
    setCurrentPageIndex(pages.length);
    showToast(`Added new sheet: Sheet 0${nextId}`);
  };

  const handleApplyPasteText = (content: {
    title: string;
    subtitle: string;
    intro: string;
    formula: string;
    note: string;
  }) => {
    const updated = [...pages];
    updated[currentPageIndex] = {
      ...updated[currentPageIndex],
      chapterTitle: content.title,
      chapterSubtitle: content.subtitle,
      introText: content.intro,
      formula: {
        math: content.formula,
        caption: `Eq ${currentPageIndex + 1}.1 · Custom Input Formula`
      },
      instructorNote: content.note
    };
    setPages(updated);
    showToast('Updated handwritten sheet with custom raw text and equations!');
  };

  const handleInsertResearchedContent = (content: {
    title: string;
    subtitle: string;
    intro: string;
    formula: string;
    bullets: { title: string; description: string }[];
  }) => {
    const updated = [...pages];
    updated[currentPageIndex] = {
      ...updated[currentPageIndex],
      chapterTitle: content.title,
      chapterSubtitle: content.subtitle,
      introText: content.intro,
      formula: {
        math: content.formula,
        caption: 'Researched Citation Formula'
      },
      bulletPoints: content.bullets.map((b, i) => ({
        title: b.title,
        description: b.description,
        tilt: i % 2 === 0 ? -0.2 : 0.3
      }))
    };
    setPages(updated);
    showToast('Researched notes successfully synthesized into handwriting canvas!');
  };

  const handleFileUpload = (fileName: string) => {
    setDocumentTitle(fileName);
    showToast(`Ingested ${fileName}. Extracted 1,420 words and generated 4 pages.`);
  };

  const handleCustomCloneSuccess = (customName: string) => {
    const customPersona: HandwritingPersona = {
      id: 'custom-cloned',
      name: customName,
      initials: customName.slice(0, 2).toUpperCase(),
      description: 'Custom Neural Persona · 100% Client Trained',
      fontClass: 'font-persona-custom',
      badge: 'Active Clone'
    };
    setSelectedPersona(customPersona);
    showToast(`Activated custom handwriting persona: ${customName}`);
  };

  const handleExport = (format: 'pdf' | 'png' | 'pptx' | 'print') => {
    if (format === 'print') {
      window.print();
      return;
    }

    const formatLabels = {
      pdf: 'Multi-Page PDF with Searchable OCR Layer',
      png: '300 DPI Archival PNGs (ZIP Package)',
      pptx: 'PowerPoint Presentation Slide Deck'
    };

    showToast(`Packaging ${formatLabels[format]} for ${documentTitle}...`);

    // Create a real download blob simulation for immediate client-side delivery
    setTimeout(() => {
      const element = document.createElement('a');
      const fileContent = `Scriptify AI - Synthesized Handwritten Notes\nDocument: ${documentTitle}\nPersona: ${selectedPersona.name}\nTotal Pages: ${pages.length}\nDate: ${new Date().toLocaleDateString()}\n\nWatermark: ${headerStamp.watermarkText}`;
      const file = new Blob([fileContent], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `${documentTitle.replace(/\.[^/.]+$/, '')}_synthesized.${format === 'pptx' ? 'pptx' : format === 'png' ? 'zip' : 'pdf'}`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showToast(`Downloaded ${documentTitle} (${format.toUpperCase()})`);
    }, 700);
  };

  return (
    <div className="bg-[#fcf9f2] min-h-screen text-[#1c1c18] font-sans-ui flex flex-col antialiased">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-16 right-6 z-50 bg-[#131b2e] text-white px-4 py-2.5 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2.5 text-xs animate-in slide-in-from-bottom-5 duration-200">
          <span className="material-symbols-outlined text-[18px] text-[#0c9488]">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation Header */}
      <StudioHeader
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenQrSync={() => setIsQrSyncModalOpen(true)}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
        onOpenDeepResearch={() => setIsDeepResearchModalOpen(true)}
        onExport={handleExport}
        adminPassDaysLeft={adminPassDaysLeft}
      />

      {/* Left Persistent Navigation Sidebar */}
      <StudioSidebar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenDeepResearch={() => setIsDeepResearchModalOpen(true)}
        onOpenQrSync={() => setIsQrSyncModalOpen(true)}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
        onOpenArchives={(title) => setArchiveModalInfo({ open: true, title })}
        adminPassDaysLeft={adminPassDaysLeft}
      />

      {/* Main Content Viewport */}
      <div className="md:pl-64 flex flex-col flex-1">
        <main className="relative pt-16 bg-[#fcf9f2] min-h-screen flex flex-col">
          {/* Top Sticky Studio Action Bar */}
          <StudioActionBar
            documentTitle={documentTitle}
            onRenameTitle={(newTitle) => {
              setDocumentTitle(newTitle);
              showToast(`Renamed to "${newTitle}"`);
            }}
            pageCount={pages.length}
            viewMode={viewMode}
            onChangeViewMode={setViewMode}
            sourceMode={sourceMode}
            onChangeSourceMode={(mode) => {
              setSourceMode(mode);
              showToast(`Switched source ingest mode to ${mode.toUpperCase()}`);
            }}
            onRerunSynthesis={() => setIsSynthesisModalOpen(true)}
            onBatchProcess={() => setIsBatchModalOpen(true)}
            onDownloadAll={() => handleExport(exportFormat)}
            personaName={selectedPersona.name}
          />

          {/* Dual-Pane Studio Workspace */}
          <div className="flex flex-col xl:flex-row w-full flex-1 min-h-[calc(100vh-8.5rem)]">
            {/* Left Configuration Inspector Sidebar (~380px) */}
            <StudioInspector
              selectedPersona={selectedPersona}
              onSelectPersona={(persona) => {
                setSelectedPersona(persona);
                showToast(`Applied handwriting persona: ${persona.name}`);
              }}
              imperfections={imperfections}
              onChangeImperfections={setImperfections}
              paperTexture={paperTexture}
              onChangePaperTexture={(texture) => {
                setPaperTexture(texture);
                showToast(`Stationery switched to ${texture.replace('-', ' ').toUpperCase()}`);
              }}
              inkColor={inkColor}
              onChangeInkColor={(color) => {
                setInkColor(color);
                showToast(`Selected ink: ${color.name}`);
              }}
              headerStamp={headerStamp}
              onChangeHeaderStamp={setHeaderStamp}
              exportFormat={exportFormat}
              onChangeExportFormat={setExportFormat}
              onOpenPasteModal={() => setIsPasteModalOpen(true)}
              onFileUpload={handleFileUpload}
              onOpenCloneModal={() => setIsCloneModalOpen(true)}
            />

            {/* Central Parchment Canvas & Live Sheet Preview */}
            <section
              className={`flex-1 bg-[#f0eee7] flex flex-col justify-between p-4 lg:p-8 overflow-x-hidden relative transition-all ${
                isFullscreen ? 'fixed inset-0 z-50 p-6' : ''
              }`}
            >
              {/* Floating Canvas Controls Toolbar */}
              <CanvasControls
                zoomLevel={zoomLevel}
                onZoomIn={() => setZoomLevel((z) => Math.min(150, z + 10))}
                onZoomOut={() => setZoomLevel((z) => Math.max(60, z - 10))}
                currentPageIndex={currentPageIndex}
                totalPages={pages.length}
                onNextPage={handleNextPage}
                onPrevPage={handlePrevPage}
                onSelectPage={setCurrentPageIndex}
                isSplitView={isSplitView}
                onToggleSplitView={() => setIsSplitView(!isSplitView)}
                onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
                pages={pages}
                onAddNewPage={handleAddNewPage}
                onPrint={() => window.print()}
              />

              {/* Live Sheet Viewport */}
              <div className="flex-1 flex items-center justify-center py-4 overflow-auto">
                <div
                  className="transition-transform duration-200 flex items-center justify-center w-full"
                  style={{
                    transform: `scale(${zoomLevel / 100})`,
                    transformOrigin: 'top center'
                  }}
                >
                  {isSplitView ? (
                    /* Split Comparison: Left Typed / Right Handwritten */
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-[1200px]">
                      {/* Left: Computerized Mode */}
                      <div className="flex flex-col items-center">
                        <div className="text-xs font-mono-code text-[#45464d] mb-2 font-bold uppercase tracking-wider flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">keyboard</span>
                          <span>Digital Typed Source (LaTeX / Markdown)</span>
                        </div>
                        <TactileParchmentSheet
                          page={currentPage}
                          persona={selectedPersona}
                          imperfections={imperfections}
                          paperTexture={paperTexture}
                          inkColor={inkColor}
                          headerStamp={headerStamp}
                          viewMode="computerized"
                        />
                      </div>

                      {/* Right: Authentic Handwritten Mode */}
                      <div className="flex flex-col items-center">
                        <div className="text-xs font-mono-code text-[#4e45d5] mb-2 font-bold uppercase tracking-wider flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">draw</span>
                          <span>Synthesized Vector Handwriting ({selectedPersona.name})</span>
                        </div>
                        <TactileParchmentSheet
                          page={currentPage}
                          persona={selectedPersona}
                          imperfections={imperfections}
                          paperTexture={paperTexture}
                          inkColor={inkColor}
                          headerStamp={headerStamp}
                          viewMode="handwritten"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Single Canvas Display */
                    <TactileParchmentSheet
                      page={currentPage}
                      persona={selectedPersona}
                      imperfections={imperfections}
                      paperTexture={paperTexture}
                      inkColor={inkColor}
                      headerStamp={headerStamp}
                      viewMode={viewMode}
                    />
                  )}
                </div>
              </div>
            </section>
          </div>

          {/* Bottom Quick Tooling & Shortcuts Footer */}
          <StudioFooter
            onOpenQrSync={() => setIsQrSyncModalOpen(true)}
            onDispatchWhatsApp={() => {
              showToast('Assignment dispatched directly to paired WhatsApp chat!');
            }}
            onExportPptx={() => handleExport('pptx')}
            onRunFactCheck={() => setIsDeepResearchModalOpen(true)}
          />
        </main>
      </div>

      {/* Modals & Dialogs */}
      <PasteRawTextModal
        isOpen={isPasteModalOpen}
        onClose={() => setIsPasteModalOpen(false)}
        onApplyText={handleApplyPasteText}
        initialValues={{
          title: currentPage.chapterTitle,
          subtitle: currentPage.chapterSubtitle,
          intro: currentPage.introText,
          formula: currentPage.formula.math,
          note: currentPage.instructorNote
        }}
      />

      <DeviceQrSyncModal
        isOpen={isQrSyncModalOpen}
        onClose={() => setIsQrSyncModalOpen(false)}
        onSimulateSync={(fn) => {
          showToast(`Synced incoming mobile snapshot: ${fn}`);
        }}
      />

      <AdminCommandModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        adminPassDaysLeft={adminPassDaysLeft}
        onExtendPass={() => {
          setAdminPassDaysLeft((prev) => prev + 7);
          showToast('Pass extended by +7 days! (₹5 applied)');
        }}
        watermarkText={headerStamp.watermarkText}
        onUpdateWatermark={(text) =>
          setHeaderStamp({
            ...headerStamp,
            watermarkText: text
          })
        }
      />

      <AiSynthesisModal
        isOpen={isSynthesisModalOpen}
        onClose={() => setIsSynthesisModalOpen(false)}
        onComplete={() => {
          showToast('AI Synthesis re-run complete! All vector curves updated.');
        }}
        personaName={selectedPersona.name}
      />

      <CloneHandModal
        isOpen={isCloneModalOpen}
        onClose={() => setIsCloneModalOpen(false)}
        onCloneSuccess={handleCustomCloneSuccess}
      />

      <DeepResearchModal
        isOpen={isDeepResearchModalOpen}
        onClose={() => setIsDeepResearchModalOpen(false)}
        onInsertResearchedContent={handleInsertResearchedContent}
      />

      <BatchProcessModal
        isOpen={isBatchModalOpen}
        onClose={() => setIsBatchModalOpen(false)}
        onProcessBatch={(files) => {
          showToast(`Successfully processed batch of ${files.length} documents!`);
        }}
      />

      <ArchivesModal
        isOpen={archiveModalInfo.open}
        onClose={() => setArchiveModalInfo({ open: false, title: '' })}
        title={archiveModalInfo.title}
      />
    </div>
  );
}

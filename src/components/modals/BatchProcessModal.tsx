import React, { useState } from 'react';

interface BatchProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProcessBatch: (fileNames: string[]) => void;
}

export const BatchProcessModal: React.FC<BatchProcessModalProps> = ({
  isOpen,
  onClose,
  onProcessBatch
}) => {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([
    'CS401_Chapter4_Assignment.pdf',
    'EE302_Circuit_Diagrams.docx',
    'MATH220_Linear_Algebra_Notes.md'
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleStartBatch = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onProcessBatch(selectedFiles);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between border-b pb-3 border-slate-100">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4e45d5] text-[22px]">layers</span>
            <div>
              <h3 className="font-bold text-base text-slate-900">Batch Document Processing</h3>
              <p className="text-[11px] text-slate-500">Multi-File Vector Synthesis Pipeline</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-slate-700">Queued Documents ({selectedFiles.length})</span>
          <div className="space-y-1.5 max-h-48 overflow-y-auto no-scrollbar">
            {selectedFiles.map((f, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-600 text-[18px]">description</span>
                  <span className="text-slate-800 truncate max-w-[240px]">{f}</span>
                </div>
                <span className="text-emerald-600 font-semibold text-[10px]">Ready</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs">
          <strong>Pro Pipeline:</strong> Batch converts entire folders into unified multi-page handwriting notebooks with automated pagination.
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleStartBatch}
            disabled={isProcessing}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#131b2e] hover:bg-black text-white shadow-sm transition-colors disabled:opacity-50"
          >
            {isProcessing ? 'Processing Batch...' : 'Convert All Files'}
          </button>
        </div>
      </div>
    </div>
  );
};

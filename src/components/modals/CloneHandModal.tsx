import React, { useState } from 'react';

interface CloneHandModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCloneSuccess: (customName: string) => void;
}

export const CloneHandModal: React.FC<CloneHandModalProps> = ({
  isOpen,
  onClose,
  onCloneSuccess
}) => {
  const [cloneName, setCloneName] = useState('My Notebook Script');
  const [sampleText, setSampleText] = useState('The quick brown fox jumps over the lazy dog. θ = 0.45');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleClone = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onCloneSuccess(cloneName);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between border-b pb-3 border-slate-100">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4e45d5] text-[22px]">fingerprint</span>
            <div>
              <h3 className="font-bold text-base text-slate-900">Clone Your Handwriting</h3>
              <p className="text-[11px] text-slate-500">Free Client-Side Neural Model</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <form onSubmit={handleClone} className="flex flex-col gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Handwriting Persona Label</label>
            <input
              type="text"
              value={cloneName}
              onChange={(e) => setCloneName(e.target.value)}
              className="w-full text-xs font-medium px-3 py-2 rounded-lg border border-slate-200 focus:border-[#4e45d5] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Sample Inscription / Verification Sentence
            </label>
            <textarea
              rows={2}
              value={sampleText}
              onChange={(e) => setSampleText(e.target.value)}
              className="w-full text-xs font-medium px-3 py-2 rounded-lg border border-slate-200 focus:border-[#4e45d5] outline-none resize-none"
            />
          </div>

          {/* Upload sample box */}
          <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:bg-slate-50 transition-colors cursor-pointer flex flex-col items-center gap-1.5">
            <span className="material-symbols-outlined text-[26px] text-slate-400">upload_file</span>
            <span className="text-xs font-semibold text-slate-700">Drop a photo or scan of your handwriting</span>
            <span className="text-[11px] text-slate-400">Supports JPG, PNG, PDF (1 page)</span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isProcessing}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#4e45d5] hover:bg-[#372abf] text-white shadow-sm transition-colors disabled:opacity-50"
            >
              {isProcessing ? 'Training Persona Model...' : 'Generate Neural Persona'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

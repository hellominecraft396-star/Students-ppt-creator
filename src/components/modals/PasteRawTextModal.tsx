import React, { useState } from 'react';

interface PasteRawTextModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyText: (text: {
    title: string;
    subtitle: string;
    intro: string;
    formula: string;
    note: string;
  }) => void;
  initialValues: {
    title: string;
    subtitle: string;
    intro: string;
    formula: string;
    note: string;
  };
}

export const PasteRawTextModal: React.FC<PasteRawTextModalProps> = ({
  isOpen,
  onClose,
  onApplyText,
  initialValues
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [subtitle, setSubtitle] = useState(initialValues.subtitle);
  const [intro, setIntro] = useState(initialValues.intro);
  const [formula, setFormula] = useState(initialValues.formula);
  const [note, setNote] = useState(initialValues.note);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApplyText({ title, subtitle, intro, formula, note });
    onClose();
  };

  const handleInsertSample = () => {
    setTitle('Chapter 5: Convolutional Kernels & Feature Extraction');
    setSubtitle('Spatial equivariance and receptive field dilation in multi-channel vision.');
    setIntro('Discrete 2D cross-correlation projects local spatial neighborhoods through learned kernel weights W with additive channel bias:');
    setFormula('S(i, j) = (I * K)(i, j) = ∑_{m} ∑_{n} I(i-m, j-n) K(m, n)');
    setNote('Lab Note: Verify that padding with stride=2 maintains downsampling invariants without checkerboard artifacts.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between border-b pb-3 border-slate-100">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4e45d5] text-[22px]">edit_note</span>
            <h3 className="font-bold text-base text-slate-900">Paste Raw Text & Formulas</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <p className="text-xs text-slate-500">
          Edit or paste Markdown, LaTeX equations, and lecture notes. Your changes will immediately render as authentic vector handwriting.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Chapter Heading</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-xs font-medium px-3 py-2 rounded-lg border border-slate-200 focus:border-[#4e45d5] outline-none"
              placeholder="e.g. Chapter 4: Gradient Descent"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Subtitle / Sub-theme</label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full text-xs font-medium px-3 py-2 rounded-lg border border-slate-200 focus:border-[#4e45d5] outline-none"
              placeholder="e.g. Non-convex parameter optimization"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Body Text Content</label>
            <textarea
              rows={3}
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
              className="w-full text-xs font-medium px-3 py-2 rounded-lg border border-slate-200 focus:border-[#4e45d5] outline-none resize-none"
              placeholder="Enter your explanatory handwritten notes..."
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Mathematical Formula (LaTeX / Math)</label>
            <input
              type="text"
              value={formula}
              onChange={(e) => setFormula(e.target.value)}
              className="w-full text-xs font-mono px-3 py-2 rounded-lg border border-slate-200 focus:border-[#4e45d5] outline-none bg-slate-50"
              placeholder="e.g. θ_{t+1} = θ_{t} - η · ∇J(θ)"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Margin Callout / Instructor Note</label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full text-xs italic px-3 py-2 rounded-lg border border-slate-200 focus:border-[#4e45d5] outline-none bg-blue-50/50"
              placeholder="e.g. Instructor Note: Ensure proof is included..."
            />
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={handleInsertSample}
              className="text-xs text-[#4e45d5] hover:underline font-semibold"
            >
              Insert Sample (Chapter 5)
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#131b2e] hover:bg-black text-white shadow-sm transition-colors"
              >
                Synthesize Handwritten Sheet
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

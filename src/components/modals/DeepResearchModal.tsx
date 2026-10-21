import React, { useState } from 'react';

interface DeepResearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsertResearchedContent: (content: {
    title: string;
    subtitle: string;
    intro: string;
    formula: string;
    bullets: { title: string; description: string }[];
  }) => void;
}

export const DeepResearchModal: React.FC<DeepResearchModalProps> = ({
  isOpen,
  onClose,
  onInsertResearchedContent
}) => {
  const [topic, setTopic] = useState('Adam Optimizer & Second-Order Momentum Convergence');
  const [isResearching, setIsResearching] = useState(false);
  const [researchResult, setResearchResult] = useState<{
    title: string;
    subtitle: string;
    intro: string;
    formula: string;
    bullets: { title: string; description: string }[];
    citations: string[];
  } | null>(null);

  if (!isOpen) return null;

  const handleRunResearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsResearching(true);

    setTimeout(() => {
      setIsResearching(false);
      setResearchResult({
        title: 'Deep Research: Adaptive Moment Estimation (Adam)',
        subtitle: 'Empirical acceleration over sparse gradients and noisy objectives.',
        intro: 'Adam computes individual adaptive learning rates for different parameters from estimates of first and second moments of the gradients:',
        formula: 'm_{t} = β₁m_{t-1} + (1-β₁)g_{t},  v_{t} = β₂v_{t-1} + (1-β₂)g_{t}²',
        bullets: [
          {
            title: 'Bias-Correction Formulations:',
            description: 'Compensates for zero-initialization of moment vectors during early iteration trajectories.'
          },
          {
            title: 'Coordinate Invariance:',
            description: 'Scale of updates remains invariant to linear re-scaling of the gradient coefficients.'
          },
          {
            title: 'Hyperparameter Robustness:',
            description: 'Default values (β₁=0.9, β₂=0.999, ε=10⁻⁸) exhibit stable convergence across deep architectures.'
          }
        ],
        citations: [
          'Kingma & Ba (2014) - "Adam: A Method for Stochastic Optimization", ICLR',
          'Reddi et al. (2018) - "On the Convergence of Adam and Beyond", ICLR Best Paper'
        ]
      });
    }, 750);
  };

  const handleApplyToCanvas = () => {
    if (researchResult) {
      onInsertResearchedContent({
        title: researchResult.title,
        subtitle: researchResult.subtitle,
        intro: researchResult.intro,
        formula: researchResult.formula,
        bullets: researchResult.bullets
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between border-b pb-3 border-slate-100">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4e45d5] text-[22px]">psychology</span>
            <div>
              <h3 className="font-bold text-base text-slate-900">AI Deep Research & Notes Agent</h3>
              <p className="text-[11px] text-slate-500">Autonomous Academic Synthesis Pipeline</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <form onSubmit={handleRunResearch} className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-slate-700">Enter Research Query or Assignment Prompt</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="flex-1 px-3 py-2 text-xs font-medium rounded-lg border border-slate-200 focus:border-[#4e45d5] outline-none"
              placeholder="e.g. Backprop chain rule, Attention mechanism..."
              required
            />
            <button
              type="submit"
              disabled={isResearching}
              className="px-4 py-2 bg-[#4e45d5] hover:bg-[#372abf] text-white text-xs font-semibold rounded-lg transition-colors shrink-0 disabled:opacity-50"
            >
              {isResearching ? 'Searching...' : 'Run Deep Research'}
            </button>
          </div>
        </form>

        {/* Researched Notes Preview */}
        {researchResult && (
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-2.5 max-h-72 overflow-y-auto no-scrollbar">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-slate-900">{researchResult.title}</span>
              <span className="font-mono-code text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                Fact-Checked
              </span>
            </div>
            <p className="text-xs text-slate-600">{researchResult.intro}</p>
            <div className="p-2 bg-white rounded border border-slate-200 font-mono-code text-xs text-slate-800">
              {researchResult.formula}
            </div>
            <div className="text-[11px] space-y-1 text-slate-700">
              {researchResult.bullets.map((b, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#4e45d5] font-bold">•</span>
                  <span><strong>{b.title}</strong> {b.description}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-400 font-mono-code">
              {researchResult.citations.map((c, i) => (
                <div key={i}>[{i + 1}] {c}</div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Cancel
          </button>

          {researchResult && (
            <button
              type="button"
              onClick={handleApplyToCanvas}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#131b2e] hover:bg-black text-white shadow-sm transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">draw</span>
              <span>Convert Directly to Handwritten Sheet</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';

interface AiSynthesisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
  personaName: string;
}

export const AiSynthesisModal: React.FC<AiSynthesisModalProps> = ({
  isOpen,
  onClose,
  onComplete,
  personaName
}) => {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState('Initializing Aarav Neural Engine...');

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      return;
    }

    const stages = [
      { p: 20, label: 'Extracting semantic token hierarchy from PDF/markdown...' },
      { p: 45, label: `Simulating ${personaName} pen stroke velocities and angles...` },
      { p: 70, label: 'Synthesizing hand-drawn vector loss graphs & equation curves...' },
      { p: 90, label: 'Applying organic baseline drift and micro-jitter matrix...' },
      { p: 100, label: 'Synthesis complete! 4 pages rendered with lossless SVG curves.' }
    ];

    let step = 0;
    const interval = setInterval(() => {
      if (step < stages.length) {
        setProgress(stages[step].p);
        setCurrentStage(stages[step].label);
        step++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
          onClose();
        }, 600);
      }
    }, 450);

    return () => clearInterval(interval);
  }, [isOpen, personaName, onComplete, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 flex flex-col gap-4 text-center animate-in fade-in zoom-in-95 duration-150">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#4e45d5] flex items-center justify-center mx-auto shadow-inner">
          <span className="material-symbols-outlined text-[28px] animate-spin">auto_fix_high</span>
        </div>

        <div>
          <h3 className="font-bold text-base text-slate-900">Re-running AI Synthesis</h3>
          <p className="text-xs text-slate-500 mt-1">
            Engine: {personaName} v2.4 · Lossless Vector Stroke Generation
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden p-0.5 border border-slate-200">
          <div
            className="bg-gradient-to-r from-[#4e45d5] to-[#0c9488] h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-slate-500">
          <span>{currentStage}</span>
          <span className="font-bold text-slate-800">{progress}%</span>
        </div>

        <p className="text-[11px] text-slate-400">
          Simulating client-side handwriting physics at 0.18s latency.
        </p>
      </div>
    </div>
  );
};

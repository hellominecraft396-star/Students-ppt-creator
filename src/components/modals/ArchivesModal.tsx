import React from 'react';

interface ArchivesModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const ArchivesModal: React.FC<ArchivesModalProps> = ({
  isOpen,
  onClose,
  title
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between border-b pb-3 border-slate-100">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4e45d5] text-[22px]">history_edu</span>
            <div>
              <h3 className="font-bold text-base text-slate-900">{title}</h3>
              <p className="text-[11px] text-slate-500 font-mono-code">Scriptify AI Studio Storage</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-2.5 max-h-64 overflow-y-auto no-scrollbar">
          {[
            {
              name: 'Machine_Learning_Assignment_Ch4.pdf',
              date: 'Today, 06:42 AM',
              pages: 4,
              engine: 'Aarav Patel (Cursive)',
              size: '2.8 MB'
            },
            {
              name: 'Quantum_Computing_Lecture3_HW.pdf',
              date: 'Yesterday, 04:15 PM',
              pages: 6,
              engine: 'Elena Vance (Academic Print)',
              size: '4.1 MB'
            },
            {
              name: 'Thermodynamics_ProblemSet_2.pdf',
              date: 'Oct 18, 2025',
              pages: 3,
              engine: 'Marcus Chen (Architect)',
              size: '1.9 MB'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1d4ed8] flex items-center justify-center font-bold">
                  PDF
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-900">{item.name}</span>
                  <span className="text-[11px] text-slate-500 font-mono-code">
                    {item.pages} Pages · {item.engine} · {item.size}
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-mono-code text-slate-400">{item.date}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <span className="text-xs text-slate-500 font-mono-code">3 Archived Notebooks</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

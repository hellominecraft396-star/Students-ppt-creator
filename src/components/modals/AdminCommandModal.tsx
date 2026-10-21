import React, { useState } from 'react';

interface AdminCommandModalProps {
  isOpen: boolean;
  onClose: () => void;
  adminPassDaysLeft: number;
  onExtendPass: () => void;
  watermarkText: string;
  onUpdateWatermark: (text: string) => void;
}

export const AdminCommandModal: React.FC<AdminCommandModalProps> = ({
  isOpen,
  onClose,
  adminPassDaysLeft,
  onExtendPass,
  watermarkText,
  onUpdateWatermark
}) => {
  const [adminKey, setAdminKey] = useState('PRO-PASS-8921-VERIFIED');
  const [isVerifying, setIsVerifying] = useState(false);
  const [keyStatus, setKeyStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleVerifyKey = () => {
    setIsVerifying(true);
    setKeyStatus(null);
    setTimeout(() => {
      setIsVerifying(false);
      setKeyStatus('Key Verified! Studio Cloud Pro Tier Active with unlimited SVG synthesis.');
      onExtendPass();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between border-b pb-3 border-slate-100">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4e45d5] text-[22px]">admin_panel_settings</span>
            <div>
              <h3 className="font-bold text-base text-slate-900">Admin Command Center</h3>
              <p className="text-[11px] text-slate-500 font-mono-code">Scriptify AI Pro Studio v2.4</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Studio Pass Card */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#131b2e] to-[#1e293b] text-white flex flex-col gap-3 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-400 text-[20px]">workspace_premium</span>
              <span className="font-bold text-sm">₹5/Week Pass Active</span>
            </div>
            <span className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
              {adminPassDaysLeft} Days Remaining
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Full enterprise physics simulation unlocked: authentic paper fibers, Bézier ink curve jitter, multi-persona voice cloning, and clean PDF OCR compilation.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-1 font-mono-code text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="material-symbols-outlined text-[15px] text-emerald-400">check</span>
              <span>Unlimited Pages</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="material-symbols-outlined text-[15px] text-emerald-400">check</span>
              <span>Watermark Customizer</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="material-symbols-outlined text-[15px] text-emerald-400">check</span>
              <span>300 DPI Export</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="material-symbols-outlined text-[15px] text-emerald-400">check</span>
              <span>LaTeX Equation Engine</span>
            </div>
          </div>
        </div>

        {/* License Key Validator */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-slate-700">Admin Command / License Key</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              className="flex-1 px-3 py-2 text-xs font-mono rounded-lg border border-slate-200 focus:border-[#4e45d5] outline-none"
              placeholder="Enter License Key or Command..."
            />
            <button
              onClick={handleVerifyKey}
              disabled={isVerifying}
              className="px-4 py-2 bg-[#131b2e] hover:bg-black text-white text-xs font-semibold rounded-lg transition-colors shrink-0 disabled:opacity-50"
            >
              {isVerifying ? 'Verifying...' : 'Validate Key'}
            </button>
          </div>
          {keyStatus && (
            <p className="text-[11px] font-mono-code text-emerald-600 font-semibold">{keyStatus}</p>
          )}
        </div>

        {/* Watermark Shield Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700">Assignment Security Signature Watermark</label>
          <input
            type="text"
            value={watermarkText}
            onChange={(e) => onUpdateWatermark(e.target.value)}
            className="px-3 py-2 text-xs font-mono rounded-lg border border-slate-200 focus:border-[#4e45d5] outline-none bg-slate-50"
            placeholder="© 2025 Scriptify AI - Roll #ENG-4029"
          />
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <button
            onClick={onExtendPass}
            className="flex items-center gap-1 text-xs text-[#4e45d5] hover:underline font-semibold"
          >
            <span className="material-symbols-outlined text-[16px]">add_circle</span>
            <span>Add +7 Days to Pass (₹5)</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

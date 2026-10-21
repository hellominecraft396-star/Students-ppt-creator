import React, { useState } from 'react';

interface DeviceQrSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSimulateSync: (filename: string) => void;
}

export const DeviceQrSyncModal: React.FC<DeviceQrSyncModalProps> = ({
  isOpen,
  onClose,
  onSimulateSync
}) => {
  const [syncedCount, setSyncedCount] = useState(2);

  if (!isOpen) return null;

  const handleSimulateSync = () => {
    setSyncedCount((prev) => prev + 1);
    onSimulateSync(`mobile_snap_${Date.now().toString().slice(-4)}.jpg`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between border-b pb-3 border-slate-100">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4e45d5] text-[22px]">qr_code_scanner</span>
            <h3 className="font-bold text-base text-slate-900">Device QR Sync</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex flex-col items-center text-center gap-3 py-2">
          {/* Realistic SVG QR Code */}
          <div className="p-4 bg-white rounded-2xl border-2 border-dashed border-[#4e45d5] shadow-sm relative group">
            <svg className="w-44 h-44 text-slate-900" viewBox="0 0 100 100" fill="currentColor">
              {/* Corner position locators */}
              <rect x="5" y="5" width="28" height="28" fill="black" />
              <rect x="9" y="9" width="20" height="20" fill="white" />
              <rect x="13" y="13" width="12" height="12" fill="black" />

              <rect x="67" y="5" width="28" height="28" fill="black" />
              <rect x="71" y="9" width="20" height="20" fill="white" />
              <rect x="75" y="13" width="12" height="12" fill="black" />

              <rect x="5" y="67" width="28" height="28" fill="black" />
              <rect x="9" y="71" width="20" height="20" fill="white" />
              <rect x="13" y="75" width="12" height="12" fill="black" />

              {/* Data matrix dots */}
              <rect x="38" y="10" width="6" height="6" />
              <rect x="48" y="16" width="6" height="6" />
              <rect x="56" y="8" width="6" height="6" />
              <rect x="42" y="24" width="6" height="6" />
              <rect x="10" y="40" width="6" height="6" />
              <rect x="22" y="46" width="6" height="6" />
              <rect x="38" y="40" width="8" height="8" />
              <rect x="52" y="40" width="6" height="6" />
              <rect x="68" y="44" width="6" height="6" />
              <rect x="80" y="38" width="6" height="6" />
              <rect x="40" y="56" width="6" height="6" />
              <rect x="56" y="56" width="8" height="8" />
              <rect x="72" y="58" width="6" height="6" />
              <rect x="84" y="52" width="6" height="6" />
              <rect x="40" y="72" width="6" height="6" />
              <rect x="50" y="76" width="6" height="6" />
              <rect x="62" y="70" width="6" height="6" />
              <rect x="76" y="74" width="6" height="6" />
              <rect x="86" y="82" width="6" height="6" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
              <span className="font-mono-code text-xs text-[#4e45d5] font-bold">Pairing Session Active</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0c9488] animate-ping"></span>
            <span className="font-mono-code text-xs text-[#0c9488] font-semibold">
              Live Channel Paired: WhatsApp Bot & Google Drive Sync
            </span>
          </div>

          <p className="text-xs text-slate-600 max-w-xs">
            Scan with your iPhone or Android to snap handwritten notes, blackboard equations, or textbook excerpts directly into the synthesis canvas.
          </p>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-600">Sync Status:</span>
            <span className="font-mono-code text-[#4e45d5] font-semibold">{syncedCount} Files Synced Today</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-600">Direct WhatsApp Dispatch:</span>
            <span className="font-mono-code text-slate-900 font-semibold">+91 (Scriptify Sync Bot)</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <button
            onClick={handleSimulateSync}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#4e45d5] text-white hover:bg-[#372abf] transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">sync</span>
            <span>Simulate Incoming Photo</span>
          </button>

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

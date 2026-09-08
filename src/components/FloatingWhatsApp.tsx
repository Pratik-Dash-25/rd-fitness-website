import { useState, useEffect } from 'react';
import { createWhatsAppUrl } from '../utils/gymHelpers';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Auto-dismiss tooltip after 8 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="pointer-events-auto relative p-3 rounded-2xl bg-neutral-900 border border-neutral-700 text-xs text-white shadow-2xl max-w-[220px] animate-in fade-in slide-in-from-bottom-2">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-neutral-400 hover:text-white"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="font-bold text-rose-400 uppercase text-[10px] tracking-wider mb-0.5">
            Quick Inquiry
          </div>
          <p className="text-neutral-300 text-[11px] leading-snug">
            Chat with Coach Debabrata on WhatsApp for gym slots & joining!
          </p>
        </div>
      )}

      {/* Main WhatsApp action button */}
      <a
        id="floating-whatsapp-btn"
        href={createWhatsAppUrl('Hi RD Fitness! I want to inquire about gym membership and timings.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-950/60 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
}

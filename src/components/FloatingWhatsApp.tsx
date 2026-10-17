import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = siteData.getWhatsAppUrl(
    'Olá! Vim pelo site e gostaria de um orçamento de colchões na Mimoso Colchões.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Speech Bubble */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/90 text-xs font-bold text-slate-800 transition-all duration-200 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
        aria-hidden="true"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Tire suas dúvidas no WhatsApp!</span>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
        aria-label="Falar com Mimoso Colchões no WhatsApp"
      >
        {/* Animated Ripple Pulse Ring */}
        <span className="absolute -inset-1 rounded-2xl bg-emerald-500/30 animate-ping pointer-events-none opacity-75" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 relative z-10 transition-transform group-hover:scale-110" />

        {/* Active Online Indicator Dot */}
        <span className="absolute top-1.5 right-1.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white z-20" />
      </a>
    </div>
  );
}

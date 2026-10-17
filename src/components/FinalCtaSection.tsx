import { MessageCircle, ShieldCheck, Truck, Clock } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FinalCtaSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 text-white">
      {/* Decorative ambient lights */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>Atendimento Direto & Sem Burocracia</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
          Procurando o colchão ideal para o seu quarto?
        </h2>

        <p className="mt-5 text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
          Fale com nossa equipe pelo WhatsApp, tire suas dúvidas de medidas e solicite um orçamento exclusivo na Mimoso Colchões com entrega rápida em Cuiabá.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteData.getWhatsAppUrl("Olá! Gostaria de falar com a equipe da Mimoso Colchões para solicitar um orçamento agora.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-5 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-extrabold text-base sm:text-lg shadow-2xl shadow-amber-600/30 active:scale-[0.98] transition-all duration-150 animate-pulse hover:animate-none"
          >
            <MessageCircle className="w-6 h-6 text-slate-950 fill-slate-950/20" />
            <span>Falar no WhatsApp Agora</span>
          </a>

          <a
            href={`tel:${siteData.company.phoneDigits}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base backdrop-blur-md transition-all active:scale-[0.98]"
          >
            <span>Ligar para {siteData.company.phoneDisplay}</span>
          </a>
        </div>

        {/* Benefits strip */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center justify-center gap-2">
            <Truck className="w-4 h-4 text-emerald-400" />
            <span>Entrega e montagem em Cuiabá e região</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Garantia oficial de fábrica em todos os itens</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Resposta rápida no horário comercial</span>
          </div>
        </div>
      </div>
    </section>
  );
}

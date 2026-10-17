import { useEffect, useState } from 'react';
import { MessageCircle, ChevronDown, CheckCircle2, ShieldCheck, MapPin, Sparkles, Bed } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [heroImageSrc, setHeroImageSrc] = useState(
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=2000&q=85'
  );

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageError = () => {
    // If primary bedroom photo fails, fallback immediately to secondary verified bedroom photo
    if (heroImageSrc !== 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=85') {
      setHeroImageSrc('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=85');
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-slate-950"
    >
      {/* Parallax Background Real Image with Fallback */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${scrollY * 0.28}px, 0) scale(1.04)`,
        }}
        aria-hidden="true"
      >
        <img
          src={heroImageSrc}
          alt="Quarto aconchegante com colchão de alto padrão e cama box da Mimoso Colchões"
          onError={handleImageError}
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
        />
      </div>

      {/* Balanced Directional Gradient: Dark on text side (left), luminous on bed side (right) */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 via-45% to-slate-950/30 lg:to-slate-950/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40"
        aria-hidden="true"
      />

      {/* Warm Ambience Ambient Glow */}
      <div
        className="absolute top-1/4 left-1/6 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-8 text-center sm:text-left flex flex-col justify-center">
            {/* Superior Kicker / Location Badge */}
            <div className="inline-flex items-center gap-2 self-center sm:self-start px-3.5 py-1.5 rounded-full bg-slate-900/85 border border-slate-700/80 backdrop-blur-md shadow-sm mb-6">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Loja de Colchões no CPA II em Cuiabá - MT
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Impact H1 Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Colchões de Alta Qualidade,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Conforto Superior
              </span>{' '}
              e Camas Box
            </h1>

            {/* Objective Subtitle */}
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl mb-10 font-normal">
              Opções completas em <strong className="text-white font-semibold">Solteiro, Casal, Queen e King Size</strong> com molas ensacadas individuais e espumas ortopédicas de alta densidade (D33 e D45). Atendimento consultivo especializado no CPA II para garantir a sustentação correta da sua coluna.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 self-stretch sm:self-start">
              <a
                href={siteData.getWhatsAppUrl("Olá! Gostaria de um orçamento para colchões e camas box na Mimoso Colchões.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-base shadow-xl shadow-amber-600/25 hover:shadow-amber-500/35 active:scale-[0.98] transition-all duration-150"
              >
                <MessageCircle className="w-5 h-5 text-slate-950 fill-slate-950/20" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>

              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base backdrop-blur-md transition-all duration-150 active:scale-[0.98]"
              >
                <span>Ver Modelos de Colchões</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-300 text-xs sm:text-sm">
              <div className="flex items-center justify-center sm:justify-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Nota 5.0 no Google (Avaliações Reais)</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Garantia Oficial de Fábrica</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Entrega e Montagem em Cuiabá</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Visual Card with Mattress Quality Preview */}
          <div className="hidden lg:flex lg:col-span-4 justify-end">
            <div className="w-full max-w-sm rounded-3xl bg-slate-900/85 backdrop-blur-xl border border-slate-700/80 p-6 shadow-2xl text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <Bed className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Linha Hotel Comfort</h3>
                    <p className="text-[11px] text-slate-400">Molas Pocket + Pillow Top</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Pronta Entrega
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800 pt-4 mb-5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Molejo:</span>
                  <span className="font-semibold text-white">Molas Ensacadas Individuais</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Sustentação:</span>
                  <span className="font-semibold text-white">Até 140 kg por pessoa</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Tamanhos:</span>
                  <span className="font-semibold text-white">Casal · Queen · King</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Local:</span>
                  <span className="font-semibold text-amber-400">Av. Brasil, 13A - CPA II</span>
                </div>
              </div>

              <a
                href={siteData.getWhatsAppUrl("Olá! Gostaria de consultar a Linha Hotel Comfort com molas ensacadas na Mimoso Colchões.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Consultar Este Modelo</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-400 text-xs pointer-events-none">
        <span className="tracking-widest uppercase text-[10px] font-medium text-slate-400">Rolar</span>
        <div className="animate-bounce p-1 rounded-full bg-white/10 backdrop-blur-sm">
          <ChevronDown className="w-4 h-4 text-amber-400" />
        </div>
      </div>
    </section>
  );
}

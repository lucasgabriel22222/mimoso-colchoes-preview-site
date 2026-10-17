import { Bed, MapPin, Phone, Clock, Instagram, ShieldCheck, Heart } from 'lucide-react';
import { siteData } from '../data/siteData';

interface FooterProps {
  onOpenSizeGuide?: () => void;
}

export default function Footer({ onOpenSizeGuide }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                <Bed className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white tracking-tight">
                  MIMOSO <span className="text-amber-500 font-bold">COLCHÕES</span>
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                  CPA II · Cuiabá - MT
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Especialistas em colchões de molas ensacadas, espumas certificadas de alta densidade e camas box baú. Conforto e qualidade de sono no CPA II em Cuiabá.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteData.company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500/50 transition-colors"
                aria-label="Instagram da Mimoso Colchões"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteData.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors px-3 py-2 rounded-xl bg-slate-900 border border-slate-800"
              >
                <span>WhatsApp: {siteData.company.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-amber-400 transition-colors">
                  Linha de Colchões & Camas
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-400 transition-colors">
                  Simulador de Biotipo
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-amber-400 transition-colors">
                  Nossos Diferenciais
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-amber-400 transition-colors">
                  Depoimentos de Clientes
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">
                  Localização no CPA II
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
              {onOpenSizeGuide && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenSizeGuide}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Tabela de Medidas de Colchões
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Contact & Store Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Atendimento & Loja Física
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  {siteData.company.address.full}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${siteData.company.phoneDigits}`} className="hover:text-white transition-colors">
                  {siteData.company.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div>{siteData.company.hours.days}: 09:00 às 18:00</div>
                  <div className="text-xs text-slate-500">Domingos: Fechado</div>
                </div>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300">Nota 5.0 no Google com avaliações verificadas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            &copy; {currentYear} {siteData.company.name}. Todos os direitos reservados. CPA II · Cuiabá - MT.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Colchões · Camas Box · Molas Ensacadas · Espumas D33 & D45</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

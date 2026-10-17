import { useState } from 'react';
import { Bed, MessageCircle, Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

interface NavbarProps {
  onOpenSizeGuide?: () => void;
}

export default function Navbar({ onOpenSizeGuide }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center text-amber-500 shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform duration-200">
              <Bed className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none group-hover:text-amber-700 transition-colors">
                MIMOSO <span className="text-amber-600 font-bold">COLCHÕES</span>
              </span>
              <span className="text-[11px] font-medium text-slate-500 uppercase tracking-widest mt-1">
                CPA II · Cuiabá - MT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
            {onOpenSizeGuide && (
              <button
                type="button"
                onClick={onOpenSizeGuide}
                className="text-sm font-medium text-amber-700 hover:text-amber-800 transition-colors cursor-pointer"
              >
                Tabela de Medidas
              </button>
            )}
          </nav>

          {/* WhatsApp CTA & Contact Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${siteData.company.phoneDigits}`}
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              title="Ligue para nossa loja"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>{siteData.company.phoneDisplay}</span>
            </a>

            <a
              href={siteData.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold shadow-md shadow-slate-900/15 hover:shadow-lg hover:shadow-slate-900/20 active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
              <span>Pedir Orçamento</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={siteData.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-emerald-600 text-white active:scale-95 transition-all shadow-sm"
              aria-label="Abrir WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Alternar menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white/95 backdrop-blur-lg px-4 pt-4 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            {onOpenSizeGuide && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSizeGuide();
                }}
                className="text-left px-3 py-2.5 rounded-lg text-base font-semibold text-amber-700 hover:bg-amber-50 transition-colors"
              >
                Guia de Medidas de Colchões
              </button>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 px-3">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Av. Brasil, 13A - CPA II · Cuiabá</span>
            </div>
            <a
              href={siteData.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

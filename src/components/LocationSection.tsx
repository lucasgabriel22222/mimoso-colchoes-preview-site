import { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';
import { getStoreStatus, StoreStatus } from '../utils/businessHours';

export default function LocationSection() {
  const [storeStatus, setStoreStatus] = useState<StoreStatus>(getStoreStatus());

  useEffect(() => {
    // Refresh status every 60 seconds
    const interval = setInterval(() => {
      setStoreStatus(getStoreStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="localizacao" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Loja Física</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nossa Loja em Cuiabá
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Venha nos visitar no CPA II para experimentar pessoalmente o conforto dos nossos colchões e camas box.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Store Details & Actions (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              {/* Live Open/Closed Status Badge */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3.5 h-3.5 rounded-full ${
                      storeStatus.isOpen
                        ? 'bg-emerald-500 shadow-sm shadow-emerald-500/50 animate-pulse'
                        : 'bg-amber-500'
                    }`}
                  />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">
                      {storeStatus.message}
                    </div>
                    <div className="text-xs text-slate-500">
                      {storeStatus.nextChangeText}
                    </div>
                  </div>
                </div>
                <Clock className="w-5 h-5 text-slate-400" />
              </div>

              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-slate-500">
                    Endereço
                  </h3>
                  <p className="font-semibold text-slate-900 text-base mt-1">
                    {siteData.company.address.street} - {siteData.company.address.neighborhood}
                  </p>
                  <p className="text-sm text-slate-600">
                    Cuiabá - MT, CEP {siteData.company.cep}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Fácil acesso no CPA II com vaga para clientes
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-slate-500">
                    Telefone & WhatsApp
                  </h3>
                  <a
                    href={`tel:${siteData.company.phoneDigits}`}
                    className="font-semibold text-slate-900 text-base mt-1 hover:text-amber-700 transition-colors block"
                  >
                    {siteData.company.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Atendimento imediato para orçamentos e dúvidas
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-slate-500">
                    Horário de Funcionamento
                  </h3>
                  <p className="font-semibold text-slate-900 text-sm mt-1">
                    {siteData.company.hours.days}: {siteData.company.hours.weekdays}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {siteData.company.hours.sunday}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <a
                href={siteData.company.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Como Chegar via Google Maps</span>
              </a>

              <a
                href={siteData.getWhatsAppUrl("Olá! Gostaria de saber a rota e localização da Mimoso Colchões no CPA II.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp da Loja</span>
              </a>
            </div>
          </div>

          {/* Column 2: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 bg-slate-200 rounded-3xl overflow-hidden border border-slate-200/90 shadow-md min-h-[380px] relative">
            <iframe
              title="Localização da Mimoso Colchões no CPA II em Cuiabá"
              src={siteData.company.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px] lg:min-h-[460px]"
            />
            {/* Map corner tag */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Av. Brasil, 13A - CPA II · Cuiabá</span>
              <a
                href={siteData.company.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:underline inline-flex items-center gap-1"
                title="Abrir no app de mapas"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

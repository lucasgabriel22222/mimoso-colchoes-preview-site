import { Bed, ShieldCheck, Truck, MapPin, CreditCard, Clock, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function DifferentialsSection() {
  const iconMap: Record<string, any> = {
    Bed: Bed,
    ShieldCheck: ShieldCheck,
    Truck: Truck,
    MapPin: MapPin,
    CreditCard: CreditCard,
    Clock: Clock,
  };

  return (
    <section id="diferenciais" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Por que escolher a Mimoso Colchões</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Excelência no CPA II: Conforto, Suporte e Agilidade
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Diferenciais objetivos voltados à qualidade estrutural dos colchões e ao respeito ao seu investimento e tempo.
          </p>
        </div>

        {/* 6 Differential Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.differentials.map((item) => {
            const Icon = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-amber-400/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 text-amber-500 flex items-center justify-center mb-6 shadow-md shadow-slate-900/10">
                    <Icon className="w-7 h-7 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-amber-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span>Padrão Mimoso Colchões</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

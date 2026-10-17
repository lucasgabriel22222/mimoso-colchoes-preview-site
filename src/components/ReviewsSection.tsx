import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ReviewsSection() {
  return (
    <section id="avaliacoes" className="py-24 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Score Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Avaliações Verificadas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Opiniões reais registradas publicamente no perfil do Google por clientes que compraram na nossa loja no CPA II.
            </p>
          </div>

          {/* Google 5.0 Rating Highlight Box */}
          <div className="shrink-0 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="text-3xl font-extrabold text-slate-900 leading-none">
              5.0
            </div>
            <div>
              <div className="flex items-center text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Nota Máxima no Google ({siteData.company.googleReviewCount} avaliações)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-300" />
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-sm">
                  {rev.name}
                </div>
                <div className="flex items-center gap-1 mt-1 text-[11px] font-medium text-emerald-700">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Avaliação Verificada no Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

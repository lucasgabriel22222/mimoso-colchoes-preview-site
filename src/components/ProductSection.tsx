import { useState } from 'react';
import { MessageCircle, Check, Sparkles, Scale, Maximize2, X, ShieldCheck } from 'lucide-react';
import { siteData, Product } from '../data/siteData';

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    activeCategory === 'todos'
      ? siteData.products
      : siteData.products.filter((p) => p.category === activeCategory);

  return (
    <section id="produtos" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Catálogo Especializado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nossa Linha de Colchões e Camas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Estruturas desenvolvidas para máxima sustentação da coluna, conforto térmico e durabilidade para dormitórios de solteiro, casal, queen e king size.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-200/70 rounded-2xl max-w-2xl mx-auto">
            {siteData.categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md shadow-slate-900/15'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Product Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => {
                    const fallback = product.fallbackImageUrl || 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80';
                    if (e.currentTarget.src !== fallback) {
                      e.currentTarget.src = fallback;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md text-amber-300 text-xs font-bold shadow-md border border-slate-800">
                    {product.badge}
                  </div>
                )}

                {/* Quick Inspect Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm transition-transform active:scale-95 cursor-pointer"
                  title="Ver especificações detalhadas"
                  aria-label="Ver especificações detalhadas"
                >
                  <Maximize2 className="w-4 h-4 text-slate-700" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Weight Indicator */}
                  <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-2">
                    <span className="uppercase tracking-wider font-semibold text-amber-700">
                      {product.category === 'molas' && 'Molas Ensacadas'}
                      {product.category === 'espuma' && 'Espuma Certificada'}
                      {product.category === 'camas' && 'Cama Box / Base'}
                      {product.category === 'acessorios' && 'Acessório de Dormir'}
                    </span>
                    <span className="flex items-center gap-1 text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                      <Scale className="w-3 h-3 text-slate-500" />
                      {product.supportWeight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-amber-800 transition-colors">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Available Sizes List */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {product.sizes.map((size, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
                  <a
                    href={siteData.getWhatsAppUrl(product.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Consultar Preço</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Footnote */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-slate-900 text-sm">
              Não tem certeza de qual modelo atende seu peso e estatura?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Nossa equipe no CPA II faz a orientação técnica e tira todas as dúvidas via WhatsApp.
            </p>
          </div>
          <a
            href={siteData.getWhatsAppUrl("Olá! Gostaria de ajuda para escolher o colchão ideal para mim na Mimoso Colchões.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com Especialista</span>
          </a>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-48 sm:h-56 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden bg-slate-100">
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                onError={(e) => {
                  const fallback = selectedProduct.fallbackImageUrl || 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80';
                  if (e.currentTarget.src !== fallback) {
                    e.currentTarget.src = fallback;
                  }
                }}
                className="w-full h-full object-cover"
              />
              {selectedProduct.badge && (
                <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md text-amber-300 text-xs font-bold shadow-md">
                  {selectedProduct.badge}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                {selectedProduct.badge || 'Linha Mimoso'}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Suporte: {selectedProduct.supportWeight}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              {selectedProduct.name}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              {selectedProduct.description}
            </p>

            <div className="space-y-4 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Nível de Conforto
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  {selectedProduct.comfortLevel}
                </span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Diferenciais Técnicos
                </span>
                <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-700">
                  {selectedProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Tamanhos Disponíveis
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.sizes.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={siteData.getWhatsAppUrl(selectedProduct.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors cursor-pointer"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

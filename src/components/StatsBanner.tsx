import { useEffect, useState } from 'react';
import { Star, ShieldCheck, Bed, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function StatsBanner() {
  const [scrollY, setScrollY] = useState(0);

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

  const statIcons = [
    <Star className="w-6 h-6 text-amber-500 fill-amber-500" key="star" />,
    <ShieldCheck className="w-6 h-6 text-slate-800" key="shield" />,
    <Bed className="w-6 h-6 text-slate-800" key="bed" />,
    <MessageCircle className="w-6 h-6 text-emerald-600" key="whatsapp" />,
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-slate-900 border-y border-slate-800">
      {/* Background Texture / Subtle Parallax Image */}
      <div
        className="absolute inset-0 w-full h-[140%] -top-[20%] opacity-20 will-change-transform pointer-events-none overflow-hidden"
        style={{
          transform: `translate3d(0, ${scrollY * 0.08}px, 0)`,
        }}
        aria-hidden="true"
      >
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80"
          alt=""
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1800&q=80';
          }}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Decorative Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-950/95"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.statistics.map((item, index) => (
            <div
              key={item.label}
              className="backdrop-blur-md bg-white/95 rounded-2xl p-6 border border-slate-200/80 shadow-lg shadow-black/10 hover:shadow-xl hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-extrabold tracking-tight text-slate-900">
                  {item.value}
                </span>
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center">
                  {statIcons[index]}
                </div>
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
                  {item.label}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {index === 0 && (
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-700">7 avaliações reais</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

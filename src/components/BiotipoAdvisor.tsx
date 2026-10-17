import { useState } from 'react';
import { Bed, User, Users, CheckCircle2, MessageCircle, RotateCcw, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function BiotipoAdvisor() {
  const [useType, setUseType] = useState<'individual' | 'casal'>('casal');
  const [weightRange, setWeightRange] = useState<string>('90-110');
  const [firmness, setFirmness] = useState<'firme' | 'medio' | 'macio'>('medio');

  // Recommendation engine
  const getRecommendation = () => {
    if (useType === 'casal') {
      if (firmness === 'firme' && (weightRange === '110-150' || weightRange === '90-110')) {
        return {
          title: 'Colchão Molas Ensacadas Titanium Luxury ou Espuma D45',
          description: 'Para casais onde a sustentação firme é prioritária, as molas individuais de alta bitola evitam a transmissão de movimento e garantem alinhamento lombar.',
          recommendedSize: 'Queen Size (1,58 x 1,98m) ou King Size (1,93 x 2,03m)',
          highlight: 'Excelente isolamento de movimento entre o casal.',
        };
      }
      return {
        title: 'Colchão Molas Ensacadas Individual com Pillow Top',
        description: 'A melhor tecnologia para casais: quando uma pessoa se mexe, a outra não sente. A camada Pillow Top oferece o conforto de hotel 5 estrelas sem afundar.',
        recommendedSize: 'Casal (1,38 x 1,88m) ou Queen Size (1,58 x 1,98m)',
        highlight: 'Conforto equilibrado com suporte anatômico individualizado.',
      };
    } else {
      // Individual
      if (weightRange === '110-150' || firmness === 'firme') {
        return {
          title: 'Colchão Espuma Alta Densidade D45 Ortopédico',
          description: 'Recomendado para suporte firme de alta resistência, correção postural e proteção para quem tem histórico de dores na coluna ou sobrepeso.',
          recommendedSize: 'Solteiro Padrão (0,88 x 1,88m) ou Solteiro Americano (0,96 x 2,03m)',
          highlight: 'Espuma selada de alta durabilidade e firmeza ortopédica.',
        };
      } else if (weightRange === '70-90' || firmness === 'medio') {
        return {
          title: 'Colchão Espuma D33 ou Molas Ensacadas Solteiro',
          description: 'A densidade D33 proporciona o aconchego ideal com estabilidade até 100 kg, ou molas ensacadas para quem busca toque mais resiliente.',
          recommendedSize: 'Solteiro (0,88 x 1,88m) ou Viúva (1,28 x 1,88m)',
          highlight: 'Excelente custo-benefício e durabilidade prolongada.',
        };
      } else {
        return {
          title: 'Colchão Molas Ensacadas Macio Confort com Pillow Top',
          description: 'Acolhimento perfeito para pesos leves com alívio imediato nas articulações dos ombros e quadris.',
          recommendedSize: 'Solteiro (0,88 x 1,88m) ou Casal (1,38 x 1,88m)',
          highlight: 'Sensação de aconchego e toque aveludado.',
        };
      }
    }
  };

  const rec = getRecommendation();

  const advisorWhatsappMessage = `Olá! Fiz o simulador de biotipo no site da Mimoso Colchões (${useType === 'casal' ? 'Casal' : 'Solteiro'}, peso ${weightRange}kg, preferência ${firmness}) e a recomendação foi "${rec.title}". Gostaria de saber os valores e modelos disponíveis!`;

  return (
    <section id="simulador" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle geometric background light */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultoria Rápida Online</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Descubra o Colchão Ideal para Seu Biotipo
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Selecione seus parâmetros abaixo para receber a recomendação técnica exata de densidade ou molejo para suas noites de sono.
          </p>
        </div>

        {/* Advisor Controls Container */}
        <div className="bg-slate-800/90 backdrop-blur-md rounded-3xl border border-slate-700 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Step 1: Quem vai usar? */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                1. Quem vai dormir no colchão?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setUseType('individual')}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    useType === 'individual'
                      ? 'bg-amber-600 border-amber-500 text-white shadow-md'
                      : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  <User className="w-5 h-5 mb-1 text-slate-200" />
                  <span>Individual</span>
                </button>
                <button
                  type="button"
                  onClick={() => setUseType('casal')}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    useType === 'casal'
                      ? 'bg-amber-600 border-amber-500 text-white shadow-md'
                      : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  <Users className="w-5 h-5 mb-1 text-slate-200" />
                  <span>Casal (2 Pessoas)</span>
                </button>
              </div>
            </div>

            {/* Step 2: Faixa de Peso */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                2. Faixa de Peso (por pessoa)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'ate-70', label: 'Até 70 kg' },
                  { id: '70-90', label: '70 a 90 kg' },
                  { id: '90-110', label: '90 a 110 kg' },
                  { id: '110-150', label: '110 a 150 kg' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setWeightRange(item.id)}
                    className={`p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer text-center ${
                      weightRange === item.id
                        ? 'bg-amber-600 border-amber-500 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-700/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Nível de Firmeza */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                3. Firmeza Preferida
              </label>
              <div className="flex flex-col gap-2">
                {[
                  { id: 'firme', label: 'Firme / Ortopédico' },
                  { id: 'medio', label: 'Intermediário Confortável' },
                  { id: 'macio', label: 'Macio e Aconchegante' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFirmness(item.id as any)}
                    className={`p-2.5 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer text-left flex items-center justify-between ${
                      firmness === item.id
                        ? 'bg-amber-600 border-amber-500 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-700/50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {firmness === item.id && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Box */}
          <div className="p-6 rounded-2xl bg-slate-950/90 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left w-full md:w-2/3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Bed className="w-4 h-4" />
                <span>Modelo Recomendado para Você</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {rec.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {rec.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
                <span className="text-amber-300 font-medium">Tamanho sugerido: {rec.recommendedSize}</span>
                <span>·</span>
                <span className="text-emerald-400 font-medium">{rec.highlight}</span>
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0 flex flex-col sm:flex-row md:flex-col gap-2.5">
              <a
                href={siteData.getWhatsAppUrl(advisorWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-600/20 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-slate-950 fill-slate-950/20" />
                <span>Consultar Este Modelo no WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setUseType('casal');
                  setWeightRange('90-110');
                  setFirmness('medio');
                }}
                className="inline-flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 py-1 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Redefinir escolhas</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

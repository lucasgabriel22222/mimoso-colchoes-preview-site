import { X, Ruler, Check } from 'lucide-react';
import { siteData } from '../data/siteData';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
            <Ruler className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Guia de Medidas Padrão
          </span>
        </div>

        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
          Tabela de Medidas de Colchões e Camas
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mb-6">
          Consulte as dimensões oficiais do mercado brasileiro antes de solicitar o seu orçamento ou escolher sua cama box na Mimoso Colchões.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-6">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Modelo</th>
                <th className="py-3 px-4">Largura x Comprimento</th>
                <th className="py-3 px-4">Indicação de Uso</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {siteData.sizesGuide.map((item, idx) => (
                <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-600" />
                    {item.name}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-amber-800">
                    {item.dimensions}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-600">
                    {item.target}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1 mb-6">
          <div className="flex items-center gap-2 font-semibold text-slate-800">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Dica para medir seu quarto:</span>
          </div>
          <p>
            Recomendamos deixar no mínimo 60 a 70 cm de espaço livre ao redor das laterais e pés da cama para circulação e abertura de gavetas ou armários.
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <a
            href={siteData.getWhatsAppUrl("Olá! Gostaria de consultar se o tamanho Queen ou King cabe no meu quarto e os preços na Mimoso Colchões.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all shadow-sm"
          >
            Tirar Dúvidas com Vendedor
          </a>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

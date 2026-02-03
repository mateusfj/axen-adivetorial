import React from "react";
import { Star, Brain } from "lucide-react";

const VerdictSection: React.FC = () => {
  return (
    <div className="my-24 py-20 px-10 bg-[#fdfbf7] rounded-xl border-2 border-[#DFB277]/10 text-center font-sans">
      <h3 className="text-4xl font-black mb-8 italic text-[#1a2e2a]">
        O Veredicto
      </h3>
      <p className="text-2xl font-black text-[#a8824f] mb-12 italic leading-tight">
        "Eu Entrei Cética. Saí Engolindo Minhas Palavras — E Querendo
        a Próxima Dose."
      </p>

      <div className="max-w-2xl mx-auto text-gray-700 text-left mb-16 space-y-6 text-sm leading-relaxed italic">
        <p>
          Eu chequei os dados clínicos. Eu chequei as proporções de
          extração. Eu chequei os testes de qualidade. E então eu
          chequei meu próprio cérebro.
        </p>
        <p>A mudança foi real.</p>
      </div>

      <div className="bg-white p-12 rounded-xl inline-block border border-gray-200 shadow-xl shadow-black/5">
        <div className="flex justify-center text-[#DFB277] mb-4 gap-1">
          <Star className="w-8 h-8 fill-current" />
          <Star className="w-8 h-8 fill-current" />
          <Star className="w-8 h-8 fill-current" />
          <Star className="w-8 h-8 fill-current" />
          <Star className="w-8 h-8 fill-current opacity-60" />
        </div>
        <p className="text-5xl font-black mb-2 text-[#1a2e2a]">
          4.6 / 5
        </p>
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">
          Avaliação Oficial Sarah Mitchell
        </p>
      </div>

      <p className="mt-16 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed italic">
        "A fórmula merece 5. A única razão de não ser perfeita?
        Problemas de disponibilidade."
      </p>

      <div className="mt-12 bg-[#1a2e2a] text-white p-10 rounded-xl text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Brain className="w-24 h-24" />
        </div>
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#DFB277] mb-6">
          Resumo da Especialista
        </p>
        <p className="text-base font-medium italic opacity-90 leading-relaxed mb-4">
          "Se você quer pensamento mais claro, foco mais estável e um
          ritual diário que parece mais um cuidado do que uma
          obrigação, dê ao Axen NeuroFuel® 8 semanas."
        </p>
        <p className="text-sm font-bold border-t border-white/10 pt-6 mt-6 opacity-60">
          Este poderoso suplemento diário entrega pensamento mais
          limpo e energia mais suave — sem pílulas gigantes ou gosto
          ruim.
        </p>
      </div>
    </div>
  );
};

export default VerdictSection;

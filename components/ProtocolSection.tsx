import React from "react";
import { Brain, Shield, Zap } from "lucide-react";

const ProtocolSection: React.FC = () => {
  return (
    <section>
      <h3 className="text-3xl font-black italic text-[#1a2e2a] pt-12">
        O Protocolo NeuroRestore™
      </h3>
      <p className="mb-10 text-gray-600 leading-relaxed">
        O que torna o Axen NeuroFuel® diferente é que ele não é apenas
        “mais um suplemento de memória”. É um system de três frentes
        desenvolvido para atacar a causa raiz da fadiga neural:
      </p>

      <div className="space-y-6 my-12 text-gray-700">
        {/* FRENTE 1 */}
        <div className="bg-[#fdfbf7] p-8 rounded-xl border border-[#DFB277]/20 flex flex-col md:flex-row gap-6">
          <div className="w-16 h-16 bg-[#DFB277]/10 rounded-xl flex items-center justify-center shrink-0">
            <Brain className="w-8 h-8 text-[#DFB277]" />
          </div>
          <div className="space-y-4">
            <h4 className="font-black text-[#1a2e2a] uppercase tracking-tight text-xl">
              🧠 FRENTE 1: NeuroRestore™ Signal
            </h4>
            <p className="text-sm font-bold text-[#DFB277] uppercase tracking-widest">
              Reativa os sinais de crescimento neural
            </p>
            <ul className="text-xs font-bold text-gray-500 space-y-1">
              <li>• Lion’s Mane (extrato padronizado)</li>
              <li>• Vitamina B9 (forma ativa - metilfolato)</li>
              <li>• Vitamina B12 (forma ativa - metilcobalamina)</li>
            </ul>
            <p className="italic text-gray-600 border-l-2 border-[#DFB277] pl-4 text-sm font-medium">
              “Diz ao cérebro: é seguro sair do modo economia. Você pode
              voltar a crescer.”
            </p>
          </div>
        </div>

        {/* FRENTE 2 */}
        <div className="bg-[#f0f4f3] p-8 rounded-xl border border-[#2d5a4c]/10 flex flex-col md:flex-row gap-6">
          <div className="w-16 h-16 bg-[#2d5a4c]/10 rounded-xl flex items-center justify-center shrink-0">
            <Shield className="w-8 h-8 text-[#2d5a4c]" />
          </div>
          <div className="space-y-4">
            <h4 className="font-black text-[#1a2e2a] uppercase tracking-tight text-xl">
              🛡️ FRENTE 2: NeuroRestore™ Shield
            </h4>
            <p className="text-sm font-bold text-[#2d5a4c] uppercase tracking-widest">
              Protege contra a corrosão do estresse
            </p>
            <ul className="text-xs font-bold text-gray-500 space-y-1">
              <li>• Rhodiola Rosea (extrato adaptógeno)</li>
              <li>• L-Theanine (aminoácido calmante)</li>
            </ul>
            <p className="italic text-gray-600 border-l-2 border-[#2d5a4c] pl-4 text-sm font-medium">
              Bloqueia o impacto do cortisol e mantém o cérebro em
              estado seguro para reconstrução.
            </p>
          </div>
        </div>

        {/* FRENTE 3 */}
        <div className="bg-slate-50 p-8 rounded-xl border border-gray-200 flex flex-col md:flex-row gap-6">
          <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
            <Zap className="w-8 h-8 text-emerald-500" />
          </div>
          <div className="space-y-4">
            <h4 className="font-black text-[#1a2e2a] uppercase tracking-tight text-xl">
              ⚡ FRENTE 3: NeuroRestore™ Sustain
            </h4>
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest">
              Sustenta clareza e foco no curto prazo
            </p>
            <ul className="text-xs font-bold text-gray-500 space-y-1">
              <li>• Alpha-GPC (precursor de acetilcolina)</li>
              <li>
                • Cafeína natural de chá verde (microdose funcional)
              </li>
            </ul>
            <p className="italic text-gray-600 border-l-2 border-emerald-500 pl-4 text-sm font-medium">
              Você sente a diferença no dia a dia enquanto o reparo
              estrutural acontece ao fundo.
            </p>
          </div>
        </div>
      </div>

      {/* FINAL SUMMARY RECAP */}
      <div className="bg-[#1a2e2a] text-white p-10 rounded-xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm italic font-medium opacity-90 leading-relaxed">
          <p>Signal™ reativa os fatores de crescimento neural.</p>
          <p>Shield™ protege contra a corrosão do estresse moderno.</p>
          <p>
            Sustain™ mantém clareza mental enquanto a reconstrução
            acontece.
          </p>
        </div>
        <div className="pt-6 border-t border-white/10">
          <p className="font-black text-[#DFB277] text-lg uppercase tracking-tight mb-2">
            Tudo em uma única fórmula.
          </p>
          <p className="text-xs font-bold opacity-60 uppercase tracking-widest">
            Sem estimulantes agressivos. Sem efeitos colaterais. Por uma
            fração do preço de tratamentos clínicos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProtocolSection;

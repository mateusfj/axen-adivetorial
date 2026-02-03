import React from "react";
import { CheckCircle } from "lucide-react";

const HowToUse: React.FC = () => {
  return (
    <section>
      <h3 className="text-3xl font-black italic text-[#1a2e2a] pt-12">
        Como Eu Uso?
      </h3>
      <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">
        A rotina simples, aprovada por nutricionista
      </p>
      <div className="grid md:grid-cols-1 gap-8 my-12 text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 bg-white p-8 rounded-xl border border-gray-100">
            <div className="w-12 h-12 bg-[#2d5a4c] text-white rounded-xl flex items-center justify-center font-black">
              1
            </div>
            <h4 className="font-black text-lg">
              Tome uma scoop pela manhã
            </h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              De preferência com o café da manhã. Simples assim.
            </p>
          </div>
          <div className="space-y-4 bg-white p-8 rounded-xl border border-gray-100">
            <div className="w-12 h-12 bg-[#2d5a4c] text-white rounded-xl flex items-center justify-center font-black">
              2
            </div>
            <h4 className="font-black text-lg">
              Mantenha o pote em algum lugar visível
            </h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Ao lado da sua garrafa de água ou do laptop — em qualquer
              lugar que sua rotina te leve.
            </p>
          </div>
          <div className="space-y-4 bg-white p-8 rounded-xl border border-gray-100">
            <div className="w-12 h-12 bg-[#2d5a4c] text-white rounded-xl flex items-center justify-center font-black">
              3
            </div>
            <h4 className="font-black text-lg">
              Seja consistente (chato, mas funciona)
            </h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Os estudos duraram 8 semanas. A maioria nota mudanças por
              volta da Semana 2–4.
            </p>
          </div>
          <div className="space-y-6 bg-[#f0f4f3] p-8 rounded-xl border border-[#2d5a4c]/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#2d5a4c] text-white rounded-xl flex items-center justify-center font-black">
                4
              </div>
              <h4 className="font-black text-lg">
                Observe os primeiros ganhos
              </h4>
            </div>
            <ul className="grid grid-cols-1 gap-2">
              {[
                "Menos travadas cerebrais",
                "Foco mais suave",
                "Energia mais estável",
                "Transições mais fáceis entre tarefas",
                "Menos daquela névoa pesada e “algodoada”",
              ].map((gain, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-xs font-bold text-gray-700"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />{" "}
                  {gain}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;

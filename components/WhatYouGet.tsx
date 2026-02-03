import React from "react";
import { CheckCircle } from "lucide-react";

const WhatYouGet: React.FC = () => {
  return (
    <div className="my-24 bg-white p-12 rounded-xl border border-gray-200 text-gray-700 font-sans">
      <h3 className="text-2xl font-black mb-2 italic uppercase tracking-tighter">
        O Que Você Está Realmente Recebendo
      </h3>
      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
        Tudo incluído em cada pote:
      </p>
      <div className="grid md:grid-cols-1 gap-6">
        {[
          "Suprimento completo de 30 dias — 30 doses, 1 por dia é tudo que você precisa",
          "6 Ingredientes Clínicos — Lion’s Mane, Alpha-GPC, Rhodiola Rosea, L-Theanine, Vitamina B9, Vitamina B12",
          "Dose Clínica Por Porção — Uma quantidade clinicamente significativa de compostos funcionais",
          "Ingredientes Limpos — Vegano, sem glúten, sem OGM. Fabricado em instalação certificada",
          "Saboroso & Fácil — Prazer ao tomar. Facilidade. Pode ser usado com sua bebida favorita.",
        ].map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-slate-50 p-6 rounded-xl border border-slate-200 font-bold"
          >
            <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />{" "}
            {it}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouGet;

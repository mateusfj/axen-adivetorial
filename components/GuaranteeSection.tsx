import React from "react";

const GuaranteeSection: React.FC = () => {
  return (
    <div className="my-24 space-y-10 text-gray-700">
      <h3 className="text-3xl font-black italic text-[#1a2e2a]">
        E Se Eu Não Sentir Nada?
      </h3>
      <p className="leading-relaxed">
        Axen oferece uma garantia de 30 dias de devolução do dinheiro
        no seu primeiro pedido.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          "Se você não notar diferença…",
          "Se o suplemento não parecer certo para você…",
          "Ou mesmo se você simplesmente não gostar…",
        ].map((cond, i) => (
          <div
            key={i}
            className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-xs font-bold text-center italic"
          >
            {cond}
          </div>
        ))}
      </div>
      <p className="leading-relaxed">
        Você pode enviar um email para{" "}
        <strong>suporte@axen.com</strong> dentro de 30 dias e
        solicitar reembolso.
      </p>
      <div className="bg-[#f0f4f3] p-10 rounded-xl border border-[#2d5a4c]/10 text-center">
        <p className="text-xl font-black text-[#2d5a4c] italic mb-6">
          Sem obstáculos. Sem formulários complicados. Sem perguntas.
        </p>
        <p className="text-sm font-medium opacity-60">
          Como alguém que testou centenas de suplementos, posso te
          dizer isso: uma empresa que oferece uma garantia real de 30
          dias é uma empresa que confia na sua fórmula.
        </p>
      </div>
    </div>
  );
};

export default GuaranteeSection;

import React from "react";

const RepairSection: React.FC = () => {
  return (
    <section>
      <h3
        className="text-3xl font-black italic text-[#1a2e2a] pt-12"
        id="how-it-works"
      >
        Ok… Como Eu Elimino Essa “Fadiga Neural”?
      </h3>

      <div className="my-8 rounded-xl overflow-hidden border border-gray-100">
        <img
          src="https://assets.replocdn.com/projects/1e5bc658-d2dd-4185-9134-f9e01d19734f/1e6f6e9e-aeb4-4952-a1a2-83d36811f8e5?width=1024"
          alt="NeuroRestore System Diagram"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="space-y-6 text-gray-700">
        <p>
          Sair do “esgotamento” para o foco não é complicado. Você
          simplesmente precisa dar ao seu cérebro o suporte diário que
          ele precisa para otimizar:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 font-bold text-xs uppercase tracking-widest text-[#2d5a4c]">
          <li className="bg-[#f0f4f3] p-4 rounded-xl text-center border border-[#2d5a4c]/10">
            Química do Estresse
          </li>
          <li className="bg-[#f0f4f3] p-4 rounded-xl text-center border border-[#2d5a4c]/10">
            Sinais de Crescimento Neural
          </li>
          <li className="bg-[#f0f4f3] p-4 rounded-xl text-center border border-[#2d5a4c]/10">
            Conexão Intestino-Cérebro
          </li>
        </ul>
        <p>
          Axen NeuroFuel® é a primeira fórmula que testei que suporta
          todas as três áreas.
        </p>
      </div>
    </section>
  );
};

export default RepairSection;

import React from "react";
import { Target, Heart, Brain, Home } from "lucide-react";

const SymptomsGrid: React.FC = () => {
  return (
    <section>
      <h3 className="text-3xl font-black italic text-[#1a2e2a] pt-12">
        Como a “Névoa Mental” Aparece Na Sua Vida?
      </h3>
      <p className="text-gray-700">
        Se você reconhece esses deslizes diários, você não está sozinho:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-12 text-gray-700">
        <div className="bg-white border border-gray-100 p-8 rounded-xl hover:bg-slate-50 transition-colors">
          <Target className="text-[#2d5a4c] w-10 h-10 mb-4" />
          <h4 className="font-black text-lg mb-3 uppercase tracking-wide">
            O Foco Escapa
          </h4>
          <p className="text-sm leading-relaxed">
            Você não se concentra em tarefas simples, não se lembra o
            que deve ser feito… as palavras se embaralham, nada fixa, e
            seu cérebro divaga no matter how hard you try.
          </p>
        </div>
        <div className="bg-white border border-gray-100 p-8 rounded-xl hover:bg-slate-50 transition-colors">
          <Heart className="text-red-400 w-10 h-10 mb-4" />
          <h4 className="font-black text-lg mb-3 uppercase tracking-wide">
            Relacionamentos
          </h4>
          <p className="text-sm leading-relaxed">
            Você se desliga enquanto seu parceiro ou filhos estão
            falando. Você esquece conversas que acabou de ter, ou
            esquece de responder uma mensagem.
          </p>
        </div>
        <div className="bg-white border border-gray-100 p-8 rounded-xl hover:bg-slate-50 transition-colors">
          <Brain className="text-[#DFB277] w-10 h-10 mb-4" />
          <h4 className="font-black text-lg mb-3 uppercase tracking-wide">
            Lapsos de Memória
          </h4>
          <p className="text-sm leading-relaxed">
            Você perde o horário de buscar alguém, esquece um
            aniversário, ou dá branco em um detalhe simples — e você vê
            aquele olhar de preocupação.
          </p>
        </div>
        <div className="bg-white border border-gray-100 p-8 rounded-xl hover:bg-slate-50 transition-colors">
          <Home className="text-blue-400 w-10 h-10 mb-4" />
          <h4 className="font-black text-lg mb-3 uppercase tracking-wide">
            Vida Social
          </h4>
          <p className="text-sm leading-relaxed">
            É sua vez de receber a família — nada demais — mas você fica
            sobrecarregado e desiste. Quando você não consegue se
            organizar, sua confiança despenca.
          </p>
        </div>
      </div>

      <div className="text-center py-10">
        <p className="text-2xl font-light text-gray-400 italic">
          “Se esses momentos estão se acumulando, provavelmente estão
          apontando para algo maior.”
        </p>
      </div>
    </section>
  );
};

export default SymptomsGrid;

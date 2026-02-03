import React from "react";

const StorySection: React.FC = () => {
  return (
    <section className="space-y-6">
      <h3 className="text-3xl font-black italic text-[#1a2e2a] pt-12">
        O Lapso Mental Que Me Fez Desmoronar
      </h3>

      <div className="relative rounded-xl overflow-hidden mb-12 border-4 border-white">
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200&h=600"
          alt="Senior forgetting something"
          className="w-full object-cover aspect-video grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-[#1a2e2a]/30"></div>
      </div>

      <div className="space-y-6 text-gray-700">
        <p>
          Sinceramente? Minha própria névoa mental estava ficando cada
          vez mais difícil de esconder.
        </p>
        <p>
          Começou silenciosamente, com pequenos deslizes que eu ficava
          ignorando:
        </p>
        <ul className="space-y-2 font-medium text-gray-600 pl-4 border-l-2 border-[#DFB277]/20">
          <li>• Perder o fio do pensamento no meio de uma frase.</li>
          <li>
            • Entrar num cômodo e esquecer completamente o que fui fazer
            lá.
          </li>
          <li>
            • Evitar organizar o armário porque meu cérebro parecia
            “cheio demais”.
          </li>
        </ul>
        <p>Irritante, claro. Mas administrável.</p>
        <p>Até o dia em que meu cérebro realmente me traiu.</p>
        <p>
          Eu estava numa chamada de vídeo com uma cliente de longa data
          — alguém que confia em mim com a saúde dela. E eu chamei ela
          pelo nome errado.
        </p>
        <p>Duas vezes.</p>
        <p>Eu ri e desculpei. Culpei o “cansaço do dia”.</p>
        <p>Depois recomendei um plano alimentar que incluía glúten.</p>
        <p>
          Ela tem intolerância a glúten. Eu sei disso desde o primeiro
          dia.
        </p>
        <p>
          Eu vi a expressão dela mudar de calorosa → confusa → magoada.
        </p>
        <p>E senti algo que não sentia há muito tempo.</p>
        <p>Vergonha. Aquela que queima o rosto.</p>
        <p>
          Quando a chamada terminou, fechei o laptop, fui até a cozinha
          e encostei a testa no balcão. E chorei.
        </p>
        <p>
          Porque no fundo, eu sabia que isso não era só estresse. Algo
          no meu cérebro não estava funcionando como antes.
        </p>
        <p>
          E pela primeira vez, tive que me fazer a mesma pergunta
          difícil que faço aos meus clientes:
        </p>
        <p className="font-bold text-[#2d5a4c] italic">
          “Isso é só esgotamento… ou tem algo mais profundo
          acontecendo?”
        </p>
      </div>
    </section>
  );
};

export default StorySection;

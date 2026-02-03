"use client";

import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Star,
  Brain,
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight,
  Eye,
  Lock,
  Truck,
  AlertTriangle,
  ChevronRight,
  XCircle,
  Coffee,
  Heart,
  Quote,
  Target,
  Home,
  Shield,
  Gift,
} from "lucide-react";

// --- Shared Components ---

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="Axen Logo"
            className="h-8 md:h-10 w-auto"
          />
        </a>
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#how-it-works"
            className="text-sm font-semibold hover:text-[#DFB277] transition-colors uppercase tracking-wider"
          >
            Como Funciona
          </a>
          <a
            href="#reviews"
            className="text-sm font-semibold hover:text-[#DFB277] transition-colors uppercase tracking-wider"
          >
            Depoimentos
          </a>
          <a
            href="#cta"
            className="bg-[#2d5a4c] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#1a2e2a] transition-all active:scale-95"
          >
            VERIFICAR DISPONIBILIDADE
          </a>
        </div>
      </div>
    </nav>
  );
};

const ProductSidebarCard: React.FC = () => (
  <div className="bg-white rounded-xl p-6 border border-gray-200 relative group border-t-4 border-t-[#DFB277]">
    <div className="absolute top-0 right-0 bg-[#DFB277] text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-bl-xl z-10">
      Mais Vendido
    </div>
    <div className="relative overflow-hidden rounded-xl mb-6 aspect-square bg-[#fdfbf7]">
      <img
        src="/images/product.png"
        alt="Axen NeuroFuel Jar"
        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 p-4"
      />
    </div>
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-black text-[#1a2e2a]">NeuroFuel®</h3>
        <div className="flex text-[#DFB277]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] italic">
        Protocolo NeuroRestore™
      </p>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-xs text-[#2d5a4c] font-bold bg-[#f0f4f3] p-3 rounded-xl border border-[#2d5a4c]/5">
          <Zap className="w-4 h-4 shrink-0" />
          <span>Foco Aumentado em 64%*</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-[#2d5a4c] font-bold bg-[#f0f4f3] p-3 rounded-xl border border-[#2d5a4c]/5">
          <Brain className="w-4 h-4 shrink-0" />
          <span>Cognição 74% Superior*</span>
        </div>
      </div>
      <a
        href="#cta"
        className="block text-center bg-[#2d5a4c] hover:bg-[#1a2e2a] text-white font-black py-5 rounded-xl transition-all text-lg uppercase tracking-tight"
      >
        ADQUIRIR AGORA
      </a>
      <div className="flex justify-between items-center px-2 py-1 opacity-60">
        <div className="flex items-center gap-1.5 text-[8px] text-gray-400 font-black uppercase tracking-widest">
          <ShieldCheck className="w-3 h-3" /> 30 Dias Garantia
        </div>
        <div className="flex items-center gap-1.5 text-[8px] text-gray-400 font-black uppercase tracking-widest">
          <Truck className="w-3 h-3" /> Frete Grátis
        </div>
      </div>
    </div>
  </div>
);

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 justify-center items-center font-mono text-2xl font-black text-red-600 bg-red-50 py-3 px-6 rounded-xl border border-red-100">
      <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
      <span className="animate-pulse">:</span>
      <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
    </div>
  );
};

// --- Main Page ---

export default function Home_Page() {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toLocaleDateString("pt-BR"));
  }, []);

  return (
    <div className="min-h-screen bg-red-500 text-[#1a2e2a] selection:bg-[#DFB277]/30 selection:text-[#1a2e2a]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* CONTENT SECTION (Left) */}
          <article className="flex-1 max-w-3xl order-2 lg:order-1">
            {/* HERO HEADLINE */}
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="inline-flex items-center px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] bg-[#DFB277]/10 text-[#a8824f] border border-[#DFB277]/20">
                  <Eye className="w-3.5 h-3.5 mr-2" /> 8.547 pessoas lendo agora
                </span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-2" /> 4 min de leitura
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 font-playfair italic text-[#1a2e2a]">
                E Se Eu Te Dissesse Que Um Simples Cogumelo É Capaz De Eliminar
                a Névoa Mental e Aumentar o Foco em 64%?
              </h1>

              <h2 className="text-xl md:text-2xl text-gray-500 font-light mb-12 italic border-l-4 border-[#DFB277] pl-8">
                Eu Também Achei Que Era Golpe — Então Decidi Testar Eu Mesma.
              </h2>

              {/* Main Sarah Image - Hero Lifestyle Segurando Pote */}
              <div className="relative mb-12 group overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1556911229-bbd4860153f3?auto=format&fit=crop&q=80&w=1200&h=800"
                  alt="Sarah Mitchell segurando pote Axen NeuroFuel"
                  className="w-full object-cover aspect-4/3 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/80 to-transparent text-white">
                  <p className="text-sm font-bold opacity-80 mb-2 uppercase tracking-widest italic">
                    Pesquisadora & Nutricionista
                  </p>
                  <p className="text-xl font-medium italic">
                    "Eu jurei que era golpe... até ver os dados clínicos e
                    sentir a névoa sumir."
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 border-t border-b border-gray-100 py-8 mb-16">
                <div className="w-16 h-16 rounded-xl border-2 border-[#DFB277] overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150&h=150"
                    alt="Sarah Mitchell Portrait Bio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-black text-lg text-[#1a2e2a]">
                    Por Sarah Mitchell
                  </p>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider leading-tight">
                    Nutricionista Funcional & Pesquisadora de Saúde Cognitiva
                  </p>
                  <p className="text-[10px] text-gray-400 mt-2 font-black uppercase tracking-widest italic">
                    Última atualização: {today}
                  </p>
                </div>
              </div>
            </header>

            {/* INTRO TEXT */}
            <section className="prose prose-lg text-gray-700 max-w-none space-y-8 leading-relaxed">
              <h3 className="text-3xl font-black text-[#DFB277] italic leading-tight">
                Eu Jurei Que Esse Era Mais Um Daqueles “Truques” De Internet
                (Truque do Mel, Truque do Sal Rosa) Mas Não — Veja Como Eu Tive
                Que Engolir Minhas Palavras
              </h3>

              <p>
                Eu testo suplementos para ganhar a vida. Já consultei para
                empresas de bem-estar, participei de painéis de especialistas e
                testei mais fórmulas no meu próprio corpo do que gostaria de
                admitir.
              </p>

              <p>
                E aqui está a verdade:{" "}
                <strong>
                  Nove em cada dez vezes, eu digo para as pessoas guardarem o
                  dinheiro.
                </strong>
              </p>

              <p>
                Então, quando mais um produto de cogumelos começou a viralizar
                na internet, tive a mesma reaction que você provavelmente teve:
              </p>

              <div className="bg-[#fdfbf7] border-l-4 border-[#DFB277] p-8 rounded-xl italic space-y-4 font-medium text-gray-700">
                <p>“Ah, olha só, a internet descobriu cogumelos… de novo.”</p>
                <p>
                  “Já tentei o café de cogumelo. Cuspi na pia. Não senti nada.”
                </p>
                <p>
                  “Um suplemento? Eliminando a névoa mental? Só acredito quando
                  sentir.”
                </p>
              </div>

              <p>Tantos produtos de bem-estar virais seguem o mesmo roteiro:</p>
              <div className="bg-red-50 text-red-600 p-4 rounded-xl font-black text-center uppercase tracking-widest text-sm border border-red-100">
                Promessas Enormes → Dose Mínima → Rótulo Bonito → Zero
                Resultados
              </div>

              <p>
                Então eu esperava completamente que esse suplemento de Lion’s
                Mane fosse mais um fracasso superestimado. Até que um documento
                chegou na minha mesa que me fez dizer:{" "}
                <strong>“Espera, sério?”</strong>
              </p>

              <p>
                Um estudo publicado no{" "}
                <i>International Journal of Medicinal Mushrooms</i> mostrou que
                Lion’s Mane aumentou significativamente os níveis de NGF (Fator
                de Crescimento Neural) em adultos após apenas 8 semanas de uso.
              </p>

              <p>
                Não era “teste de influenciador patrocinado pela marca.” Eram
                adultos reais tomando o produto diariamente… com resultados
                rastreados.
              </p>

              {/* CLINICAL TABLE */}
              <div className="my-16 bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-[#2d5a4c] p-8 text-white">
                  <h4 className="text-2xl font-black italic text-[#DFB277]">
                    Resultados Clínicos Comprovados
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 mt-2">
                    Após 8 Semanas, Os Participantes Relataram:
                  </p>
                </div>
                <div className="p-0">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-gray-100">
                      <tr>
                        <th className="px-8 py-4 text-xs font-black uppercase tracking-widest text-gray-400">
                          Benefício
                        </th>
                        <th className="px-8 py-4 text-xs font-black uppercase tracking-widest text-gray-400 text-right">
                          Melhoria
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-bold">
                      {[
                        {
                          label: "Redução da névoa mental",
                          val: "58%",
                          color: "bg-blue-500",
                        },
                        {
                          label: "Melhoria na cognição",
                          val: "74%",
                          color: "bg-[#2d5a4c]",
                        },
                        {
                          label: "Melhoria na memória",
                          val: "44%",
                          color: "bg-[#DFB277]",
                        },
                        {
                          label: "Aumento do foco",
                          val: "64%",
                          color: "bg-emerald-500",
                        },
                      ].map((item, i) => (
                        <tr
                          key={i}
                          className="hover:bg-slate-50 transition-colors"
                        >
                          <td className="px-8 py-6 text-gray-700">
                            {item.label}
                          </td>
                          <td className="px-8 py-6 text-right">
                            <span className="text-3xl font-black text-[#1a2e2a]">
                              {item.val}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-8 bg-slate-50 border-t border-gray-100 text-gray-700">
                  <p className="text-xs text-gray-400 font-medium italic">
                    * Dados publicados e verificados por terceiros — algo que a
                    maioria dos produtos de cogumelo não consegue oferecer.
                  </p>
                </div>
              </div>

              <p>
                Ainda assim, eu não estava convencida. Números são uma coisa. A
                vida real é outra.
              </p>
              <p>
                Então enviei o estudo e a fórmula para algumas amigas
                nutricionistas que testam produtos da mesma forma que eu.
                Esperava mais revirar de olhos. Em vez disso, recebi isso:
              </p>

              <div className="grid md:grid-cols-1 gap-4 text-gray-700">
                <div className="bg-slate-50 p-6 rounded-xl italic text-sm border border-slate-200 border-l-4 border-l-[#2d5a4c]">
                  “Os resultados foram mais fortes do que eu esperava.”
                </div>
                <div className="bg-slate-50 p-6 rounded-xl italic text-sm border border-slate-200 border-l-4 border-l-[#2d5a4c]">
                  “Superou todos os suplementos ‘sérios’ que testei este ano.”
                </div>
                <div className="bg-slate-50 p-6 rounded-xl italic text-sm border border-slate-200 border-l-4 border-l-[#2d5a4c]">
                  “Era a última coisa que eu achava que ajudaria meus clientes…
                  e ajudou.”
                </div>
              </div>

              {/* STORY SECTION */}
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

              <h3 className="text-3xl font-black italic text-[#1a2e2a] pt-12">
                Como a “Névoa Mental” Aparece Na Sua Vida?
              </h3>
              <p>
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

              {/* SECTION: O Que Está Realmente Por Trás Desses Lapsos? */}
              <h3 className="text-3xl font-black italic text-[#1a2e2a] pt-12">
                O Que Está Realmente Por Trás Desses Lapsos de Memória?
              </h3>
              <div className="space-y-6 text-gray-700">
                <p>
                  Se você tem se sentido mal — com névoa, esquecido, sem foco —
                  você não é preguiçoso. Você não está “ficando velho.”
                </p>
                <p>
                  Aquela sensação de embaralhamento, de não conseguir pensar?
                  Isso é o que os cientistas chamam de{" "}
                  <strong>“Fadiga Neural”</strong> — o esgotamento progressivo
                  dos sinais biológicos que permitem ao cérebro se reparar.
                </p>

                <div className="bg-[#f0f4f3] p-8 rounded-xl border border-[#2d5a4c]/10 italic">
                  "Pense nisso como um celular com bateria baixa. A tela fica
                  menos brilhante, os processos em segundo plano são desligados…
                  tudo funciona, só que mais devagar. O cérebro faz exatamente a
                  mesma coisa."
                </div>

                <h4 className="text-2xl font-black text-[#1a2e2a] mt-8">
                  O Que a Ciência Descobriu:
                </h4>
                <p>
                  Estudos mostram que, após os 40 anos, nosso cérebro começa a
                  reduzir progressivamente a produção de uma proteína chamada{" "}
                  <strong>
                    NGF — Nerve Growth Factor (Fator de Crescimento Neural)
                  </strong>
                  .
                </p>

                <p>O NGF é o sinal biológico responsável por:</p>
                <ul className="space-y-3 font-medium text-gray-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />{" "}
                    Manter neurônios vivos
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />{" "}
                    Preservar conexões neurais
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />{" "}
                    Permitir que o cérebro forme novas sinapses
                  </li>
                </ul>

                <p>
                  Quando o cérebro não recebe NGF suficiente, ele entra no que
                  os cientistas chamam de “modo de sobrevivência”:
                </p>
                <ul className="space-y-2 text-sm italic text-gray-600 pl-4 border-l-2 border-slate-200">
                  <li>• Ele reduz a formation de novas conexões.</li>
                  <li>• Diminui a consolidação de memórias.</li>
                  <li>• Desacelera a velocidade de processamento.</li>
                </ul>

                <p>
                  Não porque você está ficando “velho demais”. Mas porque o
                  system entendeu que não é seguro investir em desempenho.
                </p>

                <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 my-12">
                  <h4 className="text-xl font-black text-[#1a2e2a] mb-6 uppercase tracking-wider">
                    A Fadiga Neural Se Acumula Quando:
                  </h4>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start gap-4">
                      <XCircle className="text-red-500 w-6 h-6 shrink-0" />
                      <span className="text-sm font-bold leading-relaxed">
                        Hormônios do estresse ficam elevados o dia todo
                      </span>
                    </div>
                    <div className="flex items-start gap-4">
                      <XCircle className="text-red-500 w-6 h-6 shrink-0" />
                      <span className="text-sm font-bold leading-relaxed">
                        Tarefas inacabadas zumbem no fundo da mente
                      </span>
                    </div>
                    <div className="flex items-start gap-4">
                      <XCircle className="text-red-500 w-6 h-6 shrink-0" />
                      <span className="text-sm font-bold leading-relaxed">
                        Seu intestino e system imunológico enviam sinais
                        “errados”
                      </span>
                    </div>
                    <div className="flex items-start gap-4">
                      <XCircle className="text-red-500 w-6 h-6 shrink-0" />
                      <span className="text-sm font-bold leading-relaxed">
                        Dispositivos digitais puxam seu cérebro para fora do
                        foco
                      </span>
                    </div>
                  </div>
                </div>

                <p>
                  Raramente é uma coisa grande. É tudo te atingindo de uma vez —
                  até que seu cérebro está superestimulado, supersaturado e
                  completamente esgotado.
                </p>
                <p>
                  Claro, você pode adicionar cafeína… mais estimulação. Mas isso
                  é como adicionar uma banda marcial ao caos.
                </p>
              </div>

              {/* TRANSITION SECTION: Ok… Como Eu Elimino Essa “Fadiga Neural”? */}
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

              {/* APRESENTANDO SECTION */}
              <div className="bg-[#fdfbf7] p-10 rounded-xl border-2 border-[#DFB277]/20 relative overflow-hidden my-16 text-gray-700">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#DFB277] mb-6">
                  APRESENTANDO
                </h4>
                <h3 className="text-4xl font-black text-[#1a2e2a] mb-6">
                  Axen NeuroFuel®
                </h3>
                <p className="text-lg text-gray-500 italic mb-10 leading-relaxed">
                  A primeira fórmula que testei que suporta química do estresse,
                  sinais de crescimento neural e clareza cognitiva — tudo em um
                  ritual diário simples.
                </p>
                <img
                  src="/images/product.png"
                  alt="Pote do Axen NeuroFuel com o pó ao redor"
                  className="w-full rounded-xl mb-10 border border-gray-100 object-contain"
                />
              </div>

              {/* 3 FRONTS DETAIL */}
              <div className="space-y-20 text-gray-700">
                {/* POINT 1 */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-black text-[#1a2e2a] italic border-b-2 border-[#DFB277] pb-4 inline-block">
                    1. Axen NeuroFuel® Reativa o Sinal de Crescimento Neural
                  </h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                    Alimentado por Lion’s Mane + Vitaminas B9 e B12
                  </p>
                  <p>
                    Axen NeuroFuel® é formulado com o ativador cerebral da
                    natureza: Lion’s Mane. Este super composto estimula a
                    produção de fatores de crescimento neural — os sinais que
                    ajudam as células cerebrais a permanecerem saudáveis e se
                    comunicarem eficientemente ao longo do tempo.*
                  </p>
                  <p>
                    Um estudo publicado no <i>Phytotherapy Research</i> mostrou
                    que participantes que tomaram Lion’s Mane por 16 semanas
                    apresentaram melhora significativa na função cognitiva
                    comparados ao grupo placebo.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex gap-4 bg-white p-6 rounded-xl border border-gray-200 font-bold text-sm leading-relaxed">
                      <CheckCircle className="text-[#DFB277] w-5 h-5 shrink-0" />
                      <span>
                        A memória do dia a dia fica nítida — Chega de perder o
                        fio do pensamento no meio da frase, esquecer
                        compromissos ou dar branco em fatos simples.
                      </span>
                    </div>
                    <div className="flex gap-4 bg-white p-6 rounded-xl border border-gray-200 font-bold text-sm leading-relaxed">
                      <CheckCircle className="text-[#DFB277] w-5 h-5 shrink-0" />
                      <span>
                        Você consegue fazer as coisas — Você vai de email →
                        reunião → lista de tarefas sem se perder, travar ou
                        esquecer o que estava fazendo.
                      </span>
                    </div>
                    <div className="flex gap-4 bg-white p-6 rounded-xl border border-gray-200 font-bold text-sm leading-relaxed">
                      <CheckCircle className="text-[#DFB277] w-5 h-5 shrink-0" />
                      <span>
                        Seu foco permanece estável — Para você não estar afiado
                        de manhã e embaralhado ao meio-dia.
                      </span>
                    </div>
                  </div>
                  <p className="text-sm italic text-gray-500 pt-4">
                    Pouco a pouco, a desordem se limpa e seu cérebro se sente
                    “seu” de novo.
                  </p>
                </div>

                {/* POINT 2 */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-black text-[#1a2e2a] italic border-b-2 border-[#2d5a4c] pb-4 inline-block">
                    2. Axen NeuroFuel® Silencia os “Alarmes” do Estresse
                  </h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                    Alimentado por Rhodiola Rosea
                  </p>
                  <p>
                    Axen NeuroFuel® contém adaptógenos poderosos como Rhodiola
                    Rosea. Esses ingredientes potentes preparam seu corpo para
                    responder aos sinais de estresse de forma mais suave.
                  </p>
                  <p>
                    Um estudo no <i>Journal of Ethnopharmacology</i> demonstrou
                    que Rhodiola reduziu significativamente os sintomas de
                    fadiga mental em profissionais estressados após apenas 4
                    semanas. Em vez de apertar os dentes para passar pelas
                    tarefas, você se sente estável, calmo e mentalmente
                    presente.
                  </p>
                  <div className="bg-slate-50 p-8 rounded-xl space-y-6 text-sm text-gray-700 border border-slate-200">
                    <p className="flex items-start gap-4">
                      <CheckCircle className="text-[#2d5a4c] w-5 h-5 shrink-0" />
                      <span>
                        <strong>
                          “Sua paciência volta, mesmo em dias caóticos.”
                        </strong>{" "}
                        → Uma resposta ao estresse mais suave = menos
                        reatividade, mais capacidade emocional.
                      </span>
                    </p>
                    <p className="flex items-start gap-4">
                      <CheckCircle className="text-[#2d5a4c] w-5 h-5 shrink-0" />
                      <span>
                        <strong>
                          “Você não pula a cada interrupção — permanece composto
                          em vez de agitado.”
                        </strong>{" "}
                        → Adaptógenos apoiam calma e resiliência sob pressão.
                      </span>
                    </p>
                    <p className="flex items-start gap-4">
                      <CheckCircle className="text-[#2d5a4c] w-5 h-5 shrink-0" />
                      <span>
                        <strong>
                          “Aquela faxina que você estava adiando? Feita em uma
                          hora.”
                        </strong>{" "}
                        → Menor carga de estresse = mais capacidade, menos
                        evitação, mais conclusão.
                      </span>
                    </p>
                  </div>
                </div>

                {/* POINT 3 */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-black text-[#1a2e2a] italic border-b-2 border-emerald-500 pb-4 inline-block">
                    3. Axen NeuroFuel® Sustenta Clareza e Foco Enquanto a
                    Reconstrução Acontece
                  </h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                    Alimentado por Alpha-GPC + L-Theanine + Cafeína Natural
                  </p>
                  <p>
                    Axen NeuroFuel® também é potencializado com Alpha-GPC,
                    precursor direto da acetilcolina — o neurotransmissor
                    essencial para memória e aprendizado.
                  </p>
                  <p>
                    Combinado com L-Theanine e uma microdose de cafeína natural,
                    você tem:
                  </p>
                  <ul className="space-y-2 text-sm font-bold text-gray-600 pl-4 border-l-2 border-slate-100 mb-6">
                    <li>
                      • Foco equilibrado sem os picos e quedas do café comum
                    </li>
                    <li>• Energia limpa e sustentada ao longo do dia</li>
                    <li>• Estado de alerta relaxado, sem ansiedade</li>
                  </ul>
                  <p>
                    Um estudo na <i>Nutritional Neuroscience</i> mostrou que a
                    combinação de L-Theanine com cafeína melhorou
                    significativamente a atenção e a velocidade de processamento
                    em tarefas cognitivas.
                  </p>
                  <div className="space-y-4 pt-4 text-gray-700">
                    {[
                      "Seu humor fica mais estável, em vez de subir e descer o dia todo.",
                      "Você se sente menos reativo. A sensação pesada e “algodão na cabeça” diminui, então você se sente mais presente com amigos e família.",
                      "Pequenos estresses não te derrubam como costumavam. Você se recupera facilmente.",
                      "Você passa o dia sem aquela sensação de “arrasto”. Mais energia e otimismo.",
                    ].map((txt, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 font-bold text-sm"
                      >
                        <Zap className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                        {txt}
                      </li>
                    ))}
                  </div>
                  <p className="text-sm italic text-gray-500 pt-8">
                    Juntas, essas mudanças sutis mas poderosas fazem a vida
                    parecer mais leve, mais calma e mais administrável.
                  </p>
                </div>
              </div>

              {/* WHY OTHERS FAIL */}
              <div className="my-24 bg-[#1a2e2a] text-white p-12 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <AlertTriangle className="w-24 h-24" />
                </div>
                <h3 className="text-3xl font-black italic text-[#DFB277] mb-10">
                  Por Que a Maioria Dos Produtos Falha
                </h3>
                <div className="grid md:grid-cols-2 gap-10 text-gray-200">
                  <div className="space-y-6">
                    <h4 className="font-black text-red-400 uppercase tracking-widest text-xs">
                      ❌ A Maioria Das Marcas Usa:
                    </h4>
                    <ul className="space-y-4 text-xs font-bold opacity-60">
                      <li>• Pós de baixa dose</li>
                      <li>• Micélio cultivado em grãos (amido)</li>
                      <li>• Extração à base de álcool tóxico</li>
                      <li>• Formas genéricas de vitaminas</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="font-black text-green-400 uppercase tracking-widest text-xs">
                      ✅ Axen NeuroFuel® Entrega:
                    </h4>
                    <ul className="space-y-4 text-xs font-bold">
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />{" "}
                        Dose clínica por porção
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />{" "}
                        6 ingredientes sinérgicos
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />{" "}
                        Extratos de corpo frutífero
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />{" "}
                        Formas ativas de vitaminas
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PROTOCOL SECTION */}
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

              {/* WEEK BY WEEK - BLOG STYLE */}
              <h3 className="text-3xl font-black italic text-[#1a2e2a] pt-24 mb-4">
                Semana a Semana: O Que Eu Realmente Senti
              </h3>
              <p className="text-lg text-gray-500 italic mb-12 border-l-4 border-[#2d5a4c] pl-6 font-medium">
                Quando Finalmente Dei ao Meu Cérebro O Que Ele Estava Implorando
              </p>

              <div className="space-y-10 my-12 text-gray-700">
                {/* WEEK 1 CARD */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-[#f0f4f3] px-8 py-4 border-b border-gray-100 flex justify-between items-center">
                    <h4 className="font-black text-[#2d5a4c] uppercase tracking-[0.2em] text-[10px]">
                      DIÁRIO DE CAMPO
                    </h4>
                    <span className="text-emerald-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                      <Clock className="w-3 h-3" /> SEMANA 1
                    </span>
                  </div>
                  <div className="p-8 space-y-6">
                    <h5 className="text-xl font-black text-[#1a2e2a] italic">
                      🟢 SEMANA 1: A Névoa Começa a Clarear
                    </h5>
                    <p className="leading-relaxed">
                      Na primeira manhã, tomei o pó junto ao meu café da manhã
                      esperando nada. Mas em algum lugar entre o café da manhã e
                      o almoço, algo… muda. A névoa mental não desaparece, mas o
                      ruído diminui.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                        <span>
                          Não estou mais pulando entre abas como um esquilo
                          cafeinado
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                        <span>Acidentalmente pulo meu café da tarde</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                        <span>
                          Consigo passar pela caixa de entrada sem me desligar
                          mentalmente
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* WEEK 2 CARD */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-blue-50/50 px-8 py-4 border-b border-gray-100 flex justify-between items-center">
                    <h4 className="font-black text-blue-600 uppercase tracking-[0.2em] text-[10px]">
                      CONEXÕES REATIVADAS
                    </h4>
                    <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                      <Clock className="w-3 h-3" /> SEMANA 2
                    </span>
                  </div>
                  <div className="p-8 space-y-6">
                    <h5 className="text-xl font-black text-[#1a2e2a] italic">
                      🟢 SEMANA 2: Algo Está Clicando
                    </h5>
                    <p className="leading-relaxed">
                      Na Semana 2, começo a notar mudanças semelhantes ao que os
                      participantes dos estudos relatam — melhor foco,
                      transições mais suaves e menos fadiga mental.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <CheckCircle className="text-blue-500 w-5 h-5 shrink-0 mt-0.5" />
                        <span>
                          Reorganizo aquele armário que estava evitando há
                          semanas
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <CheckCircle className="text-blue-500 w-5 h-5 shrink-0 mt-0.5" />
                        <span>
                          Menos momentos de “espera… o que eu estava dizendo?”
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <CheckCircle className="text-blue-500 w-5 h-5 shrink-0 mt-0.5" />
                        <span>
                          Realmente flui de uma tarefa para outra — sem travar
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* WEEK 3-4 CARD */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden border-t-4 border-t-[#DFB277]">
                  <div className="bg-[#fdfbf7] px-8 py-4 border-b border-gray-100 flex justify-between items-center">
                    <h4 className="font-black text-[#a8824f] uppercase tracking-[0.2em] text-[10px]">
                      O REBOOT FINAL
                    </h4>
                    <span className="text-[#a8824f] font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                      <Clock className="w-3 h-3" /> SEMANAS 3–4
                    </span>
                  </div>
                  <div className="p-8 space-y-6">
                    <h5 className="text-xl font-black text-[#1a2e2a] italic">
                      🟢 SEMANAS 3–4: Meu Cérebro, Reiniciado
                    </h5>
                    <p className="leading-relaxed">
                      Na Semana 4, experimento resultados semelhantes aos
                      relatados nos estudos:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4 group">
                        <div className="w-10 h-10 bg-[#DFB277]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#DFB277]/20 transition-colors">
                          <Heart className="w-5 h-5 text-[#DFB277]" />
                        </div>
                        <p className="text-sm font-bold italic">
                          Meu marido diz que pareço “menos frita” e mais
                          presente
                        </p>
                      </li>
                      <li className="flex items-center gap-4 group">
                        <div className="w-10 h-10 bg-[#DFB277]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#DFB277]/20 transition-colors">
                          <Quote className="w-5 h-5 text-[#DFB277]" />
                        </div>
                        <p className="text-sm font-bold italic">
                          No jantar com amigos, me sinto como a pessoa engraçada
                          de novo
                        </p>
                      </li>
                    </ul>
                    <p className="text-center py-6 bg-slate-50 rounded-xl border border-slate-100 text-lg font-black text-[#1a2e2a] italic">
                      "Não é um transplante de personalidade. Sou só eu, mas
                      mais clara."
                    </p>
                  </div>
                </div>
              </div>

              {/* TESTIMONIALS SECTION */}
              <div id="reviews" className="pt-20 text-gray-700">
                <h3 className="text-3xl font-black italic text-[#1a2e2a] mb-6 text-center uppercase tracking-tighter">
                  O Que Outros Estão Dizendo
                </h3>
                <p className="max-w-2xl mx-auto text-center text-gray-600 mb-12 italic font-medium leading-relaxed px-4">
                  Eu sei o que você está pensando: “Esses depoimentos são
                  reais?” Honestamente, eu me perguntei a mesma coisa — até eu
                  mesma testar o suplemento e sentir exatamente o que as pessoas
                  estavam descrevendo.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      name: "Mary J.",
                      info: "53 anos, menopausa",
                      text: "Adoro esse suplemento! Primeiro, é fácil de tomar e não tem gosto ruim. Me sinto muito mais clara aos 53 anos e no meio da menopausa faz diferença! Juro por ele e não vou ficar sem, nem por um dia.",
                    },
                    {
                      name: "James M.",
                      info: "",
                      text: "Melhor suplemento de memory que já usei. Definitivamente faz o que diz. Mais energia, mais foco mental. Vou pedir de novo. Tenho contado para todo mundo que encontro para experimentar.",
                    },
                    {
                      name: "Robert L.",
                      info: "",
                      text: "Eles são ótimos! Axen não é mágica, mas funciona para nivelar meu foco de uma forma que eu realmente tomo ação na minha lista de tarefas antes que o esquilo dentro de mim diga para fazer outra coisa. É sutil mas eficaz.",
                    },
                    {
                      name: "John P.",
                      info: "76 anos",
                      text: "Surpreendido. Eu estava cético, mas fiquei surpreso com uma melhora distinta na minha memória e clareza mental após apenas algumas semanas. Consigo lembrar sequências de números agora, e não pareço ficar tão confuso na vida diária. Boa notícia aos 76!",
                    },
                    {
                      name: "Jeff R.",
                      info: "",
                      text: "Senti diferença em poucos dias. Depois de tomar por duas semanas, estou impressionado como minha névoa mental praticamente sumiu, e minha energia está nas alturas… meus amigos notaram a diferença e estão experimentando agora… até agora eles também estão impressionados.",
                    },
                  ].map((rev, i) => (
                    <div
                      key={i}
                      className="bg-white p-8 rounded-xl border border-gray-200"
                    >
                      <div className="flex text-[#DFB277] mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="italic mb-6 text-sm leading-relaxed">
                        “{rev.text}”
                      </p>
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                        <p className="font-black text-xs uppercase tracking-widest text-[#1a2e2a]">
                          — {rev.name}{" "}
                          {rev.info && (
                            <span className="font-light opacity-50 ml-2">
                              ({rev.info})
                            </span>
                          )}
                        </p>
                        <div className="flex items-center gap-1.5 text-[10px] text-green-600 font-black uppercase tracking-[0.2em] bg-green-50 px-3 py-1 rounded-xl border border-green-100 self-start md:self-auto">
                          <div className="bg-green-600 p-0.5 rounded-xl">
                            <CheckCircle className="w-2.5 h-2.5 text-white" />
                          </div>
                          Cliente Verificado
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WHAT YOU GET */}
              <div className="my-24 bg-white p-12 rounded-xl border border-gray-200 text-gray-700">
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

              {/* HOW TO USE */}
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

              {/* VERDICT SECTION */}
              <div className="my-24 py-20 px-10 bg-[#fdfbf7] rounded-xl border-2 border-[#DFB277]/10 text-center">
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

              {/* STOCK WARNING SECTION */}
              <div className="my-16 bg-red-50 border border-red-100 p-12 rounded-xl relative overflow-hidden text-gray-700">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <AlertTriangle className="w-20 h-20 text-red-600" />
                </div>
                <h4 className="flex items-center gap-3 text-red-700 font-black uppercase tracking-widest text-xs mb-8">
                  <AlertTriangle className="w-5 h-5" /> Aviso Rápido Sobre o
                  Estoque
                </h4>
                <div className="space-y-6 italic leading-relaxed">
                  <p>
                    Enquanto finalizava este artigo, recebi uma mensagem de
                    alguém da equipe Axen:
                  </p>
                  <blockquote className="bg-white/50 p-8 rounded-xl border-l-4 border-red-400 text-red-800 font-bold">
                    “Nossa última promoção esgotou a maior parte do nosso
                    estoque. Reservamos um pequeno lote apenas para seus
                    leitores — mas uma vez que esses acabarem, não podemos
                    garantir que estarão de volta antes do próximo mês.”
                  </blockquote>
                  <p className="text-sm opacity-60">
                    Para constar: raramente recebo mensagens assim — por isso
                    estou passando adiante.
                  </p>
                </div>
              </div>

              {/* GUARANTEE DETAIL */}
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
            </section>
          </article>

          {/* SIDEBAR (Right Sticky) */}
          <aside className="w-full lg:w-95 lg:sticky lg:top-28 z-40 order-1 lg:order-2">
            <ProductSidebarCard />

            {/* STOCK WARNING (Right Sidebar) */}
            <div className="mt-8 hidden lg:block bg-red-50 rounded-xl p-8 border border-red-100 relative overflow-hidden text-gray-700">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <AlertTriangle className="w-12 h-12 text-red-600" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-700 mb-4">
                Aviso de Estoque
              </p>
              <h4 className="text-xl font-bold mb-4 italic text-red-800">
                Mensagem da Equipe Axen
              </h4>
              <p className="text-xs text-red-700/70 leading-relaxed mb-6 italic">
                “Nossa última promoção esgotou a maior parte do nosso estoque.
                Reservamos um pequeno lote apenas para seus leitores.”
              </p>
              <div className="flex items-center gap-3 text-red-600 font-black text-[10px] uppercase tracking-widest">
                <div className="w-2 h-2 rounded-xl bg-red-600 animate-ping"></div>
                Lote Limitado Disponível
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* FINAL OFFER SECTION */}
      <section id="cta" className="bg-[#1a2e2a] py-32 px-4 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-[#DFB277] text-[#1a2e2a] px-8 py-3 rounded-xl font-black text-xs uppercase tracking-[0.4em] mb-12">
            Seu Próximo Passo
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-16 italic leading-tight font-playfair">
            Então Faz Sentido Experimentar?
          </h2>

          <p className="text-xl md:text-2xl text-white/70 mb-20 font-light max-w-3xl mx-auto leading-relaxed">
            Deixa eu te perguntar isso. Se apenas duas cápsulas por dia te
            ajudassem a se sentir mais claro, mais calmo e mais focado — sem a
            queda, a agitação ou o arrasto mental — como seria realmente o seu
            dia? Quanto mais você conseguiria fazer com esse suporte?
          </p>

          <div className="bg-white text-[#1a2e2a] rounded-xl p-10 md:p-20 relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#DFB277]/10 rounded-xl blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#2d5a4c]/10 blur-3xl rounded-xl"></div>
                  <img
                    src="/images/product.png"
                    alt="Final Product Presentation"
                    className="w-full rounded-xl relative z-10 transition-transform duration-700 hover:scale-[1.02] object-contain"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-10">
                <div>
                  <h3 className="text-4xl font-black mb-4">Axen NeuroFuel®</h3>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-xs italic">
                    Agora que você viu a pesquisa e os resultados, este é o
                    momento natural para experimentar.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-5 py-8 border-y border-gray-100 text-gray-700 font-bold text-sm">
                  {[
                    {
                      icon: <Zap className="w-5 h-5 text-emerald-500" />,
                      text: "Os descontos ainda estão ativos",
                    },
                    {
                      icon: <Gift className="w-5 h-5 text-blue-500" />,
                      text: "Presentes extras incluídos no seu pedido",
                    },
                    {
                      icon: <Clock className="w-5 h-5 text-[#DFB277]" />,
                      text: "E o estoque ainda está disponível",
                    },
                    {
                      icon: <ShieldCheck className="w-5 h-5 text-[#2d5a4c]" />,
                      text: "MAIS 30 dias para experimentar sem risco",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#fdfbf7] p-10 rounded-xl border-2 border-[#DFB277]/20 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#DFB277] text-white px-6 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                    🔥 Oferta Por Tempo Limitado
                  </div>
                  <div className="flex items-baseline gap-4 mb-10 mt-4 justify-center">
                    <span className="text-5xl font-black tracking-tighter">
                      R$ 178,20
                    </span>
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                      / pote
                    </span>
                  </div>
                  <button className="w-full bg-[#2d5a4c] hover:bg-[#1a2e2a] text-white font-black py-7 rounded-xl text-xl flex flex-col items-center justify-center gap-1 transition-all active:scale-95 group uppercase tracking-tight">
                    <span>VERIFICAR DISPONIBILIDADE</span>
                    <span className="text-[10px] opacity-60 font-black">
                      Verificar estoque agora →
                    </span>
                  </button>
                  <div className="mt-8 flex justify-center gap-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                      className="h-4 grayscale opacity-40"
                      alt="Visa"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                      className="h-6 grayscale opacity-40"
                      alt="MC"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                      className="h-6 grayscale opacity-40"
                      alt="PayPal"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] text-center">
                    Expiração da Oferta:
                  </p>
                  <CountdownTimer />
                </div>
              </div>
            </div>
          </div>

          {/* GUARANTEE BOX */}
          <div className="mt-32 max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 p-16 rounded-xl backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck className="w-40 h-40 text-[#DFB277]" />
              </div>
              <h4 className="text-3xl font-black mb-10 italic text-[#DFB277]">
                30 Dias ou Seu Dinheiro de Volta
              </h4>
              <p className="opacity-70 text-lg leading-relaxed mb-12 font-light italic text-gray-200">
                "Se você não notar diferença, se o suplemento não parecer certo
                para você, ou mesmo se você simplesmente não gostar... você pode
                enviar um email para suporte@axen.com e solicitar reembolso. Sem
                obstáculos. Sem perguntas."
              </p>
              <div className="flex items-center gap-4 justify-center opacity-40">
                <Lock className="w-4 h-4" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em]">
                  Criptografia SSL de 256 bits
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111] text-white/30 py-24 px-4 text-center">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex items-center justify-center gap-3">
            <img
              src="/images/logo.png"
              alt="Axen Logo"
              className="h-12 md:h-14 w-auto brightness-0 invert"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-[#DFB277] transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-[#DFB277] transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-[#DFB277] transition-colors">
              Contato
            </a>
            <a href="#" className="hover:text-[#DFB277] transition-colors">
              Estudos Clínicos
            </a>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-[9px] font-bold uppercase tracking-[0.25em] leading-relaxed opacity-40">
            <p>
              * As afirmações contidas neste site não foram avaliadas pela
              ANVISA ou FDA. Este produto não se destina a diagnosticar, tratar,
              curar ou prevenir qualquer doença.
            </p>
            <p>
              © 2025 AXEN NUTRITION • BRAZILIAN COGNITIVE RESEARCH • TODOS OS
              DIREITOS RESERVADOS
            </p>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY BUTTON */}
      <div className="md:hidden fixed bottom-8 left-8 right-8 z-50">
        <a
          href="#cta"
          className="bg-[#2d5a4c] text-white flex items-center justify-between p-6 rounded-xl border border-white/20 active:scale-95 transition-all shadow-2xl"
        >
          <div className="flex flex-col text-left">
            <span className="text-[9px] uppercase font-black tracking-widest text-[#DFB277] mb-1">
              Garantir Lote Reservado
            </span>
            <span className="font-black text-xl font-playfair italic">
              Verificar NeuroFuel®
            </span>
          </div>
          <ChevronRight className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}

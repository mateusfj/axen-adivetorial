// import React from "react";
// import { CheckCircle, Zap } from "lucide-react";
// 
// const FeaturesDetail: React.FC = () => {
//   return (
//     <div className="space-y-20 text-gray-700">
//       {/* POINT 1 */}
//       <div className="space-y-6">
//         <h4 className="text-2xl font-black text-[#1a2e2a] italic border-b-2 border-[#DFB277] pb-4 inline-block">
//           1. Axen NeuroFuel® Reativa o Sinal de Crescimento Neural
//         </h4>
//         <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
//           Alimentado por Lion’s Mane + Vitaminas B9 e B12
//         </p>
//         <p>
//           Axen NeuroFuel® é formulado com o ativador cerebral da
//           natureza: Lion’s Mane. Este super composto estimula a
//           produção de fatores de crescimento neural — os sinais que
//           ajudam as células cerebrais a permanecerem saudáveis e se
//           comunicarem eficientemente ao longo do tempo.*
//         </p>
//         <p>
//           Um estudo publicado no <i>Phytotherapy Research</i> mostrou
//           que participantes que tomaram Lion’s Mane por 16 semanas
//           apresentaram melhora significativa na função cognitiva
//           comparados ao grupo placebo.
//         </p>
//         <div className="space-y-3 mt-6">
//           <div className="flex gap-4 bg-white p-6 rounded-xl border border-gray-200 font-bold text-sm leading-relaxed">
//             <CheckCircle className="text-[#DFB277] w-5 h-5 shrink-0" />
//             <span>
//               A memória do dia a dia fica nítida — Chega de perder o
//               fio do pensamento no meio da frase, esquecer
//               compromissos ou dar branco em fatos simples.
//             </span>
//           </div>
//           <div className="flex gap-4 bg-white p-6 rounded-xl border border-gray-200 font-bold text-sm leading-relaxed">
//             <CheckCircle className="text-[#DFB277] w-5 h-5 shrink-0" />
//             <span>
//               Você consegue fazer as coisas — Você vai de email →
//               reunião → lista de tarefas sem se perder, travar ou
//               esquecer o que estava fazendo.
//             </span>
//           </div>
//           <div className="flex gap-4 bg-white p-6 rounded-xl border border-gray-200 font-bold text-sm leading-relaxed">
//             <CheckCircle className="text-[#DFB277] w-5 h-5 shrink-0" />
//             <span>
//               Seu foco permanece estável — Para você não estar afiado
//               de manhã e embaralhado ao meio-dia.
//             </span>
//           </div>
//         </div>
//         <p className="text-sm italic text-gray-500 pt-4">
//           Pouco a pouco, a desordem se limpa e seu cérebro se sente
//           “seu” de novo.
//         </p>
//       </div>
// 
//       {/* POINT 2 */}
//       <div className="space-y-6">
//         <h4 className="text-2xl font-black text-[#1a2e2a] italic border-b-2 border-[#2d5a4c] pb-4 inline-block">
//           2. Axen NeuroFuel® Silencia os “Alarmes” do Estresse
//         </h4>
//         <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
//           Alimentado por Rhodiola Rosea
//         </p>
//         <p>
//           Axen NeuroFuel® contém adaptógenos poderosos como Rhodiola
//           Rosea. Esses ingredientes potentes preparam seu corpo para
//           responder aos sinais de estresse de forma mais suave.
//         </p>
//         <p>
//           Um estudo no <i>Journal of Ethnopharmacology</i> demonstrou
//           que Rhodiola reduziu significativamente os sintomas de
//           fadiga mental em profissionais estressados após apenas 4
//           semanas. Em vez de apertar os dentes para passar pelas
//           tarefas, você se sente estável, calmo e mentalmente
//           presente.
//         </p>
//         <div className="bg-slate-50 p-8 rounded-xl space-y-6 text-sm text-gray-700 border border-slate-200">
//           <p className="flex items-start gap-4">
//             <CheckCircle className="text-[#2d5a4c] w-5 h-5 shrink-0" />
//             <span>
//               <strong>
//                 “Sua paciência volta, mesmo em dias caóticos.”
//               </strong>{" "}
//               → Uma resposta ao estresse mais suave = menos
//               reatividade, mais capacidade emocional.
//             </span>
//           </p>
//           <p className="flex items-start gap-4">
//             <CheckCircle className="text-[#2d5a4c] w-5 h-5 shrink-0" />
//             <span>
//               <strong>
//                 “Você não pula a cada interrupção — permanece composto
//                 em vez de agitado.”
//               </strong>{" "}
//               → Adaptógenos apoiam calma e resiliência sob pressão.
//             </span>
//           </p>
//           <p className="flex items-start gap-4">
//             <CheckCircle className="text-[#2d5a4c] w-5 h-5 shrink-0" />
//             <span>
//               <strong>
//                 “Aquela faxina que você estava adiando? Feita em uma
//                 hora.”
//               </strong>{" "}
//               → Menor carga de estresse = mais capacidade, menos
//               evitação, mais conclusão.
//             </span>
//           </p>
//         </div>
//       </div>
// 
//       {/* POINT 3 */}
//       <div className="space-y-6">
//         <h4 className="text-2xl font-black text-[#1a2e2a] italic border-b-2 border-emerald-500 pb-4 inline-block">
//           3. Axen NeuroFuel® Sustenta Clareza e Foco Enquanto a
//           Reconstrução Acontece
//         </h4>
//         <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
//           Alimentado por Alpha-GPC + L-Theanine + Cafeína Natural
//         </p>
//         <p>
//           Axen NeuroFuel® também é potencializado com Alpha-GPC,
//           precursor direto da acetilcolina — o neurotransmissor
//           essencial para memória e aprendizado.
//         </p>
//         <p>
//           Combinado com L-Theanine e uma microdose de cafeína natural,
//           você tem:
//         </p>
//         <ul className="space-y-2 text-sm font-bold text-gray-600 pl-4 border-l-2 border-slate-100 mb-6">
//           <li>
//             • Foco equilibrado sem os picos e quedas do café comum
//           </li>
//           <li>• Energia limpa e sustentada ao longo do dia</li>
//           <li>• Estado de alerta relaxado, sem ansiedade</li>
//         </ul>
//         <p>
//           Um estudo na <i>Nutritional Neuroscience</i> mostrou que a
//           combinação de L-Theanine com cafeína melhorou
//           significativamente a atenção e a velocidade de processamento
//           em tarefas cognitivas.
//         </p>
//         <div className="space-y-4 pt-4 text-gray-700">
//           {[
//             "Seu humor fica mais estável, em vez de subir e descer o dia todo.",
//             "Você se sente menos reativo. A sensação pesada e “algodão na cabeça” diminui, então você se sente mais presente com amigos e família.",
//             "Pequenos estresses não te derrubam como costumavam. Você se recupera facilmente.",
//             "Você passa o dia sem aquela sensação de “arrasto”. Mais energia e otimismo.",
//           ].map((txt, i) => (
//             <li
//               key={i}
//               className="flex items-center gap-3 font-bold text-sm"
//             >
//               <Zap className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
//               {txt}
//             </li>
//           ))}
//         </div>
//         <p className="text-sm italic text-gray-500 pt-8">
//           Juntas, essas mudanças sutis mas poderosas fazem a vida
//           parecer mais leve, mais calma e mais administrável.
//         </p>
//       </div>
//     </div>
//   );
// };
// 
// export default FeaturesDetail;

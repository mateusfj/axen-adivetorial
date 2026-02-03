// import React from "react";
// import { Star, CheckCircle } from "lucide-react";
// 
// const TestimonialsSection: React.FC = () => {
//   return (
//     <div id="reviews" className="pt-20 text-gray-700 font-sans">
//       <h3 className="text-3xl font-black italic text-[#1a2e2a] mb-6 text-center uppercase tracking-tighter">
//         O Que Outros Estão Dizendo
//       </h3>
//       <p className="max-w-2xl mx-auto text-center text-gray-600 mb-12 italic font-medium leading-relaxed px-4">
//         Eu sei o que você está pensando: “Esses depoimentos são
//         reais?” Honestamente, eu me perguntei a mesma coisa — até eu
//         mesma testar o suplemento e sentir exatamente o que as pessoas
//         estavam descrevendo.
//       </p>
//       <div className="space-y-6">
//         {[
//           {
//             name: "Mary J.",
//             info: "53 anos, menopausa",
//             text: "Adoro esse suplemento! Primeiro, é fácil de tomar e não tem gosto ruim. Me sinto muito mais clara aos 53 anos e no meio da menopausa faz diferença! Juro por ele e não vou ficar sem, nem por um dia.",
//           },
//           {
//             name: "James M.",
//             info: "",
//             text: "Melhor suplemento de memory que já usei. Definitivamente faz o que diz. Mais energia, mais foco mental. Vou pedir de novo. Tenho contado para todo mundo que encontro para experimentar.",
//           },
//           {
//             name: "Robert L.",
//             info: "",
//             text: "Eles são ótimos! Axen não é mágica, mas funciona para nivelar meu foco de uma forma que eu realmente tomo ação na minha lista de tarefas antes que o esquilo dentro de mim diga para fazer outra coisa. É sutil mas eficaz.",
//           },
//           {
//             name: "John P.",
//             info: "76 anos",
//             text: "Surpreendido. Eu estava cético, mas fiquei surpreso com uma melhora distinta na minha memória e clareza mental após apenas algumas semanas. Consigo lembrar sequências de números agora, e não pareço ficar tão confuso na vida diária. Boa notícia aos 76!",
//           },
//           {
//             name: "Jeff R.",
//             info: "",
//             text: "Senti diferença em poucos dias. Depois de tomar por duas semanas, estou impressionado como minha névoa mental praticamente sumiu, e minha energia está nas alturas… meus amigos notaram a diferença e estão experimentando agora… até agora eles também estão impressionados.",
//           },
//         ].map((rev, i) => (
//           <div
//             key={i}
//             className="bg-white p-8 rounded-xl border border-gray-200"
//           >
//             <div className="flex text-[#DFB277] mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} className="w-4 h-4 fill-current" />
//               ))}
//             </div>
//             <p className="italic mb-6 text-sm leading-relaxed">
//               “{rev.text}”
//             </p>
//             <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
//               <p className="font-black text-xs uppercase tracking-widest text-[#1a2e2a]">
//                 — {rev.name}{" "}
//                 {rev.info && (
//                   <span className="font-light opacity-50 ml-2">
//                     ({rev.info})
//                   </span>
//                 )}
//               </p>
//               <div className="flex items-center gap-1.5 text-[10px] text-green-600 font-black uppercase tracking-[0.2em] bg-green-50 px-3 py-1 rounded-xl border border-green-100 self-start md:self-auto">
//                 <div className="bg-green-600 p-0.5 rounded-xl">
//                   <CheckCircle className="w-2.5 h-2.5 text-white" />
//                 </div>
//                 Cliente Verificado
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// 
// export default TestimonialsSection;

// import React from "react";
// import { Zap, Gift, Clock, ShieldCheck, Lock } from "lucide-react";
// import CountdownTimer from "./CountdownTimer";
// 
// const CTASection: React.FC = () => {
//   return (
//     <section id="cta" className="bg-[#1a2e2a] py-32 px-4 text-white font-sans">
//       <div className="max-w-5xl mx-auto text-center">
//         <div className="inline-block bg-[#DFB277] text-[#1a2e2a] px-8 py-3 rounded-xl font-black text-xs uppercase tracking-[0.4em] mb-12">
//           Seu Próximo Passo
//         </div>
// 
//         <h2 className="text-4xl md:text-6xl font-black mb-16 italic leading-tight font-playfair">
//           Então Faz Sentido Experimentar?
//         </h2>
// 
//         <p className="text-xl md:text-2xl text-white/70 mb-20 font-light max-w-3xl mx-auto leading-relaxed">
//           Deixa eu te perguntar isso. Se apenas duas cápsulas por dia te
//           ajudassem a se sentir mais claro, mais calmo e mais focado — sem a
//           queda, a agitação ou o arrasto mental — como seria realmente o seu
//           dia? Quanto mais você conseguiria fazer com esse suporte?
//         </p>
// 
//         <div className="bg-white text-[#1a2e2a] rounded-xl p-10 md:p-20 relative overflow-hidden text-left shadow-2xl">
//           <div className="absolute top-0 right-0 w-80 h-80 bg-[#DFB277]/10 rounded-xl blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
// 
//           <div className="flex flex-col lg:flex-row gap-20 items-center">
//             <div className="w-full lg:w-1/2">
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-[#2d5a4c]/10 blur-3xl rounded-xl"></div>
//                 <img
//                   src="/images/product.png"
//                   alt="Final Product Presentation"
//                   className="w-full rounded-xl relative z-10 transition-transform duration-700 hover:scale-[1.02] object-contain"
//                 />
//               </div>
//             </div>
// 
//             <div className="w-full lg:w-1/2 space-y-10">
//               <div>
//                 <h3 className="text-4xl font-black mb-4">Axen NeuroFuel®</h3>
//                 <p className="text-gray-400 font-bold uppercase tracking-widest text-xs italic">
//                   Agora que você viu a pesquisa e os resultados, este é o
//                   momento natural para experimentar.
//                 </p>
//               </div>
// 
//               <div className="grid grid-cols-1 gap-5 py-8 border-y border-gray-100 text-gray-700 font-bold text-sm">
//                 {[
//                   {
//                     icon: <Zap className="w-5 h-5 text-emerald-500" />,
//                     text: "Os descontos ainda estão ativos",
//                   },
//                   {
//                     icon: <Gift className="w-5 h-5 text-blue-500" />,
//                     text: "Presentes extras incluídos no seu pedido",
//                   },
//                   {
//                     icon: <Clock className="w-5 h-5 text-[#DFB277]" />,
//                     text: "E o estoque ainda está disponível",
//                   },
//                   {
//                     icon: <ShieldCheck className="w-5 h-5 text-[#2d5a4c]" />,
//                     text: "MAIS 30 dias para experimentar sem risco",
//                   },
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-center gap-4">
//                     {item.icon}
//                     <span>{item.text}</span>
//                   </div>
//                 ))}
//               </div>
// 
//               <div className="bg-[#fdfbf7] p-10 rounded-xl border-2 border-[#DFB277]/20 relative">
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#DFB277] text-white px-6 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
//                   🔥 Oferta Por Tempo Limitado
//                 </div>
//                 <div className="flex items-baseline gap-4 mb-10 mt-4 justify-center">
//                   <span className="text-5xl font-black tracking-tighter">
//                     $ 178.20
//                   </span>
//                   <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">
//                     / tub
//                   </span>
//                 </div>
//                 <button className="w-full bg-[#2d5a4c] hover:bg-[#1a2e2a] text-white font-black py-7 rounded-xl text-xl flex flex-col items-center justify-center gap-1 transition-all active:scale-95 group uppercase tracking-tight">
//                   <span>VERIFICAR DISPONIBILIDADE</span>
//                   <span className="text-[10px] opacity-60 font-black">
//                     Verificar estoque agora →
//                   </span>
//                 </button>
//                 <div className="mt-8 flex justify-center gap-2">
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
//                     className="h-4 grayscale opacity-40"
//                     alt="Visa"
//                   />
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
//                     className="h-6 grayscale opacity-40"
//                     alt="MC"
//                   />
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
//                     className="h-6 grayscale opacity-40"
//                     alt="PayPal"
//                   />
//                 </div>
//               </div>
// 
//               <div className="space-y-4">
//                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] text-center">
//                   Expiração da Oferta:
//                 </p>
//                 <CountdownTimer />
//               </div>
//             </div>
//           </div>
//         </div>
// 
//         {/* GUARANTEE BOX */}
//         <div className="mt-32 max-w-3xl mx-auto">
//           <div className="bg-white/5 border border-white/10 p-16 rounded-xl backdrop-blur-xl relative overflow-hidden group">
//             <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
//               <ShieldCheck className="w-40 h-40 text-[#DFB277]" />
//             </div>
//             <h4 className="text-3xl font-black mb-10 italic text-[#DFB277]">
//               30 Dias ou Seu Dinheiro de Volta
//             </h4>
//             <p className="opacity-70 text-lg leading-relaxed mb-12 font-light italic text-gray-200">
//               "Se você não notar diferença, se o suplemento não parecer certo
//               para você, ou mesmo se você simplesmente não gostar... você pode
//               enviar um email para suporte@axen.com e solicitar reembolso. Sem
//               obstáculos. Sem perguntas."
//             </p>
//             <div className="flex items-center gap-4 justify-center opacity-40">
//               <Lock className="w-4 h-4" />
//               <p className="text-[10px] font-black uppercase tracking-[0.3em]">
//                 Criptografia SSL de 256 bits
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// 
// export default CTASection;

// import React from "react";
// import { Eye, Clock } from "lucide-react";
// 
// interface HeroSectionProps {
//   today: string;
// }
// 
// const HeroSection: React.FC<HeroSectionProps> = ({ today }) => {
//   return (
//     <header className="mb-12">
//       <div className="flex flex-wrap items-center gap-4 mb-8">
//         <span className="inline-flex items-center px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] bg-[#DFB277]/10 text-[#a8824f] border border-[#DFB277]/20">
//           <Eye className="w-3.5 h-3.5 mr-2" /> 8.547 pessoas lendo agora
//         </span>
//         <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center">
//           <Clock className="w-3.5 h-3.5 mr-2" /> 4 min de leitura
//         </span>
//       </div>
// 
//       <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 font-playfair italic text-[#1a2e2a]">
//         E Se Eu Te Dissesse Que Um Simples Cogumelo É Capaz De Eliminar
//         a Névoa Mental e Aumentar o Foco em 64%?
//       </h1>
// 
//       <h2 className="text-xl md:text-2xl text-gray-500 font-light mb-12 italic border-l-4 border-[#DFB277] pl-8">
//         Eu Também Achei Que Era Golpe — Então Decidi Testar Eu Mesma.
//       </h2>
// 
//       {/* Main Sarah Image - Hero Lifestyle Segurando Pote */}
//       <div className="relative mb-12 group overflow-hidden rounded-xl">
//         <img
//           src="https://images.unsplash.com/photo-1556911229-bbd4860153f3?auto=format&fit=crop&q=80&w=1200&h=800"
//           alt="Sarah Mitchell holding Axen NeuroFuel tub"
//           className="w-full object-cover aspect-4/3 group-hover:scale-105 transition-transform duration-1000"
//         />
//         <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/80 to-transparent text-white">
//           <p className="text-sm font-bold opacity-80 mb-2 uppercase tracking-widest italic">
//             Pesquisadora & Nutricionista
//           </p>
//           <p className="text-xl font-medium italic">
//             "Eu jurei que era golpe... até ver os dados clínicos e
//             sentir a névoa sumir."
//           </p>
//         </div>
//       </div>
// 
//       <div className="flex items-center gap-5 border-t border-b border-gray-100 py-8 mb-16">
//         <div className="w-16 h-16 rounded-xl border-2 border-[#DFB277] overflow-hidden shrink-0">
//           <img
//             src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150&h=150"
//             alt="Sarah Mitchell Portrait Bio"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div>
//           <p className="font-black text-lg text-[#1a2e2a]">
//             Por Sarah Mitchell
//           </p>
//           <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider leading-tight">
//             Nutricionista Funcional & Pesquisadora de Saúde Cognitiva
//           </p>
//           <p className="text-[10px] text-gray-400 mt-2 font-black uppercase tracking-widest italic">
//             Última atualização: {today}
//           </p>
//         </div>
//       </div>
//     </header>
//   );
// };
// 
// export default HeroSection;

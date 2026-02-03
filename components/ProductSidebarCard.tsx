import React from "react";
import { Star, Zap, Brain, ShieldCheck, Truck } from "lucide-react";

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

export default ProductSidebarCard;

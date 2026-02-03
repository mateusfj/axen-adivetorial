import React from "react";
import { ChevronRight } from "lucide-react";

const MobileStickyButton: React.FC = () => {
  return (
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
  );
};

export default MobileStickyButton;

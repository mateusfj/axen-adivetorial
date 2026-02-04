import React from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const IntroducingSection: React.FC = () => {
  return (
    <div className="bg-[#fdfbf7] p-10 rounded-xl border-2 border-[#DFB277]/20 relative overflow-hidden my-16 text-gray-700">
      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#DFB277] mb-6">
        INTRODUCING
      </h4>
      <h3 className="text-3xl font-black text-[#1a2e2a] mb-6">
        Axen NeuroFuel®
      </h3>
      <p className="text-lg text-gray-500 italic mb-10 leading-relaxed">
        The first formula I tested that supports stress chemistry, neural growth
        signals, and cognitive clarity — all in one simple daily ritual.
      </p>
      <img
        src={`${BASE_PATH}/images/product.png`}
        alt="Axen NeuroFuel tub with powder around it"
        className="w-full rounded-xl mb-10 border border-gray-100 object-contain"
      />
    </div>
  );
};

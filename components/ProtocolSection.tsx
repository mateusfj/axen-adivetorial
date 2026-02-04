import React from "react";
import { Brain, Shield, Zap } from "lucide-react";

export const ProtocolSection: React.FC = () => {
  return (
    <>
      <h3 className="text-2xl font-black italic text-[#1a2e2a] pt-12">
        The NeuroRestore™ Protocol
      </h3>
      <p className="mb-10 text-gray-600 leading-relaxed">
        What makes Axen NeuroFuel® different is that it’s not just “another
        memory supplement.” It’s a three-pronged system designed to attack the
        root cause of neural fatigue:
      </p>

      <div className="space-y-6 my-12 text-gray-700">
        {/* FRENTE 1 */}
        <div className="bg-[#fdfbf7] p-8 rounded-xl border border-[#DFB277]/20 flex flex-col md:flex-row gap-6">
          <div className="w-16 h-16 bg-[#DFB277]/10 rounded-xl flex items-center justify-center shrink-0">
            <Brain className="w-8 h-8 text-[#DFB277]" />
          </div>
          <div className="space-y-4">
            <h4 className="font-black text-[#1a2e2a] uppercase tracking-tight text-xl">
              🧠 PHASE 1: NeuroRestore™ Signal
            </h4>
            <p className="text-sm font-bold text-[#DFB277] uppercase tracking-widest">
              Reactivates neural growth signals
            </p>
            <ul className="text-xs font-bold text-gray-500 space-y-1">
              <li>• Lion’s Mane (standardized extract)</li>
              <li>• Vitamin B9 (active form - methylfolate)</li>
              <li>• Vitamin B12 (active form - methylcobalamina)</li>
            </ul>
            <p className="italic text-gray-600 border-l-2 border-[#DFB277] pl-4 text-sm font-medium">
              “Tells the brain: it’s safe to exit power save mode. You can start
              growing again.”
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
              🛡️ PHASE 2: NeuroRestore™ Shield
            </h4>
            <p className="text-sm font-bold text-[#2d5a4c] uppercase tracking-widest">
              Protects against stress corrosion
            </p>
            <ul className="text-xs font-bold text-gray-500 space-y-1">
              <li>• Rhodiola Rosea (adaptogen extract)</li>
              <li>• L-Theanine (calming amino acid)</li>
            </ul>
            <p className="italic text-gray-600 border-l-2 border-[#2d5a4c] pl-4 text-sm font-medium">
              Blocks the impact of cortisol and keeps the brain in a safe state
              for rebuilding.
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
              ⚡ PHASE 3: NeuroRestore™ Sustain
            </h4>
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest">
              Sustains clarity and focus in the short term
            </p>
            <ul className="text-xs font-bold text-gray-500 space-y-1">
              <li>• Alpha-GPC (acetylcholine precursor)</li>
              <li>• Natural caffeine from green tea (functional microdose)</li>
            </ul>
            <p className="italic text-gray-600 border-l-2 border-emerald-500 pl-4 text-sm font-medium">
              You feel the difference day-to-day while the structural repair
              happens in the background.
            </p>
          </div>
        </div>
      </div>

      {/* FINAL SUMMARY RECAP */}
      <div className="bg-[#1a2e2a] text-white p-10 rounded-xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm italic font-medium opacity-90 leading-relaxed">
          <p>Signal™ reactivates neural growth factors.</p>
          <p>Shield™ protects against the corrosion of modern stress.</p>
          <p>Sustain™ maintains mental clarity while rebuilding happens.</p>
        </div>
        <div className="pt-6 border-t border-white/10">
          <p className="font-black text-[#DFB277] text-lg uppercase tracking-tight mb-2">
            Everything in a single formula.
          </p>
          <p className="text-xs font-bold opacity-60 uppercase tracking-widest">
            No harsh stimulants. No side effects. At a fraction of the cost of
            clinical treatments.
          </p>
        </div>
      </div>
    </>
  );
};

import React from "react";
import { Brain, Star } from "lucide-react";

export const VerdictSection: React.FC = () => {
  return (
    <div className="my-24 py-20 px-10 bg-[#fdfbf7] rounded-xl border-2 border-[#DFB277]/10 text-center">
      <h3 className="text-4xl font-black mb-8 italic text-[#1a2e2a]">
        The Verdict
      </h3>
      <p className="text-2xl font-black text-[#a8824f] mb-12 italic leading-tight">
        "I Came In Skeptical. I Left Eating My Words — And Wanting The Next
        Dose."
      </p>

      <div className="max-w-2xl mx-auto text-gray-700 text-left mb-16 space-y-6 text-sm leading-relaxed italic">
        <p>
          I checked the clinical data. I checked the extraction ratios. I
          checked the quality testing. And then I checked my own brain.
        </p>
        <p>The shift was real.</p>
      </div>

      <div className="bg-white p-12 rounded-xl inline-block border border-gray-200 shadow-xl shadow-black/5">
        <div className="flex justify-center text-[#DFB277] mb-4 gap-1">
          <Star className="w-8 h-8 fill-current" />
          <Star className="w-8 h-8 fill-current" />
          <Star className="w-8 h-8 fill-current" />
          <Star className="w-8 h-8 fill-current" />
          <Star className="w-8 h-8 fill-current opacity-60" />
        </div>
        <p className="text-5xl font-black mb-2 text-[#1a2e2a]">4.6 / 5</p>
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">
          Official Sarah Mitchell Rating
        </p>
      </div>

      <p className="mt-16 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed italic">
        "The formula deserves a 5. The only reason it's not perfect?
        Availability issues."
      </p>

      <div className="mt-12 bg-black text-white p-10 rounded-xl text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Brain className="w-24 h-24" />
        </div>
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#DFB277] mb-6">
          Expert Summary
        </p>
        <p className="text-base font-medium italic opacity-90 leading-relaxed mb-4">
          "If you want clearer thinking, more stable focus, and a daily ritual
          that feels more like self-care than a chore, give Axen NeuroFuel® 8
          weeks."
        </p>
        <p className="text-sm font-bold border-t border-white/10 pt-6 mt-6 opacity-60">
          This powerful daily supplement delivers cleaner thinking and smoother
          energy — without giant pills or a bad taste.
        </p>
      </div>
    </div>
  );
};

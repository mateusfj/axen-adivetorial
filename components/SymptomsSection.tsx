import React from "react";
import { Target, Heart, Brain, Home } from "lucide-react";

export const SymptomsSection: React.FC = () => {
  return (
    <>
      <h3 className="text-xl font-black italic text-[#1a2e2a] pt-12">
        How Does "Brain Fog" Show Up In Your Life?
      </h3>
      <p>If you recognize these daily slips, you're not alone:</p>

      <div className="grid md:grid-cols-2 gap-6 my-12 text-gray-700">
        <div className="bg-white border border-gray-100 p-8 rounded-xl hover:bg-slate-50 transition-colors">
          <Target className="text-[#2d5a4c] w-10 h-10 mb-4" />
          <h4 className="font-black text-lg mb-3 uppercase tracking-wide">
            Focus Slips Away
          </h4>
          <p className="text-sm leading-relaxed">
            You can't concentrate on simple tasks, you don't remember what needs
            to be done… words get jumbled, nothing sticks, and your brain
            wanders no matter how hard you try.
          </p>
        </div>
        <div className="bg-white border border-gray-100 p-8 rounded-xl hover:bg-slate-50 transition-colors">
          <Heart className="text-red-400 w-10 h-10 mb-4" />
          <h4 className="font-black text-lg mb-3 uppercase tracking-wide">
            Relationships
          </h4>
          <p className="text-sm leading-relaxed">
            You zone out while your partner or kids are talking. You forget
            conversations you just had, or forget to reply to a message.
          </p>
        </div>
        <div className="bg-white border border-gray-100 p-8 rounded-xl hover:bg-slate-50 transition-colors">
          <Brain className="text-[#DFB277] w-10 h-10 mb-4" />
          <h4 className="font-black text-lg mb-3 uppercase tracking-wide">
            Memory Lapses
          </h4>
          <p className="text-sm leading-relaxed">
            You miss the time to pick someone up, forget a birthday, or blank on
            a simple detail — and you see that look of worry.
          </p>
        </div>
        <div className="bg-white border border-gray-100 p-8 rounded-xl hover:bg-slate-50 transition-colors">
          <Home className="text-blue-400 w-10 h-10 mb-4" />
          <h4 className="font-black text-lg mb-3 uppercase tracking-wide">
            Social Life
          </h4>
          <p className="text-sm leading-relaxed">
            It's your turn to host family — no big deal — but you get overwhelmed
            and give up. When you can't get organized, your confidence plummets.
          </p>
        </div>
      </div>

      <div className="text-center py-10">
        <p className="text-lg font-light text-gray-400 italic">
          "If these moments are piling up, they’re probably pointing to
          something bigger."
        </p>
      </div>
    </>
  );
};

import React from "react";
import { CheckCircle, Zap } from "lucide-react";

export const BenefitsDetailSection: React.FC = () => {
  return (
    <div className="space-y-20 text-gray-700">
      {/* POINT 1 */}
      <div className="space-y-6">
        <h4 className="text-xl font-black text-[#1a2e2a] italic border-b-2 border-[#DFB277] pb-4 inline-block">
          1. Axen NeuroFuel® Reactivates Neural Growth Signals
        </h4>
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
          Powered by Lion’s Mane + Vitamins B9 and B12
        </p>
        <p>
          Axen NeuroFuel® is formulated with nature’s brain activator: Lion’s
          Mane. This super compound stimulates the production of neural growth
          factors — the signals that help brain cells stay healthy and
          communicate efficiently over time.*
        </p>
        <p>
          A study published in <i>Phytotherapy Research</i> showed that
          participants who took Lion’s Mane for 16 weeks showed significant
          improvement in cognitive function compared to the placebo group.
        </p>
        <div className="space-y-3 mt-6">
          <div className="flex gap-4 bg-white p-6 rounded-xl border border-gray-200 font-bold text-sm leading-relaxed">
            <CheckCircle className="text-[#DFB277] w-5 h-5 shrink-0" />
            <span>
              Everyday memory becomes sharp — No more losing your train of
              thought mid-sentence, forgetting appointments, or blanking on
              simple facts.
            </span>
          </div>
          <div className="flex gap-4 bg-white p-6 rounded-xl border border-gray-200 font-bold text-sm leading-relaxed">
            <CheckCircle className="text-[#DFB277] w-5 h-5 shrink-0" />
            <span>
              You get things done — You go from email → meeting → to-do list
              without getting lost, freezing, or forgetting what you were doing.
            </span>
          </div>
          <div className="flex gap-4 bg-white p-6 rounded-xl border border-gray-200 font-bold text-sm leading-relaxed">
            <CheckCircle className="text-[#DFB277] w-5 h-5 shrink-0" />
            <span>
              Your focus stays steady — So you aren't sharp in the morning and
              jumbled by noon.
            </span>
          </div>
        </div>
        <p className="text-sm italic text-gray-500 pt-4">
          Bit by bit, the clutter clears and your brain feels “yours” again.
        </p>
      </div>

      {/* POINT 2 */}
      <div className="space-y-6">
        <h4 className="text-xl font-black text-[#1a2e2a] italic border-b-2 border-[#2d5a4c] pb-4 inline-block">
          2. Axen NeuroFuel® Silences Stress "Alarms"
        </h4>
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
          Powered by Rhodiola Rosea
        </p>
        <p>
          Axen NeuroFuel® contains powerful adaptogens like Rhodiola Rosea.
          These potent ingredients prepare your body to respond to stress
          signals more smoothly.
        </p>
        <p>
          A study in the <i>Journal of Ethnopharmacology</i> demonstrated that
          Rhodiola significantly reduced mental fatigue symptoms in stressed
          professionals after just 4 weeks. Instead of gritting your teeth to
          get through tasks, you feel steady, calm, and mentally present.
        </p>
        <div className="bg-slate-50 p-8 rounded-xl space-y-6 text-sm text-gray-700 border border-slate-200">
          <p className="flex items-start gap-4">
            <CheckCircle className="text-[#2d5a4c] w-5 h-5 shrink-0" />
            <span>
              <strong>“Your patience returns, even on chaotic days.”</strong> →
              A smoother stress response = less reactivity, more emotional
              capacity.
            </span>
          </p>
          <p className="flex items-start gap-4">
            <CheckCircle className="text-[#2d5a4c] w-5 h-5 shrink-0" />
            <span>
              <strong>
                “You don’t jump at every interruption — you stay composed
                instead of agitated.”
              </strong>{" "}
              → Adaptogens support calm and resilience under pressure.
            </span>
          </p>
          <p className="flex items-start gap-4">
            <CheckCircle className="text-[#2d5a4c] w-5 h-5 shrink-0" />
            <span>
              <strong>
                “That house cleaning you were putting off? Done in an hour.”
              </strong>{" "}
              → Lower stress load = more capacity, less avoidance, more
              completion.
            </span>
          </p>
        </div>
      </div>

      {/* POINT 3 */}
      <div className="space-y-6">
        <h4 className="text-xl font-black text-[#1a2e2a] italic border-b-2 border-emerald-500 pb-4 inline-block">
          3. Axen NeuroFuel® Sustains Clarity and Focus While Rebuilding Happens
        </h4>
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
          Powered by Alpha-GPC + L-Theanine + Natural Caffeine
        </p>
        <p>
          Axen NeuroFuel® is also boosted with Alpha-GPC, a direct precursor to
          acetylcholine — the essential neurotransmitter for memory and
          learning.
        </p>
        <p>
          Combined with L-Theanine and a microdose of natural caffeine, you get:
        </p>
        <ul className="space-y-2 text-sm font-bold text-gray-600 pl-4 border-l-2 border-slate-100 mb-6">
          <li>
            • Balanced focus without the jitters and crashes of regular coffee
          </li>
          <li>• Clean, sustained energy throughout the day</li>
          <li>• Relaxed alertness, without anxiety</li>
        </ul>
        <p>
          A study in <i>Nutritional Neuroscience</i> showed that the combination
          of L-Theanine with caffeine significantly improved attention and
          processing speed in cognitive tasks.
        </p>
        <div className="space-y-4 pt-4 text-gray-700">
          {[
            "Your mood becomes more stable, instead of going up and down all day.",
            "You feel less reactive. The heavy “cotton-head” feeling decreases, so you feel more present with friends and family.",
            "Small stresses don't take you down like they used to. You bounce back easily.",
            "You get through the day without that “dragged down” sensation. More energy and optimism.",
          ].map((txt, i) => (
            <li key={i} className="flex items-center gap-3 font-bold text-sm">
              <Zap className="w-5 h-5 text-emerald-500 shrink-0" /> {txt}
            </li>
          ))}
        </div>
        <p className="text-sm italic text-gray-500 pt-8">
          Together, these subtle but powerful changes make life feel lighter,
          calmer, and more manageable.
        </p>
      </div>
    </div>
  );
};

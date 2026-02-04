import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

export const ScienceSection: React.FC = () => {
  return (
    <>
      <h3 className="text-xl font-black italic text-[#1a2e2a] pt-12">
        What’s Really Behind These Memory Lapses?
      </h3>
      <div className="space-y-6 text-gray-700">
        <p>
          If you’ve been feeling off — foggy, forgetful, unfocused — you’re not
          lazy. You’re not just “getting old.”
        </p>
        <p>
          That jumbled feeling, of not being able to think? That's what
          scientists call <strong>“Neural Fatigue”</strong> — the progressive
          depletion of the biological signals that allow the brain to repair
          itself.
        </p>

        <div className="bg-[#f0f4f3] p-8 rounded-xl border border-[#2d5a4c]/10 italic">
          "Think of it like a cell phone with a low battery. The screen gets
          dimmer, background processes shut down… everything works, just slower.
          The brain does exactly the same thing."
        </div>

        <h4 className="text-xl font-black text-[#1a2e2a] mt-8">
          What Science Has Discovered:
        </h4>
        <p>
          Studies show that after age 40, our brain progressively reduces the
          production of a protein called{" "}
          <strong>NGF — Nerve Growth Factor</strong>.
        </p>

        <p>NGF is the biological signal responsible for:</p>
        <ul className="space-y-3 font-medium text-gray-700">
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-500 w-5 h-5 shrink-0" /> Keeping
            neurons alive
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />{" "}
            Preserving neural connections
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-500 w-5 h-5 shrink-0" /> Allowing
            the brain to form new synapses
          </li>
        </ul>

        <p>
          When the brain doesn't get enough NGF, it enters what scientists call
          “survival mode”:
        </p>
        <ul className="space-y-2 text-sm italic text-gray-600 pl-4 border-l-2 border-slate-200">
          <li>• It reduces the formation of new connections.</li>
          <li>• It slows down memory consolidation.</li>
          <li>• It decreases processing speed.</li>
        </ul>

        <p>
          Not because you’re “too old.” But because the system decided it’s not
          safe to invest in performance.
        </p>

        <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 my-12">
          <h4 className="text-lg font-black text-[#1a2e2a] mb-6 uppercase tracking-wider">
            Neural Fatigue Builds Up When:
          </h4>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-4">
              <XCircle className="text-red-500 w-6 h-6 shrink-0" />
              <span className="text-sm font-bold leading-relaxed">
                Stress hormones stay elevated all day
              </span>
            </div>
            <div className="flex items-start gap-4">
              <XCircle className="text-red-500 w-6 h-6 shrink-0" />
              <span className="text-sm font-bold leading-relaxed">
                Unfinished tasks buzz in the back of your mind
              </span>
            </div>
            <div className="flex items-start gap-4">
              <XCircle className="text-red-500 w-6 h-6 shrink-0" />
              <span className="text-sm font-bold leading-relaxed">
                Your gut and immune system send the "wrong" signals
              </span>
            </div>
            <div className="flex items-start gap-4">
              <XCircle className="text-red-500 w-6 h-6 shrink-0" />
              <span className="text-sm font-bold leading-relaxed">
                Digital devices pull your brain away from focus
              </span>
            </div>
          </div>
        </div>

        <p>
          It's rarely one big thing. It's everything hitting you at once — until
          your brain is overstimulated, oversaturated, and completely drained.
        </p>
        <p>
          Of course, you can add caffeine… more stimulation. But that’s like
          adding a marching band to the chaos.
        </p>
      </div>
    </>
  );
};

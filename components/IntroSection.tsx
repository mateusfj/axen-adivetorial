import React from "react";
import { ClinicalResultsSection } from "./ClinicalResultsSection";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const IntroSection: React.FC = () => {
  return (
    <>
      <h3 className="text-xl font-black text-[#DFB277] italic leading-tight">
        I Swore This Was Another One Of Those Internet "Tricks" (Honey Trick,
        Pink Salt Trick) But No — See How I Had To Eat My Words
      </h3>

      <p>
        I test supplements for a living. I've consulted for wellness companies,
        sat on expert panels, and tested more formulas on my own body than I
        care to admit.
      </p>

      <p>
        And here's the truth:{" "}
        <strong>Nine times out of ten, I tell people to save their money.</strong>
      </p>

      <p>
        So when yet another mushroom product started going viral on the
        internet, I had the same reaction you probably did:
      </p>

      <div className="bg-[#fdfbf7] border-l-4 border-[#DFB277] p-8 rounded-xl italic space-y-4 font-medium text-gray-700">
        <p>"Oh, look, the internet discovered mushrooms… again."</p>
        <p>
          "I've tried the mushroom coffee. Spat it in the sink. Felt nothing."
        </p>
        <p>
          "A supplement? Eliminating brain fog? I'll believe it when I feel it."
        </p>
      </div>

      <p>So many viral wellness products follow the same script:</p>
      <div className="bg-red-50 text-red-700 p-4 rounded-xl font-black text-center uppercase tracking-widest text-sm border border-red-100 shadow-sm relative overflow-hidden">
        Huge Promises → Tiny Dose → Pretty Label → Zero Results
      </div>

      <p>
        So I fully expected this Lion’s Mane supplement to be yet another
        overrated failure. Until a document landed on my desk that made me say:{" "}
        <strong>"Wait, really?"</strong>
      </p>

      <p>
        A study published in the{" "}
        <i>International Journal of Medicinal Mushrooms</i> showed that Lion’s
        Mane significantly increased NGF (Nerve Growth Factor) levels in adults
        after just 8 weeks of use.
      </p>

      <p>
        This wasn’t a "brand-sponsored influencer test." These were real adults
        taking the product daily… with tracked results.
      </p>

      <ClinicalResultsSection />

      <p>
        Still, I wasn’t convinced. Numbers are one thing. Real life is another.
      </p>
      <p>
        So I sent the study and the formula to a few nutritionist friends who
        test products the same way I do. I expected more eye-rolling. Instead, I
        got this:
      </p>

      <div className="grid md:grid-cols-1 gap-6 text-gray-700 mt-8 mb-12">
        <div className="bg-white p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#2d5a4c] shadow-lg shadow-black/5 relative hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute -top-3 left-6 px-3 py-1 bg-[#2d5a4c] text-white text-[10px] uppercase font-black tracking-widest rounded-full">
            Verified Expert
          </div>
          <p className="italic text-lg font-medium text-[#1a2e2a] leading-relaxed">
            "The results were stronger than I expected."
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#DFB277] shadow-lg shadow-black/5 relative hover:-translate-y-1 transition-transform duration-300 ml-0 md:ml-8">
          <div className="absolute -top-3 left-6 px-3 py-1 bg-[#DFB277] text-white text-[10px] uppercase font-black tracking-widest rounded-full">
            Clinical Review
          </div>
          <p className="italic text-lg font-medium text-[#1a2e2a] leading-relaxed">
            "It outperformed every 'serious' supplement I've tested this year."
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#1a2e2a] shadow-lg shadow-black/5 relative hover:-translate-y-1 transition-transform duration-300 ml-0 md:ml-16">
          <div className="absolute -top-3 left-6 px-3 py-1 bg-[#1a2e2a] text-white text-[10px] uppercase font-black tracking-widest rounded-full">
            Patient Feedback
          </div>
          <p className="italic text-lg font-medium text-[#1a2e2a] leading-relaxed">
            "It was the last thing I thought would help my clients… and it did."
          </p>
        </div>
      </div>
    </>
  );
};

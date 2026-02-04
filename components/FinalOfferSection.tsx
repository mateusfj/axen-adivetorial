import React from "react";
import { Zap, ShieldCheck, Gift, Clock, Lock } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const FinalOfferSection: React.FC = () => {
  return (
    <section id="cta" className="bg-[#1a2e2a] py-32 px-4 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block bg-[#DFB277] text-[#1a2e2a] px-8 py-3 rounded-xl font-black text-xs uppercase tracking-[0.4em] mb-12">
          Your Next Step
        </div>

        <h2 className="text-3xl md:text-5xl font-black mb-16 italic leading-tight font-playfair">
          So Does It Make Sense To Try?
        </h2>

        <p className="text-lg md:text-xl text-white/70 mb-20 font-light max-w-3xl mx-auto leading-relaxed">
          Let me ask you this. If just two capsules a day helped you feel
          clearer, calmer, and more focused — without the crash, the jitters, or
          the mental drag — what would your day actually look like? How much
          more could you achieve with that support?
        </p>

        <div className="bg-white text-[#1a2e2a] rounded-xl p-10 md:p-20 relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#DFB277]/10 rounded-xl blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#2d5a4c]/10 blur-3xl rounded-xl"></div>
                <img
                  src={`${BASE_PATH}/images/product.png`}
                  alt="Final Product Presentation"
                  className="w-full rounded-xl relative z-10 transition-transform duration-700 hover:scale-[1.02] object-contain"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-10">
              <div>
                <h3 className="text-4xl font-black mb-4">Axen NeuroFuel®</h3>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs italic">
                  Now that you've seen the research and the results, this is the
                  natural moment to try.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 py-8 border-y border-gray-100 text-gray-700 font-bold text-sm">
                {[
                  {
                    icon: <Zap className="w-5 h-5 text-emerald-500" />,
                    text: "Discounts are still active",
                  },
                  {
                    icon: <Gift className="w-5 h-5 text-blue-500" />,
                    text: "Extra gifts included with your order",
                  },
                  {
                    icon: <Clock className="w-5 h-5 text-[#DFB277]" />,
                    text: "And stock is still available",
                  },
                  {
                    icon: <ShieldCheck className="w-5 h-5 text-[#2d5a4c]" />,
                    text: "PLUS 30 days to try risk-free",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#fdfbf7] p-10 rounded-xl border-2 border-[#DFB277]/20 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#DFB277] text-white px-6 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                  🔥 Limited Time Offer
                </div>
                <button className="w-full bg-[#2d5a4c] hover:bg-[#1a2e2a] text-white font-black py-7 rounded-xl text-xl flex flex-col items-center justify-center gap-1 transition-all active:scale-95 group uppercase tracking-tight">
                  <span>CHECK AVAILABILITY</span>
                  <span className="text-[10px] opacity-60 font-black">
                    Check stock now →
                  </span>
                </button>
                <div className="mt-8 flex justify-center gap-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                    className="h-4 grayscale opacity-40"
                    alt="Visa"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    className="h-6 grayscale opacity-40"
                    alt="MC"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                    className="h-6 grayscale opacity-40"
                    alt="PayPal"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] text-center">
                  Offer Expiration:
                </p>
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>

        {/* GUARANTEE BOX */}
        <div className="mt-32 max-w-3xl mx-auto">
          <div className="bg-white/5 border border-white/10 p-16 rounded-xl backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck className="w-40 h-40 text-[#DFB277]" />
            </div>
            <h4 className="text-2xl font-black mb-10 italic text-[#DFB277]">
              30 Days or Your Money Back
            </h4>
            <p className="opacity-70 text-lg leading-relaxed mb-12 font-light italic text-gray-200">
              "If you don't notice a difference, if the supplement doesn't seem
              right for you, or even if you simply don't like it... you can email
              support@axen.com and request a refund. No hurdles. No questions
              asked."
            </p>
            <div className="flex items-center gap-4 justify-center opacity-40">
              <Lock className="w-4 h-4" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em]">
                256-bit SSL Encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Star, CheckCircle } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <div id="reviews" className="pt-20 text-gray-700">
      <h3 className="text-2xl font-black italic text-[#1a2e2a] mb-6 text-center uppercase tracking-tighter">
        What Others Are Saying
      </h3>
      <p className="max-w-2xl mx-auto text-center text-gray-600 mb-12 italic font-medium leading-relaxed px-4">
        I know what you're thinking: “Are these testimonials real?” Honestly, I
        wondered the same thing — until I tested the supplement myself and felt
        exactly what people were describing.
      </p>
      <div className="space-y-6">
        {[
          {
            name: "Mary J.",
            info: "53 years old, menopause",
            text: "I love this supplement! First, it's easy to take and doesn't taste bad. I feel so much clearer at 53 and in the middle of menopause it makes a difference! I swear by it and won't go a day without it.",
          },
          {
            name: "James M.",
            info: "",
            text: "Best memory supplement I've ever used. Definitely does what it says. More energy, more mental focus. I'll be ordering again. I've been telling everyone I meet to try it.",
          },
          {
            name: "Robert L.",
            info: "",
            text: "These are great! Axen isn't magic, but it works to level out my focus in a way that I actually take action on my to-do list before the squirrel inside me tells me to do something else. It's subtle but effective.",
          },
          {
            name: "John P.",
            info: "76 years old",
            text: "Surprised. I was skeptical, but was surprised by a distinct improvement in my memory and mental clarity after just a few weeks. I can remember number sequences now, and don't seem to get as confused in daily life. Good news at 76!",
          },
          {
            name: "Jeff R.",
            info: "",
            text: "Felt a difference in just a few days. After taking it for two weeks, I'm impressed how my brain fog is practically gone, and my energy is through the roof… my friends noticed the difference and are trying it now… so far they're also impressed.",
          },
        ].map((rev, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl border border-gray-200"
          >
            <div className="flex text-[#DFB277] mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="italic mb-6 text-sm leading-relaxed">“{rev.text}”</p>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <p className="font-black text-xs uppercase tracking-widest text-[#1a2e2a]">
                — {rev.name}{" "}
                {rev.info && (
                  <span className="font-light opacity-50 ml-2">
                    ({rev.info})
                  </span>
                )}
              </p>
              <div className="flex items-center gap-1.5 text-[10px] text-[#55C478] font-black uppercase tracking-[0.2em] bg-[#55C478]/10 px-3 py-1 rounded-xl border border-[#55C478]/20 self-start md:self-auto">
                <div className="bg-[#55C478] p-0.5 rounded-xl">
                  <CheckCircle className="w-2.5 h-2.5 text-white" />
                </div>
                Verified Customer
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

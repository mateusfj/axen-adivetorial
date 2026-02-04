import React from "react";
import { CheckCircle } from "lucide-react";

export const WhatYouGetSection: React.FC = () => {
  return (
    <div className="my-24 bg-white p-12 rounded-xl border border-gray-200 text-gray-700">
      <h3 className="text-2xl font-black mb-2 italic uppercase tracking-tighter">
        What You're Actually Getting
      </h3>
      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
        Everything included in every tub:
      </p>
      <div className="grid md:grid-cols-1 gap-6">
        {[
          "Full 30-day supply — 30 servings, 1 per day is all you need",
          "6 Clinical Ingredients — Lion’s Mane, Alpha-GPC, Rhodiola Rosea, L-Theanine, Vitamin B9, Vitamin B12",
          "Clinical Dose Per Serving — A clinically significant amount of functional compounds",
          "Clean Ingredients — Vegan, gluten-free, non-GMO. Manufactured in certified facility",
          "Tasty & Easy — Pleasant to take. Ease of use. Can be used with your favorite beverage.",
        ].map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-slate-50 p-6 rounded-xl border border-slate-200 font-bold"
          >
            <CheckCircle className="w-6 h-6 text-[#55C478] shrink-0" /> {it}
          </div>
        ))}
      </div>
    </div>
  );
};

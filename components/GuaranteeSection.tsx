import React from "react";

export const GuaranteeSection: React.FC = () => {
  return (
    <div className="my-24 space-y-10 text-gray-700">
      <h3 className="text-2xl font-black italic text-[#1a2e2a]">
        What If I Don't Feel Anything?
      </h3>
      <p className="leading-relaxed">
        Axen offers a 30-day money-back guarantee on your first order.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          "If you don't notice a difference…",
          "If the supplement doesn't seem right for you…",
          "Or even if you simply don't like it…",
        ].map((cond, i) => (
          <div
            key={i}
            className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-xs font-bold text-center italic"
          >
            {cond}
          </div>
        ))}
      </div>
      <p className="leading-relaxed">
        You can email <strong>support@axen.com</strong> within 30 days and
        request a refund.
      </p>
      <div className="bg-[#f0f4f3] p-10 rounded-xl border border-[#2d5a4c]/10 text-center">
        <p className="text-xl font-black text-[#2d5a4c] italic mb-6">
          No hurdles. No complicated forms. No questions asked.
        </p>
        <p className="text-sm font-medium opacity-60">
          As someone who has tested hundreds of supplements, I can tell you
          this: a company that offers a real 30-day guarantee is a company that
          trusts its formula.
        </p>
      </div>
    </div>
  );
};

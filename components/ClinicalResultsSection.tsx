import React from "react";

export const ClinicalResultsSection: React.FC = () => {
  return (
    <div className="my-16 bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="bg-[#2d5a4c] p-8 text-white">
        <h4 className="text-xl font-black italic text-[#DFB277]">
          Proven Clinical Results
        </h4>
        <p className="text-xs font-bold uppercase tracking-widest opacity-80 mt-2">
          After 8 Weeks, Participants Reported:
        </p>
      </div>
      <div className="p-0">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-gray-200">
            <tr>
              <th className="px-8 py-4 text-xs font-black uppercase tracking-widest text-[#1a2e2a]/60">
                Benefit
              </th>
              <th className="px-8 py-4 text-xs font-black uppercase tracking-widest text-[#1a2e2a]/60 text-right">
                Improvement
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-bold">
            {[
              {
                label: "Cognition improvement",
                val: "74%",
                percentage: 74,
                color: "bg-[#2d5a4c]", // Deep Brand Green
              },
              {
                label: "Focus increase",
                val: "64%",
                percentage: 64,
                color: "bg-[#4a6b5d]", // Muted Sage Green
              },
              {
                label: "Brain fog reduction",
                val: "58%",
                percentage: 58,
                color: "bg-[#5c7a85]", // Sober Slate Blue
              },
              {
                label: "Memory improvement",
                val: "44%",
                percentage: 44,
                color: "bg-[#a88d60]", // Muted Gold
              },
            ].map((item, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors group">
                <td className="px-8 py-6 align-middle">
                  <span className="text-lg text-[#1a2e2a] block mb-2">{item.label}</span>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className={`${item.color} h-2 rounded-full transition-all duration-1000 ease-out w-0 group-hover:w-[var(--target-width)]`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-8 py-6 text-right align-top">
                  <span className="text-3xl font-black text-[#1a2e2a]">
                    {item.val}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-8 bg-slate-50 border-t border-gray-100 text-gray-700">
        <p className="text-xs text-gray-600 font-bold italic">
          * Data published and verified by third parties — something most
          mushroom products cannot offer.
        </p>
      </div>
    </div>
  );
};

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
          <thead className="bg-slate-50 border-b border-gray-100">
            <tr>
              <th className="px-8 py-4 text-xs font-black uppercase tracking-widest text-gray-400">
                Benefit
              </th>
              <th className="px-8 py-4 text-xs font-black uppercase tracking-widest text-gray-400 text-right">
                Improvement
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-bold">
            {[
              {
                label: "Brain fog reduction",
                val: "58%",
                color: "bg-blue-500",
              },
              {
                label: "Cognition improvement",
                val: "74%",
                color: "bg-[#2d5a4c]",
              },
              {
                label: "Memory improvement",
                val: "44%",
                color: "bg-[#DFB277]",
              },
              {
                label: "Focus increase",
                val: "64%",
                color: "bg-emerald-500",
              },
            ].map((item, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-8 py-6 text-gray-700">{item.label}</td>
                <td className="px-8 py-6 text-right">
                  <span className="text-2xl font-black text-[#1a2e2a]">
                    {item.val}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-8 bg-slate-50 border-t border-gray-100 text-gray-700">
        <p className="text-xs text-gray-400 font-medium italic">
          * Data published and verified by third parties — something most
          mushroom products cannot offer.
        </p>
      </div>
    </div>
  );
};

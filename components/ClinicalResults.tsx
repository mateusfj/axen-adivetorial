import React from "react";

const ClinicalResults: React.FC = () => {
  return (
    <div className="my-16 bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="bg-[#2d5a4c] p-8 text-white">
        <h4 className="text-2xl font-black italic text-[#DFB277]">
          Resultados Clínicos Comprovados
        </h4>
        <p className="text-xs font-bold uppercase tracking-widest opacity-80 mt-2">
          Após 8 Semanas, Os Participantes Relataram:
        </p>
      </div>
      <div className="p-0">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-gray-100">
            <tr>
              <th className="px-8 py-4 text-xs font-black uppercase tracking-widest text-gray-400">
                Benefício
              </th>
              <th className="px-8 py-4 text-xs font-black uppercase tracking-widest text-gray-400 text-right">
                Melhoria
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-bold">
            {[
              {
                label: "Redução da névoa mental",
                val: "58%",
                color: "bg-blue-500",
              },
              {
                label: "Melhoria na cognição",
                val: "74%",
                color: "bg-[#2d5a4c]",
              },
              {
                label: "Melhoria na memória",
                val: "44%",
                color: "bg-[#DFB277]",
              },
              {
                label: "Aumento do foco",
                val: "64%",
                color: "bg-emerald-500",
              },
            ].map((item, i) => (
              <tr
                key={i}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="px-8 py-6 text-gray-700">
                  {item.label}
                </td>
                <td className="px-8 py-6 text-right">
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
        <p className="text-xs text-gray-400 font-medium italic">
          * Dados publicados e verificados por terceiros — algo que a
          maioria dos produtos de cogumelo não consegue oferecer.
        </p>
      </div>
    </div>
  );
};

export default ClinicalResults;

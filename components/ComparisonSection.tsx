import React from "react";
import { AlertTriangle, CheckCircle, X } from "lucide-react";

export const ComparisonSection: React.FC = () => {
  return (
    <div className="my-24 bg-black text-white p-12 rounded-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <AlertTriangle className="w-24 h-24" />
      </div>
      <h3 className="text-2xl font-black italic text-[#DFB277] mb-10">
        Why Most Products Fail
      </h3>
      <div className="grid md:grid-cols-2 gap-10 text-gray-200">
        <div className="space-y-6">
          <h4 className="font-black text-red-400 uppercase tracking-widest text-xs">
            ❌ Most Brands Use:
          </h4>
          <ul className="space-y-4 text-xs font-bold text-gray-300">
            <li className="flex items-center gap-3">
              <X className="w-4 h-4 text-red-500 shrink-0" /> Low dose powders
            </li>
            <li className="flex items-center gap-3">
              <X className="w-4 h-4 text-red-500 shrink-0" /> Mycelium grown on grain (starch)
            </li>
            <li className="flex items-center gap-3">
              <X className="w-4 h-4 text-red-500 shrink-0" /> Toxic alcohol-based extraction
            </li>
            <li className="flex items-center gap-3">
              <X className="w-4 h-4 text-red-500 shrink-0" /> Generic vitamin forms
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-black text-[#55C478] uppercase tracking-widest text-xs">
            ✅ Axen NeuroFuel® Delivers:
          </h4>
          <ul className="space-y-4 text-xs font-bold">
            <li className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-[#55C478] shrink-0" />{" "}
              Clinical dose per serving
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-[#55C478] shrink-0" /> 6
              synergistic ingredients
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-[#55C478] shrink-0" />{" "}
              Fruiting body extracts
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-[#55C478] shrink-0" /> Active
              vitamin forms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

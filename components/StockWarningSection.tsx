import React from "react";
import { AlertTriangle } from "lucide-react";

export const StockWarningSection: React.FC = () => {
  return (
    <div className="my-16 bg-red-50 border border-red-100 p-12 rounded-xl relative overflow-hidden text-gray-700">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <AlertTriangle className="w-20 h-20 text-red-600" />
      </div>
      <h4 className="flex items-center gap-3 text-red-700 font-black uppercase tracking-widest text-xs mb-8">
        <AlertTriangle className="w-5 h-5" /> Quick Warning About Stock
      </h4>
      <div className="space-y-6 italic leading-relaxed">
        <p>
          While finalizing this article, I received a message from someone on
          the Axen team:
        </p>
        <blockquote className="bg-white/50 p-8 rounded-xl border-l-4 border-red-400 text-red-800 font-bold">
          “Our last promotion sold out most of our stock. We’ve reserved a
          small batch just for your readers — but once these are gone, we can't
          guarantee they'll be back before next month.”
        </blockquote>
        <p className="text-sm opacity-70">
          For the record: I rarely get messages like this — which is why I'm
          passing it on.
        </p>
      </div>
    </div>
  );
};

import React from "react";
import { AlertTriangle } from "lucide-react";
import { ProductSidebarCard } from "./ProductSidebarCard";

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block w-full lg:w-95 lg:sticky lg:top-28 z-40 order-2">
      <ProductSidebarCard />

      {/* STOCK WARNING (Right Sidebar) */}
      <div className="mt-8 hidden lg:block bg-red-50 rounded-xl p-8 border border-red-100 relative overflow-hidden text-gray-700">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <AlertTriangle className="w-12 h-12 text-red-600" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-700 mb-4">
          Stock Warning
        </p>
        <h4 className="text-xl font-bold mb-4 italic text-red-800">
          Message from the Axen Team
        </h4>
        <p className="text-xs text-red-700/70 leading-relaxed mb-6 italic">
          “Our last promotion sold out most of our stock. We’ve reserved a small
          batch just for your readers.”
        </p>
        <div className="flex items-center gap-3 text-red-600 font-black text-[10px] uppercase tracking-widest">
          <div className="w-2 h-2 rounded-xl bg-red-600 animate-ping"></div>
          Limited Batch Available
        </div>
      </div>
    </aside>
  );
};

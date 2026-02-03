import React from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";

const ComparisonSection: React.FC = () => {
  return (
    <div className="my-24 bg-[#1a2e2a] text-white p-12 rounded-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <AlertTriangle className="w-24 h-24" />
      </div>
      <h3 className="text-3xl font-black italic text-[#DFB277] mb-10">
        Por Que a Maioria Dos Produtos Falha
      </h3>
      <div className="grid md:grid-cols-2 gap-10 text-gray-200">
        <div className="space-y-6">
          <h4 className="font-black text-red-400 uppercase tracking-widest text-xs">
            ❌ A Maioria Das Marcas Usa:
          </h4>
          <ul className="space-y-4 text-xs font-bold opacity-60">
            <li>• Pós de baixa dose</li>
            <li>• Micélio cultivado em grãos (amido)</li>
            <li>• Extração à base de álcool tóxico</li>
            <li>• Formas genéricas de vitaminas</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-black text-green-400 uppercase tracking-widest text-xs">
            ✅ Axen NeuroFuel® Entrega:
          </h4>
          <ul className="space-y-4 text-xs font-bold">
            <li className="flex gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />{" "}
              Dose clínica por porção
            </li>
            <li className="flex gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />{" "}
              6 ingredientes sinérgicos
            </li>
            <li className="flex gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />{" "}
              Extratos de corpo frutífero
            </li>
            <li className="flex gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />{" "}
              Formas ativas de vitaminas
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;

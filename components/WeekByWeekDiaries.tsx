import React from "react";
import { Clock, CheckCircle, Heart, Quote } from "lucide-react";

const WeekByWeekDiaries: React.FC = () => {
  return (
    <section>
      <h3 className="text-3xl font-black italic text-[#1a2e2a] pt-24 mb-4">
        Semana a Semana: O Que Eu Realmente Senti
      </h3>
      <p className="text-lg italic mb-12 border-l-4 border-[#2d5a4c] pl-6 font-medium text-gray-700">
        Quando Finalmente Dei ao Meu Cérebro O Que Ele Estava Implorando
      </p>

      <div className="space-y-10 my-12 text-gray-700">
        {/* WEEK 1 CARD */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-[#f0f4f3] px-8 py-4 border-b border-gray-100 flex justify-between items-center">
            <h4 className="font-black text-[#2d5a4c] uppercase tracking-[0.2em] text-[10px]">
              DIÁRIO DE CAMPO
            </h4>
            <span className="text-emerald-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-3 h-3" /> SEMANA 1
            </span>
          </div>
          <div className="p-8 space-y-6">
            <h5 className="text-xl font-black text-[#1a2e2a] italic">
              🟢 SEMANA 1: A Névoa Começa a Clarear
            </h5>
            <p className="leading-relaxed">
              Na primeira manhã, tomei o pó junto ao meu café da manhã
              esperando nada. Mas em algum lugar entre o café da manhã e
              o almoço, algo… muda. A névoa mental não desaparece, mas o
              ruído diminui.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  Não estou mais pulando entre abas como um esquilo
                  cafeinado
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                <span>Acidentalmente pulo meu café da tarde</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  Consigo passar pela caixa de entrada sem me desligar
                  mentalmente
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* WEEK 2 CARD */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-blue-50/50 px-8 py-4 border-b border-gray-100 flex justify-between items-center">
            <h4 className="font-black text-blue-600 uppercase tracking-[0.2em] text-[10px]">
              CONEXÕES REATIVADAS
            </h4>
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-3 h-3" /> SEMANA 2
            </span>
          </div>
          <div className="p-8 space-y-6">
            <h5 className="text-xl font-black text-[#1a2e2a] italic">
              🟢 SEMANA 2: Algo Está Clicando
            </h5>
            <p className="leading-relaxed">
              Na Semana 2, começo a notar mudanças semelhantes ao que os
              participantes dos estudos relatam — melhor foco,
              transições mais suaves e menos fadiga mental.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-blue-500 w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  Reorganizo aquele armário que estava evitando há
                  semanas
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-blue-500 w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  Menos momentos de “espera… o que eu estava dizendo?”
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-blue-500 w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  Realmente flui de uma tarefa para outra — sem travar
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* WEEK 3-4 CARD */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden border-t-4 border-t-[#DFB277]">
          <div className="bg-[#fdfbf7] px-8 py-4 border-b border-gray-100 flex justify-between items-center">
            <h4 className="font-black text-[#a8824f] uppercase tracking-[0.2em] text-[10px]">
              O REBOOT FINAL
            </h4>
            <span className="text-[#a8824f] font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-3 h-3" /> SEMANAS 3–4
            </span>
          </div>
          <div className="p-8 space-y-6">
            <h5 className="text-xl font-black text-[#1a2e2a] italic">
              🟢 SEMANAS 3–4: Meu Cérebro, Reiniciado
            </h5>
            <p className="leading-relaxed">
              Na Semana 4, experimento resultados semelhantes aos
              relatados nos estudos:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#DFB277]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#DFB277]/20 transition-colors">
                  <Heart className="w-5 h-5 text-[#DFB277]" />
                </div>
                <p className="text-sm font-bold italic">
                  Meu marido diz que pareço “menos frita” e mais
                  presente
                </p>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#DFB277]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#DFB277]/20 transition-colors">
                  <Quote className="w-5 h-5 text-[#DFB277]" />
                </div>
                <p className="text-sm font-bold italic">
                  No jantar com amigos, me sinto como a pessoa engraçada
                    de novo
                </p>
              </li>
            </ul>
            <p className="text-center py-6 bg-slate-50 rounded-xl border border-slate-100 text-lg font-black text-[#1a2e2a] italic">
              "Não é um transplante de personalidade. Sou só eu, mas
              mais clara."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeekByWeekDiaries;

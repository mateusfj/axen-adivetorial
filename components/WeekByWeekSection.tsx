import React from "react";
import { Clock, CheckCircle, Heart, Quote } from "lucide-react";

export const WeekByWeekSection: React.FC = () => {
  return (
    <>
      <h3 className="text-2xl font-black italic text-[#1a2e2a] pt-24 mb-4">
        Week by Week: What I Actually Felt
      </h3>
      <p className="text-lg text-gray-500 italic mb-12 border-l-4 border-[#2d5a4c] pl-6 font-medium">
        When I Finally Gave My Brain What It Was Begging For
      </p>

      <div className="space-y-10 my-12 text-gray-700">
        {/* WEEK 1 CARD */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-[#f0f4f3] px-8 py-4 border-b border-gray-100 flex justify-between items-center">
            <h4 className="font-black text-[#2d5a4c] uppercase tracking-[0.2em] text-[10px]">
              FIELD DIARY
            </h4>
            <span className="text-emerald-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-3 h-3" /> WEEK 1
            </span>
          </div>
          <div className="p-8 space-y-6">
            <h5 className="text-xl font-black text-[#1a2e2a] italic">
              🟢 WEEK 1: The Fog Starts to Clear
            </h5>
            <p className="leading-relaxed">
              On the first morning, I took the powder with my breakfast
              expecting nothing. But somewhere between breakfast and lunch,
              something… shifts. The brain fog doesn't disappear, but the noise
              drops.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  I'm no longer jumping between tabs like a caffeinated squirrel
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                <span>I accidentally skip my afternoon coffee</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  I'm able to get through my inbox without zoning out
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* WEEK 2 CARD */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-blue-50/50 px-8 py-4 border-b border-gray-100 flex justify-between items-center">
            <h4 className="font-black text-blue-600 uppercase tracking-[0.2em] text-[10px]">
              REACTIVATED CONNECTIONS
            </h4>
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-3 h-3" /> WEEK 2
            </span>
          </div>
          <div className="p-8 space-y-6">
            <h5 className="text-xl font-black text-[#1a2e2a] italic">
              🟢 WEEK 2: Something is Clicking
            </h5>
            <p className="leading-relaxed">
              By Week 2, I start noticing changes similar to what study
              participants report — better focus, smoother transitions, and
              less mental fatigue.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-blue-500 w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  I reorganize that closet I've been avoiding for weeks
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-blue-500 w-5 h-5 shrink-0 mt-0.5" />
                <span>Fewer moments of "wait... what was I saying?"</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-blue-500 w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  I actually flow from one task to another — without getting
                  stuck
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* WEEK 3-4 CARD */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden border-t-4 border-t-[#DFB277]">
          <div className="bg-[#fdfbf7] px-8 py-4 border-b border-gray-100 flex justify-between items-center">
            <h4 className="font-black text-[#a8824f] uppercase tracking-[0.2em] text-[10px]">
              THE FINAL REBOOT
            </h4>
            <span className="text-[#a8824f] font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-3 h-3" /> WEEKS 3–4
            </span>
          </div>
          <div className="p-8 space-y-6">
            <h5 className="text-xl font-black text-[#1a2e2a] italic">
              🟢 WEEKS 3–4: My Brain, Rebooted
            </h5>
            <p className="leading-relaxed">
              By Week 4, I experience results similar to those reported in the
              studies:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-[#DFB277] w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  My husband says I seem “less fried” and more present
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-[#DFB277] w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  At dinner with friends, I feel like the funny person again
                </span>
              </li>
            </ul>
            <div className="text-center py-6 bg-[#DFB277]/10 rounded-xl border border-[#DFB277]/20 text-lg font-black text-[#1a2e2a] italic mt-6">
              "It's not a personality transplant. It's just me, but clearer."
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

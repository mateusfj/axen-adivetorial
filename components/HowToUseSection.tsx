import React from "react";
import { CheckCircle } from "lucide-react";

export const HowToUseSection: React.FC = () => {
  return (
    <>
      <h3 className="text-2xl font-black italic text-[#1a2e2a] pt-12">
        How Do I Use It?
      </h3>
      <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">
        The simple routine, nutritionist-approved
      </p>
      <div className="grid md:grid-cols-1 gap-8 my-12 text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 bg-white p-8 rounded-xl border border-gray-100">
            <div className="w-12 h-12 bg-[#2d5a4c] text-white rounded-xl flex items-center justify-center font-black">
              1
            </div>
            <h4 className="font-black text-lg">
              Take one scoop in the morning
            </h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Preferably with breakfast. It’s that simple.
            </p>
          </div>
          <div className="space-y-4 bg-white p-8 rounded-xl border border-gray-100">
            <div className="w-12 h-12 bg-[#2d5a4c] text-white rounded-xl flex items-center justify-center font-black">
              2
            </div>
            <h4 className="font-black text-lg">
              Keep the tub somewhere visible
            </h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Next to your water bottle or laptop — anywhere your routine takes
              you.
            </p>
          </div>
          <div className="space-y-4 bg-white p-8 rounded-xl border border-gray-100">
            <div className="w-12 h-12 bg-[#2d5a4c] text-white rounded-xl flex items-center justify-center font-black">
              3
            </div>
            <h4 className="font-black text-lg">
              Be consistent (boring, but it works)
            </h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              The studies lasted 8 weeks. Most notice changes around Weeks 2–4.
            </p>
          </div>
          <div className="space-y-6 bg-[#f0f4f3] p-8 rounded-xl border border-[#2d5a4c]/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#2d5a4c] text-white rounded-xl flex items-center justify-center font-black">
                4
              </div>
              <h4 className="font-black text-lg">Watch for the early wins</h4>
            </div>
            <ul className="grid grid-cols-1 gap-2">
              {[
                "Fewer brain freezes",
                "Smoother focus",
                "More stable energy",
                "Easier transitions between tasks",
                "Less of that heavy, “cotton-like” fog",
              ].map((gain, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-xs font-bold text-gray-700"
                >
                  <CheckCircle className="w-4 h-4 text-[#55C478] shrink-0" />{" "}
                  {gain}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

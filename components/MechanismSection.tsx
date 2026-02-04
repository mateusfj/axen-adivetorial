import React from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const MechanismSection: React.FC = () => {
  return (
    <>
      <h3
        className="text-2xl font-black italic text-[#1a2e2a] pt-12"
        id="how-it-works"
      >
        Ok… How Do I Eliminate This “Neural Fatigue”?
      </h3>

      <div className="my-8 rounded-xl overflow-hidden border border-gray-100">
        <img
          src="https://assets.replocdn.com/projects/1e5bc658-d2dd-4185-9134-f9e01d19734f/1e6f6e9e-aeb4-4952-a1a2-83d36811f8e5?width=1024"
          alt="NeuroRestore System Diagram"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="space-y-6 text-gray-700">
        <p>
          Going from “burned out” to focused isn't complicated. You simply need
          to give your brain the daily support it needs to optimize:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 font-bold text-xs uppercase tracking-widest text-[#2d5a4c]">
          <li className="bg-[#f0f4f3] p-4 rounded-xl text-center border border-[#2d5a4c]/10">
            Stress Chemistry
          </li>
          <li className="bg-[#f0f4f3] p-4 rounded-xl text-center border border-[#2d5a4c]/10">
            Neural Growth Signals
          </li>
          <li className="bg-[#f0f4f3] p-4 rounded-xl text-center border border-[#2d5a4c]/10">
            Gut-Brain Connection
          </li>
        </ul>
        <p>
          Axen NeuroFuel® is the first formula I’ve tested that supports all
          three areas.
        </p>
      </div>
    </>
  );
};

import React from "react";
import { Eye, Clock } from "lucide-react";
import { ProductSidebarCard } from "./ProductSidebarCard";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface HeroSectionProps {
  today: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ today }) => {
  return (
    <header className="mb-12 text-center lg:text-left flex flex-col items-center lg:items-start">
      <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-8">
        <span className="inline-flex items-center px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] bg-[#DFB277]/10 text-[#a8824f] border border-[#DFB277]/20">
          <Eye className="w-3.5 h-3.5 mr-2" /> 8,547 people reading now
        </span>
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center">
          <Clock className="w-3.5 h-3.5 mr-2" /> 4 min read
        </span>
      </div>

      <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold leading-[1.1] mb-8 font-playfair italic text-[#1a2e2a]">
        What If I Told You That A Simple Mushroom Could Eliminate Brain Fog and
        Increase Focus by 64%?
      </h1>

      <h2 className="text-sm md:text-lg text-gray-500 font-light mb-12 italic border-l-4 lg:border-l-4 border-[#DFB277] pl-8">
        I Also Thought It Was A Scam — So I Decided To Test It Myself.
      </h2>

      {/* Main Sarah Image - Hero Lifestyle Holding Tub */}
      <div className="relative mb-12 group overflow-hidden rounded-xl">
        <img
          src={`${BASE_PATH}/images/woman-hold-product.png`}
          alt="Sarah Mitchell holding Axen NeuroFuel tub"
          className="w-full object-cover aspect-4/3 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/80 to-transparent text-white">
          <p className="text-sm font-bold opacity-80 mb-2 uppercase tracking-widest italic">
            Researcher & Nutritionist
          </p>
          <p className="text-xl font-medium italic">
            "I swore it was a scam... until I saw the clinical data and felt the
            fog lift."
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-5 border-t border-b border-gray-100 py-8 mb-16 w-full text-center md:text-left">
        <div className="w-16 h-16 rounded-xl border-2 border-[#DFB277] overflow-hidden shrink-0">
          <img
            src={`${BASE_PATH}/images/woman-icon.png`}
            alt="Sarah Mitchell Portrait Bio"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-black text-lg text-[#1a2e2a]">By Sarah Mitchell</p>
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider leading-tight">
            Functional Nutritionist & Cognitive Health Researcher
          </p>
          <p className="text-[10px] text-gray-400 mt-2 font-black uppercase tracking-widest italic">
            Last update: {today}
          </p>
        </div>
      </div>

      {/* Mobile Sidebar - Appears after Bio */}
      <div className="lg:hidden mb-12">
        <ProductSidebarCard />
      </div>
    </header>
  );
};

import React from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3 px-4">
      <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center">
        <a href={`${BASE_PATH}/`} className="flex items-center gap-2">
          <img
            src={`${BASE_PATH}/images/logo.png`}
            alt="Axen Logo"
            className="h-8 md:h-10 w-auto"
          />
        </a>
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#how-it-works"
            className="text-sm font-semibold hover:text-[#DFB277] transition-colors uppercase tracking-wider"
          >
            How It Works
          </a>
          <a
            href="#reviews"
            className="text-sm font-semibold hover:text-[#DFB277] transition-colors uppercase tracking-wider"
          >
            Reviews
          </a>
          <a
            href="#cta"
            className="bg-[#2d5a4c] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#1a2e2a] transition-all active:scale-95"
          >
            CHECK AVAILABILITY
          </a>
        </div>
      </div>
    </nav>
  );
};

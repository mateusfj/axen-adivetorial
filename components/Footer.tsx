import React from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white/30 py-24 px-4 text-center">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="flex items-center justify-center gap-3">
          <img
            src={`${BASE_PATH}/images/logo.png`}
            alt="Axen Logo"
            className="h-12 md:h-14 w-auto brightness-0 invert"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.4em]">
          <a href="#" className="hover:text-white transition-colors">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Scientific References
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact Us
          </a>
        </div>

        <div className="text-[10px] leading-relaxed max-w-4xl mx-auto space-y-6 opacity-60">
          <p>
            This product is not intended to diagnose, treat, cure, or prevent any
            disease. The information provided on this site is for informational
            purposes only and is not intended as a substitute for advice from
            your physician or other health care professional or any information
            contained on or in any product label or packaging. You should not use
            the information on this site for diagnosis or treatment of any health
            problem or for prescription of any medication or other treatment.
          </p>
          <p>
            * These statements have not been evaluated by the Food and Drug
            Administration.
          </p>
          <p>© {new Date().getFullYear()} Axen Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Sidebar } from "@/components/Sidebar";
import { IntroSection } from "@/components/IntroSection";
import { StorySection } from "@/components/StorySection";
import { SymptomsSection } from "@/components/SymptomsSection";
import { ScienceSection } from "@/components/ScienceSection";
import { MechanismSection } from "@/components/MechanismSection";
import { IntroducingSection } from "@/components/IntroducingSection";
import { BenefitsDetailSection } from "@/components/BenefitsDetailSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ProtocolSection } from "@/components/ProtocolSection";
import { WeekByWeekSection } from "@/components/WeekByWeekSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhatYouGetSection } from "@/components/WhatYouGetSection";
import { HowToUseSection } from "@/components/HowToUseSection";
import { VerdictSection } from "@/components/VerdictSection";
import { StockWarningSection } from "@/components/StockWarningSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FinalOfferSection } from "@/components/FinalOfferSection";
import { Footer } from "@/components/Footer";

// --- Main Page ---

export default function Home_Page() {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toLocaleDateString("en-US"));
  }, []);

  return (
    <div className="min-h-screen text-[#1a2e2a] selection:bg-[#DFB277]/30 selection:text-[#1a2e2a]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-8 lg:gap-16">
          {/* CONTENT SECTION (Left) */}
          <article className="w-full lg:flex-1 max-w-3xl order-1">
            <HeroSection today={today} />

            {/* INTRO TEXT */}
            <section className="prose prose-sm md:prose-base text-gray-700 max-w-none space-y-8 leading-relaxed">
              <IntroSection />
              <StorySection />
              <SymptomsSection />
              <ScienceSection />
              <MechanismSection />
              <IntroducingSection />
              <BenefitsDetailSection />
              <ComparisonSection />
              <ProtocolSection />
              <WeekByWeekSection />
              <TestimonialsSection />
              <WhatYouGetSection />
              <HowToUseSection />
              <VerdictSection />
              <StockWarningSection />
              <GuaranteeSection />
            </section>
          </article>

          {/* SIDEBAR (Right Sticky) */}
          <Sidebar />
        </div>
      </main>

      <FinalOfferSection />
      <Footer />
    </div>
  );
}

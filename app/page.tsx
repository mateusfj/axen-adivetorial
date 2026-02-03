"use client";

import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Star,
  Brain,
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight,
  Eye,
  Lock,
  Truck,
  AlertTriangle,
  ChevronRight,
  XCircle,
  Coffee,
  Heart,
  Quote,
  Target,
  Home,
  Shield,
  Gift,
} from "lucide-react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

// --- Shared Components ---

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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

const ProductSidebarCard: React.FC = () => (
  <div className="bg-white rounded-xl p-6 border border-gray-200 relative group border-t-4 border-t-[#DFB277]">
    <div className="absolute top-0 right-0 bg-[#DFB277] text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-bl-xl z-10">
      Best Seller
    </div>
    <div className="relative  rounded-xl mb-6 aspect-square bg-[#fdfbf7]">
      <img
        src={`${BASE_PATH}/images/product.png`}
        alt="Axen NeuroFuel Tub"
        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 p-4"
      />
    </div>
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-black text-[#1a2e2a]">NeuroFuel®</h3>
        <div className="flex text-[#DFB277]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] italic">
        NeuroRestore™ Protocol
      </p>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-xs text-[#2d5a4c] font-bold bg-[#f0f4f3] p-3 rounded-xl border border-[#2d5a4c]/5">
          <Zap className="w-4 h-4 shrink-0" />
          <span>Focus Increased by 64%*</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-[#2d5a4c] font-bold bg-[#f0f4f3] p-3 rounded-xl border border-[#2d5a4c]/5">
          <Brain className="w-4 h-4 shrink-0" />
          <span>74% Superior Cognition*</span>
        </div>
      </div>
      <a
        href="#cta"
        className="block text-center bg-[#2d5a4c] hover:bg-[#1a2e2a] text-white font-black py-5 rounded-xl transition-all text-lg uppercase tracking-tight"
      >
        ORDER NOW
      </a>
      <div className="flex justify-between items-center px-2 py-1 opacity-60">
        <div className="flex items-center gap-1.5 text-[8px] text-gray-400 font-black uppercase tracking-widest">
          <ShieldCheck className="w-3 h-3" /> 30 Day Guarantee
        </div>
        <div className="flex items-center gap-1.5 text-[8px] text-gray-400 font-black uppercase tracking-widest">
          <Truck className="w-3 h-3" /> Free Shipping
        </div>
      </div>
    </div>
  </div>
);

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 justify-center items-center font-mono text-2xl font-black text-red-600 py-3 px-6 rounded-xl border border-red-100">
      <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
      <span className="animate-pulse">:</span>
      <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
    </div>
  );
};

// --- Main Page ---

export default function Home_Page() {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toLocaleDateString("en-US"));
  }, []);

  return (
    <div className="min-h-screen  text-[#1a2e2a] selection:bg-[#DFB277]/30 selection:text-[#1a2e2a]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-start">
          {/* CONTENT SECTION (Left) */}
          <article className="w-full lg:flex-1 max-w-3xl order-2 lg:order-1">
            {/* HERO HEADLINE */}
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="inline-flex items-center px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] bg-[#DFB277]/10 text-[#a8824f] border border-[#DFB277]/20">
                  <Eye className="w-3.5 h-3.5 mr-2" /> 8,547 people reading now
                </span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-2" /> 4 min read
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 font-playfair italic text-[#1a2e2a]">
                What If I Told You That A Simple Mushroom Could Eliminate
                Brain Fog and Increase Focus by 64%?
              </h1>

              <h2 className="text-xl md:text-2xl text-gray-500 font-light mb-12 italic border-l-4 border-[#DFB277] pl-8">
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
                    "I swore it was a scam... until I saw the clinical data and
                    felt the fog lift."
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 border-t border-b border-gray-100 py-8 mb-16">
                <div className="w-16 h-16 rounded-xl border-2 border-[#DFB277] overflow-hidden shrink-0">
                  <img
                    src={`${BASE_PATH}/images/woman-icon.png`}
                    alt="Sarah Mitchell Portrait Bio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-black text-lg text-[#1a2e2a]">
                    By Sarah Mitchell
                  </p>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider leading-tight">
                    Functional Nutritionist & Cognitive Health Researcher
                  </p>
                  <p className="text-[10px] text-gray-400 mt-2 font-black uppercase tracking-widest italic">
                    Last update: {today}
                  </p>
                </div>
              </div>
            </header>

            {/* INTRO TEXT */}
            <section className="prose prose-lg text-gray-700 max-w-none space-y-8 leading-relaxed">
              <h3 className="text-3xl font-black text-[#DFB277] italic leading-tight">
                I Swore This Was Another One Of Those Internet "Tricks"
                (Honey Trick, Pink Salt Trick) But No — See How I Had
                To Eat My Words
              </h3>

              <p>
                I test supplements for a living. I've consulted for wellness
                companies, sat on expert panels, and tested more formulas on
                my own body than I care to admit.
              </p>

              <p>
                And here's the truth:{" "}
                <strong>
                  Nine times out of ten, I tell people to save their
                  money.
                </strong>
              </p>

              <p>
                So when yet another mushroom product started going viral on
                the internet, I had the same reaction you probably did:
              </p>

              <div className="bg-[#fdfbf7] border-l-4 border-[#DFB277] p-8 rounded-xl italic space-y-4 font-medium text-gray-700">
                <p>"Oh, look, the internet discovered mushrooms… again."</p>
                <p>
                  "I've tried the mushroom coffee. Spat it in the sink. Felt nothing."
                </p>
                <p>
                  "A supplement? Eliminating brain fog? I'll believe it when
                  I feel it."
                </p>
              </div>

              <p>So many viral wellness products follow the same script:</p>
              <div className=" text-red-600 p-4 rounded-xl font-black text-center uppercase tracking-widest text-sm border border-red-100">
                Huge Promises → Tiny Dose → Pretty Label → Zero Results
              </div>

              <p>
                So I fully expected this Lion’s Mane supplement to be yet
                another overrated failure. Until a document landed on my desk
                that made me say: <strong>"Wait, really?"</strong>
              </p>

              <p>
                A study published in the{" "}
                <i>International Journal of Medicinal Mushrooms</i> showed that
                Lion’s Mane significantly increased NGF (Nerve Growth Factor)
                levels in adults after just 8 weeks of use.
              </p>

              <p>
                This wasn’t a "brand-sponsored influencer test." These were
                real adults taking the product daily… with tracked results.
              </p>

              {/* CLINICAL TABLE */}
              <div className="my-16 bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-[#2d5a4c] p-8 text-white">
                  <h4 className="text-2xl font-black italic text-[#DFB277]">
                    Proven Clinical Results
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 mt-2">
                    After 8 Weeks, Participants Reported:
                  </p>
                </div>
                <div className="p-0">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-gray-100">
                      <tr>
                        <th className="px-8 py-4 text-xs font-black uppercase tracking-widest text-gray-400">
                          Benefit
                        </th>
                        <th className="px-8 py-4 text-xs font-black uppercase tracking-widest text-gray-400 text-right">
                          Improvement
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-bold">
                      {[
                        {
                          label: "Brain fog reduction",
                          val: "58%",
                          color: "bg-blue-500",
                        },
                        {
                          label: "Cognition improvement",
                          val: "74%",
                          color: "bg-[#2d5a4c]",
                        },
                        {
                          label: "Memory improvement",
                          val: "44%",
                          color: "bg-[#DFB277]",
                        },
                        {
                          label: "Focus increase",
                          val: "64%",
                          color: "bg-emerald-500",
                        },
                      ].map((item, i) => (
                        <tr
                          key={i}
                          className="hover:bg-slate-50 transition-colors"
                        >
                          <td className="px-8 py-6 text-gray-700">
                            {item.label}
                          </td>
                          <td className="px-8 py-6 text-right">
                            <span className="text-3xl font-black text-[#1a2e2a]">
                              {item.val}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-8 bg-slate-50 border-t border-gray-100 text-gray-700">
                  <p className="text-xs text-gray-400 font-medium italic">
                    * Data published and verified by third parties — something
                    most mushroom products cannot offer.
                  </p>
                </div>
              </div>

              <p>
                Still, I wasn’t convinced. Numbers are one thing. Real life
                is another.
              </p>
              <p>
                So I sent the study and the formula to a few nutritionist friends
                who test products the same way I do. I expected more eye-rolling.
                Instead, I got this:
              </p>

              <div className="grid md:grid-cols-1 gap-4 text-gray-700">
                <div className="bg-slate-50 p-6 rounded-xl italic text-sm border border-slate-200 border-l-4 border-l-[#2d5a4c]">
                  "The results were stronger than I expected."
                </div>
                <div className="bg-slate-50 p-6 rounded-xl italic text-sm border border-slate-200 border-l-4 border-l-[#2d5a4c]">
                  "It outperformed every 'serious' supplement I've tested this year."
                </div>
                <div className="bg-slate-50 p-6 rounded-xl italic text-sm border border-slate-200 border-l-4 border-l-[#2d5a4c]">
                  "It was the last thing I thought would help my clients… and it did."
                </div>
              </div>

              {/* STORY SECTION */}
              <h3 className="text-3xl font-black italic text-[#1a2e2a] pt-12">
                The Mental Lapse That Made Me Break Down
              </h3>

              <div className="relative rounded-xl overflow-hidden mb-12 border-4 border-white">
                <img
                  src={`${BASE_PATH}/images/mental-fog-senior.jpg`}
                  alt="Senior forgetting something"
                  className="w-full object-cover aspect-video grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-[#1a2e2a]/30"></div>
              </div>

              <div className="space-y-6 text-gray-700">
                <p>
                  Honestly? My own brain fog was getting harder and harder to hide.
                </p>
                <p>
                  It started quietly, with small slips that I kept ignoring:
                </p>
                <ul className="space-y-2 font-medium text-gray-600 pl-4 border-l-2 border-[#DFB277]/20">
                  <li>• Losing my train of thought mid-sentence.</li>
                  <li>
                    • Walking into a room and completely forgetting what I went
                    there for.
                  </li>
                  <li>
                    • Avoiding organizing the closet because my brain felt
                    "too full".
                  </li>
                </ul>
                <p>Annoying, sure. But manageable.</p>
                <p>Until the day my brain truly betrayed me.</p>
                <p>
                  I was on a video call with a long-time client — someone who
                  trusts me with her health. And I called her by the wrong name.
                </p>
                <p>Twice.</p>
                <p>I laughed it off and apologized. Blamed it on "end-of-day fatigue".</p>
                <p>Then I recommended a meal plan that included gluten.</p>
                <p>
                  She has a gluten intolerance. I've known this since day one.
                </p>
                <p>
                  I saw her expression change from warm → confused → hurt.
                </p>
                <p>And I felt something I hadn’t felt in a long time.</p>
                <p>Shame. The kind that burns your face.</p>
                <p>
                  When the call ended, I closed my laptop, went to the kitchen,
                  and leaned my forehead against the counter. And I cried.
                </p>
                <p>
                  Because deep down, I knew this wasn't just stress. Something
                  in my brain wasn't working like it used to.
                </p>
                <p>
                  And for the first time, I had to ask myself the same hard
                  question I ask my clients:
                </p>
                <p className="font-bold text-[#2d5a4c] italic">
                  "Is this just burnout… or is there something deeper
                  happening?"
                </p>
              </div>

              <h3 className="text-3xl font-black italic text-[#1a2e2a] pt-12">
                How Does "Brain Fog" Show Up In Your Life?
              </h3>
              <p>
                If you recognize these daily slips, you're not alone:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-12 text-gray-700">
                <div className="bg-white border border-gray-100 p-8 rounded-xl hover:bg-slate-50 transition-colors">
                  <Target className="text-[#2d5a4c] w-10 h-10 mb-4" />
                  <h4 className="font-black text-lg mb-3 uppercase tracking-wide">
                    Focus Slips Away
                  </h4>
                  <p className="text-sm leading-relaxed">
                    You can't concentrate on simple tasks, you don't remember
                    what needs to be done… words get jumbled, nothing sticks,
                    and your brain wanders no matter how hard you try.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 p-8 rounded-xl hover:bg-slate-50 transition-colors">
                  <Heart className="text-red-400 w-10 h-10 mb-4" />
                  <h4 className="font-black text-lg mb-3 uppercase tracking-wide">
                    Relationships
                  </h4>
                  <p className="text-sm leading-relaxed">
                    You zone out while your partner or kids are talking. You
                    forget conversations you just had, or forget to reply to
                    a message.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 p-8 rounded-xl hover:bg-slate-50 transition-colors">
                  <Brain className="text-[#DFB277] w-10 h-10 mb-4" />
                  <h4 className="font-black text-lg mb-3 uppercase tracking-wide">
                    Memory Lapses
                  </h4>
                  <p className="text-sm leading-relaxed">
                    You miss the time to pick someone up, forget a birthday,
                    or blank on a simple detail — and you see that look of
                    worry.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 p-8 rounded-xl hover:bg-slate-50 transition-colors">
                  <Home className="text-blue-400 w-10 h-10 mb-4" />
                  <h4 className="font-black text-lg mb-3 uppercase tracking-wide">
                    Social Life
                  </h4>
                  <p className="text-sm leading-relaxed">
                    It's your turn to host family — no big deal — but you get
                    overwhelmed and give up. When you can't get organized, your
                    confidence plummets.
                  </p>
                </div>
              </div>

              <div className="text-center py-10">
                <p className="text-2xl font-light text-gray-400 italic">
                  "If these moments are piling up, they’re probably pointing
                  to something bigger."
                </p>
              </div>

              {/* SECTION: What’s Really Behind These Memory Lapses? */}
              <h3 className="text-3xl font-black italic text-[#1a2e2a] pt-12">
                What’s Really Behind These Memory Lapses?
              </h3>
              <div className="space-y-6 text-gray-700">
                <p>
                  If you’ve been feeling off — foggy, forgetful, unfocused —
                  you’re not lazy. You’re not just “getting old.”
                </p>
                <p>
                  That jumbled feeling, of not being able to think? That's what
                  scientists call <strong>“Neural Fatigue”</strong> — the
                  progressive depletion of the biological signals that allow the
                  brain to repair itself.
                </p>

                <div className="bg-[#f0f4f3] p-8 rounded-xl border border-[#2d5a4c]/10 italic">
                  "Think of it like a cell phone with a low battery. The screen
                  gets dimmer, background processes shut down… everything works,
                  just slower. The brain does exactly the same thing."
                </div>

                <h4 className="text-2xl font-black text-[#1a2e2a] mt-8">
                  What Science Has Discovered:
                </h4>
                <p>
                  Studies show that after age 40, our brain progressively
                  reduces the production of a protein called{" "}
                  <strong>
                    NGF — Nerve Growth Factor
                  </strong>
                  .
                </p>

                <p>NGF is the biological signal responsible for:</p>
                <ul className="space-y-3 font-medium text-gray-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />{" "}
                    Keeping neurons alive
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />{" "}
                    Preserving neural connections
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />{" "}
                    Allowing the brain to form new synapses
                  </li>
                </ul>

                <p>
                  When the brain doesn't get enough NGF, it enters what
                  scientists call “survival mode”:
                </p>
                <ul className="space-y-2 text-sm italic text-gray-600 pl-4 border-l-2 border-slate-200">
                  <li>• It reduces the formation of new connections.</li>
                  <li>• It slows down memory consolidation.</li>
                  <li>• It decreases processing speed.</li>
                </ul>

                <p>
                  Not because you’re “too old.” But because the system decided
                  it’s not safe to invest in performance.
                </p>

                <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 my-12">
                  <h4 className="text-xl font-black text-[#1a2e2a] mb-6 uppercase tracking-wider">
                    Neural Fatigue Builds Up When:
                  </h4>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start gap-4">
                      <XCircle className="text-red-500 w-6 h-6 shrink-0" />
                      <span className="text-sm font-bold leading-relaxed">
                        Stress hormones stay elevated all day
                      </span>
                    </div>
                    <div className="flex items-start gap-4">
                      <XCircle className="text-red-500 w-6 h-6 shrink-0" />
                      <span className="text-sm font-bold leading-relaxed">
                        Unfinished tasks buzz in the back of your mind
                      </span>
                    </div>
                    <div className="flex items-start gap-4">
                      <XCircle className="text-red-500 w-6 h-6 shrink-0" />
                      <span className="text-sm font-bold leading-relaxed">
                        Your gut and immune system send the "wrong" signals
                      </span>
                    </div>
                    <div className="flex items-start gap-4">
                      <XCircle className="text-red-500 w-6 h-6 shrink-0" />
                      <span className="text-sm font-bold leading-relaxed">
                        Digital devices pull your brain away from focus
                      </span>
                    </div>
                  </div>
                </div>

                <p>
                  It's rarely one big thing. It's everything hitting you at
                  once — until your brain is overstimulated, oversaturated, and
                  completely drained.
                </p>
                <p>
                  Of course, you can add caffeine… more stimulation. But that’s
                  like adding a marching band to the chaos.
                </p>
              </div>

              {/* TRANSITION SECTION: Ok… How Do I Eliminate This "Neural Fatigue"? */}
              <h3
                className="text-3xl font-black italic text-[#1a2e2a] pt-12"
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
                  Going from “burned out” to focused isn't complicated. You
                  simply need to give your brain the daily support it needs
                  to optimize:
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
                  Axen NeuroFuel® is the first formula I’ve tested that supports
                  all three areas.
                </p>
              </div>

              {/* APRESENTANDO SECTION */}
              <div className="bg-[#fdfbf7] p-10 rounded-xl border-2 border-[#DFB277]/20 relative overflow-hidden my-16 text-gray-700">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#DFB277] mb-6">
                  INTRODUCING
                </h4>
                <h3 className="text-4xl font-black text-[#1a2e2a] mb-6">
                  Axen NeuroFuel®
                </h3>
                <p className="text-lg text-gray-500 italic mb-10 leading-relaxed">
                  The first formula I tested that supports stress chemistry,
                  neural growth signals, and cognitive clarity — all in one
                  simple daily ritual.
                </p>
                <img
                  src={`${BASE_PATH}/images/product.png`}
                  alt="Axen NeuroFuel tub with powder around it"
                  className="w-full rounded-xl mb-10 border border-gray-100 object-contain"
                />
              </div>

              {/* 3 FRONTS DETAIL */}
              <div className="space-y-20 text-gray-700">
                {/* POINT 1 */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-black text-[#1a2e2a] italic border-b-2 border-[#DFB277] pb-4 inline-block">
                    1. Axen NeuroFuel® Reactivates Neural Growth Signals
                  </h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                    Powered by Lion’s Mane + Vitamins B9 and B12
                  </p>
                  <p>
                    Axen NeuroFuel® is formulated with nature’s brain activator:
                    Lion’s Mane. This super compound stimulates the production
                    of neural growth factors — the signals that help brain cells
                    stay healthy and communicate efficiently over time.*
                  </p>
                  <p>
                    A study published in <i>Phytotherapy Research</i> showed
                    that participants who took Lion’s Mane for 16 weeks showed
                    significant improvement in cognitive function compared to
                    the placebo group.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex gap-4 bg-white p-6 rounded-xl border border-gray-200 font-bold text-sm leading-relaxed">
                      <CheckCircle className="text-[#DFB277] w-5 h-5 shrink-0" />
                      <span>
                        Everyday memory becomes sharp — No more losing your
                        train of thought mid-sentence, forgetting appointments,
                        or blanking on simple facts.
                      </span>
                    </div>
                    <div className="flex gap-4 bg-white p-6 rounded-xl border border-gray-200 font-bold text-sm leading-relaxed">
                      <CheckCircle className="text-[#DFB277] w-5 h-5 shrink-0" />
                      <span>
                        You get things done — You go from email → meeting →
                        to-do list without getting lost, freezing, or
                        forgetting what you were doing.
                      </span>
                    </div>
                    <div className="flex gap-4 bg-white p-6 rounded-xl border border-gray-200 font-bold text-sm leading-relaxed">
                      <CheckCircle className="text-[#DFB277] w-5 h-5 shrink-0" />
                      <span>
                        Your focus stays steady — So you aren't sharp in the
                        morning and jumbled by noon.
                      </span>
                    </div>
                  </div>
                  <p className="text-sm italic text-gray-500 pt-4">
                    Bit by bit, the clutter clears and your brain feels “yours”
                    again.
                  </p>
                </div>

                {/* POINT 2 */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-black text-[#1a2e2a] italic border-b-2 border-[#2d5a4c] pb-4 inline-block">
                    2. Axen NeuroFuel® Silences Stress "Alarms"
                  </h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                    Powered by Rhodiola Rosea
                  </p>
                  <p>
                    Axen NeuroFuel® contains powerful adaptogens like Rhodiola
                    Rosea. These potent ingredients prepare your body to respond
                    to stress signals more smoothly.
                  </p>
                  <p>
                    A study in the <i>Journal of Ethnopharmacology</i> demonstrated
                    that Rhodiola significantly reduced mental fatigue symptoms
                    in stressed professionals after just 4 weeks. Instead of
                    gritting your teeth to get through tasks, you feel steady,
                    calm, and mentally present.
                  </p>
                  <div className="bg-slate-50 p-8 rounded-xl space-y-6 text-sm text-gray-700 border border-slate-200">
                    <p className="flex items-start gap-4">
                      <CheckCircle className="text-[#2d5a4c] w-5 h-5 shrink-0" />
                      <span>
                        <strong>
                          “Your patience returns, even on chaotic days.”
                        </strong>{" "}
                        → A smoother stress response = less reactivity, more
                        emotional capacity.
                      </span>
                    </p>
                    <p className="flex items-start gap-4">
                      <CheckCircle className="text-[#2d5a4c] w-5 h-5 shrink-0" />
                      <span>
                        <strong>
                          “You don’t jump at every interruption — you stay
                          composed instead of agitated.”
                        </strong>{" "}
                        → Adaptogens support calm and resilience under pressure.
                      </span>
                    </p>
                    <p className="flex items-start gap-4">
                      <CheckCircle className="text-[#2d5a4c] w-5 h-5 shrink-0" />
                      <span>
                        <strong>
                          “That house cleaning you were putting off? Done in
                          an hour.”
                        </strong>{" "}
                        → Lower stress load = more capacity, less avoidance,
                        more completion.
                      </span>
                    </p>
                  </div>
                </div>

                {/* POINT 3 */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-black text-[#1a2e2a] italic border-b-2 border-emerald-500 pb-4 inline-block">
                    3. Axen NeuroFuel® Sustains Clarity and Focus While
                    Rebuilding Happens
                  </h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                    Powered by Alpha-GPC + L-Theanine + Natural Caffeine
                  </p>
                  <p>
                    Axen NeuroFuel® is also boosted with Alpha-GPC, a direct
                    precursor to acetylcholine — the essential neurotransmitter
                    for memory and learning.
                  </p>
                  <p>
                    Combined with L-Theanine and a microdose of natural caffeine,
                    you get:
                  </p>
                  <ul className="space-y-2 text-sm font-bold text-gray-600 pl-4 border-l-2 border-slate-100 mb-6">
                    <li>
                      • Balanced focus without the jitters and crashes of regular coffee
                    </li>
                    <li>• Clean, sustained energy throughout the day</li>
                    <li>• Relaxed alertness, without anxiety</li>
                  </ul>
                  <p>
                    A study in <i>Nutritional Neuroscience</i> showed that the
                    combination of L-Theanine with caffeine significantly
                    improved attention and processing speed in cognitive tasks.
                  </p>
                  <div className="space-y-4 pt-4 text-gray-700">
                    {[
                      "Your mood becomes more stable, instead of going up and down all day.",
                      "You feel less reactive. The heavy “cotton-head” feeling decreases, so you feel more present with friends and family.",
                      "Small stresses don't take you down like they used to. You bounce back easily.",
                      "You get through the day without that “dragged down” sensation. More energy and optimism.",
                    ].map((txt, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 font-bold text-sm"
                      >
                        <Zap className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                        {txt}
                      </li>
                    ))}
                  </div>
                  <p className="text-sm italic text-gray-500 pt-8">
                    Together, these subtle but powerful changes make life feel
                    lighter, calmer, and more manageable.
                  </p>
                </div>
              </div>

              {/* WHY OTHERS FAIL */}
              <div className="my-24 bg-[#1a2e2a] text-white p-12 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <AlertTriangle className="w-24 h-24" />
                </div>
                <h3 className="text-3xl font-black italic text-[#DFB277] mb-10">
                  Why Most Products Fail
                </h3>
                <div className="grid md:grid-cols-2 gap-10 text-gray-200">
                  <div className="space-y-6">
                    <h4 className="font-black text-red-400 uppercase tracking-widest text-xs">
                      ❌ Most Brands Use:
                    </h4>
                    <ul className="space-y-4 text-xs font-bold opacity-60">
                      <li>• Low dose powders</li>
                      <li>• Mycelium grown on grain (starch)</li>
                      <li>• Toxic alcohol-based extraction</li>
                      <li>• Generic vitamin forms</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="font-black text-green-400 uppercase tracking-widest text-xs">
                      ✅ Axen NeuroFuel® Delivers:
                    </h4>
                    <ul className="space-y-4 text-xs font-bold">
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />{" "}
                        Clinical dose per serving
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />{" "}
                        6 synergistic ingredients
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />{" "}
                        Fruiting body extracts
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />{" "}
                        Active vitamin forms
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PROTOCOL SECTION */}
              <h3 className="text-3xl font-black italic text-[#1a2e2a] pt-12">
                The NeuroRestore™ Protocol
              </h3>
              <p className="mb-10 text-gray-600 leading-relaxed">
                What makes Axen NeuroFuel® different is that it’s not just
                “another memory supplement.” It’s a three-pronged system
                designed to attack the root cause of neural fatigue:
              </p>

              <div className="space-y-6 my-12 text-gray-700">
                {/* FRENTE 1 */}
                <div className="bg-[#fdfbf7] p-8 rounded-xl border border-[#DFB277]/20 flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 bg-[#DFB277]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Brain className="w-8 h-8 text-[#DFB277]" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-black text-[#1a2e2a] uppercase tracking-tight text-xl">
                      🧠 PHASE 1: NeuroRestore™ Signal
                    </h4>
                    <p className="text-sm font-bold text-[#DFB277] uppercase tracking-widest">
                      Reactivates neural growth signals
                    </p>
                    <ul className="text-xs font-bold text-gray-500 space-y-1">
                      <li>• Lion’s Mane (standardized extract)</li>
                      <li>• Vitamin B9 (active form - methylfolate)</li>
                      <li>• Vitamin B12 (active form - methylcobalamina)</li>
                    </ul>
                    <p className="italic text-gray-600 border-l-2 border-[#DFB277] pl-4 text-sm font-medium">
                      “Tells the brain: it’s safe to exit power save mode. You
                      can start growing again.”
                    </p>
                  </div>
                </div>

                {/* FRENTE 2 */}
                <div className="bg-[#f0f4f3] p-8 rounded-xl border border-[#2d5a4c]/10 flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 bg-[#2d5a4c]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="w-8 h-8 text-[#2d5a4c]" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-black text-[#1a2e2a] uppercase tracking-tight text-xl">
                      🛡️ PHASE 2: NeuroRestore™ Shield
                    </h4>
                    <p className="text-sm font-bold text-[#2d5a4c] uppercase tracking-widest">
                      Protects against stress corrosion
                    </p>
                    <ul className="text-xs font-bold text-gray-500 space-y-1">
                      <li>• Rhodiola Rosea (adaptogen extract)</li>
                      <li>• L-Theanine (calming amino acid)</li>
                    </ul>
                    <p className="italic text-gray-600 border-l-2 border-[#2d5a4c] pl-4 text-sm font-medium">
                      Blocks the impact of cortisol and keeps the brain in a
                      safe state for rebuilding.
                    </p>
                  </div>
                </div>

                {/* FRENTE 3 */}
                <div className="bg-slate-50 p-8 rounded-xl border border-gray-200 flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                    <Zap className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-black text-[#1a2e2a] uppercase tracking-tight text-xl">
                      ⚡ PHASE 3: NeuroRestore™ Sustain
                    </h4>
                    <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest">
                      Sustains clarity and focus in the short term
                    </p>
                    <ul className="text-xs font-bold text-gray-500 space-y-1">
                      <li>• Alpha-GPC (acetylcholine precursor)</li>
                      <li>
                        • Natural caffeine from green tea (functional microdose)
                      </li>
                    </ul>
                    <p className="italic text-gray-600 border-l-2 border-emerald-500 pl-4 text-sm font-medium">
                      You feel the difference day-to-day while the structural
                      repair happens in the background.
                    </p>
                  </div>
                </div>
              </div>

              {/* FINAL SUMMARY RECAP */}
              <div className="bg-[#1a2e2a] text-white p-10 rounded-xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm italic font-medium opacity-90 leading-relaxed">
                  <p>Signal™ reactivates neural growth factors.</p>
                  <p>Shield™ protects against the corrosion of modern stress.</p>
                  <p>
                    Sustain™ maintains mental clarity while rebuilding happens.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="font-black text-[#DFB277] text-lg uppercase tracking-tight mb-2">
                    Everything in a single formula.
                  </p>
                  <p className="text-xs font-bold opacity-60 uppercase tracking-widest">
                    No harsh stimulants. No side effects. At a fraction of the
                    cost of clinical treatments.
                  </p>
                </div>
              </div>

              {/* WEEK BY WEEK - BLOG STYLE */}
              <h3 className="text-3xl font-black italic text-[#1a2e2a] pt-24 mb-4">
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
                      expecting nothing. But somewhere between breakfast and
                      lunch, something… shifts. The brain fog doesn't disappear,
                      but the noise drops.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                        <span>
                          I'm no longer jumping between tabs like a caffeinated
                          squirrel
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
                      By Week 2, I start noticing changes similar to what
                      study participants report — better focus, smoother
                      transitions, and less mental fatigue.
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
                        <span>
                          Fewer moments of "wait... what was I saying?"
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-sm font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <CheckCircle className="text-blue-500 w-5 h-5 shrink-0 mt-0.5" />
                        <span>
                          I actually flow from one task to another — without
                          getting stuck
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
                      By Week 4, I experience results similar to those
                      reported in the studies:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4 group">
                        <div className="w-10 h-10 bg-[#DFB277]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#DFB277]/20 transition-colors">
                          <Heart className="w-5 h-5 text-[#DFB277]" />
                        </div>
                        <p className="text-sm font-bold italic">
                          My husband says I seem “less fried” and more present
                        </p>
                      </li>
                      <li className="flex items-center gap-4 group">
                        <div className="w-10 h-10 bg-[#DFB277]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#DFB277]/20 transition-colors">
                          <Quote className="w-5 h-5 text-[#DFB277]" />
                        </div>
                        <p className="text-sm font-bold italic">
                          At dinner with friends, I feel like the funny person
                          again
                        </p>
                      </li>
                    </ul>
                    <p className="text-center py-6 bg-slate-50 rounded-xl border border-slate-100 text-lg font-black text-[#1a2e2a] italic">
                      "It's not a personality transplant. It's just me, but
                      clearer."
                    </p>
                  </div>
                </div>
              </div>

              {/* TESTIMONIALS SECTION */}
              <div id="reviews" className="pt-20 text-gray-700">
                <h3 className="text-3xl font-black italic text-[#1a2e2a] mb-6 text-center uppercase tracking-tighter">
                  What Others Are Saying
                </h3>
                <p className="max-w-2xl mx-auto text-center text-gray-600 mb-12 italic font-medium leading-relaxed px-4">
                  I know what you're thinking: “Are these testimonials real?”
                  Honestly, I wondered the same thing — until I tested the
                  supplement myself and felt exactly what people were
                  describing.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      name: "Mary J.",
                      info: "53 years old, menopause",
                      text: "I love this supplement! First, it's easy to take and doesn't taste bad. I feel so much clearer at 53 and in the middle of menopause it makes a difference! I swear by it and won't go a day without it.",
                    },
                    {
                      name: "James M.",
                      info: "",
                      text: "Best memory supplement I've ever used. Definitely does what it says. More energy, more mental focus. I'll be ordering again. I've been telling everyone I meet to try it.",
                    },
                    {
                      name: "Robert L.",
                      info: "",
                      text: "These are great! Axen isn't magic, but it works to level out my focus in a way that I actually take action on my to-do list before the squirrel inside me tells me to do something else. It's subtle but effective.",
                    },
                    {
                      name: "John P.",
                      info: "76 years old",
                      text: "Surprised. I was skeptical, but was surprised by a distinct improvement in my memory and mental clarity after just a few weeks. I can remember number sequences now, and don't seem to get as confused in daily life. Good news at 76!",
                    },
                    {
                      name: "Jeff R.",
                      info: "",
                      text: "Felt a difference in just a few days. After taking it for two weeks, I'm impressed how my brain fog is practically gone, and my energy is through the roof… my friends noticed the difference and are trying it now… so far they're also impressed.",
                    },
                  ].map((rev, i) => (
                    <div
                      key={i}
                      className="bg-white p-8 rounded-xl border border-gray-200"
                    >
                      <div className="flex text-[#DFB277] mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="italic mb-6 text-sm leading-relaxed">
                        “{rev.text}”
                      </p>
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                        <p className="font-black text-xs uppercase tracking-widest text-[#1a2e2a]">
                          — {rev.name}{" "}
                          {rev.info && (
                            <span className="font-light opacity-50 ml-2">
                              ({rev.info})
                            </span>
                          )}
                        </p>
                        <div className="flex items-center gap-1.5 text-[10px] text-green-600 font-black uppercase tracking-[0.2em] bg-green-50 px-3 py-1 rounded-xl border border-green-100 self-start md:self-auto">
                          <div className="bg-green-600 p-0.5 rounded-xl">
                            <CheckCircle className="w-2.5 h-2.5 text-white" />
                          </div>
                          Verified Customer
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WHAT YOU GET */}
              <div className="my-24 bg-white p-12 rounded-xl border border-gray-200 text-gray-700">
                <h3 className="text-2xl font-black mb-2 italic uppercase tracking-tighter">
                  What You're Actually Getting
                </h3>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
                  Everything included in every tub:
                </p>
                <div className="grid md:grid-cols-1 gap-6">
                  {[
                    "Full 30-day supply — 30 servings, 1 per day is all you need",
                    "6 Clinical Ingredients — Lion’s Mane, Alpha-GPC, Rhodiola Rosea, L-Theanine, Vitamin B9, Vitamin B12",
                    "Clinical Dose Per Serving — A clinically significant amount of functional compounds",
                    "Clean Ingredients — Vegan, gluten-free, non-GMO. Manufactured in certified facility",
                    "Tasty & Easy — Pleasant to take. Ease of use. Can be used with your favorite beverage.",
                  ].map((it, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-slate-50 p-6 rounded-xl border border-slate-200 font-bold"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />{" "}
                      {it}
                    </div>
                  ))}
                </div>
              </div>

              {/* HOW TO USE */}
              <h3 className="text-3xl font-black italic text-[#1a2e2a] pt-12">
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
                      Next to your water bottle or laptop — anywhere your
                      routine takes you.
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
                      The studies lasted 8 weeks. Most notice changes around
                      Weeks 2–4.
                    </p>
                  </div>
                  <div className="space-y-6 bg-[#f0f4f3] p-8 rounded-xl border border-[#2d5a4c]/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#2d5a4c] text-white rounded-xl flex items-center justify-center font-black">
                        4
                      </div>
                      <h4 className="font-black text-lg">
                        Watch for the early wins
                      </h4>
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
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />{" "}
                          {gain}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* VERDICT SECTION */}
              <div className="my-24 py-20 px-10 bg-[#fdfbf7] rounded-xl border-2 border-[#DFB277]/10 text-center">
                <h3 className="text-4xl font-black mb-8 italic text-[#1a2e2a]">
                  The Verdict
                </h3>
                <p className="text-2xl font-black text-[#a8824f] mb-12 italic leading-tight">
                  "I Came In Skeptical. I Left Eating My Words — And Wanting
                  The Next Dose."
                </p>

                <div className="max-w-2xl mx-auto text-gray-700 text-left mb-16 space-y-6 text-sm leading-relaxed italic">
                  <p>
                    I checked the clinical data. I checked the extraction
                    ratios. I checked the quality testing. And then I checked
                    my own brain.
                  </p>
                  <p>The shift was real.</p>
                </div>

                <div className="bg-white p-12 rounded-xl inline-block border border-gray-200 shadow-xl shadow-black/5">
                  <div className="flex justify-center text-[#DFB277] mb-4 gap-1">
                    <Star className="w-8 h-8 fill-current" />
                    <Star className="w-8 h-8 fill-current" />
                    <Star className="w-8 h-8 fill-current" />
                    <Star className="w-8 h-8 fill-current" />
                    <Star className="w-8 h-8 fill-current opacity-60" />
                  </div>
                  <p className="text-5xl font-black mb-2 text-[#1a2e2a]">
                    4.6 / 5
                  </p>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">
                    Official Sarah Mitchell Rating
                  </p>
                </div>

                <p className="mt-16 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed italic">
                  "The formula deserves a 5. The only reason it's not perfect?
                  Availability issues."
                </p>

                <div className="mt-12 bg-[#1a2e2a] text-white p-10 rounded-xl text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Brain className="w-24 h-24" />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#DFB277] mb-6">
                    Expert Summary
                  </p>
                  <p className="text-base font-medium italic opacity-90 leading-relaxed mb-4">
                    "If you want clearer thinking, more stable focus, and a
                    daily ritual that feels more like self-care than a chore,
                    give Axen NeuroFuel® 8 weeks."
                  </p>
                  <p className="text-sm font-bold border-t border-white/10 pt-6 mt-6 opacity-60">
                    This powerful daily supplement delivers cleaner thinking and
                    smoother energy — without giant pills or a bad taste.
                  </p>
                </div>
              </div>

              {/* STOCK WARNING SECTION */}
              <div className="my-16 bg-red-50 border border-red-100 p-12 rounded-xl relative overflow-hidden text-gray-700">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <AlertTriangle className="w-20 h-20 text-red-600" />
                </div>
                <h4 className="flex items-center gap-3 text-red-700 font-black uppercase tracking-widest text-xs mb-8">
                  <AlertTriangle className="w-5 h-5" /> Quick Warning About Stock
                </h4>
                <div className="space-y-6 italic leading-relaxed">
                  <p>
                    While finalizing this article, I received a message from
                    someone on the Axen team:
                  </p>
                  <blockquote className="bg-white/50 p-8 rounded-xl border-l-4 border-red-400 text-red-800 font-bold">
                    “Our last promotion sold out most of our stock. We’ve
                    reserved a small batch just for your readers — but once
                    these are gone, we can't guarantee they'll be back before
                    next month.”
                  </blockquote>
                  <p className="text-sm opacity-60">
                    For the record: I rarely get messages like this — which is
                    why I'm passing it on.
                  </p>
                </div>
              </div>

              {/* GUARANTEE DETAIL */}
              <div className="my-24 space-y-10 text-gray-700">
                <h3 className="text-3xl font-black italic text-[#1a2e2a]">
                  What If I Don't Feel Anything?
                </h3>
                <p className="leading-relaxed">
                  Axen offers a 30-day money-back guarantee on your first order.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    "If you don't notice a difference…",
                    "If the supplement doesn't seem right for you…",
                    "Or even if you simply don't like it…",
                  ].map((cond, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-xs font-bold text-center italic"
                    >
                      {cond}
                    </div>
                  ))}
                </div>
                <p className="leading-relaxed">
                  You can email <strong>support@axen.com</strong> within 30
                  days and request a refund.
                </p>
                <div className="bg-[#f0f4f3] p-10 rounded-xl border border-[#2d5a4c]/10 text-center">
                  <p className="text-xl font-black text-[#2d5a4c] italic mb-6">
                    No hurdles. No complicated forms. No questions asked.
                  </p>
                  <p className="text-sm font-medium opacity-60">
                    As someone who has tested hundreds of supplements, I can
                    tell you this: a company that offers a real 30-day
                    guarantee is a company that trusts its formula.
                  </p>
                </div>
              </div>
            </section>
          </article>

          {/* SIDEBAR (Right Sticky) */}
          <aside className="w-full lg:w-95 lg:sticky lg:top-28 z-40 order-1 lg:order-2">
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
                “Our last promotion sold out most of our stock. We’ve
                reserved a small batch just for your readers.”
              </p>
              <div className="flex items-center gap-3 text-red-600 font-black text-[10px] uppercase tracking-widest">
                <div className="w-2 h-2 rounded-xl bg-red-600 animate-ping"></div>
                Limited Batch Available
              </div>
            </div>
          </aside>
        </div>
      </main >

      {/* FINAL OFFER SECTION */}
      < section id="cta" className="bg-[#1a2e2a] py-32 px-4 text-white" >
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-[#DFB277] text-[#1a2e2a] px-8 py-3 rounded-xl font-black text-xs uppercase tracking-[0.4em] mb-12">
            Your Next Step
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-16 italic leading-tight font-playfair">
            So Does It Make Sense To Try?
          </h2>

          <p className="text-xl md:text-2xl text-white/70 mb-20 font-light max-w-3xl mx-auto leading-relaxed">
            Let me ask you this. If just two capsules a day helped you feel
            clearer, calmer, and more focused — without the crash, the
            jitters, or the mental drag — what would your day actually look
            like? How much more could you achieve with that support?
          </p>

          <div className="bg-white text-[#1a2e2a] rounded-xl p-10 md:p-20 relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#DFB277]/10 rounded-xl blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#2d5a4c]/10 blur-3xl rounded-xl"></div>
                  <img
                    src={`${BASE_PATH}/images/product.png`}
                    alt="Final Product Presentation"
                    className="w-full rounded-xl relative z-10 transition-transform duration-700 hover:scale-[1.02] object-contain"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-10">
                <div>
                  <h3 className="text-4xl font-black mb-4">Axen NeuroFuel®</h3>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-xs italic">
                    Now that you've seen the research and the results, this is
                    the natural moment to try.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-5 py-8 border-y border-gray-100 text-gray-700 font-bold text-sm">
                  {[
                    {
                      icon: <Zap className="w-5 h-5 text-emerald-500" />,
                      text: "Discounts are still active",
                    },
                    {
                      icon: <Gift className="w-5 h-5 text-blue-500" />,
                      text: "Extra gifts included with your order",
                    },
                    {
                      icon: <Clock className="w-5 h-5 text-[#DFB277]" />,
                      text: "And stock is still available",
                    },
                    {
                      icon: <ShieldCheck className="w-5 h-5 text-[#2d5a4c]" />,
                      text: "PLUS 30 days to try risk-free",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#fdfbf7] p-10 rounded-xl border-2 border-[#DFB277]/20 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#DFB277] text-white px-6 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                    🔥 Limited Time Offer
                  </div>
                  <div className="flex items-baseline gap-4 mb-10 mt-4 justify-center">
                    <span className="text-5xl font-black tracking-tighter">
                      $ 178.20
                    </span>
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                      / tub
                    </span>
                  </div>
                  <button className="w-full bg-[#2d5a4c] hover:bg-[#1a2e2a] text-white font-black py-7 rounded-xl text-xl flex flex-col items-center justify-center gap-1 transition-all active:scale-95 group uppercase tracking-tight">
                    <span>CHECK AVAILABILITY</span>
                    <span className="text-[10px] opacity-60 font-black">
                      Check stock now →
                    </span>
                  </button>
                  <div className="mt-8 flex justify-center gap-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                      className="h-4 grayscale opacity-40"
                      alt="Visa"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                      className="h-6 grayscale opacity-40"
                      alt="MC"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                      className="h-6 grayscale opacity-40"
                      alt="PayPal"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] text-center">
                    Offer Expiration:
                  </p>
                  <CountdownTimer />
                </div>
              </div>
            </div>
          </div >

          {/* GUARANTEE BOX */}
          < div className="mt-32 max-w-3xl mx-auto" >
            <div className="bg-white/5 border border-white/10 p-16 rounded-xl backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck className="w-40 h-40 text-[#DFB277]" />
              </div>
              <h4 className="text-3xl font-black mb-10 italic text-[#DFB277]">
                30 Days or Your Money Back
              </h4>
              <p className="opacity-70 text-lg leading-relaxed mb-12 font-light italic text-gray-200">
                "If you don't notice a difference, if the supplement doesn't
                seem right for you, or even if you simply don't like it... you
                can email support@axen.com and request a refund. No hurdles. No
                questions asked."
              </p>
              <div className="flex items-center gap-4 justify-center opacity-40">
                <Lock className="w-4 h-4" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em]">
                  256-bit SSL Encryption
                </p>
              </div>
            </div>
          </div >
        </div >
      </section >

      {/* FOOTER */}
      < footer className="bg-[#111] text-white/30 py-24 px-4 text-center" >
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex items-center justify-center gap-3">
            <img
              src={`${BASE_PATH}/images/logo.png`}
              alt="Axen Logo"
              className="h-12 md:h-14 w-auto brightness-0 invert"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-[#DFB277] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#DFB277] transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-[#DFB277] transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-[#DFB277] transition-colors">
              Clinical Studies
            </a>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-[9px] font-bold uppercase tracking-[0.25em] leading-relaxed opacity-40">
            <p>
              * The statements contained on this site have not been evaluated
              by the FDA. This product is not intended to diagnose, treat,
              cure, or prevent any disease.
            </p>
            <p>
              © 2025 AXEN NUTRITION • BRAZILIAN COGNITIVE RESEARCH • ALL RIGHTS
              RESERVED
            </p>
          </div>
        </div>
      </footer >

      {/* MOBILE STICKY BUTTON */}
      < div className="md:hidden fixed bottom-8 left-8 right-8 z-50" >
        <a
          href="#cta"
          className="bg-[#2d5a4c] text-white flex items-center justify-between p-6 rounded-xl border border-white/20 active:scale-95 transition-all shadow-2xl"
        >
          <div className="flex flex-col text-left">
            <span className="text-[9px] uppercase font-black tracking-widest text-[#DFB277] mb-1">
              Secure Reserved Batch
            </span>
            <span className="font-black text-xl font-playfair italic">
              Check NeuroFuel®
            </span>
          </div>
          <ChevronRight className="w-8 h-8" />
        </a>
      </div >
    </div >
  );
}

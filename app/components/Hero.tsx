import React from "react";

export default function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Copy Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-none">
              Kartonglåda
            </h1>
            <p className="text-2xl sm:text-3xl font-black text-[#0058A3] tracking-tight">
              Flat-pack. Second life.
            </p>
          </div>

          <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-normal">
            Een IKEA doos is nooit zomaar klaar. Wat voor jou verpakkingsafval lijkt, is het begin van een nieuw project voor iemand anders. Met Kartonglåda transformeren we platte kartonnen verpakkingen tot functionele woonaccessoires en slimme opbergers.
          </p>

          {/* Motto Highlight Box */}
          <div className="p-4 bg-[#f5f5f5] border-l-4 border-[#0058A3] rounded-r-xs">
            <p className="text-xl font-black text-zinc-950 italic">
              &ldquo;Van pakket naar project.&rdquo;
            </p>
          </div>

          {/* Action Pill Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#zo-werkt-het"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-black hover:bg-zinc-800 text-white font-bold rounded-full transition-colors text-center text-sm focus:ring-4 focus:ring-zinc-400"
            >
              Ontdek hoe het werkt
            </a>
            <a
              href="#out-of-the-box"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white hover:bg-[#f5f5f5] text-zinc-950 border border-zinc-950 font-bold rounded-full transition-colors text-center text-sm focus:ring-4 focus:ring-zinc-400"
            >
              Doe mee met #IKEASecondLife
            </a>
          </div>
        </div>

        {/* Right Hero Image Card */}
        <div className="lg:col-span-6">
          <div className="relative aspect-4/3 w-full bg-[#f5f5f5] border border-[#dfdfdf] rounded-none overflow-hidden flex flex-col items-center justify-center p-8 text-center group">
            <svg
              className="w-56 h-56 sm:w-64 sm:h-64 text-amber-800 transition-transform duration-500 group-hover:scale-105"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M30 60 L100 25 L170 60 L100 95 Z"
                fill="#D97706"
                fillOpacity="0.25"
                stroke="#B45309"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M30 60 L30 140 L100 175 L100 95 Z"
                fill="#B45309"
                fillOpacity="0.35"
                stroke="#B45309"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M170 60 L170 140 L100 175 L100 95 Z"
                fill="#D97706"
                fillOpacity="0.45"
                stroke="#B45309"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M30 100 L100 135 M100 135 L170 100"
                stroke="#0058A3"
                strokeWidth="3"
                strokeDasharray="6 4"
              />
              <circle cx="100" cy="95" r="16" fill="#0058A3" />
              <path
                d="M95 90 L105 95 L95 100"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="50" y="90" width="22" height="22" fill="#78350F" rx="2" />
              <rect x="54" y="94" width="6" height="6" fill="white" />
              <rect x="62" y="94" width="6" height="6" fill="white" />
              <rect x="54" y="102" width="6" height="6" fill="white" />
            </svg>

            <div className="mt-4 space-y-1 z-10">
              <span className="inline-block px-3 py-1 bg-white text-zinc-900 text-xs font-extrabold shadow-xs border border-zinc-200 uppercase tracking-wider">
                Kartonglåda Vouwconcept
              </span>
              <p className="text-xs text-zinc-600 font-medium max-w-sm">
                Visualisatie van de gefoldde kartonnen doos met AR-vouwlijnen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

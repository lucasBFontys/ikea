"use client";

import React, { useRef } from "react";

export default function Carousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section aria-label="Drie bouwstenen carrousel" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Accessibility Skip Link */}
      <a
        href="#after-carousel"
        className="sr-only focus:not-sr-only focus:inline-block focus:mb-4 focus:px-4 focus:py-2 focus:bg-[#0058A3] focus:text-white focus:rounded-full text-sm font-bold"
      >
        Carrousel overslaan en verder lezen
      </a>

      {/* Carousel Controls Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-1">
            Het Concept In 3 Pijlers
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
            Drie bouwstenen van Kartonglåda
          </h2>
        </div>

        {/* Circular Prev/Next Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll("left")}
            className="w-11 h-11 rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-900 flex items-center justify-center transition-colors focus:ring-2 focus:ring-[#0058A3]"
            aria-label="Vorige kaart"
            type="button"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="w-11 h-11 rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-900 flex items-center justify-center transition-colors focus:ring-2 focus:ring-[#0058A3]"
            aria-label="Volgende kaart"
            type="button"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Snap Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 pt-1 focus:outline-hidden"
        tabIndex={0}
        aria-label="Bouwstenen carrousel kaarten"
      >
        {/* Card 1: Scan & Fold */}
        <div className="snap-start shrink-0 w-[300px] sm:w-[360px] bg-[#f5f5f5] rounded-none p-6 flex flex-col justify-between border border-transparent hover:border-zinc-300 transition-all group">
          <div className="space-y-4">
            {/* Square Aspect Ratio Graphic Frame */}
            <div className="aspect-square w-full bg-amber-100/80 border border-amber-300 flex flex-col items-center justify-center p-4 relative overflow-hidden">
              <svg className="w-24 h-24 text-amber-800" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <rect x="20" y="20" width="60" height="60" rx="4" stroke="currentColor" strokeWidth="3" fill="#FDE68A" />
                <path d="M35 35h12v12H35zM53 35h12v12H53zM35 53h12v12H35z" fill="currentColor" />
                <path d="M53 53h6v6h-6zM59 59h6v6h-6z" fill="#0058A3" />
                <circle cx="75" cy="25" r="12" fill="#0058A3" />
                <path d="M71 25l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="mt-4 text-[10px] font-bold text-amber-900 bg-white/90 px-2 py-1 uppercase tracking-wider border border-amber-300">
                Beeld volgt: WebAR QR Scan
              </span>
            </div>

            <span className="inline-block text-xs font-black uppercase tracking-wider text-[#0058A3]">
              Pijler 1 • WebAR Technologie
            </span>

            <h3 className="text-2xl font-black text-zinc-950 group-hover:text-[#0058A3] transition-colors">
              Scan & Fold
            </h3>

            <p className="text-sm text-zinc-700 leading-relaxed font-normal">
              Een QR-code aan de binnenzijde van de doos opent een WebAR-ervaring (geen app-download nodig). De camera van je telefoon projecteert virtuele vouwlijnen direct over je fysieke IKEA doos.
            </p>
          </div>

          <div className="pt-6 border-t border-zinc-200 mt-6">
            <a
              href="#zo-werkt-het"
              className="inline-flex items-center text-sm font-bold text-black group-hover:underline gap-1.5"
            >
              <span>Bekijk hoe WebAR werkt</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Card 2: Vouwpatronen op maat */}
        <div className="snap-start shrink-0 w-[300px] sm:w-[360px] bg-[#f5f5f5] rounded-none p-6 flex flex-col justify-between border border-transparent hover:border-zinc-300 transition-all group">
          <div className="space-y-4">
            {/* Square Aspect Ratio Graphic Frame */}
            <div className="aspect-square w-full bg-emerald-100/70 border border-emerald-300 flex flex-col items-center justify-center p-4 relative overflow-hidden">
              <svg className="w-24 h-24 text-emerald-800" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <path d="M25 75 L50 25 L75 75 Z" fill="#A7F3D0" stroke="currentColor" strokeWidth="3" />
                <path d="M40 75 L50 50 L60 75 Z" fill="#047857" />
                <rect x="30" y="75" width="40" height="10" fill="#065F46" rx="2" />
                <circle cx="50" cy="38" r="4" fill="#FEF08A" />
              </svg>
              <span className="mt-4 text-[10px] font-bold text-emerald-950 bg-white/90 px-2 py-1 uppercase tracking-wider border border-emerald-300">
                Beeld volgt: Plantenpot Vouwpatroon
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-black uppercase tracking-wider text-zinc-950">
                Pijler 2
              </span>
              <span className="px-2 py-0.5 bg-amber-100 text-amber-900 text-[10px] font-extrabold uppercase rounded border border-amber-300">
                Toekomstvisie (fase 2)
              </span>
            </div>

            <h3 className="text-2xl font-black text-zinc-950 group-hover:text-[#0058A3] transition-colors">
              Vouwpatronen op maat
            </h3>

            <p className="text-sm text-zinc-700 leading-relaxed font-normal">
              <strong>Fase 1:</strong> Een bibliotheek van vooraf ontworpen vouwpatronen per doosformaat (bijv. plantenpot, opbergdoos).<br />
              <strong>Fase 2 (AI):</strong> Voer doosafmetingen en een gewenst object in voor een uniek vouwpatroon.
            </p>
          </div>

          <div className="pt-6 border-t border-zinc-200 mt-6">
            <span className="text-xs text-zinc-600 font-medium">
              Van standaard patroon naar AI-maatwerk
            </span>
          </div>
        </div>

        {/* Card 3: Upcycle Challenge */}
        <div className="snap-start shrink-0 w-[300px] sm:w-[360px] bg-[#f5f5f5] rounded-none p-6 flex flex-col justify-between border border-transparent hover:border-zinc-300 transition-all group">
          <div className="space-y-4">
            {/* Square Aspect Ratio Graphic Frame */}
            <div className="aspect-square w-full bg-purple-100/70 border border-purple-300 flex flex-col items-center justify-center p-4 relative overflow-hidden">
              <svg className="w-24 h-24 text-purple-800" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <rect x="25" y="20" width="50" height="60" rx="4" fill="#DDD6FE" stroke="currentColor" strokeWidth="3" />
                <circle cx="50" cy="45" r="14" fill="#7C3AED" />
                <path d="M45 45l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M35 70h30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <span className="mt-4 text-[10px] font-bold text-purple-950 bg-white/90 px-2 py-1 uppercase tracking-wider border border-purple-300">
                Beeld volgt: Social Challenge Filter
              </span>
            </div>

            <span className="inline-block text-xs font-black uppercase tracking-wider text-purple-700">
              Pijler 3 • Community
            </span>

            <h3 className="text-2xl font-black text-zinc-950 group-hover:text-purple-700 transition-colors">
              Upcycle Challenge
            </h3>

            <p className="text-sm text-zinc-700 leading-relaxed font-normal">
              Interactieve social media filters met maandelijkse thema&apos;s (zoals <em>Kinderkamer-editie</em> en <em>Small space-editie</em>). De IKEA community stemt op de meest vindingrijke inzendingen.
            </p>
          </div>

          <div className="pt-6 border-t border-zinc-200 mt-6">
            <a
              href="#out-of-the-box"
              className="inline-flex items-center text-sm font-bold text-black group-hover:underline gap-1.5"
            >
              <span>Doe mee met de competitie</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <div id="after-carousel" tabIndex={-1} />
    </section>
  );
}

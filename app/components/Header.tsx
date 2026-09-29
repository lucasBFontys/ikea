"use client";

import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e0e0e0] font-sans">
      {/* Accessibility skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-[100] focus:bg-[#0058A3] focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-bold text-sm shadow-md"
      >
        Overslaan en naar inhoud gaan
      </a>

      {/* Top Utility Bar (Localization & Store Picker) */}
      <div className="bg-[#f5f5f5] border-b border-[#e5e5e5] text-xs text-zinc-700 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 font-medium hover:underline focus:outline-hidden"
              aria-label="Kies je winkel"
            >
              <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Selecteer je IKEA winkel (bijv. Amsterdam)</span>
            </button>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <button
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 font-medium hover:underline focus:outline-hidden"
              aria-label="Postcode invullen"
            >
              <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Postcode invullen voor levering</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-bold text-zinc-900 bg-amber-100 text-amber-900 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider border border-amber-300">
              Studentenconcept Minor DM
            </span>
            <span className="text-zinc-300">|</span>
            <span className="font-semibold text-zinc-800">NL / Nederlands</span>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Left Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              className="flex items-center justify-center bg-[#0058A3] text-[#FFDA1A] font-black text-2xl tracking-tighter px-4 py-1.5 rounded-xs hover:bg-[#004f93] transition-colors"
              aria-label="IKEA Home (Concept)"
            >
              IKEA
            </a>
          </div>

          {/* Search Field - Pill Shaped IKEA Style */}
          <div className="flex-1 max-w-2xl mx-2 sm:mx-6">
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <label htmlFor="ikea-search" className="sr-only">
                Zoeken naar producten, ruimtes of inspiratie
              </label>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                id="ikea-search"
                placeholder="Wat zoek je? Probeer 'Kartonglåda' of 'Karton upcycling'..."
                className="w-full pl-11 pr-4 py-3 bg-[#f5f5f5] hover:bg-[#eaeaea] focus:bg-white rounded-full text-sm text-zinc-900 placeholder-zinc-500 border border-transparent focus:border-zinc-400 focus:outline-hidden transition-all"
              />
            </form>
          </div>

          {/* Right Utility Icons */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0 text-sm font-bold text-zinc-900">
            <a
              href="#"
              className="hidden lg:flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-full hover:bg-[#f5f5f5] transition-colors"
            >
              <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Hej! Log in</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-full hover:bg-[#f5f5f5] transition-colors"
              aria-label="Boodschappenlijstje"
            >
              <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="hidden xl:inline">Boodschappenlijstje</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-full hover:bg-[#f5f5f5] transition-colors"
              aria-label="Winkelwagen"
            >
              <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="hidden xl:inline">Winkelwagen</span>
            </a>
          </div>
        </div>

        {/* Category Navigation Bar */}
        <nav
          aria-label="Hoofdnavigatie"
          className="hidden md:flex items-center space-x-8 py-3 border-t border-[#f0f0f0] text-sm font-bold text-zinc-900"
        >
          <a href="#" className="hover:underline hover:text-[#0058A3] py-1">
            Producten
          </a>
          <a href="#" className="hover:underline hover:text-[#0058A3] py-1">
            Ruimtes
          </a>
          <a href="#" className="hover:underline hover:text-[#0058A3] py-1">
            Aanbiedingen
          </a>
          <a href="#" className="hover:underline hover:text-[#0058A3] py-1">
            Ideeën & inspiratie
          </a>
          <a href="#" className="hover:underline hover:text-[#0058A3] py-1">
            Services
          </a>
        </nav>
      </div>
    </header>
  );
}

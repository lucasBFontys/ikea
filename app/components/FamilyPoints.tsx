import React from "react";

export default function FamilyPoints() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#e0e0e0]">
      <div className="bg-[#0058A3] text-white rounded-none p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-lg">
        {/* Decorative background shape */}
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-700/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3.5 py-1 bg-[#FFDA1A] text-black font-black text-xs uppercase tracking-wider rounded-full shadow-xs">
                IKEA Family
              </span>
              <span className="px-3.5 py-1 bg-white/20 backdrop-blur-xs text-white text-xs font-bold rounded-full border border-white/30">
                Voorstel van ons concept
              </span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Slim hergebruiken, beloond worden
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 mt-3 font-bold">
                Verzamel punten met IKEA Family door jouw verpakking een tweede leven te geven.
              </p>
            </div>

            <p className="text-sm sm:text-base text-blue-50 leading-relaxed font-normal">
              In dit conceptbeloningsmodel sparen IKEA Family-leden punten bij het upcyclen van kartonnen verpakkingen. Door simpelweg de QR-code te scannen en je gemaakte creatie te delen in de app, draag je bij aan een circulaire samenleving én spaar je voor voordelen.
            </p>

            {/* Checkmark benefits list */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDA1A] text-black flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-sm sm:text-base text-white font-bold">
                  Geen extra app-download vereist — direct scannen via de doos
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDA1A] text-black flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-sm sm:text-base text-white font-bold">
                  Spaar punten voor elk voltooid upcycle-project
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDA1A] text-black flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-sm sm:text-base text-white font-bold">
                  Ontvang unieke digitale badges en voordelen in jouw profiel
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFDA1A] text-black flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-sm sm:text-base text-white font-bold">
                  In te wisselen bij IKEA winkel- en circulaire services
                </span>
              </div>
            </div>

            {/* Step flow */}
            <div className="pt-4">
              <span className="text-xs uppercase tracking-wider text-blue-200 font-extrabold block mb-3">
                Voorgestelde stappenflow:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-bold">
                <div className="bg-white/10 backdrop-blur-xs p-3 rounded-none border border-white/20">
                  <span className="block text-[#FFDA1A] text-sm font-black mb-0.5">1. Scan</span>
                  <span>QR-code doos</span>
                </div>
                <div className="bg-white/10 backdrop-blur-xs p-3 rounded-none border border-white/20">
                  <span className="block text-[#FFDA1A] text-sm font-black mb-0.5">2. Vouw</span>
                  <span>Volg AR-lijnen</span>
                </div>
                <div className="bg-white/10 backdrop-blur-xs p-3 rounded-none border border-white/20">
                  <span className="block text-[#FFDA1A] text-sm font-black mb-0.5">3. Deel</span>
                  <span>Upload foto</span>
                </div>
                <div className="bg-white/10 backdrop-blur-xs p-3 rounded-none border border-white/20">
                  <span className="block text-[#FFDA1A] text-sm font-black mb-0.5">4. Punten</span>
                  <span>Ontvang beloning</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-blue-200 italic pt-2">
              * Dit betreft een conceptueel voorstel ter uitbreiding van het IKEA Family programma, geen bestaande functionaliteit. Er worden bewust geen specifieke aantallen punten of geldelijke waarden aan gekoppeld.
            </p>
          </div>

          {/* Right SVG/CSS Mockup of IKEA App Digital Family Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-zinc-950 text-white rounded-2xl p-5 shadow-2xl border-4 border-zinc-800 space-y-4">
              {/* App Status Bar */}
              <div className="flex justify-between items-center text-[10px] text-zinc-400 px-2 font-mono">
                <span>09:41</span>
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <div className="w-4 h-2 bg-white rounded-xs" />
                </div>
              </div>

              {/* App Header */}
              <div className="flex justify-between items-center border-b border-zinc-800 pb-3 px-1">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#0058A3] text-[#FFDA1A] font-black text-xs flex items-center justify-center rounded-xs">
                    IKEA
                  </div>
                  <span className="text-xs font-bold">IKEA App Mockup</span>
                </div>
                <span className="text-[10px] bg-amber-400 text-black px-2 py-0.5 font-extrabold uppercase tracking-wider rounded-xs">
                  VOORSTEL
                </span>
              </div>

              {/* Digital Family Card */}
              <div className="bg-gradient-to-br from-[#0058A3] to-[#003B6D] p-5 rounded-xl space-y-4 border border-blue-400/30 relative overflow-hidden shadow-inner">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase font-black text-[#FFDA1A] tracking-wider block">
                      IKEA Family Lid
                    </span>
                    <h4 className="text-lg font-black text-white">
                      Alex de Vries
                    </h4>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-black text-[#FFDA1A]">
                    Å
                  </div>
                </div>

                {/* QR Code Graphic */}
                <div className="bg-white p-3 rounded-lg flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold text-zinc-500 block uppercase">
                      Kartonglåda Punten
                    </span>
                    <span className="text-sm font-black text-zinc-950 block">
                      Status: Actief Upcycler
                    </span>
                  </div>
                  <svg className="w-12 h-12 text-zinc-950" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm8-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 2h2v4h-2v-4zm-4-2h2v2h-2v-2zm2 4h2v2h-2v-2zm-2-4h2v2h-2v-2zm4-2h2v2h-2v-2z" />
                  </svg>
                </div>

                <div className="flex justify-between items-center text-[10px] text-blue-200 font-medium">
                  <span>Pasnummer: 9988 **** 1234</span>
                  <span className="font-bold text-white">Minor DM Concept</span>
                </div>
              </div>

              <div className="text-center">
                <span className="text-[11px] text-zinc-400 italic">
                  Digital Card Mockup — Geen echte app-functionaliteit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function HowItWorks() {
  return (
    <section id="zo-werkt-het" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-zinc-200">
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0058A3]">
            Stappenplan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Zo werkt Kartonglåda in 3 stappen
          </h2>
          <p className="text-base text-zinc-600">
            Van platte doos naar functioneel woonproject in een handomdraai.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center space-y-4 hover:border-zinc-300 transition-all">
            <div className="w-14 h-14 rounded-full bg-[#0058A3] text-white flex items-center justify-center text-xl font-extrabold shadow-sm">
              1
            </div>

            {/* Icon Graphic */}
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 my-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-zinc-950">
              1. Scan de QR-code op de doos
            </h3>

            <p className="text-sm text-zinc-600 leading-relaxed">
              Open de smartphone camera en scan de unieke QR-code op de binnenzijde van de IKEA verpakking. Je opent direct de WebAR-pagina zonder app-installatie.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center space-y-4 hover:border-zinc-300 transition-all">
            <div className="w-14 h-14 rounded-full bg-[#0058A3] text-white flex items-center justify-center text-xl font-extrabold shadow-sm">
              2
            </div>

            {/* Icon Graphic */}
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-[#0058A3] my-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2m-4 4h8m-4-4l-2 1m2-1l2 1m-2-1v2m-6 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-zinc-950">
              2. Volg de AR-vouwlijnen
            </h3>

            <p className="text-sm text-zinc-600 leading-relaxed">
              Kies jouw favoriete vouwpatroon (zoals een opbergbox of plantenpot). De virtuele vouwlijnen verschijnen via AR precies op jouw doos.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center space-y-4 hover:border-zinc-300 transition-all">
            <div className="w-14 h-14 rounded-full bg-[#0058A3] text-white flex items-center justify-center text-xl font-extrabold shadow-sm">
              3
            </div>

            {/* Icon Graphic */}
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800 my-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M86.6 25.4a4.5 4.5 0 00-6.36 0L12 90M12 15l10 10M17 10l5 5" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6a2 2 0 012-2zM4 16h2a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 012-2zM15 16h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-zinc-950">
              3. Deel je creatie en verdien punten
            </h3>

            <p className="text-sm text-zinc-600 leading-relaxed">
              Maak een foto van je creatie, deel deze op social media met <strong>#IKEASecondLife</strong> en claim je voorgestelde IKEA Family punten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

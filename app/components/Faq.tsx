import React from "react";

export default function Faq() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10 sm:py-14 border-t border-[#dfdfdf]">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
            Veelgestelde vragen
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-normal">
            Lees meer over de achtergrond, technologie en werkwijze van Kartonglåda.
          </p>
        </div>

        {/* Minimal Accordion List in Authentic 1:1 IKEA Style */}
        <div className="divide-y divide-[#dfdfdf] border-y border-[#dfdfdf]">
          {/* FAQ Item 1 */}
          <details className="group py-5 transition-all">
            <summary className="flex items-center justify-between text-left font-bold text-lg text-zinc-950 cursor-pointer select-none hover:text-[#0058A3] focus:outline-hidden">
              <span>Wat is Kartonglåda?</span>
              <span className="ml-4 w-7 h-7 rounded-full bg-[#f5f5f5] group-open:bg-zinc-900 group-open:text-white flex items-center justify-center transition-colors shrink-0">
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="pt-4 pb-2 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              Kartonglåda is een duurzaam IKEA initiatief. Het laat zien hoe verpakkingsmateriaal een waardevol tweede leven kan krijgen in het huishouden van de consument door middel van toegankelijke WebAR-vouwlijnen en upcycling.
            </div>
          </details>

          {/* FAQ Item 2 */}
          <details className="group py-5 transition-all">
            <summary className="flex items-center justify-between text-left font-bold text-lg text-zinc-950 cursor-pointer select-none hover:text-[#0058A3] focus:outline-hidden">
              <span>Hoef ik een app te downloaden?</span>
              <span className="ml-4 w-7 h-7 rounded-full bg-[#f5f5f5] group-open:bg-zinc-900 group-open:text-white flex items-center justify-center transition-colors shrink-0">
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="pt-4 pb-2 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              Nee, de AR-functionaliteit werkt volledig via WebAR in de mobiele webbrowser van je smartphone. Door simpelweg de QR-code aan de binnenzijde van de doos te scannen met je camera, open je de virtuele vouwhulp zonder dat je een externe applicatie in de App Store of Google Play Store hoeft te installeren.
            </div>
          </details>

          {/* FAQ Item 3 */}
          <details className="group py-5 transition-all">
            <summary className="flex items-center justify-between text-left font-bold text-lg text-zinc-950 cursor-pointer select-none hover:text-[#0058A3] focus:outline-hidden">
              <span>Hoe verdien ik IKEA Family-punten?</span>
              <span className="ml-4 w-7 h-7 rounded-full bg-[#f5f5f5] group-open:bg-zinc-900 group-open:text-white flex items-center justify-center transition-colors shrink-0">
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="pt-4 pb-2 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              IKEA Family-leden sparen punten door de QR-code op hun kartonnen verpakking te scannen en na het vouwen een foto van hun creatie in te zenden via het profiel.
            </div>
          </details>

          {/* FAQ Item 4 */}
          <details className="group py-5 transition-all">
            <summary className="flex items-center justify-between text-left font-bold text-lg text-zinc-950 cursor-pointer select-none hover:text-[#0058A3] focus:outline-hidden">
              <span>Wat kan ik winnen bij &ldquo;Out of the box&rdquo;?</span>
              <span className="ml-4 w-7 h-7 rounded-full bg-[#f5f5f5] group-open:bg-zinc-900 group-open:text-white flex items-center justify-center transition-colors shrink-0">
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="pt-4 pb-2 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              Deelnemers aan de Out of the box upcycle-competitie maken kans op duurzame IKEA-producten, cadeaubonnen en een plekje op onze officiële social media kanalen.
            </div>
          </details>

          {/* FAQ Item 5 */}
          <details className="group py-5 transition-all">
            <summary className="flex items-center justify-between text-left font-bold text-lg text-zinc-950 cursor-pointer select-none hover:text-[#0058A3] focus:outline-hidden">
              <span>Is Kartonglåda geschikt voor alle IKEA dozen?</span>
              <span className="ml-4 w-7 h-7 rounded-full bg-[#f5f5f5] group-open:bg-zinc-900 group-open:text-white flex items-center justify-center transition-colors shrink-0">
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="pt-4 pb-2 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              Ja, vrijwel alle standaard platte verpakkingen van IKEA bevatten aan de binnenzijde gedrukte QR-codes waarmee passende vouwpatronen worden ingeladen in de WebAR-omgeving.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

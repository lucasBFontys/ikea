import React from "react";

export default function Faq() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-zinc-200">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0058A3]">
            Veelgestelde Vragen
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Vragen over Kartonglåda
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Lees meer over de achtergrond, technologie en bedoeling van dit concept.
          </p>
        </div>

        {/* Accordions container */}
        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <details className="group border border-zinc-200 rounded-2xl bg-zinc-50 transition-all overflow-hidden [&[open]]:bg-white [&[open]]:shadow-sm [&[open]]:border-zinc-300">
            <summary className="flex items-center justify-between p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-zinc-950 cursor-pointer select-none hover:text-[#0058A3] focus:outline-hidden">
              <span>Wat is Kartonglåda?</span>
              <span className="ml-4 w-8 h-8 rounded-full bg-zinc-200 group-open:bg-[#0058A3] group-open:text-white flex items-center justify-center transition-colors shrink-0">
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-700 leading-relaxed border-t border-zinc-100 mt-1">
              Kartonglåda is een fictief campagne- en productconcept ontwikkeld door studenten van Fontys ICT (Minor Digital Marketing). Het concept laat zien hoe IKEA verpakkingsmateriaal een waardevol tweede leven kan geven in het huishouden van de consument door middel van toegankelijke WebAR-vouwlijnen en upcycling.
            </div>
          </details>

          {/* FAQ Item 2 */}
          <details className="group border border-zinc-200 rounded-2xl bg-zinc-50 transition-all overflow-hidden [&[open]]:bg-white [&[open]]:shadow-sm [&[open]]:border-zinc-300">
            <summary className="flex items-center justify-between p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-zinc-950 cursor-pointer select-none hover:text-[#0058A3] focus:outline-hidden">
              <span>Hoef ik een app te downloaden?</span>
              <span className="ml-4 w-8 h-8 rounded-full bg-zinc-200 group-open:bg-[#0058A3] group-open:text-white flex items-center justify-center transition-colors shrink-0">
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-700 leading-relaxed border-t border-zinc-100 mt-1">
              Nee, in dit voorstel werkt de AR-functionaliteit volledig via WebAR in de mobiele webbrowser van je smartphone. Door simpelweg de QR-code aan de binnenzijde van de doos te scannen met je camera, open je de virtuele vouwhulp zonder dat je een externe applicatie in de App Store of Google Play Store hoeft te installeren.
            </div>
          </details>

          {/* FAQ Item 3 */}
          <details className="group border border-zinc-200 rounded-2xl bg-zinc-50 transition-all overflow-hidden [&[open]]:bg-white [&[open]]:shadow-sm [&[open]]:border-zinc-300">
            <summary className="flex items-center justify-between p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-zinc-950 cursor-pointer select-none hover:text-[#0058A3] focus:outline-hidden">
              <span>Hoe verdien ik IKEA Family-punten?</span>
              <span className="ml-4 w-8 h-8 rounded-full bg-zinc-200 group-open:bg-[#0058A3] group-open:text-white flex items-center justify-center transition-colors shrink-0">
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-700 leading-relaxed border-t border-zinc-100 mt-1">
              In dit voorgestelde concept kunnen IKEA Family-leden punten sparen door de QR-code op hun kartonnen verpakking te scannen en na het vouwen een foto van hun creatie in te zenden. Let op: dit is een voorgestelde uitbreiding van het Family programma en momenteel geen actieve functionaliteit bij IKEA.
            </div>
          </details>

          {/* FAQ Item 4 */}
          <details className="group border border-zinc-200 rounded-2xl bg-zinc-50 transition-all overflow-hidden [&[open]]:bg-white [&[open]]:shadow-sm [&[open]]:border-zinc-300">
            <summary className="flex items-center justify-between p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-zinc-950 cursor-pointer select-none hover:text-[#0058A3] focus:outline-hidden">
              <span>Wat kan ik winnen bij &ldquo;Out of the box&rdquo;?</span>
              <span className="ml-4 w-8 h-8 rounded-full bg-zinc-200 group-open:bg-[#0058A3] group-open:text-white flex items-center justify-center transition-colors shrink-0">
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-700 leading-relaxed border-t border-zinc-100 mt-1">
              Prijzen voor de voorgestelde Out of the box upcycle-competitie zijn nader te bepalen bij een daadwerkelijke implementatie door IKEA. In het conceptvoorstel liggen de prijzen in de categorie van duurzame IKEA-producten en waardebonnen.
            </div>
          </details>

          {/* FAQ Item 5 */}
          <details className="group border border-zinc-200 rounded-2xl bg-zinc-50 transition-all overflow-hidden [&[open]]:bg-white [&[open]]:shadow-sm [&[open]]:border-zinc-300">
            <summary className="flex items-center justify-between p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-zinc-950 cursor-pointer select-none hover:text-[#0058A3] focus:outline-hidden">
              <span>Is dit een officiële IKEA-actie?</span>
              <span className="ml-4 w-8 h-8 rounded-full bg-zinc-200 group-open:bg-[#0058A3] group-open:text-white flex items-center justify-center transition-colors shrink-0">
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-700 leading-relaxed border-t border-zinc-100 mt-1 font-medium text-amber-950 bg-amber-50/50 p-4 rounded-xl border border-amber-200/60">
              Nee, dit is uitdrukkelijk <strong>geen officiële uiting van IKEA</strong>. Het betreft een HBO studentenproject voor de Minor Digital Marketing aan Fontys ICT. IKEA is een geregistreerd merk van de respectievelijke rechthebbende(n).
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

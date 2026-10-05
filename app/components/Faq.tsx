import React from "react";

const FAQS = [
  {
    q: "Wat is Kartonglåda?",
    a: "Kartonglåda is een IKEA-concept (studentenproject) dat kartonnen verpakkingen een tweede leven geeft. Via WebAR-vouwlijnen, vouwpatronen en een community-challenge wordt de doos die je al hebt het startpunt van een nieuw project.",
  },
  {
    q: "Hoef ik een app te downloaden?",
    a: "Nee. De vouwhulp werkt via WebAR in de browser van je telefoon. Scan de QR-code aan de binnenzijde van de doos en je start zonder App Store of Google Play.",
  },
  {
    q: "Hoe verdien ik IKEA Family-punten?",
    a: "Family-leden scannen de QR, ronden het vouwproject af en sturen een foto in via hun profiel. Punten kun je inzetten bij winkel- en circulaire services, naast je bestaande Family-voordelen.",
  },
  {
    q: "Wat kan ik winnen bij Out of the box?",
    a: "IKEA-producten, cadeaubonnen en een plek op onze kanalen. De werknaam van de campagne is nog niet definitief.",
  },
  {
    q: "Is Kartonglåda geschikt voor alle IKEA dozen?",
    a: "In dit concept bevatten vrijwel alle standaard platte verpakkingen een QR-code met passende patronen. Fase 2 voegt AI-patronen toe op basis van jouw afmetingen.",
  },
] as const;

export default function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[800px] px-5 sm:px-8">
        <h2 className="text-[32px] leading-[1.2] font-bold tracking-tight text-[#111111] sm:text-[36px]">
          Veelgestelde vragen
        </h2>
        <p className="mt-4 text-[16px] leading-7 text-[#484848]">
          Vind het antwoord op je vraag over Kartonglåda, WebAR en IKEA Family-punten.
        </p>

        <div className="mt-10 divide-y divide-[#dfdfdf] border-y border-[#dfdfdf]">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-[18px] font-bold text-[#111111] hover:underline">
                <span>{item.q}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5f5f5] text-[#111111] group-open:bg-[#111111] group-open:text-white">
                  <svg className="h-4 w-4 group-open:hidden" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M11 5h2v14h-2zM5 11h14v2H5z" />
                  </svg>
                  <svg className="hidden h-4 w-4 group-open:block" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M5 11h14v2H5z" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 max-w-[62ch] text-[16px] leading-7 text-[#484848]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

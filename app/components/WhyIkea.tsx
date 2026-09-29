import React from "react";

export default function WhyIkea() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#e0e0e0]">
      <div className="space-y-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0058A3] block mb-1">
            Strategie & Onderbouwing
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
            Waarom zou IKEA dit doen?
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mt-2">
            Een strategische en merktechnische analyse van de meerwaarde van Kartonglåda voor IKEA.
          </p>
        </div>

        {/* 4 Pillars Grid - Clean IKEA Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pillar 1 */}
          <div className="p-8 bg-[#f5f5f5] rounded-none space-y-3 border border-transparent hover:border-zinc-300 transition-colors">
            <span className="text-3xl font-black text-[#0058A3] block">01</span>
            <h3 className="text-xl font-extrabold text-zinc-950">
              People & Planet Positive 2030
            </h3>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Sluit naadloos aan bij IKEA&apos;s 2030-ambitie om volledig circulair en klimaatpositief te worden. Verpakkingen op basis van hernieuwbare en gerecyclede materialen krijgen hiermee direct een verlengde levensduur bij de consument thuis.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 bg-[#f5f5f5] rounded-none space-y-3 border border-transparent hover:border-zinc-300 transition-colors">
            <span className="text-3xl font-black text-[#0058A3] block">02</span>
            <h3 className="text-xl font-extrabold text-zinc-950">
              Democratisch Design op verpakkingen
            </h3>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Vertaalt de kernwaarden van Democratisch Design — vorm, functie, kwaliteit, duurzaamheid en een lage prijs — door naar het omhulsel van het product. Iedereen kan zonder extra kosten een mooi object maken.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-[#f5f5f5] p-8 bg-[#f5f5f5] rounded-none space-y-3 border border-transparent hover:border-zinc-300 transition-colors">
            <span className="text-3xl font-black text-[#0058A3] block">03</span>
            <h3 className="text-xl font-extrabold text-zinc-950">
              Moeiteloos duurzaam maken
            </h3>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Maakt de duurzame keuze vanzelfsprekend. Omdat de klant de doos toch al in handen heeft bij een aankoop, kost meedoen geen extra drempel of investering.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-8 bg-[#f5f5f5] rounded-none space-y-3 border border-transparent hover:border-zinc-300 transition-colors">
            <span className="text-3xl font-black text-[#0058A3] block">04</span>
            <h3 className="text-xl font-extrabold text-zinc-950">
              UGC & Bestaande Circulaire Services
            </h3>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Genereert authentieke content (User-Generated Content) op sociale media en legt een directe verbinding met bestaande IKEA-initiatieven zoals de{" "}
              <span className="font-bold text-zinc-950">Tweedekanshoek</span>, de{" "}
              <span className="font-bold text-zinc-950">Terugkoopservice</span> en onderdelenadvies.
            </p>
          </div>
        </div>

        {/* Deloitte Survey Highlight & Kritische Noot Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
          {/* Deloitte Insight Box - Signature IKEA Blue Banner Style */}
          <div className="lg:col-span-8 p-8 sm:p-10 bg-[#0058A3] text-white rounded-none space-y-6 shadow-md">
            <div className="flex items-center gap-2 text-[#FFDA1A] text-xs font-black uppercase tracking-wider">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              Marktinzicht & Gen Z Gedrag
            </div>

            <h3 className="text-2xl sm:text-3xl font-black leading-snug tracking-tight text-white">
              64% van Gen Z wil meer betalen voor duurzaamheid, en 79% wil dat bedrijven duurzame keuzes makkelijker maken.
            </h3>

            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Het Kartonglåda concept speelt direct in op deze behoefte door de drempel voor hergebruik weg te nemen met behulp van reeds aanwezige verpakkingen en intuïtieve smartphone-technologie.
            </p>

            <div className="pt-6 border-t border-blue-400/40 text-xs text-blue-200 space-y-1">
              <p className="font-medium italic">
                * Let op: Deze statistiek meet de uitgesproken intentie van consumenten, niet noodzakelijk hun daadwerkelijke koop- of hergebruikgedrag.
              </p>
              <p className="font-bold text-white uppercase tracking-wider text-[11px]">
                Bron: Deloitte Gen Z & Millennial Survey 2024
              </p>
            </div>
          </div>

          {/* Kritische Noot Box */}
          <div className="lg:col-span-4 p-8 bg-amber-50 border-2 border-amber-300 rounded-none space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-200 text-amber-950 text-xs font-black uppercase rounded-full">
                Kritische noot
              </div>
              <h4 className="text-xl font-black text-amber-950">
                Onderscheidend vermogen
              </h4>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-normal">
                Vergelijkbare upcycling-initiatieven met kartonnen verpakkingen bestaan al op de markt. De unieke waarde van Kartonglåda zit daarom niet in het &apos;eerste zijn&apos;, maar in de wereldwijde schaalbaarheid en de laagdrempelige WebAR-technologie van IKEA.
              </p>
            </div>

            <span className="text-xs text-amber-900 font-bold italic block pt-3 border-t border-amber-200">
              Onderdeel van de studentenanalyse
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

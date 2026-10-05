import Image from "next/image";
import React from "react";

const PILLARS = [
  {
    title: "People & Planet Positive 2030",
    body: "Sluit aan bij IKEA’s ambitie om circulair en klimaatpositief te worden. Hernieuwbare en gerecyclede verpakkingen krijgen een verlengde levensduur — bij de klant thuis.",
  },
  {
    title: "Democratisch Design op de doos",
    body: "Vorm, functie, kwaliteit, duurzaamheid en een lage prijs gelden nu ook voor het omhulsel. Iedereen kan zonder extra kosten iets moois maken.",
  },
  {
    title: "Moeiteloos duurzaam",
    body: "De klant heeft de doos al in handen. Meedoen vraagt geen extra aankoop, geen extra rit, geen extra drempel.",
  },
  {
    title: "UGC én bestaande services",
    body: "Authentieke content op social, plus een brug naar de Tweedekanshoek, de Terugkoopservice en onderdelenadvies.",
  },
] as const;

export default function WhyIkea() {
  return (
    <section id="waarom-ikea" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-[520px] lg:order-1">
          <h2 className="text-[32px] leading-[1.2] font-bold tracking-tight text-[#111111] sm:text-[36px]">
            Waarom zou IKEA dit doen?
          </h2>
          <p className="mt-5 text-[16px] leading-7 text-[#484848]">
            Kartonglåda maakt de duurzame keuze vanzelfsprekend en versterkt wat IKEA al belooft: beter dagelijks leven voor de vele mensen, binnen de grenzen van de planeet.
          </p>
          <a
            href="#family-punten"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#111111] px-8 text-[14px] font-bold text-white hover:bg-[#333333]"
          >
            Ontdek Family-punten
          </a>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5] lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80"
            alt="Interieur met lichte materialen en hergebruikte woonaccessoires"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1400px] grid-cols-1 gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {PILLARS.map((pillar, index) => (
          <div key={pillar.title}>
            <p className="text-[14px] font-bold text-[#0058A3]">0{index + 1}</p>
            <h3 className="mt-3 text-[18px] leading-snug font-bold text-[#111111]">{pillar.title}</h3>
            <p className="mt-3 text-[14px] leading-6 text-[#484848]">{pillar.body}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 grid max-w-[1400px] grid-cols-1 gap-8 px-5 sm:px-8 lg:grid-cols-12">
        <div className="bg-[#0058A3] px-8 py-10 text-white lg:col-span-8 lg:px-12 lg:py-14">
          <p className="text-[12px] font-bold tracking-wide text-[#FFDB00] uppercase">
            Marktinzicht
          </p>
          <h3 className="mt-4 text-[28px] leading-tight font-bold sm:text-[32px]">
            64% van Gen Z wil meer betalen voor duurzaamheid, en 79% wil dat bedrijven duurzame keuzes makkelijker maken.
          </h3>
          <p className="mt-5 max-w-[58ch] text-[16px] leading-7 text-white/85">
            Kartonglåda speelt daarop in: hergebruik via de doos die al in huis is, en vouwhulp via de telefoon die al in je broekzak zit.
          </p>
          <p className="mt-8 border-t border-white/25 pt-5 text-[12px] leading-5 text-white/75">
            Deze cijfers meten uitgesproken intentie, niet automatisch gedrag. Bron: Deloitte Gen Z & Millennial Survey 2024.
          </p>
        </div>
        <div className="flex flex-col justify-center bg-[#f5f5f5] px-8 py-10 lg:col-span-4 lg:px-10">
          <h3 className="text-[22px] font-bold text-[#111111]">Kritische noot</h3>
          <p className="mt-4 text-[14px] leading-6 text-[#484848]">
            Vergelijkbare upcycling-initiatieven bestaan al. De waarde van Kartonglåda zit niet in ‘de eerste zijn’, maar in IKEA-schaal, de doos in elke woning, en laagdrempelige WebAR.
          </p>
        </div>
      </div>
    </section>
  );
}

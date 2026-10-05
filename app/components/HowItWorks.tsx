import Image from "next/image";
import React from "react";

const STEPS = [
  {
    title: "Scan de QR-code op de doos",
    body: "Open de camera van je telefoon en scan de code aan de binnenzijde. Je landt direct in WebAR, zonder installatie.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    alt: "Hand houdt een smartphone boven een tafel",
  },
  {
    title: "Volg de AR-vouwlijnen",
    body: "Kies een project, zoals een plantenpot of opbergdoos. De lijnen liggen over jouw verpakking, stap voor stap.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",
    alt: "Woonhoek met planten en opbergers",
  },
  {
    title: "Deel je creatie en verdien punten",
    body: "Maak een foto, deel met #IKEASecondLife en claim je IKEA Family-punten. Maak ook kans in Out of the box.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    alt: "Jongeren werken samen aan een project",
  },
] as const;

export default function HowItWorks() {
  return (
    <section id="zo-werkt-het" className="bg-[#f5f5f5] py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2 className="max-w-[18ch] text-[32px] leading-[1.2] font-bold tracking-tight text-[#111111] sm:text-[36px]">
          Zo werkt Kartonglåda in 3 stappen
        </h2>
        <p className="mt-4 max-w-[52ch] text-[16px] leading-7 text-[#484848]">
          Van platte doos naar functioneel woonproject. Thuis, met wat je al hebt.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <article key={step.title}>
              <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-white">
                <Image src={step.image} alt={step.alt} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
              <p className="text-[14px] font-bold text-[#0058A3]">{index + 1}</p>
              <h3 className="mt-2 text-[20px] leading-snug font-bold text-[#111111]">{step.title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-[#484848]">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

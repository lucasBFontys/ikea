"use client";

import Image from "next/image";
import React, { useRef } from "react";

const CARDS = [
  {
    title: "Scan & Fold",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    alt: "Iemand scant een QR-code met een smartphone",
    body: "Een QR-code aan de binnenzijde van de doos opent WebAR in je browser. Geen app-download. Je camera legt vouwlijnen over de fysieke IKEA doos.",
    href: "#zo-werkt-het",
    linkLabel: "Bekijk hoe WebAR werkt",
  },
  {
    title: "Vouwpatronen op maat",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80",
    alt: "Plant in een zelfgemaakte opberger",
    body: "Fase 1: een bibliotheek van patronen per doosformaat, zoals een plantenpot of opbergdoos. Fase 2: AI maakt een uniek vouwpatroon op basis van afmetingen en jouw idee.",
    href: "#faq",
    linkLabel: "Lees meer over fase 2",
  },
  {
    title: "Upcycle Challenge",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
    alt: "Kind speelt met een kartonnen creatie",
    body: "Maandelijkse thema’s zoals de kinderkamer-editie of small space-editie. De community stemt, IKEA licht de meest vindingrijke inzendingen uit.",
    href: "#out-of-the-box",
    linkLabel: "Doe mee met de competitie",
  },
] as const;

export default function Carousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === "left" ? -380 : 380;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="bouwstenen" aria-label="Drie bouwstenen" className="py-8 sm:py-12">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <a
          href="#after-carousel"
          className="sr-only focus:not-sr-only focus:mb-4 focus:inline-block focus:rounded-full focus:bg-[#0058A3] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
        >
          Carrousel overslaan en verder lezen
        </a>

        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="max-w-[20ch] text-[32px] leading-[1.2] font-bold tracking-tight text-[#111111] sm:text-[36px]">
            Drie bouwstenen van Kartonglåda
          </h2>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={() => handleScroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#dfdfdf] bg-white text-[#111111] hover:bg-[#f5f5f5]"
              aria-label="Vorige kaart"
              type="button"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#dfdfdf] bg-white text-[#111111] hover:bg-[#f5f5f5]"
              aria-label="Volgende kaart"
              type="button"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
          tabIndex={0}
          aria-label="Bouwstenen carrousel kaarten"
        >
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="w-[min(86vw,380px)] shrink-0 snap-start"
            >
              <div className="relative mb-5 aspect-square overflow-hidden bg-[#f5f5f5]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="380px"
                />
              </div>
              <h3 className="text-[22px] leading-snug font-bold text-[#111111]">{card.title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-[#484848]">{card.body}</p>
              <a
                href={card.href}
                className="mt-4 inline-block text-[14px] font-bold text-[#111111] underline hover:opacity-70"
              >
                {card.linkLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
      <div id="after-carousel" tabIndex={-1} />
    </section>
  );
}

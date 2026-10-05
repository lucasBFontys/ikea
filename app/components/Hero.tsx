import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="grid min-h-[72vh] grid-cols-1 lg:grid-cols-2">
        <div className="mx-auto flex w-full max-w-[700px] flex-col justify-center px-5 py-14 sm:px-10 lg:px-16 xl:px-20">
          <p className="mb-4 text-[14px] font-bold text-[#0058A3]">Kartonglåda</p>
          <h1 className="text-[40px] leading-[1.1] font-bold tracking-tight text-[#111111] sm:text-[48px]">
            Flat-pack.
            <br />
            Second life.
          </h1>
          <p className="mt-6 max-w-[42ch] text-[16px] leading-7 text-[#484848]">
            Een IKEA doos is nooit zomaar klaar. Wat voor jou verpakkingsafval lijkt, is het begin van een nieuw project. Met Kartonglåda geef je kartonnen verpakkingen een tweede leven — thuis, zonder extra aankoop.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#zo-werkt-het"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#111111] px-8 text-[14px] font-bold text-white hover:bg-[#333333]"
            >
              Ontdek hoe het werkt
            </a>
            <a
              href="#out-of-the-box"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#111111] bg-white px-8 text-[14px] font-bold text-[#111111] hover:bg-[#f5f5f5]"
            >
              Doe mee met Out of the box
            </a>
          </div>
          <a
            href="#ons-idee"
            className="mt-12 inline-flex h-10 w-10 items-center justify-center text-[#111111] hover:opacity-70"
            aria-label="Ga verder naar ons idee"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 10l6 6 6-6" />
            </svg>
          </a>
        </div>

        <div className="relative min-h-[46vh] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1615874959471-b27add55b000?auto=format&fit=crop&w=1800&q=80"
            alt="Lichte woonkamer met houten meubels, planten en kartonnen dozen klaar voor een tweede leven"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}

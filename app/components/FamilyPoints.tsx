import Image from "next/image";
import React from "react";

const BENEFITS = [
  "Scan de QR op de doos — geen extra app",
  "Spaar punten per voltooid vouwproject",
  "Digitale badges in je IKEA Family-profiel",
  "Wissel in bij winkel- en circulaire services",
] as const;

export default function FamilyPoints() {
  return (
    <section id="family-punten" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="max-w-[540px]">
          <p className="text-[14px] font-bold text-[#0058A3]">IKEA Family</p>
          <h2 className="mt-3 text-[32px] leading-[1.2] font-bold tracking-tight text-[#111111] sm:text-[36px]">
            Een pas die je nooit meer kwijtraakt — en punten voor hergebruik
          </h2>
          <p className="mt-5 text-[16px] leading-7 text-[#484848]">
            Je IKEA Family-pas zit in de IKEA app. Met Kartonglåda spaar je extra punten als je de doos een tweede leven geeft: scannen, vouwen, foto delen.
          </p>
          <ul className="mt-8 space-y-3">
            {BENEFITS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] leading-6 text-[#111111]">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#111111] text-[11px] font-bold text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["1. Scan", "2. Vouw", "3. Deel", "4. Punten"].map((step) => (
              <div key={step} className="bg-[#f5f5f5] px-3 py-4 text-center text-[13px] font-bold">
                {step}
              </div>
            ))}
          </div>
          <a
            href="#out-of-the-box"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#111111] px-8 text-[14px] font-bold text-white hover:bg-[#333333]"
          >
            Word lid of log in
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[380px]">
          <div className="overflow-hidden rounded-[36px] border-[10px] border-[#111111] bg-[#111111] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            <div className="bg-[#f5f5f5] px-5 pt-4 pb-8">
              <div className="mb-4 flex items-center justify-between text-[11px] text-[#484848]">
                <span>09:41</span>
                <span>IKEA</span>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <span className="bg-[#0058A3] px-1.5 py-0.5 text-[10px] font-black tracking-tight text-[#FFDB00]">
                  IKEA
                </span>
                <span className="text-[13px] font-bold">Family</span>
              </div>
              <div className="relative overflow-hidden bg-[#0058A3] p-5 text-white">
                <p className="text-[11px] font-bold tracking-wide text-[#FFDB00] uppercase">
                  IKEA Family lid
                </p>
                <p className="mt-1 text-[20px] font-bold">Alex de Vries</p>
                <div className="mt-5 flex items-center justify-between bg-white p-3 text-[#111111]">
                  <div>
                    <p className="text-[11px] font-bold text-[#484848] uppercase">Kartonglåda punten</p>
                    <p className="text-[15px] font-bold">Actief upcycler</p>
                  </div>
                  <svg className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm8-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm13-2h5v5h-5v-5zm2 7h3v3h-3v-3z" />
                  </svg>
                </div>
                <p className="mt-3 text-[11px] text-white/80">Pasnummer 9988 **** 1234</p>
              </div>
              <div className="relative mt-4 h-36 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=800&q=80"
                  alt="Gezin in een lichte woonkamer"
                  fill
                  className="object-cover"
                  sizes="340px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

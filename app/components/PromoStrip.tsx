import React from "react";

export default function PromoStrip() {
  return (
    <div className="bg-[#0058A3] text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
      <span>Duurzaam leven begint thuis — Geef IKEA kartonnen dozen een tweede leven</span>
      <span className="hidden sm:inline-block text-zinc-300">|</span>
      <a
        href="#ons-idee"
        className="underline font-semibold hover:text-[#FFDA1A] transition-colors inline-flex items-center gap-1"
      >
        Ontdek Kartonglåda
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
}

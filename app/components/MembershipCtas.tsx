import React from "react";

export default function MembershipCtas() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10 sm:py-14 border-t border-[#dfdfdf]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CTA Card 1 */}
        <div className="bg-[#0058A3] text-white rounded-none p-8 sm:p-12 flex flex-col justify-between space-y-6 shadow-md">
          <div className="space-y-4">
            <span className="inline-block px-3.5 py-1 bg-[#FFDA1A] text-black font-black text-xs uppercase tracking-wider rounded-full">
              IKEA Family
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Word gratis IKEA Family lid
            </h3>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
              Ontvang exclusieve ledenaanbiedingen, inspireer jezelf met woonideeën en spaar mee in al onze duurzame concepten.
            </p>
          </div>

          <div>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#FFDA1A] hover:bg-[#e6c417] text-black font-black rounded-full text-sm transition-colors shadow-xs"
            >
              Word gratis lid
            </a>
          </div>
        </div>

        {/* CTA Card 2 */}
        <div className="bg-[#f5f5f5] text-zinc-950 rounded-none p-8 sm:p-12 flex flex-col justify-between space-y-6 border border-[#dfdfdf]">
          <div className="space-y-4">
            <span className="inline-block px-3.5 py-1 bg-zinc-950 text-white font-black text-xs uppercase tracking-wider rounded-full">
              IKEA voor Bedrijven
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              Sluit je aan bij IKEA Business
            </h3>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              Ontdek slimme, duurzame en betaalbare inrichtingsoplossingen en zakelijk advies voor jouw kantoren of onderneming.
            </p>
          </div>

          <div>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-black hover:bg-zinc-800 text-white font-black rounded-full text-sm transition-colors shadow-xs"
            >
              Ontdek IKEA Business
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

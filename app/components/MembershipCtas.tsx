import React from "react";

export default function MembershipCtas() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-zinc-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CTA 1: IKEA Family */}
        <div className="bg-[#0058A3] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-md">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-[#FFDA1A] text-black font-extrabold text-xs uppercase tracking-wider rounded-full">
              IKEA Family
            </span>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              Word gratis IKEA Family lid
            </h3>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Ontvang exclusieve ledenaanbiedingen, inspireer jezelf met woonideeën en spaar mee in al onze duurzame concepten.
            </p>
          </div>

          <div>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#FFDA1A] hover:bg-[#e6c417] text-black font-extrabold rounded-full text-sm transition-colors shadow-xs"
            >
              Word gratis lid
            </a>
          </div>
        </div>

        {/* CTA 2: IKEA Business */}
        <div className="bg-zinc-100 border border-zinc-200 text-zinc-950 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-xs">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-zinc-900 text-white font-extrabold text-xs uppercase tracking-wider rounded-full">
              IKEA voor Bedrijven
            </span>
            <h3 className="text-3xl font-extrabold text-zinc-950 tracking-tight">
              Sluit je aan bij IKEA Business
            </h3>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
              Ontdek slimme, duurzame en betaalbare inrichtingsoplossingen en zakelijk advies voor jouw kantoren of onderneming.
            </p>
          </div>

          <div>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white font-extrabold rounded-full text-sm transition-colors shadow-xs"
            >
              Ontdek IKEA Business
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import React from "react";

export default function IdeaSection() {
  return (
    <section id="ons-idee" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5]">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80"
            alt="Lichte keuken en woonruimte waar spullen langer meegaan"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="max-w-[520px]">
          <h2 className="text-[32px] leading-[1.2] font-bold tracking-tight text-[#111111] sm:text-[36px]">
            Ons idee: verpakking als grondstof
          </h2>
          <p className="mt-5 text-[16px] leading-7 text-[#484848]">
            De doos die je al gekocht hebt krijgt een tweede leven, zodat duurzamer kiezen geen extra moeite kost. In plaats van verpakkingsafval direct bij het oud papier te gooien, vouw je de IKEA doos om tot iets bruikbaars — met vouwlijnen, WebAR en een bibliotheek van patronen.
          </p>
          <p className="mt-4 text-[16px] leading-7 text-[#484848]">
            Van pakket naar project. Voor Gen Z, jonge millennials en gezinnen die circulair willen wonen, zonder een extra product te kopen.
          </p>
          <a
            href="#bouwstenen"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#111111] px-8 text-[14px] font-bold text-white hover:bg-[#333333]"
          >
            Bekijk de drie bouwstenen
          </a>
        </div>
      </div>
    </section>
  );
}

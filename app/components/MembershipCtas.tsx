import React from "react";

export default function MembershipCtas() {
  return (
    <section className="border-t border-[#dfdfdf] bg-[#f5f5f5] py-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 sm:px-8 md:grid-cols-2">
        <div>
          <h2 className="text-[22px] font-bold text-[#111111]">Word IKEA Family lid</h2>
          <p className="mt-3 max-w-[42ch] text-[14px] leading-6 text-[#484848]">
            Als IKEA Family lid profiteer je van voordelen zoals kortingen, workshops en — in dit concept — extra punten voor hergebruik van je doos. Het is gratis.
          </p>
          <a href="#family-punten" className="mt-4 inline-block text-[14px] font-bold text-[#111111] underline hover:opacity-70">
            Lees meer
          </a>
          <div className="mt-5">
            <a
              href="#family-punten"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#111111] px-8 text-[14px] font-bold text-white hover:bg-[#333333]"
            >
              Word lid of log in
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-[22px] font-bold text-[#111111]">Word IKEA Business Netwerk lid</h2>
          <p className="mt-3 max-w-[42ch] text-[14px] leading-6 text-[#484848]">
            Unieke voordelen en services voor zakelijke klanten. Van kantoorinrichting tot advies.
          </p>
          <a href="#" className="mt-4 inline-block text-[14px] font-bold text-[#111111] underline hover:opacity-70">
            Lees meer
          </a>
          <div className="mt-5">
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#111111] px-8 text-[14px] font-bold text-white hover:bg-[#333333]"
            >
              Word lid of log in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

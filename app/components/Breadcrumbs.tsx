import React from "react";

export default function Breadcrumbs() {
  return (
    <nav aria-label="Kruimelpad" className="mx-auto max-w-[1400px] px-5 pt-4 pb-2 sm:px-8">
      <ol className="flex flex-wrap items-center gap-1 text-[12px] text-[#484848]">
        <li>
          <a href="#" className="hover:underline hover:text-[#111111]">
            Wooninspiratie
          </a>
        </li>
        <li aria-hidden="true" className="px-1 text-[#767676]">
          /
        </li>
        <li>
          <a href="#" className="hover:underline hover:text-[#111111]">
            Duurzaam leven
          </a>
        </li>
        <li aria-hidden="true" className="px-1 text-[#767676]">
          /
        </li>
        <li className="font-bold text-[#111111]" aria-current="page">
          Kartonglåda
        </li>
      </ol>
    </nav>
  );
}

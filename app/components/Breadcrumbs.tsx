import React from "react";

export default function Breadcrumbs() {
  return (
    <nav aria-label="Kruimelpad" className="max-w-[1440px] mx-auto px-4 sm:px-8 py-4">
      <ol className="flex items-center space-x-2 text-xs text-zinc-600 flex-wrap">
        <li>
          <a href="#" className="hover:underline hover:text-zinc-950 font-normal transition-colors">
            Wooninspiratie
          </a>
        </li>
        <li aria-hidden="true" className="text-zinc-400">
          /
        </li>
        <li>
          <a href="#" className="hover:underline hover:text-zinc-950 font-normal transition-colors">
            Duurzaam leven
          </a>
        </li>
        <li aria-hidden="true" className="text-zinc-400">
          /
        </li>
        <li className="font-bold text-zinc-950" aria-current="page">
          Kartonglåda
        </li>
      </ol>
    </nav>
  );
}

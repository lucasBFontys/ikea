import React from "react";

export default function Breadcrumbs() {
  return (
    <nav aria-label="Kruimelpad" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <ol className="flex items-center space-x-2 text-xs sm:text-sm text-zinc-600 flex-wrap">
        <li>
          <a href="#" className="hover:underline hover:text-black transition-colors">
            Wooninspiratie
          </a>
        </li>
        <li aria-hidden="true" className="text-zinc-400">
          /
        </li>
        <li>
          <a href="#" className="hover:underline hover:text-black transition-colors">
            Duurzaam leven
          </a>
        </li>
        <li aria-hidden="true" className="text-zinc-400">
          /
        </li>
        <li className="font-semibold text-zinc-900" aria-current="page">
          Kartonglåda
        </li>
      </ol>
    </nav>
  );
}

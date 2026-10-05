import React from "react";
import IkeaLogo from "./IkeaLogo";

const COLUMNS = [
  {
    title: "Klantenservice",
    links: [
      "Klantenservice",
      "Mijn bestellingen",
      "Ruilen en retourneren",
      "Transport en bezorging",
      "Voorraadinformatie",
      "Services",
      "Garantie",
      "Onderhoud & reparatie",
    ],
  },
  {
    title: "Over IKEA",
    links: [
      "Dit is IKEA",
      "Het IKEA concept",
      "Kleine veranderingen, elke dag",
      "Wooninspiratie",
      "IKEA Nieuws",
      "Catalogus & brochures",
      "Campagnes",
      "Werken bij IKEA",
    ],
  },
  {
    title: "Winkelen bij IKEA",
    links: [
      "Openingstijden",
      "Alle vestigingen",
      "Alle producten",
      "Aanbiedingen",
      "Zweeds restaurant",
      "Zweedse delicatessen",
      "IKEA App",
      "Cadeaukaart",
    ],
  },
  {
    title: "IKEA Family & Business",
    links: [
      "Log in",
      "Meld je aan",
      "Over IKEA Family",
      "Voordelen",
      "Activiteiten & evenementen",
      "IKEA for Business",
      "Kartonglåda",
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-[#111111]">
      <div className="mx-auto max-w-[1400px] px-5 pt-4 pb-10 sm:px-8">
        <div className="grid grid-cols-2 gap-10 border-t border-[#dfdfdf] pt-12 lg:grid-cols-4">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-[14px] font-bold">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[14px] text-[#484848] hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-[#dfdfdf] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <IkeaLogo className="h-7 w-auto" />
            <span className="text-[12px] text-[#484848]">Volg IKEA</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="#" aria-label="Volg IKEA op Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111111] hover:bg-white">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" aria-label="Volg IKEA op Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111111] hover:bg-white">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a href="#" aria-label="Volg IKEA op YouTube" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111111] hover:bg-white">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.377 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[#dfdfdf] pt-6 text-[12px] text-[#484848] md:flex-row md:items-start md:justify-between">
          <p>© Inter IKEA Systems B.V. 1999-2026</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Algemene voorwaarden
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Verklaring digitale toegankelijkheid
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-6 max-w-[72ch] text-[12px] leading-5 text-[#767676]">
          Studentenconcept voor de Minor Digital Marketing, Fontys ICT. Geen officiële IKEA-pagina, niet voor commercieel gebruik. Kartonglåda en Out of the box zijn fictieve campagnenamen voor een presentatie.
        </p>
      </div>
    </footer>
  );
}

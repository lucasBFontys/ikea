"use client";

import React, { useState } from "react";
import IkeaLogo from "./IkeaLogo";

const NAV_ITEMS = ["Producten", "Ruimtes", "Koopjes", "Ontwerp", "Services"] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[100] focus:rounded-full focus:bg-[#0058A3] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Ga door naar de hoofdinhoud
      </a>

      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-5 py-4 sm:px-8 lg:gap-10">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f5f5f5] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Sluit het navigatiemenu" : "Open het navigatiemenu"}
          onClick={handleToggleMenu}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4 17.6 5 12 10.6 6.4 5z" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M20 8H4V6h16v2zm0 5H4v-2h16v2zm0 5H4v-2h16v2z" />
            </svg>
          )}
        </button>

        <a href="#" className="shrink-0" aria-label="IKEA Startpagina">
          <IkeaLogo className="h-8 w-auto sm:h-9" />
        </a>

        <nav aria-label="Hoofdnavigatie" className="hidden flex-1 items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[14px] font-normal text-[#111111] hover:underline"
            >
              {item}
            </a>
          ))}
        </nav>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="relative ml-auto hidden min-w-[220px] flex-1 max-w-[420px] sm:block"
        >
          <label htmlFor="ikea-search-input" className="sr-only">
            Waar ben je naar op zoek?
          </label>
          <svg
            className="pointer-events-none absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2 text-[#111111]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.9804 15.3946c-1.0361.7502-2.3099 1.1925-3.6869 1.1925C6.8177 16.5871 4 13.7694 4 10.2935 4 6.8177 6.8177 4 10.2935 4c3.4759 0 6.2936 2.8177 6.2936 6.2935 0 1.377-.4423 2.6508-1.1925 3.6869l4.6016 4.6016-1.4142 1.4142-4.6016-4.6016zm.6067-5.1011c0 2.3713-1.9223 4.2936-4.2936 4.2936C7.9223 14.5871 6 12.6648 6 10.2935 6 7.9223 7.9223 6 10.2935 6c2.3713 0 4.2936 1.9223 4.2936 4.2935z"
            />
          </svg>
          <input
            id="ikea-search-input"
            type="search"
            placeholder="Waar ben je naar op zoek?"
            className="h-11 w-full rounded-full border-0 bg-[#f5f5f5] pr-4 pl-11 text-[14px] text-[#111111] placeholder:text-[#767676] hover:bg-[#ececec] focus:bg-white focus:ring-1 focus:ring-[#929292] focus:outline-hidden"
          />
        </form>

        <div className="flex shrink-0 items-center">
          <a
            href="#"
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-[14px] font-bold hover:bg-[#f5f5f5] xl:inline-flex"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6724 6.4678c.2734-.2812.6804-.4707 1.3493-.4707.3971 0 .705.0838.9529.2225.241.1348.4379.3311.5934.6193l.0033.006c.1394.2541.237.6185.237 1.1403 0 .7856-.2046 1.2451-.4796 1.5278l-.0048.005c-.2759.2876-.679.4764-1.334.4764-.3857 0-.6962-.082-.956-.2241-.2388-.1344-.4342-.3293-.5888-.6147-.1454-.275-.2419-.652-.2419-1.1704 0-.7902.2035-1.2442.4692-1.5174zm1.3493-2.4717c-1.0834 0-2.054.3262-2.7838 1.0766-.7376.7583-1.0358 1.781-1.0358 2.9125 0 .7656.1431 1.483.4773 2.112l.0031.0058c.3249.602.785 1.084 1.3777 1.4154l.0062.0035c.5874.323 1.2368.4736 1.9235.4736 1.0818 0 2.0484-.3333 2.7755-1.0896.7406-.7627 1.044-1.786 1.044-2.9207 0-.7629-.1421-1.4784-.482-2.0996-.3247-.6006-.7844-1.0815-1.376-1.4125-.5858-.3276-1.2388-.477-1.9297-.477zM6.4691 16.8582c.2983-.5803.7228-1.0273 1.29-1.3572.5582-.3191 1.2834-.5049 2.2209-.5049h4.04c.9375 0 1.6626.1858 2.2209.5049.5672.3299.9917.7769 1.29 1.3572.3031.5896.4691 1.2936.4691 2.1379v1h2v-1c0-1.1122-.2205-2.1384-.6904-3.0523a5.3218 5.3218 0 0 0-2.0722-2.1769c-.9279-.5315-2.0157-.7708-3.2174-.7708H9.98c-1.1145 0-2.2483.212-3.2225.7737-.8982.5215-1.5928 1.2515-2.0671 2.174C4.2205 16.8577 4 17.8839 4 18.9961v1h2v-1c0-.8443.166-1.5483.4691-2.1379z"
              />
            </svg>
            Hej! Log in
          </a>
          <a
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f5f5f5]"
            aria-label="Boodschappenlijstje"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f5f5f5]"
            aria-label="Winkelwagen"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0001 4c1.7049 0 2.9807 1.122 3.4579 2.7127.3246 1.0819.5718 2.1886.8335 3.2873h6.1516l-3.75 10H5.3072l-3.75-10h6.1516c.2617-1.0987.509-2.2054.8335-3.2873C9.0195 5.122 10.2953 4 12.0001 4zm2.2349 6H9.7653c.2293-.9532.5299-2.1701.6927-2.7127C10.6843 6.533 11.1743 6 12.0001 6s1.3159.533 1.5422 1.2873c.1628.5426.4634 1.7595.6927 2.7127zm-9.7919 2 2.2501 6h10.6139l2.25-6h-3.3252c-.6633 2.1065-1.7664 4-4.2318 4-2.4653 0-3.5685-1.8935-4.2318-4H4.4432zm5.4309 0c.3635 1.0612.8841 2 2.1261 2 1.2421 0 1.7627-.9388 2.1262-2H9.874z"
              />
            </svg>
          </a>
        </div>
      </div>

      {menuOpen ? (
        <div id="mobile-nav" className="border-t border-[#dfdfdf] bg-white px-5 py-4 lg:hidden">
          <nav aria-label="Mobiele navigatie" className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#"
                onClick={handleCloseMenu}
                className="border-b border-[#f5f5f5] py-3 text-[16px] font-bold text-[#111111]"
              >
                {item}
              </a>
            ))}
            <a href="#" onClick={handleCloseMenu} className="py-3 text-[16px] font-bold">
              Hej! Log in
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

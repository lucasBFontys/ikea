"use client";

import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#dfdfdf] font-sans">
      {/* Skip to Main Content Accessibility Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#0058A3] focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-bold text-sm shadow-lg"
      >
        Ga door naar de hoofdinhoud
      </a>

      {/* 1:1 IKEA Utility Bar */}
      <div className="bg-[#f5f5f5] border-b border-[#e5e5e5] text-xs text-zinc-900 py-2 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          {/* Left: Language Selector */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="inline-flex items-center gap-2 font-medium hover:underline focus:outline-hidden text-zinc-800"
              aria-label="Wijzig taal of land/regio"
            >
              <svg
                className="w-4 h-4 text-zinc-700"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.7467 18.1766C12.9482 19.7737 12.2151 20 12 20c-.2151 0-.9482-.2263-1.7467-1.8234-.3065-.6131-.5745-1.3473-.7831-2.1766h5.0596c-.2086.8293-.4766 1.5635-.7831 2.1766zM14.8885 14h-5.777A17.7354 17.7354 0 0 1 9 12c0-.6949.0392-1.3641.1115-2h5.777c.0723.6359.1115 1.3051.1115 2 0 .6949-.0392 1.3641-.1115 2zm1.6955 2c-.2658 1.2166-.6492 2.307-1.1213 3.2138A8.0347 8.0347 0 0 0 18.9297 16H16.584zm3.164-2H16.9c.0656-.6462.1-1.3151.1-2 0-.6849-.0344-1.3538-.1-2h2.848A8.0156 8.0156 0 0 1 20 12a8.0156 8.0156 0 0 1-.252 2zm-.8183-6a8.035 8.035 0 0 0-3.467-3.2138c.4721.9068.8555 1.9972 1.1213 3.2138h2.3457zm-4.3999 0c-.2086-.8293-.4766-1.5635-.7831-2.1766C12.9482 4.2264 12.2151 4 12 4c-.2151 0-.9482.2263-1.7467 1.8234-.3065.613-.5745 1.3473-.7831 2.1766h5.0596zM7.416 8c.2658-1.2166.6491-2.307 1.1213-3.2138A8.035 8.035 0 0 0 5.0703 8H7.416zm-3.164 2A8.0147 8.0147 0 0 0 4 12c0 .6906.0875 1.3608.252 2H7.1a19.829 19.829 0 0 1-.1-2c0-.6849.0344-1.3538.1-2H4.252zm3.164 6H5.0704a8.0347 8.0347 0 0 0 3.467 3.2138C8.0651 18.307 7.6818 17.2166 7.4161 16zM22 12c0-5.5229-4.4772-10-10-10C6.4771 2 2 6.4771 2 12c0 5.5228 4.4771 10 10 10 5.5228 0 10-4.4772 10-10z"
                />
              </svg>
              <span className="font-bold">NL</span>
              <span>Nederlands</span>
            </button>
          </div>

          {/* Right: Postcode & Store Pickers */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="inline-flex items-center gap-2 font-medium hover:underline focus:outline-hidden text-zinc-800"
              aria-label="Vul je postcode in"
            >
              <svg
                className="w-4 h-4 text-zinc-700"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 4h15v3h3.0246l3.9793 5.6848V18h-2.6567c-.4218 1.3056-1.6473 2.25-3.0933 2.25-1.446 0-2.6715-.9444-3.0932-2.25h-3.9044c-.4217 1.3056-1.6472 2.25-3.0932 2.25S4.4916 19.3056 4.0698 18H1V4zm3.0698 12c.4218-1.3056 1.6473-2.25 3.0933-2.25 1.446 0 2.6715.9444 3.0932 2.25H14V6H3v10h1.0698zM16 14.0007a3.24 3.24 0 0 1 1.2539-.2507c1.446 0 2.6715.9444 3.0933 2.25h.6567v-2.6848L17.9833 9H16v5.0007zM7.163 15.75c-.6903 0-1.25.5596-1.25 1.25s.5597 1.25 1.25 1.25c.6904 0 1.25-.5596 1.25-1.25s-.5596-1.25-1.25-1.25zm10.0909 0c-.6904 0-1.25.5596-1.25 1.25s.5596 1.25 1.25 1.25 1.25-.5596 1.25-1.25-.5596-1.25-1.25-1.25z"
                />
              </svg>
              <span>Vul je postcode in</span>
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 font-medium hover:underline focus:outline-hidden text-zinc-800"
              aria-label="Selecteer winkel"
            >
              <svg
                className="w-4 h-4 text-zinc-700"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 4v16h20V4H2zm2 4V6h16v2H4zm0 2v8h3v-6h10v6h3v-8H4zm11 4h-2v4h2v-4zm-4 0H9v4h2v-4z"
                />
              </svg>
              <span>Selecteer winkel</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar (Logo, Categories, Search, Icons) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#"
              className="inline-block hover:opacity-90 transition-opacity"
              aria-label="IKEA Startpagina"
            >
              <div className="bg-[#0058A3] text-[#FFDA1A] font-black text-3xl tracking-tighter px-4 py-1.5 rounded-xs flex items-center justify-center">
                IKEA
              </div>
            </a>
          </div>

          {/* Search Box */}
          <div className="flex-1 max-w-2xl">
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <label htmlFor="ikea-search-input" className="sr-only">
                Waar ben je naar op zoek?
              </label>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-800">
                <svg
                  className="w-5 h-5"
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
              </div>
              <input
                id="ikea-search-input"
                type="search"
                placeholder="Waar ben je naar op zoek?"
                className="w-full pl-11 pr-10 py-3 bg-[#f5f5f5] hover:bg-[#eaeaea] focus:bg-white rounded-full text-sm font-medium text-zinc-900 placeholder-zinc-500 border border-transparent focus:border-zinc-400 focus:outline-hidden transition-colors"
              />
            </form>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Hej! Log in */}
            <a
              href="#"
              className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-full hover:bg-[#f5f5f5] transition-colors text-xs sm:text-sm font-bold text-zinc-900"
            >
              <svg
                className="w-6 h-6 text-zinc-900"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6724 6.4678c.2734-.2812.6804-.4707 1.3493-.4707.3971 0 .705.0838.9529.2225.241.1348.4379.3311.5934.6193l.0033.006c.1394.2541.237.6185.237 1.1403 0 .7856-.2046 1.2451-.4796 1.5278l-.0048.005c-.2759.2876-.679.4764-1.334.4764-.3857 0-.6962-.082-.956-.2241-.2388-.1344-.4342-.3293-.5888-.6147-.1454-.275-.2419-.652-.2419-1.1704 0-.7902.2035-1.2442.4692-1.5174zm1.3493-2.4717c-1.0834 0-2.054.3262-2.7838 1.0766-.7376.7583-1.0358 1.781-1.0358 2.9125 0 .7656.1431 1.483.4773 2.112l.0031.0058c.3249.602.785 1.084 1.3777 1.4154l.0062.0035c.5874.323 1.2368.4736 1.9235.4736 1.0818 0 2.0484-.3333 2.7755-1.0896.7406-.7627 1.044-1.786 1.044-2.9207 0-.7629-.1421-1.4784-.482-2.0996-.3247-.6006-.7844-1.0815-1.376-1.4125-.5858-.3276-1.2388-.477-1.9297-.477zM6.4691 16.8582c.2983-.5803.7228-1.0273 1.29-1.3572.5582-.3191 1.2834-.5049 2.2209-.5049h4.04c.9375 0 1.6626.1858 2.2209.5049.5672.3299.9917.7769 1.29 1.3572.3031.5896.4691 1.2936.4691 2.1379v1h2v-1c0-1.1122-.2205-2.1384-.6904-3.0523a5.3218 5.3218 0 0 0-2.0722-2.1769c-.9279-.5315-2.0157-.7708-3.2174-.7708H9.98c-1.1145 0-2.2483.212-3.2225.7737-.8982.5215-1.5928 1.2515-2.0671 2.174C4.2205 16.8577 4 17.8839 4 18.9961v1h2v-1c0-.8443.166-1.5483.4691-2.1379z"
                />
              </svg>
              <span className="hidden sm:inline font-bold">Hej! Log in</span>
            </a>

            {/* Boodschappenlijstje */}
            <a
              href="#"
              className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-full hover:bg-[#f5f5f5] transition-colors text-xs sm:text-sm font-bold text-zinc-900"
              aria-label="Boodschappenlijstje"
            >
              <svg
                className="w-6 h-6 text-zinc-900"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.205 5.599c.9541.954 1.4145 2.2788 1.4191 3.6137 0 3.0657-2.2028 5.7259-4.1367 7.5015-1.2156 1.1161-2.5544 2.1393-3.9813 2.9729L12 20.001l-.501-.3088c-.9745-.5626-1.8878-1.2273-2.7655-1.9296-1.1393-.9117-2.4592-2.1279-3.5017-3.5531-1.0375-1.4183-1.8594-3.1249-1.8597-4.9957-.0025-1.2512.3936-2.5894 1.419-3.6149 1.8976-1.8975 4.974-1.8975 6.8716 0l.3347.3347.336-.3347c1.8728-1.8722 4.9989-1.8727 6.8716 0zm-7.2069 12.0516c.6695-.43 1.9102-1.2835 3.1366-2.4096 1.8786-1.7247 3.4884-3.8702 3.4894-6.0264-.0037-.849-.2644-1.6326-.8333-2.2015-1.1036-1.1035-2.9413-1.0999-4.0445.0014l-1.7517 1.7448-1.7461-1.7462c-1.1165-1.1164-2.9267-1.1164-4.0431 0-1.6837 1.6837-.5313 4.4136.6406 6.0156.8996 1.2298 2.0728 2.3207 3.137 3.1722a24.3826 24.3826 0 0 0 2.0151 1.4497z"
                />
              </svg>
              <span className="hidden lg:inline font-bold">Boodschappenlijstje</span>
            </a>

            {/* Winkelwagen */}
            <a
              href="#"
              className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-full hover:bg-[#f5f5f5] transition-colors text-xs sm:text-sm font-bold text-zinc-900"
              aria-label="Winkelwagen"
            >
              <svg
                className="w-6 h-6 text-zinc-900"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0001 4c1.7049 0 2.9807 1.122 3.4579 2.7127.3246 1.0819.5718 2.1886.8335 3.2873h6.1516l-3.75 10H5.3072l-3.75-10h6.1516c.2617-1.0987.509-2.2054.8335-3.2873C9.0195 5.122 10.2953 4 12.0001 4zm2.2349 6H9.7653c.2293-.9532.5299-2.1701.6927-2.7127C10.6843 6.533 11.1743 6 12.0001 6s1.3159.533 1.5422 1.2873c.1628.5426.4634 1.7595.6927 2.7127zm-9.7919 2 2.2501 6h10.6139l2.25-6h-3.3252c-.6633 2.1065-1.7664 4-4.2318 4-2.4653 0-3.5685-1.8935-4.2318-4H4.4432zm5.4309 0c.3635 1.0612.8841 2 2.1261 2 1.2421 0 1.7627-.9388 2.1262-2H9.874z"
                />
              </svg>
              <span className="hidden lg:inline font-bold">Winkelwagen</span>
            </a>

            {/* Hamburger Menu Mobile */}
            <button
              type="button"
              className="md:hidden p-2 rounded-full hover:bg-[#f5f5f5]"
              aria-label="Open het navigatiemenu"
            >
              <svg
                className="w-6 h-6 text-zinc-900"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 8H4V6h16v2zm0 5H4v-2h16v2zm0 5H4v-2h16v2z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Category Nav Links Bar */}
        <nav
          aria-label="Hoofdnavigatie"
          className="hidden md:flex items-center space-x-8 pt-3 pb-1 border-t border-[#f0f0f0] text-sm font-extrabold text-zinc-900"
        >
          <a href="#" className="hover:underline hover:text-[#0058A3] py-1">
            Producten
          </a>
          <a href="#" className="hover:underline hover:text-[#0058A3] py-1">
            Ruimtes
          </a>
          <a href="#" className="hover:underline hover:text-[#0058A3] py-1">
            Koopjes
          </a>
          <a href="#" className="hover:underline hover:text-[#0058A3] py-1">
            Ontwerp
          </a>
          <a href="#" className="hover:underline hover:text-[#0058A3] py-1">
            Services
          </a>
        </nav>
      </div>
    </header>
  );
}

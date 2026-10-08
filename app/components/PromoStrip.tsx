import React from "react";

export default function PromoStrip() {
  return (
    <div className="bg-[#111111] text-white text-[12px] leading-none">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-[11px] sm:px-8">
        <button
          type="button"
          className="inline-flex items-center gap-2 hover:underline focus-visible:outline-offset-4"
          aria-label="Wijzig taal of land/regio, huidige taal is Nederlands"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.7467 18.1766C12.9482 19.7737 12.2151 20 12 20c-.2151 0-.9482-.2263-1.7467-1.8234-.3065-.6131-.5745-1.3473-.7831-2.1766h5.0596c-.2086.8293-.4766 1.5635-.7831 2.1766zM14.8885 14h-5.777A17.7354 17.7354 0 0 1 9 12c0-.6949.0392-1.3641.1115-2h5.777c.0723.6359.1115 1.3051.1115 2 0 .6949-.0392 1.3641-.1115 2zm1.6955 2c-.2658 1.2166-.6492 2.307-1.1213 3.2138A8.0347 8.0347 0 0 0 18.9297 16H16.584zm3.164-2H16.9c.0656-.6462.1-1.3151.1-2 0-.6849-.0344-1.3538-.1-2h2.848A8.0156 8.0156 0 0 1 20 12a8.0156 8.0156 0 0 1-.252 2zm-.8183-6a8.035 8.035 0 0 0-3.467-3.2138c.4721.9068.8555 1.9972 1.1213 3.2138h2.3457zm-4.3999 0c-.2086-.8293-.4766-1.5635-.7831-2.1766C12.9482 4.2264 12.2151 4 12 4c-.2151 0-.9482.2263-1.7467 1.8234-.3065.613-.5745 1.3473-.7831 2.1766h5.0596zM7.416 8c.2658-1.2166.6491-2.307 1.1213-3.2138A8.035 8.035 0 0 0 5.0703 8H7.416zm-3.164 2A8.0147 8.0147 0 0 0 4 12c0 .6906.0875 1.3608.252 2H7.1a19.829 19.829 0 0 1-.1-2c0-.6849.0344-1.3538.1-2H4.252zm3.164 6H5.0704a8.0347 8.0347 0 0 0 3.467 3.2138C8.0651 18.307 7.6818 17.2166 7.4161 16zM22 12c0-5.5229-4.4772-10-10-10C6.4771 2 2 6.4771 2 12c0 5.5228 4.4771 10 10 10 5.5228 0 10-4.4772 10-10z"
            />
          </svg>
          <span className="font-bold">NL</span>
          <span className="text-white/80">|</span>
          <span>Nederlands</span>
        </button>

        <a
          href="#family-punten"
          className="hidden items-center gap-2 hover:underline sm:inline-flex"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 4h15v3h3.0246l3.9793 5.6848V18h-2.6567c-.4218 1.3056-1.6473 2.25-3.0933 2.25-1.446 0-2.6715-.9444-3.0932-2.25h-3.9044c-.4217 1.3056-1.6472 2.25-3.0932 2.25S4.4916 19.3056 4.0698 18H1V4zm3.0698 12c.4218-1.3056 1.6473-2.25 3.0933-2.25 1.446 0 2.6715.9444 3.0932 2.25H14V6H3v10h1.0698zM16 14.0007a3.24 3.24 0 0 1 1.2539-.2507c1.446 0 2.6715.9444 3.0933 2.25h.6567v-2.6848L17.9833 9H16v5.0007zM7.163 15.75c-.6903 0-1.25.5596-1.25 1.25s.5597 1.25 1.25 1.25c.6904 0 1.25-.5596 1.25-1.25s-.5596-1.25-1.25-1.25zm10.0909 0c-.6904 0-1.25.5596-1.25 1.25s.5596 1.25 1.25 1.25 1.25-.5596 1.25-1.25-.5596-1.25-1.25-1.25z"
            />
          </svg>
          <span>Bezorging vanaf 2.99 voor IKEA Family leden</span>
        </a>
        <div className="flex items-center justify-end gap-6">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Voer postcode in"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
              <path d="M8 9h8M8 13h8" />
            </svg>
            <span>Enter postcode</span>
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Select store"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.25a6.75 6.75 0 0 0-6.75 6.75c0 5.06 6.75 12.75 6.75 12.75s6.75-7.69 6.75-12.75A6.75 6.75 0 0 0 12 2.25Zm0 9.5A2.75 2.75 0 1 1 12 6.25a2.75 2.75 0 0 1 0 5.5Z" />
            </svg>
            <span>Select store</span>
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";

export default function OutOfTheBox() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="out-of-the-box" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-zinc-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Info Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-1 bg-amber-100 text-amber-950 text-xs font-bold rounded-full border border-amber-300">
              Conceptnaam, nog niet definitief
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-950 text-xs font-bold rounded-full">
              Upcycle Competitie
            </span>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Lopende campagne: &ldquo;Out of the box&rdquo;
            </h2>
            <p className="text-lg text-zinc-700 mt-2 font-medium">
              Laat zien wat jij maakt van je lege IKEA doos!
            </p>
          </div>

          <p className="text-base text-zinc-600 leading-relaxed">
            Heb jij van een platte IKEA doos een uniek meubelstuk, een speelgoedkasteel voor de kinderen, of een handige verdeler voor je kleerkast gemaakt? Stuur je eigen creatie in voor de <strong>Out of the box</strong> competitie en maak kans op duurzame IKEA-prijzen!
          </p>

          {/* Hashtag & Repost feature info */}
          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-2">
            <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2">
              <span className="text-purple-600">#</span>IKEASecondLife Community Feature
            </h3>
            <p className="text-xs text-zinc-600">
              De meest vindingrijke inzendingen worden maandelijks uitgelicht op de officiële IKEA social media kanalen en in de winkel.
            </p>
          </div>

          {/* Prize info & Disclaimer */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-sm text-zinc-800">
              <svg className="w-5 h-5 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0115 5h2a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h2zm0 2H3v8h14V7h-2v1a1 1 0 11-2 0V7H7v1a1 1 0 11-2 0V7z" clipRule="evenodd" />
              </svg>
              <span><strong>Prijzenpot:</strong> IKEA-prijzen (nader te bepalen)</span>
            </div>

            <p className="text-xs text-zinc-500 italic">
              * Deelnamevoorwaarden volgen bij een eventuele officiële lancering van de campagne.
            </p>
          </div>
        </div>

        {/* Right Submission Form Mockup */}
        <div className="lg:col-span-6 bg-zinc-50 border-2 border-zinc-200 rounded-2xl p-6 sm:p-8 space-y-6 relative shadow-xs">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-950">
                Inzendformulier (Mockup)
              </h3>
              <p className="text-xs text-zinc-500">
                Test het inzendproces van het concept
              </p>
            </div>
            <span className="px-2.5 py-1 bg-amber-200 text-amber-950 text-[10px] font-bold uppercase rounded tracking-wider border border-amber-300">
              Mockup, geen echte inzending
            </span>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-xl space-y-3 text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h4 className="text-lg font-bold text-emerald-950">
                Bedankt voor je interesse!
              </h4>
              <p className="text-sm text-emerald-800 leading-relaxed">
                Dit is een prototype-demonstratie van het Kartonglåda concept. Er zijn geen daadwerkelijke persoonsgegevens of bestanden verzonden.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-full transition-colors"
                type="button"
              >
                Opnieuw proberen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="user-name" className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                  Je Naam *
                </label>
                <input
                  type="text"
                  id="user-name"
                  required
                  placeholder="bijv. Sanne de Jong"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:ring-2 focus:ring-[#0058A3] focus:outline-hidden"
                />
              </div>

              <div>
                <label htmlFor="user-email" className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="user-email"
                  required
                  placeholder="sanne@example.nl"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:ring-2 focus:ring-[#0058A3] focus:outline-hidden"
                />
              </div>

              <div>
                <label htmlFor="user-desc" className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                  Korte beschrijving van je creatie *
                </label>
                <textarea
                  id="user-desc"
                  rows={3}
                  required
                  placeholder="Wat heb je gemaakt van je doos? Welk vouwpatroon of welk eigen idee heb je gebruikt?"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:ring-2 focus:ring-[#0058A3] focus:outline-hidden resize-none"
                />
              </div>

              {/* File Upload Area Mockup */}
              <div>
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1">
                  Foto van je creatie (Mockup Upload)
                </label>
                <div className="border-2 border-dashed border-zinc-300 bg-white rounded-xl p-4 text-center hover:bg-zinc-100/50 transition-colors cursor-pointer">
                  <svg className="w-8 h-8 text-zinc-400 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-semibold text-[#0058A3] block">
                    Selecteer een foto of sleep deze hier naartoe
                  </span>
                  <span className="text-[10px] text-zinc-400 block mt-0.5">
                    JPG, PNG tot 10MB (Niet-functionele demonstratie)
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0058A3] hover:bg-[#004f93] text-white font-bold rounded-full text-sm transition-colors focus:ring-4 focus:ring-blue-300"
              >
                Verstuur Inzending (Mockup)
              </button>

              <p className="text-[11px] text-zinc-500 text-center italic">
                * Door te klikken verstuur je geen echte gegevens. Dit is uitsluitend een visualisatie van het inzendformulier.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

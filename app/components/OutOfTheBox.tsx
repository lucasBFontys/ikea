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
    <section id="out-of-the-box" className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10 sm:py-14 border-t border-[#dfdfdf]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Info Column */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              Campagne: &ldquo;Out of the box&rdquo;
            </h2>
            <p className="text-lg text-zinc-700 mt-2 font-bold">
              Laat zien wat jij maakt van je lege IKEA doos!
            </p>
          </div>

          <p className="text-base text-zinc-800 leading-relaxed font-normal">
            Heb jij van een platte IKEA doos een uniek meubelstuk, een speelgoedkasteel voor de kinderen, of een handige verdeler voor je kleerkast gemaakt? Stuur je eigen creatie in voor de <strong>Out of the box</strong> competitie en maak kans op duurzame IKEA-prijzen!
          </p>

          {/* Hashtag & Repost Feature Info */}
          <div className="p-5 bg-[#f5f5f5] rounded-none border-l-4 border-purple-700 space-y-2">
            <h3 className="text-sm font-black text-zinc-950 flex items-center gap-2">
              <span className="text-purple-700 text-lg">#</span>IKEASecondLife Community Feature
            </h3>
            <p className="text-xs text-zinc-700 font-normal">
              De meest vindingrijke inzendingen worden maandelijks uitgelicht op de officiële IKEA social media kanalen en in de winkel.
            </p>
          </div>

          {/* Prize Info */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-sm text-zinc-950 font-bold">
              <svg className="w-5 h-5 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0115 5h2a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h2zm0 2H3v8h14V7h-2v1a1 1 0 11-2 0V7H7v1a1 1 0 11-2 0V7z" clipRule="evenodd" />
              </svg>
              <span>Prijzenpot: Duurzame IKEA cadeaubonnen en interieurartikelen</span>
            </div>
          </div>
        </div>

        {/* Right Submission Form */}
        <div className="lg:col-span-6 bg-[#f5f5f5] rounded-none p-8 space-y-6 relative border border-[#dfdfdf]">
          <div className="border-b border-zinc-300 pb-4">
            <h3 className="text-xl font-black text-zinc-950">
              Inzendformulier
            </h3>
            <p className="text-xs text-zinc-600 font-medium">
              Stuur je upcycle-project in en doe mee
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-none space-y-3 text-center">
              <div className="w-12 h-12 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto text-xl font-black">
                ✓
              </div>
              <h4 className="text-lg font-black text-emerald-950">
                Bedankt voor je inzending!
              </h4>
              <p className="text-sm text-emerald-900 leading-relaxed font-normal">
                Je creatie is succesvol ontvangen. We bekijken alle inzendingen en maken de winnaars maandelijks bekend.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-black hover:bg-zinc-800 text-white text-xs font-bold rounded-full transition-colors"
                type="button"
              >
                Nog een creatie insturen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="user-name" className="block text-xs font-extrabold text-zinc-900 uppercase tracking-wider mb-1">
                  Je Naam *
                </label>
                <input
                  type="text"
                  id="user-name"
                  required
                  placeholder="bijv. Sanne de Jong"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-none text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-950 focus:outline-hidden"
                />
              </div>

              <div>
                <label htmlFor="user-email" className="block text-xs font-extrabold text-zinc-900 uppercase tracking-wider mb-1">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="user-email"
                  required
                  placeholder="sanne@example.nl"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-none text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-950 focus:outline-hidden"
                />
              </div>

              <div>
                <label htmlFor="user-desc" className="block text-xs font-extrabold text-zinc-900 uppercase tracking-wider mb-1">
                  Korte beschrijving van je creatie *
                </label>
                <textarea
                  id="user-desc"
                  rows={3}
                  required
                  placeholder="Wat heb je gemaakt van je doos? Welk vouwpatroon of welk eigen idee heb je gebruikt?"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-none text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-950 focus:outline-hidden resize-none"
                />
              </div>

              {/* File Upload Area */}
              <div>
                <label className="block text-xs font-extrabold text-zinc-900 uppercase tracking-wider mb-1">
                  Foto van je creatie
                </label>
                <div className="border-2 border-dashed border-zinc-300 bg-white rounded-none p-5 text-center hover:bg-zinc-50 transition-colors cursor-pointer">
                  <svg className="w-8 h-8 text-zinc-500 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-bold text-[#0058A3] block">
                    Selecteer een foto of sleep deze hier naartoe
                  </span>
                  <span className="text-[10px] text-zinc-500 block mt-0.5">
                    JPG, PNG tot 10MB
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black hover:bg-zinc-800 text-white font-bold rounded-full text-sm transition-colors focus:ring-4 focus:ring-zinc-400"
              >
                Verstuur Inzending
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

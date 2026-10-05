"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function OutOfTheBox() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", description: "" });
  };

  return (
    <section id="out-of-the-box" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="relative mb-8 aspect-[4/3] overflow-hidden bg-[#f5f5f5]">
            <Image
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1400&q=80"
              alt="Kartonnen huisje als speelobject in huis"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <p className="text-[14px] font-bold text-[#0058A3]">Campagne</p>
          <h2 className="mt-2 text-[32px] leading-[1.2] font-bold tracking-tight text-[#111111] sm:text-[36px]">
            Out of the box
          </h2>
          <p className="mt-2 text-[18px] font-bold text-[#111111]">
            Laat zien wat jij maakt van je lege IKEA doos.
          </p>
          <p className="mt-5 text-[16px] leading-7 text-[#484848]">
            Een speelkasteel, een plantenbak, een kastverdeler: stuur je creatie in en maak kans op IKEA-prijzen. De meest vindingrijke inzendingen krijgen een plek op onze kanalen — en soms in de winkel.
          </p>
          <p className="mt-4 text-[14px] leading-6 text-[#484848]">
            Deel ook met <span className="font-bold text-[#111111]">#IKEASecondLife</span>. Prijzenpot: duurzame IKEA cadeaubonnen en interieurartikelen.
          </p>
        </div>

        <div className="bg-[#f5f5f5] p-6 sm:p-10">
          <h3 className="text-[22px] font-bold text-[#111111]">Stuur je creatie in</h3>
          <p className="mt-2 text-[14px] text-[#484848]">
            Velden met * zijn verplicht. Dit is een schoolconcept: er gaat geen echte inzending naar IKEA.
          </p>

          {submitted ? (
            <div className="mt-8 bg-white p-6">
              <h4 className="text-[20px] font-bold text-[#111111]">Bedankt voor je inzending</h4>
              <p className="mt-3 text-[14px] leading-6 text-[#484848]">
                We hebben je creatie ontvangen. Winnaars maken we maandelijks bekend.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[#111111] px-8 text-[14px] font-bold text-white hover:bg-[#333333]"
              >
                Nog een creatie insturen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="user-name" className="mb-1.5 block text-[14px] font-bold text-[#111111]">
                  Naam *
                </label>
                <input
                  type="text"
                  id="user-name"
                  required
                  placeholder="bijv. Sanne de Jong"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  className="h-12 w-full border border-[#929292] bg-white px-4 text-[16px] text-[#111111] placeholder:text-[#767676] focus:border-[#111111]"
                />
              </div>
              <div>
                <label htmlFor="user-email" className="mb-1.5 block text-[14px] font-bold text-[#111111]">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="user-email"
                  required
                  placeholder="sanne@example.nl"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  className="h-12 w-full border border-[#929292] bg-white px-4 text-[16px] text-[#111111] placeholder:text-[#767676] focus:border-[#111111]"
                />
              </div>
              <div>
                <label htmlFor="user-desc" className="mb-1.5 block text-[14px] font-bold text-[#111111]">
                  Korte beschrijving *
                </label>
                <textarea
                  id="user-desc"
                  rows={4}
                  required
                  placeholder="Wat heb je gemaakt van je doos?"
                  value={formData.description}
                  onChange={(event) => setFormData({ ...formData, description: event.target.value })}
                  className="w-full resize-none border border-[#929292] bg-white px-4 py-3 text-[16px] text-[#111111] placeholder:text-[#767676] focus:border-[#111111]"
                />
              </div>
              <div>
                <label htmlFor="user-photo" className="mb-1.5 block text-[14px] font-bold text-[#111111]">
                  Foto van je creatie
                </label>
                <input
                  id="user-photo"
                  type="file"
                  accept="image/jpeg,image/png"
                  className="w-full bg-white px-4 py-3 text-[14px] file:mr-4 file:rounded-full file:border-0 file:bg-[#111111] file:px-4 file:py-2 file:text-[12px] file:font-bold file:text-white"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#111111] px-8 text-[14px] font-bold text-white hover:bg-[#333333] sm:w-auto"
              >
                Verstuur inzending
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

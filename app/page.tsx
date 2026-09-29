import React from "react";
import PromoStrip from "./components/PromoStrip";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import Hero from "./components/Hero";
import IdeaSection from "./components/IdeaSection";
import Carousel from "./components/Carousel";
import WhyIkea from "./components/WhyIkea";
import FamilyPoints from "./components/FamilyPoints";
import HowItWorks from "./components/HowItWorks";
import OutOfTheBox from "./components/OutOfTheBox";
import Faq from "./components/Faq";
import MembershipCtas from "./components/MembershipCtas";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#FFDA1A] selection:text-black">
      {/* Top Utility & Promo Bar */}
      <PromoStrip />

      {/* Main Sticky Header */}
      <Header />

      {/* Breadcrumbs Navigation Trail */}
      <Breadcrumbs />

      {/* Main Content Body */}
      <main id="main-content" className="flex-1 focus:outline-hidden">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Ons idee Section */}
        <IdeaSection />

        {/* 3. Drie Pijlers Carousel */}
        <Carousel />

        {/* 4. Waarom zou IKEA dit doen? Section */}
        <WhyIkea />

        {/* 5. Verzamel punten met IKEA Family Section */}
        <FamilyPoints />

        {/* 6. Zo werkt het 3-stappenplan */}
        <HowItWorks />

        {/* 7. Lopende campagne: Out of the box */}
        <OutOfTheBox />

        {/* 8. Veelgestelde vragen Accordions */}
        <Faq />

        {/* 9. Membership CTA Banners */}
        <MembershipCtas />
      </main>

      {/* Footer & Disclaimer */}
      <Footer />
    </div>
  );
}

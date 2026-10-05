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
    <div className="flex min-h-screen flex-col bg-white text-[#111111]">
      <PromoStrip />
      <Header />
      <Breadcrumbs />
      <main id="main-content" className="flex-1">
        <Hero />
        <IdeaSection />
        <Carousel />
        <WhyIkea />
        <FamilyPoints />
        <HowItWorks />
        <OutOfTheBox />
        <Faq />
        <MembershipCtas />
      </main>
      <Footer />
    </div>
  );
}

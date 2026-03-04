"use client";

import Hero from "@/components/sections/Hero";
import ProofBar from "@/components/sections/ProofBar";
import Benefits from "@/components/sections/Benefits";
import HowItWorks from "@/components/sections/HowItWorks";
import AboutMike from "@/components/sections/AboutMike";
import VideoSection from "@/components/sections/VideoSection";
import Transformations from "@/components/sections/Transformations";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomeClient() {
  return (
    <>
      <Hero />
      <ProofBar />
      <Benefits />
      <HowItWorks />
      <AboutMike />
      <VideoSection />
      <Transformations />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}

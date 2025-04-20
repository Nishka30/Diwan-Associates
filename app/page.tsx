import Hero from "@/components/sections/Hero";
import ServiceHighlights from "@/components/sections/ServiceHighlights";
import AboutPreview from "@/components/sections/AboutPreview";
import Testimonials from "@/components/sections/Testimonials";
import Clients from "@/components/sections/Clients";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServiceHighlights />
      <AboutPreview />
      <Testimonials />
      <Clients />
      <CTA />
    </>
  );
}
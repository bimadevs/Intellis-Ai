"use client";

import Hero from "./components/ui/hero";
import About from "./components/ui/about";
import Feature from "./components/ui/feature";
import Pricing from "./components/ui/pricing";
import { Contact } from "./components/ui/contact";
import { AboutCard } from "./components/ui/about-card";
import ShowAi from "./components/ui/show-ai";
import Testimonial from "./components/ui/testimonial";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      <Hero />
      <About />
      <AboutCard />
      <Feature />
      <ShowAi />
      <Testimonial />
      <Pricing />
      <Contact />
    </div>
  );
}

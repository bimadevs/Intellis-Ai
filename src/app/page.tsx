"use client";

import React, { useState } from "react";
import Hero from "./components/ui/hero";
import About from "./components/ui/about";
import Feature from "./components/ui/feature";
import Pricing from "./components/ui/pricing";
import Tab from "./components/ui/tab";
import { Contact } from "./components/ui/contact";
import { AboutCard } from "./components/ui/about-card";

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      <Hero />
      <AboutCard />
      <About />
      <Tab />
      <Feature />
      <Pricing />
      <Contact />
    </main>
  );
}

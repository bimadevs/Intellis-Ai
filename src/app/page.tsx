"use client";

import Image from "next/image";
import React, { useState } from "react";
import Navbar from "./components/ui/navbar";
import Hero from "./components/ui/hero";
import About from "./components/ui/about";
import Feature from "./components/ui/feature";
import Card from "./components/ui/card";
import Pricing from "./components/ui/pricing";
import Tab from "./components/ui/tab";
import Footer from "./components/ui/footer";
import { Contact } from "./components/ui/contact";

export default function Home() {
  return (
    <main className="bg-black">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Tab />
      <Feature />
      {/* <Card /> */}
      <Pricing />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}

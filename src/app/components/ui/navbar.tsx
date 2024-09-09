"use client";

import Image from "next/image";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../acertenity/navbar-menu";
import { cn } from "@/app/lib/utils";

export default function Navbar() {
  return (
    <main>
      <NavbarMenu className="top-2" />
    </main>
  );
}
function NavbarMenu({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <a href="/">Home</a>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#about">Introduction</HoveredLink>
            <HoveredLink href="#about">Why Intellis Ai</HoveredLink>
            <HoveredLink href="#about">Platform Agnostic</HoveredLink>
            <HoveredLink href="#about">Workflow Automation</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="ChatBot"
              href="#Products"
              src="/images/ano.webp"
              description="An Ai Chatbot for get information"
            />
            <ProductItem
              title="Generate Image"
              href="#Products"
              src="/images/intellis image.webp"
              description="Generate Image"
            />
            <ProductItem
              title="Search Engine"
              href="#Products"
              src="/images/coming-soon.svg"
              description="Coming Soon, we will add more features"
            />
            
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#Pricing">Try Free</HoveredLink>
            <HoveredLink href="#Pricing">Individual</HoveredLink>
            <HoveredLink href="#Pricing">Team</HoveredLink>
            <HoveredLink href="#Pricing">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <a href="/free">Try For Free</a>
      </Menu>
    </div>
  );
}
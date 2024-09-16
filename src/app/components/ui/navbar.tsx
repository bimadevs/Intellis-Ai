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
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-white text-xs md:text-lg ", className)}
    >
      <Menu setActive={setActive}>
        <a className="underlineText" href="/">Home</a>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/#about">Introduction</HoveredLink>
            <HoveredLink href="/#about">Why Intellis Ai</HoveredLink>
            <HoveredLink href="/#about">Platform Agnostic</HoveredLink>
            <HoveredLink href="/#about">Workflow Automation</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid  lg:grid-cols-2 gap-4 md:gap-10 p-2 md:p-4 ">
            <ProductItem
              title="ChatBot"
              href="/#ShowAi"
              src="https://ucarecdn.com/5a14e39a-1c0d-4b8e-a7ce-44590e903112/ano.webp"
              description="An Ai Chatbot for get information"
            />
            <ProductItem
              title="Generate Image"
              href="/#ShowAi"
              src="https://ucarecdn.com/4d3ad90a-7583-4b1f-8b71-d37806cba824/intellisimage.webp"
              description="Generate Image"
            />
            
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/#Pricing">Try Free</HoveredLink>
            <HoveredLink href="/#Pricing">Individual</HoveredLink>
            <HoveredLink href="/#Pricing">Team</HoveredLink>
            <HoveredLink href="/#Pricing">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <a className="underlineText" href="/free">Try For Free</a>
      </Menu>
    </div>
  );
}
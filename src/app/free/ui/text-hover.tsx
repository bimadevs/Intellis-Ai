"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/app/components/acertenity/text-reveal-card";

export function TextHover() {
  return (
    <div className="mt-6 flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="It&lsquo;s Free"
        revealText="but It&lsquo;s better to buy it"
      >
        <TextRevealCardTitle>
        Support Us by Purchasing
        </TextRevealCardTitle>
        <TextRevealCardDescription>
            Hover/Swap this text
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}

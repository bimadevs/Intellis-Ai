"use client";
import React from "react";
import { LinkPreview } from "@/app/components/acertenity/link-preview";

export function ShowText() {
  return (
    <div className="flex justify-center items-start h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl  text-left mb-10">
        With{" "}
        <LinkPreview
          url="https://gemini.google.com/?hl=id"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Gemini
        </LinkPreview>{" "}
        we make a amazing something
      </p>

      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl  text-left ">
        We make {" "}
        <LinkPreview
          url="https://app.vectorshift.ai/chatbots/deployed/66dee915292e6e0ef6a2b07b"
          imageSrc="/images/ano.webp"
          isStatic
          className="font-bold"
        >
          Ano ChatBot
        </LinkPreview>{" "}
        and we make{" "}
        <LinkPreview
          url="https://app.vectorshift.ai/forms/deployed/66d6fa869d99492d174837eb"
          imageSrc="/images/intellis image.webp"
          isStatic
          className="font-bold"
        >
          Image Generator
        </LinkPreview>{" "}
      </p>
    </div>
  );
}

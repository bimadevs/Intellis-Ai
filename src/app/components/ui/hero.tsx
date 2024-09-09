"use client";
import { TypewriterEffectSmooth } from "../acertenity/typewriter-effect";
export default function Hero() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "AI",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Intellis Ai.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-200 text-xs sm:text-base text-center ">
        An AI for your apps and websites. Eazy to make and fun to use.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a href="#Pricing">
          <button className="w-40 h-10 rounded-xl bg-black border border-white border-transparent text-white text-sm">
            Pricing
          </button>
        </a>
        <a href="#contact">
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
}

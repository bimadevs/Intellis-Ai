import React from "react";
import { BackgroundLines } from "@/app/components/acertenity/background-lines";

export function Hero() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-t from-gray-500 via-white to-black text-center text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        It&lsquo;s Free
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
      We provide this for free so you can use AI for free. remember always support us by purchasing
      </p>
    </BackgroundLines>
  );
}

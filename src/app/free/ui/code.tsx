import React from "react";
import { Compare } from "@/app/components/acertenity/compare";

export function Code() {
  return (
    <div className="flex justify-center flex-col items-center p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
     <h1 className="mb-4 text-xl">Full View and Pop up example code </h1>
      <Compare
        firstImage="/images/FullView.webp"
        secondImage="/images/embed.webp"
        firstImageClassName="object-fill object-left-top"
        secondImageClassname="object-fill object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}

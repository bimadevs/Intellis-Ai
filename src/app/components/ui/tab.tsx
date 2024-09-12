"use client";

import Image from "next/image";
import { Tabs } from "../acertenity/tabs";

export default function Tab() {
  const tabs = [
    {
      title: "Chatbot",
      value: "Chatbot",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 lg:p-10 text-lg md:text-4xl font-bold text-white bg-slate-900">
          <p>Chatbot</p>
          <Image
            src="https://ucarecdn.com/5a14e39a-1c0d-4b8e-a7ce-44590e903112/ano.webp"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute lg:-bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Generate Image",
      value: "Generate Image",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 lg:p-10 text-lg md:text-4xl font-bold text-white bg-neutral-900">
          <p>Generate Image</p>
          <Image
            src="https://ucarecdn.com/4d3ad90a-7583-4b1f-8b71-d37806cba824/intellisimage.webp"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute lg:-bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Search Engine",
      value: "Search Engine",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 lg:p-10 text-lg md:text-4xl font-bold text-white bg-emerald-900">
          <p>Search Engine</p>
          <Image
            src="https://ucarecdn.com/94067630-7896-445a-bfca-1bb710a29585/comingsoon.svg"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-fill object-left-top h-[60%]  md:h-[90%] absolute lg:-bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
  ];

  return (
    <div id="Products" className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
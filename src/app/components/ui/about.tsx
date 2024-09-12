"use client";
import React from "react";
import { StickyScroll } from "../acertenity/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Introduction",
    description:
      "Located in Singkawang, Intellis AI specializes in delivering cutting-edge artificial intelligence solutions. Our aim is to empower businesses with advanced technology, enabling them to enhance efficiency and drive growth. With a dedicated team of experts, we stay at the forefront of AI advancements to provide tailored services that meet the unique needs of our clients.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Introduction
      </div>
    ),
  },
  {
    title: "Why Use Intellis AI?",
    description:
      "Intellis AI is very easy to use and very fast. Connect LLMs with memory, data loaders, cache, moderation and many more",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/intellis.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Platform Agnostic",
    description:
      "Open Source LLMs. Open Source LLMs, such as HuggingFace, Ollama, LocalAI, Replicate Llama2, Mistral, Vicuna, Orca, Llava, Self hosted on AWS, Azure, GCP",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Platform Agnostic
      </div>
    ),
  },
  {
    title: "Workflow Automation",
    description:
      "Automate the creation of marketing copy, personalized outbound emails, call summaries, and graphics at scale.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Workflow Automation
      </div>
    ),
  },
];
export default function About() {
  return (
    <div  className=" lg:p-10">
      <StickyScroll content={content} />
    </div>
  );
}

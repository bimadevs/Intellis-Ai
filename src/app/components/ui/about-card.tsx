"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../acertenity/wobble-card";

export function AboutCard() {
    return (
        <div id="about" className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    <div className="max-w-xs">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Purpose
                        </h2>
                        <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            To build a digital platform that helps individuals and businesses find technology-based solutions effectively and efficiently, while providing integrated services in website development, applications, or other digital products.
                        </p>
                    </div>
                    {/* <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        /> */}
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                    <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Vision
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    To become a leading digital transformation agency that drives technological innovation, delivers smart solutions, and serves as a trusted partner in the digital transformation journey for individuals and companies around the world.                    </p>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1  lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                    <div className="w-full">
                        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Mission
                        </h2>
                        <ol className="mt-4 p-4 w-full text-justify  text-base/6 text-neutral-200 list-decimal">
                            <li>Deliver innovative solutions in website and digital application development that meet the needs of clients and the evolving tech industry.</li>
                            <li>Prioritize quality and speed in every project to ensure client satisfaction and accelerate the digitalization process.</li>
                            <li>Integrate the latest technologies to create services that are effective, efficient, and accessible to all users.</li>
                            <li>Build strong relationships with clients, providing ongoing support services and maintaining professionalism in every aspect of work.</li>
                            <li>Develop a sustainable platform with a focus on security, performance, and an optimized user experience.</li>
                        </ol>
                    </div>
                </WobbleCard>
            </div>
        </div>
    );
}

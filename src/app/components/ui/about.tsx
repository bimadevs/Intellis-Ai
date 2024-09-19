"use client";
import React from "react";
import Image from "next/image";



export default function About() {
  return (
    <section id="about" className="py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-pulse">About Us</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 transform hover:scale-105 transition duration-300">
            <div className="relative">
              <Image
                src="https://ucarecdn.com/24b9dd32-b10c-4f42-bb24-6e77b6f218fe/intellis.svg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-500 opacity-50 rounded-lg">
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 rounded-b-lg">
                <p className="text-sm text-secondary italic">Transforming how businesses interact with customers
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h3 className="text-3xl font-semibold mb-4 text-accent">Revolutionizing Customer Service with AI</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              At AI Chatbot Solutions, we are passionate about transforming the way businesses interact with
              their customers. Our advanced AI chatbots are designed to provide a seamless, efficient, and
              personalized customer experience.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Founded in 2024 by a team of AI enthusiasts and customer service experts, we have grown to
              become a leading provider of intelligent chatbot solutions. Our mission is to help businesses of
              all sizes harness the power of AI to improve customer satisfaction, reduce costs, and drive
              growth.
            </p>
            <ul className="mb-6 space-y-2 text-slate-300">
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Industry-leading AI technology
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Customizable solutions for every business
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Dedicated support team
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                Continuous innovation and improvement
              </li>
            </ul>
            <a href="/free"
              className="inline-block border text-white py-3 px-6 rounded-full font-bold hover:bg-accent transform hover:scale-110 transition duration-300">
              Try For Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

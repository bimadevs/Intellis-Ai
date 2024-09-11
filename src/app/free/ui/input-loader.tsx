"use client";

import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../../components/acertenity/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
    { text: "Get Your Request" },
    { text: "Write Your Ai" },
    { text: "Generate Your Code" },
    { text: "Copy to Your Clipboard" },
];

export function InputLoader() {
    const [loading, setLoading] = useState(false);
    const [copiedText, setCopiedText] = useState<string | null>(null); // Menyimpan teks yang disalin

    // Fungsi untuk menyalin teks ke clipboard
    const handleCopyText = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text); // Simpan teks yang disalin untuk menampilkan status
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    // Fungsi untuk menangani klik tombol
    const handleButtonClick = (text: string) => {
        setLoading(true); // Mulai animasi loader
        handleCopyText(text); // Salin teks
        setTimeout(() => setLoading(false), loadingStates.length * 2000); // Hentikan animasi setelah selesai
    };

    return (
        <div className="w-full h-[60vh] mt-6 flex items-center justify-center flex-row">
            {/* Core Loader Modal */}
            <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

            {/* Tombol untuk memulai loader dan menyalin teks yang berbeda */}
            <div className="lg:w-1/2 text-center">
                <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    <h1>CLICK THIS BUTTON TO COPY YOUR AI</h1>
                </span>
                <p className="text-sm text-gray-500 mt-2">Copy to your html in tag body</p>
                <div className="space-y-4 w-full h-full border p-4 rounded-lg mt-6 flex items-center justify-center flex-col">
                    <h1 className="text-lg md:text-xl font-bold ">ChatBot</h1>
                    <div className="flex justify-center items-center w-full gap-8">
                        <button
                            onClick={() => handleButtonClick('<iframe src="https://shorturl.at/l9yQM" width="500px" height="600px" style="border: none; position: fixed; bottom: 0; right: 0; margin: 10px;" allow="clipboard-read; clipboard-write"/>')}
                            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                            style={{
                                boxShadow: "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
                            }}
                        >
                            Full view
                        </button>

                        <button
                            onClick={() => handleButtonClick('<script async id="vectorshift-chat-widget" src="https://shorturl.at/4KIRR" chatbot-id="66dee915292e6e0ef6a2b07b" chatbot-height="600px" chatbot-width="400px" />')}
                            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                            style={{
                                boxShadow: "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
                            }}
                        >
                            Pop Up
                        </button>
                    </div>
                    <h1 className="text-lg md:text-xl font-bold ">Image generator</h1>
                    <div className="flex justify-center items-center w-full gap-8">
                        <button
                            onClick={() => handleButtonClick('<iframe src="https://shorturl.at/wfAez" width="1000px" height="900px" allow="clipboard-read; clipboard-write microphone"/>')}
                            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                            style={{
                                boxShadow: "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
                            }}
                        >
                            Full view
                        </button>
                    </div>

                </div>
            </div>

            {loading && (
                <button
                    className="fixed top-4 right-4 text-black dark:text-white z-[120]"
                    onClick={() => setLoading(false)}
                >
                    <IconSquareRoundedX className="h-10 w-10" />
                </button>
            )}
        </div>
    );
}

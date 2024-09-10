"use client";

import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../acertenity/multi-step-loader";
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
        <div className="w-full h-[60vh] flex items-center justify-center flex-row">
            {/* Core Loader Modal */}
            <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

            {/* Tombol untuk memulai loader dan menyalin teks yang berbeda */}
            <div className="space-y-4">
                    <h1>ChatBot</h1>
                <div className="flex justify-center items-center w-full gap-8">
                    <button
                        onClick={() => handleButtonClick('<iframe src="https://app.vectorshift.ai/chatbots/embedded/66dee915292e6e0ef6a2b07b?openChatbot=true" width="500px" height="600px" style="border: none; position: fixed; bottom: 0; right: 0; margin: 10px;" allow="clipboard-read; clipboard-write"/>')}
                        className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
                        style={{
                            boxShadow: "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
                        }}
                    >
                        Full view
                    </button>

                    <button
                        onClick={() => handleButtonClick('<script async id="vectorshift-chat-widget" src="https://app.vectorshift.ai/chatWidget.js" chatbot-id="66dee915292e6e0ef6a2b07b" chatbot-height="600px" chatbot-width="400px" />')}
                        className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
                        style={{
                            boxShadow: "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
                        }}
                    >
                        Pop Up
                    </button>
                </div>
                    <h1>Image generator</h1>
                <div className="flex justify-center items-center w-full gap-8">
                    <button
                        onClick={() => handleButtonClick('<iframe src="https://app.vectorshift.ai/forms/embedded/66d6fa869d99492d174837eb" width="1000px" height="900px" allow="clipboard-read; clipboard-write microphone"/>')}
                        className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
                        style={{
                            boxShadow: "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
                        }}
                    >
                        Full view
                    </button>
                </div>
                
            </div>

            {/* Status penyalinan */}
            {copiedText && (
                <p className="text-green-500 mt-4">Teks berhasil disalin!</p>
            )}

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

"use client";
import Image from "next/image";

export default function ShowAi() {
    return(
        <section id="ShowAi" className="bg-gradient-to-r from-secondary to-primary py-20">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-16 text-white">Experience Our AI Live</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div
                    className="flex flex-col items-center justify-center border p-8 rounded-2xl shadow-lg hover:shadow-white hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2">
                    <h2 className="text-3xl font-semibold mb-4 text-primary">Try our Chatbot</h2>
                    <p className="text-lg text-gray-400 mb-6">
                        Click the icon in the bottom left corner of your browser to interact with our AI.
                    </p>
                    <Image
                    src="https://ucarecdn.com/398d0050-63e7-45e2-98c7-aaf2f7ee949b/AnoShowCase.webp"
                    alt="ShowCase Ano Chatbot"    
                    width={500}
                    height={500}               
                   />
                    <script async id="vectorshift-chat-widget" src="https://app.vectorshift.ai/chatWidget.js"
                        chatbot-id="66dee915292e6e0ef6a2b07b" chatbot-height="600px" chatbot-width="400px"></script>
                </div>
                <div
                    className="border p-8 rounded-2xl shadow-lg hover:shadow-white hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2">
                    <h2 className="text-3xl font-semibold mb-4 text-primary">Try Our Image Generator</h2>
                    <iframe className="w-full h-screen rounded-lg"
                        src="https://app.vectorshift.ai/forms/embedded/66e6edbf43db1e2bd970943e"
                        allow="clipboard-read; clipboard-write microphone"></iframe>
                </div>
            </div>
        </div>
    </section>
    )
}
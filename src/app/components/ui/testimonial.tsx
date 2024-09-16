"use client"
import Image from "next/image";
export default function Testimonial() {
    return(
        <section className=" py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
            <div className="mb-16">
                <h3 className="text-2xl font-semibold text-center mb-8">What our Coustumer Says</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="border p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Image
                            src="https://ucarecdn.com/4aa3f491-c4eb-4449-a7bd-8e1b48fa5752/testimonial1.jpg"
                            width={48}
                            height={48}
                            alt="Testimonial 1"
                            className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h4 className="font-semibold">Clara Norti</h4>
                                <p className="text-sm text-gray-400">CEO, TechCorp</p>
                            </div>
                        </div>
                        <p className="text-gray-300">"The AI chatbot has significantly improved our customer service
                            efficiency. We've seen a 30% reduction in response times and increased customer
                            satisfaction."</p>
                    </div>
                    <div className="border p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                        <Image
                            src="https://ucarecdn.com/5c8ae984-c6ed-4eb1-bc7d-3168739eaf27/testimonial2.jpg"
                            width={48}
                            height={48}
                            alt="Testimonial 2"
                            className="w-12 h-12 rounded-full mr-4"
                            />                            <div>
                                <h4 className="font-semibold">Jane Smith</h4>
                                <p className="text-sm text-gray-400">CTO, InnovateCo</p>
                            </div>
                        </div>
                        <p className="text-gray-300">"Implementing this AI chatbot was a game-changer for our support team.
                            It handles routine queries effortlessly, allowing our staff to focus on more complex
                            issues."</p>
                    </div>
                    <div className="border p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                        <Image
                            src="https://ucarecdn.com/c04367f6-5135-4c01-a5ab-070e770c83aa/testimonial3.jpg"
                            width={48}
                            height={48}
                            alt="Testimonial 3"
                            className="w-12 h-12 rounded-full mr-4"
                            />                            <div>
                                <h4 className="font-semibold">Mike Johnson</h4>
                                <p className="text-sm text-gray-400">Support Manager, RetailGiant</p>
                            </div>
                        </div>
                        <p className="text-gray-300">"Our customers love the instant responses they get from the chatbot.
                            It's available 24/7, which has greatly improved our customer satisfaction scores."</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    ) 
}
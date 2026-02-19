
"use client";
import { MoveRight } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-10 bg-cod-gray flex flex-col justify-center">
            <div className="max-w-4xl mx-auto w-full">
                <span className="text-xs text-mercury/40 uppercase tracking-widest mb-4 block">Get in touch</span>
                <h1 className="font-serif text-6xl md:text-9xl text-mercury mb-12 leading-[0.9]">
                    Let's create <br /> something <em className="text-mercury/40 font-serif italic">iconic.</em>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <p className="text-mercury/60 text-lg leading-relaxed">
                            Open for commissions, collaborations, and inquiries worldwide.
                        </p>
                        <div className="space-y-2">
                            <div className="text-xs text-mercury/40 uppercase tracking-widest">Email</div>
                            <a href="mailto:praptishah066@gmail.com" className="text-2xl md:text-3xl text-mercury hover:text-mercury/60 transition-colors block">
                                praptishah066@gmail.com
                            </a>
                        </div>
                        <div className="space-y-2">
                            <div className="text-xs text-mercury/40 uppercase tracking-widest">Socials</div>
                            <div className="flex flex-col gap-1 text-mercury/60">
                                <a href="https://www.instagram.com/labdhi_visionaries?igsh=MXF2NXUxY2ZhNTR6eg==" target="_blank" rel="noopener noreferrer" className="hover:text-mercury w-fit">Instagram ↗</a>
                                <a href="https://www.linkedin.com/in/prapti-shah-001965231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="hover:text-mercury w-fit">LinkedIn ↗</a>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-mercury/40">Name</label>
                            <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-mercury focus:outline-none focus:border-mercury transition-colors" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-mercury/40">Email</label>
                            <input type="email" className="w-full bg-transparent border-b border-white/20 py-4 text-mercury focus:outline-none focus:border-mercury transition-colors" placeholder="your@email.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-mercury/40">Message</label>
                            <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-4 text-mercury focus:outline-none focus:border-mercury transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button className="group mt-8 flex items-center gap-3 text-sm font-medium text-cod-gray bg-mercury px-8 py-4 rounded-full hover:bg-white transition-colors">
                            Send Message
                            <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

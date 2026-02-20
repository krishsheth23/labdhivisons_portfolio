
"use client";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-10 bg-cod-gray">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
                <div className="md:w-1/2 sticky top-32">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src="/images/about.jpg"
                            alt="Portrait of Prapti Shah"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="md:w-1/2 space-y-12">
                    <div>
                        <span className="text-xs text-mercury/40 uppercase tracking-widest block mb-4">About Me</span>
                        <h1 className="font-serif text-5xl md:text-7xl text-mercury mb-8">Prapti Shah</h1>
                        <p className="text-xl md:text-2xl font-serif italic text-mercury/80 leading-relaxed">
                            "I believe filmmaking is about shaping moments into stories that move people, using skill, design, and vision others overlook."
                        </p>
                    </div>

                    <div className="space-y-6 text-mercury/60 text-lg leading-relaxed">
                        <p>
                            Video Editor and Filmmaker with professional training and hands-on experience through freelance projects and client work. Founder of Labdhi Visionaries, providing video editing, photography, and mobile cinematography services for brands and individuals.
                        </p>
                        <p>
                            Worked with a Dubai-based expo for video editing projects. Experienced in short films, wedding videos, product visuals, and brand content, with a strong interest in learning and growing in professional camera cinematography.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                        <div>
                            <div className="text-xs text-mercury/40 uppercase tracking-widest mb-2">Clients</div>
                            <ul className="text-sm text-mercury/60 space-y-1">
                                <li>GL Exhibitions,</li>
                                <li>Organic & Natural Expo</li>
                                <li>DJ Joyu</li>
                                <li>Aadi Academy</li>
                            </ul>
                        </div>
                        <div>
                            <div className="text-xs text-mercury/40 uppercase tracking-widest mb-2">Contact</div>
                            <a href="/contact" className="text-sm text-mercury/60 hover:text-mercury transition-colors">Start a project ↗</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Image + Text Section */}
            <div className="max-w-7xl mx-auto mt-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <span className="text-xs text-mercury/40 uppercase tracking-widest block">My Services</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-mercury">
                            What I Offer
                        </h2>
                        <p className="text-lg text-mercury/60 leading-relaxed">
                            Video editing, mobile cinematography, photography, short films, wedding videos, and product visuals— focused on storytelling, clarity, and emotional impact.
                        </p>
                        <p className="text-lg text-mercury/60 leading-relaxed">
                            Always learning, always evolving, especially in camera cinematography. Each project is an opportunity to create something meaningful and visually compelling.
                        </p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                            alt="Creative workspace"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

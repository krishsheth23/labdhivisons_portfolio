
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const SERVICES = [
    {
        title: "Video Editing",
        desc: "Professional video editing for brands, events, and creative content with attention to storytelling and pacing.",
        img: "https://framerusercontent.com/images/0TMtKkLuxYVc7yL0N3CbKZecNA.png",
    },
    {
        title: "Mobile Cinematography",
        desc: "Cinematic mobile-shot content for social media, products, and brand storytelling.",
        img: "https://framerusercontent.com/images/5nZ2kIKApLMGcMdvAk8P494g.png",
    },
    {
        title: "Graphic Design",
        desc: "Visual design for branding, social media, and marketing materials that align with your vision.",
        img: "https://framerusercontent.com/images/Nuvt5svvtbqsnZOwwM1JuRZjG4.png",
    },
];

export default function Services() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-10 border-t border-mercury/10 bg-white/50">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-mercury/20 rounded-full text-[10px] uppercase tracking-widest text-mercury/60 bg-gradient-to-r from-purple-50 to-blue-50">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-swirl to-laser rounded-full"></span>
                            Services
                        </div>
                        <h2 className="font-serif text-4xl md:text-6xl text-mercury leading-none">
                            How can <br /> <em className="bg-gradient-to-r from-swirl to-laser bg-clip-text text-transparent font-serif italic">I help?</em>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-md text-mercury/70 text-sm md:text-base leading-relaxed"
                    >
                        From short films to wedding highlights, product videos to brand content—I create visuals that tell your story with clarity, emotion, and impact.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {SERVICES.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-mercury/20 bg-gradient-to-br from-purple-50 to-blue-50 cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
                        >
                            <Image
                                src={s.img}
                                alt={s.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-mercury/90 via-mercury/20 to-transparent p-6 flex flex-col justify-end">
                                <h3 className="text-lg font-medium text-white mb-2">{s.title}</h3>
                                <p className="text-xs text-white/80 leading-relaxed">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

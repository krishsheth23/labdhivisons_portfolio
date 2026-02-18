
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
    { img: "https://framerusercontent.com/images/gJutA4fKgkN4S7Q93bbnfDZwDdo.jpeg", title: "Soft Metals", cat: "Brand & Commercial" },
    { img: "https://framerusercontent.com/images/6gw1k929tTnlbEBhukcXvrqToJo.jpeg", title: "Coastal Slow", cat: "Portfolio" },
    { img: "https://framerusercontent.com/images/wHtIRUAFLgs4Y2UvqCL8BDqX9cQ.jpeg", title: "Sun Veil", cat: "Portfolio" },
    { img: "https://framerusercontent.com/images/DA6gpmF5zC0WZ5S1zLWCKOCU.jpeg", title: "Wild Bloom", cat: "Fashion" },
    { img: "https://framerusercontent.com/images/tTsOBaKGSqBuHYl1KNQKr8isbs.png", title: "Dram", cat: "Editorial" },
    { img: "https://framerusercontent.com/images/0Va0F0TnXbfN2AupsEn7DJIl7pc.png", title: "Women", cat: "Art" },
];

export default function WorkPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-10 bg-cod-gray">
            <div className="max-w-7xl mx-auto mb-16">
                <h1 className="font-serif text-5xl md:text-8xl text-mercury mb-6">Selected Work</h1>
                <p className="text-mercury/60 max-w-xl text-lg">
                    A curated selection of projects exploring light, form, and emotion.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {PROJECTS.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group cursor-pointer"
                    >
                        <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-mine-shaft border border-white/5 mb-4 relative">
                            <Image
                                src={p.img}
                                alt={p.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="bg-mercury/10 backdrop-blur px-4 py-2 rounded-full text-xs uppercase tracking-widest text-mercury border border-white/20">View Project</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-medium text-mercury">{p.title}</h3>
                        <span className="text-xs text-mercury/40 uppercase tracking-widest">{p.cat}</span>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}

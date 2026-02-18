
"use client";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
    {
        title: "Soft Metals",
        date: "Jul 10, 2025",
        cat: "Brand & Commercial",
        img: "https://framerusercontent.com/images/gJutA4fKgkN4S7Q93bbnfDZwDdo.jpeg",
    },
    {
        title: "Coastal Slow",
        date: "Apr 18, 2025",
        cat: "Portfolio",
        img: "https://framerusercontent.com/images/6gw1k929tTnlbEBhukcXvrqToJo.jpeg",
    },
    {
        title: "Sun Veil",
        date: "Jun 5, 2025",
        cat: "Portfolio",
        img: "https://framerusercontent.com/images/wHtIRUAFLgs4Y2UvqCL8BDqX9cQ.jpeg",
    },
];

export default function FeaturedWork() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-10 bg-cod-gray border-t border-white/5">
            <div className="max-w-7xl mx-auto mb-16 flex flex-wrap items-end justify-between gap-8">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-mercury/60">
                        <span className="w-1.5 h-1.5 bg-mercury/20 rounded-full"></span>
                        Portfolio
                    </div>
                    <h2 className="mt-4 font-serif text-4xl md:text-6xl text-mercury leading-none">
                        A look through <br /> <em className="text-mercury/40 font-serif italic">my lens</em>
                    </h2>
                </div>
                <a href="https://drive.google.com/drive/folders/1nlG29QJAzCFaXWb5qNj6M6eJ7kYUSa-Y?usp=sharing" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm font-medium text-mercury border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors">
                    View portfolio
                    <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

            {/* Placeholder Images */}
            <div className="max-w-7xl mx-auto mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="#" className="group relative rounded-2xl overflow-hidden bg-mine-shaft border border-white/10 hover:border-white/20 transition-colors">
                    <div className="aspect-[4/3] overflow-hidden">
                        <Image
                            src="https://framerusercontent.com/images/DA6gpmF5zC0WZ5S1zLWCKOCU.jpeg"
                            alt="Portfolio Image 1"
                            width={800}
                            height={600}
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-5">
                        <div className="text-[10px] text-mercury/40 uppercase tracking-widest mb-1">Feb 15, 2025</div>
                        <div className="text-lg font-medium text-mercury">Brand Film</div>
                        <div className="mt-3 inline-block px-2 py-1 text-[10px] uppercase tracking-wider text-mercury/40 border border-white/10 rounded-full">Video Editing</div>
                    </div>
                </Link>
                <Link href="#" className="group relative rounded-2xl overflow-hidden bg-mine-shaft border border-white/10 hover:border-white/20 transition-colors">
                    <div className="aspect-[4/3] overflow-hidden">
                        <Image
                            src="https://framerusercontent.com/images/wLK6DdLF4DwTHJYqE2cDsgLo.png"
                            alt="Portfolio Image 2"
                            width={800}
                            height={600}
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-5">
                        <div className="text-[10px] text-mercury/40 uppercase tracking-widest mb-1">Jan 28, 2025</div>
                        <div className="text-lg font-medium text-mercury">Wedding Highlights</div>
                        <div className="mt-3 inline-block px-2 py-1 text-[10px] uppercase tracking-wider text-mercury/40 border border-white/10 rounded-full">Mobile Cinematography</div>
                    </div>
                </Link>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                {PROJECTS.map((p, i) => (
                    <Link key={i} href="#" className="group relative rounded-2xl overflow-hidden bg-mine-shaft border border-white/10 hover:border-white/20 transition-colors">
                        <div className="aspect-[4/3] overflow-hidden">
                            <Image
                                src={p.img}
                                alt={p.title}
                                width={600}
                                height={400} // aspect ratio
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-5">
                            <div className="text-[10px] text-mercury/40 uppercase tracking-widest mb-1">{p.date}</div>
                            <div className="text-lg font-medium text-mercury">{p.title}</div>
                            <div className="mt-3 inline-block px-2 py-1 text-[10px] uppercase tracking-wider text-mercury/40 border border-white/10 rounded-full">{p.cat}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

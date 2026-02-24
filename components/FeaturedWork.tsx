
"use client";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
    {
        title: "Photography",
        date: "2025",
        cat: "Cinematic & Still",
        img: "https://drive.google.com/thumbnail?id=1LJMb649RrhPHl2_LGwcLL___iySqAtiD&sz=w800",
        link: "https://drive.google.com/drive/folders/1AcWnkGN2mMrkEZnDh2QUpfaEh4EZRaGP?usp=drive_link",
    },
    {
        title: "UAE Production",
        date: "2025",
        cat: "3D & Motion",
        img: "/images/uae.jpeg",
        link: "https://drive.google.com/drive/folders/1DHZkCFI69ht0NednKkZJltk63RwjLP_z?usp=drive_link",
    },
    {
        title: "Video Production",
        date: "2025",
        cat: "Social Media",
        img: "/images/vIDEO.jpeg",
        link: "https://drive.google.com/drive/folders/145Z_CPl-ooVK463diztcywaw7FsVzvzz?usp=drive_link",
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
                <a href="https://drive.google.com/drive/folders/1nlG29QJAzCFaXWb5qNj6M6eJ7kYUSa-Y?usp=drive_link" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm font-medium text-mercury border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors">
                    View full portfolio
                    <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

            {/* Premium Editorial Grid Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Featured Item (Photography) */}
                <a href={PROJECTS[0].link} target="_blank" rel="noopener noreferrer" className="group relative rounded-3xl overflow-hidden bg-mine-shaft border border-white/10 hover:border-white/20 transition-colors lg:col-span-8 flex flex-col h-full min-h-[400px] lg:min-h-[600px]">
                    <div className="relative flex-1 overflow-hidden">
                        <Image
                            src={PROJECTS[0].img}
                            alt={PROJECTS[0].title}
                            fill
                            className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                            quality={90}
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-mercury/90 via-transparent to-transparent opacity-60"></div>

                        <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full flex justify-between items-end">
                            <div>
                                <div className="text-xs text-white/70 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-6 h-px bg-white/50"></span>
                                    {PROJECTS[0].date}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-medium text-white font-serif">{PROJECTS[0].title}</h3>
                            </div>
                            <span className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-xs uppercase tracking-widest text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hidden sm:block">
                                View Project ↗
                            </span>
                        </div>
                    </div>
                </a>

                {/* Secondary Stacked Items */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                    {PROJECTS.slice(1).map((p, i) => (
                        <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="group relative rounded-3xl overflow-hidden bg-mine-shaft border border-white/10 hover:border-white/20 transition-colors flex-1 min-h-[300px] flex flex-col">
                            <div className="relative flex-1 overflow-hidden">
                                <Image
                                    src={p.img}
                                    alt={p.title}
                                    fill
                                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-mercury/90 via-transparent to-transparent opacity-60"></div>

                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <div className="text-[10px] text-white/70 uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <span className="w-4 h-px bg-white/50"></span>
                                        {p.date}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-medium text-white font-serif mb-1">{p.title}</h3>
                                    <div className="text-xs text-mercury/40">{p.cat}</div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

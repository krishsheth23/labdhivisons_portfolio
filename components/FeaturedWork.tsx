
"use client";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
    {
        title: "Product Animation",
        date: "2025",
        cat: "Motion & Animation",
        img: "https://drive.google.com/thumbnail?id=1psonPQaiXfyivKNADRMjXig1mj_J9K7a&sz=w800",
        link: "https://drive.google.com/drive/folders/1Q2NZIZfsxYyQWRzBXHqaXqKlkVYXiAfi",
    },
    {
        title: "VFX / Compositing",
        date: "2025",
        cat: "Nuke",
        img: "https://drive.google.com/thumbnail?id=1sN4ERfEMyOJKXPDA7jRy2y30HYTHOuGi&sz=w800",
        link: "https://drive.google.com/drive/folders/18Mt8hXOGSH_4-3ye0c30-DdeBecpamUW",
    },
    {
        title: "YouTube Video Edits",
        date: "2025",
        cat: "Social Media",
        img: "https://drive.google.com/thumbnail?id=1TL3vEt_KJviVWpnBmoIaIta_uGntHHUM&sz=w800",
        link: "https://drive.google.com/drive/folders/1qhwwViEoBkUoCvD7NqfDJN3cXSGJS-b-",
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
                    View full portfolio
                    <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

            {/* Featured Projects Grid */}
            <div className="max-w-7xl mx-auto mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="https://drive.google.com/drive/folders/1DHZkCFI69ht0NednKkZJltk63RwjLP_z" target="_blank" rel="noopener noreferrer" className="group relative rounded-2xl overflow-hidden bg-mine-shaft border border-white/10 hover:border-white/20 transition-colors">
                    <div className="aspect-[4/3] overflow-hidden">
                        <Image
                            src="https://drive.google.com/thumbnail?id=1HLOnhU2dR29wa65O5GxaD_5SPMnIbs-M&sz=w800"
                            alt="Graphics Portfolio"
                            width={800}
                            height={600}
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-5">
                        <div className="text-[10px] text-mercury/40 uppercase tracking-widest mb-1">2025</div>
                        <div className="text-lg font-medium text-mercury">Graphics</div>
                        <div className="mt-3 inline-block px-2 py-1 text-[10px] uppercase tracking-wider text-mercury/40 border border-white/10 rounded-full">Graphic Design</div>
                    </div>
                </a>
                <a href="https://drive.google.com/drive/folders/1OpqBrwdKqu_E83CWvdeN3vbeT41zJi3i" target="_blank" rel="noopener noreferrer" className="group relative rounded-2xl overflow-hidden bg-mine-shaft border border-white/10 hover:border-white/20 transition-colors">
                    <div className="aspect-[4/3] overflow-hidden">
                        <Image
                            src="https://drive.google.com/thumbnail?id=1LJMb649RrhPHl2_LGwcLL___iySqAtiD&sz=w800"
                            alt="Photography Portfolio"
                            width={800}
                            height={600}
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-5">
                        <div className="text-[10px] text-mercury/40 uppercase tracking-widest mb-1">2025</div>
                        <div className="text-lg font-medium text-mercury">Photography</div>
                        <div className="mt-3 inline-block px-2 py-1 text-[10px] uppercase tracking-wider text-mercury/40 border border-white/10 rounded-full">Photography</div>
                    </div>
                </a>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                {PROJECTS.map((p, i) => (
                    <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="group relative rounded-2xl overflow-hidden bg-mine-shaft border border-white/10 hover:border-white/20 transition-colors">
                        <div className="aspect-[4/3] overflow-hidden">
                            <Image
                                src={p.img}
                                alt={p.title}
                                width={600}
                                height={400}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-5">
                            <div className="text-[10px] text-mercury/40 uppercase tracking-widest mb-1">{p.date}</div>
                            <div className="text-lg font-medium text-mercury">{p.title}</div>
                            <div className="mt-3 inline-block px-2 py-1 text-[10px] uppercase tracking-wider text-mercury/40 border border-white/10 rounded-full">{p.cat}</div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

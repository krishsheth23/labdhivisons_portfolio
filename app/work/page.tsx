
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
    {
        img: "https://drive.google.com/thumbnail?id=1HLOnhU2dR29wa65O5GxaD_5SPMnIbs-M&sz=w800",
        title: "Graphic Design",
        cat: "Branding & Visuals",
        link: "https://drive.google.com/drive/folders/1DHZkCFI69ht0NednKkZJltk63RwjLP_z"
    },
    {
        img: "https://drive.google.com/thumbnail?id=1LJMb649RrhPHl2_LGwcLL___iySqAtiD&sz=w800",
        title: "Photography",
        cat: "Cinematic & Still",
        link: "https://drive.google.com/drive/folders/1OpqBrwdKqu_E83CWvdeN3vbeT41zJi3i"
    },
    {
        img: "https://drive.google.com/thumbnail?id=1psonPQaiXfyivKNADRMjXig1mj_J9K7a&sz=w800",
        title: "Product Visuals",
        cat: "3D & Motion",
        link: "https://drive.google.com/drive/folders/1Q2NZIZfsxYyQWRzBXHqaXqKlkVYXiAfi"
    },
    {
        img: "https://drive.google.com/thumbnail?id=1TL3vEt_KJviVWpnBmoIaIta_uGntHHUM&sz=w800",
        title: "YouTube Edits",
        cat: "Social Media",
        link: "https://drive.google.com/drive/folders/1qhwwViEoBkUoCvD7NqfDJN3cXSGJS-b-"
    },
    {
        img: "https://drive.google.com/thumbnail?id=1sN4ERfEMyOJKXPDA7jRy2y30HYTHOuGi&sz=w800",
        title: "VFX & Compositing",
        cat: "Nuke / Post-Production",
        link: "https://drive.google.com/drive/folders/18Mt8hXOGSH_4-3ye0c30-DdeBecpamUW"
    },
    {
        img: "https://drive.google.com/thumbnail?id=1AbiyVZpKzrhY-818L8xRi8rQxHG-fJt9&sz=w800",
        title: "Wedding Highlights",
        cat: "Events",
        link: "https://drive.google.com/drive/folders/1AfizI7w0uoZNmrOzYs1IZ8YAFUlNF93z"
    },
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
                        className="group"
                    >
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
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
                        </a>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}

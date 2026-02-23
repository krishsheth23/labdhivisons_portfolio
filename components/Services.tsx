
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Service = {
    title: string;
    desc: string;
    img: string;
    fileId?: string; // Optional Google Drive File ID for video playback
    link?: string;   // Optional external link
};

const SERVICES: Service[] = [
    {
        title: "Video Editing",
        desc: "Professional video editing for brands, events, and creative content with attention to storytelling and pacing.",
        img: "",
        fileId: "1lZ-1qqusBZDBddji6BMQU6HxMXs7DrgW",
        link: "https://drive.google.com/drive/folders/1DHZkCFI69ht0NednKkZJltk63RwjLP_z?usp=drive_link",
    },
    {
        title: "Mobile Cinematography",
        desc: "Cinematic mobile-shot content for social media, products, and brand storytelling.",
        img: "",
        fileId: "1hdy0ooBmsnC-CbRn99qR-3zUWX6woEVX",
        link: "https://drive.google.com/file/d/1hdy0ooBmsnC-CbRn99qR-3zUWX6woEVX/view?usp=drive_link",
    },
    {
        title: "Photography",
        desc: "High-end photography for events, products, and cinematic visual storytelling.",
        img: "https://drive.google.com/thumbnail?id=1LJMb649RrhPHl2_LGwcLL___iySqAtiD&sz=w800",
        link: "https://drive.google.com/drive/folders/1DHZkCFI69ht0NednKkZJltk63RwjLP_z?usp=drive_link",
    },
    {
        title: "Fast Paced Cuts",
        desc: "Narrative-driven short films crafted with emotion, cinematic technique, and a strong visual identity.",
        img: "https://drive.google.com/thumbnail?id=1uExzz4Q6ZxAncculCzPgtl0kjMxhoNfG&sz=w800",
        link: "https://drive.google.com/file/d/1uExzz4Q6ZxAncculCzPgtl0kjMxhoNfG/view?usp=drive_link",
    },
    {
        title: "Wedding Videos",
        desc: "Beautiful, timeless wedding highlights that capture every precious moment with cinematic elegance.",
        img: "",
        fileId: "1AbiyVZpKzrhY-818L8xRi8rQxHG-fJt9",
        link: "https://drive.google.com/drive/folders/1DHZkCFI69ht0NednKkZJltk63RwjLP_z?usp=drive_link",
    },
    {
        title: "UAE Production",
        desc: "High-quality product videos and visuals designed to showcase your brand and drive conversions.",
        img: "https://drive.google.com/thumbnail?id=1ILczWafX8OPscpBckWHJKLkMIupFPNd4&sz=w800",
        link: "https://drive.google.com/file/d/1ILczWafX8OPscpBckWHJKLkMIupFPNd4/view?usp=drive_link",
    },
];

function InteractiveServiceCard({ service, index }: { service: Service; index: number }) {
    const [playing, setPlaying] = useState(false);

    // Using Google Drive thumbnail if fileId exists, otherwise use provided img
    const thumbnailSrc = service.fileId
        ? `https://drive.google.com/thumbnail?id=${service.fileId}&sz=w800`
        : service.img;

    const embedSrc = service.fileId
        ? `https://drive.google.com/file/d/${service.fileId}/preview`
        : "";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative aspect-[3/4] overflow-hidden rounded-3xl border border-mercury/20 bg-mine-shaft/20 shadow-sm hover:shadow-xl transition-shadow ${service.fileId || service.link ? "cursor-pointer" : ""
                }`}
            onClick={() => {
                if (service.fileId && !playing) {
                    setPlaying(true);
                } else if (!service.fileId && service.link) {
                    window.open(service.link, "_blank");
                }
            }}
        >
            {playing && service.fileId ? (
                <iframe
                    src={embedSrc}
                    allow="autoplay"
                    className="w-full h-full relative z-20"
                    style={{ border: "none" }}
                    title={service.title}
                />
            ) : (
                <>
                    <Image
                        src={thumbnailSrc}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mercury/90 via-mercury/20 to-transparent p-6 flex flex-col justify-end z-10 pointer-events-none">
                        <h3 className="text-lg font-medium text-white mb-2">{service.title}</h3>
                        <p className="text-xs text-white/80 leading-relaxed">{service.desc}</p>
                    </div>

                    {/* Play Button Overlay for Video Services */}
                    {service.fileId && (
                        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* External Link Overlay (if no video playing) */}
            {!playing && service.link && (
                <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                </a>
            )}
        </motion.div>
    );
}

export default function Services() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-10 bg-white">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {SERVICES.map((s, i) => (
                        <InteractiveServiceCard key={i} service={s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

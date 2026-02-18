
"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

/* Using the URLs provided in the source HTML for now as placeholders */
const IMAGES = [
    "https://framerusercontent.com/images/tTsOBaKGSqBuHYl1KNQKr8isbs.png",
    "https://framerusercontent.com/images/0Va0F0TnXbfN2AupsEn7DJIl7pc.png",
    "https://framerusercontent.com/images/tpoRRaplw45Qxbuhtf22IMQwi8.png",
    "https://framerusercontent.com/images/zrBGK7oX2gwQPf5SQRSOfbkTjjY.png",
    "https://framerusercontent.com/images/RbcBpcIiKSLozibWqFpP6ItUFWY.png",
    "https://framerusercontent.com/images/08cMXLzsLsxSOYBugaBIuvQbM.png",
    "https://framerusercontent.com/images/DA6gpmF5zC0WZ5S1zLWCKOCU.jpeg",
    "https://framerusercontent.com/images/gJutA4fKgkN4S7Q93bbnfDZwDdo.jpeg",
];

export default function Gallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section ref={containerRef} className="py-20 md:py-32 overflow-hidden bg-gradient-to-r from-purple-50/30 to-blue-50/30 border-b border-mercury/10">
            <motion.div style={{ x }} className="flex gap-4 w-max px-4">
                {IMAGES.map((src, i) => (
                    <div
                        key={i}
                        className={`relative overflow-hidden rounded-2xl bg-white border border-mercury/20 group shrink-0 shadow-sm hover:shadow-lg transition-shadow
              ${i % 3 === 0 ? "w-[270px] h-[370px]" : ""}
              ${i % 3 === 1 ? "w-[390px] h-[260px]" : ""}
              ${i % 3 === 2 ? "w-[220px] h-[300px]" : ""}
            `}
                    >
                        <Image
                            src={src}
                            alt={`Gallery Image ${i}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                ))}
                {/* Duplicate for length */}
                {IMAGES.map((src, i) => (
                    <div
                        key={`dup-${i}`}
                        className={`relative overflow-hidden rounded-2xl bg-white border border-mercury/20 group shrink-0 shadow-sm hover:shadow-lg transition-shadow
              ${i % 3 === 0 ? "w-[270px] h-[370px]" : ""}
              ${i % 3 === 1 ? "w-[390px] h-[260px]" : ""}
              ${i % 3 === 2 ? "w-[220px] h-[300px]" : ""}
            `}
                    >
                        <Image
                            src={src}
                            alt={`Gallery Image ${i}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

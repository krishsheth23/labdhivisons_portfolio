
"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

/* Using the URLs provided in the source HTML for now as placeholders */
const IMAGES = [
    "https://drive.google.com/thumbnail?id=1Ie1p1IuvWZkfbO_D9Gnegpg5zKWDcMC7&sz=w800",
    "https://drive.google.com/thumbnail?id=1Xvwq6EPVQrIdyaovNDms_msQn3ZVzgZQ&sz=w800",
    "https://drive.google.com/thumbnail?id=1h0xItJ03qXMJY6AXs8I-X-5EraR36iKx&sz=w800",
    "https://drive.google.com/thumbnail?id=14LAuWF8Gia8YlHYE48aykKNgf80uMyUs&sz=w800",
    "https://drive.google.com/thumbnail?id=1t6UE2WQ4qeP9wQVrHiz9lKzfG6EGO7JJ&sz=w800",
    "https://drive.google.com/thumbnail?id=1rnkHJXwclY7BwsGAFdfBBoNuK3tiJ18i&sz=w800",
    "https://drive.google.com/thumbnail?id=1_8GOiOCa3MNhyPQ9292SSDnfnEqrUtod&sz=w800",
    "https://drive.google.com/thumbnail?id=1GUG3dgHz07Fa5AkeOogH8nBzMfUjC-SJ&sz=w800",
    "https://drive.google.com/thumbnail?id=1mRg1k39UAoOSSaXdyYpTKfhHf8cvlTg_&sz=w800",
    "https://drive.google.com/thumbnail?id=1hdy0ooBmsnC-CbRn99qR-3zUWX6woEVX&sz=w800",
];

export default function Gallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section ref={containerRef} className="py-20 md:py-32 overflow-hidden bg-white">
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
                        {src.startsWith("/") ? (
                            <img
                                src={src}
                                alt={`Gallery Image ${i}`}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : (
                            <Image
                                src={src}
                                alt={`Gallery Image ${i}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        )}
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
                        {src.startsWith("/") ? (
                            <img
                                src={src}
                                alt={`Gallery Image ${i}`}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : (
                            <Image
                                src={src}
                                alt={`Gallery Image ${i}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        )}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

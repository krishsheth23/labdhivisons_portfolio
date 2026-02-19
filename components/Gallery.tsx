
"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

/* Using the URLs provided in the source HTML for now as placeholders */
const IMAGES = [
    "https://drive.google.com/thumbnail?id=1HLOnhU2dR29wa65O5GxaD_5SPMnIbs-M&sz=w800",
    "https://drive.google.com/thumbnail?id=1LJMb649RrhPHl2_LGwcLL___iySqAtiD&sz=w800",
    "https://drive.google.com/thumbnail?id=1Xvwq6EPVQrIdyaovNDms_msQn3ZVzgZQ&sz=w800",
    "https://drive.google.com/thumbnail?id=1h0xItJ03qXMJY6AXs8I-X-5EraR36iKx&sz=w800",
    "https://drive.google.com/thumbnail?id=1_ytneWQBdOIGa3cRnzvjsJpb-HGOLT7H&sz=w800",
    "https://drive.google.com/thumbnail?id=1psonPQaiXfyivKNADRMjXig1mj_J9K7a&sz=w800",
    "https://drive.google.com/thumbnail?id=1TL3vEt_KJviVWpnBmoIaIta_uGntHHUM&sz=w800",
    "https://drive.google.com/thumbnail?id=1sN4ERfEMyOJKXPDA7jRy2y30HYTHOuGi&sz=w800",
    "https://drive.google.com/thumbnail?id=1AbiyVZpKzrhY-818L8xRi8rQxHG-fJt9&sz=w800",
    "https://drive.google.com/thumbnail?id=1kYhQIC4MlkPeWTHBKcShfFoftHeCaCBG&sz=w800",
    "https://drive.google.com/thumbnail?id=1lZ-1qqusBZDBddji6BMQU6HxMXs7DrgW&sz=w800",
    "https://drive.google.com/thumbnail?id=1mRg1k39UAoOSSaXdyYpTKfhHf8cvlTg_&sz=w800",
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

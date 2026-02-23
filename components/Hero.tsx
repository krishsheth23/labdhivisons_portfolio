
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-20 px-6 md:px-10">
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.JPG"
                    alt="Creative Work"
                    fill
                    className="object-cover object-center transition-all duration-1000"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex items-center gap-2 mb-4"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-swirl to-laser"></span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white font-medium">Based in Mumbai</span>
                </motion.div>

                <h1 className="font-serif text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-tight bg-gradient-to-r from-white via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="block"
                    >
                        Labdhi
                    </motion.span>
                    <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="block italic opacity-60"
                    >
                        Visionaries
                    </motion.span>
                </h1>

                <div className="mt-8 flex flex-wrap items-end justify-between gap-8 md:max-w-2xl">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-sm md:text-base text-white max-w-sm leading-relaxed "
                    >
                            From concept to final cut, we create videos that connect.

                        We are into Video Editing (Short-Form & Long-Form), Mobile Videography, Cinematic Shoots, Product Shoots, Wedding Content Creation, AI-Generated Videos, Fast-Paced Cut Videos, and Graphic Designing — specially crafted to match your brand’s voice, vision, and audience.                    </motion.p>
                </div>
            </div>
        </section>
    );
}

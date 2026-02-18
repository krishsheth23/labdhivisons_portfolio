"use client";
import { motion } from "framer-motion";
import { Camera, Lightbulb, Users, Zap } from "lucide-react";
import Services from "@/components/Services";
import Image from "next/image";

const VALUES = [
    {
        icon: Lightbulb,
        title: "Storytelling",
        desc: "Every video tells a story. I focus on narrative flow, pacing, and emotional impact to create content that resonates.",
    },
    {
        icon: Users,
        title: "Collaboration",
        desc: "The best work comes from understanding your vision. I work closely with clients to bring their ideas to life.",
    },
    {
        icon: Zap,
        title: "Clarity",
        desc: "From editing to color grading, every detail is refined to deliver polished, professional results.",
    },
    {
        icon: Camera,
        title: "Impact",
        desc: "I create visuals that connect emotionally and serve their purpose—whether it's brand awareness or storytelling.",
    },
];

const PROCESS_STEPS = [
    { num: "01", title: "Discovery", desc: "Understanding your vision, brand, and objectives through detailed consultation." },
    { num: "02", title: "Planning", desc: "Developing storyboards, shot lists, and creative direction tailored to your needs." },
    { num: "03", title: "Production", desc: "Filming or gathering footage with attention to composition, lighting, and storytelling." },
    { num: "04", title: "Post-Production", desc: "Expert editing, color grading, and sound design to deliver polished, ready-to-publish videos." },
];

export default function StudioPage() {
    return (
        <main className="min-h-screen pt-32 bg-cod-gray">
            {/* Hero Section */}
            <div className="px-6 md:px-10 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-xs text-mercury/40 uppercase tracking-widest block mb-4">Philosophy</span>
                    <h1 className="font-serif text-5xl md:text-8xl text-mercury mb-12 leading-[0.95]">
                        Studio & <br />
                        <span className="text-mercury/40 italic">Philosophy</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-3xl text-mercury/80 leading-relaxed font-serif italic"
                    >
                        "Every video should tell a story. I create content that blends artistry, storytelling, and emotion to deliver visuals that connect and resonate."
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6 text-mercury/60 leading-relaxed"
                    >
                        <p>
                            Video Editor and Filmmaker with professional training in Animation & VFX and hands-on experience through freelance projects and client work. Founder of Labdhi Visionaries, providing video editing, graphic designing, and mobile cinematography services for brands and individuals.
                        </p>
                        <p>
                            Worked with a Dubai-based expo for video editing and designing projects. Experienced in short films, wedding videos, product visuals, and brand content, with a strong interest in learning and growing in professional camera cinematography.
                        </p>
                        <p>
                            From concept to final cut, I create videos that connect. My work includes video editing, mobile-shot cinematic content, short films, wedding highlights, product videos, and graphic design—crafted to match your brand's voice and vision.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Values Section */}
            <section className="px-6 md:px-10 py-24 border-y border-white/5 bg-mine-shaft/30">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-mercury/60 mb-6">
                            <span className="w-1.5 h-1.5 bg-mercury/20 rounded-full"></span>
                            Core Values
                        </span>
                        <h2 className="font-serif text-4xl md:text-6xl text-mercury">
                            What drives <span className="text-mercury/40 italic">my work</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {VALUES.map((value, i) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-mercury/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-mercury/10 transition-colors">
                                        <Icon size={20} className="text-mercury/60" />
                                    </div>
                                    <h3 className="text-xl font-medium text-mercury mb-3">{value.title}</h3>
                                    <p className="text-sm text-mercury/60 leading-relaxed">{value.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-mercury/60 mb-6">
                        <span className="w-1.5 h-1.5 bg-mercury/20 rounded-full"></span>
                        Process
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl text-mercury mb-6">
                        How we <span className="text-mercury/40 italic">collaborate</span>
                    </h2>
                    <p className="text-mercury/60 max-w-2xl">
                        From initial concept to final delivery, every project follows a thoughtful, structured approach designed to bring your vision to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROCESS_STEPS.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="border border-white/10 rounded-2xl p-8 bg-mine-shaft/20 hover:bg-mine-shaft/40 transition-colors"
                        >
                            <div className="flex items-start gap-6">
                                <span className="font-serif text-5xl text-mercury/20">{step.num}</span>
                                <div>
                                    <h3 className="text-2xl font-medium text-mercury mb-3">{step.title}</h3>
                                    <p className="text-mercury/60 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Equipment Section */}
            <section className="px-6 md:px-10 py-24 border-y border-white/5 bg-mine-shaft/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-mercury/60 mb-6">
                                <span className="w-1.5 h-1.5 bg-mercury/20 rounded-full"></span>
                                Equipment
                            </span>
                            <h2 className="font-serif text-4xl md:text-6xl text-mercury mb-6">
                                Professional <span className="text-mercury/40 italic">tools</span>
                            </h2>
                            <p className="text-mercury/60 leading-relaxed mb-8">
                                I work with industry-leading software and equipment to ensure the highest quality results. From professional editing suites to mobile cinematography gear, every tool is chosen to deliver exceptional content.
                            </p>
                            <ul className="space-y-4 text-mercury/60">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-laser rounded-full mt-2 shrink-0"></span>
                                    <span>Adobe Premiere Pro & After Effects for Video Editing</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-laser rounded-full mt-2 shrink-0"></span>
                                    <span>DaVinci Resolve for Color Grading</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-laser rounded-full mt-2 shrink-0"></span>
                                    <span>Adobe Photoshop & Illustrator for Graphic Design</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-laser rounded-full mt-2 shrink-0"></span>
                                    <span>Mobile Cinematography Gear & Stabilizers</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                            <Image
                                src="https://framerusercontent.com/images/feP2ZZQx9vG9ajMRPfeb0N3UDk.jpg"
                                alt="Professional camera equipment"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <Services />

            {/* CTA Section */}
            <section className="px-6 md:px-10 py-32 text-center">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-serif text-4xl md:text-7xl text-mercury mb-8 leading-tight">
                            Ready to create something <span className="text-mercury/40 italic">extraordinary?</span>
                        </h2>
                        <p className="text-mercury/60 text-lg mb-12 leading-relaxed">
                            Let's discuss your next project and bring your creative vision to life.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-mercury text-cod-gray rounded-full font-medium hover:bg-white transition-colors"
                        >
                            Start a Project
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

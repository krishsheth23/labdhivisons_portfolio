
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
    {
        img: "https://drive.google.com/thumbnail?id=1LJMb649RrhPHl2_LGwcLL___iySqAtiD&sz=w800",
        title: "Photography",
        cat: "Cinematic & Still",
        link: "https://drive.google.com/drive/folders/1OpqBrwdKqu_E83CWvdeN3vbeT41zJi3i",
        span: "md:col-span-2 md:row-span-2",
        aspect: "aspect-[16/9] md:aspect-auto h-full",
    },
    {
        img: "https://drive.google.com/thumbnail?id=1psonPQaiXfyivKNADRMjXig1mj_J9K7a&sz=w800",
        title: "Product Visuals",
        cat: "3D & Motion",
        link: "https://drive.google.com/drive/folders/1Q2NZIZfsxYyQWRzBXHqaXqKlkVYXiAfi",
        span: "md:col-span-1",
        aspect: "aspect-[4/5]",
    },
    {
        img: "https://drive.google.com/thumbnail?id=1TL3vEt_KJviVWpnBmoIaIta_uGntHHUM&sz=w800",
        title: "YouTube Edits",
        cat: "Social Media",
        link: "https://drive.google.com/drive/folders/1qhwwViEoBkUoCvD7NqfDJN3cXSGJS-b-",
        span: "md:col-span-1",
        aspect: "aspect-[4/5]",
    },
    {
        img: "https://drive.google.com/thumbnail?id=1AbiyVZpKzrhY-818L8xRi8rQxHG-fJt9&sz=w800",
        title: "Wedding Highlights",
        cat: "Events",
        link: "https://drive.google.com/drive/folders/1AfizI7w0uoZNmrOzYs1IZ8YAFUlNF93z",
        span: "md:col-span-1",
        aspect: "aspect-[4/5]",
    },
    {
        img: "https://drive.google.com/thumbnail?id=1mRg1k39UAoOSSaXdyYpTKfhHf8cvlTg_&sz=w800",
        title: "Mobile Cinematography",
        cat: "Vertical Video",
        link: "https://drive.google.com/drive/folders/1nlG29QJAzCFaXWb5qNj6M6eJ7kYUSa-Y", // Fallback to root or keep it
        span: "md:col-span-2",
        aspect: "aspect-[16/9]",
    },
    {
        img: "https://drive.google.com/thumbnail?id=1lZ-1qqusBZDBddji6BMQU6HxMXs7DrgW&sz=w800",
        title: "Video Editing",
        cat: "Post-Production",
        link: "https://drive.google.com/drive/folders/145Z_CPl-ooVK463diztcywaw7FsVzvzz",
        span: "md:col-span-3",
        aspect: "aspect-[21/9]",
    },
];

export default function WorkPage() {
    return (
        <main className="min-h-screen pt-32 pb-32 px-6 md:px-10 bg-cod-gray">
            <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h1 className="font-serif text-5xl md:text-8xl text-mercury mb-6 leading-tight">
                        Selected <br className="hidden md:block" /> Work.
                    </h1>
                </div>
                <p className="text-mercury/60 max-w-md text-lg leading-relaxed md:pb-4">
                    A curated selection of projects exploring light, form, and emotion through the lens of cinematography and visual storytelling.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[300px] md:auto-rows-[400px]">
                {PROJECTS.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className={`group relative ${p.span}`}
                    >
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer relative overflow-hidden rounded-2xl bg-mine-shaft border border-white/5">
                            <Image
                                src={p.img}
                                alt={p.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                quality={90}
                            />
                            {/* Gradient Overlay for Text Legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-mercury/90 via-mercury/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                            {/* Hover "View" Badge */}
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs uppercase tracking-widest text-white border border-white/20 shadow-xl">
                                    View Project ↗
                                </span>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl md:text-3xl font-medium text-white mb-2 font-serif">{p.title}</h3>
                                <div className="h-px w-0 bg-white/30 group-hover:w-12 transition-all duration-500 mb-3 block"></div>
                                <span className="text-xs text-white/70 uppercase tracking-widest">{p.cat}</span>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}


"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-10 h-32 flex items-center justify-between">
            <Link href="/" className="flex items-center pointer-events-auto group">
                <Image
                    src="/images/Labdhi Visionaries.png"
                    alt="Labdhi Visionaries"
                    width={300}
                    height={100}
                    className={`h-32 w-auto object-contain group-hover:opacity-70 transition-all duration-300 ${scrolled ? '' : 'invert'}`}
                    priority
                />
            </Link>

            <Link
                href="/contact"
                className="pointer-events-auto px-6 py-2.5 rounded-full bg-mercury text-white text-xs font-medium uppercase tracking-widest hover:bg-mercury/90 hover:shadow-md transition-all duration-300"
            >
                Contact
            </Link>
        </header>
    );
}


"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Camera, Home, Layers, Mail, User } from "lucide-react";
import { clsx } from "clsx";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Studio", href: "/studio", icon: Layers }, // Placeholder for 'Services' or 'Studio'
    { name: "Work", href: "/work", icon: Camera },
    { name: "About", href: "/about", icon: User },
    { name: "Contact", href: "/contact", icon: Mail },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <nav className="flex items-center gap-1 p-2 rounded-full bg-white/90 backdrop-blur-md border border-mercury/10 shadow-xl">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={clsx(
                                "relative flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300",
                                isActive
                                    ? "text-white"
                                    : "text-mercury/60 hover:text-mercury hover:bg-mercury/5"
                            )}
                        >
                            <Icon size={18} strokeWidth={2} />
                            {isActive && (
                                <motion.span
                                    layoutId="bubble"
                                    className="absolute inset-0 bg-mercury rounded-full -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="sr-only">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}

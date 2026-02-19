import Link from "next/link";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-mercury/10 px-6 py-16 md:px-10 bg-white text-mercury">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-1 space-y-4">
                    <h3 className="text-xl font-medium bg-gradient-to-r from-swirl to-laser bg-clip-text text-transparent">Labdhi Visionaries</h3>
                    <p className="text-sm text-mercury/70 leading-relaxed md:max-w-[220px]">
                        Creating cinematic videos and visual designs that tell your story and elevate your brand.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-xs uppercase tracking-widest text-mercury/50 font-semibold mb-2">Socials</h4>
                    <div className="flex gap-3">
                        <Link href="https://www.instagram.com/labdhi_visionaries?igsh=MXF2NXUxY2ZhNTR6eg==" target="_blank" rel="noopener noreferrer" className="p-2 border border-mercury/20 rounded-full hover:bg-gradient-to-r hover:from-swirl hover:to-laser hover:text-white hover:border-transparent transition-all">
                            <Instagram size={16} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/prapti-shah-001965231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="p-2 border border-mercury/20 rounded-full hover:bg-gradient-to-r hover:from-swirl hover:to-laser hover:text-white hover:border-transparent transition-all">
                            <Linkedin size={16} />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3 text-sm text-mercury/70">
                    <h4 className="text-xs uppercase tracking-widest text-mercury/50 font-semibold mb-2">Legal</h4>
                    <Link href="#" className="hover:text-swirl transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-swirl transition-colors">Terms of Service</Link>
                </div>

                <div className="flex flex-col justify-end text-xs text-mercury/40 md:text-right">
                    © {new Date().getFullYear()} Labdhi Visionaries. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

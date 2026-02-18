
import { clsx } from 'clsx';

const TICKER_ITEMS = [
    "Fashion & Editorial",
    "Brand & Commercial",
    "Portrait & Studio",
    "10+ Years Experience",
    "100+ Brands Worldwide",
    "7 Day Turnaround",
    "Professional Editing Included",
    "Worldwide Travel",
    "RAW Files Delivered",
];

export default function Ticker() {
    return (
        <div className="w-full border-y border-white/10 bg-black overflow-hidden py-4" style={{ backgroundColor: '#000000' }}>
            <div className="flex w-max animate-ticker hover:[animation-play-state:paused] items-center whitespace-nowrap">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8 px-4">
                        {TICKER_ITEMS.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-white font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" style={{ backgroundColor: '#eab308' }}></span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

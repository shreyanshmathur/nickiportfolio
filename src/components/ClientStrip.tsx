"use client";

import { motion } from "framer-motion";

const brands = [
    "Bvlgari",
    "Armani",
    "Tata",
    "Maison Margiela",
    "Charles & Keith",
    "Big City Spiral",
    "Falguni Pathak"
];

export default function ClientStrip() {
    return (
        <section className="py-20 bg-black overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto px-8 mb-10 text-center">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-medium">Brands I've Worked With</p>
            </div>

            <div className="relative flex overflow-hidden group">
                <motion.div
                    animate={{ x: [0, -1035] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear"
                    }}
                    className="flex space-x-20 items-center whitespace-nowrap px-10"
                >
                    {[...brands, ...brands].map((brand, i) => (
                        <span
                            key={i}
                            className="text-2xl md:text-4xl font-playfair font-bold text-white/20 hover:text-brand-gold transition-colors cursor-default"
                        >
                            {brand}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

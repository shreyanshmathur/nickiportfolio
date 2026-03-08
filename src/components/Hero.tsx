"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import the 3D scene so it doesn't break SSR
const Scene = dynamic(() => import("./canvas/Scene"), { ssr: false });

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">

            {/* Cinematic Background Image */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0 origin-center"
            >
                <img
                    src="/media/images/headshot-1.png"
                    alt="Nikitha Rao"
                    className="w-full h-full object-cover object-top"
                />
                {/* Heavy overlays to ensure text readability & cinematic vibe */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
            </motion.div>

            {/* 3D Interactive Canvas Layer */}
            <div className="absolute inset-0 z-10 opacity-70">
                <Scene />
            </div>

            {/* Text Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-32">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-brand-gold tracking-[0.3em] text-sm md:text-base uppercase mb-6 font-medium bg-black/30 px-6 py-2 rounded-full backdrop-blur-md border border-white/10"
                >
                    Visual Storyteller based in Mumbai
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold tracking-tight mb-6 drop-shadow-2xl"
                >
                    NIKITHA RAO
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center gap-8"
                >
                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-lg text-gray-200 font-light tracking-wide uppercase drop-shadow-lg">
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>Creative Project Manager</motion.span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="hidden md:inline text-brand-gold">•</motion.span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>DOP</motion.span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="hidden md:inline text-brand-gold">•</motion.span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>Post-Production Supervisor</motion.span>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.6 }}
                        className="max-w-2xl text-center text-gray-300 text-sm md:text-base font-light italic leading-relaxed"
                    >
                        Building visual stories for luxury brands and digital campaigns across Mumbai.
                        Specialize in translating high-level briefs into content that performs.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                    >
                        <button
                            onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center px-8 py-3 rounded-full bg-brand-gold text-black font-semibold tracking-wider transition-all hover:scale-105 hover:bg-white active:scale-95 group"
                        >
                            View My Work
                            <svg className="ml-2 w-4 h-4 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.0 }}
                        className="text-[10px] uppercase tracking-[0.2em] text-gray-500"
                    >
                        Available for freelance & full-time opportunities
                    </motion.p>
                </motion.div>
            </div>

            {/* Scroll Prompt */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
            >
                <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/5">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent"
                />
            </motion.div>
        </section>
    );
}

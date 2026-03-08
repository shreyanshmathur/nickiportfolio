"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Instagram } from "lucide-react";
import YouTubeEmbed from "./YouTubeEmbed";
import Link from "next/link";
import { projects, Project } from "@/data/projects";

const videoCategories = ["All", "Event Cinematography", "Creative Product", "Shorts Content", "Social Media Management"];

// Subcomponent for handling each distinct visual grid layer
function ProjectGrid({ projArray, showFilters = false }: { projArray: Project[], showFilters?: boolean }) {
    const [filter, setFilter] = useState("All");

    const filtered = showFilters
        ? projArray.filter(p => filter === "All" || p.category === filter)
        : projArray;

    return (
        <div className="w-full">
            {showFilters && (
                <div className="flex flex-wrap gap-4 mb-8">
                    {videoCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`text-sm uppercase tracking-wider px-4 py-2 rounded-full border transition-all duration-300 ${filter === cat
                                ? "border-brand-gold bg-brand-gold/10 text-brand-gold"
                                : "border-white/20 text-gray-400 hover:border-white/50 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filtered.map((project, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            key={project.id}
                            className={`relative overflow-hidden group cursor-pointer rounded-xl bg-gray-900 ${project.span}`}
                        >
                            <Link href={`/work/${project.id}`} className="absolute inset-0 z-30" aria-label={`View ${project.client}`} />

                            {project.type === 'image' ? (
                                <img
                                    src={project.src}
                                    alt={project.client}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                            ) : project.type === 'youtube' ? (
                                <div className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) blur-[2px] group-hover:blur-none">
                                    <YouTubeEmbed videoId={project.src} autoPlay={true} loop={true} />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none">
                                        <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 z-20">
                                            <Play className="w-6 h-6 text-white ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 z-10" />
                                </div>
                            ) : project.type === 'instagram' ? (
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-400/20 flex flex-col items-center justify-center opacity-80 group-hover:opacity-100 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)">
                                    <Instagram className="w-12 h-12 text-white/50 mb-2 group-hover:text-white transition-colors duration-700" />
                                    <span className="text-white/50 text-xs uppercase tracking-widest group-hover:text-white transition-colors duration-700">Reel</span>
                                </div>
                            ) : (
                                <>
                                    <video
                                        muted
                                        loop
                                        playsInline
                                        onMouseOver={(e) => e.currentTarget.play()}
                                        onMouseOut={(e) => e.currentTarget.pause()}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) blur-[2px] group-hover:blur-none"
                                    >
                                        <source src={project.src} type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none">
                                        <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10">
                                            <Play className="w-6 h-6 text-white ml-1" />
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                                <motion.p
                                    className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700"
                                >
                                    {project.category}
                                </motion.p>
                                <motion.h4
                                    className="text-xl md:text-2xl font-playfair font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100"
                                >
                                    {project.client}
                                </motion.h4>
                                <motion.div
                                    className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-200"
                                >
                                    <p className="text-white/60 text-xs md:text-sm line-clamp-2 md:line-clamp-none font-light leading-relaxed">
                                        {project.description}
                                    </p>
                                    <p className="text-brand-gold/80 text-[10px] uppercase tracking-wider font-semibold">
                                        Role: {project.role}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default function SelectedWorks() {
    // Logic separation for enhanced layout
    const showreel = projects.find(p => p.category === 'Showreel');
    const motionVideos = projects.filter(p => ['youtube', 'instagram', 'video'].includes(p.type) && p.category !== 'Showreel');
    const editedPhotos = projects.filter(p => p.type === 'image' && p.category !== 'Behind The Scenes');
    const btsPhotos = projects.filter(p => p.category === 'Behind The Scenes');

    return (
        <section id="works" className="py-32 px-4 md:px-8 max-w-7xl mx-auto w-full z-20 relative bg-black space-y-32">

            {/* Showreel Section */}
            {showreel && (
                <div className="space-y-12">
                    <div className="text-center md:text-left transition-all duration-700">
                        <h2 className="text-sm font-medium tracking-[0.2em] text-brand-gold uppercase mb-4 italic px-4 border-l-2 border-brand-gold">Featured Reel</h2>
                        <h3 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold max-w-3xl leading-tight">Capturing movement, light & emotion.</h3>
                    </div>
                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-gray-900 group">
                        <YouTubeEmbed videoId={showreel.src} autoPlay={false} loop={true} />
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-1000" />
                        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 text-white z-10 hidden sm:block">
                            <h4 className="text-2xl md:text-4xl font-playfair font-bold mb-3">{showreel.client}</h4>
                            <p className="text-white/60 max-w-xl text-sm md:text-base italic font-light leading-relaxed">{showreel.description}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Videos Section */}
            <div>
                <div className="mb-12">
                    <h2 className="text-sm font-medium tracking-[0.2em] text-brand-gold uppercase mb-4 px-4 border-l-2 border-brand-gold">Portfolio</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold">Cinematography & Motion.</h3>
                </div>
                <ProjectGrid projArray={motionVideos} showFilters={true} />
            </div>

            {/* Edited Photos Section */}
            <div>
                <div className="mb-12">
                    <h2 className="text-sm font-medium tracking-[0.2em] text-brand-gold uppercase mb-4 px-4 border-l-2 border-brand-gold">Gallery</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold">Creative & Edited Photography.</h3>
                </div>
                <ProjectGrid projArray={editedPhotos} showFilters={false} />
            </div>

            {/* Behind The Scenes Section */}
            <div>
                <div className="mb-12">
                    <h2 className="text-sm font-medium tracking-[0.2em] text-brand-gold uppercase mb-4 px-4 border-l-2 border-brand-gold">Behind The Scenes</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold">Raw & Unedited Process.</h3>
                </div>
                <ProjectGrid projArray={btsPhotos} showFilters={false} />
            </div>

        </section>
    );
}

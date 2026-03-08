"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Instagram } from "lucide-react";
import YouTubeEmbed from "./YouTubeEmbed";
import Link from "next/link";
import { projects, Project } from "@/data/projects";

const videoCategories = ["All", "Event Cinematography", "Creative Product", "Shorts Content", "Social Media Manage"];

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

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 pointer-events-none">
                                <motion.p
                                    className="text-brand-gold text-xs uppercase tracking-widest font-medium mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700"
                                >
                                    {project.category}
                                </motion.p>
                                <motion.h4
                                    className="text-2xl font-playfair font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100"
                                >
                                    {project.client}
                                </motion.h4>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default function SelectedWorks() {
    // Array separation matching the user's specific request
    const motionVideos = projects.filter(p => ['youtube', 'instagram', 'video'].includes(p.type));
    const editedPhotos = projects.filter(p => p.type === 'image' && p.client !== 'Unedited Series');
    const uneditedPhotos = projects.filter(p => p.type === 'image' && p.client === 'Unedited Series');

    return (
        <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto w-full z-20 relative bg-black space-y-32">

            {/* Videos Section */}
            <div>
                <div className="mb-12">
                    <h2 className="text-sm font-medium tracking-[0.2em] text-brand-gold uppercase mb-4">Portfolio</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold">Cinematography & Motion.</h3>
                </div>
                <ProjectGrid projArray={motionVideos} showFilters={true} />
            </div>

            {/* Edited Photos Section */}
            <div>
                <div className="mb-12">
                    <h2 className="text-sm font-medium tracking-[0.2em] text-brand-gold uppercase mb-4">Gallery</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold">Creative & Edited Photography.</h3>
                </div>
                <ProjectGrid projArray={editedPhotos} showFilters={false} />
            </div>

            {/* Unedited Photos Section */}
            <div>
                <div className="mb-12">
                    <h2 className="text-sm font-medium tracking-[0.2em] text-brand-gold uppercase mb-4">Behind The Scenes</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold">Raw & Unedited Flatlays.</h3>
                </div>
                <ProjectGrid projArray={uneditedPhotos} showFilters={false} />
            </div>

        </section>
    );
}

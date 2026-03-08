"use client";

import { motion } from "framer-motion";

export default function AboutClient() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">

                {/* Left Column: Sticky Image */}
                <div className="w-full md:w-5/12 h-fit md:sticky md:top-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[3/4]"
                    >
                        <div className="absolute inset-0 bg-gray-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/media/images/headshot-2.png"
                                alt="Nikitha Rao"
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
                            />
                            {/* Cinematic gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                        </div>

                        {/* Decorative cinematic corners */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-brand-gold/50 rounded-br-xl pointer-events-none"></div>
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-brand-gold/50 rounded-tl-xl pointer-events-none"></div>
                    </motion.div>
                </div>

                {/* Right Column: Scrollable Content */}
                <div className="w-full md:w-7/12 flex flex-col pt-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">Nikitha Rao.</h1>
                        <h2 className="text-lg md:text-xl text-brand-gold tracking-widest uppercase mb-10">Brand Manager | Creative Project Manager | DOP</h2>

                        <div className="prose prose-invert max-w-none text-gray-300 mb-16 space-y-6 text-lg font-light leading-relaxed">
                            <p>
                                Creative professional with experience spanning brand management, content creation, project leadership,
                                and post-production. Skilled at driving end-to-end creative deliverables, managing high-pressure
                                productions, and balancing artistic vision with operational efficiency.
                            </p>
                            <p>
                                Adept at social media strategy, client servicing, and team leadership, with proven ability to deliver impactful campaigns across digital and live event platforms.
                            </p>
                        </div>
                    </motion.div>

                    {/* Work Experience */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-16"
                    >
                        <h3 className="text-2xl font-playfair font-bold mb-8 flex items-center">
                            <span className="w-8 h-[1px] bg-brand-gold mr-4"></span>
                            Experience
                        </h3>

                        <div className="space-y-12">
                            <div className="relative pl-8 border-l border-white/10">
                                <div className="absolute w-3 h-3 bg-brand-gold rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(199,167,109,0.5)]"></div>
                                <h4 className="text-xl font-bold">Creative Project Manager</h4>
                                <p className="text-brand-gold text-sm tracking-wider uppercase mb-4 mt-1">Burning Lights Studio | Mar 2022 – Dec 2024</p>
                                <ul className="text-gray-400 space-y-2 text-sm leading-relaxed list-disc list-outside ml-4">
                                    <li>Oversaw brand deliverables, team management, and client relations across large-scale projects.</li>
                                    <li>Supervised creative direction and edits, safeguarding brand consistency across campaigns.</li>
                                    <li>Managed yearly calendars for rolling events and passion projects.</li>
                                    <li>Expanded team by recruiting, onboarding, and mentoring talent.</li>
                                </ul>
                            </div>

                            <div className="relative pl-8 border-l border-white/10">
                                <div className="absolute w-3 h-3 bg-brand-gold rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(199,167,109,0.5)]"></div>
                                <h4 className="text-xl font-bold">Post-Production Supervisor & Brand Manager</h4>
                                <p className="text-brand-gold text-sm tracking-wider uppercase mb-4 mt-1">Bling Ping | Mar 2022 – May 2025</p>
                                <ul className="text-gray-400 space-y-2 text-sm leading-relaxed list-disc list-outside ml-4">
                                    <li>Directed post-production workflows for company projects, ensuring timely and high-quality delivery.</li>
                                    <li>Handled data organization, backups, and archival for all project files.</li>
                                    <li>Directed event coverage for Giorgio Armani, Prada, Bvlgari, Azzaro, Charles & Keith, Maison Margiela.</li>
                                    <li>Produced daily reels for Navratri Utsav with Falguni Pathak (2022–24).</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education & Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-playfair font-bold mb-8 flex items-center">
                            <span className="w-8 h-[1px] bg-brand-gold mr-4"></span>
                            Expertise
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                                <h4 className="text-brand-gold text-sm uppercase tracking-widest mb-4">Post-Production</h4>
                                <p className="text-gray-400 text-sm">DaVinci Resolve • VN • CapCut • Adobe Premiere Pro</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                                <h4 className="text-brand-gold text-sm uppercase tracking-widest mb-4">Design & Editing</h4>
                                <p className="text-gray-400 text-sm">Adobe Photoshop • Adobe Lightroom</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                                <h4 className="text-brand-gold text-sm uppercase tracking-widest mb-4">Content & Production</h4>
                                <p className="text-gray-400 text-sm">iPhone end-to-end • Canon photography • Cinematography</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                                <h4 className="text-brand-gold text-sm uppercase tracking-widest mb-4">Education</h4>
                                <p className="text-gray-400 text-sm">Bachelor’s in Mass Media and Communication<br />SIES College, Mumbai</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

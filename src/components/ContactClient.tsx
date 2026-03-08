"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Send } from "lucide-react";

export default function ContactClient() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-4 md:px-8 text-white flex flex-col items-center justify-center">
            <div className="max-w-4xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <p className="text-brand-gold tracking-[0.3em] uppercase text-sm md:text-base font-medium mb-4">Let's create something</p>
                    <h1 className="text-5xl md:text-8xl font-playfair font-bold tracking-tight mb-6">Get in touch.</h1>
                    <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto">
                        Currently open for new opportunities in brand management, creative direction, and cinematography.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center space-y-10"
                    >
                        <a href="mailto:nicki.worksallthetime@gmail.com" className="group flex items-center p-6 bg-gray-900 border border-white/10 rounded-xl hover:border-brand-gold transition-colors duration-300">
                            <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                                <Mail className="text-brand-gold w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-1">Email</h3>
                                <p className="text-lg font-medium group-hover:text-brand-gold transition-colors">nicki.worksallthetime@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/nickislifestyle/" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-900 border border-white/10 rounded-xl hover:border-brand-gold transition-colors duration-300 group">
                                <Instagram className="text-brand-gold w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
                                <span className="text-sm tracking-widest uppercase">Instagram</span>
                            </a>
                            <a href="https://www.linkedin.com/in/rao-nikitha/" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-900 border border-white/10 rounded-xl hover:border-brand-gold transition-colors duration-300 group">
                                <Linkedin className="text-brand-gold w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
                                <span className="text-sm tracking-widest uppercase">LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-gray-900 border border-white/10 rounded-xl p-8"
                    >
                        <h3 className="text-2xl font-playfair font-bold mb-6 flex items-center">
                            <span className="w-6 h-[1px] bg-brand-gold mr-4"></span>
                            Send a Message
                        </h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Name</label>
                                <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="Jane Doe" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="jane@example.com" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand-gold text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center">
                                Submit <Send className="w-4 h-4 ml-2" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

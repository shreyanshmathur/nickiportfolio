"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
    );
    const backdropFilter = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(12px)"]
    );

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ backgroundColor, backdropFilter, WebkitBackdropFilter: backdropFilter }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 py-6 px-8 flex justify-between items-center transition-colors duration-300"
        >
            <div className="text-xl font-playfair font-bold tracking-wider relative group">
                <Link href="/">N.R</Link>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>

            <ul className="flex space-x-8 text-sm font-medium tracking-wide uppercase">
                {['Work', 'About', 'Contact'].map((item) => (
                    <li key={item} className="relative group">
                        <Link href={item === 'Work' ? '/' : `/${item.toLowerCase()}`}>
                            {item}
                        </Link>
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
}

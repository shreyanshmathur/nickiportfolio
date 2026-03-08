import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-12 px-8 border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-playfair font-bold mb-2">NIKITHA RAO.</h2>
                    <p className="text-sm text-gray-400">Creative Project Manager & DOP</p>
                </div>

                <div className="flex space-x-6 text-sm text-gray-400 items-center">
                    <Link href="/contact" className="text-white hover:text-brand-gold transition-colors font-medium mr-4">
                        Contact Me
                    </Link>
                    <Link href="mailto:nicki.worksallthetime@gmail.com" className="hover:text-white transition-colors">
                        nicki.worksallthetime@gmail.com
                    </Link>
                    <Link href="https://www.instagram.com/nickislifestyle/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Instagram
                    </Link>
                    <Link href="https://www.linkedin.com/in/rao-nikitha/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        LinkedIn
                    </Link>
                </div>
            </div>
        </footer>
    );
}

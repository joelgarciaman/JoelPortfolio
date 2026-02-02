import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Sobre mí', href: '#sobre-mi' },
        { name: 'Experiencia', href: '#experiencia' },
        { name: 'Proyectos', href: '#proyectos' },
        { name: 'Extra', href: '#otros-datos' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "py-3 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
                    : "py-6 bg-transparent border-b border-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-shrink-0"
                >
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-2xl font-black tracking-tighter gradient-text"
                    >
                        JOEL.GM
                    </a>
                </motion.div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-slate-400 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-white/5"
                        >
                            {item.name}
                        </motion.a>
                    ))}

                    <div className="h-4 w-px bg-slate-800 mx-4"></div>

                    <div className="flex items-center gap-2">
                        <motion.a
                            whileHover={{ y: -2, color: '#fff' }}
                            href="https://github.com/joelgarciaman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 p-2 rounded-full hover:bg-white/5 transition-all"
                        >
                            <Github size={18} />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -2, color: '#fff' }}
                            href="https://www.linkedin.com/in/joel-garc%C3%ADa-manj%C3%B3n-1aa370181/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 p-2 rounded-full hover:bg-white/5 transition-all"
                        >
                            <Linkedin size={18} />
                        </motion.a>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-300 hover:text-white p-2 rounded-lg bg-white/5"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
                    >
                        <div className="px-6 py-8 space-y-4">
                            {navItems.map((item, idx) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="block p-3 rounded-2xl text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;


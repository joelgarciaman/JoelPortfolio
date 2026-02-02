import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center justify-center gap-8 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-500 text-sm font-medium order-2 md:order-1"
                    >
                        &copy; {currentYear} <span className="text-white">Joel García Manjón</span>. Todos los derechos reservados.
                    </motion.div>

                    <div className="flex items-center gap-8 order-1 md:order-2">
                        {[
                            { name: 'GitHub', href: 'https://github.com/joelgarciaman' },
                            { name: 'LinkedIn', href: 'https://www.linkedin.com/in/joel-garc%C3%ADa-manj%C3%B3n-1aa370181/' }
                        ].map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -2, color: '#fff' }}
                                className="text-slate-500 text-xs font-bold tracking-widest uppercase transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


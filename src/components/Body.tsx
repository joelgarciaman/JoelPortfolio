import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Body = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">

                    {/* Badge + Larger Image + Scroll Indicator */}
                    <div className="flex items-center gap-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-4 pl-2 pr-6 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium backdrop-blur-sm shadow-xl"
                        >
                            <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-br from-indigo-500 to-cyan-500 group">
                                <img
                                    src="/profile.jpg"
                                    alt="Joel García Manjón"
                                    className="w-full h-full rounded-full object-cover border-2 border-slate-950 shadow-2xl"
                                />
                                <span className="absolute bottom-1 right-1 flex h-3 w-3 md:h-4 md:w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-emerald-500 border-2 border-slate-950"></span>
                                </span>
                            </div>
                            <span className="md:text-base font-bold">Disponible para nuevos proyectos</span>
                        </motion.div>

                        {/* Scroll Indicator (now next to image) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="hidden md:flex flex-col items-center gap-2"
                        >
                            <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1">
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="w-0.5 h-1.5 bg-indigo-400 rounded-full"
                                />
                            </div>
                            <span className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">Scroll</span>
                        </motion.div>
                    </div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8"
                    >
                        Desarrollando el <br />
                        <span className="gradient-text">Futuro Digital</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-2xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed"
                    >
                        Hola, soy <span className="text-white font-semibold">Joel García Manjón</span>.
                        Especialista en construir aplicaciones web robustas, escalables y con un diseño impecable.
                        Transformo ideas complejas en soluciones digitales elegantes.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <a
                            href="#proyectos"
                            className="group relative px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2"
                        >
                            Ver mis proyectos
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contacto"
                            className="px-8 py-4 rounded-2xl bg-white/5 text-white font-bold border border-white/10 transition-all hover:bg-white/10 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            <Terminal size={20} />
                            Contactar
                        </a>
                    </motion.div>

                    {/* Tech Stack Floating Icons (Subtle) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-20 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
                    >
                        {['JavaScript', 'React', 'TypeScript', 'Node.js', 'Tailwind', 'Bootstrap', 'SQL', 'JIRA', 'Confluence'].map((tech) => (
                            <span key={tech} className="text-sm font-bold tracking-widest uppercase">{tech}</span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Body;


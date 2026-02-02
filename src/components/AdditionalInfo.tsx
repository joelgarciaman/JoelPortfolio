import { Car, Gamepad2, Cpu, Globe2, Sparkles, Watch, Shirt, CheckCircle2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const AdditionalInfo = () => {
    return (
        <section id="otros-datos" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">

                <h2 className="text-4xl md:text-5xl font-black text-white mb-20 text-center">Más sobre <span className="gradient-text">mí</span></h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Left Column: Work & Mobility */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="p-10 rounded-[3rem] glass-card h-full">
                            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
                                <span className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-500">
                                    <Car size={24} />
                                </span>
                                Disponibilidad
                            </h3>

                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">Modalidades de Trabajo</h4>
                                    <div className="flex flex-wrap gap-4">
                                        {['Presencial', 'Híbrido', 'Remoto'].map((mode) => (
                                            <div key={mode} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 text-slate-300 font-bold border border-white/5">
                                                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                                    <CheckCircle2 className="text-emerald-500" size={12} />
                                                </div>
                                                {mode}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">Movilidad & Ubicación</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-6 rounded-3xl bg-white/5 border border-white/5 flex items-center gap-4 h-full hover:bg-white/10 group/loc transition-all">
                                            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0 group-hover/loc:scale-110 transition-transform">
                                                <Car size={24} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-white whitespace-nowrap">Permiso B</p>
                                                <p className="text-xs text-slate-500 whitespace-nowrap">Vehículo propio</p>
                                            </div>
                                        </div>
                                        <div className="p-6 rounded-3xl bg-white/5 border border-white/5 flex items-center gap-4 h-full group/loc transition-all hover:bg-white/10">
                                            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0 group-hover/loc:scale-110 transition-transform">
                                                <MapPin size={24} />
                                            </div>
                                            <p className="font-bold text-white leading-tight">Badalona, Barcelona</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Interests */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-10 rounded-[3rem] glass-card"
                    >
                        <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
                            <span className="p-3 bg-pink-500/10 rounded-2xl text-pink-500">
                                <Sparkles size={24} />
                            </span>
                            Intereses Personales
                        </h3>

                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Más allá del código, me apasiona la ingeniería en todas sus formas y el diseño de precisión.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {[
                                { name: 'Tech Emergente', icon: <Cpu size={14} /> },
                                { name: 'QA Automation', icon: <Globe2 size={14} /> },
                                { name: 'Videojuegos', icon: <Gamepad2 size={14} /> },
                                { name: 'Relojería', icon: <Watch size={14} /> },
                                { name: 'Perfumería', icon: <Sparkles size={14} /> },
                                { name: 'Automoción', icon: <Car size={14} /> },
                                { name: 'Moda', icon: <Shirt size={14} /> }
                            ].map((hobby) => (
                                <span
                                    key={hobby.name}
                                    className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-xs font-bold border border-white/5 flex items-center gap-2 hover:bg-white/10 transition-colors uppercase tracking-widest"
                                >
                                    {hobby.icon}
                                    {hobby.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AdditionalInfo;

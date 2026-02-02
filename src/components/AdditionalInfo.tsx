import { Car, Gamepad2, Cpu, Globe2, Sparkles, Watch, Shirt, CheckCircle2 } from 'lucide-react';

const AdditionalInfo = () => {
    return (
        <section id="otros-datos" className="py-20 bg-slate-900 border-t border-slate-800/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Datos Adicionales</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Availability & Licenses Section */}
                    <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/30 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Car className="text-indigo-400" /> Disponibilidad y Licencias
                        </h3>

                        <div className="space-y-4">
                            {/* Work Modalities */}
                            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30 space-y-3">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="text-emerald-400" size={18} />
                                    <span>Trabajo Presencial</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="text-emerald-400" size={18} />
                                    <span>Trabajo Híbrido</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="text-emerald-400" size={18} />
                                    <span>Trabajo Remoto</span>
                                </div>
                            </div>

                            {/* Vehicle */}
                            <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                                <div className="p-3 bg-indigo-500/10 rounded-full text-indigo-400">
                                    <Car size={24} />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Permiso de Conducir B</p>
                                    <p className="text-sm text-slate-400">Vehículo propio disponible</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Hobbies & Interests Section */}
                    <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/30 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Sparkles className="text-pink-400" /> Intereses y Hobbies
                        </h3>

                        <div className="space-y-6">

                            {/* Tech Interests */}
                            <div>
                                <h4 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-3">Tecnología</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-sm flex items-center gap-1.5">
                                        <Cpu size={14} /> Tecnología Emergente
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-sm flex items-center gap-1.5">
                                        <Globe2 size={14} /> QA Automation
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-sm flex items-center gap-1.5">
                                        <Gamepad2 size={14} /> Videojuegos
                                    </span>
                                </div>
                            </div>

                            {/* Hobbies */}
                            <div>
                                <h4 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-3">Personal</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-sm">Practicar Deporte</span>
                                    <span className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-sm flex items-center gap-1.5">
                                        <Watch size={14} /> Relojería
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-sm">Perfumería</span>
                                    <span className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-sm flex items-center gap-1.5">
                                        <Car size={14} /> Automoción
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-sm flex items-center gap-1.5">
                                        <Globe2 size={14} /> Viajes
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-sm flex items-center gap-1.5">
                                        <Shirt size={14} /> Moda
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdditionalInfo;

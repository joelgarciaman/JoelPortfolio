import { Briefcase, GraduationCap, Calendar, Milestone } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: "JD Sales Assistant",
            company: "JD Sports",
            period: "2023 - Actualidad",
            description: "Gestión de almacén integral (Booking, Checks, Track, IBT, Picking), atención al cliente especializada y optimización de KPIs de ventas.",
            type: "work"
        },
        {
            role: "Mantenimiento BBDD (Sigma)",
            company: "Sigma",
            period: "2022 - 2023",
            description: "Administración y mantenimiento preventivo de bases de datos SQL utilizando entornos Java en la nube.",
            type: "work"
        },
        {
            role: "Vendedor y Atención al Cliente",
            company: "Sherwood Media / Sneakercon",
            period: "2019 - 2021",
            description: "Experiencia internacional en Londres. Publicidad estratégica, ventas directas y atención al cliente bilingüe con control riguroso de stock.",
            type: "work"
        }
    ];

    const education = [
        {
            degree: "CFGS Desarrollo de Aplicaciones Web",
            school: "FP LLefià",
            period: "2022 - 2024",
            description: "Enfoque profundo en arquitectura fullstack moderna. Stack: JS, React, Node.js, Vite, SQL, MongoDB. Gestión ágil con Jira, Confluence y Trello, y procesos de QA Testing.",
            type: "edu"
        },
        {
            degree: "CFGS Marketing y Publicidad",
            school: "Monlau Sagrera",
            period: "2018 - 2020",
            description: "Fundamentos de branding, investigación de mercados cuantitativa y planes de comunicación estratégica.",
            type: "edu"
        }
    ];

    return (
        <section id="experiencia" className="py-32 relative">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 flex items-center justify-center gap-4">
                        <Milestone className="text-indigo-500" size={40} />
                        Trayectoria
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Mi evolución profesional y académica, combinando habilidades técnicas con visión de negocio.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Experience Column */}
                    <div className="space-y-10">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 text-xl font-black text-white mb-8"
                        >
                            <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                                <Briefcase size={20} />
                            </span>
                            Experiencia Laboral
                        </motion.h3>
                        <div className="space-y-10 border-l border-slate-800/50 ml-3 pl-8 relative">
                            {experiences.map((exp, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-all duration-300 ring-2 ring-slate-950"></div>

                                    <div className="space-y-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                            <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
                                                {exp.role}
                                            </h4>
                                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-white/5 px-2.5 py-1 rounded-full uppercase whitespace-nowrap">
                                                <Calendar size={10} /> {exp.period}
                                            </span>
                                        </div>
                                        <p className="text-indigo-400/80 font-bold tracking-wider text-xs">{exp.company}</p>
                                        <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className="space-y-10">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 text-xl font-black text-white mb-8"
                        >
                            <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500">
                                <GraduationCap size={20} />
                            </span>
                            Educación
                        </motion.h3>
                        <div className="space-y-10 border-l border-slate-800/50 ml-3 pl-8 relative">
                            {education.map((edu, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-all duration-300 ring-2 ring-slate-950"></div>

                                    <div className="space-y-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                            <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                                                {edu.degree}
                                            </h4>
                                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-white/5 px-2.5 py-1 rounded-full uppercase whitespace-nowrap">
                                                <Calendar size={10} /> {edu.period}
                                            </span>
                                        </div>
                                        <p className="text-cyan-400/80 font-bold tracking-wider text-xs">{edu.school}</p>
                                        <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;


import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "JD Sales Assistant",
            company: "JD Sports",
            period: "2023 - Actualidad",
            description: "Almacén (Booking, Checks, Track, IBT, Picking & Move to), Caja, Atención al cliente, Visual Merchandising, KPIs.",
            type: "work"
        },
        {
            role: "Mantenimiento BBDD (Sigma)",
            company: "Sigma",
            period: "2022 - 2023",
            description: "Mantenimiento de una BBDD de SQL a través de software en la nube (Java).",
            type: "work"
        },
        {
            role: "Vendedor y Atención al Cliente",
            company: "Sherwood Media / Sneakercon",
            period: "2019 - 2021",
            description: "Publicidad, ventas y atención al cliente en inglés (Londres), control de stock.",
            type: "work"
        }
    ];

    const education = [
        {
            degree: "CFGS Desarrollo de Aplicaciones Web",
            school: "FP LLefià",
            period: "2022 - 2024",
            description: "Formación completa en desarrollo fullstack. Stack principal: JavaScript, React, Node.js, Vite, SQL, MongoDB. Metodologías ágiles (Jira) y QA.",
            type: "edu"
        },
        {
            degree: "CFGS Marketing y Publicidad",
            school: "Monlau Sagrera",
            period: "2018 - 2020",
            description: "Estrategias de marketing, investigación de mercados y publicidad.",
            type: "edu"
        }
    ];

    return (
        <section id="experiencia" className="py-20 bg-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trayectoria</h2>
                    <p className="text-slate-400">Mi camino profesional y académico</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Experience Column */}
                    <div className="space-y-8">
                        <h3 className="flex items-center gap-2 text-xl font-bold text-indigo-400 mb-6">
                            <Briefcase size={20} /> Experiencia Laboral
                        </h3>
                        <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8 relative">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="relative group">
                                    <span className="absolute -left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors"></span>
                                    <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">{exp.role}</h4>
                                    <p className="text-indigo-400 text-sm font-medium mb-1">{exp.company}</p>
                                    <div className="flex items-center gap-1 text-slate-500 text-xs mb-2">
                                        <Calendar size={12} /> {exp.period}
                                    </div>
                                    <p className="text-slate-400 text-sm">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className="space-y-8">
                        <h3 className="flex items-center gap-2 text-xl font-bold text-cyan-400 mb-6">
                            <GraduationCap size={20} /> Educación
                        </h3>
                        <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8 relative">
                            {education.map((edu, idx) => (
                                <div key={idx} className="relative group">
                                    <span className="absolute -left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors"></span>
                                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{edu.degree}</h4>
                                    <p className="text-cyan-400 text-sm font-medium mb-1">{edu.school}</p>
                                    <div className="flex items-center gap-1 text-slate-500 text-xs mb-2">
                                        <Calendar size={12} /> {edu.period}
                                    </div>
                                    <p className="text-slate-400 text-sm">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;

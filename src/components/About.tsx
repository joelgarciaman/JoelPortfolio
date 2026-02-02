import { Code2, Database, Terminal, Layout, Server, CheckCircle2 } from 'lucide-react';

const About = () => {
    const skills = [
        { name: "Frontend", icon: <Layout className="text-cyan-400" />, items: ["JavaScript", "React", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Sass"] },
        { name: "Backend", icon: <Server className="text-violet-400" />, items: ["Node.js", "Python", "Django", "PHP"] },
        { name: "Database", icon: <Database className="text-emerald-400" />, items: ["SQL", "MongoDB", "Oracle"] },
        { name: "Tools & QA", icon: <Terminal className="text-orange-400" />, items: ["Git", "GitHub", "Selenium", "Postman", "TDD"] },
    ];

    return (
        <section id="sobre-mi" className="py-20 bg-slate-900 border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* About Text */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold">
                            <Code2 size={16} />
                            Sobre mí
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Pasión por el código y la <span className="text-indigo-400">calidad del software</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Soy un desarrollador fullstack junior con una sólida formación en Desarrollo de Aplicaciones Web,
                            poniendo especial atención en el <strong className="text-slate-200">frontend y QA</strong>.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            Tengo una base sólida en <strong className="text-slate-200">JavaScript</strong> y conocimientos de backend con <strong className="text-slate-200">Python (Django)  & Node.js</strong>.
                            Me considero un perfil proactivo, con ganas de aprender y buena capacidad de adaptación.
                            Disfruto trabajando en equipo en entornos dinámicos y siempre busco mejorar la calidad del código mediante buenas prácticas y testing.
                        </p>

                        <div className="pt-6">
                            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-indigo-400" /> Idiomas
                            </h3>
                            <ul className="space-y-2 text-slate-400">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                                    Español (Nativo)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                                    Catalán (Nativo)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                                    Inglés (Fluido)
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {skills.map((category) => (
                            <div key={category.name} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/30 transition-all duration-300 group">
                                <div className="mb-4 p-3 rounded-lg bg-slate-900 inline-block group-hover:scale-110 transition-transform">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{category.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((item) => (
                                        <span key={item} className="px-2.5 py-1 rounded-md bg-slate-700/50 text-slate-300 text-xs font-medium group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;

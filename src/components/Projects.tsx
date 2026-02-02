import { Code2, Gamepad2, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "JS + REACT + API",
            description: "Aplicación moderna construida con React que consume APIs externas con gestión de estado avanzada. Demostración de integración de servicios escalables.",
            tags: ["React", "JavaScript", "API Integration", "Tailwind CSS"],
            link: "https://react-project-cards-three.vercel.app",
            icon: <Code2 size={32} className="text-cyan-400" />,
            color: "cyan"
        },
        {
            title: "Tetris en JavaScript",
            description: "Recreación técnica del motor de Tetris en JavaScript puro. Enfoque en algoritmos de colisión, gestión de ciclos y persistencia de datos local.",
            tags: ["JavaScript", "HTML5", "Game Engine", "CSS Animations"],
            link: "https://tetris-theta-ten.vercel.app/",
            icon: <Gamepad2 size={32} className="text-purple-400" />,
            color: "purple"
        }
    ];

    return (
        <section id="proyectos" className="py-32 relative">
            <div className="container mx-auto px-6">

                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 text-center">Proyectos <span className="gradient-text">Destacados</span></h2>
                        <p className="text-slate-400 max-w-xl text-lg mx-auto">
                            Explora una selección de mis trabajos más representativos donde la técnica y el diseño convergen.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="flex justify-center"
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block relative p-1 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent hover:from-white/20 transition-all duration-500 overflow-hidden w-full"
                            >
                                <div className="relative bg-slate-950/50 backdrop-blur-md rounded-[1.9rem] p-8 h-full flex flex-col overflow-hidden">
                                    {/* Decorative Bloom */}
                                    <div className={`absolute -top-24 -right-24 w-48 h-48 bg-${project.color}-500/10 blur-[80px] group-hover:bg-${project.color}-500/20 transition-all duration-700`}></div>

                                    <div className="relative z-10 flex justify-between items-start mb-8">
                                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 group-hover:border-white/10 transition-all duration-500">
                                            {project.icon}
                                        </div>
                                        <div className="p-2 bg-indigo-500 rounded-xl text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-500">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>

                                    <div className="relative z-10 flex-grow">
                                        <h3 className="text-2xl font-black text-white mb-4 group-hover:gradient-text transition-all">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-base leading-relaxed mb-8">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-white/5 rounded-lg text-slate-300 text-[10px] font-bold border border-white/5 uppercase tracking-wider"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Projects;


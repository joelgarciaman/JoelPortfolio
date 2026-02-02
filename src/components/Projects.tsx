import { ExternalLink, Code2, Gamepad2 } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "JS + REACT + API",
            description: "Aplicación moderna construida con React y JavaScript que consume una API externa. Demostración de integración de servicios y renderizado dinámico de componentes.",
            tags: ["React", "JavaScript", "API Integration", "Tailwind CSS"],
            link: "https://react-project-cards-three.vercel.app",
            icon: <Code2 size={40} className="text-cyan-400" />,
            gradient: "from-cyan-500/10 to-blue-500/10",
            border: "hover:border-cyan-500/30"
        },
        {
            title: "Tetris en JS",
            description: "Recreación clásica del juego Tetris utilizando JavaScript puro. Lógica de juego completa, manejo del DOM y sistema de puntuación.",
            tags: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
            link: "https://tetris-theta-ten.vercel.app/",
            icon: <Gamepad2 size={40} className="text-purple-400" />,
            gradient: "from-purple-500/10 to-pink-500/10",
            border: "hover:border-purple-500/30"
        }
    ];

    return (
        <section id="proyectos" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Una selección de mis trabajos más recientes, demostrando capacidades tanto en desarrollo de aplicaciones web complejas como en lógica de programación pura.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${project.border}`}
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-700/50 group-hover:scale-110 transition-transform duration-300">
                                        {project.icon}
                                    </div>
                                    <ExternalLink className="text-slate-500 group-hover:text-white transition-colors" size={20} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900/80 text-slate-300 border border-slate-700/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;

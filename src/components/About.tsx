import { Database, Terminal, Layout, Server, CheckCircle2, User } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        { name: "Frontend", icon: <Layout className="text-cyan-400" />, items: ["JavaScript", "React", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Sass"] },
        { name: "Backend", icon: <Server className="text-violet-400" />, items: ["Node.js", "Python", "Django", "PHP"] },
        { name: "Database", icon: <Database className="text-emerald-400" />, items: ["SQL", "MongoDB", "Oracle"] },
        { name: "Tools & QA", icon: <Terminal className="text-orange-400" />, items: ["Git", "GitHub", "Selenium", "Postman", "TDD"] },
    ];

    return (
        <section id="sobre-mi" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white flex items-center justify-center gap-4 mb-6">
                        <span className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500">
                            <User size={32} />
                        </span>
                        Sobre Mí
                    </h2>
                    <p className="text-xl text-slate-300 font-medium italic">
                        "Pasión por el código y la excelencia en el software"
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">

                    {/* Content Sobre Mí */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Soy un desarrollador <span className="text-white font-semibold">Full Stack</span> junior con una visión clara: construir herramientas digitales que sean tanto potentes como intuitivas. Mi formación en <span className="text-indigo-400 font-medium">Desarrollo de Aplicaciones Web</span> me ha dado las bases para enfrentar retos complejos con soluciones elegantes.
                            </p>
                            <p>
                                Mi enfoque no se detiene en que el código "funcione". Me apasiona el <span className="text-emerald-400 font-medium">QA y el Testing</span>, asegurando que cada línea de código contribuya a un producto final robusto y escalable.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl glass-card relative overflow-hidden group">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <CheckCircle2 size={24} className="text-indigo-500" />
                                Idiomas & Comunicación
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <div className="text-white font-bold">Español / Catalán</div>
                                    <div className="text-sm text-indigo-400 font-mono tracking-tighter">NATIVO / BILINGÜE</div>
                                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            className="bg-indigo-500 h-full"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-white font-bold">Inglés</div>
                                    <div className="text-sm text-cyan-400 font-mono tracking-tighter">PROFESIONAL</div>
                                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '90%' }}
                                            className="bg-cyan-500 h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
                        {skills.map((category, idx) => (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="p-5 md:p-6 rounded-3xl glass-card group relative h-full flex flex-col"
                            >
                                <div className="mb-3 p-3 rounded-2xl bg-slate-900 border border-white/5 inline-block group-hover:scale-110 group-hover:border-indigo-500/50 transition-all duration-500 w-fit">
                                    {/* Slightly smaller icons */}
                                    <div className="scale-90">
                                        {category.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {category.items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-2.5 py-1 rounded-xl bg-white/5 text-slate-300 text-[11px] font-semibold hover:bg-indigo-500/20 hover:text-white transition-all border border-white/5"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        </section>
    );
};

export default About;


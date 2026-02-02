import { ArrowRight } from 'lucide-react';

const Body = () => {
    return (
        <div id="inicio" className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900 pt-16">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">

                {/* Profile Group */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                    {/* Profile Image */}
                    <div className="relative inline-block group shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                        <img
                            src="/profile.jpg"
                            alt="Joel García Manjón"
                            className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-slate-900 shadow-2xl"
                        />
                    </div>

                    {/* Badge (Right of image on desktop) */}
                    <div className="inline-block px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                        👋 Hola, soy Joel García Manjón
                    </div>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                    Desarrollador Web <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Full Stack
                    </span>
                </h1>

                <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed">
                    Especializado en JavaScript, Node.js y ecosistemas modernos.
                    Creo experiencias web escalables con atención al detalle y enfoque en la calidad (QA).
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#contacto"
                        className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/25 active:scale-95"
                    >
                        Contactar
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#experiencia"
                        className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-800 text-slate-200 font-semibold border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all active:scale-95"
                    >
                        Ver Experiencia
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Body;

import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contacto" className="py-20 bg-gradient-to-b from-slate-900 to-indigo-950/20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Hablamos?</h2>
                <p className="text-slate-400 text-lg mb-12">
                    Estoy disponible para nuevas oportunidades laborales.
                    Si buscas un desarrollador comprometido y con pasión por la calidad, no dudes en contactarme.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

                    <a href="mailto:joelgarciaman@gmail.com" className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-white font-semibold mb-1">Email</h3>
                        <p className="text-slate-400 text-sm">joelgarciaman@gmail.com</p>
                    </a>

                    <a href="tel:+34611247390" className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                            <Phone size={24} />
                        </div>
                        <h3 className="text-white font-semibold mb-1">Teléfono</h3>
                        <p className="text-slate-400 text-sm">+34 611 247 390</p>
                    </a>

                    <a href="https://www.linkedin.com/in/joel-garcía-manjón-1aa370181" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                            <Linkedin size={24} />
                        </div>
                        <h3 className="text-white font-semibold mb-1">LinkedIn</h3>
                        <p className="text-slate-400 text-sm">Conectar</p>
                    </a>

                    <a href="https://github.com/joelgarciaman" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                            <Github size={24} />
                        </div>
                        <h3 className="text-white font-semibold mb-1">Github</h3>
                        <p className="text-slate-400 text-sm">Explorar código</p>
                    </a>

                    <div className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-2xl md:col-span-2">
                        <div className="flex items-center gap-2 text-slate-300">
                            <MapPin size={18} className="text-emerald-400" />
                            <span>Badalona, Barcelona</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;

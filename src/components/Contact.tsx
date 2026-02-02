import { Mail, Phone, Github, Linkedin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contacto" className="py-20 relative overflow-hidden scroll-mt-24">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto rounded-[3rem] glass-card p-10 md:p-16 text-center relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold mb-6 text-sm"
                        >
                            <MessageSquare size={16} />
                            Hablemos
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter gradient-text"
                        >
                            Contáctame
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
                        >
                            ¿Tienes una propuesta interesante o simplemente quieres saludar? Estaré encantado de escucharte. Respondo habitualmente en menos de 24 horas.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto"
                        >
                            {[
                                { name: 'Email', value: 'joelgarciaman@gmail.com', href: 'mailto:joelgarciaman@gmail.com', icon: <Mail size={20} />, iconColor: 'text-indigo-400' },
                                { name: 'Teléfono', value: '+34 611 247 390', href: 'tel:+34611247390', icon: <Phone size={20} />, iconColor: 'text-emerald-400' },
                                { name: 'LinkedIn', value: 'Joel García', href: 'https://www.linkedin.com/in/joel-garc%C3%ADa-manj%C3%B3n-1aa370181/', icon: <Linkedin size={20} />, iconColor: 'text-blue-400' },
                                { name: 'GitHub', value: '@joelgarciaman', href: 'https://github.com/joelgarciaman', icon: <Github size={20} />, iconColor: 'text-slate-200' }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="p-4 md:p-6 rounded-[1.5rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group flex flex-col items-center justify-center text-center"
                                >
                                    <div className={`${item.iconColor} mb-2 flex justify-center group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-white font-black uppercase tracking-widest text-[8px] mb-1 opacity-40">{item.name}</h3>
                                    <p className="text-white font-bold text-[10px] md:text-xs break-all px-1">{item.value}</p>
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Subtle aesthetic details */}
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px]"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

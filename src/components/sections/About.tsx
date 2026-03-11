"use client";

import { motion } from "framer-motion";
import { Award, Users, BookOpen, Download } from "lucide-react";

export default function About() {
    return (
        <section id="sobre-mi" className="py-24 bg-transparent relative z-10">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Lado Izquierdo: Tu Imagen o Composición de Autoridad */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Espacio para tu foto profesional */}
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
                            {/* Aquí pondrás tu foto en el futuro. Por ahora usamos un placeholder elegante */}
                            <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-700 uppercase tracking-widest">
                                [ Tu Fotografía Profesional ]
                            </div>
                        </div>

                        {/* Badges Flotantes de Autoridad */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 md:right-0 bg-cyan-500 p-6 rounded-2xl shadow-2xl z-20"
                        >
                            <div className="flex items-center gap-4">
                                <Users className="text-black w-8 h-8" />
                                <div>
                                    <p className="text-black font-bold text-xl">+100k</p>
                                    <p className="text-black/70 text-xs font-medium uppercase tracking-tighter">Suscriptores en Divulgación</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Lado Derecho: Contenido */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                                Ciencia, Arte y <span className="text-cyan-400">Estrategia.</span>
                            </h2>
                            <p className="text-gray-400 text-lg font-light leading-relaxed">
                                Con más de 10 años de trayectoria, he navegado entre la psicología clínica y la creación de contenido de alto impacto. No solo hago vídeos; diseño experiencias de aprendizaje que respetan la salud mental y optimizan la retención.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <Award className="text-purple-400 w-6 h-6 mt-1" />
                                <div>
                                    <h4 className="text-white font-semibold">10 Años de Exp.</h4>
                                    <p className="text-gray-500 text-sm">Especialista en Alto Rendimiento Cognitivo.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <BookOpen className="text-purple-400 w-6 h-6 mt-1" />
                                <div>
                                    <h4 className="text-white font-semibold">Psicólogo Colegiado</h4>
                                    <p className="text-gray-500 text-sm">Garantía ética en cada píldora de contenido.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <button className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
                                Descargar CV (PDF)
                                <Download className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
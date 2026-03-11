"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, MessageSquare } from "lucide-react";

export default function Contact() {
    return (
        <section id="contacto" className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-[2rem] p-8 md:p-16 text-center backdrop-blur-xl"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                        ¿Listo para elevar tu <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">presencia digital?</span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto">
                        Acelera la producción. Asegura la marca. Retén al usuario.
                        Hablemos sobre cómo puedo ayudarte a escalar tu proyecto HealthTech o EdTech.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:tu-email@ejemplo.com"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-cyan-400 transition-all group"
                        >
                            Enviar Email
                            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </a>

                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
                            <MessageSquare className="w-4 h-4 text-purple-400" />
                            Agendar llamada rápida
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decoración de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 blur-[120px] -z-10" />
        </section>
    );
}
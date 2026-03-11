"use client";

import { motion } from "framer-motion";
import { Brain, Magnet, Cpu } from "lucide-react";

const pillars = [
    {
        title: "Psicólogo Colegiado",
        subtitle: "El 'Human in the Loop'",
        description: "Garantizo la ética, la seguridad clínica y un lenguaje no estigmatizante. Traduzco papers complejos a guiones digeribles sin perder un gramo de rigor científico.",
        icon: Brain,
        color: "text-cyan-400",
        glow: "shadow-[0_0_30px_-5px_rgba(34,211,238,0.4)]",
        border: "group-hover:border-cyan-500/50"
    },
    {
        title: "Estratega de Retención",
        subtitle: "Dominio del Algoritmo",
        description: "Aplico principios de carga cognitiva y diseño de comportamiento. Domino el 'hook' de los primeros 3 segundos para maximizar la retención y el impacto en el usuario.",
        icon: Magnet,
        color: "text-purple-400",
        glow: "shadow-[0_0_30px_-5px_rgba(192,132,252,0.4)]",
        border: "group-hover:border-purple-500/50"
    },
    {
        title: "Productor Multimedia & IA",
        subtitle: "Autonomía Total",
        description: "Domino After Effects, Premiere y flujos de trabajo con IA Generativa (ChatGPT, Midjourney) para escalar la producción visual reduciendo los costes en un 40%.",
        icon: Cpu,
        color: "text-white",
        glow: "shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]",
        border: "group-hover:border-white/50"
    }
];

export default function Solution() {
    return (
        <section id="solucion" className="relative w-full py-24 bg-transparent z-10">
            <div className="container px-4 md:px-6 mx-auto">

                {/* Cabecera */}
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        El <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Match Perfecto</span> para tu Startup.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
                    >
                        Un perfil híbrido diseñado para resolver la tensión entre el rigor académico y la economía de la atención.
                    </motion.p>
                </div>

                {/* 3 Pilares */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className={`group relative flex flex-col items-center text-center p-8 rounded-3xl border border-white/10 bg-[#0A0A0A]/40 backdrop-blur-sm transition-all duration-300 ${pillar.border} hover:bg-white/5`}
                        >
                            {/* Icono con Glow */}
                            <div className={`p-4 rounded-2xl bg-[#111] border border-white/5 mb-6 transition-all duration-300 group-hover:scale-110 ${pillar.glow}`}>
                                <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-1">{pillar.title}</h3>
                            <span className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-6">{pillar.subtitle}</span>

                            <p className="text-gray-400 font-light leading-relaxed">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
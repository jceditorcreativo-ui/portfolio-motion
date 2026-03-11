"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Activity, Wand2, Bot } from "lucide-react";

const problems = [
    {
        title: "Los Clínicos no son virales.",
        description: "El rigor científico es vital, pero suele ser aburrido en TikTok o Instagram. Falta ritmo, gancho audiovisual y retención de audiencia.",
        icon: Activity,
        colSpan: "md:col-span-1", // Ocupa la mitad
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        title: "Los Creativos no son clínicos.",
        description: "Priorizar el alcance sin base psicológica genera desinformación, promesas infundadas y un altísimo riesgo de crisis de marca.",
        icon: Wand2,
        colSpan: "md:col-span-1", // Ocupa la otra mitad
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    },
    {
        title: "La IA generativa necesita supervisión humana.",
        description: "Automatizar contenido y generar volumen sin criterio psicológico ni revisión clínica es un riesgo legal y ético que ninguna HealthTech se puede permitir.",
        icon: Bot,
        colSpan: "md:col-span-2", // Ocupa el 100% del ancho por debajo de las otras dos
        color: "text-cyan-400",
        bg: "bg-cyan-400/10"
    }
];

export default function Features() {
    return (
        // Le añadimos un ID para el menú de navegación
        <section id="problema" className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">

                {/* Cabecera de la sección */}
                <div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 backdrop-blur-md"
                    >
                        <AlertTriangle className="mr-1.5 h-3 w-3" />
                        El Elefante en la Habitación
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-3xl"
                    >
                        Las startups de Salud y Educación tienen un <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">problema estructural.</span>
                    </motion.h2>
                </div>

                {/* Bento Grid: Ahora forzado a 2 columnas exactas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all hover:bg-white/10 ${problem.colSpan}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`inline-flex items-center justify-center rounded-xl p-3 w-12 h-12 mb-6 ${problem.bg}`}>
                                    <problem.icon className={`h-6 w-6 ${problem.color}`} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                                    {problem.title}
                                </h3>
                                <p className="text-gray-400 font-light leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
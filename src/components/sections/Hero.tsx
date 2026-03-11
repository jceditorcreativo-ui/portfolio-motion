"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button"; // Revisa que la ruta de tu botón sea esta
import { PlayCircle, Calendar, Brain, Activity, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent pt-20 pb-16">

            {/* Opcional: Aquí irá tu Video Showreel de fondo oscurecido en el futuro */}
            {/* <video src="/media/tu-showreel.webm" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none z-0" /> */}

            {/* Viñeta oscura para dar ese aspecto "Cinematic" y resaltar el centro */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0A_100%)] pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-8">

                {/* Pre-título / Badges de Autoridad (Glassmorphism) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-3 mb-4"
                >
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-md">
                        Juan Carlos Bocigas Romay
                    </div>
                    <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 backdrop-blur-md">
                        <Activity className="mr-1.5 h-3 w-3" />
                        Psicólogo Colegiado
                    </div>
                    <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400 backdrop-blur-md">
                        <Zap className="mr-1.5 h-3 w-3" />
                        +10M Visualizaciones
                    </div>
                    <div className="hidden sm:inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-md">
                        <Brain className="mr-1.5 h-3 w-3" />
                        AI Workflow Expert
                    </div>
                </motion.div>

                {/* Titular Principal (El Gancho) */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter max-w-5xl"
                >
                    <span className="text-white">Rigor Clínico.</span>
                    <br />
                    {/* Degradado Neón/Neuro de Cian a Púrpura */}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#7000FF] drop-shadow-[0_0_25px_rgba(112,0,255,0.4)]">
                        Viralidad Algorítmica.
                    </span>
                </motion.h1>

                {/* Subtítulo (La Carga de Valor) */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-[800px] text-lg md:text-xl text-gray-400 font-light leading-relaxed"
                >
                    El puente definitivo entre la salud mental colegiada y la producción audiovisual de alto impacto. Transformo conceptos complejos en contenido de alta retención para <span className="text-gray-200 font-medium">HealthTech</span> y <span className="text-gray-200 font-medium">EdTech</span>.
                </motion.p>

                {/* Llamada a la Acción (CTAs) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 text-base font-semibold px-8 h-14 rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-all"
                        >
                            <PlayCircle className="mr-2 h-5 w-5" />
                            Ver Casos de Éxito
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto border-white/20 bg-black/50 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-md text-base font-medium px-8 h-14 rounded-full transition-all"
                        >
                            <Calendar className="mr-2 h-5 w-5 text-purple-400" />
                            Agendar Videollamada
                        </Button>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
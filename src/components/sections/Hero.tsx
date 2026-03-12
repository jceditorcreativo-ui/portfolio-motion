"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PlayCircle, Zap, MonitorPlay, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0A0C] pt-20 pb-16">

            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0C_100%)] pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-3 mb-4"
                >
                    <div className="inline-flex items-center border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-300 backdrop-blur-md rounded-none">
                        Juan Carlos Bocigas
                    </div>
                    <div className="inline-flex items-center border border-[#CCFF00]/30 bg-[#CCFF00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#CCFF00] backdrop-blur-md rounded-none">
                        <MonitorPlay className="mr-1.5 h-4 w-4" />
                        Motion Design
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] max-w-5xl"
                >
                    <span className="text-white block">Edit.</span>
                    <span className="text-white block">Animate.</span>
                    <span className="text-[#CCFF00] block drop-shadow-[0_0_15px_rgba(204,255,0,0.3)] mt-2">Hack Attention.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-[700px] mt-6 text-lg md:text-2xl text-gray-400 font-light tracking-wide leading-relaxed"
                >
                    <span className="text-white font-semibold">Motion Grapher & Creative Editor.</span> Transformo conceptos complejos en piezas audiovisuales de alto impacto.
                </motion.p>

                {/* --- AQUI ESTAN LOS BOTONES QUE FALTABAN --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 pt-8"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-[#CCFF00] text-black hover:bg-white text-base font-bold uppercase tracking-widest px-10 h-16 rounded-none transition-colors border-2 border-[#CCFF00] hover:border-white"
                        >
                            <PlayCircle className="mr-2 h-5 w-5" />
                            VER REEL 2026
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto border-2 border-white/40 bg-transparent text-white hover:bg-[#FF0055] hover:border-[#FF0055] text-base font-bold uppercase tracking-widest px-10 h-16 rounded-none transition-all"
                        >
                            <Zap className="mr-2 h-5 w-5" />
                            Let's Create
                        </Button>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
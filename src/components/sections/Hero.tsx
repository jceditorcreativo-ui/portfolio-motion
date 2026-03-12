"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PlayCircle, Zap, MonitorPlay, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0A0C] pt-20 pb-16">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0C_100%)] pointer-events-none" />
            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap justify-center gap-3 mb-4">
                    <div className="inline-flex items-center border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-300 rounded-none">Juan Carlos Bocigas</div>
                    <div className="inline-flex items-center border border-[#CCFF00]/30 bg-[#CCFF00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#CCFF00] rounded-none"><MonitorPlay className="mr-1.5 h-4 w-4" />Motion Design</div>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] max-w-5xl">
                    <span className="text-white block">Edit.</span><span className="text-white block">Animate.</span><span className="text-[#CCFF00] block mt-2">Hack Attention.</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="max-w-[700px] mt-6 text-lg md:text-2xl text-gray-400 font-light tracking-wide">
                    <span className="text-white font-semibold">Motion Grapher & Creative Editor.</span> Transformo conceptos complejos en piezas audiovisuales de alto impacto.
                </motion.p>
            </div>
        </section>
    );
}
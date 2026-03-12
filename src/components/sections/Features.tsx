"use client";

import { motion } from "framer-motion";
import { Layers, Cpu, Scissors, ExternalLink } from "lucide-react";

const services = [
    {
        icon: <Scissors className="h-6 w-6 text-[#CCFF00]" />,
        title: "Dopamine Editing",
        description: "Edición de ritmo frenético diseñada para hackear la retención.",
        details: ["Timeline Flow", "Sound Design", "Retención +80%"],
        color: "#CCFF00"
    },
    {
        icon: <Layers className="h-6 w-6 text-[#FF0055]" />,
        title: "Motion Design 2D/3D",
        description: "Animación de alto nivel y Kinetic Typography.",
        details: ["C4D Integration", "VFX Layouts", "Brand Motion"],
        color: "#FF0055"
    },
    {
        icon: <Cpu className="h-6 w-6 text-[#00F0FF]" />,
        title: "AI Workflows",
        description: "IA generativa integrada para multiplicar la producción visual.",
        details: ["Stable Diffusion", "AI Upscaling", "Prompt Eng."],
        color: "#00F0FF"
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-[#0A0A0C] overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
                        LA VENTAJA <span className="text-[#CCFF00]">INJUSTA.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="relative group h-[400px] flex items-end"
                            initial="initial"
                            whileHover="hover"
                        >
                            {/* ELEMENTOS QUE SALEN DEL INTERIOR (BACK CARDS) */}
                            {service.details.map((detail, i) => (
                                <motion.div
                                    key={i}
                                    variants={{
                                        initial: { y: 0, opacity: 0, rotate: 0 },
                                        hover: {
                                            y: -(120 + (i * 45)),
                                            opacity: 1,
                                            rotate: (i - 1) * 5,
                                            transition: { type: "spring", stiffness: 300, damping: 20 }
                                        }
                                    }}
                                    className="absolute left-4 right-4 h-32 bg-[#1A1A1E] border border-white/10 p-4 flex flex-col justify-between shadow-2xl"
                                    style={{ zIndex: 5 - i }}
                                >
                                    <div className="flex justify-between items-start">
                                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">Module_0{i + 1}</span>
                                        <ExternalLink className="w-3 h-3 text-white/20" />
                                    </div>
                                    <p className="text-sm font-bold text-white uppercase tracking-tight">{detail}</p>
                                </motion.div>
                            ))}

                            {/* TARJETA PRINCIPAL (LA QUE HACE DE "CARPETA") */}
                            <div className="relative z-10 w-full bg-[#111113] border border-white/10 p-8 h-64 flex flex-col justify-between group-hover:border-[#CCFF00] transition-colors duration-300">
                                <div>
                                    <div className="mb-4 inline-block p-3 bg-black border border-white/5">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-black uppercase text-white mb-2 tracking-tighter">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 font-light leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                    <span className="text-[10px] font-mono text-[#CCFF00] uppercase tracking-widest">Hover to expand</span>
                                    <div className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
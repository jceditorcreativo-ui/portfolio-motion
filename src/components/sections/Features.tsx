"use client";

import { motion } from "framer-motion";
import { Scissors, Layers, Cpu } from "lucide-react";

const services = [
    {
        title: "Dopamine Editing",
        icon: <Scissors className="w-6 h-6" />,
        color: "#CCFF00",
        tags: ["Retention", "Sound Design", "Fast Cuts"]
    },
    {
        title: "Motion 2D/3D",
        icon: <Layers className="w-6 h-6" />,
        color: "#FF0055",
        tags: ["C4D", "After Effects", "Kinetic"]
    },
    {
        title: "AI Workflows",
        icon: <Cpu className="w-6 h-6" />,
        color: "#00F0FF",
        tags: ["Midjourney", "Upscaling", "Automation"]
    }
];

export default function Features() {
    return (
        <section className="py-32 bg-[#0A0A0C]">
            <div className="container px-4 mx-auto">
                <h2 className="text-6xl md:text-8xl font-black text-white uppercase mb-20 tracking-tighter">
                    THE <span className="text-[#CCFF00]">STACK.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="relative h-[450px] flex items-end group"
                            initial="initial"
                            whileHover="open"
                        >
                            {/* LOS "PAPELES" QUE SALEN (Módulos) */}
                            {service.tags.map((tag, i) => (
                                <motion.div
                                    key={i}
                                    variants={{
                                        initial: { y: 0, x: 0, rotate: 0, opacity: 0 },
                                        open: {
                                            y: -(160 + i * 50), // Subida agresiva para que no se solapen
                                            x: (i - 1) * 20,    // Se abren en abanico
                                            rotate: (i - 1) * 8,
                                            opacity: 1,
                                            transition: { type: "spring", stiffness: 200, damping: 15 }
                                        }
                                    }}
                                    className="absolute left-6 right-6 h-32 bg-[#1A1A1E] border border-white/10 p-5 flex flex-col justify-end shadow-[0_-20px_40px_rgba(0,0,0,0.5)]"
                                    style={{ zIndex: 5 - i }}
                                >
                                    <span className="text-[10px] font-mono text-white/30 absolute top-4 left-4">DOC_0{i + 1}</span>
                                    <p className="text-sm font-bold text-white uppercase">{tag}</p>
                                </motion.div>
                            ))}

                            {/* LA "CARPETA" (Tapa frontal) */}
                            <div className="relative z-10 w-full h-72 bg-[#111113] border-2 border-white/5 p-8 flex flex-col justify-between group-hover:border-[#CCFF00] transition-colors duration-500 shadow-2xl">
                                <div className="flex justify-between items-start">
                                    <div className="p-3 bg-black border border-white/10" style={{ color: service.color }}>
                                        {service.icon}
                                    </div>
                                    <div className="w-10 h-1 bg-white/10" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-black text-white uppercase leading-none mb-2">
                                        {service.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: service.color }} />
                                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest italic">Open Archive</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
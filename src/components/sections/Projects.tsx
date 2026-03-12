"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

const projects = [
    {
        id: "01",
        title: "Cyberpunk Brand Identity",
        category: "MOTION DESIGN / 3D",
        software: ["After Effects", "Cinema 4D", "Octane"],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200", // Placeholder pro
    },
    {
        id: "02",
        title: "Dopamine Edit - Streetwear",
        category: "CREATIVE EDITING / VFX",
        software: ["Premiere Pro", "Sapphire", "EbSynth"],
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1200",
    }
];

export default function Projects() {
    return (
        <section className="py-24 bg-[#0A0A0C]">
            <div className="container px-4 md:px-6 mx-auto">

                {/* Título Brutalista */}
                <div className="flex flex-col mb-16 border-l-4 border-[#CCFF00] pl-6">
                    <span className="text-[#CCFF00] font-mono text-sm tracking-[0.3em] mb-2">WORK_ARCHIVE_2026</span>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">
                        PROYECTOS <br /> <span className="text-white/20">SELECCIONADOS</span>
                    </h2>
                </div>

                {/* Grid de Proyectos */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            {/* Contenedor de Imagen/Video */}
                            <div className="relative aspect-video overflow-hidden bg-[#111113] border border-white/10 group-hover:border-[#CCFF00] transition-colors duration-500">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                                />

                                {/* Overlay de info rápida */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-black text-white text-xs font-bold px-3 py-1 border border-white/20 uppercase tracking-widest">
                                        {project.id}
                                    </span>
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-[#CCFF00] p-5 rounded-none">
                                        <Play className="w-8 h-8 text-black fill-black" />
                                    </div>
                                </div>
                            </div>

                            {/* Meta de proyecto */}
                            <div className="mt-6 flex justify-between items-start">
                                <div>
                                    <p className="text-[#CCFF00] text-xs font-bold tracking-widest uppercase mb-1">{project.category}</p>
                                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase group-hover:text-[#CCFF00] transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3 mt-3">
                                        {project.software.map((s, i) => (
                                            <span key={i} className="text-[10px] text-gray-500 border border-white/10 px-2 py-0.5 font-mono uppercase">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-white/20 group-hover:text-[#CCFF00] transition-colors">
                                    <ArrowUpRight className="w-10 h-10" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Botón Ver Más */}
                <div className="mt-20 flex justify-center">
                    <button className="group relative px-12 py-5 bg-transparent border-2 border-white/20 hover:border-[#CCFF00] transition-all overflow-hidden rounded-none">
                        <span className="relative z-10 text-white font-black uppercase tracking-widest group-hover:text-black transition-colors">
                            Explorar Portfolio Completo
                        </span>
                        <div className="absolute inset-0 bg-[#CCFF00] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </div>

            </div>
        </section>
    );
}
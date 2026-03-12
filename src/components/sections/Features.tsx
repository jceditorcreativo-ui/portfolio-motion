"use client";

import React, { useState } from 'react';
import { motion, Variants } from "framer-motion";
import { Scissors, Layers, Cpu, Play } from "lucide-react";

interface ServiceSubItem {
    label: string;
    info: string;
    type: 'text' | 'image';
}

interface ServiceCardProps {
    title: string;
    icon: React.ReactNode;
    color: string;
    description: string;
    subItems: ServiceSubItem[];
}

const ServiceCard = ({ title, icon, color, description, subItems }: ServiceCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Tipamos las variantes para que TypeScript no se queje
    const cardVariants: Variants = {
        hidden: {
            x: "-50%",
            y: 0,
            rotate: 0,
            opacity: 0,
            scale: 0.9,
        },
        peek: (i: number) => ({
            x: "-50%",
            y: -35,
            rotate: (i - 1) * 4,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 25 }
        }),
        open: (i: number) => ({
            x: i === 0 ? "-140%" : i === 1 ? "-50%" : "40%",
            y: i === 1 ? -150 : -115,
            rotate: (i - 1) * 15,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 200, damping: 20 }
        })
    };

    return (
        <div
            className="relative h-[520px] flex items-end justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setIsOpen(false);
            }}
        >
            {/* 📁 CAPA DE ARCHIVOS (Z-index intermedio) */}
            <div className="absolute inset-0 pointer-events-none flex items-end justify-center pb-64">
                {subItems.map((item, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate={isOpen ? "open" : isHovered ? "peek" : "hidden"}
                        variants={cardVariants}
                        whileHover={isOpen ? {
                            scale: 1.15,
                            zIndex: 100, // Se pone encima de TODO al tocarlo
                            transition: { duration: 0.2 }
                        } : {}}
                        className="absolute w-44 h-56 bg-[#16161a] border border-white/10 p-5 shadow-2xl pointer-events-auto origin-bottom cursor-pointer"
                        style={{
                            zIndex: isOpen ? 50 + i : 10 + i,
                            borderTop: `3px solid ${isOpen ? color : 'transparent'}`
                        }}
                    >
                        <div className="flex flex-col h-full justify-between pointer-events-none">
                            <div className="flex justify-between items-start">
                                <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">FILE_V.0{i + 1}</span>
                                <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.3)]" style={{ backgroundColor: color }} />
                            </div>
                            <div className="flex-1 mt-5">
                                <p className="text-[11px] font-black text-white uppercase mb-1 tracking-tighter border-b border-white/5 pb-2">
                                    {item.label}
                                </p>
                                <p className="text-[10px] text-gray-500 leading-relaxed mt-3 italic font-light">
                                    {item.info}
                                </p>
                            </div>
                            <div className="h-1 w-full opacity-20" style={{ backgroundColor: color }} />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* 💼 LA CARPETA (Z-index superior para el click, pero no tapa los archivos abiertos) */}
            <motion.div
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
                animate={{
                    y: isHovered ? -8 : 0,
                    borderColor: isOpen || isHovered ? color : 'rgba(255,255,255,0.1)',
                    scale: isHovered ? 1.02 : 1
                }}
                className="relative z-40 w-full h-64 bg-[#0F0F12] border-2 p-8 cursor-pointer overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-black border border-white/10" style={{ color: color }}>
                        {icon}
                    </div>
                    <motion.div
                        animate={isOpen ? { scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] } : {}}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: color }}
                    />
                </div>

                <div className="relative">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2 italic">
                        {title}
                    </h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-[0.15em] leading-relaxed max-w-[85%] font-medium">
                        {description}
                    </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#CCFF00] rounded-full animate-pulse" />
                        <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.1em]">
                            {isOpen ? 'DAT_LOADED' : isHovered ? 'AWAITING_CMD' : 'IDLE_MODE'}
                        </span>
                    </div>
                    <Play className={`w-3 h-3 transition-all duration-500 ${isOpen ? 'rotate-90 text-white scale-125' : 'text-white/20'}`} />
                </div>
            </motion.div>
        </div>
    );
};

const services: ServiceCardProps[] = [
    {
        title: "Dopamine Editing",
        icon: <Scissors className="w-6 h-6" />,
        color: "#CCFF00",
        description: "Edición de ritmo frenético para retención máxima.",
        subItems: [
            { label: "Flow Analysis", info: "Análisis de picos de dopamina por segundo.", type: "text" },
            { label: "SFX Master", info: "Capas sonoras inmersivas binaurales.", type: "text" },
            { label: "VFX Speed", info: "Speedramps calibrados quirúrgicamente.", type: "text" }
        ]
    },
    {
        title: "Motion 2D/3D",
        icon: <Layers className="w-6 h-6" />,
        color: "#FF0055",
        description: "Animación de alto nivel para marcas disruptivas.",
        subItems: [
            { label: "Octane Render", info: "Iluminación fotorealista en 3D.", type: "text" },
            { label: "Kinetic Type", info: "Tipografía que comunica con ritmo.", type: "text" },
            { label: "Loop Design", info: "Contenido infinito para redes sociales.", type: "text" }
        ]
    },
    {
        title: "AI Workflows",
        icon: <Cpu className="w-6 h-6" />,
        color: "#00F0FF",
        description: "Inteligencia Artificial para potenciar la creatividad.",
        subItems: [
            { label: "Upscaling", info: "Mejora de calidad 4K mediante redes neuronales.", type: "text" },
            { label: "Gen-Content", info: "Creación de entornos imposibles con Midjourney.", type: "text" },
            { label: "Automation", info: "Scripts personalizados para acelerar la entrega.", type: "text" }
        ]
    }
];

export default function Features() {
    return (
        <section className="py-32 bg-[#0A0A0C]">
            <div className="container px-4 mx-auto">
                <div className="max-w-4xl mb-24">
                    <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none italic">
                        CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white not-italic">CAPABILITIES.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-12">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
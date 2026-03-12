"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Layers, Cpu, Play } from "lucide-react";

// 1. Interfaces para TypeScript
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

// 2. Componente de la Tarjeta con lógica de Hover y Click
const ServiceCard = ({ title, icon, color, description, subItems }: ServiceCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Lógica de movimiento: Peek (asomarse) vs Open (abanico total)
    const getTransform = (index: number) => {
        if (isOpen) {
            // Abanico centrado y desplegado
            if (index === 0) return 'translate(-120%, -100%) rotate(-10deg)';
            if (index === 1) return 'translate(-50%, -125%) rotate(0deg)';
            if (index === 2) return 'translate(20%, -100%) rotate(10deg)';
        }
        if (isHovered) {
            // Solo asoman un poco (Peek)
            return `translate(-50%, -25px) rotate(${(index - 1) * 2}deg)`;
        }
        // Escondidas
        return 'translate(-50%, 0%) rotate(0deg)';
    };

    return (
        <div
            className="relative h-[480px] flex items-end justify-center group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setIsOpen(false); // Auto-cerrado al salir
            }}
        >
            {/* 📁 ARCHIVOS INTERNOS */}
            {subItems.map((item, i) => (
                <motion.div
                    key={i}
                    layout
                    whileHover={isOpen ? { scale: 1.08, zIndex: 50, transition: { duration: 0.2 } } : {}}
                    className="absolute z-10 w-44 h-52 bg-[#1A1A1E] border border-white/20 p-5 shadow-2xl cursor-pointer"
                    style={{
                        left: '50%',
                        transform: getTransform(i),
                        opacity: isOpen || isHovered ? 1 : 0,
                        transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Efecto muelle
                        borderColor: isHovered && !isOpen ? color + '40' : 'rgba(255,255,255,0.1)'
                    }}
                >
                    <div className="flex flex-col h-full justify-between pointer-events-none">
                        <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">Module_0{i + 1}</span>
                        <div className="flex-1 mt-3">
                            <p className="text-[12px] font-bold text-white uppercase mb-1 tracking-tight">{item.label}</p>
                            <p className="text-[10px] text-gray-500 leading-tight">{item.info}</p>
                        </div>
                        <div className="h-1 w-full" style={{ backgroundColor: color + '20' }} />
                    </div>
                </motion.div>
            ))}

            {/* 💼 CONTENEDOR PRINCIPAL */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-20 w-full h-64 bg-[#111113] border-2 border-white/10 p-8 cursor-pointer transition-all duration-300 overflow-hidden"
                style={{
                    borderColor: isOpen || isHovered ? color : 'rgba(255,255,255,0.1)',
                    boxShadow: isHovered ? `0 0 30px ${color}15` : 'none'
                }}
            >
                {/* Glow interno opcional */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />

                <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="p-3 bg-black border border-white/10" style={{ color: color }}>
                        {icon}
                    </div>
                    <div className={`w-2 h-2 rounded-full ${isOpen ? 'animate-ping' : ''}`} style={{ backgroundColor: color }} />
                </div>

                <div className="relative z-10">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
                        {title}
                    </h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest leading-relaxed max-w-[80%]">
                        {description}
                    </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center relative z-10">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.2em]">
                        {isOpen ? 'STATUS: ACTIVE' : isHovered ? 'STATUS: READY' : 'STATUS: IDLE'}
                    </span>
                    <Play className={`w-3 h-3 text-white/20 ${isOpen ? 'rotate-90 text-[#CCFF00]' : ''} transition-all`} />
                </div>
            </div>
        </div>
    );
};

// 3. Lista de Servicios
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
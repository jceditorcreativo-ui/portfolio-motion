"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants, useInView } from "framer-motion";
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
    const [isMobile, setIsMobile] = useState(false);
    const cardRef = useRef(null);

    // Detección de scroll para móvil (se activa cuando el 50% de la tarjeta es visible)
    const isInView = useInView(cardRef, { margin: "-20% 0px -20% 0px" });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Determinar el estado visual basado en dispositivo
    // En móvil: Si está en el centro (isInView) -> Peek. Si pincha -> Open.
    // En Web: Hover -> Peek. Click -> Open.
    const visualState = isOpen ? "open" : (isMobile ? (isInView ? "peek" : "hidden") : (isHovered ? "peek" : "hidden"));

    const cardVariants: Variants = {
        hidden: {
            x: "-50%",
            y: 10,
            rotate: 0,
            opacity: 0,
            scale: 0.95,
        },
        peek: (i: number) => ({
            x: i === 0 ? "-80%" : i === 1 ? "-50%" : "-20%", // Separadas pero solapadas
            y: -25, // Solo asoman el borde superior
            rotate: (i - 1) * 3,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 25 }
        }),
        open: (i: number) => ({
            x: i === 0 ? "-130%" : i === 1 ? "-50%" : "30%",
            y: -110, // Altura ajustada para que el borde inferior quede algo tapado
            rotate: (i - 1) * 12,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 200, damping: 20 }
        })
    };

    return (
        <div
            ref={cardRef}
            className="relative h-[320px] flex items-end justify-center" // Hitbox reducida
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => {
                if (!isMobile) {
                    setIsHovered(false);
                    setIsOpen(false);
                }
            }}
        >
            {/* 📁 CAPA DE ARCHIVOS */}
            <div className="absolute inset-x-0 bottom-64 flex justify-center pointer-events-none">
                {subItems.map((item, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate={visualState}
                        variants={cardVariants}
                        whileHover={isOpen ? {
                            scale: 1.1,
                            zIndex: 100, // Se pone por encima de la tarjeta principal
                            y: -130, // Un pelín más arriba al destacar
                            transition: { duration: 0.2 }
                        } : {}}
                        className="absolute w-40 h-52 bg-[#16161a] border border-white/10 p-5 shadow-2xl pointer-events-auto origin-bottom cursor-pointer"
                        style={{
                            zIndex: isOpen ? 50 + i : 10 + i,
                            borderTop: `3px solid ${color}`
                        }}
                    >
                        <div className="flex flex-col h-full justify-between pointer-events-none">
                            <div className="flex justify-between items-start">
                                <span className="text-[8px] font-mono text-white/20 uppercase">FILE_V.0{i + 1}</span>
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                            </div>
                            <div className="flex-1 mt-5">
                                <p className="text-[10px] font-black text-white uppercase border-b border-white/5 pb-2">
                                    {item.label}
                                </p>
                                <p className="text-[9px] text-gray-500 leading-relaxed mt-2 italic font-light">
                                    {item.info}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* 💼 TARJETA PRINCIPAL (La Carpeta) */}
            <motion.div
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
                animate={{
                    y: isHovered ? -5 : 0,
                    borderColor: (isOpen || (isMobile ? isInView : isHovered)) ? color : 'rgba(255,255,255,0.1)',
                }}
                className="relative z-40 w-full h-64 bg-[#0F0F12] border-2 p-8 cursor-pointer overflow-hidden shadow-xl"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-black border border-white/10" style={{ color: color }}>
                        {icon}
                    </div>
                    <motion.div
                        animate={isOpen ? { scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] } : {}}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: color }}
                    />
                </div>

                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2 italic">
                    {title}
                </h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] max-w-[85%] font-medium">
                    {description}
                </p>

                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-white/20">
                    <span className="text-[8px] font-mono uppercase">
                        {isMobile ? (isInView ? 'AUTO_SCAN_ON' : 'SLEEP_MODE') : (isOpen ? 'DATA_ACTIVE' : 'READY')}
                    </span>
                    <Play className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-90 text-white' : ''}`} />
                </div>
            </motion.div>
        </div>
    );
};

// ... (El resto del objeto services y el componente Features queda igual)
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
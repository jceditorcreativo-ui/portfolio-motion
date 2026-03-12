"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Scissors, Layers, Cpu, Play } from "lucide-react";

// 1. Definimos la estructura exacta
interface ServiceSubItem {
    label: string;
    info: string;
    type: 'text' | 'image'; // Solo permitimos estos dos valores
}

interface ServiceCardProps {
    title: string;
    icon: React.ReactNode;
    color: string;
    description: string;
    subItems: ServiceSubItem[];
}

// 2. Componente de la Tarjeta Interactiva
const ServiceCard = ({ title, icon, color, description, subItems }: ServiceCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const getTransform = (index: number) => {
        if (!isOpen) return 'translate(-50%, 0%) rotate(0deg)';
        if (index === 0) return 'translate(-130%, -80%) rotate(-10deg)';
        if (index === 1) return 'translate(-50%, -110%) rotate(0deg)';
        if (index === 2) return 'translate(30%, -80%) rotate(10deg)';
        return '';
    };

    return (
        <div className="relative h-[450px] flex items-end justify-center group">
            {subItems.map((item, i) => (
                <div
                    key={i}
                    className="absolute z-10 w-40 h-48 bg-[#1A1A1E] border border-white/20 p-4 transition-all duration-500 ease-out shadow-2xl"
                    style={{
                        transform: getTransform(i),
                        opacity: isOpen ? 1 : 0,
                        pointerEvents: isOpen ? 'auto' : 'none'
                    }}
                >
                    <div className="flex flex-col h-full justify-between">
                        <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">Module_0{i + 1}</span>
                        <div className="flex-1 mt-2">
                            <p className="text-[11px] font-bold text-white uppercase mb-1">{item.label}</p>
                            <p className="text-[10px] text-gray-500 leading-tight">{item.info}</p>
                        </div>
                        <div className="h-1 w-full bg-white/5" />
                    </div>
                </div>
            ))}

            <div
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-20 w-full h-64 bg-[#111113] border-2 border-white/10 p-8 cursor-pointer transition-all duration-300 hover:border-[#CCFF00]"
                style={{ borderColor: isOpen ? color : '' }}
            >
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-black border border-white/10" style={{ color: color }}>
                        {icon}
                    </div>
                    <div className={`w-3 h-3 rounded-full ${isOpen ? 'animate-ping' : ''}`} style={{ backgroundColor: color }} />
                </div>

                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
                    {title}
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest leading-relaxed">
                    {description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                        {isOpen ? '[ CLICK TO CLOSE ]' : '[ CLICK TO EXPAND ]'}
                    </span>
                    <Play className={`w-3 h-3 ${isOpen ? 'rotate-90' : ''} transition-transform`} />
                </div>
            </div>
        </div>
    );
};

// 3. LA LISTA DE DATOS (Aquí es donde forzamos el tipo para evitar el error)
const services: ServiceCardProps[] = [
    {
        title: "Dopamine Editing",
        icon: <Scissors />,
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
        icon: <Layers />,
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
        icon: <Cpu />,
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
                <div className="max-w-3xl mb-24">
                    <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">CAPABILITIES.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
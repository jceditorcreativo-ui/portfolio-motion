"use client";
import { motion } from "framer-motion";
import { Layers, Cpu, Scissors } from "lucide-react";

const services = [
    { icon: <Scissors className="h-8 w-8 text-[#CCFF00]" />, title: "Dopamine Editing", description: "Edición de ritmo frenético diseñada con principios psicológicos para hackear la retención." },
    { icon: <Layers className="h-8 w-8 text-[#FF0055]" />, title: "Motion Design 2D/3D", description: "Animación de alto nivel y Kinetic Typography que grita tu mensaje." },
    { icon: <Cpu className="h-8 w-8 text-[#00F0FF]" />, title: "AI Workflows", description: "Integración de IA generativa para multiplicar la producción visual." }
];

export default function Features() {
    return (
        <section className="py-24 bg-[#0A0A0C] border-t border-white/10">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-start mb-16">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">La Ventaja <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">Injusta.</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative bg-[#111113] border border-white/10 p-8 hover:border-[#CCFF00] transition-colors duration-300 rounded-none">
                            <div className="mb-6 p-4 bg-black inline-block border border-white/5">{service.icon}</div>
                            <h3 className="text-2xl font-bold uppercase text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 font-light">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
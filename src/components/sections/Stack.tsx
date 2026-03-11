"use client";

import { motion } from "framer-motion";

const tools = [
    "After Effects", "Premiere Pro", "Cinema 4D", "DaVinci Resolve",
    "ChatGPT Plus", "Midjourney", "TikTok Symphony", "Claude 3.5",
    "Neuropsicología", "Diseño de Comportamiento", "PNL", "Psicología Clínica"
];

export default function Stack() { // <--- ASEGÚRATE DE QUE DICE EXPORT DEFAULT
    return (
        <section className="py-20 bg-transparent overflow-hidden border-y border-white/5">
            <div className="container px-4 mx-auto mb-10 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
                    Tech Stack & Metodología
                </p>
            </div>

            <div className="flex relative">
                <motion.div
                    className="flex whitespace-nowrap gap-12 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {[...tools, ...tools].map((tool, index) => (
                        <span
                            key={index}
                            className="text-3xl md:text-5xl font-bold text-white/20 hover:text-cyan-400 transition-colors cursor-default"
                        >
                            {tool}
                        </span>
                    ))}
                </motion.div>

                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />
            </div>
        </section>
    );
}
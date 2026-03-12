"use client";

import { motion } from "framer-motion";

const tools = [
    "After Effects", "Premiere Pro", "Blender", "DaVinci Resolve",
    "Unreal Engine", "Midjourney", "Stable Diffusion", "Photoshop",
    "Cinema 4D", "Topaz AI", "Runway Gen-2", "Illustrator"
];

export default function Stack() {
    const doubledTools = [...tools, ...tools];

    return (
        <section className="py-12 bg-[#0A0A0C] border-y border-white/5 overflow-hidden">
            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex whitespace-nowrap gap-12 items-center"
                >
                    {doubledTools.map((tool, index) => (
                        <span
                            key={index}
                            className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white/20 hover:text-[#CCFF00] transition-colors cursor-default"
                        >
                            {tool}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Neon Cyberpunk",
        category: "3D Motion",
        image: "/media/botno_no_deberia_existir.png",
        colSpan: "md:col-span-2",
    },
    {
        title: "Abstract Fluids",
        category: "Visual Loop",
        image: "/media/esta_roto.png",
        colSpan: "md:col-span-1",
    },
    {
        title: "Micro-learning EdTech",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=2664&auto=format&fit=crop",
        colSpan: "md:col-span-1",
    },
    {
        title: "Campaña HealthTech",
        category: "UI Design",
        image: "https://images.unsplash.com/photo-1633103761757-d33694002e26?q=80&w=2600&auto=format&fit=crop",
        colSpan: "md:col-span-2",
    },
];

export default function Projects() {
    return (
        // AQUÍ ES DONDE ESTÁ EL CAMBIO IMPORTANTE: id="proyectos"
        <section id="proyectos" className="py-24 px-6 relative z-10 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-end mb-12"
                >
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                            Casos de Éxito
                        </h2>
                        <p className="text-slate-400 font-light">Transformando conceptos complejos en piezas de alta retención.</p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition-colors">
                        Ver Todos <ArrowUpRight className="w-4 h-4" />
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer ${project.colSpan} border border-white/10`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                                <div className="text-cyan-400 text-sm font-medium mb-2 uppercase tracking-wider">
                                    {project.category}
                                </div>
                                <h3 className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button"; // Revisa que la ruta coincida con tu proyecto

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            // Fixed top, glassmorphism y z-index alto para que flote siempre por encima
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0A0A0A]/70 backdrop-blur-md border-b border-white/5"
        >
            {/* Logo */}
            <Link href="#" className="text-2xl font-extrabold text-white tracking-tighter">
                JCB<span className="text-cyan-400">.</span>
            </Link>

            {/* Enlaces (Solo visibles en ordenador, se ocultan en móvil) */}
            <div className="hidden md:flex items-center gap-8">
                <Link
                    href="#problema"
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                    El Problema
                </Link>
                <Link
                    href="#proyectos"
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                    Casos de Éxito
                </Link>
                {/* Dejamos preparado el de contacto para cuando hagamos esa sección */}
                <Link
                    href="#contacto"
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                    Contacto
                </Link>
            </div>

            {/* Botón Call to Action */}
            <Button
                className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all rounded-full px-6"
            >
                Hablemos
            </Button>
        </motion.nav>
    );
}
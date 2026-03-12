import Hero from "@/components/sections/Hero";
import Stack from "@/components/sections/Stack";
import Features from "@/components/sections/Features";
import Projects from "@/components/sections/Projects"; // Importamos la nueva sección

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0C]">
      <Hero />
      <Stack />
      <Features />
      <Projects /> {/* La galería va después de explicar tus ventajas */}
    </main>
  );
}
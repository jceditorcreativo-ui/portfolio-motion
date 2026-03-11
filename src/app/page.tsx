import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Solution from "@/components/sections/Solution";
import Stack from "@/components/sections/Stack";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact"; // Importación añadida
import SplashCursor from "@/components/ui/SplashCursor";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-[#0A0A0A]">

      {/* CAPA 1: El lienzo de humo */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        <SplashCursor
          SIM_RESOLUTION={128}
          DYE_RESOLUTION={768}
          DENSITY_DISSIPATION={5}
          VELOCITY_DISSIPATION={1}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.05}
          SPLAT_FORCE={4000}
          COLOR_UPDATE_SPEED={10}
        />
      </div>

      {/* CAPA 2: Secciones con el orden narrativo correcto */}
      <div className="relative z-10 w-full flex flex-col">
        <Hero />
        <Features />
        <Solution />
        <Stack />
        <Projects />
        <About />
        <Contact />
      </div>

    </main>
  );
}
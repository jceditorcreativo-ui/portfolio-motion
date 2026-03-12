import Hero from "@/components/sections/Hero";
import Stack from "@/components/sections/Stack";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0C]">
      {/* 1. Impacto inicial */}
      <Hero />

      {/* 2. Prueba de autoridad (Herramientas) */}
      <Stack />

      {/* 3. Propuesta de valor */}
      <Features />
    </main>
  );
}
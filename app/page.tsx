import { AboutMeSection } from "@/components/AboutMeSection";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 w-full max-w-4xl p-4 mx-auto">
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
    </main>
  );
}

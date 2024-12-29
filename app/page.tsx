import { AboutMeSection } from "@/components/AboutMeSection";
import { HeroSection } from "@/components/HeroSection";
import { MyProjectsSection } from "@/components/MyProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 w-full max-w-4xl p-4 mx-auto">
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <MyProjectsSection />
      <TestimonialsSection />
    </main>
  );
}

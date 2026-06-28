import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SiteHeader />
      <Hero />
      <About />
      <ProjectGrid />
      <SiteFooter />
    </main>
  );
}

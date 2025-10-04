import { ModernHeader } from "@/components/ModernHeader";
import { ModernHero } from "@/components/ModernHero";
import { AboutVision } from "@/components/AboutVision";
import { BentoServices } from "@/components/BentoServices";
import { ModernCTA } from "@/components/ModernCTA";
import { ModernFooter } from "@/components/ModernFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ModernHeader />
      <main>
        <ModernHero />
        <AboutVision />
        <BentoServices />
        <ModernCTA />
      </main>
      <ModernFooter />
    </div>
  );
};

export default Index;

import FeaturedTreatments from "@/components/home/FeaturedTreatments";
import DoctorsSection from "@/components/home/DoctorsSection";
import FloatingActions from "@/components/home/FloatingActions";
import HeroSection from "@/components/home/HeroSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TrustBar from "@/components/home/TrustBar";
import WelcomeSection from "@/components/home/WelcomeSection";

export default function Home() {
  return (
    <main className="bg-[#f7f6f8] text-[#200b3c]">
      <HeroSection />
      <TrustBar />
      <FeaturedTreatments />
      <WelcomeSection />
      <DoctorsSection />
      <SolutionsSection />
      <TestimonialsSection />
      <FloatingActions />
    </main>
  );
}

import { useState } from 'react';
import ScrollProgressBar from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import ProductSection from './components/ProductSection';
import BiotipoAdvisor from './components/BiotipoAdvisor';
import DifferentialsSection from './components/DifferentialsSection';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SizeGuideModal from './components/SizeGuideModal';

export default function App() {
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgressBar />

      {/* 1. Fixed Header / Navbar */}
      <Navbar onOpenSizeGuide={() => setSizeGuideOpen(true)} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section with Real JS Parallax */}
        <Hero />

        {/* 3. Stats & Credibility Parallax Banner */}
        <StatsBanner />

        {/* 4. Products & Categories Section */}
        <ProductSection />

        {/* Biotipo Simulator / Mattress Recommendation Engine */}
        <BiotipoAdvisor />

        {/* 5. Differentials Section */}
        <DifferentialsSection />

        {/* 6. Social Proof / Google Reviews (5.0 Score) */}
        <ReviewsSection />

        {/* 7. Store Location & Interactive Map */}
        <LocationSection />

        {/* 8. FAQ Accordion Section */}
        <FaqSection />

        {/* 9. Final High-Contrast CTA Section */}
        <FinalCtaSection />
      </main>

      {/* 10. Premium Dark Footer */}
      <Footer onOpenSizeGuide={() => setSizeGuideOpen(true)} />

      {/* 11. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Standard Size Guide Modal */}
      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />
    </div>
  );
}

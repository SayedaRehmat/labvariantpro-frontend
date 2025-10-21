// pages/index.tsx
import React from 'react';
import SEO from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FutureTools from '@/components/FutureTools';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <SEO />
      <main className="min-h-screen bg-gradient-to-b from-[#071027] to-[#041025]">
        <HeroSection />
        <FeaturesGrid />
        <HowItWorks />
        <Testimonials />
        <FutureTools />
        <CTASection />
      </main>
    </>
  );
}

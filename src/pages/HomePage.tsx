import React from 'react';
import { Hero } from '../components/Hero';
import { ClientMarquee } from '../components/ClientMarquee';
import { ServicesSection } from '../components/ServicesSection';
import { ProductsShowcase } from '../components/ProductsShowcase';
import { WhyAdcanopus } from '../components/WhyAdcanopus';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { TestimonialSection } from '../components/TestimonialSection';
import { ContactCTA } from '../components/ContactCTA';
import { ServiceItem } from '../data/servicesData';

interface HomePageProps {
  isLoaded: boolean;
  onOpenGetStarted: (serviceName?: string) => void;
  onSelectServiceModal?: (service: ServiceItem) => void;
  selectedProductId?: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  isLoaded,
  onOpenGetStarted,
  onSelectServiceModal,
  selectedProductId,
}) => {
  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* Hero Section with Orchestrated Post-Load Sequence */}
      <Hero
        isLoaded={isLoaded}
        onOpenGetStarted={() => onOpenGetStarted()}
        onExploreServices={handleExploreServices}
      />

      {/* Client Partner Showcase */}
      <ClientMarquee />

      {/* All 8 Services Asymmetric Grid */}
      <ServicesSection
        onOpenGetStarted={onOpenGetStarted}
        onSelectServiceModal={onSelectServiceModal}
      />

      {/* In-House Products Showcase (Dripeek, Knowastro, Paisafatafat) */}
      <ProductsShowcase
        selectedProductId={selectedProductId}
      />

      {/* Work Process & Growth Journey */}
      <WhyAdcanopus
        onOpenGetStarted={() => onOpenGetStarted()}
      />

      {/* Verified Case Studies */}
      <CaseStudiesSection
        onOpenGetStarted={() => onOpenGetStarted()}
      />

      {/* Verified Client Testimonials */}
      <TestimonialSection />

      {/* Contact & Global Hubs */}
      <ContactCTA
        onOpenGetStarted={() => onOpenGetStarted()}
      />
    </main>
  );
};

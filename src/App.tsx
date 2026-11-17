import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Preloader } from './components/Preloader';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GetStartedModal } from './components/GetStartedModal';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';

export const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);
  const [selectedProductForShowcase, setSelectedProductForShowcase] = useState<string | undefined>(undefined);

  const handleOpenGetStarted = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName);
    setIsGetStartedOpen(true);
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductForShowcase(productId);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white text-brand-charcoal font-sans selection:bg-primary/20 selection:text-primary">
        {/* 1. Scroll To Top on Route / Hash changes */}
        <ScrollToTop />

        {/* 2. Top Reading Scroll Progress Bar */}
        <ScrollProgress />

        {/* 3. Original Logo Preloader with Post-Load Signal */}
        <Preloader onLoaded={() => setIsLoaded(true)} />

        {/* 4. Global Navigation Header */}
        <Navbar
          onOpenGetStarted={() => handleOpenGetStarted()}
          onSelectProduct={handleSelectProduct}
        />

        {/* 5. Main Route Views */}
        <Routes>
          {/* Main Homepage */}
          <Route
            path="/"
            element={
              <HomePage
                isLoaded={isLoaded}
                onOpenGetStarted={handleOpenGetStarted}
                selectedProductId={selectedProductForShowcase}
              />
            }
          />

          {/* Dedicated Service Routes (e.g. /services/mobile-marketing) */}
          <Route
            path="/services/:serviceId"
            element={
              <ServiceDetailPage
                onOpenGetStarted={handleOpenGetStarted}
              />
            }
          />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* 6. Global Dark Footer */}
        <Footer
          onOpenGetStarted={() => handleOpenGetStarted()}
        />

        {/* 7. Frontend-Only Multi-Step Get Started Consultation Modal */}
        <GetStartedModal
          isOpen={isGetStartedOpen}
          onClose={() => setIsGetStartedOpen(false)}
          initialService={selectedServiceForModal}
        />
      </div>
    </Router>
  );
};

export default App;

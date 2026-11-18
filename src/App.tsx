import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Preloader } from './components/Preloader';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ContactUsPage } from './pages/ContactUsPage';

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProductForShowcase, setSelectedProductForShowcase] = useState<string | undefined>(undefined);

  const handleOpenGetStarted = (serviceName?: string) => {
    if (serviceName) {
      navigate(`/contact?service=${encodeURIComponent(serviceName)}`);
    } else {
      navigate('/contact');
    }
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductForShowcase(productId);
  };

  return (
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

        {/* Dedicated Contact Us Page */}
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/contact-us" element={<Navigate to="/contact" replace />} />

        {/* Fallback to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* 6. Global Dark Footer */}
      <Footer
        onOpenGetStarted={() => handleOpenGetStarted()}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

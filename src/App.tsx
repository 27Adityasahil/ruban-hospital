import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ExcellenceSection from './components/ExcellenceSection';
import SpecialistsSection from './components/SpecialistsSection';
import HealthPackagesSection from './components/HealthPackagesSection';
import NewsSection from './components/NewsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and ensure minimum display time for preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds minimum loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <StatsSection />
      <ExcellenceSection />
      <SpecialistsSection />
      <HealthPackagesSection />
      <NewsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
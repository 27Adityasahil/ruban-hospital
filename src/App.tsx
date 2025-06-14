import React from 'react';
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
  return (
    <div className="min-h-screen">
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
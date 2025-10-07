import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SkipLinks from '@/components/SkipLinks';
import SEOHead from '@/components/SEOHead';
import Industries from '@/components/Industries';
import TrustBar from '@/components/TrustBar';
import LocalRibbon from '@/components/LocalRibbon';

const Home: React.FC = () => {
  return (
    <>
      <SEOHead />
      <SkipLinks />
      <div className="min-h-screen">
        <Header />
        <LocalRibbon />
        <main id="main-content" role="main" aria-label="Main content">
          <Hero />
          <TrustBar />
          <Services />
          <Industries />
          <About />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

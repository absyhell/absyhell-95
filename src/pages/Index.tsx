
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WeatherDashboard from '@/components/WeatherDashboard';
import ECommerceComponent from '@/components/ECommerce/ECommerceComponent';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      
      <section id="weather" className="py-20 md:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Weather <span className="highlight">Dashboard</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-foreground/80">
              Check the current weather conditions for any location around the world.
            </p>
          </div>
          <WeatherDashboard />
        </div>
      </section>
      
      <section id="shop" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Online <span className="highlight">Shop</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-foreground/80">
              Browse through my curated collection of high-quality products.
            </p>
          </div>
          <ECommerceComponent />
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

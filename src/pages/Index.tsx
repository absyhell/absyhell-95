
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WeatherDashboard from '@/components/WeatherDashboard';

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
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

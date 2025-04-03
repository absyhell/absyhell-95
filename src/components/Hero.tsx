
import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,var(--tw-gradient-from)_1%,var(--tw-gradient-to)_99%)] from-purple-100 to-transparent dark:from-purple-900/20 dark:to-background"></div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center animate-fade-in">
        <p className="inline-block mb-4 px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full">
          Full-Stack Developer
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          Hey there, I'm <span className="gradient-text">Absy</span>
        </h1>
        
        <p className="max-w-[700px] text-xl md:text-2xl text-foreground/70 mb-8">
          I craft beautiful, responsive, and user-friendly web experiences using modern technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            View My Projects
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg">
            Download Resume
          </Button>
        </div>
        
        <div className="flex space-x-4 mb-16">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
            <span className="sr-only">GitHub</span>
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter size={24} />
          </a>
          <a href="mailto:contact@absy.dev" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
            <span className="sr-only">Email</span>
            <Mail size={24} />
          </a>
        </div>
        
        <a 
          href="#about" 
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors animate-float"
          aria-label="Scroll to About section"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

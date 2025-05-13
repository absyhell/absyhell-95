
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-10 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Ayush.dev</h3>
            <p className="text-sm text-foreground/70">
              Building the digital future one pixel at a time. A full-stack developer passionate about creating beautiful, functional web experiences.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Frontend Design',
                'Backend Development',
                'UI/UX Design',
                'API Integration'
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-3">
              <a href="https://github.com/Absyhell" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/ayush-raj-288a0127a" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com/alphabetagammas" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="mailto:absyhell@gmail.com" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
            <p className="text-sm text-foreground/70">
              Email: absyhell@gmail.com<br />
              Phone: 7279020348
            </p>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} Ayush | All rights reserved
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-foreground/60 hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

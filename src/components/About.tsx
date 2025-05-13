
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in [animation-delay:200ms]">
            <div className="relative">
              <div className="animated-border w-full aspect-square">
                <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/90d277b7-abae-467e-9188-296309a1fe8f.png" 
                    alt="Ayush profile" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in [animation-delay:400ms]">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="highlight">Me</span>
            </h2>
            
            <p className="text-lg text-foreground/80">
              I'm a passionate full-stack developer with a strong focus on creating efficient, scalable, and 
              user-friendly web applications. With a background in computer science and years of experience
              in the industry, I bring technical expertise and creative problem-solving to every project.
            </p>
            
            <p className="text-lg text-foreground/80">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through technical blogs and community events.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">What I Offer:</h3>
              <ul className="space-y-3">
                {[
                  "Creative and responsive web design",
                  "Robust full-stack development",
                  "Clean, maintainable code",
                  "Performance optimization",
                  "Collaborative approach to projects"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

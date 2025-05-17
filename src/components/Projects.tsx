
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Film, Eye, Mic, Text } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  image: string;
  badges: string[];
  liveUrl: string;
  githubUrl: string;
  isInternal?: boolean;
  internalId?: string;
  icon?: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Smart Lens",
    description: "An accessibility tool that converts sign language to voice and text in real-time, helping communication between blind and deaf individuals.",
    image: "/lovable-uploads/a433f154-4e1a-4329-9255-30582ba2433e.png",
    badges: ["React", "TensorFlow.js", "WebSpeech API", "Computer Vision"],
    liveUrl: "/smart-lens",
    githubUrl: "#",
    isInternal: true,
    internalId: "smart-lens",
    icon: <Eye className="h-8 w-8 text-primary/70" />
  },
  {
    title: "Cinematch",
    description: "A personalized movie recommendation system using machine learning algorithms to suggest films based on user preferences and viewing history.",
    image: "/placeholder.svg",
    badges: ["React", "TypeScript", "ML Algorithm", "Tailwind CSS"],
    liveUrl: "/cinematch",
    githubUrl: "#",
    isInternal: true,
    internalId: "cinematch",
    icon: <Film className="h-8 w-8 text-primary/70" />
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application featuring real-time forecasts, location search, and interactive weather maps.",
    image: "/placeholder.svg",
    badges: ["React", "TypeScript", "OpenWeatherAPI", "TailwindCSS"],
    liveUrl: "#weather",
    githubUrl: "#",
    isInternal: true,
    internalId: "weather"
  },
  {
    title: "Task Management App",
    description: "A productivity tool for organizing tasks with drag-and-drop functionality, user collaboration, and progress tracking.",
    image: "/placeholder.svg",
    badges: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden animate-fade-in hover:shadow-lg transition-shadow bg-card border border-border"
              style={{animationDelay: `${(index + 1) * 150}ms`}}
              id={project.isInternal ? project.internalId : undefined}
            >
              <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
                {project.image === "/placeholder.svg" ? (
                  project.icon ? (
                    project.icon
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-mono font-bold">{project.title.substring(0, 2)}</span>
                    </div>
                  )
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="secondary">{badge}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-4">
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href={project.githubUrl} target={project.isInternal ? "_self" : "_blank"} rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button asChild size="sm" className="gap-2">
                  <a href={project.liveUrl} target={project.isInternal ? "_self" : "_blank"} rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    {project.isInternal ? 'View Demo' : 'Live Demo'}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a href="#" className="gap-2">
              View All Projects
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Palette, Compass } from 'lucide-react';

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: "Frontend Technologies",
    skills: [
      "HTML/CSS",
      "JavaScript/TypeScript",
      "React"
    ]
  },
  {
    icon: Database,
    title: "Backend Technologies",
    skills: [
      "Node.js",
      "MongoDB",
      "SQL"
    ]
  },
  {
    icon: Palette,
    title: "Design & UI",
    skills: [
      "Tailwind CSS",
      "UI/UX Principles",
      "Responsive Design"
    ]
  },
  {
    icon: Compass,
    title: "Other Skills",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Project Management",
      "Technical Writing"
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="highlight">Skills</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            I've developed expertise across multiple technologies and domains, 
            allowing me to build complete solutions from concept to deployment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card animate-fade-in" style={{animationDelay: `${(index + 1) * 100}ms`}}>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 bg-primary/20 text-primary font-medium rounded-full hover:bg-primary/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

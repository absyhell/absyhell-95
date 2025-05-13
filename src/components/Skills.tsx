
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code2, Database, Palette, Compass } from 'lucide-react';

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: "Frontend Technologies",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "React", level: 88 },
      { name: "Next.js", level: 80 }
    ]
  },
  {
    icon: Database,
    title: "Backend Technologies",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 70 }
    ]
  },
  {
    icon: Palette,
    title: "Design & UI",
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Figma", level: 75 },
      { name: "UI/UX Principles", level: 80 },
      { name: "Responsive Design", level: 88 }
    ]
  },
  {
    icon: Compass,
    title: "Other Skills",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Team Collaboration", level: 88 },
      { name: "Project Management", level: 75 },
      { name: "Technical Writing", level: 70 }
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
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
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

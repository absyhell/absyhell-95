
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Palette, Compass, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="highlight">Skills</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            I've acquired a diverse range of skills throughout my journey as a developer.
            Here's a snapshot of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-fade-in [animation-delay:200ms]">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary/20 text-primary">
                    <category.icon className="h-6 w-6" />
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
        
        {/* LeetCode Profile Section */}
        <div className="animate-fade-in [animation-delay:400ms]">
          <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/20 text-primary">
                    <Code className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">My LeetCode Profile</h3>
                    <p className="text-foreground/70">Check out my problem-solving skills and algorithmic challenges on LeetCode</p>
                  </div>
                </div>
                <Button 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-6"
                  onClick={() => window.open('https://leetcode.com/u/AYUSHRAJ72790/', '_blank')}
                >
                  View LeetCode Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

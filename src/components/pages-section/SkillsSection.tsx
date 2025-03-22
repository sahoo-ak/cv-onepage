
import React from 'react';
import { cn } from "@/lib/utils";

type SkillType = "language" | "os";

interface Skill {
  name: string;
  logo: string;
  type: SkillType;
}

const skills: Skill[] = [
  // Programming Languages
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    type: "language"
  },
  {
    name: "Julia",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg",
    type: "language"
  },
  {
    name: "Fortran",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Fortran_logo.svg",
    type: "language"
  },
  // Operating Systems
  {
    name: "Ubuntu",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
    type: "os"
  },
  {
    name: "Fedora",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg",
    type: "os"
  },
  {
    name: "Red Hat",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg",
    type: "os"
  },
  {
    name: "Windows",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    type: "os"
  }
];

const SkillsSection: React.FC = () => {
  const languages = skills.filter(skill => skill.type === "language");
  const operatingSystems = skills.filter(skill => skill.type === "os");
  
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-serif font-medium text-center mb-10">Technical Skills</h3>
      
      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        <div className={cn(
          "bg-white p-6 rounded-lg border border-gray-100 transition-all duration-300",
          "hover:shadow-md"
        )}>
          <h4 className="text-lg font-medium mb-6 text-center">Programming Languages</h4>
          <div className="flex justify-center items-center flex-wrap gap-12">
            {languages.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img 
                  src={skill.logo} 
                  alt={`${skill.name} logo`} 
                  className="w-16 h-16 object-contain mb-2"
                />
                <span className="text-sm text-gray-600">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className={cn(
          "bg-white p-6 rounded-lg border border-gray-100 transition-all duration-300",
          "hover:shadow-md"
        )}>
          <h4 className="text-lg font-medium mb-6 text-center">Operating Systems</h4>
          <div className="flex justify-center items-center flex-wrap gap-12">
            {operatingSystems.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img 
                  src={skill.logo} 
                  alt={`${skill.name} logo`} 
                  className="w-16 h-16 object-contain mb-2"
                />
                <span className="text-sm text-gray-600">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
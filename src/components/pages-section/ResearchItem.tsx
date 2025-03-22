
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface ResearchItemProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  index: number;
}

const ResearchItem: React.FC<ResearchItemProps> = ({ 
  title, 
  description, 
  image, 
  tags,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "group relative bg-white rounded-lg overflow-hidden transition-all duration-300 ease-out-expo h-full",
        "hover:shadow-lg border border-gray-100"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out-expo"
            style={{ 
              backgroundImage: `url(${image})`,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-70" />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-gray-800 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 line-clamp-3 mb-4">
          {description}
        </p>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button 
            className="text-sm font-medium inline-flex items-center group"
          >
            <span className="mr-2">Read more</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchItem;

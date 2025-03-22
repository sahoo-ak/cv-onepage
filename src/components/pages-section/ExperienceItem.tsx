
import React from 'react';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface ExperienceItemProps {
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  organization, 
  location, 
  startDate, 
  endDate, 
  description,
  index
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className={cn(
        "relative pl-8 pb-12 group",
        index !== 0 && "pt-8"
      )}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 group-hover:bg-gray-300 transition-colors" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 w-5 h-5 -ml-2 rounded-full border-2 border-white bg-gray-200 shadow-sm group-hover:bg-gray-300 transition-colors" />
      
      <div className="transition-all duration-500 ease-out-expo" style={{ transitionDelay: `${index * 100}ms` }}>
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-x-4 mb-2">
          <h3 className="text-xl lg:text-2xl font-medium">{title}</h3>
          <div className="text-sm lg:text-base bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap mt-1 lg:mt-0">
            {startDate} – {endDate || 'Present'}
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <div className="font-medium">{organization}</div>
          {location && (
            <>
              <span className="mx-2">•</span>
              <div>{location}</div>
            </>
          )}
        </div>
        
        <p className="text-gray-600 lg:text-lg max-w-prose">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;

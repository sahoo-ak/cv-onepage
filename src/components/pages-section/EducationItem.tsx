
import React from 'react';
import { cn } from "@/lib/utils";
import { GraduationCap } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  title?: string; // Optional for non-research degrees
  supervisor?: string; // Optional for non-research degrees
  cgpa?: string; // Optional for non-research degrees
  percentage?: string; // Optional for non-research degrees
  index: number;
  isLarge?: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  degree, 
  institution, 
  location, 
  startDate, 
  endDate, 
  description,
  title,
  supervisor,
  cgpa,
  percentage,
  index,
  isLarge = false
}) => {
  return (
    <div 
      className={cn(
        "group p-6 bg-white border border-gray-100 rounded-lg transition-all duration-300",
        "hover:shadow-md hover:border-gray-200",
        isLarge && "col-span-full"
      )}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-medium group-hover:text-gray-900 transition-colors">
          {degree}
        </h3>
        <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
          <GraduationCap size={20} />
        </span>
      </div>

      <div className="mb-3">
        <div className="flex items-center text-gray-600 mb-1">
          <div className="font-medium">{institution}</div>
          {location && (
            <>
              <span className="mx-2">•</span>
              <div>{location}</div>
            </>
          )}
        </div>
        
        <div className="text-sm text-gray-500">
          {startDate} – {endDate}
        </div>
        
        {cgpa ? (
          <div className="text-gray-600 mt-1">
            <span className="font-medium">CGPA: </span>{cgpa}
          </div>
        ) : null}
        
        {percentage ? (
          <div className="text-gray-600 mt-1">
            <span className="font-medium">Percentage: </span>{percentage}
          </div>
        ) : null}
        
        {title ? (
          <div className="text-gray-600 mt-2">
            <span className="font-medium">Thesis: </span>{title}
          </div>
        ) : null}
        
        {supervisor ? (
          <div className="text-gray-600 mt-1">
            <span className="font-medium">Supervisor: </span>{supervisor}
          </div>
        ) : null}
      </div>
      
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default EducationItem;
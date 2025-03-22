
import React from 'react';
import { cn } from "@/lib/utils";

interface AwardItemProps {
  title: string;
  organization: string;
  year: number;
  description?: string;
  index: number;
}

const AwardItem: React.FC<AwardItemProps> = ({ 
  title, 
  organization, 
  year, 
  description,
  index
}) => {
  return (
    <div 
      className={cn(
        "group p-6 lg:p-8 rounded-lg border border-gray-100 bg-white transition-all duration-300",
        "hover:shadow-md hover:border-gray-200 hover:scale-[1.01] lg:h-full"
      )}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg lg:text-xl font-medium mb-1 group-hover:text-gray-900 transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center gap-2 text-sm lg:text-base text-gray-600 mb-3">
            <span>{organization}</span>
            <span>•</span>
            <span>{year}</span>
          </div>
          
          {description && (
            <p className="text-gray-600 text-sm lg:text-base">
              {description}
            </p>
          )}
        </div>
        
        <div className="shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:scale-125">
            <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AwardItem;


import React from 'react';
import { CalendarDays, MapPin, School, Presentation } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ConferenceItemProps {
  title: string;
  organization: string;
  location: string;
  date: string;
  description?: string;
  type: "conference" | "school";
  index: number;
}

const ConferenceItem: React.FC<ConferenceItemProps> = ({
  title,
  organization,
  location,
  date,
  description,
  type,
  index
}) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className={cn(
        "rounded-lg p-6 transition-all duration-300",
        "border border-gray-100 hover:border-gray-200 hover:shadow-md"
      )}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center",
            type === "conference" ? "bg-blue-50 text-blue-500" : "bg-emerald-50 text-emerald-500"
          )}>
            {type === "conference" ? <Presentation size={20} /> : <School size={20} />}
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-medium mb-2">{title}</h3>
          
          <div className="flex flex-col gap-2 mb-4 text-sm md:text-base text-gray-600">
            <div className="flex items-center">
              <div className="text-gray-400 mr-2">{organization}</div>
            </div>
            
            <div className="flex items-center">
              <MapPin size={16} className="text-gray-400 mr-2" />
              {location}
            </div>
            
            <div className="flex items-center">
              <CalendarDays size={16} className="text-gray-400 mr-2" />
              {date}
            </div>
          </div>
          
          {description && (
            <p className="text-gray-600">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConferenceItem;

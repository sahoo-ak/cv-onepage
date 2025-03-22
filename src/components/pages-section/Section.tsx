
import React, { useRef, useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  className, 
  children 
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={cn("section-container", className)}
    >
      <div className={cn(
        "max-w-4xl mx-auto text-center mb-16 lg:mb-24 transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0"
      )}>
        <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 rounded-full mb-3 tracking-wider uppercase">
          {id}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif mb-4 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
            {subtitle}
          </p>
        )}
      </div>
      <div className={cn(
        "transition-all duration-1000 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}>
        {children}
      </div>
    </section>
  );
};

export default Section;

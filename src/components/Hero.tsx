
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Globe } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white z-0" />
      
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute rounded-full w-72 h-72 bg-blue-100 blur-3xl top-1/4 -left-20" />
        <div className="absolute rounded-full w-80 h-80 bg-indigo-50 blur-3xl bottom-1/4 right-0" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"> {/* Change from grid-cols-2 to grid-cols-12 */}
        <div className="order-2 lg:order-1 lg:col-span-8">
            <div className={`transition-all duration-700 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="inline-block py-1 px-3 text-xs font-medium tracking-wider uppercase bg-gray-100 rounded-full mb-4">
                PhD in Physics
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-4">
                Exploring electron-Atom Interactions
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Dedicated to advancing our understanding of theoretical physics through innovative research, 
                collaboration, and academic excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#research" 
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-300 bg-black rounded-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                >
                  View Research
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-300 border border-gray-300 rounded-md hover:bg-gray-50 focus:shadow-outline focus:outline-none"
                >
                  Get in Touch
                </a>
              </div>
              
              {/* Academic social profiles */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Academic Profiles</h3>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://scholar.google.com/citations?user=kLeggdsAAAAJ&hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 bg-white hover:bg-gray-50 rounded-md border border-gray-200 transition-colors"
                    aria-label="Google Scholar"
                    title="Google Scholar"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path d="M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 016.824-2.998 12.078 12.078 0 00-.665-6.479L12 14z"></path>
                      <circle cx="12" cy="8" r="4"></circle>
                    </svg>
                    <span className="ml-2 font-medium text-sm">Google Scholar</span>
                  </a>
                  
                  <a 
                    href="https://www.researchgate.net/profile/Aloka-Sahoo-2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 bg-white hover:bg-gray-50 rounded-md border border-gray-200 transition-colors"
                    aria-label="ResearchGate"
                    title="ResearchGate"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600">
                      <path d="M19.586 5.586a2 2 0 0 0-2.828 0L12 10.344 7.242 5.586a2 2 0 1 0-2.828 2.828L9.172 13.172a2 2 0 0 0 2.828 0l4.758-4.758a2 2 0 0 0 0-2.828z" fill="currentColor" />
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                    <span className="ml-2 font-medium text-sm">ResearchGate</span>
                  </a>
                  
                  <a 
                    href="https://orcid.org/0000-0003-2441-4075" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 bg-white hover:bg-gray-50 rounded-md border border-gray-200 transition-colors"
                    aria-label="ORCID"
                    title="ORCID"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-700">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="12" cy="7" r="1" fill="currentColor" />
                      <path d="M12 9v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="ml-2 font-medium text-sm">ORCID</span>
                  </a>
                  
                  <a 
                    href="https://www.webofscience.com/wos/author/record/KRQ-9261-2024" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 bg-white hover:bg-gray-50 rounded-md border border-gray-200 transition-colors"
                    aria-label="Web of Science"
                    title="Web of Science"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-700">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                      <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                    <span className="ml-2 font-medium text-sm">Web of Science</span>
                  </a>
                  
                  <a 
                    href="https://www.scopus.com/authid/detail.uri?authorId=57217350178" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 bg-white hover:bg-gray-50 rounded-md border border-gray-200 transition-colors"
                    aria-label="Scimago"
                    title="Scimago"
                  >
                    <Globe size={24} className="text-orange-600" />
                    <span className="ml-2 font-medium text-sm">Scimago</span>
                  </a>
                  
                  {/* <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 bg-white hover:bg-gray-50 rounded-md border border-gray-200 transition-colors"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <Github size={24} className="text-gray-800" />
                    <span className="ml-2 font-medium text-sm">GitHub</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 lg:col-span-4 flex justify-end"> {/* Right section takes 7 columns, justify-end moves content right */}
            <div className={`relative w-64 h-64 md:w-80 md:h-80 transition-all duration-1000 transform ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 animate-pulse" />
              <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-white to-gray-50 backdrop-blur-lg shadow-lg">
                <Avatar className="w-full h-full">
                <AvatarImage src="src/data/photo-1.JPG" alt="Profile photo" className="object-cover" />
                  {/* <AvatarImage src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop&crop=faces" alt="Profile photo" className="object-cover" /> */}
                  <AvatarFallback className="text-6xl font-serif font-bold">P</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
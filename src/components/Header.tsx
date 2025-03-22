
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Track active section
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'Research', href: '#research' },
    { name: 'Education', href: '#education' },
    { name: 'Publications', href: '#publications' },
    { name: 'Conferences', href: '#conferences' },
    { name: 'Experience', href: '#experience' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
        <div>
            <a href="#home" className="text-xl font-serif font-medium">
              <span className={cn(
                "transition-colors",
                isScrolled ? "text-gray-900" : "text-gray-800"
              )}>
                Aloka
              </span>
              <span className={cn(
                "transition-colors ml-1",
                isScrolled ? "text-gray-500" : "text-gray-600"
              )}>
                Kumar Sahoo (PhD)
              </span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative py-2 px-1 text-sm font-medium transition-colors",
                  activeSection === item.href.substring(1)
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300",
                  activeSection === item.href.substring(1) ? "scale-x-100" : "scale-x-0"
                )}/>
              </a>
            ))}
          </nav>
          
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div className={cn(
          "md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <nav className="flex flex-col px-4 pt-20 pb-8 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-lg font-medium py-2 border-b",
                  activeSection === item.href.substring(1)
                    ? "border-black text-black"
                    : "border-gray-100 text-gray-500"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

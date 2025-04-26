"use client";

import { useEffect, useState } from 'react';

export default function MiniMap() {
  const [activeSection, setActiveSection] = useState('about');
  const sections = ['about', 'experiences', 'projects'];
  
  useEffect(() => {
    const handleScroll = () => {
      // Find which section is in view
      const currentPos = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const { top, bottom } = element.getBoundingClientRect();
        const elementTop = top + window.scrollY;
        const elementBottom = bottom + window.scrollY;
        
        if (currentPos >= elementTop && currentPos <= elementBottom) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initialize on mount
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="minimap">
      {sections.map((section) => (
        <div
          key={section}
          className={`minimap-indicator ${activeSection === section ? 'active' : ''}`}
          onClick={() => scrollToSection(section)}
          title={section.charAt(0).toUpperCase() + section.slice(1)}
        ></div>
      ))}
    </div>
  );
}
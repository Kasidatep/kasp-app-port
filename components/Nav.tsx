// components/Nav.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import content from "../contents/content.json";

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>("about");
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = "about";
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <nav>
        <ul className="flex flex-col lg:flex-row justify-center gap-4">
          {content.menu.map((item, index) => (
            <li key={index} className="text-md">
              <Link 
                href={item.link}
                className={`link-hover py-2 px-4 rounded-md block transition-all duration-300 ${
                  activeSection === item.link.substring(1) 
                    ? "bg-blue-100 text-blue-600 font-semibold" 
                    : "hover:bg-gray-100"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.link)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
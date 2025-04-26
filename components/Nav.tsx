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
    <div className="editor-card">
      <pre className="p-3 text-sm">
        <span className="syntax-keyword">import</span> <span className="syntax-variable">{'{ Navigation }'}</span> <span className="syntax-keyword">from</span> <span className="syntax-string">'@/utils'</span>;
      </pre>
      
      <nav className="py-2">
        <ul className="flex flex-wrap gap-2 px-3 pb-3">
          {content.menu.map((item, index) => (
            <li key={index}>
              <Link 
                href={item.link}
                className={`py-1 px-3 rounded text-sm transition-all duration-300 ${
                  activeSection === item.link.substring(1) 
                    ? "bg-[#264f78] text-white" 
                    : "hover:bg-[#3a3d41]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.link)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                <span className="syntax-function">{item.name}</span>()
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    );
}
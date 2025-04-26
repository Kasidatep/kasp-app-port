"use client";

import { useEffect, useRef } from "react";
import content from "../contents/content.json";

export default function AnimatedAbout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            if (entry.target === skillsRef.current) {
              const skills = skillsRef.current?.querySelectorAll('.tag');
              skills?.forEach((skill, index) => {
                setTimeout(() => {
                  skill.classList.add('visible');
                }, 100 * index);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 skewed-top bg-gray-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 skewed-bottom bg-gray-50 -z-10"></div>
      
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-200 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-bold mb-4 relative">
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform duration-700 origin-left" 
                  style={{ animationDelay: '0.3s', animation: 'grow-line 1s ease-out forwards' }}></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get to know more about me, my background, and what I do</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div ref={sectionRef} className="lg:w-3/5 fade-in-right">
            <div className="relative">
              <div className="absolute -top-10 -left-6 text-7xl text-blue-200 opacity-50">"</div>
              <div className="absolute -bottom-10 -right-6 text-7xl text-blue-200 opacity-50">"</div>
              <div className="space-y-6 relative z-10">
                {content.about.map((text, index) => (
                  <div
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5">
            <div ref={skillsRef} className="bg-white rounded-xl p-6 shadow-lg card-3d mb-10">
              <div className="card-3d-content">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Skills & Technologies
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {content.tool_list.map((tool) => (
                    <div
                      key={tool.id}
                      className="tag opacity-100"
                      style={{ transitionDelay: '100ms' }}
                    >
                      {tool.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
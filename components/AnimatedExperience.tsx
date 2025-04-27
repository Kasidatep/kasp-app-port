"use client";

import { useRef, useEffect, useState } from "react";
import content from "../contents/content.json";
import formatDate from "@/utils/date-formatter";

export default function AnimatedExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      
      const items = sectionRef.current.querySelectorAll('.experience-item');
      items.forEach(item => {
        observer.observe(item);
      });
    }
    
    return () => observer.disconnect();
  }, []);
  
  const toggleExpand = (index: number) => {
    if (animatedItems.includes(index)) {
      setAnimatedItems(animatedItems.filter(i => i !== index));
    } else {
      setAnimatedItems([...animatedItems, index]);
    }
  };
  
  return (
    <section id="experiences" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-green-500 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-fit m-auto block mb-3 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">My Journey</div>
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Work Experience
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" 
                  style={{ animation: 'grow-line 1s ease-out forwards' }}></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">A timeline of my professional journey and experiences</p>
        </div>
        
        <div ref={sectionRef} className="timeline-container max-w-4xl mx-auto relative pl-8 lg:pl-0">
          <div className="timeline-line lg:hidden"></div>
          
          {content.experiences.map((item, index) => (
            <div
              key={index}
              className={`experience-item mb-16 relative fade-in-up duration-700 ${
                index % 2 === 0 ? 'lg:ml-auto lg:pr-12 lg:pl-0' : 'lg:mr-auto lg:pl-12 lg:pr-0'
              } lg:w-1/2`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="timeline-dot lg:left-0 lg:right-0 lg:mx-auto" style={{ top: '10px', left: '-12px', animationDelay: `${index * 200 + 800}ms` }}></div>
              
              <div className="inline-block px-4 py-2 mr-2 bg-white shadow-md rounded-full text-sm font-bold text-blue-600 mb-4">
                {formatDate(item.date)}
              </div>
              
              <div 
                className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-500 shiny ${
                  animatedItems.includes(index) ? 'scale-105' : ''
                }`}
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  animatedItems.includes(index) ? 'max-h-96' : 'max-h-24'
                }`}>
                  <p className="text-gray-700 leading-relaxed mb-6">{item.description}</p>
                  
                  {item.attachment && item.attachment.length > 0 && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-3">
                        {item.attachment.map((att, idx) => (
                          <a
                            key={idx}
                            href={att.link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded-md text-sm transition-colors transform hover:scale-105"
                          >
                            {att.type === "image" ? (
                              <img 
                                src={att.link} 
                                width={20} 
                                height={20} 
                                alt={att.name} 
                                className="rounded-sm mr-2" 
                              />
                            ) : (
                              <svg 
                                className="w-4 h-4 mr-2 text-blue-500" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                            )}
                            {att.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool, idx) => {
                        const toolInfo = content.tool_list.find(t => t.id === tool);
                        return (
                          <div 
                            key={idx}
                            className="tag"
                          >
                            {toolInfo?.icon && (
                              <img
                                src={toolInfo.icon}
                                width={16}
                                height={16}
                                alt={toolInfo?.name || ""}
                                className="mr-1"
                              />
                            )}
                            {toolInfo?.name || tool}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-6 w-6 mx-auto text-gray-400 transition-transform duration-300 ${
                      animatedItems.includes(index) ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
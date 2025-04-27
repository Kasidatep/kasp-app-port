"use client";

import { useRef, useEffect, useState } from "react";
import content from "../contents/content.json";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ImGithub } from "react-icons/im";

export default function AnimatedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full hero-pattern"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-400 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">My Work</div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="relative inline-block">
              Featured Projects
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" 
                  style={{ animation: 'grow-line 1s ease-out forwards' }}></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of my recent work and personal projects
          </p>
        </div>
         
        
        <div 
          ref={sectionRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up"
        >
          {content.projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card h-full card-3d opacity-70 hover:opacity-100 transition-all duration-700  `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className=" relative bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image ?? "/no-image.jpg"}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isHovering === index ? 'scale-110 blur-sm' : ''
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col items-center justify-center transition-opacity duration-300 ${
                    isHovering === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-glow bg-white text-blue-600 hover:bg-blue-50 mb-3 transform transition-transform duration-300 hover:scale-105"
                      >
                        <HiOutlineExternalLink className="mr-2" />
                        View Project
                      </a>
                    )}
                    <div className="text-white text-center px-6">
                      <p className="text-sm opacity-90">Click to expand</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {project.title}
                  </h3>
                  
                  <p className={`text-gray-700  mb-4 transition-all duration-300 line-clamp-4 hover:line-clamp-none `}>
                    {project.description}
                  </p>
                  {project.attachment && project.attachment.length > 0 && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-3">
                        {project.attachment.map((att, idx) => (
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
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => {
                      const toolInfo = content.tool_list.find(t => t.id === tool);
                      return (
                        <div 
                          key={idx}
                          className="tag"
                        >
                          {toolInfo?.name || tool}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="absolute top-3 right-3 flex space-x-1">
                  {project.tools.map((tool, idx) => {
                    const toolInfo = content.tool_list.find(t => t.id === tool);
                    if (toolInfo?.icon) {
                      return (
                        <div key={idx} className="w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center">
                          <img
                            src={toolInfo.icon}
                            width={14}
                            height={14}
                            alt={toolInfo.name}
                            className="w-5 h-5"
                          />
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
                
                {/* Floating label */}
                <div className="absolute top-3 left-3">
                  <div className="px-2 py-1 bg-black bg-opacity-50 text-white text-xs rounded">
                    Project {index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/kasidatep" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
                       <ImGithub className="mr-2" />
                       <span>View more projects on GitHub</span>

          </a>
        </div>
      </div>
    </section>
  );
}
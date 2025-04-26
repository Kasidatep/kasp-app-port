"use client";

import { useEffect, useState, useRef } from "react";
import content from "../contents/content.json";
import SocialLinks from "./SocialLinks";

export default function AnimatedHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Engineer & Web Developer";
  const typingSpeed = 100; // milliseconds per character
  const cursorRef = useRef<HTMLSpanElement>(null);
  
  // Typing effect
  useEffect(() => {
    if (!isLoaded) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [isLoaded]);
  
  // Blinking cursor
  useEffect(() => {
    if (!cursorRef.current) return;
    
    const cursorBlinkInterval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === "0" ? "1" : "0";
      }
    }, 500);
    
    return () => clearInterval(cursorBlinkInterval);
  }, []);
  
  // Animation sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-screen py-20 overflow-hidden flex items-center">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 opacity-30 rounded-bl-full z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-100 opacity-30 rounded-tr-full z-0"></div>
      
      <div className="absolute w-72 h-72 blob bg-blue-100 opacity-20 top-1/4 right-1/4"></div>
      <div className="absolute w-48 h-48 blob bg-green-100 opacity-20 bottom-1/4 left-1/3"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
=          <div className={`md:w-1/2 md:pr-12 ${isLoaded ? 'fade-in-right visible' : 'fade-in-right'}`}>
            <div className="mb-3 inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium transform transition-transform hover:scale-105">
              {content.position}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="animated-text">{content.name.split(' ')[0]}</span>
            </h1>
            
            <div className="text-2xl text-gray-700 mb-8 h-8">
              <span>{typedText}</span>
              <span ref={cursorRef} className="opacity-1">|</span>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              {content.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#projects"
                className="btn btn-primary btn-glow"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a 
                href={content.resume.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Resume
              </a>
            </div>
            
            <SocialLinks />
          </div>
          
=          <div className={`md:w-1/2 mt-12 md:mt-0 ${isLoaded ? 'fade-in-left visible' : 'fade-in-left'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-20 blur-3xl transform translate-x-4 translate-y-4"></div>
              
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-300 opacity-20 rounded-full"></div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-blue-300 opacity-20 rounded-full"></div>
              
              <div className="absolute top-0 right-0 transform -translate-y-10 translate-x-5 rotate-12 floating">
                <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-0 transform translate-y-5 -translate-x-10 -rotate-12 floating" style={{ animationDelay: '1s' }}>
                <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
              
              <div className="card-3d relative bg-white rounded-2xl p-3 shadow-xl z-10">
                <div className="card-3d-content">
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10"></div>
                    <img
                      src={content.avatar || "https://www.kasidate.me/assets/images/profile-k.png"}
                      alt={content.name}
                      className="w-full h-auto object-cover rounded-xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/500?text=K";
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-5 right-10 transform translate-y-0 floating" style={{ animationDelay: '0.5s' }}>
                <div className="bg-white rounded-full shadow-lg py-2 px-4 flex items-center z-30">
                  <span className="text-blue-600 font-bold">5+ Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
=        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 animate-bounce">
          <span className="text-sm mb-1">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedAbout from "@/components/AnimatedAbout";
import AnimatedExperience from "@/components/AnimatedExperience";
import AnimatedProjects from "@/components/AnimatedProjects";
import AnimatedFooter from "@/components/AnimatedFooter";
import ScrollToTop from "@/components/ScrollToTop";

const Header = dynamic(() => import('@/components/Header'), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);
  
  return (
    <main>
      {isLoading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
          <div className="relative">
            <div className="text-5xl font-extrabold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animated-text">
                KASIDATE
              </span>
            </div>
            <div className="mt-4 w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                style={{ width: '100%', animation: 'codeReveal 2s forwards' }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* <ParticleBackground /> */}
          
          <Header />
          
          <AnimatedHero />
          
          <AnimatedAbout />
          
          <AnimatedExperience />
          
          <AnimatedProjects />
          
          
          <AnimatedFooter />
          
          <ScrollToTop />
        </>
      )}
    </main>
  );
}
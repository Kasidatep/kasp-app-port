// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Content from "@/components/Content";
import HeaderProfile from "@/components/HeaderProfile";
import Nav from "@/components/Nav";
import SocialMedia from "@/components/SocialMedia";
import MatrixRain from "@/components/MatrixRain";
import ScrollProgress from "@/components/ScrollProgress";
import MiniMap from "@/components/MiniMap";
import TypingHeader from "@/components/TypingHeader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('about');
  const [showExplorer, setShowExplorer] = useState(true);
  
  useEffect(() => {
    // Simulate loading for a smoother entry experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    
    // Initialize scroll observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Format current date for status bar
  const getFormattedDate = () => {
    const now = new Date();
    return now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#1e1e1e] z-50">
          <div className="text-5xl font-bold text-[#0d99ff] mb-4">
            <span className="glow-text">Loading</span>
          </div>
          <div className="w-64 h-2 bg-[#252526] rounded-full overflow-hidden">
            <div className="h-full bg-[#0d99ff]" style={{ 
              width: '100%', 
              animation: 'codeReveal 1.2s forwards' 
            }}></div>
          </div>
        </div>
      ) : (
        <div className="editor-container">
          <MatrixRain />
          <ScrollProgress />
          <MiniMap />
          
          {/* Editor Sidebar / Explorer */}
          {showExplorer && (
            <div className="sidebar w-64">
              <div className="p-2 flex items-center justify-between border-b border-[#454545]">
                <h3 className="text-sm uppercase text-gray-400">Explorer</h3>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setShowExplorer(false)}
                >×</button>
              </div>
              
              <div className="file-explorer">
                <div className="file-folder">
                  <span className="text-sm">◢ portfolio</span>
                </div>
                <div className="file-item" onClick={() => setActiveTab('about')}>
                  <span className="text-sm syntax-variable">about.tsx</span>
                </div>
                <div className="file-item" onClick={() => setActiveTab('experiences')}>
                  <span className="text-sm syntax-function">experiences.tsx</span>
                </div>
                <div className="file-item" onClick={() => setActiveTab('projects')}>
                  <span className="text-sm syntax-class">projects.tsx</span>
                </div>
                <div className="file-item">
                  <span className="text-sm syntax-string">profile.json</span>
                </div>
              </div>
              
              {/* Profile Section */}
              <div className="mt-8 px-3">
                <HeaderProfile />
              </div>
              
              {/* Social Media Section */}
              <div className="mt-8 px-3">
                <SocialMedia />
              </div>
            </div>
          )}
          
          {/* Main Editor Area */}
          <div className="flex flex-col h-screen">
            {/* Tab Bar */}
            <div className="tab-bar">
              {!showExplorer && (
                <button 
                  className="px-2 text-gray-400 hover:text-white"
                  onClick={() => setShowExplorer(true)}
                >≡</button>
              )}
              <div 
                className={`tab ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => setActiveTab('about')}
              >
                about.tsx
              </div>
              <div 
                className={`tab ${activeTab === 'experiences' ? 'active' : ''}`}
                onClick={() => setActiveTab('experiences')}
              >
                experiences.tsx  
              </div>
              <div 
                className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
                onClick={() => setActiveTab('projects')}
              >
                projects.tsx
              </div>
            </div>
            
            {/* Editor Content */}
            <div className="editor-content flex-grow overflow-y-auto">
              {/* Terminal-style welcome message */}
              <div className="terminal mx-6 my-4">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                </div>
                <div className="terminal-content">
                  <p className="terminal-prompt">
                    <TypingHeader 
                      text="Welcome to Kasidate's Portfolio" 
                      speed={70}
                      className="font-bold text-lg"
                    />
                  </p>
                  <p className="mt-2 terminal-prompt">
                    <span className="code-reveal-effect">
                      Type 'help' for more information or scroll down to explore
                    </span>
                  </p>
                </div>
              </div>
            
              {/* Navigation Bar */}
              <div className="mx-6 my-4">
                <Nav />
              </div>
              
              {/* Main Content with Code Line Numbers */}
              <div className="line-numbers px-6 pb-16">
                <Content />
              </div>
            </div>
            
            {/* Status Bar */}
            <div className="editor-status-bar">
              <div className="flex items-center">
                <span className="mr-4">TypeScript React</span>
                <span className="text-green-400">●</span>
                <span className="ml-1">main</span>
              </div>
              <div>
                <span>{getFormattedDate()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
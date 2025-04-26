"use client";

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollWidth(scrollPercentage);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div 
      className="scroll-progress" 
      style={{ width: `${scrollWidth}%` }}
    ></div>
  );
}
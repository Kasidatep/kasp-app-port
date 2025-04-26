// components/HeaderProfile.tsx
'use client';

import { useEffect, useRef } from 'react';
import content from "../contents/content.json";
import LinkLabel from "./LinkLabel";
import Image from "next/image";

export default function HeaderProfile() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const letters = nameRef.current?.textContent?.split('') || [];
    if (nameRef.current) {
      nameRef.current.innerHTML = '';
      letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = '0';
        span.style.animation = `fadeIn 0.5s forwards ${index * 0.05}s`;
        nameRef.current?.appendChild(span);
      });
    }
  }, []);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-500 hover:shadow-xl">
      <div className="overflow-hidden rounded-full w-24 h-24 mx-auto mb-4 border-4 border-blue-500">
        <Image 
          src="/images/profile-k.png" 
          width={96} 
          height={96} 
          alt="Profile"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/96?text=KP";
          }}
        />
      </div>
      <h1 ref={nameRef} className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> 
        {content.name}
      </h1>
      <div className="text-xl font-semibold text-center mt-2 animate-fade-in animate-delay-1"> 
        {content.position}
      </div>
      <div className="text-md font-light text-center mt-1 animate-fade-in animate-delay-2"> 
        {content.subtitle}
      </div>
      <div className="flex justify-center mt-4 animate-fade-in animate-delay-3">
        <LinkLabel link={content.resume.link} name={content.resume.name} />
      </div>
    </div>
  );
}
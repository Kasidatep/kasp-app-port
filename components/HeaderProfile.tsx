// components/HeaderProfile.tsx
'use client';

import content from "../contents/content.json";
import LinkLabel from "./LinkLabel";
import Image from "next/image";

export default function HeaderProfile() {
  return (
    <div className="editor-card p-4">
      <div className="overflow-hidden rounded-full w-20 h-20 mx-auto mb-4 border-2 border-[#0d99ff]">
        <Image 
          src="/profile-placeholder.jpg" 
          width={80} 
          height={80} 
          alt="Profile"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/80?text=KP";
          }}
        />
      </div>
      
      <div className="text-center">
        <pre className="whitespace-pre-wrap mb-2">
          <span className="syntax-keyword">const</span> <span className="syntax-variable">developer</span> = {'{'}
            <br/>  <span className="syntax-variable">name</span>: <span className="syntax-string">"{content.name}"</span>,
            <br/>  <span className="syntax-variable">role</span>: <span className="syntax-string">"{content.position}"</span>
          <br/>{'}'}
        </pre>
        
        <div className="text-md mb-3 text-[#9cdcfe]"> 
          {content.subtitle}
        </div>
        
        <div className="mt-3">
          <LinkLabel link={content.resume.link} name={content.resume.name} />
        </div>
      </div>
    </div>
  );
}
// components/About.tsx
"use client";

import content from "../contents/content.json";

export default function About() {
  return (
    <div>
      <div className="text-2xl font-bold uppercase mb-5 flex items-center">
        <div className="h-1 bg-blue-500 w-8 mr-3"></div>
        About
        <div className="h-1 bg-blue-500 w-8 ml-3"></div>
      </div>
      <div className="space-y-6">
        {content.about.map((text, index) => (
          <div
            key={index}
            className="mb-4 text-sm leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </div>
    </div>
  );
}
"use client";

import content from "../contents/content.json";
export default function About() {
  return (
    <div>
      <div className="text-xl font-bold uppercase mb-5">About</div>
      {content.about.map((text, index) => (
        <div
          key={index}
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      ))}
    </div>
  );
}

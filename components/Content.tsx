// components/Content.tsx
"use client";

import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import { useIntersectionObserver } from "@/utils/animation";

export default function Content() {
  useIntersectionObserver();
  
  return (
    <div className="px-4 py-6 bg-white rounded-lg shadow-md">
      <section id="about" className="pt-10 section-container">
        <About />
      </section>
      <section id="experiences" className="pt-16 section-container">
        <Experience />
      </section>
      <section id="projects" className="pt-16 pb-8 section-container">
        <Project />
      </section>
    </div>
  );
}
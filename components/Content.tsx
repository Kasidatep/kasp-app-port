"use client";

import About from "./About";
import Experience from "./Experience";
import Project from "./Project";

export default function Content() {
  return (
    <div>
      <section id="about" className="pt-10">
        <About />
      </section>
      <section id="experiences" className="pt-10">
        <Experience />
      </section>
      <section id="projects" className="pt-10">
        <Project />
      </section>
    </div>
  );
}

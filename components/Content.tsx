"use client";

import About from "./About";
import Experience from "./Experience";

export default function Content() {
  return (
    <div>
      <section id="about">
        <About />
      </section>
      <section id="experiences">
        <Experience />
      </section>
      <section id="projects">
        <About />
      </section>
    </div>
  );
}

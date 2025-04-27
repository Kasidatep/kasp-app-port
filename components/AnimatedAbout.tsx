"use client";

import { useEffect, useRef } from "react";
import content from "../contents/content.json";
import { SiSkillshare } from "react-icons/si";
import { FcIdea } from "react-icons/fc";

export default function AnimatedAbout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            if (entry.target === skillsRef.current) {
              const skills = skillsRef.current?.querySelectorAll(".tag");
              skills?.forEach((skill, index) => {
                setTimeout(() => {
                  skill.classList.add("visible");
                }, 100 * index);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 skewed-top bg-gray-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 skewed-bottom bg-gray-50 -z-10"></div>

      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-200 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-bold mb-4 relative">
            About Me
            <span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform duration-700 origin-left"
              style={{
                animationDelay: "0.3s",
                animation: "grow-line 1s ease-out forwards",
              }}
            ></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about me, my background, and what I do
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div ref={sectionRef} className="lg:w-3/5 fade-in-right">
            <div className="relative">
              <div className="absolute -top-10 -left-6 text-7xl text-blue-200 opacity-50">
                "
              </div>
              <div className="absolute -bottom-10 -right-6 text-7xl text-blue-200 opacity-50">
                "
              </div>
              <div className="space-y-6 relative z-10">
                {content.about.map((text, index) => (
                  <div
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-2/5">
            <div
              ref={skillsRef}
              className="bg-white rounded-xl p-6 shadow-lg card-3d mb-10"
            >
              <div className="card-3d-content">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FcIdea className="mr-2"/> Skills & Technologies
                </h3>

                <div className="flex flex-wrap gap-2">
                  {content.tool_list.map((tool) => (
                    <div
                      key={tool.id}
                      className="tag opacity-100"
                      style={{ transitionDelay: "100ms" }}
                    >
                      {tool.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

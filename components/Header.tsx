"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import content from "../contents/content.json";

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Find active section
      const sections = document.querySelectorAll("section[id]");
      let current = "about";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4">
          <Link
            href="/"
            className="text-xl font-bold border-3 rounded-lg px-2 p-1 text-blue-500 hover:bg-blue-100 transition duration-300"
          >
            <span className="text-blue-600 ">K.</span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-8 ">
              {content.menu.map((item, index) => (
                <li key={index} className=" mt-3">
                  <Link
                    href={item.link}
                    className={`clean-link  ${
                      activeSection === item.link.substring(1)
                        ? "text-blue-600 underline-offset-10 underline"
                        : "text-gray-700"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(item.link)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={content.resume.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="block md:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 mt-4 bg-white rounded-lg shadow-md">
            <ul className="space-y-3 px-4">
              {content.menu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`block py-2 ${
                      activeSection === item.link.substring(1)
                        ? "text-blue-600 font-medium"
                        : "text-gray-700"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(item.link)
                        ?.scrollIntoView({ behavior: "smooth" });
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={content.resume.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary block text-center"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

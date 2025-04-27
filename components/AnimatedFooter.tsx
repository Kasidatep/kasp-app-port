"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import content from "../contents/content.json";
import { IoDocument, IoShareSocial } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";

export default function AnimatedFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <footer className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="absolute -top-20 left-0 right-0 h-24 bg-white transform -skew-y-2 origin-top-right"></div>
      
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Kasidate Phlaiphueak
              </span>
            </h3>
            <p className="text-blue-200 max-w-xs">
              A passionate software engineer focused on creating web applications with modern technologies.
            </p>
            
            <div className="flex space-x-4 mt-6">
              {content.socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {content.menu.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.link} 
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.link)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <HiOutlineExternalLink  className="mr-2" />{' '}

                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href={content.resume.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <IoDocument  className="mr-2" /> {' '}
                  Resume
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Me</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={"mailto:" + content.contact.email}
                  className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <MdMarkEmailUnread className="mr-2" />
                  {' '}
                  {content.contact.email}
                </a>
              </li>
              <li className="flex items-center text-blue-200">
              <FaMapPin  className="mr-2" />
                {' '}
                {content.contact.address}
              </li>
              <li className="flex items-center text-blue-200">
                <div className="h-3 w-3 bg-green-500 rounded-full mr-3 relative">
                  <span className="absolute inset-0 h-full w-full bg-green-500 rounded-full animate-ping opacity-75"></span>
                </div>
                 Available for new opportunities
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mb-8"></div>
        
        <div className="text-center text-blue-300 text-sm">
          <p>© {currentYear} {content.name}. All rights reserved.</p>
          <p className="mt-2">
            <span>Designed and built with</span> 
            <span className="mx-1 animate-pulse text-red-400">❤</span>
            <span>using Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
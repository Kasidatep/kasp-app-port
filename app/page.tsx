// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Content from "@/components/Content";
import HeaderProfile from "@/components/HeaderProfile";
import Nav from "@/components/Nav";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a smoother entry experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="text-3xl font-bold text-blue-600 animate-pulse">
            Loading...
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row w-full">
              <div className="w-full lg:sticky lg:top-8 lg:w-1/3 h-auto">
                <div className="space-y-6 mb-8 lg:mb-0">
                  <HeaderProfile />
                  <Nav />
                  <SocialMedia />
                </div>
              </div>

              <div className="w-full lg:w-2/3 lg:pl-8">
                <Content />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
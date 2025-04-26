"use client";

import Image from "next/image";
import content from "../contents/content.json";

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      {content.socials.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:-translate-y-1"
          aria-label={item.name}
        >
          <div className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src={item.icon}
              alt={item.name}
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
        </a>
      ))}
    </div>
  );
}
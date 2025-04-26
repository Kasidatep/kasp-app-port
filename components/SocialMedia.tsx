// components/SocialMedia.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import content from "../contents/content.json";

export default function SocialMedia() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <nav>
        <ul className="flex flex-row items-center justify-center gap-6 mb-2 mt-2">
          {content.socials.map((item, index) => (
            <li key={index} className="transform transition-all duration-300 hover:scale-110">
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-all duration-300">
                  <Image
                    src={item.icon ?? ""}
                    alt={item.name ?? "icon"}
                    width={24}
                    height={24}
                    className="transition-all duration-300 filter hover:brightness-110"
                  />
                </div>
                <span className="sr-only">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
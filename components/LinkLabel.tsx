// components/LinkLabel.tsx
"use client";

import Image from "next/image";

export default function LinkLabel(
  {
    name,
    link,
    is_image = false,
  }: {
    name: string;
    link: string;
    is_image?: boolean;
  } = {
    name: "",
    link: "",
    is_image: false,
  }
) {
  return (
    <div className="mr-4 mb-2">
      {is_image ? (
        <div className="overflow-hidden rounded-md border border-gray-200">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img 
              src={link} 
              width={56} 
              height={56} 
              alt={name} 
              className="rounded-md hover:scale-110 transition-all duration-300" 
            />
          </a>
        </div>
      ) : (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-300"
        >
          <Image
            src="/icons/link.png"
            width={16}
            height={16}
            alt={name}
            className="mr-2 w-4 h-4"
          />
          <span className="font-medium text-sm">{name}</span>
        </a>
      )}
    </div>
  );
}
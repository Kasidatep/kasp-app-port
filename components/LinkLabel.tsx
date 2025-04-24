"use client";

import Image from "next/image";
import content from "../contents/content.json";
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
    <div className="flex py-2 mr-4 rounded-3xl ">
      {is_image ? (
        <div className="flex items-center justify-center ">
         <img src={link} width={56} height={56} alt={name} className="rounded-md" />
        </div>
      ) : (
        <div className="flex font-bold text-xs">
            <Image
                src="/icons/link.png"
                width={16}
                height={10}
                alt={content.resume.name ?? "icon"}
                className="mr-2 grayscale-100 w-4 h-4" 
            />
          <a href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </div>
      )}
    </div>
  );
}

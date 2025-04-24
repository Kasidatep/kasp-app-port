"use client";

import Image from "next/image";
import Link from "next/link";
import content from "../contents/content.json";
export default function SocialMedia() {
  return (
    <div>
      <nav>
        <ul className="flex flex-row items-center gap-4 mb-4 mt-4">
          {content.socials.map((item, index) => (
            <li key={index} className="">
              <Link href={item.link}>
              <Image
                  src={item.icon ?? ""}
                  alt={item.name ?? "icon"}
                  width={24}
                  height={24}
                  className="inline-block mr-2 grayscale-100"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

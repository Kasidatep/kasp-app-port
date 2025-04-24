"use client";

import Link from "next/link";
import content from "../contents/content.json";
export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          {content.menu.map((item, index) => (
            <li key={index} className="text-md py-4">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

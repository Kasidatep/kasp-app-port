'use client';

// import Image from "next/image";
import content from "../contents/content.json";
export default function HeaderProfile() {
  return (
    <div>
      <h1 className="text-4xl font-bold"> {content.name}</h1>
      <div className="text-xl font-semibold"> {content.position}</div>
      <div className="text-md font-light "> {content.subtitle}</div>
    </div>
  );
}

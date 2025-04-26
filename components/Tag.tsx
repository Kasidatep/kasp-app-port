// components/Tag.tsx
"use client";

import Image from "next/image";

interface TagProps {
  label: string;
  icon?: string;
}

export default function Tag({ label, icon }: TagProps) {
  return (
    <div className="tag">
      {icon && (
        <Image
          src={icon}
          width={16}
          height={16}
          alt={label}
          className="mr-1"
        />
      )}
      {label}
    </div>
  );
}
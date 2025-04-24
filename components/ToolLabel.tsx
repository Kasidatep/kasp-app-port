"use client";

import Image from "next/image";
import content from "../contents/content.json";
import { useState, useEffect } from "react";
export default function ToolLabel({ tool }: { tool: string } = { tool: "" }) {
  const [toolLabel, setToolLabel] = useState<any>();

  const getToolLabel = (tool: string) => {
    const toolLabel = content.tool_list.find((item) => item.id === tool);
    return toolLabel;
  };


  useEffect(() => {
    const toolLabel = getToolLabel(tool);
    setToolLabel(toolLabel);
  }, [tool]);

  return (
    <div className="flex px-3 py-2 mr-2 rounded-3xl bg-gray-300">
      <div>
        <Image
          src={toolLabel?.icon}
          width={16}
          height={16}
          alt={toolLabel?.name ?? "icon"}
        />
      </div>
      <div className="ml-2 font-semibold text-xs">{toolLabel?.name}</div>
    </div>
  );
}

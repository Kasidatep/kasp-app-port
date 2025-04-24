"use client";

// import Image from "next/image";
import content from "../contents/content.json";
export default function ToolLabel({ tool }: { tool: string } = { tool: "" }) {
  const getToolLabel = (tool: string) => {
    const toolLabel = content.tool_list.find((item) => item.id === tool);
    return toolLabel;
  };
  return <div>{getToolLabel(tool)?.name}</div>;
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import content from "../contents/content.json";
import { useState, useEffect } from "react";

export default function ToolLabel({ tool }: { tool: string } = { tool: "" }) {
  const [toolLabel, setToolLabel] = useState<any>();
  const [isHovered, setIsHovered] = useState(false);

  const getToolLabel = (tool: string) => {
    const toolLabel = content.tool_list.find((item) => item.id === tool);
    return toolLabel;
  };

  useEffect(() => {
    const toolLabel = getToolLabel(tool);
    setToolLabel(toolLabel);
  }, [tool]);

  return (
    <motion.div 
      className={`flex px-3 py-2 mr-2 rounded-full ${isHovered ? 'bg-blue-100' : 'bg-gray-100'} shadow-sm`}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "#dbeafe", // light blue
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {toolLabel?.icon && (
        <motion.div 
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={toolLabel.icon}
            width={16}
            height={16}
            alt={toolLabel?.name ?? "icon"}
          />
        </motion.div>
      )}
      <div className={`ml-2 font-semibold text-xs ${isHovered ? 'text-blue-700' : 'text-gray-700'}`}>
        {toolLabel?.name}
      </div>
    </motion.div>
  );
}
// components/Experience.tsx
"use client";

import content from "../contents/content.json";
import formatDate from "@/utils/date-formatter";
import ToolLabel from "./ToolLabel";
import LinkLabel from "./LinkLabel";

export default function Experience() {
  return (
    <div>
      <div className="text-2xl font-bold uppercase mb-5 flex items-center">
        <div className="h-1 bg-blue-500 w-8 mr-3"></div>
        Experience
        <div className="h-1 bg-blue-500 w-8 ml-3"></div>
      </div>
      <div className="space-y-6">
        {content.experiences.map((item, index) => (
          <div
            key={index}
            className="mb-6 card-hover flex flex-col lg:flex-row border border-gray-200 rounded-lg p-4 bg-white shadow-sm transition-all duration-300"
          >
            <div className="block lg:w-28 text-sm font-medium text-blue-600 mb-2 lg:mb-0">
              {formatDate(item.date)}
            </div>
            <div className="flex-1 lg:ml-4">
              <div className="text-lg font-bold mb-2"> {item.title}</div>
              <div className="text-sm text-gray-600 leading-relaxed"> {item.description}</div>
              
              {item.attachment.length > 0 && (
                <div className="flex flex-wrap text-sm mt-4">
                  {item.attachment.map((att, index) => (
                    <LinkLabel key={index} name={att.name} link={att.link} is_image={att.type === "image"} />
                  ))}
                </div>
              )}
              
              <div className="flex flex-wrap text-sm mt-3">
                {item.tools.map((tool, index) => (
                  <ToolLabel key={index} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
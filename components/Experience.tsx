"use client";

import content from "../contents/content.json";
import formatDate from "@/utils/date-formatter";
import ToolLabel from "./ToolLabel";
import LinkLabel from "./LinkLabel";
export default function Experience() {
  return (
    <div>
      <div className="text-xl font-bold uppercase mb-5">Experience</div>
      {content.experiences.map((item, index) => (
        <div
          key={index}
          className="mb-4 flex flex-col lg:flex-row border-1 border-gray-200 rounded-md p-3"
        >
          <div className="block lg:w-24 text-sm">{formatDate(item.date)}</div>
          <div className="flex-1 ml-3">
            <div className="text-md font-bold"> {item.title}</div>
            <div className="text-sm text-pretty break-all"> {item.description}</div>
            <div className="flex text-sm mt-2">
              {item.attachment.map((att, index) => (
                <LinkLabel key={index} name={att.name} link={att.link} is_image={att.type === "image"} />
              ))}
            </div>
            <div className="flex text-sm mt-2">
              {item.tools.map((tool, index) => (
                <ToolLabel key={index} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

import content from "../contents/content.json";
import formatDate from "@/utils/date-formatter";
import ToolLabel from "./ToolLabel";
export default function Experience() {
  return (
    <div>
      <div className="text-xl font-bold uppercase mb-5">Experience</div>
      {content.experiences.map((item, index) => (
        <div key={index} className="mb-4">
          <div>{formatDate(item.date)}</div>
          <div>
            <div className="text-lg font-bold"> {item.title}</div>
            <div className="text-md"> {item.description}</div>
            <div className="flex text-sm ">
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

"use client";

import content from "../contents/content.json";
import Image from "next/image";
import ToolLabel from "./ToolLabel";
export default function Project() {
  return (
    <div>
      <div className="text-xl font-bold uppercase mb-5">Project</div>
      {content.projects.map((item, index) => (
        <div
          key={index}
          className="mb-4 flex flex-col lg:flex-row border-1 border-gray-200 rounded-md p-3"
        >
          <div className="block lg:w-24 text-sm">
            <img
              src={item?.image ?? "https://www.sit.kmutt.ac.th/wp-content/uploads/2024/10/TCAS-2568-1920-x-1080-px-2.png"}
              width={160}
              height={90}
              alt={item?.title ?? "thumbnail"}
              className="rounded-md"
            />
          </div>
          <div className="flex-1 ml-3">
            <div className="text-md font-bold"> {item.title}</div>
            <div className="text-sm text-pretty break-all">
              {" "}
              {item.description}
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

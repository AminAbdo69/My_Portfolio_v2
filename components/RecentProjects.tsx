import { projects } from "@/Data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-16 mt-10 p-4">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] "
          >
            <PinContainer>{title}</PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

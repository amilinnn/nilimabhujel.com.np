/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useMouseCursor } from "@/utils/MouseContext";
import { PageData } from "@/types/data";

const Project = ({ pages }: PageData.Data) => {
  const { cursorChangeHandler } = useMouseCursor();
  return (
    <>
      {pages.map((page, index: number) => (
        <section key={index}
          className="md:relative"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <div className="grid gap-5">
            <a href={page.project.project.projectUrl}>
              <div>
                <img
                  className="xl:w-[65%]"
                  src={`${page.project.project.projectImage}`}
                  alt={page.project.project.projectTitle}
                />
              </div>
              <div className="lg:absolute lg:bottom-0 lg:right-0 lg:w-[520px] xl:w-[600px] h-[150px] px-4 md:px-8 py-4 md:py-2 bg-[#B1E3E0] flex flex-col justify-center">
                <h1 className="mb-4 text-[20px] md:text-[30px]">{page.project.project.projectTitle}</h1>
                <h3 className="text-[15px] md:text-[25px]">{page.project.project.projectTool}</h3>
              </div>
            </a>
          </div>
        </section>
      ))}
    </>
  );
};

export default Project;

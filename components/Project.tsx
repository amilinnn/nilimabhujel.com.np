/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useMouseCursor } from "@/utils/MouseContext";
import { PageData } from "@/types/data";

const Project = ({ pages }: PageData.Data) => {
  console.log(pages);
  const { cursorChangeHandler } = useMouseCursor();
  return (
    <>
      {pages.map((page, index: number) => (
        <section key={index}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          {page.recentProject.project.map((project, projectIndex) => (
            <div key={projectIndex}
              className="md:relative mb-10"
            >
              <div className="grid gap-5">
                <a href={project.projectUrl}>
                  <div>
                    <img
                      className="xl:w-[65%] rounded"
                      src={project.projectImage.url}
                      alt={project.projectTitle}
                    />
                  </div>
                  <div className="lg:absolute lg:bottom-0 lg:right-0 lg:w-[520px] xl:w-[600px] h-[150px] px-4 md:px-8 py-4 md:py-2 bg-[#B1E3E0] flex flex-col justify-center">
                    <h1 className="mb-4 text-[20px] md:text-[30px]">{project.projectTitle}</h1>
                    <h3 className="text-[15px] md:text-[25px]">{project.projectTool}</h3>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </section>
      ))}
    </>
  );
};

export default Project;

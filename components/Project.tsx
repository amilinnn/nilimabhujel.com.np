/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useMouseCursor } from "@/utils/MouseContext";
import { PageData } from "@/types/data";
import { FaChevronRight } from "react-icons/fa";

const Project = ({ pages }: PageData.Data) => {
  const { cursorChangeHandler } = useMouseCursor();
  const projectBannerBgColor = pages[0].colorSchema.projectDetailsBgColor.hex;
  const projectBannerTextColor = pages[0].colorSchema.projectDetailsTextColor.hex;
  return (
    <>
      {pages.map((page, index: number) => (
        <section key={index}>
          {page.recentProject.project.map((project, projectIndex) => (
            <div key={projectIndex}
              className="md:relative mb-10"
            >
              <div className="grid gap-5">
                <div>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                  >
                    <img
                      className="xl:w-[65%] rounded"
                      src={project.projectImage.url}
                      alt={project.projectTitle}
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                    />
                  </a>
                </div>
                <div className="lg:absolute lg:bottom-0 lg:right-0 lg:w-[520px] xl:w-[600px] h-[150px] px-4 md:px-8 py-4 md:py-2 flex flex-col justify-center"
                  style={{
                    color: projectBannerTextColor,
                    backgroundColor: projectBannerBgColor,
                  }}
                >
                  <div className="flex justify-between items-center gap-8">
                    <div>
                      <h1 className="mb-4 text-[20px] md:text-[30px]">{project.projectTitle}</h1>
                      <h3 className="text-[15px] md:text-[20px]">{project.projectTool}</h3>
                    </div>
                    <a href={project.projectUrl}
                      target="_blank"
                      className="border border-black p-2 rounded-full flex justify-center items-center"
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                    >
                      <FaChevronRight className="w-[30px] h-[30px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      ))}
    </>
  );
};

export default Project;

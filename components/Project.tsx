/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useMouseCursor } from "@/utils/MouseContext";

const Project = () => {
  const { cursorChangeHandler } = useMouseCursor();
  return (
    <>
      <section
        className="relative"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <div className="grid gap-5">
          <a href="https://dribbble.com/shots/22083708-Pillowtune-A-Mindfulness-app">
            <div>
              <img
                className="xl:w-[65%]"
                src="../assets/Pillowtune.png"
                alt="Pillowtune"
              />
            </div>
            <div className="lg:absolute lg:bottom-0 lg:right-0 lg:w-[520px] xl:w-[600px] h-[150px] px-8 py-4 bg-[#B1E3E0] flex flex-col justify-center">
              <h1 className="mb-4 text-[20px]">Pillowtune</h1>
              <h3>Adobe photoshop, Illustrator, Figma</h3>
            </div>
          </a>
        </div>
      </section>
      <section
        className="relative mt-[100px]"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <div className="grid gap-5">
          <a href="https://dribbble.com/shots/21984234-Mankind-was-never-meant-to-die-here">
            <div>
              <img
                className="xl:w-[65%]"
                src="../assets/Interstellarr.png"
                alt="Interstellar"
              />
            </div>
            <div className="lg:absolute lg:bottom-0 lg:right-0 lg:w-[520px] xl:w-[600px] h-[150px] px-8 py-4 bg-[#B1E3E0] flex flex-col justify-center">
              <h1 className="mb-4 text-[20px]">Interstellar</h1>
              <h3> Illustrator, Figma</h3>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Project;

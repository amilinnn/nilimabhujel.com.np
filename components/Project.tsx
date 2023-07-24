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
          <div>
            <img src="../assets/cart.png" alt="Halcyon Theme screenshot" />
          </div>
          <div className="lg:absolute lg:bottom-0 lg:right-0 lg:w-[520px] px-8 py-4 bg-[#B1E3E0]">
            <h1>The leader in interactive VR</h1>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
      <section
        className="relative mt-[100px]"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <div className="grid gap-5">
          <div>
            <img src="../assets/cart.png" alt="Halcyon Theme screenshot" />
          </div>
          <div className="lg:absolute lg:bottom-0 lg:right-0 lg:w-[520px] px-8 py-4 bg-[#B1E3E0]">
            <h1>The leader in interactive VR</h1>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;

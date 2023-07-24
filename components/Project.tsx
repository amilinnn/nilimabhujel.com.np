/* eslint-disable @next/next/no-img-element */
import React from "react";

const Project = () => {
  return (
    <>
      <section className="relative">
        <div className="grid gap-5">
          <div>
            <img src="../assets/cart.png" alt="Halcyon Theme screenshot" />
          </div>
          <div className="lg:absolute lg:bottom-0 lg:right-0 lg:w-[520px] px-8 py-4 bg-[#2962ff]">
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
      <section className="relative mt-[100px]">
        <div className="grid gap-5">
          <div>
            <img src="../assets/cart.png" alt="Halcyon Theme screenshot" />
          </div>
          <div className="lg:absolute lg:bottom-0 lg:right-0 lg:w-[520px] px-8 py-4 bg-[#2962ff]">
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
      {/* <div className="grid items-center grid-cols-12">
        <div className="relative border grid-cols-12 grid-rows-1 col-span-6 row-span-1 overflow-hidden z-10">
          <img src="../assets/cart.png" alt="Halcyon Theme screenshot" />
        </div>
        <div className="col-span-6 col-start-7 row-span-1 text-right">
          <h2>Feature Project</h2>
          <h1>sajdnkjsahdksa</h1>
          <div className="relative z-2">
            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
            and more. Available on Visual Studio Marketplace, Package Control,
            Atom Package Manager, and npm.
          </div>
          <ul className="list-reset text-gray-600">
            <li>VS Code</li>
            <li>Sublime Text</li>
            <li>Atom</li>
            <li>¡Term</li>
            <li>Hyp</li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Project;

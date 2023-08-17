"use client";
import React, { useState } from "react";
import { PageData } from "@/types/data";

const Banner = ({ pages }: PageData.Data) => {
  const [hover, setHover] = useState(false);
  const textColor = pages[0].colorSchema.headingColor.hex;
  const hoverColor = pages[0].colorSchema.hoverTextColor.hex;
  const hoverBgColor = pages[0].colorSchema.hoverBgColor.hex;
  return (
    <div className="h-[90vh] xl:h-[80vh] flex flex-col justify-center items-center mb-[100px] text-center">
      {pages.map((page, index: number) => (
        <div key={index}>
          <h1 className="text-[30px] md:text-[50px] lg:text-[70px]">
            {page.intro.heading}
          </h1>
          <h1 className="text-[30px] md:text-[50px] lg:text-[70px]">
            {page.intro.subheading}
          </h1>
          <p className="text-[20px] md:text-[30px] lg:text-[25px] mt-5 lg:w-[60%] mx-auto text-center mb-10">
            {page.intro.description}
          </p>
          <a
            href={page.intro.resumeUrl}
            target="_blank"
            className="mt-5 text-[20px] md:text-[25px] lg:text-[20px] font-medium w-[50%] xl:w-[30%] mx-auto my-10 p-4 border border-black rounded text-center text-black no-underline shadow-md transition duration-300 ease-in-out"
            style={{
              color: hover ? hoverColor : textColor,
              backgroundColor: hover ? hoverBgColor : "",
              border: hover ? hoverBgColor : "",
            }}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {page.intro.ctaTitle}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Banner;

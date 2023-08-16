"use client";
import { PageData } from "@/types/data";
import Link from "next/link";
import React from "react";

const Banner = ({ pages }: PageData.Data) => {
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
            className="mt-5 text-[20px] md:text-[25px] lg:text-[20px] font-medium w-[50%] xl:w-[30%] mx-auto my-10 p-4 border border-black rounded text-center text-black no-underline shadow-md hover:bg-[#8986C2] hover:text-white hover:border-[#8986C2]"
          >
            View Full Resume
          </a>
        </div>
      ))}
    </div>
  );
};

export default Banner;

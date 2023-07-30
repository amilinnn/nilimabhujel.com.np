"use client";
import { PageData } from "@/types/data";
import React from "react";

const Banner = ({ pages }: PageData.Data) => {
  console.log(pages)
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
          <p className="text-[20px] md:text-[30px] lg:text-[25px] mt-5 lg:w-[60%] mx-auto text-center">
            {page.intro.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Banner;

"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Banner = () => {
  return (
    <div className="h-[90vh] xl:h-[80vh] flex flex-col justify-center items-center mb-[100px]">
      <h1 className="text-[30px] md:text-[50px] lg:text-[70px]">Hi. I'm Nilima.</h1>
      <h1 className="text-[30px] md:text-[50px] lg:text-[70px]">A Designer.</h1>
      <p className="text-[20px] md:text-[30px] lg:text-[25px] mt-5 lg:w-[60%] mx-auto text-center">I'm a user-centered designer who believes that the best designs are created with the user in mind.</p>
    </div>
  );
};

export default Banner;

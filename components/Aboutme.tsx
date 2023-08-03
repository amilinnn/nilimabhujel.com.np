"use client";
import { PageData } from "@/types/data";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Aboutme = ({ pages }: PageData.Data) => {
  return (
    <div className="#about-me grid grid-cols-1 lg:grid-cols-2 justify-between">
      <div className="text-[18px] md:text-[30px] lg:text-[18px] font-normal">
        {pages.map((page, index: number) => (
          <div key={index}>
            <p>{page.about.description}</p>
            <p className="mt-5">{page.about.subDescription}</p>
            <p className="mt-5">{page.about.skillDescription}</p>
            <div className="flex gap-20 mt-4">
              <ul>
                {page.about.skills.skill.map((skill, index) => (
                  <li key={index} className="mb-3">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div>
        <img
          className="lg:h-[70%] xl:h-[60%] my-8 lg:m-auto"
          src="../assets/nilima.jpg"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Aboutme;

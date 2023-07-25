"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Aboutme = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
      <div className="text-[18px] font-normal">
        <p>
          Hello! I'm Nilima, a passionate and creative graphic and UI/UX
          Designer, With a strong foundation in design principles and a keen eye
          for detail, I specialize in creating visually appealing and
          user-friendly designs that leave a lasting impact. I strive to blend
          aesthetics with functionality.
        </p>
        <p className="mt-5">
          I'm a user-centered designer who believes that the best designs are
          created with the user in mind. I use a variety of research methods to
          understand user needs and pain points, and I use that information to
          create designs that are both effective and enjoyable to use.
        </p>

        <p className="mt-5">
          Here are a few technologies I’ve been working with recently:
        </p>
        <div className="flex gap-20 mt-4">
          <ul>
            <li>Figma</li>
            <li>Photoshop</li>
          </ul>
          <ul>
            <li>Figma</li>
            <li>Photoshop</li>
          </ul>
        </div>
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

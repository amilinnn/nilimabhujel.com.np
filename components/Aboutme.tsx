"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { PageData } from "@/types/data";


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
                {page.about.tool.toolSet1.map((tool, index) => (
                  <li key={index} className="mb-3">{tool}</li>
                ))}
              </ul>
              <ul>
                {page.about.tool.toolSet2.map((tool, index) => (
                  <li key={index} className="mb-3">{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Image src={pages[0].about.profilePic.url} width={320} height={300} alt="user" className="mx-auto rounded-tl-[50px] rounded-br-[50px]" />
      </div>
    </div>
  );
};

export default Aboutme;

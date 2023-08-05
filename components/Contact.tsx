import React from "react";
import Link from "next/link";
import SocialMedia from "./shared/SocialMedia";
import { PageData } from "@/types/data";

const Contact = ({ pages }: PageData.Data) => {
  return (
    <div className="flex flex-col md:w-[70%] lg:w-[50%] m-auto">
      <p className="my-[25px] text-center text-[18px] md:text-[25px] lg:text-[18px] font-normal">
      {pages[0].contact.description}
      </p>
      <Link
        href={`${pages[0].contact.emailUrl}`}
        className="text-[20px] md:text-[25px] lg:text-[20px] font-medium w-[50%] xl:w-[30%] mx-auto my-10 p-4 border border-black rounded text-center text-black no-underline shadow-md hover:bg-black hover:text-white"
        passHref
      >
        {`Say Hello!!`}
      </Link>
      <SocialMedia pages={pages}/>
    </div>
  );
};

export default Contact;

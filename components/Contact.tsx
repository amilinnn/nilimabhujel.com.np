import React, { useState } from "react";
import SocialMedia from "./shared/SocialMedia";
import { PageData } from "@/types/data";

const Contact = ({ pages }: PageData.Data) => {
  const [hover, setHover] = useState(false);
  const textColor = pages[0].colorSchema.headingColor.hex;
  const hoverColor = pages[0].colorSchema.hoverTextColor.hex;
  const hoverBgColor = pages[0].colorSchema.hoverBgColor.hex;
  return (
    <div className="flex flex-col md:w-[70%] lg:w-[50%] m-auto">
      <p className="my-[25px] text-center text-[18px] md:text-[25px] lg:text-[18px] font-normal">
        {pages[0].contact.description}
      </p>
      <a
        href={`${pages[0].contact.emailUrl}`}
        className="text-[20px] md:text-[25px] lg:text-[20px] font-medium w-[50%] xl:w-[30%] mx-auto my-10 p-4 border border-black rounded text-center text-black no-underline shadow-md hover:border-[#8986C2] transition duration-300 ease-in-out"
        style={{
          color: hover ? hoverColor : textColor,
          backgroundColor: hover ? hoverBgColor : "",
        }}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {`Say Hello!!`}
      </a>
      <SocialMedia pages={pages} />
    </div>
  );
};

export default Contact;

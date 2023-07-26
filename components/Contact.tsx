import React from "react";
import Link from "next/link";
import SocialMedia from "./shared/SocialMedia";

const Contact = () => {
  return (
    <div className="flex flex-col md:w-[70%] lg:w-[50%] m-auto">
      <h1 className="text-[50px] mt-[120px] font-semibold text-center">
        Get in touch
      </h1>
      <p className="my-[25px] text-center text-[18px] font-normal">
        {`I'm`} am currently looking for new opportunities, my inbox is
        always open. Whether you have a question or just want to say hi,{" "}
        {`I'll`} try my best to get back to you!
      </p>
      <Link
        href="mailto:nilimabhujel1999@gmail.com"
        className="text-2xl font-medium w-[50%] xl:w-[30%] mx-auto my-10 p-4 border border-black rounded text-center text-black no-underline shadow-md hover:bg-black hover:text-white"
        passHref
      >
        {`Say Hello!!`}
      </Link>
      <SocialMedia/>
    </div>
  );
};

export default Contact;

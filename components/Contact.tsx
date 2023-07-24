import React from "react";
import Link from "next/link";
import { FaGithub, FaBehance, FaLinkedinIn, FaDribbble } from "react-icons/fa";

const ExternalLink = ({ href, children, label }: any) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    aria-label={label}
    className="inline-flex items-center justify-center text-center w-10 h-10 text-base border border-black rounded-full no-underline shadow-md transition-transform hover:-translate-y-2 bg-white hover:bg-black text-black hover:text-white"
  >
    {children}
  </a>
);

const Contact = () => {
  return (
    <div className="flex flex-col w-[50%] m-auto">
      <h1 className="text-[50px] mt-[120px] font-semibold text-center">
        Get in touch
      </h1>
      <p className="my-[15px] text-center text-[18px] font-normal">
        Although {`I'm`} currently looking any new opportunities, my inbox is
        always open. Whether you have a question or just want to say hi,{" "}
        {`I'll`} try my best to get back to you!
      </p>
      <Link
        href="mailto:vikrantmalla999@gmail.com"
        className="text-2xl font-medium w-[30%] mx-auto my-10 p-4 border border-black rounded text-center text-black no-underline shadow-md hover:bg-black hover:text-white"
        passHref
      >
        {`Say Hello!!`}
      </Link>
      <div className="flex justify-center gap-8 my-10">
        <ExternalLink href="" label="Behance">
          <FaBehance size={20} />
        </ExternalLink>
        <ExternalLink href="" label="Dribbble">
          <FaDribbble size={20} />
        </ExternalLink>
        <ExternalLink href="" label="Linkedin">
          <FaLinkedinIn size={20} />
        </ExternalLink>
      </div>
    </div>
  );
};

export default Contact;

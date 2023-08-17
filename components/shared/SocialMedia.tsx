import { useState } from "react";
import { PageData } from "@/types/data";
import { FaBehance, FaLinkedinIn, FaDribbble } from "react-icons/fa";

const ExternalLink = ({ href, children, label, hover, textColor, hoverColor, hoverBgColor, setHover }: any) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    aria-label={label}
    className="inline-flex items-center justify-center text-center w-[50px] h-[50px] text-base border border-black rounded-full no-underline shadow-md lg:transition-transform lg:hover:-translate-y-2 hover:border-[#8986C2] transition duration-300 ease-in-out"
    style={{
      color: hover ? hoverColor : textColor,
      backgroundColor: hover ? hoverBgColor : "",
    }}
    onMouseOver={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
  >
    {children}
  </a>
);

const SocialMedia = ({ pages }: PageData.Data) => {
  const [hoverStates, setHoverStates] = useState([false, false, false]);
  const textColor = pages[0].colorSchema.headingColor.hex;
  const hoverColor = pages[0].colorSchema.hoverTextColor.hex;
  const hoverBgColor = pages[0].colorSchema.hoverBgColor.hex;

  return (
    <div className="flex justify-center gap-8 my-10">
      <ExternalLink
        href={`${pages[0].contact.behanceLink}`}
        label="Behance"
        hover={hoverStates[0]}
        setHover={(isHovered: boolean) => setHoverStates([isHovered, hoverStates[1], hoverStates[2]])}
        textColor={textColor}
        hoverColor={hoverColor}
        hoverBgColor={hoverBgColor}
      >
        <FaBehance size={20} />
      </ExternalLink>
      <ExternalLink
        href={`${pages[0].contact.dribbbleUrl}`}
        label="Dribbble"
        hover={hoverStates[1]}
        setHover={(isHovered: boolean) => setHoverStates([hoverStates[0], isHovered, hoverStates[2]])}
        textColor={textColor}
        hoverColor={hoverColor}
        hoverBgColor={hoverBgColor}
      >
        <FaDribbble size={20} />
      </ExternalLink>
      <ExternalLink
        href={`${pages[0].contact.linkedinUrl}`}
        label="Linkedin"
        hover={hoverStates[2]}
        setHover={(isHovered: boolean) => setHoverStates([hoverStates[0], hoverStates[1], isHovered])}
        textColor={textColor}
        hoverColor={hoverColor}
        hoverBgColor={hoverBgColor}
      >
        <FaLinkedinIn size={20} />
      </ExternalLink>
    </div>
  );
};

export default SocialMedia;

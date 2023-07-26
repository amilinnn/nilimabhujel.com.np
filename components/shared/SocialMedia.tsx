import { FaBehance, FaLinkedinIn, FaDribbble } from "react-icons/fa";

const ExternalLink = ({ href, children, label }: any) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    aria-label={label}
    className="inline-flex items-center justify-center text-center w-10 h-10 text-base border border-black rounded-full no-underline shadow-md lg:transition-transform lg:hover:-translate-y-2 bg-white hover:bg-black text-black hover:text-white"
  >
    {children}
  </a>
);

const SocialMedia = () => {
  return (
    <div className="flex justify-center gap-8 my-10">
      <ExternalLink
        href="https://www.behance.net/nilimabhujel0"
        label="Behance"
      >
        <FaBehance size={20} />
      </ExternalLink>
      <ExternalLink href="https://dribbble.com/amilinnnn" label="Dribbble">
        <FaDribbble size={20} />
      </ExternalLink>
      <ExternalLink
        href="https://www.linkedin.com/in/nilima-bhujel-61768024a/"
        label="Linkedin"
      >
        <FaLinkedinIn size={20} />
      </ExternalLink>
    </div>
  );
};

export default SocialMedia;

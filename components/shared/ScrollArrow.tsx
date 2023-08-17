import { PageData } from "@/types/data";
import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollArrow({ pages }: PageData.Data) {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const textColor = pages[0].colorSchema.headingColor.hex;
  const hoverColor = pages[0].colorSchema.hoverTextColor.hex;
  const hoverBgColor = pages[0].colorSchema.hoverBgColor.hex;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showButton && (
        <div className="fixed bottom-20 right-[2rem] text-base bg-text text-toggle cursor-pointer rounded-full p-[0.6rem] text-center h-[2.5rem] w-[2.5rem] transition duration-500 border border-black" onClick={scrollToTop}
          style={{
            color: hover ? hoverColor : textColor,
            backgroundColor: hover ? hoverBgColor : "",
            border: hover ? hoverBgColor : "",
          }}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <FaChevronUp />
        </div>
      )}
    </div>
  );
}

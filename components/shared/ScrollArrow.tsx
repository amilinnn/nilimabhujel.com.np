import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollArrow() {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState<boolean>(false);

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
        <div className="fixed bottom-20 right-[2rem] text-base bg-text text-toggle cursor-pointer rounded-full p-[0.6rem] text-center h-[2.5rem] w-[2.5rem] transition duration-500 border border-black hover:bg-[#8986C2] hover:text-white hover:border-[#8986C2]" onClick={scrollToTop}>
          <FaChevronUp />
        </div>
      )}
    </div>
  );
}

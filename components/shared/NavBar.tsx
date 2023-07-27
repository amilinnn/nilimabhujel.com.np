"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuIconClick, setmenuIconClick] = useState<boolean>(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);

  if (process.browser) {
    if (menuIconClick) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setmenuIconClick(!menuIconClick);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { href: "#about-me", label: "About Me" },
    { href: "#recent-project", label: "Project" },
    { href: "#contact", label: "Contact" },
  ];

  const clickLink = () => {
    setMenuOpen(!isMenuOpen);
    setmenuIconClick(!menuIconClick);
  };

  const MenuItems = () => (
    <>
      {menuItems.map((item, index) => (
        <li key={index} onClick={clickLink}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </>
  );

  return (
    <header
      className={`lg:h-[80px] h-[50px] flex items-center sticky top-0 z-10 bg-white ${
        scrolling ? "shadow-md" : ""
      }`}
    >
      <div className="container m-auto px-8">
        <div className="relative flex items-center justify-between">
          <div>
            <h1 className="text-[25px] font-semibold">Nilima</h1>
          </div>
          <button className="lg:hidden rounded" onClick={toggleMenu}>
            {menuIconClick ? (
              <FaTimes size={25} style={{ color: "#000" }} />
            ) : (
              <FaBars size={25} style={{ color: "#000" }} />
            )}
          </button>
          <nav className={`hidden lg:block`}>
            <ul className="lg:flex items-center space-x-8 font-normal text-[16px]">
              <MenuItems />
            </ul>
          </nav>
        </div>
        {isMenuOpen && (
          <nav className="lg:hidden absolute left-0 bg-white text-black z-10 w-[100%] h-[100vh] py-4 ">
            <ul className="container mx-auto flex flex-col mt-[100px] items-center space-y-4 font-normal text-[20px] ">
              <MenuItems />
              <div className="mt-10">
                <SocialMedia />
              </div>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

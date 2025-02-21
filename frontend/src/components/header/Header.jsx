import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import TopHeader from "./TopHeader";
import { Link } from "react-router-dom";
import { FaChevronDown, FaShoppingCart } from "react-icons/fa";
import SearchButton from "./SearchButton";
import MenuButton from "./MenuButton";
import { navLinks } from "../../utils/navLinks";

const Header = () => {
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [headerOffset, setHeaderOffset] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderOffset(
        headerRef.current.getBoundingClientRect().top + window.scrollY
      );
    }

    const handleScroll = () => {
      if (window.scrollY >= headerOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerOffset]);

  return (
    <>
      <TopHeader />
      <div
        ref={headerRef}
        className={`transition-colors duration-300 text-gray-100
          ${
            isSticky
              ? "fixed top-0 left-0 right-0 z-50 bg-dark-gray shadow-md"
              : "bg-transparent z-100"
          }`}
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center ">
          <Logo />
          <ul className="flex space-x-4">
            {navLinks.map((link, index) => (
              <li key={index} className="relative cursor-pointer group z-40">
                <Link
                  to={link.path || "#"}
                  className="flex uppercase font-semibold items-end relative px-4 p-10 hover:text-main-red
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-main-red
                after:bottom-0 after:left-0 after:transition-all after:duration-500 
                group-hover:after:w-full"
                >
                  {link.name}{" "}
                  {link.subMenu && (
                    <FaChevronDown className="text-xs ml-1 transition-transform duration-300 ease-in-out group-hover:rotate-180" />
                  )}
                </Link>

                {link.subMenu && (
                  <ul
                    className="absolute left-0  w-40 bg-white text-gray-600 shadow-lg 
                overflow-hidden max-h-0 opacity-0 transition-[max-height,opacity] duration-700 ease-in-out 
                group-hover:max-h-72 group-hover:opacity-100"
                  >
                    {link.subMenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={sub.path}
                          className="block px-4 py-2 hover:text-main-red font-semibold smooth-hover"
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="flex gap-6 text-xl z-40">
            <Link
              to="/cart"
              className="cursor-pointer  hover:text-main-red smooth-hover"
            >
              <FaShoppingCart />
            </Link>

            <SearchButton />
            <MenuButton />
          </div>
        </nav>
      </div>

      {/* Spacer to avoid content being hidden behind sticky header */}
      {isSticky && <div className="h-16"></div>}
    </>
  );
};

export default Header;

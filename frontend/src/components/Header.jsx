import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../utils/socialLinks";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";

const Header = () => {
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [headerOffset, setHeaderOffset] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      // Get the distance from the top of the document
      setHeaderOffset(
        headerRef.current.getBoundingClientRect().top + window.scrollY
      );
    }

    const handleScroll = () => {
      // When the scroll position passes the header's offset, mark as sticky
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
      {/* Content above header */}
      <div className="bg-transparent p-4 flex max-w-7xl mx-auto border-b-[0.5px] border-gray-300 justify-between items-center">
        <div className="flex gap-6">
          <p className="flex gap-4 items-center">
            <FaPhoneAlt className="text-main-red" />{" "}
            <span className="text-white">Call: </span>
            <a
              href="/"
              className="text-main-gray hover:text-white smooth-hover"
            >
              +(123)-6418-8990
            </a>
          </p>
          <div className="flex gap-2 items-center ">
            <FaRegUser className="text-main-red" />
            <Link
              to="/"
              className="text-main-gray hover:text-white smooth-hover"
            >
              Login
            </Link>
            <Link
              to="/"
              className="text-main-gray hover:text-white smooth-hover"
            >
              Registration
            </Link>
          </div>
        </div>
        <div className="flex space-x-4">
          {socialLinks.map(({ id, link, icon }) => (
            <a
              key={id}
              href={link}
              aria-label="social link"
              className="text-main-gray hover:text-white smooth-hover"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Header */}
      <div
        ref={headerRef}
        className={`p-4 transition-colors duration-300 text-gray-100 
          ${
            isSticky
              ? "fixed top-0 left-0 right-0 z-50 bg-gray-700 shadow-md"
              : "bg-transparent"
          }`}
      >
        <nav className="max-w-7xl mx-auto flex justify-between">
          <ul className="flex space-x-4">
            <li className="cursor-pointer hover:text-blue-300">Home</li>
            <li className="cursor-pointer hover:text-blue-300">Products</li>
            <li className="cursor-pointer hover:text-blue-300">Contact</li>
          </ul>
          <button className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600">
            Sign In
          </button>
        </nav>
      </div>

      {/* Spacer to avoid content being hidden behind sticky header */}
      {isSticky && <div className="h-16"></div>}
    </>
  );
};

export default Header;

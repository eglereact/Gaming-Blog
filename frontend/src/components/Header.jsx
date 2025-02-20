import React, { useEffect, useRef, useState } from "react";

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
      <div className="bg-transparent p-4 text-center">
        <p>Scroll down to see the sticky effect.</p>
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

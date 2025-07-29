import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/MatX.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-zinc-900 px-4 sm:px-6 lg:px-8 py-3 md:py-4 z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="AR Tiles Logo" className="h-10" />
          <span className="text-white font-light tracking-wide text-2xl">
            MatX
          </span>
        </div>

        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link
              to="/"
              className="text-zinc-300 hover:text-white px-3 py-2 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/how-it-works"
              className="text-zinc-300 hover:text-white px-3 py-2 transition-colors duration-200"
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="text-zinc-300 hover:text-white px-3 py-2 transition-colors duration-200"
            >
              Gallery
            </Link>
          </li>
          
          <li>
            <Link
              to="/contact"
              className="text-zinc-300 hover:text-white px-3 py-2 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-zinc-400 hover:text-white transition-colors duration-200"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/40 md:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile menu overlay */}
      <div
        className={`
          md:hidden fixed inset-y-0 right-0 w-64 sm:w-72 bg-zinc-900 border-l border-zinc-800
          transform transition-all duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ul className="flex flex-col items-start p-6 sm:p-8 space-y-3 sm:space-y-4 pt-16">
          <li className="w-full">
            <Link
              to="/"
              className="block text-zinc-300 hover:text-white text-lg px-4 py-3 hover:bg-zinc-800/50 transition-all duration-200"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/how-it-works"
              className="block text-zinc-300 hover:text-white text-lg px-4 py-3 hover:bg-zinc-800/50 transition-all duration-200"
              onClick={toggleMenu}
            >
              How it works
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/gallery"
              className="block text-zinc-300 hover:text-white text-lg px-4 py-3 hover:bg-zinc-800/50 transition-all duration-200"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/contact"
              className="block text-zinc-300 hover:text-white text-lg px-4 py-3 hover:bg-zinc-800/50 transition-all duration-200"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Logo from "../assets/MatX.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const userMenuRef = useRef(null);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // Close menus on location change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [location]);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-zinc-900/95 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-3 md:py-4 z-50 border-b border-zinc-800/80 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src={Logo} 
            alt="MatX Logo" 
            className="h-10 transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="font-light tracking-wide text-2xl bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            MatX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                to="/"
                className={`text-zinc-300 hover:text-white px-3 py-2 transition-all duration-200 border-b-2 ${
                  location.pathname === '/' ? 'border-matx-accent text-white' : 'border-transparent'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works"
                className={`text-zinc-300 hover:text-white px-3 py-2 transition-all duration-200 border-b-2 ${
                  location.pathname === '/how-it-works' ? 'border-matx-accent text-white' : 'border-transparent'
                }`}
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`text-zinc-300 hover:text-white px-3 py-2 transition-all duration-200 border-b-2 ${
                  location.pathname === '/gallery' ? 'border-matx-accent text-white' : 'border-transparent'
                }`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`text-zinc-300 hover:text-white px-3 py-2 transition-all duration-200 border-b-2 ${
                  location.pathname === '/contact' ? 'border-matx-accent text-white' : 'border-transparent'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Auth Section */}
          {isAuthenticated ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={toggleUserMenu}
                className="flex items-center space-x-2 text-zinc-300 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-zinc-800"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-matx-accent to-matx-accent-dark rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {user?.firstName?.[0]}{user?.lastName?.[0]}
                  </span>
                </div>
                <span className="hidden lg:block">{user?.firstName}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* User dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-zinc-800 rounded-lg shadow-xl border border-zinc-700/50 backdrop-blur-sm bg-opacity-95 animate-scaleIn overflow-hidden">
                  <div className="py-1">
                    <div className="px-4 py-3 border-b border-zinc-700/50">
                      <p className="text-sm font-medium text-white">{user?.firstName} {user?.lastName}</p>
                      <p className="text-xs text-zinc-400 mt-1 truncate">{user?.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      My Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors duration-200 border-t border-zinc-700/50 mt-1"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-zinc-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-200 hover:bg-zinc-800"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-matx-accent to-matx-accent-dark hover:from-matx-accent-dark hover:to-matx-accent text-white px-4 py-2 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg hover:shadow-matx-accent/20"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-zinc-400 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-zinc-800/70"
          aria-label="Toggle menu"
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
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      {/* Mobile menu overlay */}
      <div
        className={`
          md:hidden fixed inset-y-0 right-0 w-64 sm:w-80 bg-gradient-to-b from-zinc-900/95 to-zinc-800/95 
          backdrop-blur-md border-l border-zinc-700/50 shadow-2xl
          transform transition-all duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-800/70 transition-colors duration-200"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Logo in mobile menu */}
        <div className="flex items-center space-x-3 px-6 py-6 border-b border-zinc-700/50">
          <img src={Logo} alt="MatX Logo" className="h-8" />
          <span className="font-light tracking-wide text-xl bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            MatX
          </span>
        </div>
        
        <ul className="flex flex-col p-4 space-y-1">
          <li className="w-full">
            <Link
              to="/"
              className="flex items-center text-zinc-300 hover:text-white text-base px-4 py-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200"
              onClick={toggleMenu}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/how-it-works"
              className="flex items-center text-zinc-300 hover:text-white text-base px-4 py-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200"
              onClick={toggleMenu}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              How it works
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/gallery"
              className="flex items-center text-zinc-300 hover:text-white text-base px-4 py-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200"
              onClick={toggleMenu}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Gallery
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/contact"
              className="flex items-center text-zinc-300 hover:text-white text-base px-4 py-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200"
              onClick={toggleMenu}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </Link>
          </li>

          {/* Mobile Auth Section */}
          {isAuthenticated ? (
            <div className="mt-4 border-t border-zinc-700/50 pt-4">
              <div className="flex items-center space-x-3 px-4 py-3 mb-2 bg-zinc-800/30 rounded-lg mx-1">
                <div className="w-10 h-10 bg-gradient-to-br from-matx-accent to-matx-accent-dark rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {user?.firstName?.[0]}{user?.lastName?.[0]}
                  </span>
                </div>
                <div>
                  <div className="text-white font-medium">{user?.firstName} {user?.lastName}</div>
                  <div className="text-zinc-400 text-xs truncate max-w-[180px]">{user?.email}</div>
                </div>
              </div>

              <Link
                to="/profile"
                className="flex items-center w-full text-zinc-300 hover:text-white px-4 py-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200"
                onClick={toggleMenu}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                My Profile
              </Link>

              <Link
                to="/settings"
                className="flex items-center w-full text-zinc-300 hover:text-white px-4 py-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200"
                onClick={toggleMenu}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center w-full text-red-400 hover:text-red-300 px-4 py-3 mt-1 rounded-lg hover:bg-red-500/10 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign out
              </button>
            </div>
          ) : (
            <div className="mt-4 border-t border-zinc-700/50 pt-4 px-4 space-y-3">
              <Link
                to="/login"
                className="flex items-center justify-center w-full text-zinc-200 hover:text-white px-4 py-3 rounded-lg border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/70 transition-all duration-200"
                onClick={toggleMenu}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Sign in
              </Link>
              <Link
                to="/register"
                className="flex items-center justify-center w-full bg-gradient-to-r from-matx-accent to-matx-accent-dark hover:from-matx-accent-dark hover:to-matx-accent text-white px-4 py-3 rounded-lg transition-all duration-200"
                onClick={toggleMenu}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Sign up
              </Link>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

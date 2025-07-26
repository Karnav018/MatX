import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/MatX.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-zinc-900 px-8 py-4 z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="AR Tiles Logo" className="h-10" />
          <span className="text-zinc-100 font-light tracking-wide text-2xl">MatX</span>
        </div>
        
        <ul className="hidden md:flex items-center space-x-8">
          <li><Link to="/" className="text-zinc-300 hover:text-white px-3 py-2 transition-colors duration-200">Home</Link></li>
          <li><Link to="/visualizer" className="text-zinc-300 hover:text-white px-3 py-2 transition-colors duration-200">3D Visualizer</Link></li>
          <li><Link to="/gallery" className="text-zinc-300 hover:text-white px-3 py-2 transition-colors duration-200">Gallery</Link></li>
          <li><Link to="/products" className="text-zinc-300 hover:text-white px-3 py-2 transition-colors duration-200">Products</Link></li>
          <li>
            <Link 
              to="/try-now" 
              className="bg-stone-800 text-white px-6 py-2 rounded hover:bg-stone-700 transition-colors duration-200"
            >
              Try AR Now
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-zinc-400 hover:text-white transition-colors duration-200"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 md:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile menu overlay */}
      <div 
        className={`
          md:hidden fixed inset-y-0 right-0 w-72 bg-zinc-900 border-l border-zinc-800
          transform transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <ul className="flex flex-col items-start p-8 space-y-4">
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
              to="/visualizer" 
              className="block text-zinc-300 hover:text-white text-lg px-4 py-3 hover:bg-zinc-800/50 transition-all duration-200"
              onClick={toggleMenu}
            >
              3D Visualizer
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
              to="/products" 
              className="block text-zinc-300 hover:text-white text-lg px-4 py-3 hover:bg-zinc-800/50 transition-all duration-200"
              onClick={toggleMenu}
            >
              Products
            </Link>
          </li>
          <li className="w-full pt-4">
            <Link 
              to="/try-now" 
              className="block text-center bg-stone-800 text-white px-6 py-3 hover:bg-stone-700 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Try AR Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

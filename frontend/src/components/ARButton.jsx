import React, { useState } from 'react';

const ARButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleARClick = () => {
    // TODO: Implement AR functionality
    console.log('AR button clicked');
  };

  return (
    <button
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 rounded-full shadow-lg transform-gpu transition-all duration-300 ease-in-out
        ${isHovered 
          ? 'bg-zinc-800 scale-105' 
          : 'bg-zinc-900'
        } 
        h-14 w-14 flex items-center justify-center
        text-zinc-300 hover:text-white border border-zinc-800 z-50
        hover:bg-zinc-800
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-zinc-700`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleARClick}
      aria-label="Open AR View"
    >
      <div className="relative flex items-center justify-center">
        <div className={`absolute transition-all duration-300 ease-in-out ${
          isHovered ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
        }`}>
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Cube */}
            <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" />
            <path d="M12 3v10M19 7l-7 4-7-4" />
            
            {/* AR Camera Frame */}
            <path d="M5 7h2M17 7h2" />
            <path d="M5 17h2M17 17h2" />
            <path d="M7 5v2M7 17v2" />
            <path d="M17 5v2M17 17v2" />
          </svg>
        </div>
        <div className={`absolute font-bold tracking-wide transition-all duration-300 ease-in-out transform
          ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        >
          AR
        </div>
      </div>
    </button>
  );
};

export default ARButton;

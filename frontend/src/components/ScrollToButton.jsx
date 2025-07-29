import React from 'react';
import { useScrollContext } from './ScrollContext';

const ScrollToButton = ({ targetId, className = '', children }) => {
  const { scroll } = useScrollContext(); // This component actually uses scroll

  const handleClick = () => {
    if (scroll && targetId) {
      // Find target element
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Use locomotive scroll to scroll to target
        scroll.scrollTo(targetElement, {
          offset: -100, // Offset from top
          duration: 1500, // Duration of animation
          easing: [0.25, 0.0, 0.35, 1.0], // Cubic bezier easing
          disableLerp: false // Keep smooth scroll enabled
        });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default ScrollToButton;

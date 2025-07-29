import React from 'react';

const ScrollToButton = ({ targetId, className = '', children }) => {
  const handleClick = () => {
    if (targetId) {
      // Find target element
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Use native smooth scroll
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
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

import React from 'react';

// Simple scroll section wrapper (no parallax effect)
const Parallax = ({ 
  children, 
  className = '',
  ...rest 
}) => {
  return (
    <div 
      data-scroll-section
      className={className}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Parallax;

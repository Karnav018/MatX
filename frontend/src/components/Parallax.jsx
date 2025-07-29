import React from 'react';

// Simple scroll section wrapper (no parallax effect)
const Parallax = ({ 
  children, 
  className = '',
  ...rest 
}) => {
  return (
    <div 
      className={className}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Parallax;

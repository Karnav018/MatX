import React from 'react';

// Parallax component for locomotive-scroll
const Parallax = ({ 
  children, 
  speed = 0.5, 
  direction = 'vertical', 
  delay = 0, 
  className = '',
  ...rest 
}) => {
  const dataScrollDirection = direction === 'horizontal' ? 'horizontal' : undefined;
  
  return (
    <div 
      data-scroll 
      data-scroll-speed={speed}
      data-scroll-delay={delay > 0 ? delay : undefined}
      data-scroll-direction={dataScrollDirection}
      className={className}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Parallax;

import React, { useRef, useEffect } from 'react';
import { LocomotiveScrollProvider } from '@studio-freight/react-locomotive-scroll';
import { useLocation } from 'react-router-dom';
import { ScrollContext } from './ScrollContext';

const ScrollProvider = ({ children }) => {
  const { pathname } = useLocation();
  const containerRef = useRef(null);
  const [scrollInstance, setScrollInstance] = React.useState(null);
  
  // Reset scroll position when route changes
  useEffect(() => {
    if (scrollInstance) {
      scrollInstance.scrollTo(0, { duration: 0, disableLerp: true });
    }
  }, [pathname, scrollInstance]);

  return (
    <ScrollContext.Provider value={{ scroll: scrollInstance, setScroll: setScrollInstance }}>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.075, // Linear interpolation, lower=smoother
          smoothMobile: true,
          smartphone: {
            smooth: true,
            breakpoint: 767,
          },
          tablet: {
            smooth: true,
            breakpoint: 1024,
          },
          reloadOnContextChange: true,
          multiplier: 0.9, // Adjust scroll speed
          class: 'is-revealed'
        }}
        watch={[pathname]}
        containerRef={containerRef}
        onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
        onUpdate={(scroll) => {
          if (!scrollInstance) {
            setScrollInstance(scroll);
          }
        }}
      >
        <div data-scroll-container ref={containerRef} className="scroll-container">
          {children}
        </div>
      </LocomotiveScrollProvider>
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;

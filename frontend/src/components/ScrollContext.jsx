import { createContext, useContext } from 'react';

// Create context for scroll instance
export const ScrollContext = createContext({
  scroll: null,
  setScroll: () => {}
});

// Hook to use the scroll context
export const useScrollContext = () => useContext(ScrollContext);

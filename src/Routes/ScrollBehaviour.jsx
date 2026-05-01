import { useLocation } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";

export const ScrollBehaviour = ({ children }) => {
  const location = useLocation();
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    // Option A: Scroll the whole window
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
    
    // Option B: If you have a specific div that scrolls (common in dashboards)
    // wrapperRef.current.scrollTo(0, 0);
    
  }, [location.pathname]);

  return <div ref={wrapperRef}>{children}</div>;
};

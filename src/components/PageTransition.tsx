
import React from "react";
import { useLocation } from "react-router-dom";

// Simple fade-in animation. Can be extended for more advanced transitions.
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div
      key={location.pathname}
      className="animate-fade-in transition-opacity duration-400"
      // Tailwind animate-fade-in + transition for smooth effect
    >
      {children}
    </div>
  );
};

export default PageTransition;

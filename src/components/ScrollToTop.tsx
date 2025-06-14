
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * When this component is rendered, the window scrolls to top.
 * Optionally, only activates on path change.
 */
const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;

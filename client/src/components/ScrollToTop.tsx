import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * ScrollToTop component that resets scroll position to top on route changes
 */
export function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

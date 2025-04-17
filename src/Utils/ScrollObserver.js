import { useEffect } from "react";

/**
 * ScrollObserver - A utility to detect which section is in view and update active navigation
 * @param {Object} props - The component props
 * @param {Function} props.onSectionChange - Callback when active section changes
 */
const ScrollObserver = ({ onSectionChange }) => {
  useEffect(() => {
    // Options for the Intersection Observer
    const options = {
      root: null, // viewport is the root
      rootMargin: "-50% 0px", // Consider middle of viewport
      threshold: 0.1, // 10% of the item must be visible
    };

    // Callback for Intersection Observer
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Extract section ID from the target
          const sectionId = entry.target.id;
          if (sectionId) {
            onSectionChange(sectionId);
          }
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(handleIntersect, options);

    // Get all sections and observe them
    const sections = document.querySelectorAll(".page-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [onSectionChange]);

  // This component doesn't render anything
  return null;
};

export default ScrollObserver;

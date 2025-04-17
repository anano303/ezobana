import { useEffect } from "react";

const useSmoothScroll = () => {
  const scrollByArrow = () => {
    let pageHeight = window.innerHeight;
    window.scrollBy({
      top: pageHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const arrowBtn = document.getElementById("arrowBtn");

    if (arrowBtn) {
      arrowBtn.addEventListener("click", scrollByArrow);
    }

    return () => {
      if (arrowBtn) {
        arrowBtn.removeEventListener("click", scrollByArrow);
      }
    };
  }, []); // Make sure to include all dependencies

  // For hiding scroll when moving to the first page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        document.body.style.overflowY = "scroll";
      } else {
        document.body.style.overflowY = "hidden";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Make sure to include all dependencies
};

export default useSmoothScroll;

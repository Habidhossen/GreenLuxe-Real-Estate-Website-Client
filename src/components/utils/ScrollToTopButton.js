import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={handleScrollToTop}
      className={`fixed bottom-6 right-6 bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md cursor-pointer transition-transform transform-gpu hover:scale-110 ease-in-out ${
        showButton ? "block" : "hidden"
      }`}
    >
      ▲
    </button>
  );
};

export default ScrollToTopButton;

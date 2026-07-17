import { useEffect, useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

import "./BackToTop.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          className="back-to-top"
          aria-label="Back to top"
          onClick={handleBackToTop}
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          transition={{
            duration: 0.25,
          }}
          whileHover={{
            y: -3,
          }}
          whileTap={{
            scale: 0.92,
          }}
        >
          <HiOutlineArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
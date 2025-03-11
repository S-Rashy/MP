import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  }),
};

const images = [
  "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Slide+1",
  "https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Slide+2",
  "https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Slide+3",
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <AnimatePresence custom={direction} mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          className="slide"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
        />
      </AnimatePresence>
      <button onClick={prevSlide} className="btn left">◀</button>
      <button onClick={nextSlide} className="btn right">▶</button>
    </div>
  );
};

export default Slider;

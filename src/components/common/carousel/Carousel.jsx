import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import btn_point from "../../../images/svg/tehn-point-icon.svg";
import { CaurouselContainer } from "./styled";

const CaurouselComponent = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  let timerId = null;
  useEffect(() => {
    if (!slides.length) {
      return;
    }
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      setDirection(1);
      setCurrentSlide((prevSlide) =>
        prevSlide + 1 < slides.length ? prevSlide + 1 : 0
      );
    }, 500000);

    return () => clearTimeout(timerId);
  }, [currentSlide]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const handleDotClick = (index) => {
    if (index !== currentSlide) {
      clearTimeout(timerId);
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  };

  return (
    <CaurouselContainer>
      <div>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={slides[currentSlide].id}
            src={slides[currentSlide].img}
            alt={slides[currentSlide].desc}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className={"bg_img"}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
          />
        </AnimatePresence>

        <div className="desc">
          <p>{slides[currentSlide].desc}</p>
          <a href={slides[currentSlide].link}>
            <img
              id="btn-point"
              src={btn_point}
              width="59px"
              stroke="#fff"
              fill="#fff"
            />
          </a>
        </div>
      </div>
      <div className="dots">
        {slides.map((slide, i) => (
          <span
            key={slide.id}
            className={i === currentSlide ? "dots_current" : ""}
            onClick={() => handleDotClick(i)}
          ></span>
        ))}
      </div>
    </CaurouselContainer>
  );
};

export { CaurouselComponent };

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaurouselCardContainer } from "./styled/index";
import { ArrowLinkRight } from "../arrowLinkRight/arrowLinkRight";

const CarouselCardComponent = ({ slides = [] }) => {
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
    }, 5000);

    return () => timerId && clearTimeout(timerId);
  }, [currentSlide]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      position: "absolute",
    },
    exit: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1,
      position: "absolute",
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
    <CaurouselCardContainer>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slides[currentSlide].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ width: "100%" }}
          transition={{
            x: { type: "tween", damping: 0.1 },
            opacity: { duration: 0.1 },
          }}
        >
          <div className="card_slide--container">
            <div className="card_slide--img">
              <img
                src={slides[currentSlide].img}
                className={"bg_img"}
                alt={slides[currentSlide].desc}
              />
            </div>
            <div className="card_slide--content">
              <span>{slides[currentSlide].tag} </span>
              <h3> {slides[currentSlide].title} </h3>
              <p> {slides[currentSlide].desc} </p>
              <ArrowLinkRight link={slides[currentSlide].link || "/"} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="dots">
        {slides.map((slide, i) => (
          <span
            key={slide.id}
            className={i === currentSlide ? "dots_current" : ""}
            onClick={() => handleDotClick(i)}
          ></span>
        ))}
      </div>
    </CaurouselCardContainer>
  );
};

export { CarouselCardComponent };
